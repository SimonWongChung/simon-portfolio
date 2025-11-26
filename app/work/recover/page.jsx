// app/work/recover-together/page.jsx
import ProjectSideNav from "@/components/ProjectSideNav";
import ProjectOverview from "@/components/ProjectOverview";
import Image from "next/image";
import ProjectVideo from "@/components/ProjectVideo";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "Solution" },
  { id: "features", label: "Features" },
  { id: "testing", label: "Usability Testing and Improvements" },
  { id: "flows", label: "Core Flows" },
  { id: "learnings", label: "Learnings" },
];

export default function RecoverTogetherPage() {
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
                    breadcrumb="Recover Together"
                    title="Bridging the gap between wildfire survivors and volunteer support"
                    role="Product Designer"
                    timeline="March – April 2025"
                    // team="3 Designers"
                    team={[
                        "Alison Lu",
                        "Seth van der Zweep"
                    ]}
                    skills={[
                        "Product Design",
                        "UX Research",
                        "Usability Testing",
                        "Prototyping",
                    ]}
                    heroImage="/assets/recover/recover-project-preview.png"
                />
            </section>

            <section id="overview" className="scroll-mt-28">
                {/* Overview */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Overview
                </h4>
                <p className="tracking-tight text-foreground">
                    Recover Together was designed to bridge the gap between displaced residents and volunteer resources, providing a platform for wildfire victims struggling to find help and volunteers unsure of how and where to assist. In this six-week academic project, my team of three grounded our idea through user research, leading to the development of the app's interactive features. I was primarily responsible for user research, designing the mobile interface features and conducting usability testings.
                </p>
            </section>

            <section id="research" className="scroll-mt-28">
                {/* Research */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Research
                </h4>
                <p className="tracking-tight text-foreground">
                    {/* JSX sometimes collapses or removes whitespace around inline elements. Developers add {" "} to force an explicit space where JSX would otherwise omit it. */}
                    Primary research involved {" "} <span className="font-semibold">interviewing 8 individuals</span> and engaging with wildfire-focused Facebook groups for insights into wildfire aftermath, while secondary research included analyzing over {" "} <span className="font-semibold">20 Quora and Reddit posts</span>, news articles, and academic papers.
                </p>

                <p className="mt-6 mb-2 font-semibold">
                    Impacted Demographics
                </p>
                <p>
                    Part of my Interviews and secondary research revealed two major demographics affected post-wildfire: <span className="font-semibold">displaced residents struggling to find basic necessities due to policy restrictions and reach</span>, and <span className="font-semibold">independent volunteers unsure where and how to contribute</span>. This highlighted a gap where a design intervention could address their pain points.
                </p>
                <Image
                    src="/assets/recover/research-1.png"
                    alt="Displaced Residents"
                    width={600}
                    height={400}
                    className="border border-[#E4E8EB] w-full h-auto object-cover mt-6"
                />
                <p className="mt-2 italic text-[#6B7280]">— Experience of displaced residents</p>

                <Image
                    src="/assets/recover/research-2.png"
                    alt="Affected Volunteers"
                    width={600}
                    height={400}
                    className="border border-[#E4E8EB] w-full h-auto object-cover mt-6"
                />
                <p className="mt-2 italic text-[#6B7280]">— Experience of independent volunteers</p>

                <p className="mt-10">Visually representing the interconnected needs of the two demographics and identifying gaps where effective design interventions could be developed.</p>
                <Image
                    src="/assets/recover/research-3.png"
                    alt="Venn Diagram"
                    width={600}
                    height={400}
                    className="border border-[#E4E8EB] w-full h-auto object-cover mt-4"
                />
                <p className="mt-2 italic text-[#6B7280]">— Venn diagram showing common pain points</p>
            </section>

            <section id="challenge" className="scroll-mt-28">
                {/* Solution */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Challenge
                </h4>
                <p className="text-[24px] leading-[32px]">
                    How might we streamline the connection between volunteers offering assistance and wildfire-affected residents in dire need of resources?
                </p>
            </section>

            <section id="solution" className="scroll-mt-28">
                {/* Solution */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Solution
                </h4>
                <p className="mt-3">Recover Together is a mobile application that enables displaced residents to post requests for assistance and allows volunteers to view and offer the needed help. The intent is to bridge the gap between impacted residents seeking resources and community volunteers offering those resources.</p>
                <ProjectVideo
                    src="/assets/recover/initial-solution.mov"
                    className="w-full h-auto mt-4 border border-[#E4E8EB]"
                />
            </section>

            <section id="features" className="scroll-mt-28">
                {/* Core Features */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Features
                </h4>
            </section>

            <section id="testing" className="scroll-mt-28">
                {/* Learnings */}
            </section>

            <section id="flows" className="scroll-mt-28">
                {/* Learnings */}
            </section>

            <section id="learnings" className="scroll-mt-28">
                {/* Learnings */}
            </section>
            </article>

            {/* Column 3 – right flexible column */}
            <div className="hidden md:block" />

        </div>
    </main>
  );
}