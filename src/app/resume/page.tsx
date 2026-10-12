import type { Metadata } from "next";
import Link from "next/link";
import { PrintResumeButton } from "@/components/PrintResumeButton";
import { jobs, resume, resumeSkills, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Kartik Jangid’s experience, selected product work, skills, and education. Print or save as PDF.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main id="main" className="pane pane-lg resume-page">
      <nav className="resume-actions" aria-label="Resume actions"><Link href="/">← Portfolio</Link><div className="resume-downloads"><a href="/kartik-jangid-resume.pdf" download>Download PDF ↗</a><PrintResumeButton /></div></nav>
      <header>
        <h1 className="t-hero">{site.name}</h1>
        <p className="resume-role">{site.role}</p>
        <p>{site.location} · <a href={`mailto:${site.email}`}>{site.email}</a></p>
        <p className="resume-contact"><a href={site.social.linkedin}>LinkedIn</a> · <a href={site.social.github}>GitHub</a></p>
        <p>{site.intro} {resume.summary}</p>
      </header>
      <section aria-labelledby="resume-experience">
        <h2 id="resume-experience" className="t-section">Experience</h2>
        {jobs.map((job) => <article key={job.id} className="resume-job">
          <h3>{job.roles.map((role) => role.title).join(" · ")} · {job.company}</h3>
          <p className="resume-period">{job.period} · {job.origin}</p>
          <p>{job.summary ?? job.featured?.description}</p>
          {job.id === "smartify" && <ul>{resume.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>}
        </article>)}
      </section>
      <section aria-labelledby="resume-skills"><h2 id="resume-skills" className="t-section">Skills</h2>{resumeSkills.map((skill) => <p key={skill.title}><strong>{skill.title}:</strong> {skill.detail}</p>)}</section>
      <section aria-labelledby="resume-education"><h2 id="resume-education" className="t-section">Education</h2><p><strong>{resume.education.degree}</strong> · {resume.education.year}<br />{resume.education.school}</p></section>
      <footer className="resume-footer"><Link href="/work">Read the six case studies ↗</Link></footer>
    </main>
  );
}
