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
    <main className="app-container px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,768px)_1fr] gap-x-8">
            
            {/* Column 1 – left flexible column (holds nav) */}
            <aside className="hidden md:block">
            <div className="w-[200px]">
                <ProjectSideNav sections={sections} />
            </div>
            </aside>

            {/* Column 2 – content (centered because grid col 1 and 3 grow equally) */}
            <article className="space-y-16">
            <section id="overview" className="scroll-mt-28">
                <ProjectOverview
                    breadcrumb="Recover Together"
                    title="Bridging the gap between wildfire survivors and volunteer support"
                    role="Product Designer"
                    timeline="March – April 2025"
                    team="3 Designers"
                    skills={[
                        "Product Design",
                        "UX Research",
                        "Usability Testing",
                        "Prototyping",
                    ]}
                    heroImage="/images/recover-hero.png"
                />
            </section>

            <section id="solution" className="scroll-mt-28">
                {/* Solution content */}
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