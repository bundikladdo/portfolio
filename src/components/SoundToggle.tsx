"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const KEY = "portfolio-sound-v2";
const interactiveSelector = "a, button, [role='button']";

function playCue(source: HTMLAudioElement | null, volume: number) {
  if (!source) return;
  const sound = source.cloneNode() as HTMLAudioElement;
  sound.volume = volume;
  sound.currentTime = 0;
  void sound.play().catch(() => {});
}

function getSoundSnapshot() {
  try {
    return localStorage.getItem(KEY) === "on";
  } catch {
    return false;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("portfolio-sound-change", onChange);
  return () => window.removeEventListener("portfolio-sound-change", onChange);
}

function getServerSnapshot() {
  return false;
}

export function SoundToggle() {
  const on = useSyncExternalStore(subscribe, getSoundSnapshot, getServerSnapshot);
  const hoverRef = useRef<HTMLAudioElement>(null);
  const clickRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const onPointerOver = (event: PointerEvent) => {
      if (!getSoundSnapshot() || !(event.target instanceof Element)) return;
      const target = event.target.closest(interactiveSelector);
      if (!target) return;
      if (event.relatedTarget instanceof Node && target.contains(event.relatedTarget)) {
        return;
      }
      playCue(hoverRef.current, 0.12);
    };
    const onClick = (event: MouseEvent) => {
      if (!getSoundSnapshot() || !(event.target instanceof Element)) return;
      const target = event.target.closest(interactiveSelector);
      if (!target) return;
      playCue(clickRef.current, 0.2);
    };

    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <audio aria-hidden="true" ref={hoverRef} src="/audio/hover.wav" preload="none" />
      <audio aria-hidden="true" ref={clickRef} src="/audio/click.wav" preload="none" />
      <button
        type="button"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--ink)] hover:bg-[var(--surface)]"
        aria-label={on ? "Mute interface sounds" : "Unmute interface sounds"}
        aria-pressed={on}
        title={on ? "Mute interface sounds" : "Unmute interface sounds"}
        onClick={() => {
          try {
            localStorage.setItem(KEY, on ? "off" : "on");
            window.dispatchEvent(new Event("portfolio-sound-change"));
          } catch {}
        }}
      >
        {on ? <SpeakerOn /> : <SpeakerOff />}
      </button>
    </>
  );
}

function SpeakerOn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 9.5v5h3.2L12 18.5V5.5L7.2 9.5H4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M16 9.2a3.4 3.4 0 0 1 0 5.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M18.6 7a6.2 6.2 0 0 1 0 10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SpeakerOff() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 9.5v5h3.2L12 18.5V5.5L7.2 9.5H4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M16 10.5 21 15.5M21 10.5 16 15.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
