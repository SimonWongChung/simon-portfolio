// app/work/recover-together/page.jsx
import ProjectSideNav from "@/components/ProjectSideNav";
import ProjectOverview from "@/components/ProjectOverview";
import Image from "next/image";
import ExpandableImage from "@/components/ExpandableImage";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "solution", label: "Final Website" },
  { id: "components", label: "Components Overview" },
  { id: "communication", label: "Communication" },
  { id: "inputs", label: "Inputs" },
  { id: "cta", label: "CTA" },
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

                <ExpandableImage
                    src="/assets/enactus/final-website.png"
                    alt="Final Website"
                    width={1200}
                    height={700}
                    className="border border-[#E4E8EB] overflow-hidden mb-8"
                    modalClassName="max-h-[90vh] object-contain"
                />
            </section>

            <section id="components" className="scroll-mt-28">
                {/* Research */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Components Overview
                </h4>
                {/* <div className="border border-[#D1D1D1] overflow-hidden mb-8">
                <Image
                    src="/assets/enactus/component-overview.png" 
                    alt="Components Overview"
                    width={1200}
                    height={700}
                    className="w-full h-auto object-cover"
                />
                </div> */}

                <ExpandableImage
                    src="/assets/enactus/component-overview.png"
                    alt="Components Overview"
                    width={1200}
                    height={700}
                    className="border border-[#E4E8EB] overflow-hidden mb-10"
                    modalClassName="max-h-[90vh] object-contain"
                />

                 <ExpandableImage
                    src="/assets/enactus/component-overview-2.png"
                    alt="Components Overview 2"
                    width={1200}
                    height={700}
                    className="border border-[#E4E8EB] overflow-hidden mb-8"
                    modalClassName="max-h-[90vh] object-contain"
                />
            </section>

            <section id="communication" className="scroll-mt-28">
                {/* Communication */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Communication
                </h4>
                <ExpandableImage
                    src="/assets/enactus/communication.png"
                    alt="Communication"
                    width={1200}
                    height={700}
                    className="border border-[#E4E8EB] overflow-hidden mb-8"
                    modalClassName="max-h-[90vh] object-contain"
                />
            </section>

            <section id="inputs" className="scroll-mt-28">
                {/* Inputs*/}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Inputs
                </h4>
                <ExpandableImage
                    src="/assets/enactus/inputs.png"
                    alt="Inputs"
                    width={1200}
                    height={700}
                    className="border border-[#E4E8EB] overflow-hidden mb-8"
                    modalClassName="max-h-[90vh] object-contain"
                />
            </section>

            <section id="cta" className="scroll-mt-28">
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    CTA
                </h4>
                {/* CTA*/}
                <ExpandableImage
                    src="/assets/enactus/CTA.png"
                    alt="CTA"
                    width={1200}
                    height={700}
                    className="border border-[#E4E8EB] overflow-hidden mb-8"
                    modalClassName="max-h-[90vh] object-contain"
                />
            </section>

            <section id="learnings" className="scroll-mt-28">
                {/* Learnings */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Learnings
                </h4>
                <p className="tracking-tight text-foreground">
                    Through this project, I learned that maintaining a design system is more challenging than it appears. What I designed in Figma didn’t always translate directly into development, which made me realize the importance of proper documentation and collaboration with developers. I found that developers may interpret design components differently, so having clear communication—and some understanding of web and app development—helps bridge that gap. This experience also emphasized the need for quality assurance to ensure the final product reflects the intended design. Overall, it taught me that building a design system isn’t just about consistency in visuals, but also in process, communication, and implementation.
                </p>
            </section>
            </article>

            {/* Column 3 – right flexible column */}
            <div className="hidden md:block" />

        </div>
    </main>
  );
}