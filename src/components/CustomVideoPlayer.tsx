type CustomVideoPlayerProps = {
  src: string;
  poster?: string;
  ariaLabel: string;
};

export function CustomVideoPlayer({ src, poster, ariaLabel }: CustomVideoPlayerProps) {
  return (
    <div className="custom-video-player">
      <video className="custom-video-player__video" controls playsInline muted preload="none" poster={poster} aria-label={ariaLabel}>
        <source src={src} type="video/mp4" />
        Your browser does not support embedded video. <a href={src}>Download the screen recording</a>.
      </video>
    </div>
  );
}
