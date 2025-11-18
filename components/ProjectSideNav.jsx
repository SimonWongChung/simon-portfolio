// components/ProjectSideNav.jsx
// Side nav for project page
"use client";

import { useEffect, useState } from "react";

export default function ProjectSideNav({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  // optional: highlight active section as you scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-24 text-sm font-mono">
      <button
        onClick={() => history.back()}
        className="mb-6 text-foreground/60 hover:text-foreground"
      >
        ← Back
      </button>

      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={[
                "block transition-colors",
                activeId === section.id
                  ? "text-foreground font-medium"
                  : "text-foreground/50 hover:text-foreground",
              ].join(" ")}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}