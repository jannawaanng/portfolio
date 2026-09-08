import Image from "next/image";

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
      className={`max-w-3xl font-serif text-[31px] leading-[1.1] tracking-[-0.025em] md:text-[42px] ${
        light ? "text-[#F7F4EF]" : "text-[#1A1816]"
      }`}
    >
      {children}
    </h2>
  );
}

export default function DukeCareerHubPage() {
  const projectDetails = [
    {
      label: "Role",
      value: ["UX Research Lead", "Product Designer"],
    },
    {
      label: "Team",
      value: ["3 Designers", "1 Outreach Lead", "1 Operations Lead"],
    },
    {
      label: "Methods",
      value: [
        "Usability Testing",
        "Heatmap Analysis",
        "Focus Groups",
        "Card Sorting",
      ],
    },
    {
      label: "Tools",
      value: ["Figma", "FigJam", "Hotjar"],
    },
  ];

  const designPrinciples = [
    {
      title: "Action over explanation",
      text: "Lead with tasks instead of institutional messaging.",
    },
    {
      title: "Journey-based navigation",
      text: "Organize support around Explore, Prepare, and Apply.",
    },
    {
      title: "Visible entry points",
      text: "Move advising and high-use tools out of nested menus.",
    },
  ];

  return (
    <main className="w-full bg-[#FCF9F5] text-[#1A1816]">
      {/* HERO */}
      <header className="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-20 md:pt-32">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#2E6360]">
          UX Research · Product Design
        </p>

        <h1 className="max-w-4xl font-serif text-[54px] leading-[0.95] tracking-[-0.04em] md:text-[80px]">
          Duke Career Hub
        </h1>

        <p className="mt-6 max-w-2xl text-[18px] leading-[1.55] text-[#514C45] md:text-[20px]">
          I led a mixed-methods study and redesigned Duke Career Hub around how
          students actually search for career support.
        </p>

        <dl className="mt-11 grid gap-8 rounded-2xl bg-[#F2ECE5] p-6 sm:grid-cols-2 md:grid-cols-4 md:p-8">
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
          <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-12">
            <div>
              <SectionLabel>Challenge</SectionLabel>
              <SectionTitle>
                Students could not find the support Duke already offered.
              </SectionTitle>
            </div>

            <p className="max-w-xl text-[15px] leading-[1.65] text-[#514C45]">
              Students struggled to book advising, locate relevant resources,
              and understand where to begin. Many relied on peer-led
              organizations instead.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: "/ch-1.png",
                stat: "76%",
                label: "reported high cognitive load",
              },
              {
                icon: "/ch-2.png",
                stat: "9.2",
                label: "average clicks to book advising",
              },
              {
                icon: "/ch-3.png",
                stat: "142s",
                label: "average time to find a resource",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-2xl bg-[#FCF9F5] p-5"
              >
                <div className="relative h-14 w-14 shrink-0">
                  <Image src={item.icon} alt="" fill className="object-contain" />
                </div>
                <div>
                  <p className="font-serif text-[36px] leading-none text-[#2E6360]">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase leading-[1.45] tracking-[0.1em] text-[#756D63]">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH FINDINGS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Research</SectionLabel>
          <SectionTitle>
            Behavioral data showed where students stopped. Interviews explained
            why.
          </SectionTitle>

          <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-[#514C45]">
            I combined usability testing, heatmap analysis, focus groups, and
            card sorting to identify navigation failures and understand student
            expectations.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-2xl bg-[#F2ECE5] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2E6360]">
                Usability testing
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                {[
                  ["76%", "found the homepage overwhelming"],
                  ["1 in 8", "booked an advisor on the first try"],
                ].map(([stat, label]) => (
                  <div key={label} className="rounded-xl bg-[#FCF9F5] p-4">
                    <p className="font-serif text-[30px] leading-none text-[#2E6360]">
                      {stat}
                    </p>
                    <p className="mt-2 text-[12px] leading-[1.45] text-[#514C45]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#F2ECE5] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2E6360]">
                What students said
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <blockquote className="rounded-xl bg-[#FCF9F5] p-4 text-[13px] leading-[1.6] text-[#514C45]">
                  “This info should be on an About page. I just want to find a
                  job.”
                </blockquote>
                <blockquote className="rounded-xl bg-[#FCF9F5] p-4 text-[13px] leading-[1.6] text-[#514C45]">
                  “I didn&apos;t know I could just book a general appointment.”
                </blockquote>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-5 md:flex-row">
            <div className="w-full md:w-7/12">
              <div className="relative aspect-[2.4/1] overflow-hidden rounded-xl border border-[#EAE1D4]">
                <Image
                  src="/ch-heatmap.png"
                  alt="Heatmap showing dead clicks on the Career Hub homepage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex w-full flex-col rounded-2xl bg-[#F2ECE5] p-6 md:w-5/12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2E6360]">
                Heatmap finding
              </p>
              <p className="mt-3 text-[14px] leading-[1.65] text-[#514C45]">
                Students clicked navigation, events, and personalization tools.
                Mission text received little attention. A prominent Explore
                Options banner looked interactive but was not clickable.
              </p>
              <p className="mt-4 rounded-xl bg-[#F7EAE6] p-4 text-[12px] leading-[1.55] text-[#8A443C]">
                Button-like styling created a dead end and weakened trust.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Generic guidance",
                text: "Students wanted advice tied to their industry and experience level.",
              },
              {
                title: "Human support was hidden",
                text: "Students expected clear access to one-on-one advising.",
              },
              {
                title: "Awareness depended on peers",
                text: "Students often learned about tools through friends and organizations.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-[#F2ECE5] p-5">
                <h3 className="text-[14px] font-semibold text-[#1A1816]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-[#5A554C]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARD SORT */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-[#19343A] px-6 py-12 text-[#F7F4EF] shadow-[0_18px_50px_rgba(25,52,58,0.12)] md:px-10 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel light>Information architecture</SectionLabel>
              <SectionTitle light>
                Students organized career resources by goal, not department.
              </SectionTitle>
            </div>

            <div className="flex gap-8">
              <div>
                <p className="font-serif text-[30px] leading-none text-[#8FC0D2]">
                  124
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9FB4B2]">
                  Items sorted
                </p>
              </div>
              <div>
                <p className="font-serif text-[30px] leading-none text-[#8FC0D2]">
                  10
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9FB4B2]">
                  Participants
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <div className="rounded-2xl bg-white/[0.055] p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A7C9C5]">
                  Strongest patterns
                </p>
                <div className="mt-5 grid gap-5 sm:grid-cols-3">
                  {[
                    [
                      "Industry paths",
                      "Participants independently grouped resources by fields such as finance and technology.",
                    ],
                    [
                      "Functional tools",
                      "Platforms and job boards were sorted quickly and consistently.",
                    ],
                    [
                      "Independent prep",
                      "Templates and self-service resources stayed separate from advising.",
                    ],
                  ].map(([title, text]) => (
                    <div key={title}>
                      <h3 className="text-[12px] font-semibold text-[#8FC0D2]">
                        {title}
                      </h3>
                      <p className="mt-2 text-[11.5px] leading-[1.55] text-[#C7D2D0]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.055] p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A7C9C5]">
                  Boundary confusion
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    ["Resources ↔ Advising", 48],
                    ["Jobs ↔ Featured Opportunities", 45],
                    ["Communities ↔ Affinity Groups", 42],
                  ].map(([pair, percent]) => (
                    <div key={pair as string}>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <p className="text-[12px] font-semibold text-[#F7F4EF]">
                          {pair}
                        </p>
                        <p className="text-[12px] font-semibold text-[#E7A07E]">
                          {percent}%
                        </p>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#E0906A]"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.055] p-6 lg:col-span-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A7C9C5]">
                What changed
              </p>
              <div className="mt-5 space-y-5">
                {[
                  {
                    finding: "Industry was the primary mental model.",
                    action: "Elevate industry paths in the main navigation.",
                  },
                  {
                    finding: "Self-service tools and advising blurred together.",
                    action: "Separate Tools and Guides from Connect.",
                  },
                  {
                    finding: "Some resources belonged in more than one path.",
                    action: "Support multiple navigation routes to the same item.",
                  },
                ].map((item, index) => (
                  <div key={item.finding} className="flex gap-4">
                    <span className="text-[11px] font-semibold text-[#7FB0C4]">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-[12px] leading-[1.55] text-[#C7D2D0]">
                        {item.finding}
                      </p>
                      <p className="mt-1.5 text-[12px] font-semibold leading-[1.5] text-[#F7F4EF]">
                        {item.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITIVE INSIGHT */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[24px] bg-[#2E6360] p-7 text-white md:p-9">
            <SectionLabel light>Competitive insight</SectionLabel>
            <p className="max-w-4xl font-serif text-[25px] leading-[1.2] tracking-[-0.02em] md:text-[32px]">
              Peer institutions organized career support around student
              audiences. Duke organized it around internal processes.
            </p>
          </div>
        </div>
      </section>

      {/* REDESIGN */}
      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Redesign</SectionLabel>
          <SectionTitle>From org chart to student journey.</SectionTitle>

          <div className="mt-9 grid gap-7 rounded-2xl bg-[#F2ECE5] p-6 md:grid-cols-3 md:p-8">
            {designPrinciples.map((principle, index) => (
              <div key={principle.title} className="flex gap-4">
                <span className="font-serif text-[28px] italic leading-none text-[#7FB0C4]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2E6360]">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[#514C45]">
                    {principle.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                tag: "Original",
                img: "/ch-before.png",
                accent: "#9B4A3F",
                bg: "#F7ECE9",
                summary: "The homepage prioritized institutional messaging over student tasks.",
                points: [
                  "Core actions were buried",
                  "Navigation labels did not match student goals",
                ],
              },
              {
                tag: "Prototype",
                img: "/ch-prototype.png",
                accent: "#9A7B2E",
                bg: "#F6EFDD",
                summary: "Visible actions improved utility, but too many CTAs flattened the hierarchy.",
                points: [
                  "Task-based navigation",
                  "Four competing hero actions",
                ],
              },
              {
                tag: "Final",
                img: "/ch-final.png",
                accent: "#2E6360",
                bg: "#E7F0EC",
                summary: "The final direction focused the page on two primary actions and clearer pathways.",
                points: [
                  "Two primary hero actions",
                  "Dedicated paths for key student needs",
                ],
                featured: true,
              },
            ].map((version) => (
              <div
                key={version.tag}
                className={`flex flex-col overflow-hidden rounded-xl bg-white ${
                  version.featured
                    ? "border-2 border-[#2E6360] shadow-sm"
                    : "border border-[#EAE1D4]"
                }`}
              >
                <div className="px-4 py-2" style={{ backgroundColor: version.bg }}>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: version.accent }}
                  >
                    {version.tag}
                  </span>
                </div>

                <div className="relative aspect-[16/10] border-b border-[#EFE8DF] bg-[#F3EDE6]">
                  <Image
                    src={version.img}
                    alt={`${version.tag} design`}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p
                    className="mb-4 rounded-lg px-3 py-2 text-[12px] leading-[1.55]"
                    style={{
                      backgroundColor: `${version.bg}80`,
                      color: version.accent,
                    }}
                  >
                    {version.summary}
                  </p>

                  <ul className="space-y-2">
                    {version.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-[12px] leading-[1.5] text-[#5A554C]"
                      >
                        <span style={{ color: version.accent }}>●</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#F4EFE9] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Reflection</SectionLabel>
          <p className="max-w-4xl font-serif text-[25px] leading-[1.35] tracking-[-0.02em] text-[#1A1816] md:text-[32px]">
            This project pushed me to think end to end. The product was not only
            the website. It was the full path between official support, peer
            networks, and the student&apos;s next decision.
          </p>
        </div>
      </section>
    </main>
  );
}
