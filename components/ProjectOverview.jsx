// components/ProjectOverview.jsx
// Project Overview section
import Image from "next/image";

export default function ProjectOverview({
  breadcrumb,
  title,
  role,
  timeline,
  team,
  skills,
  heroImage,
}) {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="text-xs tracking-nav text-foreground/50 uppercase">
        {breadcrumb}
      </div>

      {/* Title */}
      <h1 className="text-hero leading-[42px] max-w-3xl">
        {title}
      </h1>

      {/* Hero image */}
      <div className="mt-6 border border-[#D1D1D1] overflow-hidden">
        <Image
          src={heroImage}
          alt={title}
          width={1200}
          height={700}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Meta row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs uppercase tracking-nav">
        <div>
          <div className="text-foreground/50 mb-1">Role</div>
          <div className="text-foreground/80"> {role} </div>
        </div>
        <div>
          <div className="text-foreground/50 mb-1">Timeline</div>
          <div className="text-foreground/80">{timeline}</div>
        </div>
        <div>
          <div className="text-foreground/50 mb-1">Team</div>
          <div className="text-foreground/80">{team}</div>
        </div>
        <div>
          <div className="text-foreground/50 mb-1">Skills</div>
          <div className="text-foreground/80">
            {skills.join(" • ")}
          </div>
        </div>
      </div>
    </div>
  );
}