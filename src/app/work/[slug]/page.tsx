import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudy, selectedWork, site } from "@/data/site";
import { CheckpointNav } from "@/components/CheckpointNav";
import { ReeplThumbnail } from "@/components/ReeplThumbnail";
import { CustomVideoPlayer } from "@/components/CustomVideoPlayer";
import { ExpandableCaseStudyImage } from "@/components/ExpandableCaseStudyImage";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return selectedWork.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  return {
    title: study.story.title,
    description: study.shipped,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { title: study.story.title, description: study.shipped, url: `/work/${slug}`, type: "article" },
    twitter: { card: "summary_large_image", title: study.story.title, description: study.shipped },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const index = selectedWork.findIndex((work) => work.slug === slug);
  if (!study || index < 0) notFound();
  const work = selectedWork[index];
  const nextCase = selectedWork[(index + 1) % selectedWork.length];
  const previousCase = selectedWork[(index - 1 + selectedWork.length) % selectedWork.length];

  return (
    <main id="main" className="case-study-page">
      <CheckpointNav checkpoints={study.story.sections.map((section) => ({ id: section.id, label: section.title }))} />
      <article className="pane pane-lg">
        <nav className="case-top-nav" aria-label="Portfolio navigation">
          <Link href="/work" className="back-link">← All work</Link>
          <Link href="/about">About</Link>
          <Link href={site.resumeHref}>Resume</Link>
        </nav>
        <header className="case-study-header">
          <p className="case-eyebrow">{work.discipline} · {work.year} · {work.status}</p>
          <h1 className="t-hero case-study-title">{study.story.title}</h1>
          <p className="case-subtitle">{study.story.subtitle}</p>
        </header>
        <section className="case-overview" aria-labelledby="overview-title">
          <h2 id="overview-title" className="t-section">The project at a glance</h2>
          <dl className="case-summary">
            <div><dt>My role</dt><dd>{study.role}</dd></div>
            <div><dt>Scope</dt><dd>{study.scope}</dd></div>
            <div><dt>The problem</dt><dd>{study.problem}</dd></div>
            <div><dt>What shipped</dt><dd>{study.shipped}</dd></div>
            <div><dt>Outcome</dt><dd>{study.outcome}</dd></div>
          </dl>
          <p className="case-evidence"><strong>Evidence:</strong> {study.evidence}</p>
        </section>
        {work.visual === "dotted-grid" && (
          <div className="work-card-visual case-study-visual case-hero-visual">
            <ReeplThumbnail artwork={study.story.artwork} artworks={study.story.artworks} />
          </div>
        )}
        <details className="case-contents">
          <summary>In this case study · {study.story.sections.length} sections</summary>
          <nav aria-label="Case study contents">
            {study.story.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
          </nav>
        </details>
        <div className="case-study-sections">
          {study.story.sections.map((section) => (
            <section id={section.id} key={section.id} className="case-section">
              <h2 className="t-section">{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
              {section.image && (
                <figure className={`case-study-image${section.image.variant === "phone" ? " case-study-image--phone" : ""}`}>
                  <ExpandableCaseStudyImage src={section.image.src} alt={section.image.alt} width={section.image.width ?? 1600} height={section.image.height ?? 1000} sizes={section.image.variant === "phone" ? "(max-width: 390px) 90vw, 352px" : undefined} />
                  <figcaption>{section.image.caption}</figcaption>
                </figure>
              )}
              {section.metrics && (
                <dl className="case-study-metric-grid">
                  {section.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}
                </dl>
              )}
              {section.video && (
                <figure className="case-video">
                  <div className="work-card-visual case-study-visual">
                    <CustomVideoPlayer src={section.video.src} poster={section.video.poster} ariaLabel={section.video.ariaLabel} />
                  </div>
                  <figcaption>{section.video.ariaLabel}. Silent screen recording; the surrounding text describes the flow.</figcaption>
                </figure>
              )}
            </section>
          ))}
        </div>
        <footer className="case-study-footer">
          {study.url && <a href={study.url} target="_blank" rel="noopener noreferrer" className="case-product-link">Visit {work.line.split(" · ")[0]} ↗</a>}
          <nav className="case-next-projects" aria-label="More case studies">
            <Link href={`/work/${previousCase.slug}`}><span>← Previous study</span>{previousCase.line}</Link>
            <Link href={`/work/${nextCase.slug}`}><span>Next study →</span>{nextCase.line}</Link>
          </nav>
          <a href={`mailto:${site.email}`}>Discuss this project ↗</a>
        </footer>
      </article>
    </main>
  );
}
