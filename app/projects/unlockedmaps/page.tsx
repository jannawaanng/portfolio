"use client";

import Image from "next/image";

const CURRENT_SITE = "https://unlockedmaps.com/cities";

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] ${
        light ? "text-[#A7C9C5]" : "text-[#2E6360]"
      }`}
    >
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`max-w-4xl font-serif text-[31px] leading-[1.1] tracking-[-0.025em] md:text-[42px] ${
        light ? "text-[#F7F4EF]" : "text-[#1A1816]"
      }`}
    >
      {children}
    </h2>
  );
}

function PairImage({
  src,
  alt,
  label,
  desktopHeight,
}: {
  src: string;
  alt: string;
  label: string;
  desktopHeight: string;
}) {
  return (
    <figure className="flex min-w-0 flex-col items-center">
      <Image
        src={src}
        alt={alt}
        width={1800}
        height={1200}
        sizes="(max-width: 767px) 100vw, 48vw"
        className={`h-auto max-h-[280px] w-auto max-w-full rounded-[18px] object-contain shadow-[0_10px_32px_rgba(38,31,25,0.08)] ${desktopHeight}`}
      />

      <figcaption className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[#756D63]">
        {label}
      </figcaption>
    </figure>
  );
}

export default function UnlockedMapsCaseStudy() {
  const projectDetails = [
    {
      label: "Skills",
      value: [
        "Product Design",
        "Accessibility UX",
        "Interaction Design",
        "Data Engineering",
      ],
    },
    {
      label: "Methods",
      value: [
        "Heuristic Evaluation",
        "Accessibility Review",
        "Information Prioritization",
        "Data-Source Mapping",
      ],
    },
    {
      label: "Tools",
      value: ["Figma", "Retool", "Python", "REST APIs", "GeoJSON", "Regex"],
    },
  ];

  return (
    <main className="w-full bg-[#FCF9F5] text-[#1A1816]">
      {/* HERO */}
      <header className="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-20 md:pt-32">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#2E6360]">
          Accessibility Product Design · Data Engineering
        </p>

        <h1 className="font-serif text-[56px] leading-[0.95] tracking-[-0.04em] md:text-[82px]">
          Unlocked Maps
        </h1>

        <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12">
          <p className="max-w-2xl text-[18px] leading-[1.55] text-[#514C45] md:text-[20px]">
            I redesigned how riders find station accessibility information and
            built a data pipeline to support more reliable transit updates.
          </p>

          <a
            href={CURRENT_SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#244F4C] px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#193C39] md:mb-1"
          >
            View station pages
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <dl className="mt-11 grid gap-8 rounded-2xl bg-[#F2ECE5] p-6 sm:grid-cols-3 md:p-8">
          {projectDetails.map((item) => (
            <div key={item.label}>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2E6360]">
                {item.label}
              </dt>

              <dd className="mt-4">
                <ul className="space-y-2">
                  {item.value.map((entry) => (
                    <li
                      key={entry}
                      className="text-[13px] leading-[1.4] text-[#3E3934]"
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {/* CHALLENGE */}
      <section className="bg-[#F4EFE9] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-end md:gap-12">
            <div>
              <SectionLabel>Challenge</SectionLabel>
              <SectionTitle>Accessibility status was hard to scan.</SectionTitle>
            </div>

            <p className="max-w-xl text-[15px] leading-[1.65] text-[#514C45]">
              Riders needed a quick answer about station access. Dense text,
              unclear hierarchy, and limited interaction feedback slowed the
              task down.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row md:items-end md:gap-10">
            <PairImage
              src="/um-fig1.png"
              alt="Unlocked Maps map view"
              label="Map view"
              desktopHeight="md:h-[340px]"
            />

            <PairImage
              src="/um-fig2.png"
              alt="Unlocked Maps station-specific view"
              label="Station view"
              desktopHeight="md:h-[340px]"
            />
          </div>
        </div>
      </section>

      {/* DESIGN WORK */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Design work</SectionLabel>
          <SectionTitle>Make the next action easier to understand.</SectionTitle>

          <p className="mt-5 max-w-4xl text-[15px] leading-[1.65] text-[#514C45]">
            I increased contrast, simplified the hierarchy, clarified the
            product message, and added visible feedback to key interactions.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row md:items-end md:gap-10">
            <PairImage
              src="/um-hero-og.png"
              alt="Original Unlocked Maps landing page"
              label="Before"
              desktopHeight="md:h-[300px]"
            />

            <PairImage
              src="/um-hero-redesign-1.png"
              alt="Redesigned Unlocked Maps landing page"
              label="After"
              desktopHeight="md:h-[300px]"
            />
          </div>
        </div>
      </section>

      {/* DATA ENGINEERING */}
      <section className="px-6 pb-20 pt-2 md:pb-24">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-[#19343A] px-6 py-12 text-[#F7F4EF] shadow-[0_18px_50px_rgba(25,52,58,0.12)] md:px-10 md:py-14">
          <SectionLabel light>Data engineering</SectionLabel>
          <SectionTitle light>
            Turn fragmented transit data into structured station records.
          </SectionTitle>

          <p className="mt-5 max-w-3xl text-[15px] leading-[1.7] text-[#C9D5D3]">
            I built a Python pipeline that combines station metadata, geographic
            coordinates, elevator incidents, and amenity data. It standardizes
            station names and outputs records the product can filter and display.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Collect",
                text: "Pull station metadata, coordinates, and incident records from transit APIs.",
              },
              {
                number: "02",
                title: "Normalize",
                text: "Resolve inconsistent station names with fuzzy matching and fallback rules.",
              },
              {
                number: "03",
                title: "Structure",
                text: "Merge the sources into consistent records for filtering and display.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-white/[0.055] p-5"
              >
                <p className="text-[10px] font-semibold tracking-[0.14em] text-[#8EB6B2]">
                  {step.number}
                </p>
                <h3 className="mt-3 text-[14px] font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-[1.6] text-[#BDCBC9]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-[#213F45] p-5">
              <p className="text-[12px] font-semibold text-[#A7C9C5]">
                Incident processing
              </p>
              <p className="mt-2 text-[13px] leading-[1.65] text-[#C9D5D3]">
                A scheduled script checks incident feeds, separates elevator and
                escalator records, and links each incident to the correct station.
              </p>
            </div>

            <div className="rounded-2xl bg-[#213F45] p-5">
              <p className="text-[12px] font-semibold text-[#A7C9C5]">
                Amenity extraction
              </p>
              <p className="mt-2 text-[13px] leading-[1.65] text-[#C9D5D3]">
                Regex parsing extracts station and amenity details from free-text
                directory entries when structured data is unavailable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
