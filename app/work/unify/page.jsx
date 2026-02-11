// app/work/vch/page.jsx
import ProjectSideNav from "@/components/ProjectSideNav";
import ProjectOverview from "@/components/ProjectOverview";
import Image from "next/image";
import ProjectVideo from "@/components/ProjectVideo";
import ProjectTwoColumn from "@/components/ProjectTwoColumn";
import CoreFlow from "@/components/CoreFlow";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "flows", label: "Core Flows" },
  { id: "research", label: "Research" },
  { id: "ideation", label: "Ideation and Testing" },
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

            <section id="problem" className="scroll-mt-28 space-y-4 mt-20">
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
                    width={1600}
                    height={800}
                    className="border border-[#E4E8EB] w-full h-auto mt-8 mb-8"
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

            <section id="solution" className="scroll-mt-28 mt-20">
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

            <section id="flows" className="scroll-mt-28 mt-20">
                {/* Core Flows */}
                <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase mb-4">
                    Core Flows
                </h4>

                <CoreFlow
                    title="Continue your learning path"
                    body="Pick up where you left off and stay focused on what matters most next."
                    videoSrc="/assets/unify/videos/CoreFlow1.mov"
                />

                <CoreFlow
                    title="Choose a focused topic"
                    body="Browse structured topics within each subject to learn one essential system at a time."
                    videoSrc="/assets/unify/videos/CoreFlow2.mov"
                />

                <CoreFlow
                    title="Learn at your own pace"
                    body="Read clear, step-by-step lessons designed for newcomers with no prior context."
                    videoSrc="/assets/unify/videos/CoreFlow3.mov"
                />

                <CoreFlow
                    title="Quick check, no pressure"
                    body="Optionally review key ideas to reinforce understanding before moving on."
                    videoSrc="/assets/unify/videos/CoreFlow4.mov"
                />

                <CoreFlow
                    title="Turn learning into action"
                    body="Register for local events and workshops to apply what you've learned and connect with others."
                    videoSrc="/assets/unify/videos/CoreFlow5.mov"
                />
            </section>

            <section id="research" className="scroll-mt-28 space-y-4 mt-20">
                {/* Research */}
                <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase tracking-[-0.01em]">
                        Research
                    </h4>
                    <p className="text-mainLine tracking-tight">
                        Researching the settlement journey in Canada
                    </p>
                    <p className="tracking-tight text-foreground/70">
                        To understand where newcomers struggle most during their first months in Canada, we analyzed how settlement tasks are experienced over time. Using a mix of secondary research, online community discussions, and interviews, we identified recurring patterns in how newcomers seek information, prioritize tasks, and look for support.
                    </p>
                    <p className="tracking-tight text-foreground/70">
                        Our research focused less on individual tasks and more on when guidance is needed and how it can reduce overwhelm during an already complex transition.
                    </p>
                </div>
                <Image
                    src="/assets/unify/Research.png"
                    alt="problems"
                    width={1600}
                    height={1000}
                    className="border border-[#E4E8EB] w-full h-auto mt-8 mb-8"
                />
            </section>

            <section className="scroll-mt-28">
                {/* Strategic Focus Areas */}
                <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase">
                        Strategic Focus Areas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-7">
                        <div className="space-y-3">
                            <p className="text-[22px] tracking-tight">
                                Primary users
                            </p>
                            <p className="tracking-tight text-foreground/70">
                                Newcomers in their first few months in Canada, when unfamiliar systems and time-sensitive tasks overlap.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <p className="text-[22px] tracking-tight">
                                Key settlement topics
                            </p>
                            <p className="tracking-tight text-foreground/70">
                                Finance, employment, housing, documentation, healthcare, and Canadian culture emerged as the most critical areas for early support.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <p className="text-[22px] tracking-tight">
                                Community support
                            </p>
                            <p className="tracking-tight text-foreground/70">
                                Newcomers rely on informal communities for validation and advice, highlighting how human connection builds confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="scroll-mt-28">
                {/* Key Insights */}
                <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase">
                        Key Insights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                        <div className="space-y-2">
                            <p className="text-[22px] tracking-tight">
                                1. Uncertainty, not information, is the core challenge
                            </p>
                            <p className="tracking-tight text-foreground/70">
                                Newcomers are often overwhelmed by not knowing what to do next, even when information is technically available.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[22px] tracking-tight">
                                2. Early settlement tasks overlap and compete for attention
                            </p>
                            <p className="tracking-tight text-foreground/70">
                                During the first few months, multiple time-sensitive tasks happen at once, making prioritization and sequencing critical.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[22px] tracking-tight">
                                3. Community fills gaps left by fragmented systems
                            </p>
                            <p className="tracking-tight text-foreground/70">
                                In the absence of clear, centralized guidance, many newcomers turn to online communities for reassurance and practical advice.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[22px] tracking-tight">
                                4. Learning is more effective when paired with real-world support
                            </p>
                            <p className="tracking-tight text-foreground/70">
                                Access to workshops, events, and human connection helps newcomers apply knowledge and build confidence beyond reading alone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ideation" className="scroll-mt-28 space-y-4 pt-8">
                {/* Ideation and Testing */}
                <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase tracking-[-0.01em]">
                        Ideation and Testing
                    </h4>
                    <p className="text-mainLine tracking-tight">
                        Since the information is already available, we focused on how to present it
                    </p>
                    <p className="tracking-tight text-foreground/70">
                        While research showed that information was widely available, newcomers struggled with structure and prioritization. The core challenge became: 
                    </p>
                    <div className="border-l-2 border-[#838E98] pl-4 mt-8">
                        <p className="text-[22px] tracking-tight text-[#2E4150]">
                            How might we structure essential tasks to reduce complexity while enabling meaningful progress tracking?
                        </p>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                    <div className="border border-[#E4E8EB] bg-[#F7F7F7]">
                        <ProjectVideo
                            src="/assets/unify/videos/Idea1.mov"
                            className="w-full h-auto"
                        />
                        <div className="border border-[#E4E8EB] ml-4 mr-4"></div>
                        <p className="text-[14px] tracking-tight text-foreground/70 py-4 px-4">
                            A <span className="font-semibold">self-directed map</span> that visualized progress spatially, encouraging exploration and growth.
                        </p>
                    </div>

                    <div className="border border-[#E4E8EB] bg-[#F7F7F7]">
                        <ProjectVideo
                            src="/assets/unify/videos/Idea2.mov"
                            className="w-full h-auto"
                        />
                        <div className="border border-[#E4E8EB] ml-4 mr-4"></div>
                        <p className="text-[14px] tracking-tight text-foreground/70 py-4 px-4">
                            A <span className="font-semibold">linear journey</span> emphasizing clear sequencing, dependencies, and completion milestones.
                        </p>
                    </div>
                </div>

                <p className="tracking-tight text-foreground/70">
                    We got users to try these prototypes, observed how they used them, how they felt, and got tons of valuable feedback.
                </p>
            </section>

            <section className="scroll-mt-28">
                {/* Insights */}
                <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase">
                        Insights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 items-start">
                        <p className="text-[20px] tracking-tight">
                            What did we learn from testing the journey map concepts?
                        </p>
                        <div className="space-y-4">
                            {[
                                { bold: "visually overwhelming", text: ", making it dense and difficult to interpret at a glance.", prefix: "The exploratory map felt " },
                                { bold: "reduced flexibility", text: ", leading users to question whether they needed to complete every step, especially when they already had prior knowledge.", prefix: "A strictly linear journey " },
                                { bold: "does not allow for proper scaling", text: ", as adding more lessons risked crowding the map and making it harder to navigate.", prefix: "The structure " },
                                { bold: "digestible lessons more approachable", text: " than large module groupings.", prefix: "Users preferred smaller, focused units, finding " },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-2">
                                    <span className="text-[15px] shrink-0">→</span>
                                    <p className="text-[15px] tracking-tight text-foreground/70">
                                        {item.prefix}
                                        <span className="font-semibold text-foreground/80">{item.bold}</span>
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="scroll-mt-28 space-y-4">
                {/* Where We Landed */}
                <div className="space-y-4">
                    <h4 className="text-projectHeader font-mono text-[#6B7280] uppercase tracking-[-0.01em]">
                        Where We Landed
                    </h4>
                    <p className="text-mainLine tracking-tight">
                        We changed our approach to make it less like a formal course
                    </p>
                    <p className="tracking-tight text-foreground/70">
                        To reduce cognitive load, we moved away from a centralized journey map. Instead, content was broken into smaller, digestible lessons, with progress tracked at the topic level rather than across the entire system.
                    </p>
                </div>
                <Image
                    src="/assets/unify/InformationArchitecture.png"
                    alt="Information Architecture change"
                    width={1200}
                    height={1600}
                    className="border border-[#E4E8EB] w-full h-auto mt-8 mb-8"
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