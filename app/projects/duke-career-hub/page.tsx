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
      className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] ${
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
      className={`max-w-3xl font-serif text-[32px] leading-[1.08] tracking-[-0.025em] md:text-[44px] ${
        light ? "text-[#F7F4EF]" : "text-[#1A1816]"
      }`}
    >
      {children}
    </h2>
  );
}

const projectDetails = [
  { label: "Role", value: ["UX Research Lead", "Product Designer"] },
  { label: "Team", value: ["3 Designers", "1 Outreach Lead", "1 Operations Lead"] },
  { label: "Methods", value: ["Usability Testing", "Heatmaps", "Focus Groups", "Card Sorting"] },
  { label: "Tools", value: ["Figma", "FigJam", "Hotjar"] },
];

const frictionMetrics = [
  { icon: "/ch-1.png", stat: "76%", label: "found the homepage overwhelming" },
  { icon: "/ch-2.png", stat: "9.2", label: "average clicks to book advising" },
  { icon: "/ch-3.png", stat: "142s", label: "average time to find one resource" },
];

const designPrinciples = [
  {
    title: "Start with the task",
    text: "Put job search, advising, and preparation ahead of institutional messaging.",
  },
  {
    title: "Follow the student journey",
    text: "Organize support around exploring options, preparing, and applying.",
  },
  {
    title: "Show where to begin",
    text: "Bring advising and frequently used tools out of nested menus.",
  },
];

const versions = [
  {
    tag: "Original",
    img: "/ch-before.png",
    accent: "#9B4A3F",
    bg: "#F7ECE9",
    summary: "Institutional messaging appeared before the tasks students came to complete.",
    points: ["Advising was difficult to locate", "Navigation reflected internal structure"],
  },
  {
    tag: "Prototype",
    img: "/ch-prototype.png",
    accent: "#9A7B2E",
    bg: "#F6EFDD",
    summary: "Task-based navigation helped, but four hero actions competed for attention.",
    points: ["Student goals shaped the navigation", "Too many equal-priority entry points"],
  },
  {
    tag: "Final",
    img: "/ch-final.png",
    accent: "#2E6360",
    bg: "#E7F0EC",
    summary: "Two primary actions created a clearer starting point without hiding deeper resources.",
    points: ["Focused hero hierarchy", "Dedicated routes for common student needs"],
    featured: true,
  },
];

export default function DukeCareerHubPage() {
  return (
    <main className="w-full bg-[#FCF9F5] text-[#1A1816]">
      {/* HERO */}
      <header className="relative overflow-hidden bg-[#F8F1E8]">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-24 md:pb-16 md:pt-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2E6360]">
            UX Research · Product Design
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.84fr] lg:items-center">
            <div>
              <h1 className="max-w-4xl font-serif text-[54px] leading-[0.95] tracking-[-0.04em] md:text-[78px]">
                Duke Career Hub
              </h1>

              <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-[#5A544D]">
                I led research and redesigned the experience around the tasks students were already trying to complete: explore options, prepare, and connect with support.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-3">
              {frictionMetrics.map((item, index) => (
                <article
                  key={item.label}
                  className={`grid grid-cols-[58px_1fr] items-center gap-4 rounded-[22px] border p-4 shadow-sm ${
                    index === 0
                      ? "border-[#D8E5E1] bg-[#EDF4F1]"
                      : index === 1
                        ? "border-[#EFE3B8] bg-[#FFF8DD]"
                        : "border-[#E2DEEC] bg-[#F1EFF7]"
                  }`}
                >
                  <div className="relative h-14 w-14">
                    <Image src={item.icon} alt="" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="font-serif text-[34px] leading-none text-[#2E6360]">{item.stat}</p>
                    <p className="mt-1.5 text-[11px] font-semibold uppercase leading-[1.4] tracking-[0.09em] text-[#655E56]">
                      {item.label}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <dl className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-[12px] text-[#5A544D]">
            <div className="flex gap-2"><dt className="font-semibold text-[#2E6360]">Role</dt><dd>UX Research Lead · Product Designer</dd></div>
            <div className="flex gap-2"><dt className="font-semibold text-[#2E6360]">Team</dt><dd>3 Designers · 1 Outreach Lead · 1 Operations Lead</dd></div>
            <div className="flex gap-2"><dt className="font-semibold text-[#2E6360]">Tools</dt><dd>Figma · FigJam · Hotjar</dd></div>
          </dl>
        </div>
      </header>

      {/* PROBLEM */}
      <section className="bg-[#F4EFE9] py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionLabel>The problem</SectionLabel>
             <SectionTitle>
  Students needed career support.
  <br />
  Finding the right support was the challenge.
</SectionTitle></div>
            <p className="max-w-3xl text-[16px] leading-[1.7] text-[#514C45]">
              Duke offered advising, events, job boards, templates, guides, and industry resources, but many students struggled to figure out where to begin.
</p>
         
           <p className="max-w-3xl text-[16px] leading-[1.7] text-[#514C45]">
          
Instead of navigating the Career Hub directly, students often relied on friends, student organizations, and word of mouth to discover resources that matched their goals. </p>
       
          </div>

        </div>
      </section>

      {/* RESEARCH STORY */}
      <section className="bg-[#FCF9F5] py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Research</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
             <p className="max-w-3xl text-[16px] leading-[1.7] text-[#514C45]">
             To understand where students were getting stuck, I combined usability testing, heatmap analysis, focus groups, and card sorting.

The patterns were consistent across every method. Students approached career support through goals such as exploring careers, preparing applications, and getting help.  </p>
          
               <p className="max-w-3xl text-[16px] leading-[1.7] text-[#514C45]">
              The Career Hub, however, was organized around internal departments and services.

As a result, students often understood what they wanted to accomplish, but struggled to determine which resource, office, or pathway would actually help them do it. </p>
        
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Quant + heatmap */}
            <div className="overflow-hidden rounded-[26px] border border-[#E5DDD4] bg-[#F2ECE5]">
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                {[
                  ["76%", "found the homepage overwhelming"],
                  ["1 in 8", "booked an advisor on the first try"],
                ].map(([stat, label]) => (
                  <div key={label} className="rounded-[18px] bg-[#FCF9F5] p-5">
                    <p className="font-serif text-[32px] leading-none text-[#2E6360]">{stat}</p>
                    <p className="mt-2 text-[13px] leading-[1.5] text-[#514C45]">{label}</p>
                  </div>
                ))}
              </div>

              <div className="relative aspect-[2.15/1] overflow-hidden border-t border-[#E5DDD4]">
                <Image
                  src="/ch-heatmap.png"
                  alt="Heatmap showing interaction patterns on the Career Hub homepage"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid gap-3 p-6 sm:grid-cols-[1fr_auto] sm:items-start">
                <p className="text-[14px] leading-[1.65] text-[#514C45]">
                  Students focused on navigation, events, and tools. Mission copy received little attention, while a button-like banner attracted clicks without leading anywhere.
                </p>
                <span className="rounded-full bg-[#F7E3DD] px-3 py-2 text-[11px] font-semibold text-[#8A443C]">
                  Visual affordance, no action
                </span>
              </div>
            </div>

            {/* Voices */}
            <div className="flex flex-col gap-5">
              <div className="rounded-[24px] bg-[#19343A] p-6 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#A7C9C5]">
                  What students said
                </p>
                <div className="mt-6 space-y-6">
                  <blockquote className="font-serif text-[21px] leading-[1.3] text-[#F7F4EF]">
                    “This info should be on an About page. I just want to find a job.”
                  </blockquote>
                  <div className="h-px bg-white/10" />
                  <blockquote className="font-serif text-[21px] leading-[1.3] text-[#F7F4EF]">
                    “I didn&apos;t know I could just book a general appointment.”
                  </blockquote>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-3">
                {[
                  ["Guidance felt generic", "Students wanted advice tied to industry and experience level."],
                  ["Advising was hidden", "Students expected one-on-one support to have a visible entry point."],
                  ["Peers filled the gap", "Students often discovered official resources through friends and organizations."],
                ].map(([title, text], index) => (
                  <article key={title} className="grid grid-cols-[32px_1fr] gap-3 rounded-[18px] border border-[#E5DDD4] bg-[#FCF9F5] p-4">
                    <span className="font-serif text-[21px] text-[#7FB0C4]">0{index + 1}</span>
                    <div>
                      <h3 className="text-[14px] font-semibold">{title}</h3>
                      <p className="mt-1 text-[13px] leading-[1.55] text-[#5A554C]">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMATION ARCHITECTURE */}
      <section className="px-6 pb-14 md:pb-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[30px] bg-[#19343A] px-6 py-10 text-[#F7F4EF] shadow-[0_18px_50px_rgba(25,52,58,0.12)] md:px-9 md:py-12">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel light>Card sort</SectionLabel>
                </div>
            <div className="flex gap-8 border-l border-white/10 pl-8">
              <div>
                <p className="font-serif text-[31px] leading-none text-[#8FC0D2]">124</p>
                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#9FB4B2]">Items sorted</p>
              </div>
              <div>
                <p className="font-serif text-[31px] leading-none text-[#8FC0D2]">10</p>
                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#9FB4B2]">Participants</p>
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[22px] bg-white/[0.06] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A7C9C5]">What grouped cleanly</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {[
                  ["Industry paths", "Finance, technology, and other fields became natural entry points."],
                  ["Tools", "Platforms and job boards were sorted quickly and consistently."],
                  ["Independent prep", "Templates and self-service guides stayed separate from advising."],
                ].map(([title, text]) => (
                  <div key={title}>
                    <h3 className="text-[13px] font-semibold text-[#8FC0D2]">{title}</h3>
                    <p className="mt-2 text-[12px] leading-[1.6] text-[#C7D2D0]">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] bg-white/[0.06] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A7C9C5]">Categories students mixed together</p>
              <div className="mt-5 space-y-4">
                {[
                  ["Resources + advising", "Appointments, guides, and templates felt like one support system."],
                  ["Jobs + featured opportunities", "Students did not distinguish standard listings from curated ones."],
                  ["Communities + affinity groups", "Both were understood as ways to connect with people who shared their interests."],
                ].map(([title, text], index) => (
                  <div key={title} className="grid grid-cols-[30px_1fr] gap-3 border-t border-white/10 pt-4 first:border-0 first:pt-0">
                    <span className="text-[11px] font-semibold text-[#E7A07E]">0{index + 1}</span>
                    <div>
                      <h3 className="text-[13px] font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-[12px] leading-[1.55] text-[#C7D2D0]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              ["Industry became a main path", "Students repeatedly grouped resources by field."],
              ["Tools and advising separated", "Self-service prep needed a different route from human support."],
              ["Resources needed multiple paths", "Some items belonged under more than one student goal."],
            ].map(([action, reason], index) => (
              <div key={action} className="rounded-[18px] border border-white/10 p-5">
                <p className="text-[10px] font-semibold text-[#7FB0C4]">0{index + 1}</p>
                <p className="mt-3 text-[14px] font-semibold text-white">{action}</p>
                <p className="mt-2 text-[12px] leading-[1.55] text-[#BCCAC8]">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* 
      <section className="pb-14 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 rounded-[22px] border border-[#CDDDD8] bg-[#E8F1EE] p-6 md:grid-cols-[0.3fr_1fr] md:items-center md:p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#2E6360]">Competitive analysis</p>
            <p className="font-serif text-[22px] leading-[1.3] tracking-[-0.02em] text-[#1E3734] md:text-[27px]">
              Other schools organized career support around students. Duke organized it around departments.
            </p>
          </div>
        </div>
      </section>
      */}

      {/* REDESIGN — PRESERVED / REFINED */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Design direction</SectionLabel>
          <div className="mt-9 grid gap-7 rounded-[26px] border border-[#E5DDD4] bg-[#F2ECE5] p-6 md:grid-cols-3 md:p-8">
            {designPrinciples.map((principle, index) => (
              <div key={principle.title} className="grid grid-cols-[48px_1fr] gap-4">
                <span className="font-serif text-[29px] italic leading-none text-[#7FB0C4]">0{index + 1}</span>
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#2E6360]">{principle.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#514C45]">{principle.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {versions.map((version) => (
              <article
                key={version.tag}
                className={`flex flex-col overflow-hidden rounded-[20px] bg-white ${
                  version.featured ? "border-2 border-[#2E6360] shadow-md" : "border border-[#E3D9CD]"
                }`}
              >
                <div className="px-5 py-3" style={{ backgroundColor: version.bg }}>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.17em]" style={{ color: version.accent }}>
                    {version.tag}
                  </span>
                </div>

                <div className="relative aspect-[16/10] border-b border-[#EFE8DF] bg-[#F3EDE6]">
                  <Image src={version.img} alt={`${version.tag} design`} fill className="object-cover object-top" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="rounded-[14px] px-4 py-3 text-[13px] leading-[1.55]" style={{ backgroundColor: `${version.bg}90`, color: version.accent }}>
                    {version.summary}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {version.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-[13px] leading-[1.5] text-[#5A554C]">
                        <span className="mt-1" style={{ color: version.accent }}>●</span>{point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="bg-[#FCF9F5] py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <SectionLabel>Reflection</SectionLabel>
          <h2 className="mx-auto max-w-5xl font-serif text-[29px] leading-[1.12] tracking-[-0.025em] text-[#1A1816] md:text-[36px]">
          What surprised me most. </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.75] text-[#514C45]">
          The most valuable part of this project wasn't the redesign itself. It was seeing how differently students experienced a system that felt familiar to the people who worked with it every day.  </p>
             <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.75] text-[#514C45]">
         
           Testing exposed the friction, card sorting reshaped the navigation, and prototype iteration clarified where students should begin. The redesign made Duke’s official support easier to enter while respecting the advisors, peers, and organizations students already trusted.
          </p>
<p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.75] text-[#514C45]">
          
          The project reinforced how much information architecture shapes decision-making. Once the experience was reorganized around student goals rather than internal departments, many of the usability issues became easier to solve.
        </p>
        </div>
      </section>
    </main>
  );
}
