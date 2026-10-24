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
