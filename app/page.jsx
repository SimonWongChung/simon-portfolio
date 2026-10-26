import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
    <main className="app-container px-6 py-15">
      <div className="text-hero font-medium tracking-extra-tight max-w-4xl">
        Simon is a product designer who helps people find their footing in unfamiliar systems.
      </div>
      <div className="text-subHero tracking-tight max-w-4xl mt-4 text-text-subHero">
        Currently designing @ Nokia. Previously designed @ Vancouver Coastal Health.
      </div>
    </main>

    <div className="app-container px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-[58px_12px]">
      <ProjectCard
        title="Helping thousands of healthcare staff adopt new workforce software at Vancouver Coastal Health"
        category="Vancouver Coastal Health (VCH)"
        year="Internship 2025"
        // description="Created an onboarding program for Providence Health Care's new workforce management software."
        thumbnail="/assets/work/vch.png"
        href="/work/vch"
        titleClassName="max-w-[650px]"
      />

      <ProjectCard
        title="Turning scattered settlement info into a guided path for newcomers to Canada with Unify"
        category="Unify"
        year="Concept 2025"
        // description="Designing a mobile app to guide newcomers in Canada."
        thumbnail="/assets/work/unify-work.mp4"
        href="/work/unify"
        titleClassName="max-w-[650px]"
        mediaType="video"
      />

      <ProjectCard
        title="Building a design system from the ground up to streamline design and development for Enactus SFU"
        category="Enactus SFU"
        year="Shipped 2024"
        // description="Developed core tokens and UI components for Enactus SFU."
        thumbnail="/assets/work/enactus.png"
        href="/work/enactus"
        titleClassName="max-w-[650px]"
      />

      <ProjectCard
        title="Connecting wildfire survivors with volunteers who can help through Recover Together"
        category="Recover Together"
        year="Concept 2024"
        // description="Designing a mobile app to streamline post-wildfire recovery."
        thumbnail="/assets/work/RecoverTogether.png"
        href="/work/recover"
        titleClassName="max-w-[600px]"
      />
    </div>
    </>
  );
}