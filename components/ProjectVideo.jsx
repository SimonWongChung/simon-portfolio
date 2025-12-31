"use client";

import { useRef } from "react";

export default function ProjectVideo({
  src,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
}) {
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.paused ? video.play() : video.pause();
  };

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      className={`cursor-pointer ${className}`}
      onClick={togglePlay}
    />
  );
}
