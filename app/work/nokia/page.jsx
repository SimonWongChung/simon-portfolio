// app/work/nokia/page.jsx
import ProjectSideNav from "@/components/ProjectSideNav";
import ProjectOverview from "@/components/ProjectOverview";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ProjectVideo from "@/components/ProjectVideo";
import ProjectTwoColumn from "@/components/ProjectTwoColumn";

const sections = [
  { id: "overview", label: "Overview" },
//   { id: "problem", label: "Problem" },
//   { id: "insights", label: "Insights" },
//   { id: "solution", label: "Solution" },
//   { id: "design", label: "Design Decision" },
//   { id: "system", label: "Design System" },
//   { id: "reflection", label: "Reflection" },
];

export default function vchPage() {
  return (
    <main className="app-container px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,768px)_1fr] gap-x-8">
            
            {/* Column 1 – left flexible column (holds nav) */}
            <aside className="hidden md:block sticky top-28 self-start">
            <div className="w-max">
                <ProjectSideNav sections={sections} />
            </div>
            </aside>

            {/* Column 2 – content (centered because grid col 1 and 3 grow equally) */}
            <article className="space-y-12">
            <section className="scroll-mt-28 mb-24">
                <ProjectOverview
                    breadcrumb="INTERNSHIP"
                    title="Designing how teams monitor and deploy AI agents at Nokia"
                    summary={
                        <>
                            I’m currently a UX Designer Intern on Nokia’s Analytics team, working on a platform within{" "}
                            <a
                                href="https://www.nokia.com/autonomous-networks/data-suite/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-text-description hover:decoration-text-description"
                            >
                                Nokia Data Suite
                                <ArrowUpRight
                                    aria-hidden="true"
                                    className="ml-0.5 inline-block size-[1em] align-[-0.1em] transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                                />
                            </a> that helps network operations teams build, deploy, and monitor their own AI agents. My work focuses on making agent deployment simpler and agent performance easier to understand at a glance.
                        </>
                    }
                    role="UX Design Intern, Analytics"
                    timeline="September - December 2026 (14 weeks)"
                    // team="3 Designers"
                    teamLabel="Tools"
                    team={[
                        "Figma",
                        "Cursor",
                    ]}
                    skills={[
                        "UX Design",
                        "Content Design",
                        "Systems Thinking",
                        "AI-Assisted Prototyping",
                    ]}
                    heroImage="/assets/work/nokia.mp4"
                    mediaType="video"
                />
            </section>


            
            </article>

            {/* Column 3 – right flexible column */}
            <div className="hidden md:block" />

        </div>
    </main>
  );
}