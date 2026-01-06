import AboutItem from "@/components/AboutItem";

const aboutPhotos = [
  {
    title: "ME",
    src: "/assets/about/me.png",
  },
  {
    title: "SUNSET!",
    src: "/assets/about/sunset.png",
  },
  {
    title: "MATCHA I MADE",
    src: "/assets/about/matcha.png",
  },
  {
    title: "CAFE HOPPING",
    src: "/assets/about/cafe.png",
  },
  {
    title: "DINNER I HOSTED",
    src: "/assets/about/dinner.png",
  },
];

export default function About() {
  return (
    <main className="app-container px-6 mt-10 mb-32">
      {/* your about intro content here */}
{/* Intro */}
      <section className="space-y-2">
        {/* Title */}
        <h1 className="text-[28px] font-medium tracking-extra-tight">
          Hi there, I'm Simon.
        </h1>

        {/* Two-column body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[750px] text-about tracking-tight">
          <div className="space-y-6 text-foreground/70">
            <p>
                Growing up, I was always drawn to building and making things. Over time, this curiosity evolved into an interest in how everyday objects are designed, constructed, and experienced by the people who use them. Discovering design gave language to that curiosity and led me to explore fields such as industrial design and architecture. What began as an interest gradually became a broader appreciation for the arts, shaping how I approach music, interior spaces, and even cooking.
            </p>

            <p>
                Today, I am studying design at SFU, where I continue to learn from both people and process. Listening to stories from individuals of different backgrounds helps me reflect on how our world has been shaped and how we can move toward a future guided by more empathetic, human-centred technology.
            </p>
          </div>

          <div className="text-foreground/70">
            <p>
              In my work, I focus on the relationship between people, the
              products they use, and the role technology plays in everyday life.
              Outside of design, I’m often discovering new music, cafe hopping,
              cooking, and sometimes hosting dinners.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
          {aboutPhotos.map((item, idx) => (
            <AboutItem
              key={item.src}
              number={`${String(idx + 1).padStart(2, "0")}.`}
              title={item.title}
              src={item.src}
              alt={item.alt}
              fit="cover"
            />
          ))}
        </div>
      </section>
    </main>
  );
}