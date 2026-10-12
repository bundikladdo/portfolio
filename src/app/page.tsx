import Image from "next/image";
import Link from "next/link";
import { HeroActions } from "@/components/HeroActions";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WorkTile } from "@/components/WorkTile";
import { selectedWork, site } from "@/data/site";

export default function Home() {
  return (
    <main id="main" className="home-page">
      <section id="intro" className="hero" aria-labelledby="intro-title">
        <div className="hero-identity">
          <Image src="/kartik.jpg" alt="Kartik Jangid" width={56} height={56} preload className="hero-portrait" />
          <p className="hero-name">{site.name}</p>
          <h1 id="intro-title" className="t-hero">Product designer &amp; design engineer.</h1>
          <p className="t-lede">{site.intro}</p>
        </div>
        <div className="hero-copy">
          <p className="t-lede">Currently at Autodeus Technologies (Smartify), building Reepl. Previously at RoomsVital and Tutedude.</p>
          <p className="hero-location">Based in {site.location} · Working remotely</p>
        </div>
        <HeroActions />
      </section>

      <section id="work" aria-labelledby="work-title">
        <div className="work-section-heading">
          <div>
            <h2 id="work-title" className="t-section">Selected work</h2>
            <p className="section-description">Three Reepl releases. Three independent projects.</p>
          </div>
          <Link href="/work">All six studies ↗</Link>
        </div>
        <div className="work-grid">
          {selectedWork.map((work, index) => <WorkTile key={work.slug} work={work} eager={index === 0} />)}
        </div>
      </section>

      <footer id="contact" className="pane home-contact">
        <h2 className="t-section">Let’s build something useful.</h2>
        <p>Have a product design or design engineering role in mind?</p>
        <a className="contact-link" href={`mailto:${site.email}`}>{site.email} ↗</a>
        <div className="footer-row">
          <p>Updated <time dateTime={site.updatedAt}>October 8, 2026</time></p>
          <ThemeToggle />
        </div>
      </footer>
    </main>
  );
}
