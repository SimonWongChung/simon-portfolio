// app/work/vch/page.jsx
import ProjectSideNav from "@/components/ProjectSideNav";
import ProjectOverview from "@/components/ProjectOverview";
import Image from "next/image";
import ProjectVideo from "@/components/ProjectVideo";
import ProjectTwoColumn from "@/components/ProjectTwoColumn";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "insights", label: "Insights" },
  { id: "solution", label: "Solution" },
  { id: "design", label: "Design Decision" },
  { id: "system", label: "Design System" },
  { id: "reflection", label: "Reflection" },
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
                    breadcrumb="VCH INTERNSHIP"
                    title="Helping employees and managers adopt a new workforce management system"
                    role="UX Designer"
                    timeline="January - August 2025"
                    // team="3 Designers"
                    team={[
                        "Sole Designer"
                    ]}
                    skills={[
                        "UX Design",
                        "Prototyping",
                        "Information Architecture",
                    ]}
                    heroImage="/assets/vch/vch-project-preview.png"
                />
            </section>

            <section id="overview" className="scroll-mt-28 space-y-4">
                {/* Overview */}
                <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase">
                    Overview
                </h4>
                <p className="text-mainLine tracking-tight">
                    VCH is a healthcare organization supporting thousands of employees across diverse roles and digital skill levels
                </p>
                <p className="tracking-tight text-foreground/70">
                    As a new workforce management platform was rolled out to frontline employees and people managers, many struggled to navigate its complexity. I designed an end-to-end onboarding and learning experience to support confident system adoption across roles.
                </p>
            </section>

            <section id="problem" className="scroll-mt-28 space-y-4">
                {/* Problem */}
                <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase">
                    Problem
                </h4>
                <p className="text-mainLine tracking-tight">
                    Complex platform for a large user base of varied digital literacy
                </p>
                <p className="tracking-tight text-foreground/70">
                    Unionized and excluded employees followed different timekeeping processes, and many were not tech-savvy, feeling overwhelmed by a system that directly affected scheduling, time-off, and pay. With limited time, managers required deeper system knowledge, yet existing resources were fragmented and difficult to navigate. Any errors could directly impact payroll and workforce operations.
                </p>
                <p className="tracking-tight text-foreground/70">
                    To better understand where users struggled, I analyzed key workflows across employee types and roles.
                </p>
            </section>

            <section id="insights" className="scroll-mt-28">
                {/* Key Insight 1 */}
                <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase tracking-[-0.01em]">
                        Key Insights
                    </h4>
                    <p className="text-mainLine tracking-tight">
                        Different employee classifications created divergent task flows
                    </p>
                    <p className="tracking-tight text-foreground/70">
                        Mapping employee journeys revealed that unionized and excluded employees used the same interface but followed different timekeeping workflows. While excluded employees could bypass certain steps, unionized employees were required to complete mandatory procedures, creating friction and confusion within a shared system.
                    </p>
                </div>
                <Image
                    src="/assets/vch/insight-1.png"
                    alt="Key Insight 1"
                    width={600}
                    height={400}
                    className="border border-[#E4E8EB] w-full h-auto object-cover mt-8"
                />
            </section>

            <section className="scroll-mt-28">
                {/* Key Insight 2 */}
                <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase tracking-[-0.01em]">
                        Key Insights
                    </h4>
                    <p className="text-mainLine tracking-tight">
                        Critical workflows required too many steps to recall reliably
                    </p>
                    <p className="tracking-tight text-foreground/70">
                        While employees and managers could now complete many tasks digitally, most workflows involved too many steps to recall reliably. Small variations between similar tasks increased cognitive load and introduced risk, particularly for high-impact actions such as payroll and scheduling.
                    </p>
                </div>
                <Image
                    src="/assets/vch/insight-2.png"
                    alt="Key Insight 2"
                    width={600}
                    height={400}
                    className="border border-[#E4E8EB] w-full h-auto object-cover mt-8"
                />
            </section>

            <section id="solution" className="scroll-mt-28">
                {/* Solution */}
                    <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase">
                        Solution
                    </h4>
                    <p className="text-mainLine tracking-tight">
                        Role-based onboarding and learning experiences
                    </p>
                    <p className="tracking-tight text-foreground/70">
                        I designed role-based onboarding journeys broken down into short, focused units, allowing each user group to learn key tasks through scenarios and simulations. This structure reduced cognitive load by guiding users through only the workflows relevant to their role, while reinforcing critical differences in procedures.
                    </p>
                </div>
                <ProjectVideo
                    src="/assets/vch/videos/Solution_compressed.mp4"
                    className="w-full h-auto mt-8 border border-[#E4E8EB]"
                />
            </section>

            <section id="design" className="scroll-mt-28">
                {/* Design Decision */}
                <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase">
                    Design Decisions
                </h4>
                <div className="mt-4 space-y-13">
                    <div>
                        <p className="text-secondaryLine tracking-tight mb-2">
                            Role-based onboarding and learning experiences
                        </p>
                        <p className="tracking-tight text-foreground/70">
                            By mirroring real-world use, users are able to build accurate mental models of the system, gain confidence in their actions, and understand the purpose behind each task rather than following arbitrary steps.
                        </p>
                        <ProjectVideo
                            src="/assets/vch/videos/DesignDecision-1-Scenarios.mp4"
                            className="w-full h-auto mt-5 border border-[#E4E8EB]"
                        />
                    </div>
                    <div>
                        <p className="text-secondaryLine tracking-tight mb-2">
                            Immersing users through a simulation
                        </p>
                        <p className="tracking-tight text-foreground/70">
                            Users are immersed directly within the platform, with contextual hotspots guiding attention to the correct actions at each step.
                        </p>
                        <ProjectVideo
                            src="/assets/vch/videos/DesignDecision-2.mp4"
                            className="w-full h-auto mt-5 border border-[#E4E8EB]"
                        />
                    </div>
                    <div>
                        <p className="text-secondaryLine tracking-tight mb-2">
                            Step-by-step guidance to support varied digital literacy
                        </p>
                        <p className="tracking-tight text-foreground/70">
                            Each step within the simulation was explicitly described to support users with varied levels of digital literacy and reduce reliance on prior system knowledge.
                        </p>
                        <ProjectVideo
                            src="/assets/vch/videos/DesignDecision-3-Steps.mp4"
                            className="w-full h-auto mt-5 border border-[#E4E8EB]"
                        />
                    </div>
                    <div>
                        <p className="text-secondaryLine tracking-tight mb-2">
                            Breaking down complex workflows
                        </p>
                        <p className="tracking-tight text-foreground/70">
                            I applied progressive disclosure by breaking complex workflows into short, focused units, allowing users to learn tasks incrementally and choose where to start or return as needed.
                        </p>
                        <ProjectVideo
                            src="/assets/vch/videos/DesignDecision-4-Complex.mp4"
                            className="w-full h-auto mt-5 border border-[#E4E8EB]"
                        />
                    </div>
                    <div>
                        <p className="text-secondaryLine tracking-tight mb-2">
                            Assessing users' understanding of the platform
                        </p>
                        <p className="tracking-tight text-foreground/70">
                            Using instructional design principles, I introduced self-assessments that allowed users to validate their understanding, reinforce learning, and build a sense of ownership before returning to the live system.
                        </p>
                        <ProjectVideo
                            src="/assets/vch/videos/DesignDecision-5-Assessment.mp4"
                            className="w-full h-auto mt-5 border border-[#E4E8EB]"
                        />
                    </div>
                </div>
            </section>

            <section id="system" className="scroll-mt-28">
                {/* Design System */}
                <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase tracking-[-0.01em]">
                        Design System
                    </h4>
                    <p className="text-mainLine tracking-tight">
                        Design system documentation for scalable handoff
                    </p>
                    <p className="tracking-tight text-foreground/70">
                        The documentation defined foundations for colour, typography, and components, along with clear guidelines for structuring onboarding journeys and individual screens to ensure consistency during handoff.
                    </p>
                </div>
                <div className="mt-8 space-y-10">
                <Image
                    // src="/assets/vch/Design System.png"
                    src="/assets/vch/DesignSystem.png"
                    alt="Design System"
                    width={600}
                    height={400}
                    className="border border-[#E4E8EB] w-full h-auto object-cover"
                />
                <Image
                    src="/assets/vch/Guideline.png"
                    alt="Design System"
                    width={600}
                    height={400}
                    className="border border-[#E4E8EB] w-full h-auto object-cover"
                />
                </div>
            </section>

            <section id="reflection" className="scroll-mt-28">
                {/* Reflection */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-4">
                    Reflection
                </h4>
                <p className="text-mainLine tracking-tight">
                    What I Learned
                </p>
                <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">
                    <div className="space-y-3">
                        <p className="text-[20px] tracking-tight">
                            The simplest designs can be the best solution
                        </p>
                        <p className="tracking-tight text-foreground/70">
                            Designing for users with varied digital literacy reinforced that simple experiences are the result of careful decisions. Reducing cognitive load meant understanding complex workflows and intentionally deciding what to guide, simplify, or remove.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-[20px] tracking-tight">
                            Design is not as straightforward and simple as it can seem
                        </p>
                        <p className="tracking-tight text-foreground/70">
                            Working within technical limitations and aligning with multiple stakeholders showed me that design is rarely linear. Iteration was often driven by constraints, and learning to adapt while still advocating for users was a key takeaway.
                        </p>
                    </div>
                </div>
            </section>
            </article>

            {/* Column 3 – right flexible column */}
            <div className="hidden md:block" />

        </div>
    </main>
  );
}