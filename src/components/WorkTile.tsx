import Image from "next/image";
import Link from "next/link";
import type { WorkCard } from "@/data/site";
import { ReeplThumbnail } from "@/components/ReeplThumbnail";

export function WorkTile({ work, eager = false }: { work: WorkCard; eager?: boolean }) {
  return (
    <Link href={`/work/${work.slug}`} className="work-card">
      <div className="work-card-visual">
        {work.visual === "dotted-grid" ? (
          <ReeplThumbnail artwork={work.artwork} artworks={work.artworks} eager={eager} />
        ) : work.image ? (
          <div className="work-card-image-frame">
            <Image src={work.image} alt="" width={800} height={500} sizes="(max-width: 720px) calc(100vw - 40px), 600px" loading={eager ? "eager" : "lazy"} />
          </div>
        ) : (
          <div className="work-card-concept" aria-hidden="true">
            <span>FormPilot</span>
            <div className="concept-change"><span>Original experience</span><span>Suggested edit + reason</span><span>Your review → PDF</span></div>
            <small>Review workflow · Concept diagram</small>
          </div>
        )}
      </div>
      <div className="work-card-meta">
        <div className="work-card-heading">
          <h3 className="work-card-line">{work.line}</h3>
          <span className="work-card-year">{work.year}</span>
        </div>
        <p className="work-card-about">{work.about}</p>
        <p className="work-card-discipline">{work.discipline} <span>· {work.status}</span></p>
        <span className="work-card-cta">Read case study <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}
