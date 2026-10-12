"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

const revealInterval = 60;
const textSelector = "h1, h2, h3, h4, p, li, figcaption";
const itemSelector = [
  ".hero-links",
  ".work-section-heading",
  ".work-card-heading",
  ".work-card-visual",
  ".case-study-back",
  ".about-music-player",
  ".case-study-metric",
  ".footer-row",
  "img",
  "video",
  "a:not(.work-card)",
  "button",
].join(", ");

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      container.classList.add("reveal-ready");
      return () => container.classList.remove("reveal-ready");
    }

    const selector = `${textSelector}, ${itemSelector}`;
    const targets = Array.from(
      container.querySelectorAll<HTMLElement>(`main :is(${selector})`),
    ).filter((target) =>
      !target.closest(".checkpoint-nav, .brand-tip-card") &&
      !target.parentElement?.closest(selector),
    );
    targets.forEach((target) => {
      target.classList.add("reveal-item");
    });

    const order = new Map(targets.map((target, index) => [target, index]));
    let nextRevealAt = performance.now();
    const observer = new IntersectionObserver(
      (entries) => {
        const now = performance.now();
        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) =>
            order.get(a.target as HTMLElement)! - order.get(b.target as HTMLElement)!,
          )
          .forEach((entry) => {
            const target = entry.target as HTMLElement;
            const start = Math.max(now, nextRevealAt);
            target.style.willChange = "opacity, filter, transform";
            target.style.setProperty("--reveal-delay", `${start - now}ms`);
            target.classList.add("is-visible");
            nextRevealAt = start + revealInterval;
            observer.unobserve(target);
          });
      },
      { threshold: 0, rootMargin: "0px 0px -6% 0px" },
    );

    const finishReveal = (event: TransitionEvent) => {
      const target = event.target;
      if (
        event.propertyName === "opacity" &&
        target instanceof HTMLElement &&
        target.classList.contains("reveal-item")
      ) {
        target.style.removeProperty("will-change");
      }
    };

    container.addEventListener("transitionend", finishReveal);
    // Commit the hidden state before enabling entrance transitions.
    container.getBoundingClientRect();
    container.classList.add("reveal-ready");
    const frame = requestAnimationFrame(() => {
      targets.forEach((target) => observer.observe(target));
    });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      container.removeEventListener("transitionend", finishReveal);
      container.classList.remove("reveal-ready");
      targets.forEach((target) => {
        target.classList.remove("reveal-item", "is-visible");
        target.style.removeProperty("--reveal-delay");
        target.style.removeProperty("will-change");
      });
    };
  }, [pathname]);

  return (
    <div className="page-content-enter" ref={containerRef}>
      <noscript>
        <style>{".page-content-enter main { visibility: visible !important; }"}</style>
      </noscript>
      {children}
    </div>
  );
}
