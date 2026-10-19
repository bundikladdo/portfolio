# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run lint` — ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)
- `npm run build` — production build; also the only type check (`tsc` runs as part of `next build`)

There are no tests. Validate changes with lint + build, then view the page in dev at desktop and mobile widths.

Stack: Next.js 16.3 (App Router), React 19.2, Tailwind CSS v4 (via `@tailwindcss/postcss`, no `tailwind.config`), TypeScript strict. Route `params` are a `Promise` and must be awaited (see `src/app/work/[slug]/page.tsx`).

## Architecture

### Content flows from one data file
`src/data/site.ts` holds all copy and drives every page. The work/case-study model uses three separate collections keyed by `slug`, and they have to agree:

- `selectedWork: WorkCard[]`: the tiles on `/work`. `featuredWork` picks entries from it **by array index** (`selectedWork[1]`, …) for the home page, so reordering `selectedWork` changes which tiles are featured.
- `jobs[].featured` / `jobs[].projects` / `sideProjects` (`Project`): supply the `project` record used for titles and metadata on detail pages. `sideProjects` holds work that isn't tied to a job (currently Garga).
- `caseStudies: Record<slug, CaseStudy>`: detail page content. `generateStaticParams` builds `/work/[slug]` from its keys.

`/work/[slug]` calls `notFound()` unless the slug is in **both** `caseStudies` and a `Project` list (a `jobs` entry or `sideProjects`), so adding a case study means adding all three entries. A `WorkCard` links to its detail page only when it has `case: true`. The prev/next switcher (on case study pages and `/about`) cycles through `selectedWork` entries that have `case: true` and a `caseStudies` entry.

A `CaseStudy` renders one of two ways: with `story`, it's a long-form layout (sections, each optionally carrying an image/`variant: "phone"`, metrics, a video, or a video placeholder, plus a `CheckpointNav` scrollspy built from section ids). Without `story`, it falls back to a short problem / shipped / outcome layout.

### Tile visuals
`WorkTile` renders `visual: "dotted-grid"` cards through `ReeplThumbnail` (one `artwork`, or a fanned set of `artworks` phone screenshots; a portrait image gets a phone-specific class). Other cards show a plain `image`, and `/backgrounds/pixel-blast.png` gets pixelated rendering.

### Design / Code views
The site has two versions of some of its copy. **Design** is the default and the site's identity: design terms and design decisions only. **Code** is for design-engineering and AI-assisted roles: stack, AI workflow, implementation. Keep technical detail out of Design copy.

- Both versions are always rendered, and CSS shows one based on `html[data-view]`. Mark an element with `data-view-only="design" | "code"`. In data, use `ViewText` (`string | { design, code }`) rendered through `<ViewCopy>`, or `view?: View` on case study sections and metadata rows to show them in one view only.
- The view comes from `?view=` in the URL, then `sessionStorage["portfolio-view"]`, then defaults to design (`view-init` script in `layout.tsx`). `ViewSwitch` (the floating pill) writes `?view=code` to the URL so the address bar can be shared. `/code` and `/design` redirect to those URLs (`next.config.ts`).
- The pill only appears on pages containing a `data-view-only` element (`body:has(...)` in `globals.css`).
- `Script strategy="beforeInteractive"` runs just before hydration, **not** before first paint. Anything outside `main` that depends on `data-view` or `data-theme` can flash; `ViewSwitch` stays hidden until it hydrates for this reason.

### Global behaviors you don't see in page code
- **Reveal animation** (`src/app/template.tsx`): on every route change it finds text, media, links, and buttons inside `main` (using a hardcoded selector list) and staggers them in with an IntersectionObserver. New elements inside `main` animate automatically. To exempt one, add its container to the `.closest(...)` exclusion, which currently covers `.checkpoint-nav` and `.brand-tip-card`. It respects `prefers-reduced-motion`.
- **Theme**: an inline `beforeInteractive` script in `layout.tsx` sets `html[data-theme]` from `localStorage["portfolio-theme"]`, falling back to the system preference. `ThemeToggle` writes the same key. In `globals.css`, the dark tokens are defined twice, once under `:root[data-theme="dark"]` and once under `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])`, so any token change has to be made in both blocks.
- **Smooth scroll**: Lenis wraps the whole app (`SmoothScroll` in the layout, with `anchors: true`).

### Styling
`src/app/globals.css` (~1.9k lines) is the real design system. It holds the CSS custom properties (`--canvas`, `--ink`, `--body`, `--muted`, `--hairline`, `--surface`, `--accent`, …), exposes them to Tailwind via `@theme inline` (`bg-canvas`, `text-muted`, `border-hairline`, …), and defines named component classes (`.frame`, `.pane`, `.hero`, `.work-card*`, `.case-study-*`, `.t-hero`/`.t-lede`/`.t-section`, `.btn-*`). Components combine those classes with Tailwind utilities and arbitrary values like `text-[var(--muted)]`. The palette is the cream/ink/orange set from the README, with a dark theme.

`design_guidelines.json` is out of date. It describes a stone palette and says "light only", which no longer matches `globals.css`. When they conflict, follow the tokens in `globals.css`.

### Unused components
`Header` (and the `SoundToggle` it renders) and `GitTrail` aren't imported by any route. `CheckpointNav` is commented out on the home page but is active on case study pages.

### Known lint errors
`npm run lint` reports two existing `react-hooks/set-state-in-effect` errors in `ThemeToggle.tsx` and `SoundToggle.tsx`. The build still passes. `Header.tsx` shows the lint-clean pattern (`useSyncExternalStore`).
