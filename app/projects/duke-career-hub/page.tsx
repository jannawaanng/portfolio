import Image from "next/image";

export default function DukeCareerHubPage() {
  return (
    <main className="w-full bg-[#F5F3EF]">
      {/* HERO - light, airy, Apple-ish */}
      <section className="relative h-[480px] md:h-[500px] lg:h-[540px] overflow-hidden bg-[#F5F3EF]">
        {/* photo */}
        <Image
          src="/mockup-career-hub-expanded.png"
          alt="Duke Career Hub Full"
          fill
          priority
          className="object-cover object-[0%_80%]"
        />

        {/* soft bright overlay (no dark vignette) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-transparent to-[#F5F3EF]/95 pointer-events-none" />
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
          <div className="w-full max-w-7xl mx-auto px-6 pb-14 md:pb-20 drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
            <p className="text-[11.5px] md:text-[15px] px-1.5 tracking-[0.4em] uppercase text-[#162f62]  mb-1">
              JAN–MAY 2025
            </p>
            <h1 className="text-5xl md:text-6xl font-extralight text-[#14526b] leading-[0.85] mb-2 tracking-tighter">
              Duke
              <br />
              Career Hub
            </h1>
            <p className="text-base  md:text-xl px-1.5 py-1 mb-1 text-[#162f62] max-w-xl font-light">
              Creating a Career Hub that works the way students work.
            </p>
          </div>
        </div>
      </section>

      {/* APPLE-GLASS STATS BAR – pastel edge, more whimsy */}
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
              <span className="opacity-70">person team</span>
            </div>

            <div className="flex items-baseline gap-1 text-xs">
              <span className="text-lg font-light">20+</span>
              <span className="opacity-70">stakeholder interviews</span>
            </div>

            <div className="flex items-baseline gap-1 text-xs">
              <span className="text-lg font-light">1</span>
              <span className="opacity-70">High-fidelity prototype</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT FACTS – compact table-style block */}
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
              <li>UX Research Lead</li>
              <li>Product Designer</li>
            </ul>
          </div>

          {/* TEAM */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Team
            </p>
            <ul className="text-sm text-[#2C3E3A] font-medium space-y-1">
              <li>3 Designers</li>
              <li>1 Outreach</li>
              <li>1 Operations</li>
            </ul>
          </div>

          {/* SKILLS */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Skills
            </p>
            <ul className="text-sm text-[#2C3E3A] font-medium space-y-1">
              <li>Cross-Functional Work</li>
              <li>Information Architecture</li>
              <li>Interaction Design</li>
              <li>UX Research</li>
            </ul>
          </div>

          {/* TOOLS */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Tools
            </p>
            <ul className="text-sm text-[#2C3E3A] font-medium space-y-1">
              <li>Figma</li>
              <li>FigJam</li>
              <li>Hotjar</li>
            </ul>
          </div>
        </div>
      </section>
    <div>
    </div>

   {/* CONTEXT + DESIGN PROBLEM + BUNNY ICONS */}
<section>
  <div className="px-6 py-6">
  <h3 className="text-xs tracking-[0.4em] uppercase text-[#14526b] font-bold mb-6">01. Context</h3>
    <div className="mb-20">
      {/* LEFT: problem narrative */}
      <h2 className="text-4xl font-extralight text-[#2C3E3A] mb-4 my-6 leading-tight">
        Students weren&apos;t using the Career Hub.
      </h2>

      <p className="text-base text-[#5C7A6F] leading-relaxed font-light mb-10 max-w-2xl">
        Most defaulted to pre-professional orgs, mentors, and peer circles to plan their
        careers. The Career Hub wasn&apos;t their first stop because the experience didn&apos;t
        articulate its value or onboard students into a clear starting point:
      </p>

      {/* PROBLEM TILES */}
      <div className="grid md:grid-cols-3 gap-10 my-10 text-center">

        {/* 1 — Overwhelming */}
        <div className="flex flex-col items-center max-w-xs mx-auto text-center">
          <div className="h-[130px] w-[130px]">
            <Image
              src="/ch-1.png"
              alt="Overwhelmed"
              width={150}
              height={130}
              className="object-cover h-full w-full object-center"
            />
          </div>
          <p className="text-sm font-medium text-[#2C3E3A] leading-snug mt-2">
            <span className="font-semibold">Dense text</span>
            <span className="font-light"> and</span>
            <span className="font-semibold"> unclear hierarchy</span>
            <span className="font-light"> made the homepage </span>
            <span className="font-semibold">overwhelming to parse</span>.
          </p>
        </div>

        {/* 2 — Buried / no flows */}
        <div className="flex flex-col items-center max-w-xs mx-auto text-center">
          <div className="h-[130px] w-[120px] overflow-hidden">
            <Image
              src="/ch-2.png"
              alt="Buried tasks"
              width={200}
              height={80}
              className="object-cover h-full w-full object-center"
            />
          </div>
          <p className="text-sm font-medium text-[#2C3E3A] leading-snug mt-2">
            <span className="font-light">Key tasks weren&apos;t surfaced, leaving students </span>
            <span className="font-semibold">without clear flows</span>
            <span className="font-light"> to find core actions.</span>
          </p>
        </div>

        {/* 3 — Unclear role */}
        <div className="flex flex-col items-center max-w-xs mx-auto text-center">
          <div className="h-[130px] w-[150px] overflow-hidden">
            <Image
              src="/ch-3.png"
              alt="Unclear role"
              width={100}
              height={80}
              className="object-cover h-full w-full object-center"
            />
          </div>
          <p className="text-sm font-medium text-[#2C3E3A] leading-snug mt-2">
            <span className="font-light">Students couldn&apos;t tell </span>
            <span className="font-semibold">what this was meant to support</span>
            <span className="font-light"> because exploration, advising, and resources weren&apos;t clearly organized.</span>
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

{/* USER RESEARCH & PROCESS */}
<section>
  <div className="max-w-7xl mx-auto px-6 space-y-12">

    {/* TOP: RESEARCH NARRATIVE + VISUALS */}
    <div className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(260px,1fr)] gap-10 items-start">
      {/* LEFT: narrative + methods */}
      <div>
        <p className="text-[15px] uppercase tracking-[0.3em] text-[#14526b] mb-3">
          User Research
        </p>

        <h2 className="text-3xl md:text-4xl font-extralight text-[#2C3E3A] mb-4 my-6 leading-tight">
        When and why do students seek out the Career Hub?
        </h2>

        <p className="text-base text-[#5C7A6F] leading-relaxed font-light mb-4 max-w-xl">
  I looked for pain points and user needs to find our answer. 
</p>


<div className="grid md:grid-cols-2 gap-6">

{/* Scope */}
<div>
  <p className="text-[11px] uppercase tracking-[0.25em] text-[#14526b] mb-2">Scope</p>
  <ul className="space-y-1 text-sm text-[#2C3E3A] font-medium">
    <li>20+ student touchpoints</li>
    <li>8 usability sessions</li>
    <li>3 core personas</li>
  </ul>
</div>

{/* Methods */}
<div>
  <p className="text-[11px] uppercase tracking-[0.25em] text-[#14526b] mb-2">Methods</p>
  <div className="flex flex-wrap gap-3 my-3">
    {[
      "Card Sort","Comparative Analysis",
      "Heatmap Analysis","Journey Mapping","Personas",
      "Stakeholder Interviews",
      "Student Focus Groups",
      "Usability Testing",
      "User Interviews",
    ].map((tag) => (
      <span
        key={tag}
        className="text-[11px] px-2.5 py-1.5 rounded-full bg-[#A8C5BA]/20 text-[#2C3E3A] border border-[#A8C5BA]/30"
      >
        {tag}
      </span>
    ))}
  </div>
  </div>
  </div>

      {/* RIGHT: research visuals / image grid */}
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">

          {/* Heatmap */}
          <div className="bg-white/80 border border-[#D4CFC4]/60 rounded-xl p-2 flex flex-col gap-2">
            <div className="relative w-full aspect-video rounded-md overflow-hidden">
              <Image
                src="/heatmap.png" // replace with Maze heatmap export
                alt="Heatmap on Career Hub homepage"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[10px] text-[#5C7A6F] font-medium uppercase tracking-[0.14em]">
              Maze heatmaps
            </p>
            <p className="text-[11px] text-[#5C7A6F] font-light">
              Clicks clustered on nav and search, not content.
            </p>
          </div>

          {/* Card sort */}
          <div className="bg-white/80 border border-[#D4CFC4]/60 rounded-xl p-2 flex flex-col gap-2">
            <div className="relative w-full aspect-video rounded-md overflow-hidden">
              <Image
                src="/cardsort.png" 
                alt="Card sort groups"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[10px] text-[#5C7A6F] font-medium uppercase tracking-[0.14em]">
              Open card sort
            </p>
            <p className="text-[11px] text-[#5C7A6F] font-light">
              Students grouped resources by &quot;where I am&quot; instead of office structure.
            </p>
          </div>

        </div>
      </div>
    </div>

  {/* PROCESS TIMELINE */}
<div className="bg-[#2C3E3A] text-white rounded-2xl p-7 md:p-9">
  <p className="text-[11px] uppercase tracking-[0.3em] text-[#A8C5BA] mb-8">
    How we worked
  </p>

  <div className="grid md:grid-cols-2 gap-10 text-xs md:text-sm leading-relaxed">

    {/* LEFT COLUMN */}
    <div className="space-y-10">

      {/* DISCOVER */}
      <div>
        <p className="text-[11.5px] uppercase tracking-widest text-[#A8C5BA] mb-3">Discover</p>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="text-xl font-extralight text-[#A8C5BA]">01</span>
            <p>Mapped how students use both formal and informal support across the ecosystem.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-xl font-extralight text-[#A8C5BA]">02</span>
            <p>Used JTDB framework to define the core job students expect the Career Hub to fulfill.</p>
          </div>
        </div>
      </div>

      {/* DIAGNOSE */}
      <div>
        <p className="text-[11.5px] uppercase tracking-widest text-[#A8C5BA] mb-3">Diagnose</p>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="text-xl font-extralight text-[#A8C5BA]">03</span>
            <p>Ran usability tests to capture first-click paths, friction points, and early confusion.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-xl font-extralight text-[#A8C5BA]">04</span>
            <p>Analyzed heatmaps to validate attention patterns and highlight misleading UI cues.</p>
          </div>
        </div>
      </div>

    </div>

    {/* RIGHT COLUMN */}
    <div className="space-y-10">

      {/* ORGANIZE */}
      <div>
        <p className="text-[11.5px] uppercase tracking-widest text-[#A8C5BA] mb-3">Organize</p>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="text-xl font-extralight text-[#A8C5BA]">05</span>
            <p>Used open card sort to rebuild the information architecture.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-xl font-extralight text-[#A8C5BA]">06</span>
            <p>Developed personas representing distinct user needs (first-timer, international students, experienced seekers with niche or industry-specific goals, etc.).</p>
          </div>
        </div>
      </div>

      {/* DEFINE */}
      <div>
        <p className="text-[11.5px] uppercase tracking-widest text-[#A8C5BA] mb-3">Define</p>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="text-xl font-extralight text-[#A8C5BA]">07</span>
            <p>Synthesized insights into design principles focused on clarity + guidance + actionability.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-xl font-extralight text-[#A8C5BA]">08</span>
            <p>Applied those principles to redesign navigation and and make key actions more visible.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</div>
</div>
</section>
    
      <section className="bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* BEFORE/AFTER - Side by side comparison */}
          <div className="mb-20">
            <h2 className="text-4xl font-extralight text-[#2C3E3A] mb-8 leading-tight">
              Before → After
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="bg-[#E8E5DD] rounded-xl p-4 border-2 border-red-300">
                  <p className="text-[9px] uppercase tracking-wider text-red-600 font-semibold mb-2">
                    BEFORE
                  </p>
                  <div className="aspect-video bg-white/50 rounded-lg flex items-center justify-center text-sm text-[#5C7A6F]/50">
                    [Current Homepage Screenshot]
                  </div>
                </div>
                <ul className="text-sm text-[#5C7A6F] space-y-2 font-light">
                  <li className="flex gap-2">
                    <span className="text-red-500">✕</span> Mission-heavy hero copy
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✕</span> Hidden booking flow
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✕</span> No stage guidance
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="bg-[#E8E5DD] rounded-xl p-4 border-2 border-green-300">
                  <p className="text-[9px] uppercase tracking-wider text-green-600 font-semibold mb-2">
                    AFTER
                  </p>
                  <div className="aspect-video bg-white/50 rounded-lg flex items-center justify-center text-sm text-[#5C7A6F]/50">
                    [Redesign Screenshot]
                  </div>
                </div>
                <ul className="text-sm text-[#5C7A6F] space-y-2 font-light">
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span> Action-first CTAs
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span> One-click advisor booking
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span> &quot;Where are you?&quot; tiles
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* HEATMAP INSIGHT - Visual callout */}
          <div className="mb-20 bg-gradient-to-br from-[#8BA89E]/10 to-[#A8C5BA]/10 rounded-2xl p-8 border border-[#D4CFC4]/40">
            <div className="grid md:grid-cols-[1fr_400px] gap-8 items-center">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-[#8BA89E] mb-3">
                  HEATMAP FINDING
                </p>
                <h3 className="text-3xl font-extralight text-[#2C3E3A] mb-4 leading-tight">
                  Students only clicked search &amp; nav—not content
                </h3>
                <p className="text-sm text-[#5C7A6F] font-light leading-relaxed">
                  Maze heatmaps showed 78% of clicks on the header navigation and search bar. The
                  hero content? Nearly zero interaction. Students were looking for shortcuts, not
                  reading mission statements.
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-red-500/20 via-yellow-500/20 to-green-500/20 rounded-xl flex items-center justify-center text-xs text-[#5C7A6F]/50">
                [Heatmap Visualization]
              </div>
            </div>
          </div>

          {/* RESEARCH INSIGHTS - 3 column tight */}
          <div className="mb-20">
            <h2 className="text-4xl font-extralight text-[#2C3E3A] mb-8 leading-tight">
              What 20+ students told us
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Overwhelming first impression",
                  quote: '"I know this is important, but I don\'t know what to click"',
                  points: ["Mission copy, not actions", "Students bounced to org sites"],
                },
                {
                  title: "Hidden core tasks",
                  quote: '"It took me 4 clicks to book an advisor"',
                  points: ["Handshake wasn&apos;t visible", "Most interaction on search only"],
                },
                {
                  title: "Stage matters most",
                  quote: '"I need \'where to start\' not \'our mission\'"',
                  points: ["Card sorts grouped by stage", "Org sites already did this well"],
                },
              ].map((insight, i) => (
                <div
                  key={i}
                  className="bg-white/60 border border-[#D4CFC4]/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A8C5BA] to-[#8BA89E] text-white flex items-center justify-center text-sm font-light mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2C3E3A] mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-sm italic text-[#5C7A6F]/80 mb-4 leading-snug">
                    {insight.quote}
                  </p>
                  <ul className="space-y-2 text-xs text-[#5C7A6F] font-light">
                    {insight.points.map((point, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-[#A8C5BA]">→</span>
                        <span dangerouslySetInnerHTML={{ __html: point }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT WE REDESIGNED - Feature grid */}
          <div className="mb-20">
            <h2 className="text-4xl font-extralight text-[#2C3E3A] mb-8 leading-tight">
              What we redesigned
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  feature: "Hero Section",
                  from: "Mission statement wall of text",
                  to: "3 action CTAs: Book advisor, Explore paths, Find jobs",
                  impact: "Direct path to top tasks in 1 click",
                },
                {
                  feature: "Navigation",
                  from: "Office org chart structure",
                  to: "Career stage grouping: Exploring → Applying → Prepping",
                  impact: "Matches how students think",
                },
                {
                  feature: "Content Layout",
                  from: "One giant resource dump",
                  to: "Three rails: Events, Guides, Communities",
                  impact: "Clear, scannable spine",
                },
                {
                  feature: "Visual Language",
                  from: "Building photos + logos",
                  to: "Student faces + conversational copy",
                  impact: "Borrowed trust from org sites",
                },
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#A8C5BA]/20 to-[#8BA89E]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/80 border border-[#D4CFC4]/30 rounded-2xl p-6">
                    <h3 className="text-base font-semibold text-[#2C3E3A] mb-4">
                      {item.feature}
                    </h3>
                    <div className="space-y-3 text-xs">
                      <div>
                        <p className="text-[#8BA89E] uppercase tracking-wider mb-1">From</p>
                        <p className="text-[#5C7A6F] font-light">{item.from}</p>
                      </div>
                      <div>
                        <p className="text-[#8BA89E] uppercase tracking-wider mb-1">To</p>
                        <p className="text-[#5C7A6F] font-light">{item.to}</p>
                      </div>
                      <div className="pt-2 border-t border-[#D4CFC4]/30">
                        <p className="text-[#2C3E3A] font-medium">{item.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DESIGN PRINCIPLES - Pull quote style */}
          <div className="mb-20 bg-[#2C3E3A] text-white rounded-2xl p-10">
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#A8C5BA] mb-6">
              Design Principles
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-sm">
              {[
                ["Action over explanation", "Show what to do, not why we exist"],
                ["Stage-based guidance", "Meet students where they are"],
                ["Borrowed familiarity", "Use patterns students already trust"],
              ].map(([title, desc], i) => (
                <div key={i}>
                  <p className="text-2xl font-extralight text-[#A8C5BA] mb-2">0{i + 1}</p>
                  <p className="font-semibold mb-2">{title}</p>
                  <p className="text-white/70 text-xs font-light">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PERSONAS - Horizontal cards */}
          <div className="mb-20">
            <h2 className="text-4xl font-extralight text-[#2C3E3A] mb-8 leading-tight">
              Designed for real students
            </h2>
            <div className="space-y-4">
              {[
                [
                  "Sierra",
                  "First-timer",
                  "First-gen, undecided major. Needs one clear starting point, not five tabs.",
                  "#A8C5BA",
                ],
                [
                  "Bo",
                  "International",
                  "Visa limits, family expectations. Needs tailored guidance paths.",
                  "#8BA89E",
                ],
                [
                  "Jake",
                  "Experienced",
                  "Great internships, few offers. Needs positioning strategy, not templates.",
                  "#B8D4C8",
                ],
              ].map(([name, type, desc, color], i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 bg-white/60 border border-[#D4CFC4]/30 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
                  />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-[#2C3E3A]">{name}</h3>
                      <span className="text-[9px] uppercase tracking-wider text-[#8BA89E]">
                        {type}
                      </span>
                    </div>
                    <p className="text-sm text-[#5C7A6F] font-light leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REFLECTION - Editorial close */}
          <div className="border-t border-[#D4CFC4]/40 pt-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extralight text-[#2C3E3A] mb-4 leading-tight">
                What I&apos;d do next
              </h2>
              <p className="text-base text-[#5C7A6F] font-light leading-relaxed mb-4">
                This was a crash course in treating a university service like a product. Given
                another semester, I&apos;d prototype in production, A/B test the hero CTAs, and
                co-design with pre-professional org leaders.
              </p>
              <p className="text-base text-[#5C7A6F] font-light leading-relaxed">
                The goal: make the &quot;official&quot; Career Hub and the places students
                actually go feel like one continuous experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
