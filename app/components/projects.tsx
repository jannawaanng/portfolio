"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  timeline: string;
  image: string;
  slug: string;
  tag: string;
  customUrl?: string;
  note?: string;
  ctaLabel?: string;
};

const projects: Project[] = [
  {
    title: "Siemens",
    subtitle:
      "Driving AI and customer-support transformation across enterprise service operations.",
    timeline: "2026",
    image: "/siemens-hero.jpg",
    slug: "siemens",
    tag: " Internship  |  Product · AI",
  },
  {
    title: "Amgen",
    subtitle:
      "Built a source-of-truth analytics system and dashboards for maintenance operations.",
    timeline: "2025",
    image: "/amgen-logo-expand.png",
    slug: "amgen-ops",
    tag: "Internship  |  Data · Ops",
  },
  {
    title: "Unlocked Maps",
    subtitle:
      "Iterating and scaling a platform for live transit accessibility tracking.",
    timeline: "2025",
    image: "/um-mockup.png",
    slug: "unlockedmaps",
    tag: "Accessibility",
  },
  {
    title: "Duke Career Hub",
    subtitle:
      "Redesigned Duke's student career homepage for clarity and action.",
    timeline: "2025",
    image: "/ch-final-final-mockup.png",
    slug: "duke-career-hub",
    tag: "UX Research",
  },
  {
    title: "Modular Trays",
    subtitle:
      "Designed and patented a modular, reusable lunch tray system for Durham Public Schools.",
    timeline: "2023 — 2024",
    image: "/lb-top.png",
    slug: "lunch-bunch",
    tag: "Product Design",
  },
  {
    title: "Brain Portal",
    subtitle:
      "Metadata architecture and content strategy for an interactive neuroscience installation.",
    timeline: "2024",
    image: "/dibs.png",
    slug: "brain-portal",
    tag: "Experiential",
    customUrl: "https://dibs.duke.edu/education/everyone/brain-portal/",
    ctaLabel: "View Project",
  },
  {
    title: "Project Tadpole",
    subtitle:
      "Accessible toys and interfaces for children — adapted consoles, switch-adapted toys, and mobility-focused ride-on cars.",
    timeline: "2025 — Now",
    image: "",
    slug: "project-tadpole",
    tag: "Accessibility",
    customUrl: "/project-tadpole-mat.pdf",
    note: "Recent: a modular sensory mat",
    ctaLabel: "View Poster",
  },
  {
    title: "Engineering Portfolio",
    subtitle:
      "Mechanical design — robot mechanisms and a knee brace for the FIRST Innovation Challenge.",
    timeline: "2019 — 2023",
    image: "",
    slug: "frc-engineering",
    tag: "Robotics",
    customUrl: "/frc-engineering.jpg",
    note: "Selected subsystems designed & fabricated for FRC",
    ctaLabel: "View Portfolio",
  },
];

const mainProjects = projects.slice(0, 6);

/* Tonal fallbacks with a whisper of the water palette — alive, not loud */
const fallbackGradients: Record<string, string> = {
  siemens: "from-[#2E4B4A] to-[#3E6B68]",
  amgen: "from-[#3A4A5A] to-[#4E6272]",
};

function ProjectCard({ project }: { project: Project }) {
  const destination = project.customUrl ?? `/projects/${project.slug}`;
  const opensNewTab = Boolean(project.customUrl);
  const hasImage = project.image.trim() !== "";
  const gradient =
    fallbackGradients[project.slug] ?? "from-[#CFC7BB] to-[#E6DFD5]";

  return (
    <Link
      href={destination}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      className="group flex flex-col focus:outline-none"
    >
      {/* Visual — smaller, no zoom. Personality comes from a soft lift + shadow. */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#F1EBE4] shadow-[0_1px_2px_rgba(40,30,20,0.04)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_16px_40px_-12px_rgba(50,80,78,0.25)]">
        {hasImage ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={`object-cover ${["brain-portal"].includes(project.slug) ? "contrast-125" : ""}`}
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}
          >
            <span className="font-serif text-[24px] tracking-tight text-white/90">
              {project.title}
            </span>
          </div>
        )}

        {/* Water-tinted tag — the one accent, consistent across the whole page */}
       <span className="absolute left-3 top-3 flex h-5 items-center justify-center rounded-full bg-[#F0F8FF]/85 px-2.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#2E6360] backdrop-blur-sm">
  {project.tag}
</span>

      </div>

      {/* Text — title is the anchor; it warms to the water accent on hover */}
      <div className="mt-4">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="flex items-center gap-1.5 font-serif text-[20px] leading-none tracking-[-0.02em] text-[#1A1816] transition-colors duration-300 group-hover:text-[#2E6360]">
            {project.title}
            <ArrowUpRight
              size={15}
              className="translate-y-[1px] text-[#B4ABA1] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#2E6360]"
            />
          </h3>
          <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.16em] text-[#B4ABA1]">
            {project.timeline}
          </span>
        </div>

        {project.subtitle && (
          <p className="mt-2 max-w-[95%] text-[13px] leading-relaxed text-[#6B655C]">
            {project.subtitle}
          </p>
        )}

        {project.note && (
          <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-[#2E6360]">
            <FileText size={11} className="shrink-0" />
            <span className="line-clamp-1">{project.note}</span>
          </div>
        )}
      </div>
    </Link>
  );
}

function SideQuest({
  emoji,
  title,
  children,
}: {
  emoji: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group">
      <h4 className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#1A1816]">
        <span className="text-[16px] leading-none transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
          {emoji}
        </span>
        {title}
      </h4>
      <p className="mt-2 text-[12.5px] leading-relaxed text-[#6B655C]">
        {children}
      </p>
    </div>
  );
}

export default function ProjectSection() {
  return (
    <section id="projects" className="relative w-full scroll-mt-24 bg-[#FCF8F5] py-2">
      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-6">
  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8A098]">
    Selected Work
  </p>
  <h2 className="mt-2 font-serif text-[26px] tracking-[-0.02em] text-[#1A1816]">
    Human-centered design &amp; systems thinking.
  </h2>
</div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {mainProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
  
    
        {/* Side quests */}
         <div className="mt-20">
          {/*   <div className="mb-8 flex items-center gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B4ABA1]">
              Side quests
            </p>
            <div className="h-px flex-1 bg-[#EAE4DC]" />
          </div>
     
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <SideQuest emoji="🧸" title="Project Tadpole">
              Accessible toys and interfaces for children — adapted consoles,
              switch-adapted toys, and a mobility-focused ride-on car, plus a{" "}
              <Link
                href="/project-tadpole-mat.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2E6360] underline underline-offset-4 decoration-[#A9C6C3] hover:decoration-[#2E6360]"
              >
                modular sensory mat
              </Link>
              .
            </SideQuest>

            <SideQuest emoji="🤖" title="FRC Robotics">
              Designed and fabricated drivetrain and intake mechanisms for
              award-winning robots, plus a custom knee brace for the FIRST
              Innovation Challenge:{" "}
              <Link
                href="/frc-engineering.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2E6360] underline underline-offset-4 decoration-[#A9C6C3] hover:decoration-[#2E6360]"
              >
                FRC portfolio
              </Link>
              .
            </SideQuest> 
          </div>*/}
        </div>
      </div> 
    </section>
  );
}
