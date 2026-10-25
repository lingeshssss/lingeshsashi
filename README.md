# Lingesh Sashi Kumar — portfolio

A personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. Six main pages, CampusOS and MarketPilot AI detail pages, custom 404, generated social image, and light/dark themes. Portfolio content is statically rendered; there is no contact backend or database.

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

## Design system

The visual direction comes from the BMW M8 Competition Gran Coupe. The owner’s photos of the car were used only as references and are not published or stored in this repository. Instead, `lib/cars.ts` holds original line drawings (front three-quarter and head-on) traced over those photos in each photo’s own pixel space, plus the traced roofline used as the section contour rule. Light theme: frozen white/silver paint tones; dark theme: carbon and night-studio tones; one signal-red accent (the headlight signature in the drawings, buttons, and markers). Archivo (variable width axis, condensed for display) and IBM Plex Mono (instrument-style labels) are self-hosted via `next/font`. The site is independent and not affiliated with BMW.

## Motion

Motion tokens (durations, easing including `--ease-drive`, stagger, distance) live at the top of `app/globals.css`; animations use transform, opacity, and SVG stroke drawing. The homepage reveal (the traced car draws itself line by line while the headline rises out of a mask) and the shared page-introduction sequence are CSS-only and play once. Drawings and contour rules use `data-reveal="line"` to trace themselves in as they scroll into view. Scroll reveals use `data-reveal` (single element) or `data-reveal-stagger` (children in sequence); `components/motion.tsx` marks them `data-revealed` via IntersectionObserver. Hidden states apply only while the head script's `motion-ready` class is present and `prefers-reduced-motion` is not `reduce`; if the app does not hydrate within four seconds, the classes are removed. Without JavaScript, content is visible and the mobile navigation is listed inline. Focused content and printed pages are never hidden. Reduced-motion users get no animations or transitions.

## Content and evidence

Edit `lib/content.ts`. `missingContent` is a private editorial checklist (never rendered into public pages). `pendingProjectSources` retains supplied sources still needing review.

- The uploaded `Lingesh_Sashi_Kumar_Resume.docx` is the primary source for education, dated internships, technical skills, project implementation, and leadership details. Its phone number is excluded from all public pages and downloads. The original DOCX is not stored in this repository or served publicly.
- The exact degree is B.S. in Computer Science and Data Science (CS&DS), School of Arts and Sciences, expected May 2030. NJCCIC’s full organization name and the Cybersecurity Intern title and dates come from the résumé. Codestax and Prince Martial Arts roles are also included.
- The five unique Microsoft certifications, earned dates, and statuses come from the supplied credential screenshot. It shows four active certifications and an **expired** Azure Data Scientist Associate credential. This is a record supplied by the owner, not a live verification of current status; update it when credentials renew or expire. Exact exam codes are not treated as additional certifications. No exact expiry date is invented for the expired credential.
- CampusOS: implementation, stack, and contributions now follow the résumé. The supplied public URL previously resolved to sign-in; its screenshot is `public/campusos-sign-in.webp`. Authenticated features and source code have not been independently tested.
- MarketPilot AI: the résumé describes a Python / Claude API market-analysis assistant, correcting the earlier marketing-app lead. Its résumé-backed case study is published, but the protected deployment URL is not exposed as a public demo. No investment returns or recommendation accuracy are claimed.
- Client website work and founder/robotics/karate context come from the original brief where not detailed in the résumé. Client names, examples, metrics, and unprovided dates remain withheld.
- About-page music, production, car, and entrepreneurship interests (`music` and `interests` in `lib/content.ts`) are the owner’s stated preferences. Album titles use official styling; credits and release years were checked against public discography records (collaborations: Future & Metro Boomin’s *WE DON’T TRUST YOU*, Drake & 21 Savage’s *Her Loss*; *ICEMAN* is Drake’s solo album released May 15, 2026). Album cover art was supplied by the owner and lives in `public/albums/` (resized to 720px JPEGs, served through `next/image`). It is shown only to identify each release, with a credit line on the page; the artwork belongs to the respective artists and labels. For All the Dogs uses its Scary Hours Edition cover, as supplied. Each cover has a CSS-drawn record that slides out on reveal. Streaming links and audio are intentionally omitted, and the waveform and step-sequencer graphics are decorative. No listening data, released tracks, equipment, or industry affiliations are claimed.
- Email comes from the résumé. LinkedIn, GitHub, and YouTube identities come from the owner. The Microsoft credential profile path is visible in the supplied screenshot; individual credential verification URLs are still needed.

### Public résumé PDF

`public/lingesh-sashi-kumar-resume.pdf` is the owner’s uploaded PDF résumé with the phone number removed by true redaction (the text is deleted, not covered) and the contact line re-set as “email | New Brunswick, NJ”. All other content is unchanged. The PDF lists certifications by earned date only; the HTML résumé page continues to show active/expired status.

To replace it with a newer résumé, redact the phone number before committing, or ask an assistant to do so. Confirm with `pdftotext` or a text search that no phone number remains.

Alternatively, `npm run resume:pdf` regenerates the file from the HTML résumé page instead, which overwrites the uploaded version. To use it, first build and start the updated site, then run in another terminal:

```sh
npm run resume:pdf
```

The export script reads the local `/resume` page with Chromium and its print stylesheet. It does not upload the source document or contact a third-party converter. An optional base URL argument supports another local port: `npm run resume:pdf -- http://127.0.0.1:3100`. Set `CHROMIUM_PATH` where needed, as for browser tests. Restart the production server after the first export so Next.js discovers the new public file. Review the generated PDF and rerun checks before committing it. Print controls are excluded from the PDF.

### Still needed

1. Source repositories, independently tested release status, challenges/lessons, and supported outcomes for projects; an accessible MarketPilot preview or screenshots.
2. Individual credential verification URLs and the Data Scientist credential’s exact expiry date, if desired. Maintain statuses as credentials change.
3. Calendar dates for client work, volunteer teaching, and leadership; client display permission and samples.
4. Optional portrait and the real portfolio domain for `SITE_URL`.
5. Optional delivery-service configuration only if a server-side contact form is requested.

## Contact

The contact page has a real `mailto:` link to the email in the résumé, alongside LinkedIn, GitHub, and YouTube links. No form is shipped without configured delivery; there is no simulated success state. A future form requires a server route, delivery provider credentials kept server-side, input validation, accessible feedback, distributed rate limiting, spam protection, and delivery success/failure integration tests before it is exposed. Provider credentials must never enter `NEXT_PUBLIC_*` variables or version control.

## Deployment

Deploy the repository to Vercel with the Next.js preset, or any Node hosting service supporting Next.js. Build command: `npm run build`. Start command for a Node server: `npm start`. Do not use `next export`: generated image routes use Next.js runtime support.

Copy `.env.example` to `.env.local` locally or configure the same variable in the host. `SITE_URL` must be the real absolute portfolio origin, using HTTPS for production. No secret is required for the current site. Do not use CampusOS's domain as the portfolio canonical. Rebuild after setting `SITE_URL` so canonical metadata, sitemap URLs, and social-image URLs use the correct domain. Without it, canonical URLs are omitted and the sitemap is empty; Next.js may warn about the social-image origin during local builds.

After deployment, smoke-test every route and verify the social image, sitemap, canonical tags, and external destinations from the deployed origin. Deployment and Git push were not performed as part of local implementation.
