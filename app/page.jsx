import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
    <main className="app-container px-6 py-15">
      <div className="text-hero font-medium tracking-extra-tight max-w-4xl">
        Simon designs authentic human experiences and brings clarity to complex problems. He strives to make our interactions with the world more thoughtful and beautiful.
      </div>
      <div className="text-subHero tracking-tight max-w-3xl mt-4 text-text-subHero">
        Previously designed @VCH. Currently studying design and entrepreneurship at SFU, and probably checking out a new café.
      </div>
    </main>

    <div className="app-container px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-[58px_12px]">
      <ProjectCard
        title="Vancouver Coastal Health (VCH) Internship"
        category="UX Design"
        year="2025"
        description="Created an onboarding program for Providence Health Care's new workforce management software."
        thumbnail="/assets/work/vch.png"
        href="/work/vch"
      />


      <ProjectCard
        title="Unify"
        category="Product Design"
        year="2025"
        description="Designing a mobile app to guide newcomers in Canada."
        thumbnail="/assets/work/unify.png"
        href="/work/unify"
      />

      <ProjectCard
        title="Enactus SFU Design System"
        category="Design Systems"
        year="2024"
        description="Developed core tokens and UI components for Enactus SFU."
        thumbnail="/assets/work/enactus.png"
        href="/work/enactus"
      />

      <ProjectCard
        title="Recover Together"
        category="UX Design"
        year="2024"
        description="Designing a mobile app to streamline post-wildfire recovery."
        thumbnail="/assets/work/RecoverTogether.png"
        href="/work/recover"
      />
    </div>
    </>
  );
}