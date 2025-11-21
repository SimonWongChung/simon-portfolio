// app/work/recover-together/page.jsx
import ProjectSideNav from "@/components/ProjectSideNav";
import ProjectOverview from "@/components/ProjectOverview";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "solution", label: "Solution" },
  { id: "research", label: "Research" },
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

            <section id="solution" className="scroll-mt-28">
                {/* Overview */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Solution
                </h4>
                <p className="tracking-tight text-foreground">
                    Recover Together was designed to bridge the gap between displaced residents and volunteer resources, providing a platform for wildfire victims struggling to find help and volunteers unsure of how and where to assist. In this six-week academic project, my team of three grounded our idea through user research, leading to the development of the app's interactive features. I was primarily responsible for user research, designing the mobile interface features and conducting usability testings.
                </p>
            </section>

            <section id="research" className="scroll-mt-28">
                {/* Research */}
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