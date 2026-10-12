# Portfolio hiring review — October 8, 2026

This is an assessment from a senior recruiter and design hiring reviewer’s perspective, not feedback from an external HR interview or a guarantee of interviews.

## Verdict

The strongest positioning is a product designer who can carry early-stage work into code. The mobile build, onboarding constraint, and contact-management workflow support a conversation about ownership and product judgment. The original presentation made that harder to assess: three advertised studies failed to load, several outcomes were placeholders, and the independent work had almost no explanation.

The revised site supports an initial hiring conversation for product design and design engineering roles. A hiring manager would still ask for original research artifacts, measured outcomes, collaboration examples, and a deeper walkthrough of the strongest project. Copy improvements cannot substitute for that evidence.

## Review findings and changes

| Finding | Hiring risk | Change |
| --- | --- | --- |
| Garga, Toolnest, and Vizzly depended on an unrelated employment-project lookup and returned 404 | Broken primary work links undermine attention to detail | Detail routes now resolve directly from the six-study collection |
| Mobile metrics included bracketed percentages, interview counts, and AI time savings | Unsupported evidence weakens trust | Removed these claims and documented a prospective measurement plan |
| A study dated October 1 reported 30-day results on October 8 | Impossible chronology | Replaced it with delivery evidence and future cohort evaluation |
| Garga, Toolnest, and Vizzly had only brief teasers | Hard to understand the candidate’s reasoning | Added scope, system/workflow decisions, trade-offs, artifacts where available, and next validation |
| Seven entries included a non-interactive UI Blocks card | Unclear curation | Kept six, with three Reepl releases first and three independent projects following |
| Vizzly’s outcome used the name FormPilot | Inconsistent project identity | Canonical `/work/formpilot`, with a permanent redirect from `/work/vizzly` |
| Flat 14px hierarchy, clipped card titles, forced single-line study titles | Slow scanning and mobile overflow risk | Added readable heading levels, wrapping titles, stronger text contrast, and native section navigation |
| Resume redirected to the work section | A recruiter’s core task failed | Added a readable `/resume` page with a one-page downloadable PDF and print styling |
| No site-specific descriptions, canonical URLs, sitemap, or share image | Weak presentation when sharing and indexing | Added metadata, a generated share card, domain-driven sitemap, and preview indexing controls |
| Client reveal logic hid content until hydration | Unnecessary reading delay and script dependency | Content now renders visibly in server HTML |
| Custom video controls offered limited keyboard and seek behavior | Harder to inspect the work | Native controls provide playback, seeking, volume, and fullscreen support |

## Research and its application

Nielsen Norman Group’s hiring research recommends explaining the problem, specific contribution, constraints, iteration, and effects on users and the business. It also favors scannable studies with relevant artifacts. This is established guidance, not a newly discovered 2026 hiring formula. The implementation uses a short project overview followed by decisions and evidence. [5 Steps to Creating a UX-Design Portfolio](https://www.nngroup.com/articles/ux-design-portfolios/).

NN/g also recommends preserving source artifacts, feedback, and measurable accomplishments over time. The remaining evidence requests below follow that guidance; missing material was not replaced with invented interviews or statistics. [How to Maintain a UX Portfolio Over Time](https://www.nngroup.com/articles/maintain-ux-portfolio/).

Figma’s February 2026 research discusses AI-assisted work, craft, ownership, and human judgment. It surveys designers and is not a study proving which portfolio format gets candidates hired. My application is to explain what Claude Code helped with and which design and implementation decisions remained the designer’s responsibility. [State of the Designer 2026](https://www.figma.com/blog/state-of-the-designer-2026/).

## Six retained studies

| Study | Main hiring signal | Evidence boundary |
| --- | --- | --- |
| Reepl Mobile | Native product design and implementation under a short deadline | Screens and implementation narrative; no validated retention uplift |
| Reepl Onboarding | Activation strategy under a pricing constraint | Before/after recordings; no asserted conversion lift |
| Reepl Contacts | 0→1 workflow and information architecture | Interface and integration scope; no asserted revenue effect |
| Garga | Separating computed data from generated interpretation | Chart screenshot and architecture rationale; no accuracy or growth benchmark |
| Toolnest | Task-first utility design and scope control | Word-counter screenshot; no quantified usability gain |
| FormPilot | Human review and explainable AI editing | Workflow narrative and a labeled concept diagram; no hiring-success claim |

## Evidence that would strengthen the next hiring conversation

1. For the strongest Reepl study, add a measured comparison with metric definition, dates, baseline, cohort size, and attribution limits.
2. Add one original research or iteration artifact per lead study and explain the decision it changed.
3. Add named collaborator roles and one example of resolving a real constraint or disagreement.
4. Confirm final employment naming, public-release status, and implementation scope against your records before publishing.
5. Replace FormPilot’s concept diagram with a current product screenshot or short walkthrough when available.

The current live Reepl marketing page describes trial terms differently from the historical onboarding study. The case study’s terms should be read as the design context at the time, not as a current pricing offer. [Reepl](https://reepl.io/).

## Launch state

The site changes are local. The final public domain and hosting destination still need to be supplied. Set `SITE_URL` before the deployment build and check the final domain’s canonical metadata, robots, sitemap, media, and redirects after publishing.

## Verification completed

- `npm run lint` — passed without errors or warnings.
- `npm run build` — passed, including TypeScript and static generation of all six study routes.
- `npm run check:portfolio -- http://localhost:3002` — passed: six study records, unique slugs and section anchors, 17 referenced local assets, 31 production page/asset requests, four permanent legacy redirects, and three genuine 404s.
- Browser checks — all six studies at 390px; home at 320px and 1440px. No horizontal overflow or clipped card titles in those checks. Tested mobile section links, image enlargement, Escape dismissal and returned focus, resume rendering, and persisted theme switching.
- Confirmed native video controls, lazy video loading, optimized responsive images, visible server-rendered content, generated share-card rendering, production response headers, and disabled local-preview indexing.
- The default Turbopack build could not bind a CSS-worker port in this execution environment. The build script now uses Next.js’s supported webpack mode and passes.

The final public-domain deployment and its search metadata have not been verified because no launch destination is configured yet. The downloadable resume PDF was rendered, visually inspected, and checked for extractable text on one A4 page. Browser print-dialog output was not separately verified. External book-cover and music-provider availability is outside the site’s control.
