// app/work/recover-together/page.jsx
import ProjectSideNav from "@/components/ProjectSideNav";
import ProjectOverview from "@/components/ProjectOverview";
import Image from "next/image";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "solution", label: "Final Website" },
  { id: "components", label: "Components Overview" },
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
                    title="Creating a design system from the ground up and designed the website UI"
                    role="Product Designer"
                    timeline="August – October 2024"
                    // team="3 Designers"
                    team={[
                        "Product Designer on team of 3 Designers"
                    ]}
                    skills={[
                        "Design System",
                        "Prototyping",
                        "UI Design"
                    ]}
                    heroImage="/assets/enactus/enactus-project-preview.png"
                />
            </section>

            <section id="overview" className="scroll-mt-28">
                {/* Overview */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Overview
                </h4>
                <p className="tracking-tight text-foreground">
                    As part of the global organization Enactus, Enactus SFU is committed to expanding sustainable projects each year, empowering students to develop entrepreneurial skills and become future leaders. Through its website, Enactus aims to raise awareness of its mission and attract sponsors to support students on their journey.To streamline design and development, I created a comprehensive design system. I also collaborated with another UI designer to design the website's user interface.
                </p>
            </section>

            <section id="solution" className="scroll-mt-28">
                {/* Overview */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Final Website
                </h4>
                <p className="tracking-tight text-foreground">
                    Recover Together was designed to bridge the gap between displaced residents and volunteer resources, providing a platform for wildfire victims struggling to find help and volunteers unsure of how and where to assist. In this six-week academic project, my team of three grounded our idea through user research, leading to the development of the app's interactive features. I was primarily responsible for user research, designing the mobile interface features and conducting usability testings.
                </p>
            </section>

            <section id="components" className="scroll-mt-28">
                {/* Research */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Components Overview
                </h4>
                <div className="border border-[#D1D1D1] overflow-hidden mb-8">
                <Image
                    src="/assets/enactus/component-overview.png" 
                    alt="Components Overview"
                    width={1200}
                    height={700}
                    className="w-full h-auto object-cover"
                />
                </div>
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