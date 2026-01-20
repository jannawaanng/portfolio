"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react"; // I added an icon for the note

type Project = {
  title: string;
  subtitle: string;
  timeline: string;
  image: string;
  slug: string;
  role: string;
  highlight?: string;
  customUrl?: string; 
  note?: string; // 1. NEW FIELD: For specific file context
};

const projects: Project[] = [
  {
    title: "UnlockedMaps",
    subtitle: "tbd.",
    timeline: "MAY – AUG 2025",
    image: "", 
    slug: "unlockedmaps",
    role: "",
  },
  {
    title: "Duke Career Hub",
    subtitle: "Redesigning Duke’s student career homepage for clarity and action.",
    timeline: "JAN – MAY 2025",
    image: "/mockup-career-hub.jpg",
    slug: "duke-career-hub",
    role: "UX / UI · User Research",
  },
  {
    title: "lunch",
    subtitle: "",
    timeline: "AUG 2023 – APR 2024",
    image: "", 
    slug: "lunch-bunch",
    role: "Mechanical Design",
    customUrl: "/frc-engineering.jpg",
    
  },
  {
    title: "Project Tadpole",
    subtitle: "Engineering accessible toys and interfaces for children, including adapted consoles, switch-adapted toys, and a ride-on car refitted with rear mobility mounts and variable speed control.",
    timeline: "OCT 2025 – PRESENT",
    image: "", 
    slug: "project-tadpole",
    role: "Accessibility Engineering",
    highlight: "Mechanical · Electrical",
    customUrl: "/project-tadpole-mat.pdf",
    note: "The linked file documents our Modular Sensory Mat, a tactile therapy device with interchangeable 3D-printed tiles.", 
  },
  {
    title: "Engineering Portfolio",
    subtitle: "Mechanical design work including robot mechanisms and a knee brace designed for the 2021 FIRST Innovation Challenge.",
    timeline: "2019 – 2023",
    image: "", 
    slug: "frc-engineering",
    role: "Mechanical Design",
    customUrl: "/frc-engineering.jpg",
    // Clarifies that the doc is scoped to your specific work
    note: "The linked file hightlights subsystems and components I designed/fabricated during my time with FRC.",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="w-full bg-[#f6f7fb] py-20 md:py-24 border-t border-[#E2D7C8]"
    >
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-[#A8C5BA]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[15%] w-80 h-80 bg-[#8BA89E]/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-5xl px-6 md:px-8 space-y-14 md:space-y-16">
        {projects.map((p, i) => {
          const destination = p.customUrl || `/projects/${p.slug}`;
          const target = p.customUrl ? "_blank" : undefined;
          const hasImage = p.image !== "";

          return (
            <article
              key={p.slug}
              className="
                relative overflow-hidden
                rounded-[32px]
                border border-[#E7DED1]
                bg-[#FCFAF7]
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                px-6 md:px-8 py-7
                transition-all duration-300
                hover:-translate-y-[3px]
                hover:shadow-[0_28px_90px_rgba(15,23,42,0.15)]
                group
              "
            >
              {/* Vertical brand rail */}
              <div className="absolute left-0 top-7 bottom-7 w-[3px] bg-gradient-to-b from-[#85aae1] via-[#838fcb] to-[#6094bd] rounded-full opacity-90" />

              {/* Faint texture */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.18] bg-[url('/noise.png')] bg-repeat mix-blend-soft-light" />

              {/* Layout Container */}
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-stretch">
                
                {/* TEXT SIDE */}
                <div className={`flex flex-col ${hasImage ? "md:flex-1" : "w-full"}`}>
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] tracking-[0.32em] uppercase text-[#A89E90]">
                      {p.timeline}
                    </p>
                    <span className="text-[11px] tracking-[0.26em] uppercase text-[#B3AB9D]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-[30px] md:text-[32px] tracking-[-0.03em] text-[#202c53] leading-[1.05] mb-1.5">
                    {p.title}
                  </h3>

                  {/* Subtitle (Main Description) */}
                  <p className="font-body text-[15px] md:text-[16px] text-[#4C4A45] leading-[1.6] max-w-xl mb-4">
                    {p.subtitle}
                  </p>

                  {/* 3. NEW NOTE RENDERER */}
                  {/* This only appears if 'note' exists in the data */}
                  {p.note && (
                    <div className="mb-5 flex items-start gap-2 text-xs font-medium text-[#5C7A6F] bg-[#E3DAD0]/30 p-2.5 rounded-lg border border-[#E3DAD0]/60 w-fit max-w-lg">
                      <FileText size={14} className="mt-[1px] shrink-0" />
                      <span>{p.note}</span>
                    </div>
                  )}

                  {/* Pills + CTA */}
                  <div className="flex items-center justify-between flex-wrap gap-3 mt-auto">
                    <div className="flex flex-wrap gap-2.5">
                      {p.role && (
                        <span className="font-body text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#f7ecda] text-[#0e1d3e]">
                          {p.role}
                        </span>
                      )}
                      {p.highlight && (
                        <span className="font-body text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#d3e4ff] text-[#3A4270]">
                          {p.highlight}
                        </span>
                      )}
                    </div>

                    {/* CTA BUTTON */}
                    <Link
                      href={destination}
                      target={target}
                      rel={target === "_blank" ? "noopener noreferrer" : undefined}
                      className="
                        inline-flex items-center gap-2 text-[13px] md:text-sm
                        font-body text-[#1C2129]
                        hover:text-[#0E1115]
                        transition-all duration-200
                        group
                      "
                    >
                      <span className="border-b border-transparent group-hover:border-[#1C2129] pb-[1px]">
                        View
                      </span>
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1C2129] text-white text-[11px] group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-all">
                        ↗
                      </span>
                    </Link>
                  </div>
                </div>

                {/* IMAGE SIDE */}
                {hasImage && (
                  <div className="md:flex-1 flex items-center justify-center">
                    <div className="relative w-full max-w-md md:max-w-none aspect-[5/2.5] md:aspect-[6/3] rounded-[26px] overflow-hidden bg-white border border-[#E8E4DC] shadow-[0_14px_40px_rgba(15,23,42,0.16)]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 520px, 100vw"
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