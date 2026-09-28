import { site } from "@/data/site";

export function GitTrail() {
  return (
    <section className="github-section" aria-labelledby="github-title">
      <div className="work-section-heading">
        <h2 id="github-title" className="t-section mb-0">
          GitHub
        </h2>
        <a
          href={site.social.github}
          target="_blank"
          rel="noreferrer"
          className="text-[15px]"
        >
          View GitHub ↗
        </a>
      </div>
      <div className="github-card">
        <div className="overflow-x-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ghchart.rshah.org/bundikladdo"
            alt="Kartik's GitHub chart"
            className="block h-auto w-full min-w-[640px]"
          />
        </div>
        <p className="mt-4 mb-0 text-sm text-[var(--body)]">
          803 contributions in 2026
        </p>
      </div>
    </section>
  );
}
