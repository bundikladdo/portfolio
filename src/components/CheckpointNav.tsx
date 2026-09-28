"use client";

import ScrollSpy from "react-scrollspy-navigation";
import { useState } from "react";

type Checkpoint = { id: string; label: string; preview?: string };

export function CheckpointNav({
  checkpoints,
}: {
  checkpoints: Checkpoint[];
}) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return (
    <ScrollSpy
      activeClass="checkpoint-active"
      activeAttr
      behavior="smooth"
      rootMargin="-35% 0px -50% 0px"
    >
      <nav
        className="checkpoint-nav"
        aria-label="Case study sections"
        onPointerLeave={() => setFocusedIndex(null)}
      >
        {checkpoints.map(({ id, label, preview }, index) => (
          <a
            key={id}
            href={`#${id}`}
            className="checkpoint-link"
            aria-label={label}
            data-distance={
              focusedIndex === null ? undefined : Math.abs(index - focusedIndex)
            }
            onPointerEnter={() => setFocusedIndex(index)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
          >
            <span className="checkpoint-label" aria-hidden="true">
              <span className="checkpoint-label-title">{label}</span>
              {preview && (
                <span className="checkpoint-label-preview">{preview}</span>
              )}
            </span>
            <span className="checkpoint-tick" aria-hidden="true" />
          </a>
        ))}
      </nav>
    </ScrollSpy>
  );
}
