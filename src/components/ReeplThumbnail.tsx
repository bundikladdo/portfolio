import Image from "next/image";
import type { WorkCard } from "@/data/site";

export function ReeplThumbnail({
  artwork,
  artworks,
  eager = false,
}: {
  artwork?: WorkCard["artwork"];
  artworks?: WorkCard["artworks"];
  eager?: boolean;
}) {
  const image = artwork ?? {
    src: "/work/reepl-case-study/onboarding-thumbnail.svg",
    width: 1062,
    height: 671,
  };

  if (artworks?.length) {
    return (
      <div className="work-card-dotted-grid work-card-dotted-grid--phones" aria-hidden="true">
        {artworks.map((phone, index) => (
          <Image
            key={phone.src}
            src={phone.src}
            alt=""
            width={phone.width}
            height={phone.height}
            sizes="(max-width: 640px) 35vw, 230px"
            loading={eager ? "eager" : "lazy"}
            className={`work-card-phone-shot work-card-phone-shot--${index + 1}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`work-card-dotted-grid${image.height > image.width ? " work-card-dotted-grid--phone" : ""}`}
      aria-hidden="true"
    >
      <Image
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        sizes="(max-width: 640px) 100vw, 600px"
        loading={eager ? "eager" : "lazy"}
        className="work-card-thumbnail-art"
      />
    </div>
  );
}
