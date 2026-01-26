"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  timeline: string;
  image: string;
  slug: string;
  role: string;
  highlight?: string;
  customUrl?: string; 
  note?: string;
};

const projects: Project[] = [
  {
    title: "Unlocked Maps",
    subtitle: "Iterating and scaling a platform for live transit accessibility tracking.",
    timeline: "JUN 2025 – PRESENT",
    image: "/um-mockup.png", 
    slug: "unlockedmaps",
    highlight: "Accessibility Design",
    role: "UX / UI · Frontend", // Shortened for tightness
  },
  {
    title: "Duke Career Hub",
    subtitle: "Redesigned Duke’s student career homepage for clarity and action.",
    timeline: "JAN – MAY 2025",
    image: "/ch-mockup.png",
    slug: "duke-career-hub",
    role: "UX / UI · Research", // Shortened
  },
  {
    title: "Modular Trays for DPS", // Shortened title slightly
    subtitle: "Designed and patented a modular, reusable lunch tray system to improve student dining experience.",
    timeline: "AUG 2023 – APR 2024",
    image: "/lb-top.png", 
    slug: "lunch-bunch",
    role: "Mechanical Design",
    highlight: "Human-Centered Design"
  },
  {
    title: "Project Tadpole",
    subtitle: "Engineering accessible toys and interfaces for children,  including adapted consoles, switch-adapted toys, and a ride-on car refitted with rear mobility mounts and variable speed control.",
    timeline: "OCT 2025 – PRESENT",
    image: "", 
    slug: "project-tadpole",
    role: "Accessibility Eng",
    highlight: "Mechatronics",
    customUrl: "/project-tadpole-mat.pdf",
    note: "click view to see a recent project: a modular sensory mat", 
  },
  {
    title: "Engineering Portfolio",
    subtitle: "Mechanical design work including robot mechanisms and a knee brace for the FIRST Innovation Challenge.",
    timeline: "2019 – 2023",
    image: "", 
    slug: "frc-engineering",
    role: "Mechanical Design",
    highlight: "Robotics",
    customUrl: "/frc-engineering.jpg",
    note: "click view to see subsystems I designed & fabricated while competing in FRC",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      // TIGHTENED: py-8 instead of py-12
      className="w-full bg-[#f5e5f3] py-8 border-t border-[#dbdaf5]"
    >
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-[#A8C5BA]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[15%] w-80 h-80 bg-[#8BA89E]/10 rounded-full blur-3xl" />

      {/* TIGHTENED: gap-4 instead of gap-8, max-w-6xl for tighter width */}
      <div className="mx-auto max-w-6xl px-5 grid grid-cols-1 lg:grid-cols-2 gap-4 auto-rows-min">
        {projects.map((p, i) => {
          const destination = p.customUrl || `/projects/${p.slug}`;
          const target = p.customUrl ? "_blank" : undefined;
          const hasImage = p.image !== "";
          
          // KEY LOGIC: "Lunch Bunch" (index 2) spans 2 rows on big screens
          // This allows items 3 & 4 to stack next to it.
          const isLunchBunch = i === 2;

          return (
            <article
              key={p.slug}
              className={`
                relative overflow-hidden
                rounded-[24px] 
                border border-[#E7DED1]
                bg-[#FCFAF7]
                shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                p-6
                transition-all duration-300
                hover:-translate-y-[2px]
                hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]
                group
                flex flex-col
                ${isLunchBunch ? "lg:row-span-2 h-full" : "h-full"}
              `}
            >
              {/* Brand rail */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#31568d] via-[#c69ac6] to-[#88afcd] opacity-90" />
              <div className="absolute inset-0 pointer-events-none opacity-[0.18] bg-[url('/noise.png')] bg-repeat mix-blend-soft-light" />

              <div className="relative z-10 flex flex-col gap-4 h-full">
                
                {/* TEXT SIDE */}
                <div className="flex flex-col flex-1">
                  {/* Meta - TIGHTENED */}
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#A89E90] font-semibold">
                      {p.timeline}
                    </p>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#B3AB9D]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title - TIGHTENED SIZE */}
                  <h3 className="font-display text-[26px] tracking-[-0.03em] text-[#202c53] leading-none mb-2">
                    {p.title}
                  </h3>

                  {/* Subtitle - TIGHTENED */}
                  <p className="font-body text-[14px] text-[#4C4A45] leading-[1.5] mb-3 line-clamp-3">
                    {p.subtitle}
                  </p>

                  {/* Note - TIGHTENED */}
                  {p.note && (
                    <div className="mb-4 flex items-start gap-2 text-[11px] font-medium text-[#5C7A6F] bg-[#E3DAD0]/30 p-2 rounded-md border border-[#E3DAD0]/60 w-full leading-snug">
                      <FileText size={12} className="mt-[2px] shrink-0" />
                      <span>{p.note}</span>
                    </div>
                  )}

                  {/* Pills + CTA - TIGHTENED MARGINS */}
                  <div className="flex items-center justify-between flex-wrap gap-2 mt-auto pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {p.role && (
                        <span className="font-body text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#f7ecda] text-[#0e1d3e]">
                          {p.role}
                        </span>
                      )}
                      {p.highlight && (
                        <span className="font-body text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#d3e4ff] text-[#3A4270]">
                          {p.highlight}
                        </span>
                      )}
                    </div>

                    <Link
                      href={destination}
                      target={target}
                      rel={target === "_blank" ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-[12px] font-body text-[#1C2129] group hover:text-black"
                    >
                      <span className="border-b border-transparent group-hover:border-black pb-[0.5px]">View</span>
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1C2129] text-white text-[9px] group-hover:scale-105 transition-transform">↗</span>
                    </Link>
                  </div>
                </div>

                {/* IMAGE SIDE */}
                {/* Logic: Lunch Bunch image is tall. Others are standard aspect. */}
                {hasImage && (
                  <div className="w-full mt-2">
                    <div className={`
                      relative w-full rounded-[18px] overflow-hidden bg-white border border-[#E8E4DC] shadow-sm
                      ${isLunchBunch ? 'aspect-[4/3] lg:aspect-auto lg:h-[320px]' : 'aspect-[2/1]'}
                    `}>
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}