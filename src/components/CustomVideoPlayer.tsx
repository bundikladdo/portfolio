"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";

type CustomVideoPlayerProps = {
  src: string;
  poster?: string;
  ariaLabel: string;
};

function PlayPauseIcon({ isPlaying }: { isPlaying: boolean }) {
  return isPlaying ? (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6 4.5h3v11H6zm5 0h3v11h-3z" fill="currentColor" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6 4.5v11l9-5.5z" fill="currentColor" />
    </svg>
  );
}

function ExpandIcon({ expanded = false }: { expanded?: boolean }) {
  return expanded ? (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m5 5 10 10M15 5 5 15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M7 3H3v4m10-4h4v4M3 13v4h4m10-4v4h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CustomVideoPlayer({ src, poster, ariaLabel }: CustomVideoPlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const enlargedVideoRef = useRef<HTMLVideoElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const expandButtonRef = useRef<HTMLButtonElement>(null);
  const enlargedStartTime = useRef(0);
  const shouldResumeEnlarged = useRef(false);
  const hasExpandedBefore = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isEnlargedPlaying, setIsEnlargedPlaying] = useState(false);
  const [animationOrigin, setAnimationOrigin] = useState({ x: 0, y: 0, scaleX: 1, scaleY: 1 });

  const togglePlayback = (video: HTMLVideoElement | null) => {
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  const openExpanded = () => {
    const video = videoRef.current;
    if (!video) return;

    const playerRect = playerRef.current?.getBoundingClientRect();
    if (playerRect) {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const rootFontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
      const maxWidth = 72 * rootFontSize;
      const targetWidth = Math.min(
        viewportWidth <= 600 ? viewportWidth - 32 : viewportWidth * 0.88,
        maxWidth,
      );
      const targetHeight = targetWidth * (10 / 16);

      setAnimationOrigin({
        x: playerRect.left + playerRect.width / 2 - viewportWidth / 2,
        y: playerRect.top + playerRect.height / 2 - viewportHeight / 2,
        scaleX: playerRect.width / targetWidth,
        scaleY: playerRect.height / targetHeight,
      });
    }

    shouldResumeEnlarged.current = !video.paused;
    enlargedStartTime.current = video.currentTime;
    video.pause();
    setIsEnlarged(true);
  };

  const closeExpanded = useCallback(() => {
    const mainVideo = videoRef.current;
    const enlargedVideo = enlargedVideoRef.current;
    if (mainVideo && enlargedVideo) {
      mainVideo.currentTime = enlargedVideo.currentTime;
      const resume = !enlargedVideo.paused && !enlargedVideo.ended;
      enlargedVideo.pause();
      setIsEnlargedPlaying(false);
      if (resume) void mainVideo.play();
    }
    setIsEnlarged(false);
  }, []);

  useEffect(() => {
    if (!isEnlarged) {
      if (hasExpandedBefore.current) expandButtonRef.current?.focus();
      return;
    }

    hasExpandedBefore.current = true;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeExpanded();
    };
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [closeExpanded, isEnlarged]);

  const enlargedPlayer = isEnlarged && (
    <div
      className="custom-video-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Enlarged video: ${ariaLabel}`}
      onClick={closeExpanded}
    >
      <div
        className="custom-video-lightbox__surface"
        style={{
          "--video-origin-x": `${animationOrigin.x}px`,
          "--video-origin-y": `${animationOrigin.y}px`,
          "--video-origin-scale-x": animationOrigin.scaleX,
          "--video-origin-scale-y": animationOrigin.scaleY,
        } as CSSProperties}
        onClick={(event) => event.stopPropagation()}
      >
        <video
          ref={enlargedVideoRef}
          className="custom-video-player__video"
          src={src}
          playsInline
          muted
          preload="metadata"
          poster={poster}
          aria-label={ariaLabel}
          onLoadedMetadata={(event) => {
            event.currentTarget.currentTime = enlargedStartTime.current;
            if (shouldResumeEnlarged.current) void event.currentTarget.play();
          }}
          onPlay={() => setIsEnlargedPlaying(true)}
          onPause={() => setIsEnlargedPlaying(false)}
          onEnded={() => setIsEnlargedPlaying(false)}
        />
        <button
          className="custom-video-player__toggle"
          type="button"
          onClick={() => togglePlayback(enlargedVideoRef.current)}
          aria-label={isEnlargedPlaying ? "Pause video" : "Play video"}
        >
          <PlayPauseIcon isPlaying={isEnlargedPlaying} />
        </button>
        <button
          className="custom-video-player__expand"
          ref={closeButtonRef}
          type="button"
          onClick={closeExpanded}
          aria-label="Close enlarged video"
          title="Close enlarged video"
        >
          <ExpandIcon expanded />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="custom-video-player" ref={playerRef}>
        <video
          ref={videoRef}
          className="custom-video-player__video"
          playsInline
          muted
          preload="metadata"
          poster={poster}
          aria-label={ariaLabel}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        <button
          className="custom-video-player__toggle"
          type="button"
          onClick={() => togglePlayback(videoRef.current)}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <PlayPauseIcon isPlaying={isPlaying} />
        </button>
        <button
          className="custom-video-player__expand"
          ref={expandButtonRef}
          type="button"
          onClick={openExpanded}
          aria-label="Enlarge video"
          title="Enlarge video"
        >
          <ExpandIcon />
        </button>
      </div>
      {typeof document !== "undefined" && enlargedPlayer
        ? createPortal(enlargedPlayer, document.body)
        : null}
    </>
  );
}
