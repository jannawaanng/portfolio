import Image from "next/image";

export default function LunchPage() {
  return (
    <main className="w-full bg-[#F5F3EF]">
      {/* HERO - light, airy, Apple-ish */}
      <section className="relative xs:h-[320px] h-[430px] md:h-[560px] lg:h-[550px] overflow-hidden bg-[#F5F3EF]">
        <Image
          src="/lb-head.png"
          alt="lunch-header"
          fill
          priority
          className="object-cover object-[50%_28%]"
        />

        {/* soft bright overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-transparent to-[#F5F3EF]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.75)_0,transparent_45%)] pointer-events-none" />

        {/* text */}
        <div className="absolute inset-0 flex items-end">
          <div
            className="
              absolute 
              left-0
              right-0
              bottom-10
              h-60 
              bg-gradient-to-t 
              from-[#ffe9f0]/50
              via-[#effffa]/70
              to-transparent 
              pointer-events-none 
              z-0
            "
          />
          <div className="w-full max-w-7xl mx-auto px-6 pb-14 md:pb-20 drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)] relative z-10">
            <p className="text-[11.5px] md:text-[15px] px-1.5 tracking-[0.4em] uppercase text-[#162f62] mb-1">
              AUG 2023–MAY 2024
            </p>
            <h1 className="text-4xl md:text-5xl font-extralight text-[#420b35] leading-[0.85] mb-2 tracking-tighter">
              Modular Trays for Durham Public Schools
            </h1>
            <p className="text-base md:text-xl px-1.5 py-1 mb-1 text-[#162f62] max-w-5xl font-light">
              Reusable mealware with an interlocking mechanism, designed to reduce
              lunch-line congestion and support a wider range of offerings in Durham cafeterias.
            </p>
          </div>
        </div>
      </section>

      {/* APPLE-GLASS STATS BAR */}
      <section className="relative -mt-12 md:-mt-20 px-10 flex justify-center">
        <div className="max-w-4xl w-full bg-gradient-to-r from-[#ffc9d9] via-[#c2e3ff] to-[#c7f3d2] p-[1px] rounded-[26px] shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
          <div
            className="
              bg-white/60 backdrop-blur-xl
              rounded-[24px]
              px-10 py-2.5
              flex flex-wrap items-center justify-between gap-2
              text-[#0d365e]
            "
          >
            <div className="flex items-baseline gap-1 text-xs">
              <span className="text-lg font-light">5</span>
              <span className="opacity-70">person engineering team</span>
            </div>

            <div className="flex items-baseline gap-1 text-xs">
              <span className="text-lg font-light">1</span>
              <span className="opacity-70">provisional patent</span>
            </div>

            <div className="flex items-baseline gap-1 text-xs">
              <span className="text-lg font-light">$3K+</span>
              <span className="opacity-70">in grants + funding</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT FACTS */}
      <section className="bg-[#F5F3EF] border-b border-[#E0D9CE]/60">
        <div
          className="
            max-w-6xl mx-auto 
            px-6 md:px-8 py-10
            grid grid-cols-2 md:grid-cols-4 
            gap-y-6 gap-x-12 
            text-left
          "
        >
          {/* ROLE */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Role
            </p>
            <ul className="text-sm text-[#2C3E3A] font-medium space-y-1">
              <li>CAD Modeling &amp; Prototyping</li>
              <li>Materials Research</li>
              <li>Product Development</li>
            </ul>
          </div>

          {/* TEAM */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Team
            </p>
            <ul className="text-sm text-[#2C3E3A] font-medium space-y-1">
              <li>2 Product Engineers</li>
              <li>2 Machinists</li>
              <li>1 Operations Partner</li>
            </ul>
          </div>

          {/* SKILLS */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Skills
            </p>
            <ul className="text-sm text-[#2C3E3A] font-medium space-y-1">
              <li>Cross-Functional Teamwork</li>
              <li>Entrepreneurship</li>
              <li>Injection Mold DFM</li>
              <li>Iterative Design</li>
              <li>Rapid Prototyping</li>
              <li>User Research</li>
            </ul>
          </div>

          {/* TOOLS */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Tools
            </p>
            <ul className="text-sm text-[#2C3E3A] font-medium space-y-1">
              <li>3D Printer</li>
              <li>CNC Router</li>
              <li>Fusion 360</li>
              <li>Laser Cutter</li>
              <li>Onshape</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTEXT + DESIGN PROBLEM */}
<section className="relative px-6 py-16 bg-gradient-to-b from-[#F5F3EF] to-[#F8FAFD]">
  {/* little doodle note that points to the next section */}
  <div className="pointer-events-none hidden md:block absolute right-16 bottom-6 text-[11px] text-[#C9A6FF] rotate-[-6deg]">
    <span className="inline-block mr-1">context →</span>
    <span className="inline-block">principles ↓</span>
  </div>

  <div className="max-w-6xl mx-auto space-y-10">
    {/* Eyebrow with highlighter bar */}
    <div className="relative inline-block">
      <p className="text-[13px] uppercase tracking-[0.3em] text-[#14526b] mb-2">
        Context
      </p>
      <span className="pointer-events-none absolute -bottom-1 left-0 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#ffc9d9] via-[#c2e3ff] to-[#c7f3d2]" />
    </div>

    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.7fr)] items-start">
      {/* LEFT: heading + chips + photo */}
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-extralight text-[#2C3E3A] leading-tight max-w-xl">
          Durham’s lunch trays weren’t keeping up.
        </h2>

        <div className="inline-flex flex-wrap items-center gap-6 text-[10px] tracking-[0.18em] uppercase text-[#8C8173] mx-2">
          <span className="rounded-full bg-[#FFE0EE] px-3.5 py-1 shadow-sm">
            57 schools
          </span>
          <span className="rounded-full bg-[#E0F3FF] px-3.5 py-1 shadow-sm">
            51k+ students, K-12 
          </span>
        </div>

        <div className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-[0_12px_26px_rgba(10,40,80,0.12)] p-3 border border-[#E6ECF3] max-w-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(10,40,80,0.16)]">
          <Image
            src="/dps.jpg"
            alt="Durham lunch line with trays"
            width={260}
            height={150}
            className="rounded-2xl w-full h-auto object-cover object-[50%_35%]"
          />
    
        </div>
      </div>

      {/* RIGHT: issue cards + final line */}
      <div className="space-y-5 text-base text-[#5C7A6F] leading-relaxed font-light">
        <p>
          Our stakeholder at{" "}
          <span className="font-semibold">Durham Public Schools</span> came to us
          with a clear problem: the existing trays didn&apos;t match what the
          district was trying to serve.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {/* card 1 */}
          <div className="group rounded-2xl bg-white/90 border border-[#E4EBE4] px-4 py-3 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,70,90,0.18)]">
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A8F82] mb-1">
              Too flimsy
            </p>
            <p className="text-sm">
              The district’s{" "}
              <span className="font-semibold">single-use </span>{" "}
              trays <span className="font-semibold">lacked durability </span>{" "} and couldn't support the{" "}
              <span className="font-semibold">expanding, culturally inclusive menu</span>.
            </p>
          </div>

          {/* card 2 */}
          <div className="group rounded-2xl bg-white/90 border border-[#E4EBE4] px-4 py-3 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,70,90,0.18)]">
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A8F82] mb-1">
              Inefficient
            </p>
            <p className="text-sm">
              Trays <span className="font-semibold">stuck together</span> and{" "}
              <span className="font-semibold">slowed down lunch lines</span>,
              creating frustration for staff.
            </p>
          </div>

          {/* card 3 */}
          <div className="group rounded-2xl bg-white/90 border border-[#E4EBE4] px-4 py-3 shadow-sm md:col-span-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,70,90,0.18)]">
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A8F82] mb-1">
              Wrong shape
            </p>
            <p className="text-sm">
              The <span className="font-semibold">thin, shallow compartments</span>{" "}
              didn&apos;t fit the new variety of meals, liquid foods, or portion sizes the
              district wanted to serve.
            </p>
          </div>
        </div>

        <p>
          DPS needed a{" "}
          <span className="font-semibold">durable, reusable system</span> that
          worked for both <span className="font-semibold">students and staff</span>.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* DESIGN PRINCIPLES / GOALS / FEATURES */}
      <section className="relative bg-[#F8FAF6] py-20 overflow-hidden">
        {/* notebook grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="h-full w-full opacity-70 bg-[linear-gradient(to_right,rgba(210,220,230,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(210,220,230,0.35)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* punch holes running down left */}
        <div className="pointer-events-none hidden md:flex flex-col justify-between absolute left-5 top-16 bottom-16">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full border border-[#C7CFD8] bg-[#F8FAF6]"
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-8 space-y-12">
          {/* header + doodles */}
          <div className="max-w-3xl space-y-3 relative">
            <div className="absolute -top-6 right-10 text-xs text-[#C9A6FF] rotate-[-6deg]">
              ✶ ✶
            </div>
            <p className="text-[13px] tracking-[0.32em] uppercase text-[#3C7A8F]">
              Design Principles
            </p>
            <h2 className="text-3xl md:text-4xl font-extralight text-[#1E2B28] leading-tight">
              Dignity-first constraints, cafeteria-realistic design.
            </h2>
            <p className="text-sm md:text-base text-[#5C7A6F] font-light leading-relaxed">
              An engineer’s notebook of tradeoffs: every choice had to work for
              real kids, real staff, and a real dish room.
            </p>
          </div>

          {/* DESIGN GOALS STRIP */}
          <div className="rounded-3xl bg-white/70 border border-[#E3E0D9] shadow-[0_10px_28px_rgba(40,60,80,0.08)] px-5 py-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs tracking-[0.22em] uppercase text-[#8C8173]">
                Design goals
              </span>
              <span className="text-[11px] text-[#C4A371]">
                (what the tray had to do)
              </span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
              {[
                "Accommodate varied components",
                "Modular, intuitive interlock",
                "Easy to clean + machine-washable",
                "Easy separation in the rush",
                "Durable for years of use",
                "Kid-friendly & approachable",
                "Looks good on the line",
                "Injection-moldable at real cost",
              ].map((goal, i) => (
                <div
                  key={goal}
                  className="flex items-center gap-2 rounded-2xl bg-[#F9F5EC] px-3 py-1.5 text-[11px] text-[#36413A] shadow-sm"
                >
                  <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[10px] text-[#C79A4A]">
                    {i + 1}
                  </span>
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PRINCIPLES + FEATURES GRID */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
            {/* LEFT: Principles */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-xs tracking-[0.22em] uppercase text-[#8C8173]">
                What we optimized for
              </p>

              <div className="space-y-3">
                {/* each card = pastel index card */}
                {[
                  {
                    icon: "🚶‍♀️",
                    title: "Faster, calmer lines",
                    body:
                      "Trays unstack and lock without fuss so staff can watch kids, not pry plastic apart.",
                    spineFrom: "#E1EDFF",
                    spineTo: "#C8D9FF",
                    bubble: "#EAF3FF",
                  },
                  {
                    icon: "🧩",
                    title: "Modular by default",
                    body:
                      "One tray family flexing across ages, portions, and menus instead of new SKUs.",
                    spineFrom: "#FFE1C5",
                    spineTo: "#FFCBA1",
                    bubble: "#FFF3E2",
                  },
                  {
                    icon: "✋",
                    title: "Designed for small hands",
                    body:
                      "Edge radii, grip, and weight tuned for kids carrying full meals across the room.",
                    spineFrom: "#DDF4E4",
                    spineTo: "#BFE6C8",
                    bubble: "#EAF9EE",
                  },
                  {
                    icon: "🧼",
                    title: "Built for real kitchens",
                    body:
                      "Geometry and materials chosen for dishwashers, drops, and years of service.",
                    spineFrom: "#E5DEFF",
                    spineTo: "#C9BEF6",
                    bubble: "#F3EEFF",
                  },
                ].map((p) => (
                  <div
                    key={p.title}
                    className="group relative rounded-[20px] bg-white/95 shadow-[0_10px_24px_rgba(32,60,90,0.08)] px-4 py-3 flex gap-3 items-start border border-[#E1DFD8] transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(32,60,90,0.14)]"
                  >
                    <div
                      className="absolute left-0 top-2 bottom-2 w-1 rounded-l-[20px]"
                      style={{
                        backgroundImage: `linear-gradient(to bottom, ${p.spineFrom}, ${p.spineTo})`,
                      }}
                    />
                    <div
                      className="mt-1 flex h-9 w-9 items-center justify-center rounded-full text-lg shadow-sm"
                      style={{ backgroundColor: p.bubble }}
                    >
                      <span className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:scale-110">
                        {p.icon}
                      </span>
                    </div>
                    <div className="pl-1">
                      <h3 className="text-sm font-semibold text-[#1E2B28]">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[#5C7A6F] font-light">
                        {p.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Key Features of the final tray */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-xs tracking-[0.22em] uppercase text-[#8C8173]">
                How it shows up in the final tray
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Easy-Grip Separation Holds */}
                <div className="group relative rounded-3xl bg-white/96 border border-[#F0E3D0] shadow-[0_10px_24px_rgba(120,80,40,0.08)] p-3 space-y-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(120,80,40,0.18)]">
                  <span className="pointer-events-none absolute -top-3 left-6 h-4 w-16 bg-[#FFEBD9]/90 rotate-[-4deg] rounded-sm" />
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[#A35B26]">
                    Easy-Grip separation holds
                  </span>
                  <div className="relative h-20 rounded-2xl overflow-hidden bg-[#FFF3E2]">
                    {/* <Image src="/feature-grip.png" fill className="object-cover" /> */}
                  </div>
                  <p className="text-xs text-[#5C7A6F] font-light">
                    Thumb-friendly holds that give staff leverage to separate stacks
                    without fighting suction or stuck corners.
                  </p>
                </div>

                {/* Snap n’ Lock Tray Combination */}
                <div className="group relative rounded-3xl bg-white/96 border border-[#D9E3F5] shadow-[0_10px_24px_rgba(60,90,150,0.08)] p-3 space-y-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(60,90,150,0.18)]">
                  <span className="pointer-events-none absolute -top-3 right-6 h-4 w-18 bg-[#E4F0FF]/95 rotate-[5deg] rounded-sm" />
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[#265C84]">
                    Snap n&apos; Lock tray combination
                  </span>
                  <div className="relative h-20 rounded-2xl overflow-hidden bg-[#E7F1FF]">
                    {/* <Image src="/feature-snaplock.png" fill className="object-cover" /> */}
                  </div>
                  <p className="text-xs text-[#5C7A6F] font-light">
                    A snap-fit rail that keeps trays aligned in stacks and on the
                    serving line, while still breaking apart with a single motion.
                  </p>
                </div>

                {/* Space-saving stackability */}
                <div className="group relative rounded-3xl bg-white/96 border border-[#D3ECD7] shadow-[0_10px_24px_rgba(70,120,80,0.08)] p-3 space-y-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(70,120,80,0.18)]">
                  <span className="pointer-events-none absolute -top-3 left-7 h-4 w-18 bg-[#E5F8E7]/95 rotate-[-3deg] rounded-sm" />
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[#45714A]">
                    Space-saving stackability
                  </span>
                  <div className="relative h-20 rounded-2xl overflow-hidden bg-[#E9F8EA]">
                    {/* <Image src="/feature-stack.png" fill className="object-cover" /> */}
                  </div>
                  <p className="text-xs text-[#5C7A6F] font-light">
                    Nested geometry that packs tightly on carts and shelves, but
                    still leaves enough air to separate trays quickly.
                  </p>
                </div>

                {/* Smooth corners + cleanability */}
                <div className="group relative rounded-3xl bg-white/96 border border-[#E0D6F4] shadow-[0_10px_24px_rgba(90,70,150,0.08)] p-3 space-y-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(90,70,150,0.18)]">
                  <span className="pointer-events-none absolute -top-3 right-8 h-4 w-20 bg-[#F1ECFF]/95 rotate-[4deg] rounded-sm" />
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[#5E4EB0]">
                    Smooth, scrape-friendly corners
                  </span>
                  <div className="relative h-20 rounded-2xl overflow-hidden bg-[#F3EEFF]">
                    {/* <Image src="/feature-corners.png" fill className="object-cover" /> */}
                  </div>
                  <p className="text-xs text-[#5C7A6F] font-light">
                    Generous radii and flat bases that make it easy to scrape, wash,
                    and keep food from getting trapped.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
{/* DESIGN PROCESS – TIMELINE */}
<section className="relative bg-gradient-to-b from-[#F5F9FF] to-[#F8FAFD] py-20">
  <div className="max-w-6xl mx-auto px-6 md:px-8">
    {/* Header */}
    <div className="max-w-4xl mb-12 space-y-3">
      <p className="text-[13px] md:text-[15px] uppercase tracking-[0.3em] text-[#3C7A8F]">
        Design Process
      </p>
      <h2 className="text-4xl md:text-5xl font-extralight text-[#1E2B28] leading-tight">
        A year-long journey from sketchbook to manufacturable hardware.
      </h2>
      <p className="text-base text-[#5C7A6F] font-light leading-relaxed">
        We bounced between quick experiments, cafeteria tests, and manufacturing
        constraints—reopening “finished” ideas whenever kids, staff, or costs
        told us something new.
      </p>
    </div>

    {/* timeline spine */}
    <div className="relative mt-6">
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#CFE5F5] to-[#D8DFF0] rounded-full" />

      <div className="space-y-12">

        {/* STEP 01 – text + image */}
        <div className="relative pl-10 md:pl-16">
          {/* node */}
          <div className="absolute left-0 md:left-4 top-4 flex items-center justify-center">
            <div className="h-9 w-9 rounded-full bg-white shadow-md border border-[#D4E3F4] flex items-center justify-center">
              <span className="text-[11px] font-medium text-[#3C7A8F]">01</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
            {/* text */}
            <div className="flex-1 group rounded-3xl bg-white/95 border border-[#E4EBF4] shadow-[0_12px_26px_rgba(20,60,110,0.14)] px-5 py-4 transition-all duration-150 hover:-translate-y-1.5 hover:-rotate-[0.4deg] hover:shadow-[0_18px_40px_rgba(20,60,110,0.22)]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden>💡</span>
                <h3 className="text-lg md:text-xl font-semibold text-[#1E2B28]">
                  Exploration &amp; Brainstorming
                </h3>
              </div>
              <p className="text-sm text-[#5C7A6F] leading-relaxed">
                We sketched dozens of layouts—collapsible silicone, wide rectangles,
                pentagons—and used morph charts + Pugh matrices to weigh capacity,
                stackability, manufacturability, and durability.
              </p>
            </div>

            {/* image */}
            <div className="md:w-[46%]">
              <div className="relative rounded-3xl bg-white shadow-[0_10px_24px_rgba(40,60,90,0.18)] p-3 border border-[#E6ECF3] transition-all duration-150 hover:-translate-y-1 hover:rotate-[0.6deg]">
                <span className="pointer-events-none absolute -top-3 left-8 h-4 w-16 bg-[#FFEBD9]/90 rounded-sm rotate-[-4deg]" />
                <div className="relative w-full h-44 rounded-2xl overflow-hidden">
                  <Image
                    src="/lb-1.png"
                    alt="Early tray layout sketches"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 02 – text-only notebook card with doodles */}
<div className="relative pl-10 md:pl-16">
  <div className="absolute left-0 md:left-4 top-4 flex items-center justify-center">
    <div className="h-9 w-9 rounded-full bg-white shadow-md border border-[#F2D6A7] flex items-center justify-center">
      <span className="text-[11px] font-medium text-[#A87327]">02</span>
    </div>
  </div>

  <div className="relative group rounded-3xl bg-white/96 border border-[#F4E0C3] shadow-[0_12px_26px_rgba(150,96,24,0.12)] px-5 py-4 md:ml-10 transition-all duration-150 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(150,96,24,0.22)] hover:-rotate-[0.3deg]">
    {/* doodles */}
    <span className="pointer-events-none absolute -top-2 left-8 h-4 w-16 bg-[#FFE8C5]/90 rounded-sm rotate-[-5deg]" />
    <span className="pointer-events-none absolute -bottom-3 right-10 text-xs text-[#F0B669] rotate-[-8deg]">
      ✶ ✶
    </span>

    <div className="flex items-center gap-2 mb-2">
      <span className="text-lg" aria-hidden>📦</span>
      <h3 className="text-lg md:text-xl font-semibold text-[#1E2B28]">
        Low-Fidelity Iteration
      </h3>
    </div>
    <p className="text-sm text-[#5C7A6F] leading-relaxed">
      Foam and cardboard trays let us quickly test compartment sizes,
      proportions, and basic stack behavior. We also laser-cut early tray
      silhouettes to feel how they sat in kids&apos; hands and how they
      stacked when a whole class went through the line.
    </p>
  </div>
</div>


        {/* STEP 03 – text + image */}
        <div className="relative pl-10 md:pl-16">
          <div className="absolute left-0 md:left-4 top-4 flex items-center justify-center">
            <div className="h-9 w-9 rounded-full bg-white shadow-md border border-[#C9C3F8] flex items-center justify-center">
              <span className="text-[11px] font-medium text-[#5D52D6]">03</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
            <div className="flex-1 group rounded-3xl bg-white/95 border border-[#DAD6FF] shadow-[0_12px_26px_rgba(80,70,170,0.12)] px-5 py-4 transition-all duration-150 hover:-translate-y-1.5 hover:-rotate-[0.4deg] hover:shadow-[0_18px_40px_rgba(80,70,170,0.22)]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden>🧱</span>
                <h3 className="text-lg md:text-xl font-semibold text-[#1E2B28]">
                  Mid-Fidelity: Interlocking Mechanism
                </h3>
              </div>
              <p className="text-sm text-[#5C7A6F] leading-relaxed">
                We 3D-printed the “slide n&apos; lock” system and iterated divot
                tolerances, nub height, and assembly forces based on student testing.
                Cafeteria pilots and focus groups showed us which joins felt satisfying
                to snap—and which ones jammed when the line was moving fast.
              </p>
            </div>

            <div className="md:w-[46%]">
              <div className="relative rounded-3xl bg-white shadow-[0_10px_24px_rgba(80,70,170,0.2)] p-3 border border-[#C9C3F8] transition-all duration-150 hover:-translate-y-1 hover:rotate-[0.6deg]">
                <span className="pointer-events-none absolute -top-3 left-9 h-4 w-18 bg-[#E7E4FF]/95 rounded-sm rotate-[-5deg]" />
                <div className="relative w-full h-40 rounded-2xl overflow-hidden">
                  <Image
                    src="/lb-2.png"
                    alt="Slide and lock prototypes"
                    fill
                    className="object-cover object-[50%_24%]"
                  />
                </div>
              </div>
              <p className="text-xs text-[#8B8273] leading-relaxed mt-2 pl-1">
                Early prints explored divots, sliders, pinch-locks, and other layout mechanics.
              </p>
            </div>
          </div>
        </div>

        {/* STEP 04 – text-only notebook card with doodles */}
<div className="relative pl-10 md:pl-16">
  <div className="absolute left-0 md:left-4 top-4 flex items-center justify-center">
    <div className="h-9 w-9 rounded-full bg-white shadow-md border border-[#CDE9BB] flex items-center justify-center">
      <span className="text-[11px] font-medium text-[#5A7A39]">04</span>
    </div>
  </div>

  <div className="relative group rounded-3xl bg-white/96 border border-[#D7F0C7] shadow-[0_12px_26px_rgba(70,110,50,0.12)] px-5 py-4 md:ml-10 transition-all duration-150 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(70,110,50,0.22)] hover:rotate-[0.3deg]">
    {/* doodles */}
    <span className="pointer-events-none absolute -top-2 right-10 h-4 w-16 bg-[#E7FFD6]/90 rounded-sm rotate-[6deg]" />
    <span className="pointer-events-none absolute -bottom-3 left-9 text-xs text-[#6E9151] rotate-[10deg]">
      ✎
    </span>

    <div className="flex items-center gap-2 mb-2">
      <span className="text-lg" aria-hidden>🧪</span>
      <h3 className="text-lg md:text-xl font-semibold text-[#1E2B28]">
        Material Research
      </h3>
    </div>
    <p className="text-sm text-[#5C7A6F] leading-relaxed">
      We compared HDPE, polypropylene, and food-safe nylon—testing dishwashing,
      impact resistance, and cost. Quotes from mold shops made it obvious that
      some of our “cute” details had to go if the tray was going to be affordable
      for a public school district.
    </p>
  </div>
</div>


        {/* STEP 05 – text + image */}
        <div className="relative pl-10 md:pl-16">
          <div className="absolute left-0 md:left-4 top-4 flex items-center justify-center">
            <div className="h-9 w-9 rounded-full bg-white shadow-md border border-[#E6BBC5] flex items-center justify-center">
              <span className="text-[11px] font-medium text-[#9A4B5F]">05</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
            <div className="flex-1 group rounded-3xl bg-white/95 border border-[#F0D0DA] shadow-[0_12px_26px_rgba(120,40,70,0.13)] px-5 py-4 transition-all duration-150 hover:-translate-y-1.5 hover:-rotate-[0.4deg] hover:shadow-[0_18px_40px_rgba(120,40,70,0.22)]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden>🔧</span>
                <h3 className="text-lg md:text-xl font-semibold text-[#1E2B28]">
                  High-Fidelity Machining
                </h3>
              </div>
              <p className="text-sm text-[#5C7A6F] leading-relaxed">
                We milled a full tray from HDPE using table saw, bandsaw, and CNC passes.
                This let us validate ergonomics, interlocks, and how the trays actually
                moved through a real kitchen line and dish room.
              </p>
            </div>

            <div className="md:w-[46%]">
              <div className="relative rounded-3xl bg-white shadow-[0_10px_24px_rgba(120,40,70,0.2)] p-3 border border-[#E6BBC5] transition-all duration-150 hover:-translate-y-1 hover:rotate-[0.7deg]">
                <span className="pointer-events-none absolute -top-3 left-8 h-4 w-18 bg-[#FFE6EC]/95 rounded-sm rotate-[-5deg]" />
                <div className="relative w-full h-52 rounded-2xl overflow-hidden">
                  <Image
                    src="/lb-3-cad.png"
                    alt="High-fidelity CAD and machined tray"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 06 – text + image */}
        <div className="relative pl-10 md:pl-16">
          <div className="absolute left-0 md:left-4 top-4 flex items-center justify-center">
            <div className="h-9 w-9 rounded-full bg-white shadow-md border border-[#B7E1F1] flex items-center justify-center">
              <span className="text-[11px] font-medium text-[#287E99]">06</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
            <div className="flex-1 group rounded-3xl bg-white/95 border border-[#D5ECF7] shadow-[0_12px_26px_rgba(40,110,130,0.12)] px-5 py-4 transition-all duration-150 hover:-translate-y-1.5 hover:-rotate-[0.4deg] hover:shadow-[0_18px_40px_rgba(40,110,130,0.22)]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden>💸</span>
                <h3 className="text-lg md:text-xl font-semibold text-[#1E2B28]">
                  Snap n&apos; Lock: Designed to Be Made
                </h3>
              </div>
              <p className="text-sm text-[#5C7A6F] leading-relaxed">
                We simplified the original slide n&apos; lock into a snap n&apos; lock
                system—keeping modularity but removing undercuts so it could run in a
                single-pull mold at a realistic price for DPS.
              </p>
            </div>

            <div className="md:w-[46%]">
              <div className="relative rounded-3xl bg-white shadow-[0_10px_24px_rgba(40,110,130,0.2)] p-3 border border-[#B7E1F1] transition-all duration-150 hover:-translate-y-1 hover:-rotate-[0.7deg]">
                <span className="pointer-events-none absolute -top-3 right-8 h-4 w-20 bg-[#E0F7FF]/95 rounded-sm rotate-[4deg]" />
                <div className="relative w-full h-40 rounded-2xl overflow-visible">
                  <Image
                    src="/lb-4-cad.png"
                    alt="Snap n' lock injection-ready geometry"
                    fill
                    className="object-scale-down"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>



      {/* MILESTONES / IMPACT */}
      <section className="bg-[#F8FAF6] border-t border-[#E0D9CE]/60">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-14 space-y-6">
          <p className="text-[13px] uppercase tracking-[0.3em] text-[#14526b]">
            Milestones
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <MilestoneCard
              label="Prototype to cafeteria"
              body="Multiple tray generations tested with Durham students and staff during real lunch service."
              icon="👦🏽👧🏻"
            />
            <MilestoneCard
              label="Provisional patent"
              body="Co-authored mechanical claims and drawings for the interlocking tray system."
              icon="📄"
            />
            <MilestoneCard
              label="Funding & next steps"
              body="$3K+ in grants secured to explore tooling and early manufacturing conversations."
              icon="💸"
            />
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="bg-[#F5F3EF] border-t border-[#E0D9CE]/60">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 space-y-8">
          <p className="text-[13px] uppercase tracking-[0.3em] text-[#14526b]">
            Reflection
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight text-[#1E2B28] leading-tight max-w-3xl">
            A tiny object that changed how I think about impact and iteration.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/80 border border-[#E6E0D7] p-4 shadow-sm">
              <p className="text-xs tracking-[0.18em] uppercase text-[#8C8173] mb-1">
                Why it mattered
              </p>
              <p className="text-sm text-[#5C7A6F] leading-relaxed font-light">
                The work wasn&apos;t just “better trays”—it was about kids getting fed
                quickly with meals that feel intentional, and about respecting the
                people who run cafeterias every day.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-[#E6E0D7] p-4 shadow-sm">
              <p className="text-xs tracking-[0.18em] uppercase text-[#8C8173] mb-1">
                What I learned
              </p>
              <p className="text-sm text-[#5C7A6F] leading-relaxed font-light">
                I had to let go of “finished” CAD more than once. Constraints from
                machinists, staff, and manufacturers kept sending us back to the
                sketchbook—and the design got better every time.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-[#E6E0D7] p-4 shadow-sm">
              <p className="text-xs tracking-[0.18em] uppercase text-[#8C8173] mb-1">
                Stepping back
              </p>
              <p className="text-sm text-[#5C7A6F] leading-relaxed font-light">
                I eventually left the team as manufacturing work picked up, but
                this project left me with a deeper respect for public-school
                constraints and for designs that survive patents, budgets, and
                dish rooms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- small helper components for timeline / milestones ---------- */

type TimelineStepProps = {
  number: string;
  title: string;
  side: "left" | "right";
  emoji: string;
  body: string;
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
};

function TimelineStep({
  number,
  title,
  side,
  emoji,
  body,
  imageSrc,
  imageAlt,
  caption,
}: TimelineStepProps) {
  const reverse = side === "right";

  return (
    <div
      className={`md:flex md:items-center md:gap-10 relative ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* step badge anchored to the center rail */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-1">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-white border border-[#D4DEEE] shadow-sm flex items-center justify-center text-[#5D6EA7] text-sm font-medium">
            {number}
          </div>
          <span className="text-lg">{emoji}</span>
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="flex items-center gap-3 mb-4 md:hidden">
          <div className="h-9 w-9 rounded-full bg-white border border-[#D4DEEE] shadow-sm flex items-center justify-center text-[#5D6EA7] text-xs font-medium">
            {number}
          </div>
          <span className="text-lg">{emoji}</span>
        </div>
        <h3 className="text-xl font-semibold text-[#1E2B28] mb-2">{title}</h3>
        <p className="text-sm text-[#5C7A6F] leading-relaxed">{body}</p>
      </div>

      {imageSrc && (
        <div className="md:w-1/2 mt-6 md:mt-0">
          <div className="rounded-3xl bg-white shadow-xl p-3 border border-[#E6ECF3]">
            <div className="relative w-full h-40 md:h-48 rounded-2xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          {caption && (
            <p className="text-xs text-[#8B8273] leading-relaxed mt-2 pl-1">
              {caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

type MilestoneCardProps = {
  label: string;
  body: string;
  icon: string;
};

function MilestoneCard({ label, body, icon }: MilestoneCardProps) {
  return (
    <div className="rounded-3xl bg-white/85 border border-[#E3DED4] p-4 shadow-[0_10px_24px_rgba(40,60,80,0.08)] flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <p className="text-xs tracking-[0.18em] uppercase text-[#8C8173]">
          {label}
        </p>
      </div>
      <p className="text-sm text-[#5C7A6F] leading-relaxed font-light">
        {body}
      </p>
    </div>
  );
}
