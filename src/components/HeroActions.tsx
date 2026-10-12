import Link from "next/link";
import { site } from "@/data/site";

const resumeHref = "/kartik-jangid-resume.docx";

export function HeroActions() {
  return (
    <div className="hero-links" aria-label="About, contact, and social links">
      <Link href="/about">About</Link>
      <a href={resumeHref} download="Kartik-Jangid-Resume.docx">Get Resume</a>
      <a href={`mailto:${site.email}`}>Email</a>
      <a href={site.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a href={site.social.github} target="_blank" rel="noreferrer">GitHub</a>
      <a href={site.social.x} target="_blank" rel="noreferrer">X</a>
    </div>
  );
}
