"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F6F0E3]/20 border-b border-[#E3DAD0]/0">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-3 flex justify-center">
        {/* pill / search-bar nav */}
        <div
          className="
            flex items-center gap-3 md:gap-6
            w-full md:w-auto
            rounded-full
           bg-[#f9f2e1]
            border border-[#E3DAD0]
            shadow-[0_10px_28px_rgba(32,50,55,0.10)]
            px-4 md:px-6
            min-h-[3rem]
          "
        >
          {/* LOGO (no JANNA text) */}
          <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Back to homepage"
            >
              {/* plain img so it never disappears */}
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

          {/* LINKS (center, wrap on small screens) */}
          <div className="flex flex-1 items-center justify-center flex-wrap gap-3 md:gap-5 text-[13px] text-[#4A6A61]">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  inline-flex items-center gap-1.5
                  px-2.5 py-1 rounded-full
                  hover:bg-white
                  transition-all duration-200
                  hover:text-[#203237]
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#F7D18F]" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* LINKEDIN ICON (right) */}
          <a
            href="https://linkedin.com"
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
