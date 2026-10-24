import { chromium } from "@playwright/test";
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
  args: ["--no-sandbox"],
});
try {
  const page = await browser.newPage({ colorScheme: "light" });
  const base = process.argv[2] || "http://127.0.0.1:3000";
  const response = await page.goto(new URL("/resume", base).href, {
    waitUntil: "networkidle",
  });
  if (!response?.ok())
    throw new Error(
      "Résumé page did not load successfully. Start the portfolio server first.",
    );
  await page.emulateMedia({ media: "print" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: "public/lingesh-sashi-kumar-resume.pdf",
    format: "A4",
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: false,
    tagged: true,
  });
  console.log(
    "Generated public/lingesh-sashi-kumar-resume.pdf from the printable HTML résumé.",
  );
} finally {
  await browser.close();
}
