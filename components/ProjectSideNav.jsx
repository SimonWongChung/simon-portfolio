// components/ProjectSideNav.jsx
// Side nav for project page
// "use client";

// import { useEffect, useState } from "react";

// export default function ProjectSideNav({ sections }) {
//   const [activeId, setActiveId] = useState(sections[0]?.id);

//   // optional: highlight active section as you scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveId(entry.target.id);
//           }
//         });
//       },
//       { rootMargin: "-30% 0px -60% 0px" }
//     );

//     sections.forEach((section) => {
//       const el = document.getElementById(section.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [sections]);

//   return (
//     <nav className="sticky top-24 text-sm font-mono">
//       <button
//         onClick={() => history.back()}
//         className="mb-6 text-foreground/60 hover:text-foreground"
//       >
//         ← Back
//       </button>

//       <ul className="space-y-2">
//         {sections.map((section) => (
//           <li key={section.id}>
//             <a
//               href={`#${section.id}`}
//               className={[
//                 "block transition-colors",
//                 activeId === section.id
//                   ? "text-foreground font-medium"
//                   : "text-foreground/50 hover:text-foreground",
//               ].join(" ")}
//             >
//               {section.label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// components/ProjectSideNav.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProjectSideNav({ sections }) {
  const router = useRouter();
  const [activeId, setActiveId] = useState(sections[0]?.id);

  // Highlight active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-24">
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="text-backButton font-mono uppercase mb-10 text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
      >
        ← Back
      </button>

      {/* Section Links */}
      <ul className="space-y-3 text-projectNav tracking-tight">
        {sections.map(({ id, label }) => {
          const isActive = id === activeId;

          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={
                  isActive
                    ? "block text-foreground font-medium transition-colors"
                    : "block text-foreground/50 hover:text-foreground transition-colors"
                }
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
