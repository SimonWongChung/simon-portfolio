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
    <div className="">
      {/* Project Name */}
      <div className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
        {breadcrumb}
      </div>

      {/* Title */}
      <div className="text-projectTitle text-text-projectTitle max-w-3xl mb-8">
        {title}
      </div>

      {/* Hero image */}
      <div className="border border-[#D1D1D1] overflow-hidden mb-8">
        <Image
          src={heroImage}
          alt={title}
          width={1200}
          height={700}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Meta row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <div className="text-highlight uppercase text-[#6B7280] font-mono mb-1">Role</div>
          <div className="text-foreground text-highlight tracking-tight"> {role} </div>
        </div>
        <div>
          <div className="text-highlight uppercase text-[#6B7280] font-mono mb-1">Timeline</div>
          <div className="text-foreground text-highlight tracking-tight">{timeline}</div>
        </div>
        <div>
          <div className="text-highlight uppercase text-[#6B7280] font-mono mb-1">Team</div>
          {/* <div className="text-foreground text-highlight tracking-tight">{team}</div> */}

          <div className="text-foreground text-highlight tracking-tight">
            {team.map((member) => (
                <div key={member}>{member}</div>
                ))}
          </div>
        </div>
        <div>
          <div className="text-highlight uppercase text-[#6B7280] font-mono mb-1">Skills</div>
          {/* <div className="text-foreground text-highlight tracking-tight">
            {skills.join(" • ")}
          </div> */}
          <div className="text-foreground text-highlight tracking-tight">
            {skills.map((skill) => (
                <div key={skill}>{skill}</div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}