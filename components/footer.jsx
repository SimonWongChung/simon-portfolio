"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Load react-youtube only on the client (avoids window issues in Next.js)
const YouTube = dynamic(() => import("react-youtube"), { ssr: false });

const Footer = () => {
  const [time, setTime] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const playerRef = useRef(null);

  // Live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayerReady = (event) => {
    playerRef.current = event.target; // this is the real YT player instance
    setIsPlayerReady(true);
  };

  const handleJamClick = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      // Pause at current position
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      // Resume from current position (or start if first time)
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  return (
    <footer className="relative app-container px-6 py-6 font-mono text-footer flex items-center justify-between text-[#000000]">
       <div className="flex items-center tracking-extra-tight space-x-4">
          <span>{time}</span>
          <span>Vancouver, BC</span>
      </div>

      <button
        type="button"
        onClick={handleJamClick}
        className="hover:opacity-60 transition-opacity transition-opacity duration-300 transition-transform duration-300 cursor-pointer tracking-extra-tight"
        disabled={!isPlayerReady}
      >
        {isPlaying ? "Let's jam 😎 (now playing)" : "Let's jam 😎"}
      </button>

      {/* Hidden YouTube player – react-youtube controls the iframe */}
      <div className="absolute w-0 h-0 opacity-0 pointer-events-none">
        <YouTube
          videoId="G9Wg4mtcXmc"
          onReady={handlePlayerReady}
          opts={{
            height: "0",
            width: "0",
            playerVars: {
              autoplay: 0,        // we control playback via button
              rel: 0,
              modestbranding: 1,
            },
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;