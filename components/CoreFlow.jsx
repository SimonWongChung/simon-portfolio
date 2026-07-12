"use client";

// components/CoreFlow.jsx
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const CoreFlow = ({
  sectionLabel,
  title,
  body,
  imageSrc,
  imageAlt,
  videoSrc,
  imageBgClass = "bg-[#E5BB9F]",
  reverseOnDesktop = false,
}) => {
  const imageWrapperOrder = reverseOnDesktop ? "md:order-2" : "";
  const textWrapperOrder = reverseOnDesktop ? "md:order-1" : "";

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

  return (
    <section className="scroll-mt-28">

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 md:gap-6 items-start mb-8">
        
        {/* MEDIA (image OR video) */}
        <div className={imageWrapperOrder}>
          <div className={`${imageBgClass}`}>

            {/* If videoSrc exists → show video; else show image */}
            {videoSrc ? (
              <video
                ref={videoRef}
                src={inView ? videoSrc : undefined}
                preload="none"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto border border-[#E4E8EB]"
              />
            ) : (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={900}
                height={900}
                className="w-full h-auto border border-[#E4E8EB]"
              />
            )}

          </div>
        </div>

        {/* TEXT */}
        <div className={`self-end space-y-1 ${textWrapperOrder}`}>
          {title && (
            <h3 className="text-[20px] text-foreground tracking-tight">
              {title}
            </h3>
          )}

          {body && (
            <div className="text-[15px] tracking-tight text-foreground/70">
              {typeof body === "string" ? <p>{body}</p> : body}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoreFlow;