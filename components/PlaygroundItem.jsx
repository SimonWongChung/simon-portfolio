// components/PlaygroundItem.jsx
import Link from "next/link";

export default function PlaygroundItem({
  number,
  title,
  href,
  src,
  alt = "",
  fit = "cover",
}) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <Link href={href} target="_blank" className="group block">
      {/* Number + title */}
      <div className="mb-2 text-xs text-foreground">
        <span className="text-foreground/70">{number}</span>
        <span className="ml-2 opacity-0 translate-y-0.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          {title}
        </span>
      </div>

      {/* Image */}
      <div className="w-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto ${fitClass} transition-opacity duration-200 group-hover:opacity-95`}
        />
      </div>
    </Link>
  );
}