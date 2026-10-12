"use client";

import Image from "next/image";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
};

export function ExpandableCaseStudyImage({ src, alt, width, height, sizes = "160px" }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="expandable-case-study-image">
      <button
        className="expandable-case-study-image__preview work-card-dotted-grid"
        type="button"
        aria-label={`Enlarge image: ${alt}`}
        aria-haspopup="dialog"
        title="Enlarge image"
        onClick={() => dialogRef.current?.showModal()}
      >
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          className="expandable-case-study-image__source"
          sizes={sizes}
        />
        <span className="expandable-case-study-image__button" aria-hidden="true">
          <svg viewBox="0 0 20 20">
            <path
              d="M7 3H3v4m10-4h4v4M3 13v4h4m10-4v4h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <dialog
        ref={dialogRef}
        className="case-study-image-dialog"
        aria-label={`Enlarged image: ${alt}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <button
          className="case-study-image-dialog__close"
          type="button"
          aria-label="Close enlarged image"
          autoFocus
          onClick={() => dialogRef.current?.close()}
        >
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="m5 5 10 10M15 5 5 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 768px) 100vw, 672px" className="case-study-image-dialog__image" />
      </dialog>
    </div>
  );
}
