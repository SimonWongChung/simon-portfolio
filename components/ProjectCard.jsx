import Link from "next/link";

export default function ProjectCard({
  title,
  category,
  year,
  description,
  thumbnail,
  href,
}) {
  return (
    <Link href={href} className="group block"> 
      <div className="overflow-hidden bg-gray-200">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03] border border-border-light"
        />
      </div>
      <div className="group-hover:opacity-60 transition-opacity duration-150 mt-3 font-medium">
        <div className="text-[16px] text-text-date tracking-tight">
            {category} • {year}
        </div>

        <h3 className="text-[20px] text-text-projectName font-mono tracking-extra-tight">
            {title}
        </h3>

        <p className="text-[14px] text-text-description tracking-tight">
            {description}
        </p>
      </div>
    </Link>
  );
}