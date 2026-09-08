import Link from "next/link";
import { Linkedin } from "lucide-react";

const NAV_LINKS = [
  { href: "/#projects", label: "Work", isExternal: false },
  { href: "/pages/about-me", label: "About", isExternal: false },
  { href: "/pages/resume", label: "Resume", isExternal: false },
  { href: "mailto:janna.wang@duke.edu", label: "Contact", isExternal: true },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl justify-center px-4 py-4 md:px-6">
        <div
          className="
            flex items-center gap-1
            rounded-full
            bg-[#f9f2e1]/95 backdrop-blur-md
            border border-[#EAE1D4]
            shadow-[0_8px_24px_-8px_rgba(40,30,20,0.18)]
            pl-4 pr-2 py-1.5
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            aria-label="Back to homepage"
            className="group mr-2 flex items-center"
          >
            <img
              src="/logo.jpg"
              alt="Janna"
              className="h-8 w-auto object-contain opacity-90 transition-transform duration-200 ease-out group-hover:scale-105" />
          </Link>

          {/* LINKS */}
          <div className="flex items-center gap-0.5">
            {NAV_LINKS.map((item) => {
              const cls =
                "rounded-full px-3.5 py-1.5 text-[13px] font-medium text-[#4A6A61] transition-colors duration-200 hover:text-[#1B2E29] hover:bg-white/70";
              return item.isExternal ? (
                <a key={item.href} href={item.href} className={cls}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className={cls}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* DIVIDER */}
          <span className="mx-1 h-4 w-px bg-[#E0D6C8]" aria-hidden="true" />

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/jannawang2005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="
              flex h-8 w-8 items-center justify-center rounded-full
              text-[#4A6A61] transition-colors duration-200
              hover:bg-white/70 hover:text-[#1B2E29]
            "
          >
            <Linkedin size={16} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </nav>
  );
}
