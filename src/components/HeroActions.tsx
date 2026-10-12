import Link from "next/link";
import { site } from "@/data/site";

export function HeroActions() {
  return (
    <nav className="hero-links" aria-label="About, resume, and contact">
      <Link href={site.resumeHref}>Resume ↗</Link>
      <Link href="/about">About</Link>
      <a href={`mailto:${site.email}`}>Email</a>
      <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
      <a href={site.social.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
    </nav>
  );
}
