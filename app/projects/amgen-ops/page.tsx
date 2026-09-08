"use client";

import Image from "next/image";

const projectDetails = [
  {
    label: "Role",
    value: ["Operations Engineering Intern"],
  },
  {
    label: "Partner Functions",
    value: [
      "Maintenance & Schedulers",
      "Engineering",
      "Manufacturing",
      "Quality",
      "System Owners",
    ],
  },
  {
    label: "Focus",
    value: [
      "Maintenance Analytics",
      "Decision Support",
      "Workflow Design",
      "Operational Reporting",
    ],
  },
  {
    label: "Tools",
    value: ["Power BI", "Smartsheet", "Excel", "IBM Maximo"],
  },
];

const impactAreas = [
  {
    title: "Identified planning risk",
    text: "Analyzed maintenance data across 1,000+ assets to surface downtime patterns and planning opportunities.",
  },
  {
    title: "Connected operational context",
    text: "Brought priorities, ownership, dependencies, and status into shared reporting across separate tools.",
  },
  {
    title: "Supported cross-functional planning",
    text: "Built Power BI analysis and Smartsheet reporting for maintenance, engineering, scheduling, quality, manufacturing, and procurement workflows.",
  },
  {
    title: "Standardized recurring work",
    text: "Replaced ad hoc tracking with repeatable workflows for planning, compliance tracking, and operational reviews.",
  },
];

export default function AmgenOperationsPage() {
  return (
    <main className="min-h-screen bg-[#F6F8FA] text-[#14212B]">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-24 md:pt-28">
        <div className="grid overflow-hidden rounded-[30px] bg-[#041C2C] shadow-[0_22px_65px_rgba(4,28,44,0.14)] md:min-h-[410px] md:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col justify-between p-7 sm:p-9 md:p-10 lg:p-12">
            <div>
              <h1 className="font-serif text-[50px] leading-[0.9] tracking-[-0.045em] sm:text-[60px] lg:text-[70px]">
                <span className="block text-[#4FA9DC]">Amgen</span>
                <span className="block text-white">Operations</span>
              </h1>

              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8ED8F1]">
                June to August 2025
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-5 sm:gap-8">
              {[
                ["1,000+", "Assets analyzed"],
                ["20+", "Stakeholders supported"],
                ["8%", "Downtime savings targeted"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-serif text-[29px] leading-none text-white sm:text-[34px]">
                    {value}
                  </p>
                  <p className="mt-2 text-[8px] font-semibold uppercase leading-[1.45] tracking-[0.12em] text-[#75D1EF] sm:text-[9px]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Full photo on the same navy surface */}
          <div className="flex items-center justify-center overflow-hidden bg-[#041C2C] px-5 py-8 sm:px-7 md:px-8">
            <figure className="w-full overflow-hidden rounded-[22px] shadow-[0_18px_48px_rgba(0,0,0,0.28)]">
              <Image
                src="/amgen-pond.jpg"
                alt="Amgen campus pond framed by wooden architecture"
                width={1600}
                height={1067}
                sizes="(max-width: 767px) 100vw, 42vw"
                quality={90}
                className="h-auto w-full"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0063A6]">
          Overview
        </p>

        <h2 className="mt-3 max-w-4xl font-serif text-[34px] leading-[1.08] tracking-[-0.03em] md:text-[44px]">
         Building shared visibility across maintenance workflows.
        </h2>

        <p className="mt-5 max-w-3xl text-[15px] leading-[1.68] text-[#53636E]">
         I consolidated separate tools and trackers into shared reporting that
clarified operational risk, ownership, dependencies, and next steps across
teams.
        </p>

        <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-7 rounded-[22px] bg-white p-5 shadow-[0_12px_38px_rgba(13,48,70,0.05)] sm:p-6 lg:grid-cols-4">
          {projectDetails.map((item) => (
            <div key={item.label} className="min-w-0">
              <dt className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0063A6] sm:text-[10px] sm:tracking-[0.16em]">
                {item.label}
              </dt>
              <dd className="mt-3 space-y-1.5">
                {item.value.map((line) => (
                  <p
                    key={line}
                    className="text-[11.5px] leading-[1.4] text-[#374650] sm:text-[12.5px]"
                  >
                    {line}
                  </p>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* RESULTS */}
      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0063A6]">
            Impact
          </p>

          <ul className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {impactAreas.map((item, index) => (
              <li key={item.title} className="grid grid-cols-[32px_1fr] gap-3">
                <span className="font-serif text-[21px] leading-none text-[#73BDE0]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#14212B]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-[1.58] text-[#5B6972]">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-7 rounded-2xl bg-[#E8F2F8] px-5 py-4">
  <p className="text-[12px] leading-[1.55] text-[#506774] lg:whitespace-nowrap">
    🔒 Details omitted for confidentiality. {" "}
    <strong className="font-semibold text-[#164F73]">
      Ask me if you'd like to learn more.
    </strong>
  </p>
</div>
<section className="mx-auto max-w-6xl px-6 py-12">
  <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_12px_38px_rgba(13,48,70,0.05)]">
    <div className="grid md:grid-cols-[1.1fr_0.9fr]">
      <div className="p-6 md:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0063A6]">
          Summer at Amgen
        </p>

        <h3 className="mt-3 font-serif text-[28px] leading-tight">
          Learning inside a complex manufacturing environment.
        </h3>

        <p className="mt-4 max-w-md text-[14px] leading-relaxed text-[#5B6972]">
          Beyond project work, I collaborated with leaders, engineers,
         and fellow interns across Manufacturing & Clinical
          Supply while learning how large-scale operations are planned and
          executed.
        </p>
      </div>
<figure className="overflow-hidden rounded-2xl">
  <Image
    src="/amgen-group-photo.jpg"
    alt="Amgen internship cohort"
    width={1600}
    height={1200}
    />
       </figure>
    </div>
  </div>
</section>

        </div>
      </section>
    </main>
  );
}
