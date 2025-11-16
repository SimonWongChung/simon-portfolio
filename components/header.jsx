"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "WORK" },
  { href: "/playground", label: "PLAYGROUND" },
  { href: "/about", label: "ABOUT" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-sm py-5 px-6 font-mono app-container">
      <div className="flex items-center gap-10">
        {navItems.map(({ href, label }) => {
          const isActive =
            pathname === href || pathname.startsWith(href + "/");

          return (
            <Link
              key={href}
              href={href}
              className={[
                "tracking-nav text-nav transition-colors", // base
                isActive
                  ? "font-semibold text-foreground" // active state: bold + main color
                  : "text-nav-default hover:text-nav-selected" // inactive: muted + hover
              ].join(" ")}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;