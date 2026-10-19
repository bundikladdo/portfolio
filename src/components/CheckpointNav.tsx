"use client";

import ScrollSpy from "react-scrollspy-navigation";
import { useState } from "react";
import { useView } from "@/components/ViewSwitch";
import type { View } from "@/data/site";

type Checkpoint = { id: string; label: string; preview?: string; view?: View };

export function CheckpointNav({
  checkpoints,
}: {
  checkpoints: Checkpoint[];
}) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const view = useView();

  // Every checkpoint stays mounted for ScrollSpy; hidden ones are skipped when measuring distance.
  let visibleCount = 0;
  const visibleIndexes = checkpoints.map((checkpoint) =>
    !checkpoint.view || checkpoint.view === view ? visibleCount++ : -1,
  );

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
        {checkpoints.map(({ id, label, preview, view: checkpointView }, index) => (
          <a
            key={id}
            href={`#${id}`}
            className="checkpoint-link"
            aria-label={label}
            data-view-only={checkpointView}
            data-distance={
              focusedIndex === null
                ? undefined
                : Math.abs(visibleIndexes[index] - focusedIndex)
            }
            onPointerEnter={() => setFocusedIndex(visibleIndexes[index])}
            onFocus={() => setFocusedIndex(visibleIndexes[index])}
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
