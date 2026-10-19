import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, jobs, selectedWork, sideProjects } from "@/data/site";
import { Button } from "@/components/Button";
import { CheckpointNav } from "@/components/CheckpointNav";
import { ReeplThumbnail } from "@/components/ReeplThumbnail";
import { CustomVideoPlayer } from "@/components/CustomVideoPlayer";
import { ExpandableCaseStudyImage } from "@/components/ExpandableCaseStudyImage";
import { ViewCopy } from "@/components/ViewCopy";

const allProjects = [
  ...jobs.flatMap((job) => [...(job.featured ? [job.featured] : []), ...job.projects]),
  ...sideProjects,
];
const caseStudyProjects = selectedWork.filter(
  (work) => work.case && caseStudies[work.slug],
);

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  const study = caseStudies[slug];
  return { title: study?.story?.title ?? project?.title ?? "Work" };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  const study = caseStudies[slug];
  if (!project || !study) notFound();

  const currentCaseIndex = caseStudyProjects.findIndex((work) => work.slug === slug);
  const previousCase =
    currentCaseIndex >= 0
      ? caseStudyProjects[
          (currentCaseIndex - 1 + caseStudyProjects.length) % caseStudyProjects.length
        ]
      : undefined;
  const nextCase =
    currentCaseIndex >= 0
      ? caseStudyProjects[(currentCaseIndex + 1) % caseStudyProjects.length]
      : undefined;

  return (
    <main id="main">
      {study.story && (
        <CheckpointNav
          checkpoints={study.story.sections.map((section) => ({
            id: section.id,
            view: section.view,
            label: section.title,
            preview: section.paragraphs[0] ?? section.list?.[0],
          }))}
        />
      )}
      <article className="pane pane-lg">
        <div className={previousCase && nextCase ? "case-study-back" : undefined}>
          <Link href="/" className="case-study-avatar" aria-label="Go to home">
            <Image
              src="/kartik.jpg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
          </Link>
          {previousCase && nextCase && (
            <nav className="case-study-switcher" aria-label="Other case studies">
              <Button
                href={`/work/${previousCase.slug}`}
                variant="secondary"
                aria-label={`Previous case study: ${previousCase.line}`}
                title={`Previous: ${previousCase.line}`}
              >
                <span aria-hidden="true">←</span>
              </Button>
              <Button
                href={`/work/${nextCase.slug}`}
                variant="secondary"
                aria-label={`Next case study: ${nextCase.line}`}
                title={`Next: ${nextCase.line}`}
              >
                <span aria-hidden="true">→</span>
              </Button>
            </nav>
          )}
        </div>
        {study.story ? (
          <>
            <h1 className="t-hero case-study-title">{study.story.title}</h1>
            <p className="mt-4 max-w-prose text-base text-[var(--muted)]">
              <ViewCopy text={study.story.subtitle} />
            </p>
            <div className="work-card-visual case-study-visual mt-8">
              <ReeplThumbnail
                artwork={study.story.artwork}
                artworks={study.story.artworks}
              />
            </div>
            <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
              {study.story.metadata.map((item) => (
                <div key={`${item.label}-${item.view ?? "all"}`} data-view-only={item.view}>
                  <p className="text-sm font-normal normal-case tracking-normal text-[var(--muted)]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-base">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="case-study-sections mt-14 space-y-12">
              {study.story.sections.map((section) => (
                <section
                  id={section.id}
                  key={section.id}
                  className="scroll-mt-24"
                  data-view-only={section.view}
                >
                  <div className="case-study-copy">
                    <h2 className="mt-2 text-lg font-medium tracking-tight">
                      {section.title}
                    </h2>
                    {section.paragraphs.length > 0 && (
                      <div className="mt-4 space-y-4">
                        {section.paragraphs.map((paragraph) => (
                          <p className="t-lede text-justify" key={paragraph}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                    {section.list && (
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-[var(--body)]">
                        {section.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {section.image && (
                      <figure
                        className={`case-study-image mt-6 overflow-hidden rounded-xl${
                          section.image.variant === "phone" ? " case-study-image--phone" : " border border-hairline bg-[var(--surface)]"
                        }`}
                      >
                        {section.image.variant === "phone" ? (
                          <ExpandableCaseStudyImage
                            src={section.image.src}
                            alt={section.image.alt}
                            width={section.image.width ?? 3024}
                            height={section.image.height ?? 1652}
                          />
                        ) : (
                          <Image
                            src={section.image.src}
                            alt={section.image.alt}
                            width={section.image.width ?? 3024}
                            height={section.image.height ?? 1652}
                            className="h-auto w-full"
                            sizes="(max-width: 768px) 100vw, 900px"
                          />
                        )}
                        {section.image.variant !== "phone" && (
                          <figcaption className="px-4 py-3 text-sm text-[var(--muted)]">
                            {section.image.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </div>
                  {section.metrics && (
                    <div className="case-study-impact case-study-visual mt-6">
                      <div className="case-study-metric-grid">
                        {section.metrics.map((metric) => (
                          <div className="case-study-metric" key={metric.label}>
                            <p className="case-study-metric-value">{metric.value}</p>
                            <p className="case-study-metric-label">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {section.video && (
                    <div className="work-card-visual case-study-visual mt-6">
                      <CustomVideoPlayer
                        src={section.video.src}
                        poster={section.video.poster}
                        ariaLabel={section.video.ariaLabel}
                      />
                    </div>
                  )}
                  {section.videoPlaceholder && (
                    <div className="case-study-video-placeholder mt-6" role="img" aria-label={section.videoPlaceholder.label}>
                      <span className="case-study-video-placeholder__eyebrow">{section.videoPlaceholder.label}</span>
                      <h3>{section.videoPlaceholder.title}</h3>
                      <p>{section.videoPlaceholder.body}</p>
                      <span className="case-study-video-placeholder__play" aria-hidden="true">
                        ▶
                      </span>
                    </div>
                  )}
                </section>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-wider text-[var(--muted)]">
              {project.status}
            </p>
            <h1 className="t-hero mt-2">{project.title}</h1>
            {project.highlight && (
              <p className="t-lede mt-4 max-w-prose">
                <span className="highlight">{project.highlight}</span>
              </p>
            )}
          </>
        )}

        {study.image && (
          <div className="relative mt-10 overflow-hidden rounded-[10px] border border-hairline bg-[var(--surface)]">
            <Image
              src={study.image}
              alt=""
              width={1600}
              height={1000}
              className="h-auto w-full object-cover object-top"
            />
          </div>
        )}

        {!study.story && (
          <div className="mt-12 max-w-prose space-y-8">
            <section>
              <h2 className="font-sans text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
                The problem
              </h2>
              <p className="t-lede mt-2">{study.problem}</p>
            </section>
            <section>
              <h2 className="font-sans text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
                What shipped
              </h2>
              <p className="t-lede mt-2">
                <ViewCopy text={study.shipped} />
              </p>
            </section>
            <section>
              <h2 className="font-sans text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
                Outcome
              </h2>
              <p className="t-lede mt-2">{study.outcome}</p>
            </section>
          </div>
        )}

        {study.url && !study.story && (
          <Button href={study.url} variant="primary" className="mt-10" target="_blank" rel="noreferrer">
            Open {project.title} ↗
          </Button>
        )}
      </article>
    </main>
  );
}
