// components/AboutItem.jsx
export default function AboutItem({
  number,     // "01."
  title,      // optional, e.g. "Tokyo" (if you want)
  src,
  alt = "",
  fit = "cover",          // "cover" or "contain"
}) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div className="group">
      {/* Label */}
      {/* <div className="mb-2 text-xs font-mono text-foreground">
        <span className="text-foreground/70">{number}</span> */}

        {/* reveal text on hover (optional) */}
        {/* {title && (
          <span className="ml-2 opacity-0 translate-y-0.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
            {title}
          </span>
        )}
      </div> */}

      <div className="mb-2 text-xs text-foreground">
        <span className="text-foreground/70">{number}</span>
        <span className="ml-2 opacity-0 translate-y-0.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          {title}
        </span>
      </div>

      {/* Image */}
      <div className={`w-full overflow-hidden`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full ${fitClass} transition-opacity duration-200 group-hover:opacity-95`}
        />
      </div>
    </div>
  );
}