import Image from "next/image";

export default function BrainPortalPage() {
  return (
    <main className="w-full bg-[#F5F3EF]">
      {/* HERO */}
      <section className="relative xs:h-[320px] h-[430px] md:h-[560px] lg:h-[550px] overflow-hidden bg-[#F5F3EF]">
        <Image
          src="/brain-hero.png"
          alt="brain-portal-header"
          fill
          priority
          className="object-cover object-[50%_40%]"
        />

        {/* soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-transparent to-[#F5F3EF]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,180,255,0.3)_0,transparent_50%)] pointer-events-none" />

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
              from-[#e8e0ff]/50
              via-[#e0f4ff]/70
              to-transparent 
              pointer-events-none 
              z-0
            "
          />
          <div className="w-full max-w-7xl mx-auto px-6 pb-14 md:pb-20 drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)] relative z-10">
            <p className="text-[11.5px] md:text-[15px] px-1.5 tracking-[0.4em] uppercase text-[#3d2670] mb-1">
              AUG 2024–MAY 2025
            </p>
            <h1 className="text-4xl md:text-5xl font-extralight text-[#1a1035] leading-[0.85] mb-2 tracking-tighter">
              Brain Portal: Metadata Architecture for Neuroscience Displays
            </h1>
            <p className="text-base md:text-xl px-1.5 py-1 mb-1 text-[#3d2670] max-w-5xl font-light">
              Building the data foundation for Duke&apos;s multimedia neuroscience exhibits—designing 
              metadata schemas that organize brain imagery for public-facing displays across campus.
            </p>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative -mt-12 md:-mt-20 px-10 flex justify-center">
        <div className="max-w-xl w-full bg-gradient-to-r from-[#d9c2ff] via-[#c2e3ff] to-[#bff0e8] p-[1px] rounded-[26px] shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
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
              <span className="text-lg font-light">4</span>
              <span className="opacity-70">interactive prototypes</span>
            </div>

            <div className="flex items-baseline gap-1 text-xs">
              <span className="text-lg font-light">3+</span>
              <span className="opacity-70">campus installations</span>
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
              <li>Metadata Architecture</li>
              <li>Database Design</li>
              <li>Content Organization</li>
            </ul>
          </div>

          {/* TEAM */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Team
            </p>
            <ul className="text-sm text-[#2C3E3A] font-medium space-y-1">
              <li>8 Undergraduates</li>
              <li>2 Faculty Leads</li>
              <li>Bass Connections</li>
            </ul>
          </div>

          {/* SKILLS */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Skills
            </p>
            <ul className="text-sm text-[#2C3E3A] font-medium space-y-1">
              <li>Information Architecture</li>
              <li>Metadata Schema Design</li>
              <li>Cross-Functional Teamwork</li>
              <li>Research Synthesis</li>
              <li>Data Classification</li>
            </ul>
          </div>

          {/* TOOLS */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Tools
            </p>
            <ul className="text-sm text-[#2C3E3A] font-medium space-y-1">
              <li>Spreadsheet Systems</li>
              <li>Database Management</li>
              <li>Documentation Tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTEXT + PROBLEM */}
      <section className="relative px-6 py-16 bg-gradient-to-b from-[#F5F3EF] to-[#F8FAFD]">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Eyebrow */}
          <div className="relative inline-block">
            <p className="text-[13px] uppercase tracking-[0.3em] text-[#4a3d7a] mb-2">
              Context
            </p>
            <span className="pointer-events-none absolute -bottom-1 left-0 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#d9c2ff] via-[#c2e3ff] to-[#bff0e8]" />
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.7fr)] items-start">
            {/* LEFT */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extralight text-[#2C3E3A] leading-tight max-w-xl">
                Neuroscience had no public face at Duke.
              </h2>

              <div className="inline-flex flex-wrap items-center gap-6 text-[10px] tracking-[0.18em] uppercase text-[#8C8173] mx-2">
                <span className="rounded-full bg-[#E8E0FF] px-3.5 py-1 shadow-sm">
                  Duke Institute for Brain Sciences
                </span>
                <span className="rounded-full bg-[#E0F3FF] px-3.5 py-1 shadow-sm">
                  Interdisciplinary Team
                </span>
              </div>
              <p className="text-base text-[#5C7A6F] leading-relaxed font-light">
                Despite groundbreaking research happening across Duke, the work of
                neuroscientists remained largely invisible to the broader campus
                community. The{" "}
                <span className="font-semibold">Brain Portal</span> project aimed
                to change that.
              </p>
            </div>

            {/* RIGHT: challenge cards */}
            <div className="space-y-5 text-base text-[#5C7A6F] leading-relaxed font-light">
              <div className="grid gap-4 md:grid-cols-2">
                {/* card 1 */}
                <div className="group rounded-2xl bg-white/90 border border-[#E4EBE4] px-4 py-3 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,70,90,0.18)]">
                  <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A8F82] mb-1">
                    Scattered
                  </p>
                  <p className="text-sm">
                    Brain images, scans, and research outputs lived in{" "}
                    <span className="font-semibold">isolated silos</span>—no
                    central system to organize or surface them.
                  </p>
                </div>

                {/* card 2 */}
                <div className="group rounded-2xl bg-white/90 border border-[#E4EBE4] px-4 py-3 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,70,90,0.18)]">
                  <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A8F82] mb-1">
                    Inaccessible
                  </p>
                  <p className="text-sm">
                    Beautiful imagery existed, but without{" "}
                    <span className="font-semibold">proper metadata</span>, it
                    couldn&apos;t be searched, filtered, or displayed contextually.
                  </p>
                </div>

                {/* card 3 */}
                <div className="group rounded-2xl bg-white/90 border border-[#E4EBE4] px-4 py-3 shadow-sm md:col-span-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,70,90,0.18)]">
                  <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A8F82] mb-1">
                    Multi-platform
                  </p>
                  <p className="text-sm">
                    Four different display platforms—from{" "}
                    <span className="font-semibold">18-screen walls</span> to{" "}
                    <span className="font-semibold">AR experiences</span>—each
                    needed content organized in specific ways.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY CONTRIBUTION */}
      <section className="relative bg-gradient-to-b from-[#F5F9FF] to-[#F8FAFD] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-12 space-y-3">
            <p className="text-[13px] md:text-[15px] uppercase tracking-[0.3em] text-[#5D52D6]">
              My Contribution
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#1E2B28] leading-tight">
              Designing the information backbone.
            </h2>
            <p className="text-base text-[#5C7A6F] font-light leading-relaxed">
              Before displays could showcase brain science, someone had to figure out
              how to organize hundreds of images, scans, and research outputs into a
              searchable, displayable system.
            </p>
          </div>

          {/* Process spine */}
          <div className="relative mt-6">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D5CFFF] to-[#D8DFF0] rounded-full" />

            <div className="space-y-12">
              {/* STEP 01 */}
              <div className="relative pl-10 md:pl-16">
                <div className="absolute left-0 md:left-4 top-4 flex items-center justify-center">
                  <div className="h-9 w-9 rounded-full bg-white shadow-md border border-[#D4E3F4] flex items-center justify-center">
                    <span className="text-[11px] font-medium text-[#5D52D6]">01</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
                  <div className="flex-1 group rounded-3xl bg-white/95 border border-[#E4EBF4] shadow-[0_12px_26px_rgba(20,60,110,0.14)] px-5 py-4 transition-all duration-150 hover:-translate-y-1.5 hover:-rotate-[0.4deg] hover:shadow-[0_18px_40px_rgba(20,60,110,0.22)]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg" aria-hidden>🔍</span>
                      <h3 className="text-lg md:text-xl font-semibold text-[#1E2B28]">
                        Content Audit &amp; Research
                      </h3>
                    </div>
                    <p className="text-sm text-[#5C7A6F] leading-relaxed">
                      Surveyed existing brain imagery from DIBS researchers—MRI scans,
                      light sheet microscopy, student artwork, journal covers—to
                      understand the full scope of content types we&apos;d need to support.
                    </p>
                  </div>

                  <div className="md:w-[46%]">
                    <div className="relative rounded-3xl bg-white shadow-[0_10px_24px_rgba(40,60,90,0.18)] p-3 border border-[#E6ECF3] transition-all duration-150 hover:-translate-y-1 hover:rotate-[0.6deg]">
                      <span className="pointer-events-none absolute -top-3 left-8 h-4 w-16 bg-[#E8E0FF]/90 rounded-sm rotate-[-4deg]" />
                      <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-[#F3F0FF] flex items-center justify-center">
                        <span className="text-4xl">🧠</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 02 */}
              <div className="relative pl-10 md:pl-16">
                <div className="absolute left-0 md:left-4 top-4 flex items-center justify-center">
                  <div className="h-9 w-9 rounded-full bg-white shadow-md border border-[#F2D6A7] flex items-center justify-center">
                    <span className="text-[11px] font-medium text-[#A87327]">02</span>
                  </div>
                </div>

                <div className="relative group rounded-3xl bg-white/96 border border-[#F4E0C3] shadow-[0_12px_26px_rgba(150,96,24,0.12)] px-5 py-4 md:ml-10 transition-all duration-150 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(150,96,24,0.22)] hover:-rotate-[0.3deg]">
                  <span className="pointer-events-none absolute -top-2 left-8 h-4 w-16 bg-[#FFE8C5]/90 rounded-sm rotate-[-5deg]" />
                  <span className="pointer-events-none absolute -bottom-3 right-10 text-xs text-[#F0B669] rotate-[-8deg]">
                    ✶ ✶
                  </span>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden>📋</span>
                    <h3 className="text-lg md:text-xl font-semibold text-[#1E2B28]">
                      Schema Design
                    </h3>
                  </div>
                  <p className="text-sm text-[#5C7A6F] leading-relaxed">
                    Developed a comprehensive metadata schema with fields for content
                    type, author, affiliation, technical specs (format, resolution,
                    file size), research context (keywords, DOI), and display
                    parameters. Iterated on categories like &quot;brain scan&quot; vs
                    &quot;axon image&quot; to find the right level of granularity.
                  </p>
                </div>
              </div>

              {/* STEP 03 */}
              <div className="relative pl-10 md:pl-16">
                <div className="absolute left-0 md:left-4 top-4 flex items-center justify-center">
                  <div className="h-9 w-9 rounded-full bg-white shadow-md border border-[#C9C3F8] flex items-center justify-center">
                    <span className="text-[11px] font-medium text-[#5D52D6]">03</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
                  <div className="flex-1 group rounded-3xl bg-white/95 border border-[#DAD6FF] shadow-[0_12px_26px_rgba(80,70,170,0.12)] px-5 py-4 transition-all duration-150 hover:-translate-y-1.5 hover:-rotate-[0.4deg] hover:shadow-[0_18px_40px_rgba(80,70,170,0.22)]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg" aria-hidden>🗂️</span>
                      <h3 className="text-lg md:text-xl font-semibold text-[#1E2B28]">
                        Categorization Framework
                      </h3>
                    </div>
                    <p className="text-sm text-[#5C7A6F] leading-relaxed">
                      Wrestled with classification challenges—how do you categorize a
                      &quot;Human Cervical Cord green&quot; image? Created flexible type
                      hierarchies that could accommodate student artwork, journal
                      publications, raw scans, and processed visualizations.
                    </p>
                  </div>

                  <div className="md:w-[46%]">
                    <div className="relative rounded-3xl bg-white shadow-[0_10px_24px_rgba(80,70,170,0.2)] p-3 border border-[#C9C3F8] transition-all duration-150 hover:-translate-y-1 hover:rotate-[0.6deg]">
                      <span className="pointer-events-none absolute -top-3 left-9 h-4 w-18 bg-[#E7E4FF]/95 rounded-sm rotate-[-5deg]" />
                      <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-[#F5F3FF] p-4">
                        <div className="text-[10px] text-[#5C7A6F] font-mono space-y-1">
                          <p>Type: Journal | Brain scan | Student work</p>
                          <p>Format: PDF | TIF | JPEG</p>
                          <p>Resolution: [varies]</p>
                          <p>DOI: [if applicable]</p>
                          <p>Keywords: [research tags]</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-[#8B8273] leading-relaxed mt-2 pl-1">
                      Sample metadata fields from the schema.
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 04 */}
              <div className="relative pl-10 md:pl-16">
                <div className="absolute left-0 md:left-4 top-4 flex items-center justify-center">
                  <div className="h-9 w-9 rounded-full bg-white shadow-md border border-[#CDE9BB] flex items-center justify-center">
                    <span className="text-[11px] font-medium text-[#5A7A39]">04</span>
                  </div>
                </div>

                <div className="relative group rounded-3xl bg-white/96 border border-[#D7F0C7] shadow-[0_12px_26px_rgba(70,110,50,0.12)] px-5 py-4 md:ml-10 transition-all duration-150 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(70,110,50,0.22)] hover:rotate-[0.3deg]">
                  <span className="pointer-events-none absolute -top-2 right-10 h-4 w-16 bg-[#E7FFD6]/90 rounded-sm rotate-[6deg]" />
                  <span className="pointer-events-none absolute -bottom-3 left-9 text-xs text-[#6E9151] rotate-[10deg]">
                    ✎
                  </span>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" aria-hidden>🔗</span>
                    <h3 className="text-lg md:text-xl font-semibold text-[#1E2B28]">
                      Cross-Platform Integration
                    </h3>
                  </div>
                  <p className="text-sm text-[#5C7A6F] leading-relaxed">
                    Coordinated with all four subteams to ensure the metadata
                    structure could serve the 18-screen wall, AR experiences,
                    touch-table games, and stereoscopic viewer—each with different
                    display requirements and content needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FOUR DELIVERABLES */}
      <section className="relative bg-[#F8FAF6] py-20 overflow-hidden">
        {/* notebook grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="h-full w-full opacity-70 bg-[linear-gradient(to_right,rgba(210,220,230,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(210,220,230,0.35)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* punch holes */}
        <div className="pointer-events-none hidden md:flex flex-col justify-between absolute left-5 top-16 bottom-16">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full border border-[#C7CFD8] bg-[#F8FAF6]"
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-8 space-y-12">
          {/* header */}
          <div className="max-w-3xl space-y-3 relative">
            <div className="absolute -top-6 right-10 text-xs text-[#C9A6FF] rotate-[-6deg]">
              ✶ ✶
            </div>
            <p className="text-[13px] tracking-[0.32em] uppercase text-[#5D52D6]">
              Team Deliverables
            </p>
            <h2 className="text-3xl md:text-4xl font-extralight text-[#1E2B28] leading-tight">
              Four portals, one unified data layer.
            </h2>
            <p className="text-sm md:text-base text-[#5C7A6F] font-light leading-relaxed">
              My metadata work supported all four subteams&apos; final prototypes,
              each designed to engage different audiences across campus.
            </p>
          </div>

          {/* deliverable cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* The Link Display */}
            <div className="group relative rounded-3xl bg-white/96 border border-[#D9E3F5] shadow-[0_10px_24px_rgba(60,90,150,0.08)] p-4 space-y-3 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(60,90,150,0.18)]">
              <span className="pointer-events-none absolute -top-3 left-6 h-4 w-16 bg-[#E4F0FF]/95 rounded-sm rotate-[-4deg]" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">🖥️</span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#265C84]">
                  The Link Wall
                </span>
              </div>
              <p className="text-sm text-[#5C7A6F] font-light">
                An 18-screen display in Perkins Library showcasing the latest
                impactful research discoveries from DIBS investigators.
              </p>
              <p className="text-xs text-[#8C8173]">
                📍 Perkins Library basement
              </p>
            </div>

            {/* AR Experience */}
            <div className="group relative rounded-3xl bg-white/96 border border-[#E0D6F4] shadow-[0_10px_24px_rgba(90,70,150,0.08)] p-4 space-y-3 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(90,70,150,0.18)]">
              <span className="pointer-events-none absolute -top-3 right-6 h-4 w-18 bg-[#F1ECFF]/95 rounded-sm rotate-[5deg]" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#5E4EB0]">
                  AR Brain Experiences
                </span>
              </div>
              <p className="text-sm text-[#5C7A6F] font-light">
                Mobile augmented reality that lets anyone on campus scan a QR code
                and explore 3D brain models in their daily environment.
              </p>
              <p className="text-xs text-[#8C8173]">
                📍 LSRC plaza + expanding
              </p>
            </div>

            {/* Touch Table */}
            <div className="group relative rounded-3xl bg-white/96 border border-[#D3ECD7] shadow-[0_10px_24px_rgba(70,120,80,0.08)] p-4 space-y-3 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(70,120,80,0.18)]">
              <span className="pointer-events-none absolute -top-3 left-7 h-4 w-18 bg-[#E5F8E7]/95 rounded-sm rotate-[-3deg]" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎮</span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#45714A]">
                  Gamified Touch Table
                </span>
              </div>
              <p className="text-sm text-[#5C7A6F] font-light">
                Interactive learning experiences for exploring human brain anatomy—
                designed for neuroscience courses and self-guided study.
              </p>
              <p className="text-xs text-[#8C8173]">
                📍 Classroom deployment Summer 2025
              </p>
            </div>

            {/* Stereoscopic Viewer */}
            <div className="group relative rounded-3xl bg-white/96 border border-[#F0E3D0] shadow-[0_10px_24px_rgba(120,80,40,0.08)] p-4 space-y-3 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(120,80,40,0.18)]">
              <span className="pointer-events-none absolute -top-3 right-8 h-4 w-20 bg-[#FFEBD9]/90 rounded-sm rotate-[4deg]" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">👁️</span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#A35B26]">
                  3D Stereoscopic Viewer
                </span>
              </div>
              <p className="text-sm text-[#5C7A6F] font-light">
                A glasses-free 3D brain model for immersive viewing—no wearables
                required.
              </p>
              <p className="text-xs text-[#8C8173]">
                📍 Educational settings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="bg-[#F8FAF6] border-t border-[#E0D9CE]/60">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-14 space-y-6">
          <p className="text-[13px] uppercase tracking-[0.3em] text-[#4a3d7a]">
            Milestones
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <MilestoneCard
              label="Showcase presentation"
              body="Team presented all four working prototypes at the Fortin Foundation Bass Connections Showcase in April 2025."
              icon="🎤"
            />
            <MilestoneCard
              label="Campus installations"
              body="Displays now live in The Link and LSRC, with future installations planned across Duke."
              icon="🏛️"
            />
            <MilestoneCard
              label="Course integration"
              body="Educational tools being integrated into neuroscience courses starting Summer 2025."
              icon="📚"
            />
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="bg-[#F5F3EF] border-t border-[#E0D9CE]/60">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 space-y-8">
          <p className="text-[13px] uppercase tracking-[0.3em] text-[#4a3d7a]">
            Reflection
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight text-[#1E2B28] leading-tight max-w-3xl">
            The invisible work that makes visible work possible.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/80 border border-[#E6E0D7] p-4 shadow-sm">
              <p className="text-xs tracking-[0.18em] uppercase text-[#8C8173] mb-1">
                Why it mattered
              </p>
              <p className="text-sm text-[#5C7A6F] leading-relaxed font-light">
                Beautiful brain imagery means nothing if you can&apos;t find it,
                categorize it, or serve it to the right display. Metadata
                architecture is the unsexy foundation that makes public-facing
                science possible.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-[#E6E0D7] p-4 shadow-sm">
              <p className="text-xs tracking-[0.18em] uppercase text-[#8C8173] mb-1">
                What I learned
              </p>
              <p className="text-sm text-[#5C7A6F] leading-relaxed font-light">
                Classification is harder than it looks. &quot;Brain scan&quot; can mean a
                dozen different things—MRI, fMRI, light sheet microscopy, CT.
                Good metadata requires understanding both the content AND how
                people will search for it.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-[#E6E0D7] p-4 shadow-sm">
              <p className="text-xs tracking-[0.18em] uppercase text-[#8C8173] mb-1">
                Looking forward
              </p>
              <p className="text-sm text-[#5C7A6F] leading-relaxed font-light">
                This project deepened my interest in information architecture and
                how good data organization enables creativity. The displays are
                just the beginning—the schema can scale as Duke&apos;s brain science
                portfolio grows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- helper components ---------- */

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