"use client";

import Image from "next/image";

const CURRENT_SITE = "https://unlockedmaps.com/cities";

const researchInsights = [
  {
    icon: "♿",
    title: "Plan before leaving",
    text: "Wheelchair riders checked station access before committing to a route.",
    color: "#CFE8E3",
  },
  {
    icon: "⚠",
    title: "Outages change the route",
    text: "A broken elevator could require a detour, another station, or a new trip plan.",
    color: "#F4D79B",
  },
  {
    icon: "🚉",
    title: "Answers over extra data",
    text: "Riders wanted to know which station worked, not interpret another layer of transit information.",
    color: "#D9D7F4",
  },
];

const requirements = [
  "Find a city or region without starting from the map",
  "Compare access features across nearby stations",
  "Open one station for step-free access and amenities",
  "See live elevator outages before choosing a route",
];

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[12px] font-bold uppercase tracking-[0.2em] ${light ? "text-[#A7D7D1]" : "text-[#23605B]"}`}>
      {children}
    </p>
  );
}

function ProjectImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[26px] border border-[#DDD6CD] bg-white p-3 shadow-[0_18px_42px_rgba(39,35,31,0.08)]">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        className={`h-auto w-full rounded-[18px] object-contain ${className}`}
      />
    </div>
  );
}

export default function UnlockedMapsCaseStudy() {
  return (
    <main className="overflow-hidden bg-[#FCF9F5] text-[#191715]">
      {/* HERO */}
      <header className="border-b border-[#E5DDD4] bg-[#FCF9F5]">
        <div className="mx-auto grid min-h-[560px] max-w-6xl items-center gap-10 px-6 pb-16 pt-24 lg:grid-cols-[0.95fr_1.05fr] lg:pt-28">
          <div>
            <h1 className="font-serif text-[58px] leading-[0.9] tracking-[-0.045em] md:text-[80px]">
              Unlocked Maps
            </h1>
            <p className="mt-7 max-w-[620px] text-[19px] leading-[1.6] text-[#4D4842] md:text-[21px]">
              I redesigned how riders find station accessibility information and built the data system behind the updates.
            </p>

            <dl className="mt-9 grid max-w-[620px] grid-cols-3 gap-5 border-t border-[#D9D1C8] pt-6">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#23605B]">Focus</dt>
                <dd className="mt-2 text-[14px] leading-[1.45] text-[#5C554E]">Accessibility UX</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#23605B]">Methods</dt>
                <dd className="mt-2 text-[14px] leading-[1.45] text-[#5C554E]">Interviews + prototyping</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#23605B]">Build</dt>
                <dd className="mt-2 text-[14px] leading-[1.45] text-[#5C554E]">Design + data pipeline</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[30px] bg-[#CFE8E3]" />
            <div className="relative overflow-hidden rounded-[30px] border-[7px] border-white bg-white shadow-[0_24px_58px_rgba(38,70,64,0.16)]">
              <Image
                src="/station-one.png"
                alt="Map showing Beacon Hill Station with an elevator outage alert"
                width={900}
                height={980}
                priority
                className="h-[380px] w-full object-cover object-[center_44%]"
              />
            </div>
            <a
              href={CURRENT_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-5 right-5 rounded-full bg-[#193F3B] px-5 py-3 text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#102E2B]"
            >
              View station pages ↗
            </a>
          </div>
        </div>
      </header>

      {/* 01 PROBLEM */}
      <section className="bg-[#F4EEE7] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>01 · Problem</SectionLabel>
          <div className="mt-5 grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.03em] md:text-[50px]">
              Station access was difficult to verify before a trip.
            </h2>
            <div className="max-w-xl space-y-5 text-[17px] leading-[1.7] text-[#554E47]">
              <p>
                Accessibility details were spread across the map, station pages, and live service updates. Riders had to piece together whether elevators worked, whether step-free access was available, and what nearby alternatives existed.
              </p>
              <p>
                I redesigned that journey around the decisions riders actually make: find an area, compare accessible stations, confirm station details, and catch outages before leaving.
              </p>
            </div>
          </div>

          <div className="mt-10 grid items-start gap-7 md:grid-cols-2">
            <figure>
              <ProjectImage src="/um-hero-og.png" alt="Original Unlocked Maps landing page" />
              <figcaption className="mt-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#685F56]">
                Original · introduced the product
              </figcaption>
            </figure>
            <figure className="md:mt-10">
              <ProjectImage src="/um-hero-redesign-1.png" alt="Redesigned Unlocked Maps landing page" />
              <figcaption className="mt-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#23605B]">
                Redesign · leads riders into the product
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 02 RESEARCH */}
      <section className="bg-[#18383D] py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel light>02 · Research</SectionLabel>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.03em] md:text-[50px]">
              I spoke with wheelchair riders about how access shaped trip planning.
            </h2>
            <p className="max-w-xl text-[17px] leading-[1.7] text-[#D2E0DE]">
              The interviews focused on what riders checked before leaving, what happened when elevator status changed, and which details helped riders choose another station.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {researchInsights.map((insight, index) => (
              <article
                key={insight.title}
                className={`rounded-[26px] p-7 text-[#17201F] shadow-[0_18px_35px_rgba(0,0,0,0.13)] ${index === 1 ? "md:translate-y-5" : ""}`}
                style={{ backgroundColor: insight.color }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[26px] leading-none" aria-hidden>{insight.icon}</span>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#23605B]">0{index + 1}</p>
                </div>
                <h3 className="mt-4 font-serif text-[25px] leading-[1.1]">{insight.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.65] text-[#464C4A]">{insight.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 REQUIREMENTS */}
      <section className="bg-[#FCF9F5] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>03 · From research to requirements</SectionLabel>
          <div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.03em] md:text-[48px]">
              Research narrowed the product to four needs.
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {requirements.map((requirement, index) => (
                <div
                  key={requirement}
                  className="rounded-[22px] border border-[#DED7CE] p-5"
                  style={{ backgroundColor: ["#E6F1EE", "#F7E5C3", "#E7E3F8", "#EDE7DF"][index] }}
                >
                  <p className="text-[11px] font-bold tracking-[0.16em] text-[#23605B]">0{index + 1}</p>
                  <p className="mt-3 text-[18px] font-semibold leading-[1.45] text-[#2D2925]">{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 WIREFRAMES */}
      <section className="bg-[#EAF3F0] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>04 · Wireframes</SectionLabel>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.03em] md:text-[48px]">
              Starting with the city-to-station journey.
            </h2>
            <p className="max-w-xl text-[17px] leading-[1.7] text-[#4F5B57]">
              Early layouts tested regional browsing, search, station cards, and a mobile sequence that kept the same decisions in a simpler order.
            </p>
          </div>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="mx-auto w-full max-w-[760px] rounded-[28px] border border-[#B6D8D2] bg-[#DDF1ED] p-5 shadow-[0_18px_45px_rgba(32,80,76,0.1)]">
              <Image
                src="/um-city-wireframe.png"
                alt="Desktop and mobile wireframes for city browsing"
                width={1500}
                height={700}
                className="h-auto w-full rounded-[18px] object-contain"
              />
            </div>

            <div className="space-y-4">
              {[
                ["Browse", "Find a city or region before entering the map."],
                ["Compare", "Use station cards alongside geographic context."],
                ["Open", "Move from the map into detailed station access."],
              ].map(([title, text], index) => (
                <div key={title} className="rounded-[22px] border border-[#DBD5CD] bg-white p-5 shadow-sm">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#23605B]">Step 0{index + 1}</p>
                  <h3 className="mt-2 text-[20px] font-semibold">{title}</h3>
                  <p className="mt-2 text-[16px] leading-[1.6] text-[#58514A]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 ITERATION */}
      <section className="bg-[#F4EEE7] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>05 · Iteration</SectionLabel>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.03em] md:text-[48px]">
              The map and station page had different jobs.
            </h2>
            <p className="max-w-xl text-[17px] leading-[1.7] text-[#554E47]">
              The map helps riders scan and compare. The station page helps riders confirm step-free access, nearby accessible options, and other amenities before choosing the route.
            </p>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            <article className="overflow-hidden rounded-[28px] border border-[#DDD6CD] bg-white shadow-[0_18px_42px_rgba(39,35,31,0.08)]">
              <div className="p-3 pb-0">
                <Image src="/um-fig1.png" alt="Map view showing accessibility features" width={1600} height={1000} className="h-auto w-full rounded-[20px] object-contain" />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#23605B]">Map level</p>
                <h3 className="mt-2 text-[22px] font-semibold">Scan access across the system</h3>
                <p className="mt-2 text-[16px] leading-[1.65] text-[#5B544D]">Compare station features and service information before narrowing the trip.</p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[28px] border border-[#DDD6CD] bg-white shadow-[0_18px_42px_rgba(39,35,31,0.08)] md:mt-10">
              <div className="p-3 pb-0">
                <Image src="/um-fig2.png" alt="Station view showing step-free access and amenities" width={1600} height={1000} className="h-auto w-full rounded-[20px] object-contain" />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#23605B]">Station level</p>
                <h3 className="mt-2 text-[22px] font-semibold">Confirm the details in one place</h3>
                <p className="mt-2 text-[16px] leading-[1.65] text-[#5B544D]">Review step-free access, nearby accessible options, and amenities related to the station and surrounding trip.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 06 LIVE STATUS */}
      <section className="bg-[#EAF3F0] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>06 · Live status</SectionLabel>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.03em] md:text-[48px]">
              Elevator outages appear before the next click.
            </h2>
            <p className="max-w-xl text-[17px] leading-[1.7] text-[#4F5B57]">
              The station card surfaces the disruption on the map, keeps mobility features visible, and provides a direct path to the complete station view.
            </p>
          </div>

          <div className="mt-10 grid items-center gap-9 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="mx-auto max-w-[610px] overflow-hidden rounded-[30px] border-[8px] border-white bg-white shadow-[0_24px_60px_rgba(38,70,64,0.14)]">
              <Image src="/station-one.png" alt="Station card showing an elevator outage" width={900} height={980} className="h-auto w-full object-contain" />
            </div>

            <div className="space-y-4">
              {[
                ["Status", "The outage is visible directly on the selected station."],
                ["Context", "Station name, transit agency, and mobility features remain together."],
                ["Action", "View Station continues into access details and nearby amenities."],
              ].map(([title, text], index) => (
                <div key={title} className="grid grid-cols-[46px_1fr] gap-4 rounded-[22px] border border-[#D7D1C9] bg-white p-5">
                  <p className="font-serif text-[27px] text-[#23605B]">0{index + 1}</p>
                  <div>
                    <h3 className="text-[20px] font-semibold">{title}</h3>
                    <p className="mt-1.5 text-[16px] leading-[1.6] text-[#56504A]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07 DATA */}
      <section className="bg-[#FCF9F5] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl rounded-[34px] bg-[#18383D] p-8 text-white shadow-[0_24px_60px_rgba(24,56,61,0.15)] md:p-12">
          <SectionLabel light>07 · Data engineering</SectionLabel>
          <h2 className="mt-5 max-w-4xl font-serif text-[38px] leading-[1.05] tracking-[-0.03em] md:text-[48px]">
            Reliable status required cleaner station records.
          </h2>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.7] text-[#D0DFDC]">
            I built a Python pipeline that combines station metadata, geographic coordinates, incident feeds, and amenity data, then resolves inconsistent names before the product displays the result.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Collect", "Station data, locations, amenities, and incident feeds."],
              ["02", "Normalize", "Match inconsistent station names with fallback rules."],
              ["03", "Structure", "Create records the map and station pages can use."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-[22px] bg-white/[0.065] p-6">
                <p className="text-[11px] font-bold text-[#A7D7D1]">{number}</p>
                <h3 className="mt-4 text-[21px] font-semibold">{title}</h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-[#C7D8D5]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 REFLECTION — uses the same canvas as the site footer */}
      <section className="bg-[#EAF2F3] pb-12 pt-16 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <SectionLabel>08 · Reflection</SectionLabel>
              <h2 className="mt-4 max-w-xl font-serif text-[36px] leading-[1.06] tracking-[-0.03em] md:text-[46px]">
                The interface was only half the solution.
              </h2>
            </div>
            <div className="max-w-2xl space-y-4 border-l border-[#8FB4AF] pl-6 text-[17px] leading-[1.7] text-[#3F514C] md:pl-8">
              <p>
                Interviews defined what riders needed to know. Wireframes organized the journey. Iteration separated quick map scanning from detailed station confirmation.
              </p>
              <p>
                Building the pipeline showed why the experience and the data could not be designed separately: clear access information only helps when the underlying station status is dependable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
