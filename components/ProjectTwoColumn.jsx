// components/ProjectTwoColumn.jsx
import Image from "next/image";

const ProjectTwoColumn = ({
  sectionLabel,
  title,
  body,
  imageSrc,
  imageAlt,
  videoSrc,               // NEW: video file path
  imageBgClass = "bg-[#E5BB9F]",
  reverseOnDesktop = false,
}) => {
  const imageWrapperOrder = reverseOnDesktop ? "md:order-2" : "";
  const textWrapperOrder = reverseOnDesktop ? "md:order-1" : "";

  return (
    <section className="scroll-mt-28">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        
        {/* MEDIA (image OR video) */}
        <div className={imageWrapperOrder}>
          <div className={`${imageBgClass} p-10 md:p-14`}>

            {/* If videoSrc exists → show video; else show image */}
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            ) : (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={900}
                height={900}
                className="w-full h-auto"
              />
            )}

          </div>
        </div>

        {/* TEXT */}
        <div className={`space-y-3 ${textWrapperOrder}`}>
          {title && (
            <h3 className="font-semibold text-[20px] text-foreground">
              {title}
            </h3>
          )}

          {body && (
            <div className="text-[14px] leading-relaxed text-foreground/80">
              {typeof body === "string" ? <p>{body}</p> : body}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectTwoColumn;