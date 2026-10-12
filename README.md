# Kartik Jangid — portfolio

A Next.js App Router portfolio with six static case-study routes, an about page, and a readable resume with a downloadable PDF. Copy lives in `src/data/site.ts`; images and recordings live in `public/`.

## Develop and verify

Use Node.js 22.13 or newer for the TypeScript content checker. Install from the existing npm lockfile with `npm ci` when setting up a new checkout; avoid regenerating either lockfile.

```bash
npm run dev
npm run lint
npm run check:portfolio
npm run build
npm run start
```

`build` uses Next.js’s supported webpack bundler because Turbopack’s CSS worker cannot bind its local port in the current restricted environment. The app still uses the Next.js App Router and static generation.

To check a running production server, including all six studies, media, redirects, and genuine 404 responses:

```bash
npm run check:portfolio -- http://localhost:3000
```

Check desktop and mobile in a browser too: contents links, image enlargement and Escape, video playback, resume printing, and theme switching.

## Launch configuration

Set **`SITE_URL`** to the final public HTTPS origin in your hosting project **before building**, for example your own domain without a path. Vercel’s `VERCEL_PROJECT_PRODUCTION_URL` is used when `SITE_URL` is absent. This config drives canonicals, share-image URLs, robots, and the sitemap.

Without a public origin, local builds use localhost metadata and deliberately disable indexing. Vercel preview environments also disable indexing. For preview environments on another host, do not set a public production origin. Build again after changing the domain; these pages are prerendered.

Deploy to a host with Next.js support using `npm run build` and `npm run start`. No database, email service, or private API keys are required. The contact CTA uses `mailto:`. Hosting and the public domain are not connected in this checkout yet.

Canonical case-study paths:

- `/work/reepl-mobile`
- `/work/reepl-onboarding`
- `/work/reepl-contacts`
- `/work/garga`
- `/work/toolnest`
- `/work/formpilot`

Legacy `/work/reepl`, `/work/vizzly`, `/work/ui-blocks`, and `/info` paths have permanent redirects. Unknown project slugs return 404. `/resume` is a readable page with **Download PDF** and **Print / save PDF**; the original DOCX remains in `public/` as an existing artifact and is no longer the primary resume link.

## Content evidence

Draft percentages, interview counts, estimated AI time savings, and the premature 30-day mobile outcome were removed. Add outcome numbers only with a source, date range, cohort/sample, metric definition, and your contribution. The independent studies have less supporting research material than the Reepl studies; no research findings or hiring outcomes were invented to fill those gaps.

The FormPilot card is labeled as a concept diagram, not a product screenshot. Existing product screenshots and silent onboarding recordings are used elsewhere. External book covers and the optional music preview on About depend on their providers.

See [the hiring review and research](docs/portfolio-review.md) for the assessment and remaining content improvements.

To regenerate the public resume PDF after changing resume copy, use `scripts/build-resume.py` with the bundled PDF runtime (or a Python environment with ReportLab). Pipe JSON containing the `site`, `resume`, `jobs`, and `resumeSkills` exports from `src/data/site.ts` into the script. Generation is an authoring step; hosting does not need Python. Render and inspect the updated PDF before publishing it.
