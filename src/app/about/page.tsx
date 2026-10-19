import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { MusicPlayer } from "@/components/MusicPlayer";
import {
  aboutSnaps,
  booksRead,
  caseStudies,
  jobs,
  selectedWork,
  site,
} from "@/data/site";

const caseStudyProjects = selectedWork.filter(
  (work) => work.case && caseStudies[work.slug],
);
const previousCase = caseStudyProjects.at(-1);
const nextCase = caseStudyProjects[0];

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, product designer at Autodeus Technologies in Jaipur.`,
};

export default function AboutPage() {
  return (
    <main id="main" className="about-page">
      <div className="case-study-back">
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

      <header className="about-intro">
        <h1>About me</h1>
        <div className="about-copy">
          <p data-view-only="design">
            I’m a product designer at Autodeus Technologies, working remotely on
            Reepl, an AI tool for writing LinkedIn posts. I’ve designed its
            onboarding, contact management, and iOS and Android app, and built
            the team’s Figma design system.
          </p>
          <p data-view-only="design">
            I like taking fuzzy things, like AI output, and designing them into
            flows people can understand and check.
          </p>
          <p data-view-only="code">
            I’m a product designer at Autodeus Technologies, working remotely on
            Reepl. I design in Figma and take my work into code: I implemented
            Reepl’s iOS and Android app with Claude Code, Expo, React Native, and
            TypeScript, and I code reusable UI components with the team’s
            engineers.
          </p>
          <p data-view-only="code">
            AI writes much of the implementation. The product and interaction
            decisions, and the review of what gets built, stay with me.
          </p>
          <p>
            I’ve also worked with teams at Tutedude, RoomsVital, and Iceberg Ice
            Creams.
          </p>
          <p>Based in {site.location}.</p>
        </div>
      </header>

      <section className="about-experience" aria-labelledby="about-experience-title">
        <h2 id="about-experience-title" className="t-section">
          Work experience
        </h2>
        <div className="about-career-list">
          {jobs.map((job) => (
            <article key={job.id} className="career-row">
              <div className="career-details">
                <h3 className="career-title">
                  {job.roles.map((role) => role.title).join(" · ")} at {job.company}
                </h3>
                {job.summary && <p className="career-summary">{job.summary}</p>}
                {job.featured && (
                  <p className="career-projects">
                    {job.featured.title} · {job.featured.description}
                  </p>
                )}
              </div>
              <p className="career-period">{job.period}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-personal" aria-label="Personal interests">
        <section className="about-books" aria-labelledby="about-books-title">
          <h2 id="about-books-title" className="t-section">
            Books read
          </h2>
          <div className="about-books-grid">
            {booksRead.map((book) => (
              <article className="about-book" key={book.title}>
                <Image
                  src={book.cover}
                  alt={`Cover of ${book.title}`}
                  width={400}
                  height={600}
                  unoptimized
                />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-listening" aria-labelledby="about-listening-title">
          <h2 id="about-listening-title" className="t-section">
            Listening to
          </h2>
          <MusicPlayer />
        </section>

        <section className="about-snaps" aria-labelledby="about-snaps-title">
          <h2 id="about-snaps-title" className="t-section">
            Snaps
          </h2>
          <div className="about-snaps-grid">
            {aboutSnaps.map((snap) => (
              <figure key={snap.src}>
                <Image src={snap.src} alt={snap.alt} width={1152} height={864} />
                <figcaption>{snap.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
