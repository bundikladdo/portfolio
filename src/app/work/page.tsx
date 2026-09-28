import Link from "next/link";
import { WorkTile } from "@/components/WorkTile";
import { selectedWork } from "@/data/site";

export default function AllWorkPage() {
  return (
    <main id="main" className="work-archive">
      <div className="work-archive-heading">
        <div>
          <Link href="/#work" className="text-sm text-[var(--muted)]">
            ← Home
          </Link>
          <h1 className="t-section mt-6">All projects</h1>
        </div>
      </div>
      <div className="work-grid">
        {selectedWork.map((work) => (
          <WorkTile key={work.slug} work={work} />
        ))}
      </div>
    </main>
  );
}
