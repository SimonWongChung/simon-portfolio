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

      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-6 items-start mb-8">
        
        {/* MEDIA (image OR video) */}
        <div className={imageWrapperOrder}>
          <div className={`${imageBgClass}`}>

            {/* If videoSrc exists → show video; else show image */}
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay 
                loop
                muted // important: required for autoPlay on most browsers
                playsInline // prevents IOS from forcing fullscreen
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
        <div className={`self-end space-y-2 ${textWrapperOrder}`}>
          {title && (
            <h3 className="font-semibold text-[16px] text-foreground">
              {title}
            </h3>
          )}

          {body && (
            <div className="tracking-tight text-foreground">
              {typeof body === "string" ? <p>{body}</p> : body}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectTwoColumn;