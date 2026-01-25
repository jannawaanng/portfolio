"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";

const NAV_LINKS = [
  { href: "/about-me", label: "About Me!", isExternal: false },
  // Resume is a file, so we treat it as external to avoid routing errors
  { href: "/janna-wang-resume.pdf", label: "Resume", target: "_blank", isExternal: true }, 
  // Mailto must be external
  { href: "mailto:janna.wang@duke.edu", label: "Contact", isExternal: true },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-3 flex justify-center">
        <div
          className="
            flex items-center gap-3 md:gap-6
            w-full md:w-auto
            rounded-full
           bg-[#f9f2e1]
            border border-[#E3DAD0]
            shadow-[0_10px_28px_rgba(30,20,20,.1)]
            px-4 md:px-6
            min-h-[3rem]
          "
        >
          {/* LOGO */}
          <Link
              href="/"
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="Back to homepage"
            >
              <img
                src="/logo.jpg"
                alt="Janna logo"
                className="
                  h-8 w-auto object-contain
                  transition-transform duration-200 ease-out
                  group-hover:-translate-y-[2px] group-hover:scale-[1.05]
                "
              />
          </Link>

          {/* LINKS */}
          <div className="flex flex-1 items-center justify-center flex-wrap gap-3 md:gap-5 text-[13px] text-[#4A6A61]">
            {NAV_LINKS.map((item) => {
              // Logic: Use <a> for email/pdf, <Link> for pages
              const Component = item.isExternal ? 'a' : Link;
              
              return (
                <Component
                  key={item.href}
                  href={item.href}
                  target={item.target} 
                  className="
                    inline-flex items-center gap-1.5
                    px-2.5 py-1 rounded-full
                    hover:bg-white
                    transition-all duration-200
                    hover:text-[#203237]
                    cursor-pointer
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F7D18F]" />
                  <span>{item.label}</span>
                </Component>
              );
            })}
          </div>

          {/* LINKEDIN ICON */}
          <a
            href="https://linkedin.com/in/jannawang2005" 
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              h-8 w-8 rounded-full
              border border-[#D4CFC4]/70
              bg-white/90
              text-[#5C7A6F] hover:text-[#203237]
              hover:bg-white
              hover:shadow-[0_6px_16px_rgba(32,50,55,0.12)]
              transition-all duration-200
            "
            aria-label="LinkedIn profile"
          >
            <Linkedin size={16} strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </nav>
  );
}