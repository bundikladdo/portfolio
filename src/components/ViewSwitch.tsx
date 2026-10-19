"use client";

import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";
import type { View } from "@/data/site";

// Keep in sync with the view-init script in layout.tsx.
const viewStorageKey = "portfolio-view";
const viewChangeEvent = "portfolio-view-change";

function subscribeToView(onChange: () => void) {
  window.addEventListener(viewChangeEvent, onChange);
  return () => window.removeEventListener(viewChangeEvent, onChange);
}

function getViewSnapshot(): View {
  return document.documentElement.dataset.view === "code" ? "code" : "design";
}

function getServerViewSnapshot(): View {
  return "design";
}

export function useView() {
  return useSyncExternalStore(subscribeToView, getViewSnapshot, getServerViewSnapshot);
}

// Design is the bare URL; Code carries ?view=code so the address bar is always shareable.
function syncViewParam(view: View) {
  const url = new URL(window.location.href);
  if (view === "code") {
    url.searchParams.set("view", "code");
  } else {
    url.searchParams.delete("view");
  }
  if (url.href !== window.location.href) {
    window.history.replaceState(null, "", url);
  }
}

function setView(view: View) {
  document.documentElement.dataset.view = view;
  try {
    sessionStorage.setItem(viewStorageKey, view);
  } catch {}
  syncViewParam(view);
  window.dispatchEvent(new Event(viewChangeEvent));
}

const subscribeToNothing = () => () => {};

export function ViewSwitch() {
  const view = useView();
  const pathname = usePathname();
  // The view-init script runs just before hydration, not before first paint,
  // so keep the pill hidden until it can show the right view.
  const ready = useSyncExternalStore(subscribeToNothing, () => true, () => false);

  // Client navigation drops the query string, so put ?view=code back on each page.
  useEffect(() => {
    syncViewParam(getViewSnapshot());
  }, [pathname]);

  return (
    <div
      className="view-switch"
      role="group"
      aria-label="Portfolio view"
      data-ready={ready ? "" : undefined}
    >
      <button
        type="button"
        data-view-option="design"
        aria-pressed={view === "design"}
        onClick={() => setView("design")}
      >
        <DesignIcon />
        Design
      </button>
      <button
        type="button"
        data-view-option="code"
        aria-pressed={view === "code"}
        onClick={() => setView("code")}
      >
        <CodeIcon />
        Code
      </button>
    </div>
  );
}

function DesignIcon() {
  return (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="m12 19 7-7 3 3-7 7-3-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m2 2 7.586 7.586" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
