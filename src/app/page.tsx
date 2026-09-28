import Image from "next/image";
import Link from "next/link";
import { AutodeusChip, BrandChip } from "@/components/Brand";
import { HeroActions } from "@/components/HeroActions";
// import { CheckpointNav } from "@/components/CheckpointNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WorkTile } from "@/components/WorkTile";
import { brands, selectedWork, site } from "@/data/site";

function Stripe() {
  return <div className="stripe" aria-hidden="true" />;
}

export default function Home() {
  return (
    <main id="main" className="home-page">
      {/* <CheckpointNav /> */}
      <section id="intro" className="hero">
        <div className="hero-identity">
          <Image
            src="/kartik.jpg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
          <h1 className="hero-name">{site.name}</h1>
          <p className="t-lede">
            Product Designer at <AutodeusChip />, building 0→1 products remotely.
          </p>
        </div>
        <div className="hero-copy">
          <p className="t-lede">
            Previously, I built <BrandChip brand={brands.garga} href="#work" />, an
            astrology product.
          </p>
          <p className="t-lede">
            I’ve worked with teams at Tutedude, RoomsVital, and Iceberg Ice Creams.
          </p>
          <p className="t-lede">Based in Jaipur, Rajasthan.</p>
        </div>

        <HeroActions />
      </section>

      <Stripe />

      <section id="work" aria-labelledby="work-title">
        <div className="work-section-heading">
          <h2 id="work-title" className="t-section mb-0">
            Featured work
          </h2>
          <Link href="/work" className="text-[15px]">
            View all
          </Link>
        </div>
        <div className="work-grid">
          {selectedWork.slice(0, 1).map((work) => (
            <WorkTile key={work.slug} work={work} />
          ))}
        </div>
      </section>

      <Stripe />

      <footer id="contact" className="pane text-sm text-[var(--body)]">
        <div className="footer-row">
          <p>Last updated <time dateTime="2026-09-27">September 27, 2026</time></p>
          <ThemeToggle />
        </div>
      </footer>
    </main>
  );
}
