import Image from "next/image";

export function ReeplThumbnail() {
  return (
    <div className="work-card-dotted-grid" aria-hidden="true">
      <Image
        src="/work/reepl-case-study/onboarding-thumbnail.svg"
        alt=""
        width={1062}
        height={671}
        unoptimized
        className="work-card-thumbnail-art"
      />
    </div>
  );
}
