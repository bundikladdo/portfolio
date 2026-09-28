"use client";

import Image from "next/image";
import { useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { listeningTrack } from "@/data/site";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setIsPlaying(false);
    setHasError(true);
  };

  return (
    <div className="about-music-player" data-playing={isPlaying}>
      <span className="about-vinyl" aria-hidden="true">
        <Image
          src={listeningTrack.cover}
          alt=""
          width={600}
          height={600}
          unoptimized
        />
        <span className="about-vinyl-hole" />
      </span>
      <div className="about-music-info">
        <span className="about-music-title">{listeningTrack.title}</span>
        <span className="about-music-artist">
          {listeningTrack.artist} · {listeningTrack.album}
        </span>
        <AudioPlayer
          className="about-audio-controls"
          src={listeningTrack.previewSrc}
          autoPlay={false}
          autoPlayAfterSrcChange={false}
          preload="metadata"
          showJumpControls
          progressJumpSteps={{ backward: 10000, forward: 10000 }}
          showDownloadProgress={false}
          customProgressBarSection={[
            RHAP_UI.MAIN_CONTROLS,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.CURRENT_LEFT_TIME,
          ]}
          customControlsSection={[RHAP_UI.VOLUME_CONTROLS]}
          defaultCurrentTime="00:30"
          customIcons={{
            rewind: (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M6 5h2v14H6zm3 7 10 7V5z" />
              </svg>
            ),
            forward: (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M16 5h2v14h-2zM5 5v14l10-7z" />
              </svg>
            ),
          }}
          i18nAriaLabels={{
            ...AudioPlayer.defaultI18nAriaLabels,
            player: `${listeningTrack.title} preview`,
            rewind: "Back 10 seconds",
            forward: "Forward 10 seconds",
          }}
          onPlaying={() => {
            setIsPlaying(true);
            setHasError(false);
          }}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          onWaiting={() => setIsPlaying(false)}
          onError={handleError}
          onPlayError={handleError}
        />
        {hasError && (
          <p className="about-music-error" role="status">
            {listeningTrack.unavailableLabel}
          </p>
        )}
        <div className="about-music-source">
          <span>{listeningTrack.previewLabel}</span>
          <a href={listeningTrack.href} target="_blank" rel="noreferrer">
            {listeningTrack.linkLabel} ↗
          </a>
        </div>
      </div>
    </div>
  );
}
