import Image from "next/image";
import Link from "next/link";
import { AutodeusChip, BrandChip } from "@/components/Brand";
import { HeroActions } from "@/components/HeroActions";
// import { CheckpointNav } from "@/components/CheckpointNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WorkTile } from "@/components/WorkTile";
import { brands, featuredWork, site } from "@/data/site";

function Stripe() {
  return <div className="stripe" aria-hidden="true" />;
}

export default function Home() {
  return (
    <main id="main" className="home-page">
      {/* <CheckpointNav /> */}
      <section id="intro" className="hero">
        <div className="hero-identity">
          <Link href="/" className="case-study-avatar" aria-label="Go to home">
            <Image
              src="/kartik.jpg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
          </Link>
          <h1 className="hero-name">{site.name}</h1>
          <p className="t-lede">
            Product designer at <AutodeusChip />, working on{" "}
            <BrandChip brand={brands.reepl} />, an AI tool for writing LinkedIn posts.
          </p>
        </div>
        <div className="hero-copy">
          <p className="t-lede" data-view-only="design">
            I redesigned Reepl’s onboarding so new users see the product working
            before they choose a plan, and designed its iOS and Android app around
            a daily review habit.
          </p>
          <p className="t-lede" data-view-only="design">
            I also built the team’s Figma design system, and use usability tests
            and interviews to find where workflows break.
          </p>
          <p className="t-lede" data-view-only="code">
            I designed Reepl’s iOS and Android app and implemented it with AI
            assistance in 17 days, using Claude Code, Expo, React Native, and
            TypeScript.
          </p>
          <p className="t-lede" data-view-only="code">
            I also code reusable UI components and coordinate handoffs with the
            team’s engineers.
          </p>
          <p className="t-lede">
            I’ve worked with teams at Tutedude, RoomsVital, and Iceberg Ice Creams.
          </p>
          <p className="t-lede">Based in Jaipur, Rajasthan, working remotely.</p>
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
          {featuredWork.map((work) => (
            <WorkTile key={`${work.slug}-${work.artwork?.src ?? "default"}`} work={work} />
          ))}
        </div>
      </section>

      <Stripe />

      <footer id="contact" className="pane text-sm text-[var(--body)]">
        <div className="footer-row">
          <p>Last updated <time dateTime="2026-10-19">October 19, 2026</time></p>
          <ThemeToggle />
        </div>
      </footer>
    </main>
  );
}
