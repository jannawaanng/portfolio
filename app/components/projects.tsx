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
    role: "UX / UI · Frontend",
  },
  {
    title: "Duke Career Hub",
    subtitle: "Redesigned Duke's student career homepage for clarity and action.",
    timeline: "JAN – MAY 2025",
    image: "/ch-mockup.png",
    slug: "duke-career-hub",
    role: "UX / UI · Research",
  },
  {
    title: "Modular Trays for Durham Public Schools",
    subtitle: "Designed and patented a modular, reusable lunch tray system to improve student dining experience.",
    timeline: "AUG 2023 – APR 2024",
    image: "/lb-top.png",
    slug: "lunch-bunch",
    role: "Mechanical Design",
    highlight: "Human-Centered Design",
  },
  {
    title: "Brain Portal at Duke Institute for Brain Sciences",
    subtitle: "Contributed to early-stage metadata architecture and content strategies for a dynamic, interactive neuroscience installation.",
    timeline: "MAY - AUG 2024",
    image: "/dibs.png",
    slug: "brain-portal",
    role: "Experiential Design",
    highlight: "Information Architecture",
    customUrl: "https://dibs.duke.edu/education/everyone/brain-portal/",
  },
  {
    title: "Project Tadpole",
    subtitle: "Engineering accessible toys and interfaces for children, including adapted consoles, switch-adapted toys, and a ride-on car refitted with rear mobility mounts and variable speed control.",
    timeline: "OCT 2025 – PRESENT",
    image: "",
    slug: "project-tadpole",
    role: "Accessibility Engineering",
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
      className="w-full bg-gradient-to-b from-[#FDF9F7] to-[#FBF4F0] py-10 relative overflow-hidden"
    >
      
      {/* Floating stars */}
      <div className="absolute top-20 left-[20%] text-violet-400/60 text-sm">✦</div>
      <div className="absolute top-12 right-[18%] text-pink-400/50 text-xs">✧</div>
      <div className="absolute bottom-20 right-[25%] text-emerald-400/50 text-sm">✦</div>
      <div className="absolute bottom-10 left-[15%] text-amber-400/55 text-xs">✧</div>

      <div className="mx-auto max-w-5xl px-6 relative">
        
         {/* Project grid - 2x2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => {
            const destination = p.customUrl || `/projects/${p.slug}`;
            const target = p.customUrl ? "_blank" : undefined;
            const hasImage = p.image !== "";

            return (
              <article
                key={p.slug}
                className="group relative bg-white/60 backdrop-blur-sm rounded-xl border border-[#E8E4DE] p-4 transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:shadow-[#E8DCD4]/40 flex flex-col"
              >
                {/* Image at top if exists */}
                {hasImage && (
                  <div className="mb-3">
                    <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-[#F5F0EB]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                )}

                {/* Text content */}
                <div className="flex-1 flex flex-col">
                  
                  {/* Index + timeline */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] text-[#aea1b8] tabular-nums font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] tracking-[0.12em] uppercase text-[#A8A098]">
                      {p.timeline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[20px] text-[#2D2A26] leading-tight tracking-[-0.01em] mb-1.5 group-hover:text-[#1A1816] transition-colors">
                    {p.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[13px] text-[#5C574E] leading-snug mb-3 line-clamp-2 flex-1">
                    {p.subtitle}
                  </p>

                  {/* Note if exists */}
                  {p.note && (
                    <div className="mb-3 inline-flex items-center gap-1.5 text-[10px] text-[#7A9E8A]">
                      <FileText size={10} className="shrink-0" />
                      <span className="line-clamp-1">{p.note}</span>
                    </div>
                  )}

                  {/* Bottom row: pills + CTA */}
                  <div className="flex items-center justify-between gap-2 mt-auto">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {p.role && (
                        <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-[#F5EDE4] text-[#6B5C50]">
                          {p.role}
                        </span>
                      )}
                      {p.highlight && (
                        <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-[#EDE4F0] text-[#6B5080]">
                          {p.highlight}
                        </span>
                      )}
                    </div>

                    <Link
                      href={destination}
                      target={target}
                      rel={target === "_blank" ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#3D3530] hover:text-[#1A1816] transition-colors shrink-0"
                    >
                      <span>View</span>
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#7A9E8A] text-white text-[8px] group-hover:scale-110 transition-transform">
                        ↗
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}