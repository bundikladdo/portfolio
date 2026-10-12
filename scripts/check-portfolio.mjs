import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { aboutSnaps, caseStudies, getCaseStudy, selectedWork } from "../src/data/site.ts";

assert.equal(selectedWork.length, 6, "Keep exactly six portfolio case studies");
assert.equal(new Set(selectedWork.map(({ slug }) => slug)).size, 6, "Slugs must be unique");
assert.deepEqual(Object.keys(caseStudies).sort(), selectedWork.map(({ slug }) => slug).sort(), "Cards and detail routes must match");
assert.equal(getCaseStudy("constructor"), undefined);
assert.equal(getCaseStudy("__proto__"), undefined);

const assets = new Set(["/kartik.jpg", "/kartik-jangid-resume.pdf", "/work/reepl-case-study/onboarding-thumbnail.svg", ...aboutSnaps.map(({ src }) => src)]);
function findAssets(value) {
  if (!value || typeof value !== "object") return;
  for (const [key, item] of Object.entries(value)) {
    if (["src", "image", "poster"].includes(key) && typeof item === "string" && item.startsWith("/")) assets.add(item);
    if (typeof item === "object") findAssets(item);
  }
}
for (const work of selectedWork) {
  assert.match(work.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  const study = getCaseStudy(work.slug);
  assert.ok(study.role && study.scope && study.evidence && study.outcome);
  assert.ok(study.story.sections.length >= 4, `${work.slug}: include decisions and evaluation, not just a teaser`);
  const ids = study.story.sections.map(({ id }) => id);
  assert.equal(new Set(ids).size, ids.length, `${work.slug}: section anchors must be unique`);
  assert.doesNotMatch(JSON.stringify(study), /\[\d|video placeholder|coming soon|lorem ipsum/i, `${work.slug}: remove draft placeholders`);
  findAssets(work);
  findAssets(study);
}
for (const asset of assets) await access(fileURLToPath(new URL(`../public${asset}`, import.meta.url)));
console.log(`Content checks passed: six studies, unique slugs and section anchors, ${assets.size} local assets, no draft placeholders.`);

const baseUrl = process.argv[2];
if (baseUrl) {
  const paths = ["/", "/about", "/work", "/resume", "/robots.txt", "/sitemap.xml", "/opengraph-image", "/icon", ...selectedWork.map(({ slug }) => `/work/${slug}`), ...assets];
  for (const path of paths) {
    const response = await fetch(new URL(path, baseUrl));
    assert.equal(response.status, 200, `${path}: expected 200, received ${response.status}`);
    if (selectedWork.some(({ slug }) => path === `/work/${slug}`)) {
      const html = await response.text();
      assert.ok(html.includes("The project at a glance"), `${path}: detail page is missing`);
      assert.ok(html.includes(`href="/work/${selectedWork[(selectedWork.findIndex(({ slug }) => path.endsWith(slug)) + 1) % 6].slug}"`), `${path}: next study link is missing`);
      assert.ok(html.includes('rel="canonical"'), `${path}: canonical metadata is missing`);
    }
  }
  for (const [from, to] of [["/info", "/about"], ["/work/reepl", "/work/reepl-onboarding"], ["/work/vizzly", "/work/formpilot"], ["/work/ui-blocks", "/work"]]) {
    const response = await fetch(new URL(from, baseUrl), { redirect: "manual" });
    assert.equal(response.status, 308, `${from}: permanent redirect is missing`);
    assert.equal(new URL(response.headers.get("location"), baseUrl).pathname, to);
  }
  for (const path of ["/work/not-a-project", "/work/constructor", "/missing-page"]) {
    const response = await fetch(new URL(path, baseUrl));
    assert.equal(response.status, 404, `${path}: unknown routes must return 404`);
  }
  console.log(`HTTP checks passed: ${paths.length} pages and assets, four legacy redirects, and three genuine 404s.`);
}
