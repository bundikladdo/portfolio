# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js App Router portfolio. Route components live in `src/app/`: `page.tsx` is the home page, `work/[slug]/page.tsx` handles project details, and `layout.tsx` and `globals.css` define the shared shell and styles. Reusable UI belongs in `src/components/`; portfolio copy and structured content belong in `src/data/site.ts`. Store images and other static assets in `public/`, grouped by purpose (for example, `public/work/` and `public/life/`). Keep content edits in the data file when possible instead of embedding copy in components.

## Build, Test, and Development Commands

The repository has both `pnpm-lock.yaml` and `package-lock.json`; avoid regenerating either unnecessarily.

- `npm run dev` starts the local Next.js development server at `http://localhost:3000`.
- `npm run build` creates a production build and surfaces Next.js or TypeScript build errors.
- `npm run start` serves the built app locally; run it after `npm run build`.
- `npm run lint` runs ESLint with the Next.js Core Web Vitals and TypeScript rules.

There is no test script or dedicated test suite. Run lint and build for application code changes.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Follow the existing formatting: two-space indentation, double quotes, and semicolons. Use `PascalCase` for component files and component names (for example, `Header.tsx`), `camelCase` for variables and functions, and lowercase/kebab-case for route segments and asset names. Prefer the `@/*` alias for imports from `src/`. Keep styling consistent with `src/app/globals.css` and the established visual tokens in `design_guidelines.json`.

## Testing Guidelines

No test framework or coverage threshold is configured. For UI changes, run lint and build, then check the affected page in `npm run dev` at desktop and mobile widths. Confirm changed images resolve from `public/` and work detail routes load.

## Commit & Pull Request Guidelines

Git history is unavailable, so no repository-specific commit convention can be confirmed. Use short, imperative subjects, optionally prefixed by scope (for example, `content: update project links`). Pull requests should explain the change, list validation, link related issues, and include screenshots for visual updates.

## Content & Configuration

Keep portfolio copy in `src/data/site.ts`; use `public/kartik.jpg` for the headshot and place media in the matching `public/` subdirectory. Do not commit secrets. Update redirects in `next.config.ts` when route behavior changes.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
