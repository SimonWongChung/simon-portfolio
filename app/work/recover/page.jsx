// app/work/recover-together/page.jsx
import ProjectSideNav from "@/components/ProjectSideNav";
import ProjectOverview from "@/components/ProjectOverview";
import Image from "next/image";
import ProjectVideo from "@/components/ProjectVideo";
import ProjectTwoColumn from "@/components/ProjectTwoColumn";

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

                <ProjectTwoColumn
                    sectionLabel="LEARNINGS"
                    title="Make a Help Request"
                    body="Our research showed that displaced residents faced a significant challenge in finding resources. To address this issue, the New Request tab allows impacted residents to post requests for help. They can specify the resources or skills needed and provide an accompanying description and location."
                    videoSrc="/assets/recover/videos/Make_A_Request.mov"
                    // imageBgClass="bg-[#E5BB9F]"
                />

                <ProjectTwoColumn
                    sectionLabel="LEARNINGS"
                    title="Offer Help"
                    body="Volunteers often have difficulty finding effective ways to support wildfire relief with the resources they have. Recover Together lets users browse community help requests and offer assistance where needed. Requests are organized by tags, and users can apply filters to quickly find categories that match their abilities, reducing cognitive overload and streamlining the search for meaningful opportunities."
                    videoSrc="/assets/recover/videos/Offer_Help.mov"
                />

                <ProjectTwoColumn
                    sectionLabel="LEARNINGS"
                    title="Accepting an Offer to Help"
                    body="To accept a volunteer's offer to help, users can start by chatting with the volunteer through in-app messaging. After the conversation, they can officially accept the offer right in the chat. There's also a location-sharing feature to make coordinating resource drop-offs easier."
                    videoSrc="/assets/recover/videos/Accept_Help.mov"
                />

                <ProjectTwoColumn
                    sectionLabel="LEARNINGS"
                    title="View Activity and Notifications"
                    body="In the Activity page, within the Request tab, users can see an overview of notifications and the status of their posted requests for help or offers to provide help. The My Requests and My Offers pages allow users to view and track their current and past requests and offers."
                    videoSrc="/assets/recover/videos/Accept_Help.mov"
                />
            </section>

            <section id="testing" className="scroll-mt-28">
                {/* Usability Testing and Improvements */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Usability Testing and Improvements
                </h4>
                <p className="mt-3">The prototype was evaluated with {" "} <span className="font-semibold">six participants</span>, and the gathered insights were used to refine the features. The study aimed to assess how easily users can find and use the app's most vital features to accomplish primary goals. Usability targets were identified, and participants from our user demographic were given realistic tasks to complete using the Think Aloud method.</p>
                
                <div className="mt-6 mb-8">
                    <p className="mb-2 font-semibold">
                        Update: Make a help request
                    </p>
                    <Image
                        src="/assets/recover/Make_a_Request_Update.png"
                        alt="Make a Help Request Update"
                        width={600}
                        height={400}
                        className="border border-[#E4E8EB] w-full h-auto object-cover mt-2 mb-2"
                    />
                    <p className="text-[15px] mb-2">
                        {" "} <span className="font-semibold">Problem:</span> Users were confused as the term 'request' was used in multiple sections, such as the explore page and request tab, leading to ambiguity about which requests were theirs and which belonged to others.
                    </p>
                    <p className="text-[15px]">
                        {" "} <span className="font-semibold">Update:</span> Icons were added to make the request feature more noticeable in the requests tab. Copywriting for offering help and posting requests has been revised to differentiate the two.
                    </p>
                </div>

                <div className="mt-6 mb-8">
                    <p className="mb-2 font-semibold">
                        Update: Offer help
                    </p>
                    <Image
                        src="/assets/recover/Offer_Help_Update.png"
                        alt="Offer Help Update"
                        width={600}
                        height={400}
                        className="border border-[#E4E8EB] w-full h-auto object-cover mt-2 mb-2"
                    />
                    <p className="text-[15px] mb-2">
                        {" "} <span className="font-semibold">Problem:</span> Users were confused between projects and requests, making it difficult to find request posts they could help with.
                    </p>
                    <p className="text-[15px]">
                        {" "} <span className="font-semibold">Update:</span> Content design was restructured to make finding request posts easy and memorable.
                    </p>
                </div>

                <div className="mt-6 mb-8">
                    <p className="mb-2 font-semibold">
                        Update: Viewing activity to accept help offers
                    </p>
                    <Image
                        src="/assets/recover/Viewing_Activity_Update.png"
                        alt="Viewing activity to accept help offers Update"
                        width={600}
                        height={400}
                        className="border border-[#E4E8EB] w-full h-auto object-cover mt-2 mb-2"
                    />
                    <p className="text-[15px] mb-2">
                        {" "} <span className="font-semibold">Problem:</span> Users had trouble distinguishing between notifications for offers to help and acceptances, making it cumbersome to accept help offers.
                    </p>
                    <p className="text-[15px]">
                        {" "} <span className="font-semibold">Update:</span> The Explore tab was changed to the Activity tab to give users a dedicated section for viewing responses to their help requests and offers. This restructuring emphasizes understanding who is offering help before engaging.
                    </p>
                </div>
            </section>

            <section id="flows" className="scroll-mt-28">
                {/* Final User Flows */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Final Core User Flows
                </h4>
                <p className="mt-3">After incorporating insights from usability testing, the experience of achieving the main tasks was improved.</p>

                <div className="mt-6 mb-8">
                    <p className="mb-2 font-semibold">
                        Making a help request post — Impacted Resident
                    </p>
                    <ProjectVideo
                        src="/assets/recover/videos/Making_a_Help_Request.mov"
                        className="w-full h-auto border border-[#E4E8EB]"
                    />
                    <p className="text-[15px] mt-2">
                        Impacted residents can request help through the Request tab under the Request Help page or the new button accessible across the app.
                    </p>
                </div>

                <div className="mt-6 mb-8">
                    <p className="mb-2 font-semibold">
                        Accepting an offer to help — Impacted Resident
                    </p>
                    <ProjectVideo
                        src="/assets/recover/videos/Accepting_an_Offer_to_Help.mov"
                        className="w-full h-auto border border-[#E4E8EB]"
                    />
                    <p className="text-[15px] mt-2">
                        Impacted residents can accept a volunteer's offer to help under the My Requests page in the Activity tab or in the chat with the volunteer.
                    </p>
                </div>

                <div className="mt-6 mb-8">
                    <p className="mb-2 font-semibold">
                        Offering assistance to a help request post — Volunteer
                    </p>
                    <ProjectVideo
                        src="/assets/recover/videos/Offering_Help.mov"
                        className="w-full h-auto border border-[#E4E8EB]"
                    />
                    <p className="text-[15px] mt-2">
                        Volunteers can choose a post to help with from the Offer Help page in the Request tab and send a message before offering help.
                    </p>
                </div>
            </section>

            <section id="learnings" className="scroll-mt-28">
                {/* Learnings */}
                <h4 className="projectHeader font-mono text-[#6B7280] uppercase mb-3">
                    Learnings
                </h4>
                <p className="tracking-tight text-foreground">
                    During this project, I conducted my first usability study, and it was an enlightening experience that taught me the importance of user-centered design. {" "} <span className="font-semibold">Despite our assumptions about the app's usability, direct user feedback highlighted issues we had not anticipated.</span> This process made me realize that our assumptions about how easy the app might be to use for end users only made sense to us as designers, as we were part of the design process from start to finish. 
                </p>
                <p className="tracking-tight text-foreground mt-3">
                    Although I designed the app with the end user in mind at every step, the final product's usability could only be confirmed through testing. The usability study uncovered critical areas for improvement, allowing us to {" "} <span className="font-semibold">integrate user feedback and create a more intuitive, efficient, and enjoyable user experience.</span> This experience reinforced the need for continuous testing and iteration, ultimately leading to a more effective solution for our users.
                </p>
            </section>
            </article>

            {/* Column 3 – right flexible column */}
            <div className="hidden md:block" />

        </div>
    </main>
  );
}