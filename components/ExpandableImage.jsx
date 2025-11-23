"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ExpandableImage({
  src,
  alt,
  width,
  height,
  className = "",
  modalClassName = "",
}) {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") {
        setAnimate(false);
        setTimeout(() => setOpen(false), 150);
      }
    };

    if (open) {
      window.addEventListener("keydown", closeOnEsc);
    }

    return () => window.removeEventListener("keydown", closeOnEsc);
  }, [open]);

  // Play zoom animation after opening
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [open]);

  return (
    <>
      {/* Thumbnail */}
      <div
        className={`cursor-zoom-in ${className}`}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Modal */}
      {open && (
        <div
          className={`
            fixed inset-0 bg-black/70 backdrop-blur-sm
            flex items-center justify-center z-50 p-4
            transition-opacity duration-300
            ${animate ? "opacity-100" : "opacity-0"}
          `}
          onClick={() => {
            setAnimate(false);
            setTimeout(() => setOpen(false), 150);
          }}
        >
          <div className="relative max-w-6xl w-full">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-black text-3xl z-50"
              onClick={(e) => {
                e.stopPropagation();
                setAnimate(false);
                setTimeout(() => setOpen(false), 150);
              }}
            >
              &times;
            </button>

            {/* Expanded Image */}
            <div
              className={`
                transition-transform duration-300
                ${animate ? "scale-100 opacity-100" : "scale-95 opacity-0"}
              `}
            >
              <Image
                src={src}
                alt={alt}
                width={width * 1.5}
                height={height * 1.5}
                className={`rounded-lg shadow-2xl mx-auto ${modalClassName}`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
