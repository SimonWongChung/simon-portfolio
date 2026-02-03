// app/work/vch/page.jsx
import ProjectSideNav from "@/components/ProjectSideNav";
import ProjectOverview from "@/components/ProjectOverview";
import Image from "next/image";
import ProjectVideo from "@/components/ProjectVideo";
import ProjectTwoColumn from "@/components/ProjectTwoColumn";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
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
                    breadcrumb="Unify"
                    title="Helping employees and managers adopt a new workforce management system"
                    role="Product Designer"
                    timeline="January - March 2025"
                    // team="3 Designers"
                    team={[
                        "Product Designer on team of 2 Designers"
                    ]}
                    skills={[
                        "Interaction Design",
                        "UX Design",
                        "Prototyping",
                    ]}
                    heroImage="/assets/unify/unify-project-preview.mov"
                    mediaType="video"
                />
            </section>

            <section id="overview" className="scroll-mt-28 space-y-4">
                {/* Overview */}
                <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase">
                    Overview
                </h4>
                <p className="text-mainLine tracking-tight">
                    Unify is a learning and events platform that helps newcomers to Canada find their footing
                </p>
                <p className="tracking-tight text-foreground/70">
                    Finances, jobs, housing, healthcare, and essential documents — the building blocks Unify brings together to help newcomers settle into life in Canada, step by step, through lessons and local events.
                </p>
            </section>

            <section id="problem" className="scroll-mt-28 space-y-4">
                {/* Problem */}
                <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase tracking-[-0.01em]">
                        Problem
                    </h4>
                    <p className="text-mainLine tracking-tight">
                        Settling in Canada is harder than it should be
                    </p>
                    <p className="tracking-tight text-foreground/70">
                        For newcomers, settling in Canada means rebuilding a life from scratch, often while navigating fragmented information and disconnected support systems.
                    </p>
                </div>
                <Image
                    src="/assets/unify/Problems.png"
                    alt="problems"
                    width={600}
                    height={400}
                    className="border border-[#E4E8EB] w-full h-auto object-cover mt-8 mb-8"
                />
                <p className="tracking-tight text-foreground/70">
                    These challenges are most intense in the first few months, when newcomers experience cognitive overload and must complete multiple time-sensitive tasks at once. This creates an opportunity for Unify to act as a central home base, organizing essential knowledge and events so newcomers can settle with clarity and confidence.
                </p>
            </section>

            <section id="opportunity" className="scroll-mt-28">
                {/* Opportunity */}
                <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase tracking-[-0.01em]">
                        Opportunity
                    </h4>
                    <p className="text-mainLine tracking-tight">
                        Own the settlement journey, not just the information
                    </p>
                    <div className="space-y-3">
                        <p className="tracking-tight text-foreground/70">
                            Newcomers aren't lacking information — they're lacking structure. During the most time-sensitive months of settlement, critical knowledge and support are fragmented across disconnected sources.
                        </p>
                        <p className="tracking-tight text-foreground/70">
                            Unify can own the settlement journey by organizing essential knowledge and events into a clear, continuous experience.
                        </p>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-7">
                    <div className="space-y-3">
                        <p className="text-[22px] tracking-tight">
                            Guidance
                        </p>
                        <p className="tracking-tight text-foreground/70">
                            Turn scattered resources into a clear, prioritized path that guides newcomers.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-[22px] tracking-tight">
                            Continuity
                        </p>
                        <p className="tracking-tight text-foreground/70">
                            Support progress over time by helping users resume learning and track where they left off.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-[22px] tracking-tight">
                            Connection
                        </p>
                        <p className="tracking-tight text-foreground/70">
                            Link learning to real-world events so users can act on information, not just read it.
                        </p>
                    </div>
                </div>
            </section>

            <section id="solution" className="scroll-mt-28">
                {/* Solution */}
                    <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase">
                        Solution
                    </h4>
                    <p className="text-mainLine tracking-tight">
                        Unify: a guided settlement journey, made simple
                    </p>
                    <p className="tracking-tight text-foreground/70">
                        Unify helps newcomers navigate their first months in Canada with clarity and confidence. Focused lessons provide structured guidance, while timely local events turn learning into action, reducing overwhelm and supporting progress over time.
                    </p>
                </div>
                <ProjectVideo
                    src="/assets/unify/videos/Solution Video.mov"
                    className="w-full h-auto mt-8 border border-[#E4E8EB]"
                />
            </section>

            <section className="scroll-mt-28">
                {/* Incomplete */}
                    <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase">
                        But wait!
                    </h4>
                    <p className="text-mainLine tracking-tight">
                        There's more!
                    </p>
                    <p className="tracking-tight text-foreground/70">
                        Apologies, but this case study is still in progress, so you're only looking at a piece of the process. If you'd like to learn more about this project, please don't hesitate to reach out!
                    </p>
                </div>
            </section>

            </article>

            {/* Column 3 – right flexible column */}
            <div className="hidden md:block" />

        </div>
    </main>
  );
}