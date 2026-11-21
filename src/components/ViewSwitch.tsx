"use client";

import { useSyncExternalStore } from "react";
import type { View } from "@/data/site";

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
