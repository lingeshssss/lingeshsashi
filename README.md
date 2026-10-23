# Lingesh Sashi Kumar — portfolio

A personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. Six main pages, a CampusOS detail page, custom 404, generated social image, and light/dark themes. Portfolio content is statically rendered; there is no contact backend or database.

## Local development

Use Node.js 22 or 24 LTS and npm. The lockfile records the installed versions.

```sh
npm ci
npm run dev
```

For a production server:

```sh
npm run build
npm start
```

The server uses port 3000. `PORT` can override it. In a restricted cloud machine, use `npm ci --cache /tmp/portfolio-npm-cache` if the default npm cache is not writable. Use the existing checkout; a new worktree is unnecessary.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

Playwright checks desktop and mobile routes in both themes, WCAG A/AA automated accessibility, overflow, internal links, project filtering, keyboard navigation, theme persistence, print behavior, contact destinations, 404, and SEO endpoints. Tests start a production server automatically when one is not already running; build first. This cloud machine supplies Chromium at `/usr/bin/chromium`. Elsewhere install Chromium with `npx playwright install chromium`, locate its executable with `node -e "console.log(require('@playwright/test').chromium.executablePath())"`, and set `CHROMIUM_PATH` to that path when running tests. Automated accessibility checks complement human review.

## Content and evidence

Edit `lib/content.ts`. `missingContent` is a private editorial checklist (never rendered into public pages). `pendingProjectSources` retains supplied sources still needing review.

- Background statements come from the owner's brief; no official degree, internship dates or title, metrics, credential claims, or testimonials are inferred.
- CampusOS: the supplied public URL resolves to sign-in. Its real public-page screenshot is stored in `public/campusos-sign-in.webp`. Schedule organization, textbook discovery, and personalized tools are proposed areas from the owner's brief, not tested app capabilities. No stack, code contributions, or outcomes are claimed.
- MarketPilot: the supplied preview redirects to Vercel deployment protection. It is withheld until there is a public preview, source code, or a documented project account. No attempt was made to bypass access controls.
- Client websites and certifications are withheld pending supporting information and display permission where applicable.
- LinkedIn, GitHub, and YouTube use owner-supplied profile identities. CampusOS's public page was checked; LinkedIn and YouTube account ownership has not been independently authenticated.
- The HTML résumé is a background summary, not a transcription of an unseen PDF. No download button is shown. When the résumé arrives, reconcile the page, then add the real PDF under `public/` and connect `profile.resumePdf` to a download link. Do not publish phone or home address.

### Still needed

1. Original résumé PDF, exact education title, professional role details, dates, and approved responsibilities.
2. Project repositories, implementation status, stack, contribution details, decisions, challenges, and supported results; accessible MarketPilot preview.
3. Credential verification links and completion dates; check overlapping Microsoft credentials before adding a certification section.
4. Optional portrait, public email, and permission to display client work.
5. Actual portfolio domain for `SITE_URL`.

## Contact

The working contact action opens the supplied LinkedIn profile. GitHub and YouTube links are also available. No form is shipped because no email or delivery service was supplied. There is no fake success state. If an email is provided, add it to `profile` and expose a mail link. A future form requires a server route, delivery provider credentials kept server-side, input validation, accessible feedback, distributed rate limiting, spam protection, and delivery success/failure integration tests before it is exposed. Provider credentials must never enter `NEXT_PUBLIC_*` variables or version control.

## Deployment

Deploy the repository to Vercel with the Next.js preset, or any Node hosting service supporting Next.js. Build command: `npm run build`. Start command for a Node server: `npm start`. Do not use `next export`: generated image routes use Next.js runtime support.

Copy `.env.example` to `.env.local` locally or configure the same variable in the host. `SITE_URL` must be the real absolute portfolio origin, using HTTPS for production. No secret is required for the current site. Do not use CampusOS's domain as the portfolio canonical. Rebuild after setting `SITE_URL` so canonical metadata, sitemap URLs, and social-image URLs use the correct domain. Without it, canonical URLs are omitted and the sitemap is empty; Next.js may warn about the social-image origin during local builds.

After deployment, smoke-test every route and verify the social image, sitemap, canonical tags, and external destinations from the deployed origin. Deployment and Git push were not performed as part of local implementation.
