import type { Metadata } from "next";
import Link from "next/link";
import { WorkTile } from "@/components/WorkTile";
import { selectedWork } from "@/data/site";

export const metadata: Metadata = {
  title: "Selected work",
  description: "Six product design and design engineering case studies: Reepl Mobile, Onboarding, Contacts, Garga, Toolnest, and FormPilot.",
  alternates: { canonical: "/work" },
};

export default function AllWorkPage() {
  return (
    <main id="main" className="work-archive">
      <div className="work-archive-heading">
        <div>
          <Link href="/" className="back-link">← Home</Link>
          <h1 className="t-hero mt-6">Six projects. From idea to interface.</h1>
          <p className="section-description">Product releases at Reepl, alongside independent products and an AI prototype.</p>
        </div>
      </div>
      <div className="work-grid">
        {selectedWork.map((work, index) => <WorkTile key={work.slug} work={work} eager={index === 0} />)}
      </div>
    </main>
  );
}
