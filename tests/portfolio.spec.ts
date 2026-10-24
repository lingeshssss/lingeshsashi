import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/about",
  "/projects",
  "/projects/campus-os",
  "/projects/marketpilot-ai",
  "/experience",
  "/resume",
  "/contact",
];
for (const theme of ["light", "dark"] as const) {
  test(`${theme}: routes, accessibility, layout, internal links`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: theme, reducedMotion: "reduce" });
    const destinations = new Set<string>();
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      const scan = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        scan.violations,
        `${route}: ${JSON.stringify(scan.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })))}`,
      ).toEqual([]);
      for (const href of await page
        .locator("a")
        .evaluateAll((links) =>
          links.map((a) => a.getAttribute("href") || ""),
        )) {
        expect(href).not.toBe("");
        expect(href).not.toBe("#");
        if (href.startsWith("/")) destinations.add(href);
      }
    }
    for (const href of destinations)
      expect((await page.request.get(href)).status(), href).toBe(200);
  });
}
test("theme choice persists through navigation and reload", async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.goto("/about");
  await expect(
    page.getByRole("button", { name: "Switch to light theme" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});
test("keyboard skip link and responsive navigation", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  expect(await page.evaluate(() => document.activeElement?.id)).toBe("main");
  if (testInfo.project.name === "mobile") {
    // Closed menu links stay out of the focus order and accessibility tree.
    await expect(page.locator("#main-nav a").first()).toBeHidden();
    await page.getByRole("button", { name: "Menu", exact: true }).click();
    await expect(
      page.getByRole("navigation", { name: "Main navigation" }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("button", { name: "Menu", exact: true }),
    ).toBeFocused();
    await page.getByRole("button", { name: "Menu", exact: true }).click();
  }
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Projects", exact: true })
    .click();
  await expect(page).toHaveURL("/projects");
  if (testInfo.project.name === "mobile")
    await page.getByRole("button", { name: "Menu", exact: true }).click();
  await expect(
    page
      .getByRole("navigation")
      .getByRole("link", { name: "Projects", exact: true }),
  ).toHaveAttribute("aria-current", "page");
});
test("project filtering, contact, print and 404", async ({ page }) => {
  await page.goto("/projects");
  await page.getByRole("button", { name: "Web applications" }).click();
  await expect(
    page.getByRole("button", { name: "Web applications" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.locator(".project-card").click();
  await expect(page).toHaveURL("/projects/campus-os");
  await expect(
    page.getByRole("link", { name: "Visit CampusOS" }),
  ).toHaveAttribute("href", "https://www.campusos.dev");
  await page.goto("/contact");
  await expect(
    page.getByRole("link", { name: "Connect on LinkedIn" }),
  ).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/lingesh-sashi-kumar-b62770265/",
  );
  await expect(page.locator("form")).toHaveCount(0);
  await page.goto("/resume");
  await page.evaluate(() => {
    window.print = () => {
      document.body.dataset.printed = "true";
    };
  });
  await page.getByRole("button", { name: "Print this page" }).click();
  await expect(page.locator("body")).toHaveAttribute("data-printed", "true");
  await page.emulateMedia({ media: "print" });
  await expect(page.locator("header")).toBeHidden();
  await expect(page.locator(".resume-sheet")).toBeVisible();
  await expect(page.locator(".resume-actions")).toBeHidden();
  await page.emulateMedia({ media: "screen" });
  const response = await page.goto("/missing-page");
  expect(response?.status()).toBe(404);
  await page.getByRole("link", { name: "Back to home" }).click();
  await expect(page).toHaveURL("/");
});
test("social image and SEO endpoints", async ({ request }) => {
  expect(
    (await request.get("/opengraph-image")).headers()["content-type"],
  ).toContain("image/png");
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
});

test("narrow phone and tablet layouts remain within viewport", async ({
  page,
}) => {
  for (const width of [320, 768]) {
    await page.setViewportSize({ width, height: 1024 });
    for (const route of routes) {
      await page.goto(route);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${route} at ${width}px`,
      ).toBe(true);
    }
  }
});

test("résumé facts, credential status, PDF download, and project evidence", async ({
  page,
  request,
}) => {
  await page.goto("/resume");
  await expect(
    page.getByText(
      "School of Arts and Sciences · B.S. in Computer Science and Data Science (CS&DS)",
    ),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Cybersecurity Intern", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Jun 2025 – Aug 2025", { exact: false }),
  ).toBeVisible();
  await expect(page.locator(".credential")).toHaveCount(5);
  await expect(page.locator(".credential-status.active")).toHaveCount(4);
  const expired = page
    .locator(".credential")
    .filter({ hasText: "Azure Data Scientist Associate" });
  await expect(expired.getByText("Expired", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Download Résumé" }),
  ).toHaveAttribute("download", "");
  const pdf = await request.get("/lingesh-sashi-kumar-resume.pdf");
  expect(pdf.status()).toBe(200);
  expect(pdf.headers()["content-type"]).toContain("application/pdf");
  expect((await pdf.body()).subarray(0, 5).toString()).toBe("%PDF-");
  await page.goto("/projects");
  await expect(page.locator(".project-card")).toHaveCount(2);
  await page.getByRole("button", { name: "AI applications" }).click();
  await expect(page.locator(".project-card")).toHaveCount(1);
  await page.locator(".project-card").click();
  await expect(page).toHaveURL("/projects/marketpilot-ai");
  await expect(
    page.getByRole("heading", { name: "Key features" }),
  ).toBeVisible();
  await expect(page.locator("main")).toContainText("Claude API");
  await expect(page.locator("main")).not.toContainText("marketing");
  await expect(
    page.getByRole("link", { name: /Visit MarketPilot/ }),
  ).toHaveCount(0);
  await page.goto("/contact");
  await expect(page.getByRole("link", { name: /SAY HELLO/ })).toHaveAttribute(
    "href",
    "mailto:lingeshsashi@gmail.com",
  );
});

test("About page music, production, and interests content", async ({
  page,
}) => {
  await page.goto("/about");
  await expect(
    page.getByRole("heading", { name: "A little about me" }),
  ).toBeVisible();
  await expect(page.locator(".prose")).toContainText(
    "B.S. in Computer Science and Data Science (CS&DS)",
  );
  const future = page.locator(".music-feature");
  await expect(
    future.getByRole("heading", { name: "Future", exact: true }),
  ).toBeVisible();
  await expect(future.locator(".album-index li")).toHaveCount(5);
  await expect(
    future.locator("li").filter({ hasText: "WE DON’T TRUST YOU" }),
  ).toContainText("Future & Metro Boomin");
  for (const title of ["MIXTAPE PLUTO", "High Off Life", "The WIZRD", "DS2"])
    await expect(future.getByText(title, { exact: true })).toBeVisible();
  const drake = page.locator(".music-drake");
  await expect(
    drake.getByRole("heading", { name: "Drake", exact: true }),
  ).toBeVisible();
  await expect(drake.locator(".album-covers li")).toHaveCount(6);
  await expect(
    drake.locator("li").filter({ hasText: "Her Loss" }),
  ).toContainText("Drake & 21 Savage");
  for (const title of [
    "ICEMAN",
    "Views",
    "Scorpion",
    "For All the Dogs",
    "Certified Lover Boy",
  ])
    await expect(drake.locator("cite").filter({ hasText: title })).toHaveCount(
      1,
    );
  await expect(drake).toContainText("(CLB)");
  await expect(page.locator(".also-enjoy")).toContainText(
    "I also enjoy NAV, Metro Boomin, and Drake.",
  );
  const production = page.locator(".production");
  await expect(production).toContainText("music production");
  await expect(production).toContainText("Southside");
  await expect(production).toContainText("ATL Jacob");
  await expect(production.locator("figcaption")).toContainText(
    "does not play audio",
  );
  await expect(
    page.getByRole("heading", { name: "Engineering in motion." }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Ideas into action." }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "@2fast-m3" })).toHaveAttribute(
    "href",
    "https://www.youtube.com/@2fast-m3",
  );
  // Cover art: every album has a loaded image with alt text; no players.
  await expect(
    page.locator(".music, .production").locator("audio, video, iframe"),
  ).toHaveCount(0);
  const covers = page.locator(".music img");
  await expect(covers).toHaveCount(11);
  await page.locator(".artwork-credit").scrollIntoViewIfNeeded();
  for (const img of await covers.all()) {
    await img.scrollIntoViewIfNeeded();
    await expect(img).toHaveAttribute("alt", /cover/);
    await expect
      .poll(() => img.evaluate((el: HTMLImageElement) => el.naturalWidth))
      .toBeGreaterThan(0);
  }
  await expect(page.locator(".artwork-credit")).toContainText(
    "respective artists and labels",
  );
  await expect(
    page.locator(".music, .production").locator("button, a"),
  ).toHaveCount(0);
  await expect(page.locator(".waveform")).toHaveAttribute(
    "aria-hidden",
    "true",
  );
  expect(await page.locator("main").innerText()).not.toMatch(
    /\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/,
  );
});

const revealTargets = "[data-reveal], [data-reveal-stagger] > *";
async function hiddenRevealCount(page: import("@playwright/test").Page) {
  return page.locator(revealTargets).evaluateAll(
    (els) =>
      els.filter((el) => {
        const style = getComputedStyle(el);
        return style.opacity !== "1" || style.transform !== "none";
      }).length,
  );
}

test("reduced motion shows all content immediately without animation", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of ["/", "/about", "/experience", "/contact"]) {
    await page.goto(route);
    expect(await page.locator(revealTargets).count()).toBeGreaterThan(0);
    // Nothing scrolled, yet every below-the-fold reveal target is shown.
    expect(await hiddenRevealCount(page), route).toBe(0);
    expect(
      await page
        .locator("h1")
        .evaluate((el) => getComputedStyle(el).animationName),
    ).toBe("none");
  }
  expect(
    await page
      .locator(".button.primary")
      .first()
      .evaluate((el) => getComputedStyle(el).transitionDuration),
  ).toMatch(/^0s/);
});

test("scroll reveals show content on scroll and on keyboard focus", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/about");
  await expect(page.locator("html")).toHaveAttribute("data-hydrated", "");
  const connect = page.locator(".connect");
  await expect(connect).not.toHaveAttribute("data-revealed");
  // Tabbing to a link inside an unrevealed section must make it visible.
  await page
    .locator(".connect .button")
    .evaluate((el: HTMLElement) => el.focus({ preventScroll: true }));
  await expect(connect).not.toHaveAttribute("data-revealed");
  await expect(connect).toHaveCSS("opacity", "1");
  const covers = page.locator(".album-covers");
  await covers.scrollIntoViewIfNeeded();
  await expect(covers).toHaveAttribute("data-revealed", "");
  await expect(covers.locator("li").last()).toHaveCSS("opacity", "1");
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 500) {
    await page.evaluate((y) => scrollTo(0, y), y);
    await page.waitForTimeout(50);
  }
  await expect(
    page.locator(
      "[data-reveal]:not([data-revealed]), [data-reveal-stagger]:not([data-revealed])",
    ),
  ).toHaveCount(0);
  await expect.poll(() => hiddenRevealCount(page)).toBe(0);
  await page.evaluate(() => {
    document
      .querySelectorAll("[data-revealed]")
      .forEach((el) => el.removeAttribute("data-revealed"));
  });
  await page.emulateMedia({ media: "print" });
  expect(await hiddenRevealCount(page)).toBe(0);
});

test("content and navigation remain available without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("/about");
  await page.waitForTimeout(1000);
  expect(await hiddenRevealCount(page)).toBe(0);
  await expect(page.locator(".album-covers li").last()).toBeVisible();
  await expect(page.getByRole("button", { name: "Menu" })).toBeHidden();
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  await expect(
    nav.getByRole("link", { name: "Contact", exact: true }),
  ).toBeVisible();
  await expect(
    nav.getByRole("link", { name: "Contact", exact: true }),
  ).toHaveCSS("opacity", "1");
  await context.close();
});
