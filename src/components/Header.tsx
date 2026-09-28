"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { SoundToggle } from "@/components/SoundToggle";

const themeChangeEvent = "portfolio-theme-change";

function subscribeToTheme(onChange: () => void) {
  window.addEventListener(themeChangeEvent, onChange);
  return () => window.removeEventListener(themeChangeEvent, onChange);
}

function getThemeSnapshot(): "light" | "dark" {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerThemeSnapshot(): "light" {
  return "light";
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 8);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div
        className={`mx-5 flex h-14 items-center justify-between transition-[background-color,border-color,border-radius,padding] duration-300 ease-in-out ${
          scrolled
            ? "rounded-b-xl border-x border-b border-hairline bg-[var(--card-raised)] px-4"
            : "border-x border-transparent bg-transparent px-0"
        }`}
      >
        <Link
          href="/"
          className="flex items-center no-underline"
          aria-label={`${site.name} home`}
        >
          <span
            aria-hidden="true"
            className={`relative h-7 shrink-0 ${
              scrolled ? "mr-2.5 w-7" : "mr-0 w-0"
            }`}
          >
            <Image
              src="/kartik.jpg"
              alt=""
              width={28}
              height={28}
              className={`absolute left-0 top-0 h-7 w-7 rounded-md object-cover transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
                scrolled ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
            />
          </span>
          <span className="text-[0.95rem] font-medium">
            {site.name}
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--ink)] hover:bg-[var(--surface)]"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={theme === "dark"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => {
              const nextTheme = theme === "dark" ? "light" : "dark";
              document.documentElement.dataset.theme = nextTheme;
              document.documentElement.style.colorScheme = nextTheme;
              try {
                localStorage.setItem("portfolio-theme", nextTheme);
              } catch {}
              window.dispatchEvent(new Event(themeChangeEvent));
            }}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <SoundToggle />
        </div>
      </div>
    </header>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
