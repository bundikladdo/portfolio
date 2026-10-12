import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroActions } from "@/components/HeroActions";
import { MusicPlayer } from "@/components/MusicPlayer";
import {
  aboutSnaps,
  booksRead,
  jobs,
  site,
} from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
  description: `About ${site.name}, product designer at Autodeus Technologies in Jaipur.`,
};

export default function AboutPage() {
  return (
    <main id="main" className="about-page">
      <nav className="case-top-nav" aria-label="Portfolio navigation">
        <Link href="/">← Home</Link>
        <Link href="/work">Work</Link>
        <Link href={site.resumeHref}>Resume</Link>
      </nav>

      <header className="about-intro">
        <h1>About me</h1>
        <div className="about-copy">
          {site.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p>Based in {site.location}.</p>
        </div>
        <HeroActions />
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
