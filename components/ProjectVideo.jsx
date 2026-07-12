"use client";

import { useRef, useState, useEffect } from "react";

export default function ProjectVideo({
  src,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
}) {
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.paused ? video.play() : video.pause();
  };

  return (
    <video
      ref={videoRef}
      src={inView ? src : undefined}
      preload="none"
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      className={`cursor-pointer ${className}`}
      onClick={togglePlay}
    />
  );
}
