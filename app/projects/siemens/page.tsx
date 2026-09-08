"use client";

import Image from "next/image";
import { useRef } from "react";

const projectDetails = [
  { label: "Role", value: ["CX Strategy & Product Intern"] },
  {
    label: "Skills",
    value: [
      "Customer Journey Mapping",
      "Service Design",
      "Product Strategy",
      "AI Experience Design",
    ],
  },
  {
    label: "Methods",
    value: [
      "Service Blueprinting",
      "Case Analysis",
      "Process Mapping",
      "Opportunity Prioritization",
    ],
  },
  {
    label: "Tools",
    value: ["TheyDo", "Salesforce", "Figma", "Microsoft 365"],
  },
];

const contributions = [
  {
    title: "Mapped the end-to-end support journey",
    text: "Turned complex service cases into a shared view of customer actions, handoffs, and pain points that teams used to align on where the experience broke down.",
  },
  {
    title: "Secured approval for an AI initiative",
    text: "Built and pitched an Agentforce concept for intelligent support, earning cross-functional stakeholder buy-in to move it forward.",
  },
  {
    title: "Helped ship connected Salesforce features",
    text: "Contributed to Email-to-Case, Case-to-Knowledge, and Case-to-Opportunity flows that linked support, knowledge, and revenue in one path.",
  },
];

// Add these files to /public using the names below.
// The Customer Experience Center image lives in the hero and is not repeated.
const photos = [
  {
    src: "/siemens-think-tank.jpg",
    alt: "Think Tank winning group at the Siemens Customer Experience Center",
    caption: "Think Tank winners",
  },
  {
    src: "/siemens-intern-cohort.jpg",
    alt: "Siemens summer intern cohort at a group event",
    caption: "Intern cohort",
  },
  {
    src: "/siemens-team-event.jpg",
    alt: "Colleagues gathered during a summer team event",
    caption: "Team event",
  },
  {
    src: "/siemens-triangle-women-tech.jpg",
    alt: "Attendees at a Triangle Women in Tech event",
    caption: "Triangle Women in Tech",
  },
];

function Label({
  children,
  inverse = false,
}: {
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.17em] ${
        inverse ? "text-[#00CCCC]" : "text-[#008F8F]"
      }`}
    >
      {children}
    </p>
  );
}

export default function SiemensCustomerExperiencePage() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: "left" | "right") => {
    railRef.current?.scrollBy({
      left: direction === "right" ? 420 : -420,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#F0F0EF] text-[#000028]">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-24 md:pt-28">
        <div className="grid overflow-hidden rounded-[32px] bg-[#000028] shadow-[0_24px_75px_rgba(0,0,40,0.18)] md:min-h-[460px] md:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col justify-between p-7 sm:p-9 md:p-10 lg:p-12">
            <div>
              <Label inverse>may 2026 - present</Label>

              <h1 className="mt-5 font-serif text-[48px] leading-[0.92] tracking-[-0.045em] text-[#009999] sm:text-[58px] lg:text-[68px]">
                Siemens
                <span className="block text-[#ffffff]">
                  Customer Experience
                </span>
              </h1>
            </div>

            <p className="mt-8 max-w-xl text-[12px] leading-[1.62] text-white/75 md:text-[14px]">
             I mapped complex CX journeys, got leadership buy-in for an AI-enabled support initiative, and helped ship the features & streamline the workflows behind a {" "}
              <span className="font-semibold text-white">
                96% drop in  case close time.
              </span>
            </p>
          </div>

          <figure className="relative min-h-[310px] overflow-hidden bg-[#005159] md:min-h-0">
            <Image
              src="/siemens-cx-center.jpg"
              alt="Siemens Customer Experience Center"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000028]/20 via-transparent to-transparent md:from-[#000028]/45" />
          </figure>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-11 md:py-14">
        <Label>Overview</Label>

        <h2 className="mt-3 max-w-6xl font-serif text-[34px] leading-[1.08] tracking-[-0.03em] md:text-[45px]">
          From scattered support cases to one connected path.
        </h2>

        <p className="mt-5 max-w-4xl text-[15px] leading-[1.7] text-[#40405E]">
          Support cases moved across disconnected tools and teams, leaving
          customers without visibility and teams without clear ownership. I made
          that path legible, then designed the workflows and AI concepts to close
          the gaps.
        </p>

        <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-7 rounded-[24px] bg-white p-5 shadow-[0_14px_42px_rgba(0,0,40,0.055)] sm:p-6 lg:grid-cols-4">
          {projectDetails.map((item) => (
            <div key={item.label} className="min-w-0">
              <dt className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#008F8F] sm:text-[10px] sm:tracking-[0.16em]">
                {item.label}
              </dt>
              <dd className="mt-3 space-y-1.5">
                {item.value.map((line) => (
                  <p
                    key={line}
                    className="text-[11.5px] leading-[1.42] text-[#2D2D45] sm:text-[12.5px]"
                  >
                    {line}
                  </p>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* IMPACT */}
      <section className="bg-white py-11 md:py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Label>What I did</Label>

          <div className="mt-7 divide-y divide-[#E5E5E9] border-y border-[#E5E5E9]">
            {contributions.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 py-7 md:grid-cols-[58px_0.82fr_1.18fr] md:items-start md:gap-8"
              >
                <span className="font-serif text-[27px] leading-none text-[#00AFA8]">
                  0{index + 1}
                </span>
                <h3 className="max-w-sm text-[16px] font-semibold leading-[1.4] text-[#000028]">
                  {item.title}
                </h3>
                <p className="max-w-2xl text-[13.5px] leading-[1.66] text-[#4C4C68]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-7 rounded-2xl bg-[#E0F1F4] px-5 py-4">
            <p className="text-[12px] leading-[1.55] text-[#004F60]">
              🔒 Internal interfaces and sensitive project details are omitted.{" "}
              <strong className="font-semibold text-[#00333E]">
                Ask me if you would like to learn more.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO RAIL */}
      <section className="overflow-hidden bg-[#000028] py-11 text-white md:py-14">
        <div className="mx-auto flex max-w-6xl items-end justify-between gap-6 px-6">
          <div>
            <Label inverse>Summer 2026</Label>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollRail("left")}
              aria-label="Scroll photos left"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#00CCCC]/40 text-[#00CCCC] transition-colors hover:bg-[#00CCCC]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00CCCC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000028]"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => scrollRail("right")}
              aria-label="Scroll photos right"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00CCCC] text-[#000028] transition-colors hover:bg-[#00B8B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#000028]"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="group relative aspect-[4/3] h-[300px] shrink-0 snap-start overflow-hidden rounded-[18px] bg-[#005159]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="400px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000028]/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
