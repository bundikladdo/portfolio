import Image from "next/image";
import Link from "next/link";
import type { WorkCard } from "@/data/site";
import { ReeplThumbnail } from "@/components/ReeplThumbnail";
import { ViewCopy } from "@/components/ViewCopy";

export function WorkTile({ work }: { work: WorkCard }) {
  const inner = (
    <>
      <div className="work-card-visual">
        {work.visual === "dotted-grid" ? (
          <ReeplThumbnail artwork={work.artwork} artworks={work.artworks} />
        ) : (
          <div className="work-card-image-frame">
            <Image
              src={work.image ?? "/work/first.jpg"}
              alt=""
              width={640}
              height={400}
              quality={100}
              className={
                work.image === "/backgrounds/pixel-blast.png"
                  ? "pixel-art-image"
                  : undefined
              }
            />
          </div>
        )}
      </div>
      <div className="work-card-meta">
        <div className="work-card-heading">
          <p className="work-card-line">{work.line}</p>
          <span className="work-card-year">{work.year}</span>
        </div>
        <p className="work-card-about">
          <ViewCopy text={work.about} />
        </p>
      </div>
    </>
  );

  if (work.case) {
    return (
      <Link href={`/work/${work.slug}`} className="work-card">
        {inner}
      </Link>
    );
  }

  return <div className="work-card">{inner}</div>;
}
