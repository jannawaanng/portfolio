import Image from "next/image";

export default function LunchPage() {
  return (
    <main className="w-full bg-[#cfc7b2]">
      <section className="relative xs:h-[320px] h-[430px] md:h-[460px] lg:h-[450px] overflow-hidden bg-[#F5F3EF]">
        <Image
          src="/lb-top-head.png"
          alt="lunch-header"
          fill
          priority
          className="object-cover object-center"
        />

        {/* soft bright overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#314a3c]/0 via-transparent to-[#ffffff]/95 pointer-events-none" />
     
 
        {/* text */}
        <div className="absolute inset-0 flex items-end">
          <div className="absolute left-0 right-0 bottom-10 h-64 bg-gradient-to-t from-[#fff9ef]/70 via-[#fff4e3]/95 to-transparent pointer-events-none z-0" />
          <div className="w-full max-w-xl md:max-w-6xl mx-auto px-6 pb-16 md:pb-24 drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)] relative z-10">
            <p className="text-[11.5px] md:text-[13px] px-1.5 tracking-[0.4em] uppercase text-[#4b6460] mb-3 font-semibold">
              AUG 2023–MAY 2024
            </p>
            <h1 className="text-3xl md:text-4xl font-light text-[#9b6872] leading-[0.85] mb-2 tracking-tighter">
              Modular Trays for Durham Public Schools
            </h1>
            <p className="text-sm md:text-lg px-1.5 py-1 text-[#2b4a37] max-w-5xl">
              Reusable mealware with an interlocking mechanism, designed to reduce
              lunch-line congestion and support a wider range of offerings in Durham cafeterias.
            </p>
          </div>
        </div>
      </section>


{/* PROJECT FACTS & SCRAPBOOK GALLERY */}
<section className="-my-10 md:-my-16 relative bg-[#F5F3EF]">
  
  {/* SCRAPBOOK DOODLES - No star, just clean geometric/abstract doodles */}
  <div className="pointer-events-none absolute inset-0">
     <svg className="absolute bottom-20 right-[5%] w-16 h-8 text-[#c2e3ff] opacity-40 -rotate-12" viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 8 Q10 2, 18 8 T34 8"/></svg>
     <svg className="absolute top-6 right-[8%] w-8 h-3 text-[#D4E3F4] opacity-40" viewBox="0 0 32 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 6 Q8 2, 14 6 T26 6"/></svg>
     <svg className="absolute bottom-10 left-[10%] w-6 h-6 text-[#CDE9BB] opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5V19M5 12H19"/></svg>
  </div>

  <div className="max-w-xl md:max-w-6xl mx-auto px-6 md:px-8">
    
    {/* SCRAPBOOK IMAGES - Wide, offset color blocks */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
      
      {/* Photo 1: Expo Showcase */}
      <div className="relative group">
        <div className="absolute inset-0 bg-[#CDE9BB] rounded-[40px] translate-x-4 translate-y-4 opacity-40  transition-transform duration-500"></div>
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-[#ffc9d9]/60 backdrop-blur-sm z-20 -rotate-2 border border-white/20"></div>
        
        <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border-4 border-white shadow-sm bg-white transition-all hover:shadow-md">
          <img 
            src="/lb-expo.jpg" 
            alt="Expo Showcase" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Photo 2: Patent/Prototype */}
      <div className="relative group">
        <div className="absolute inset-0 bg-[#E6BBC5] rounded-[40px] translate-x-4 translate-y-4 opacity-40 transition-transform duration-500"></div>
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-[#8ab597]/70 backdrop-blur-sm z-20 rotate-3 border border-white/20"></div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border-4 border-white shadow-sm bg-white transition-all hover:shadow-md">
          <img 
            src="/lb-patent.jpg" 
            alt="Patent Details" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>

    {/* PROJECT FACTS GRID - Original Writing + Colored Bullet Points */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-12 text-left relative z-10">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-4">Role</p>
        <ul className="text-[13px] text-[#2C3E3A] font-medium space-y-2">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ffc9d9]"></span>CAD Modeling &amp; Prototyping</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ffc9d9]"></span>Materials Research</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ffc9d9]"></span>Product Development</li>
        </ul>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-4">Team</p>
        <ul className="text-[13px] text-[#2C3E3A] font-medium space-y-2">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c2e3ff]"></span>5 Engineers</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c2e3ff]"></span>3 Faculty Advisors</li>
        </ul>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-4">Skills</p>
        <ul className="text-[13px] text-[#2C3E3A] font-medium space-y-2">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c7f3d2]"></span>Cross-Functional Teamwork</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c7f3d2]"></span>Entrepreneurship</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c7f3d2]"></span>Injection Mold DFM</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c7f3d2]"></span>Iterative Design</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c7f3d2]"></span>Rapid Prototyping</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c7f3d2]"></span>User Research</li>
        </ul>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-4">Tools</p>
        <ul className="text-[13px] text-[#2C3E3A] font-medium space-y-2">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f3e3c7]"></span>3D Printer</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f3e3c7]"></span>CNC Router</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f3e3c7]"></span>Fusion 360</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f3e3c7]"></span>Laser Cutter</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f3e3c7]"></span>Onshape</li>
        </ul>
      </div>
    </div>
  </div>
</section>
      {/* CONTEXT + DESIGN PROBLEM */}
      <section className="relative px-6 py-20 bg-gradient-to-b from-[#F5F3EF] to-[#F8FAFD] overflow-hidden">
        {/* doodles */}
        
        <div className="pointer-events-none absolute inset-0">
          <svg className="absolute top-16 left-[4%] w-6 h-5 text-[#E6BBC5] opacity-40" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10 L16 10 M12 5 L16 10 L12 15"/>
          </svg>
          <svg className="absolute top-[35%] right-[3%] w-10 h-4 text-[#C9C3F8] opacity-35" viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 8 Q10 2, 18 8 T34 8"/>
          </svg>
          <svg className="absolute bottom-24 left-[8%] w-4 h-4 text-[#D4E3F4] opacity-40" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M8 2 L8 14 M2 8 L14 8"/>
          </svg>
          <svg className="absolute bottom-16 right-[6%] w-8 h-4 text-[#FFD4B8] opacity-35" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12 L8 4 L14 12 L20 4 L26 12"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto space-y-10">
          <div className="relative inline-block">
            <p className="text-[13px] uppercase tracking-[0.3em] text-[#14526b] font-bold mb-2">Context</p>
            <span className="pointer-events-none absolute -bottom-1 left-0 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#ffc9d9] via-[#c2e3ff] to-[#c7f3d2]" />
          </div>
          
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.7fr)] items-start">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extralight text-[#2C3E3A] leading-tight max-w-xl">
                Durham's lunch trays weren't keeping up.
              </h2>
              <div className="inline-flex flex-wrap items-center gap-6 text-[10px] tracking-[0.18em] uppercase text-[#8C8173] mx-2">
                <span className="rounded-full bg-[#FFE0EE] px-3.5 py-1 shadow-sm">57 schools</span>
                <span className="rounded-full bg-[#E0F3FF] px-3.5 py-1 shadow-sm">51k+ students, K-12</span>
              </div>
              <p>
                Our stakeholder at <span className="font-semibold">Durham Public Schools</span> came to us
                with a clear problem: the existing trays didn&apos;t match what the district was trying to serve.
              </p>
            </div>

            <div className="space-y-5 text-base text-[#5C7A6F] leading-relaxed font-light">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="relative group rounded-2xl bg-white/90 border border-[#E4EBE4] px-4 py-3 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,70,90,0.18)]">
                  <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A8F82] mb-1">flimsy</p>
                  <p className="text-sm">
                    The district's <span className="font-semibold">single-use</span> trays <span className="font-semibold">lacked durability</span> and couldn't support the <span className="font-semibold">expanding, culturally inclusive menu</span>.
                  </p>
                  <svg className="pointer-events-none absolute bottom-2 right-3 w-6 h-3 text-[#CDE9BB] opacity-50" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M2 6 Q6 2, 10 6 T18 6"/>
                  </svg>
                </div>
                <div className="relative group rounded-2xl bg-white/90 border border-[#E4EBE4] px-4 py-3 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,70,90,0.18)]">
                  <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A8F82] mb-1">Inefficient</p>
                  <p className="text-sm">
                    Trays <span className="font-semibold">stuck together</span> and <span className="font-semibold">slowed down lunch lines</span>, creating frustration for staff.
                  </p>
                  <svg className="pointer-events-none absolute bottom-2 right-3 w-3 h-3 text-[#E6BBC5] opacity-50" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M2 2 L10 10 M10 2 L2 10"/>
                  </svg>
                </div>
                <div className="relative group rounded-2xl bg-white/90 border border-[#E4EBE4] px-4 py-3 shadow-sm md:col-span-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,70,90,0.18)]">
                  <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A8F82] mb-1">Unreliable</p>
                  <p className="text-sm">
                    The <span className="font-semibold">thin, shallow compartments</span> didn&apos;t fit the new variety of meals, liquid foods, or portion sizes the district wanted to serve.
                  </p>
                  <svg className="pointer-events-none absolute bottom-2 right-3 w-3 h-3 text-[#D4E3F4] opacity-55" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 1 L6 11 M1 6 L11 6"/>
                  </svg>
                </div>
              </div>
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

        {/* punch holes */}
        <div className="pointer-events-none hidden md:flex flex-col justify-between absolute left-5 top-16 bottom-16">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="w-3 h-3 rounded-full border border-[#C7CFD8] bg-[#F8FAF6]" />
          ))}
        </div>

        {/* doodles */}
        <div className="pointer-events-none absolute inset-0">
          <svg className="absolute top-20 right-[5%] w-10 h-4 text-[#D4E3F4] opacity-50" viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 8 Q10 2, 18 8 T34 8"/>
          </svg>
          <svg className="absolute top-[30%] left-[3%] w-6 h-5 text-[#E6BBC5] opacity-40" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10 L16 10 M12 5 L16 10 L12 15"/>
          </svg>
          <svg className="absolute top-[55%] right-[4%] w-4 h-4 text-[#CDE9BB] opacity-45" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 3 L13 13 M13 3 L3 13"/>
          </svg>
          <svg className="absolute bottom-32 left-[6%] w-5 h-5 text-[#C9C3F8] opacity-40" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M10 2 L10 18 M2 10 L18 10 M4 4 L16 16 M16 4 L4 16"/>
          </svg>
          <svg className="absolute bottom-20 right-[8%] w-8 h-4 text-[#FFD4B8] opacity-40" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12 L8 4 L14 12 L20 4 L26 12"/>
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-8 space-y-12">
          <div className="max-w-3xl space-y-3 relative">
            <div className="absolute -top-6 right-10 text-xs text-[#C9A6FF] rotate-[-6deg]">✶ ✶</div>
            <p className="text-[13px] tracking-[0.32em] uppercase text-[#3C7A8F] font-bold">Design Principles</p>
            <h2 className="text-3xl md:text-4xl font-extralight text-[#1E2B28] leading-tight">
              Striving towards design goals grounded in cafeteria operations and student needs.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
            {/* LEFT: Principles */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-xs tracking-[0.22em] uppercase text-[#8C8173]">What we optimized for</p>
              <div className="space-y-3">
                {[
                  { icon: "🧩", title: "Modularity", body: "Students build custom tray layouts based on desired portion sizes and daily menus. Adapts to diverse K-12 needs without creating logistical complexity.", spineFrom: "#FFE1C5", spineTo: "#FFCBA1", bubble: "#FFF3E2", doodle: "squiggle" },
                  { icon: "🚶‍♀️", title: "Faster, efficient lines", body: "Designed for high-throughput service. Trays stack tightly for storage efficiency and separate quickly to keep lunch lines moving.", spineFrom: "#E1EDFF", spineTo: "#C8D9FF", bubble: "#EAF3FF", doodle: "arrow" },
                  { icon: "✋", title: "User-friendly design", body: "Simple snap-fit design is intuitive and visually appealing with bright colors students love. Ergonomic grips ensure comfortable, spill-free handling.", spineFrom: "#DDF4E4", spineTo: "#BFE6C8", bubble: "#EAF9EE", doodle: "plus" },
                  { icon: "🧼", title: "Built to last", body: "Designed for years of daily cafeteria service—withstanding industrial dishwashers, heavy use, and frequent handling without degrading.", spineFrom: "#E5DEFF", spineTo: "#C9BEF6", bubble: "#F3EEFF", doodle: "x" },
                ].map((p) => (
                  <div key={p.title} className="group relative rounded-[20px] bg-white/95 shadow-[0_10px_24px_rgba(32,60,90,0.08)] px-4 py-3 flex gap-3 items-start border border-[#E1DFD8] transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(32,60,90,0.14)]">
                    <div className="absolute left-0 top-2 bottom-2 w-1 rounded-l-[20px]" style={{ backgroundImage: `linear-gradient(to bottom, ${p.spineFrom}, ${p.spineTo})` }} />
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full text-lg shadow-sm" style={{ backgroundColor: p.bubble }}>
                      <span className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:scale-110">{p.icon}</span>
                    </div>
                    <div className="pl-1">
                      <h3 className="text-sm font-semibold text-[#1E2B28]">{p.title}</h3>
                      <p className="text-xs text-[#5C7A6F] font-light">{p.body}</p>
                    </div>
                    {p.doodle === "squiggle" && <svg className="pointer-events-none absolute bottom-2 right-3 w-6 h-2 opacity-40" style={{ color: p.spineTo }} viewBox="0 0 24 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 4 Q6 1, 10 4 T18 4"/></svg>}
                    {p.doodle === "arrow" && <svg className="pointer-events-none absolute bottom-2 right-3 w-6 h-4 opacity-40" style={{ color: p.spineTo }} viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8 L18 8 M14 4 L18 8 L14 12"/></svg>}
                    {p.doodle === "plus" && <svg className="pointer-events-none absolute bottom-2 right-3 w-3 h-3 opacity-45" style={{ color: p.spineTo }} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 1 L6 11 M1 6 L11 6"/></svg>}
                    {p.doodle === "x" && <svg className="pointer-events-none absolute bottom-2 right-3 w-3 h-3 opacity-40" style={{ color: p.spineTo }} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 2 L10 10 M10 2 L2 10"/></svg>}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Features */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-xs tracking-[0.22em] uppercase text-[#8C8173]">How it shows up in our tray</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="group relative rounded-3xl bg-white/96 border border-[#F0E3D0] shadow-[0_10px_24px_rgba(120,80,40,0.08)] p-3 space-y-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(120,80,40,0.18)]">
                  <span className="pointer-events-none absolute -top-3 left-6 h-4 w-16 bg-[#FFEBD9]/70 rotate-[-4deg] rounded-sm" />
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[#A35B26]">Snap n&apos; Lock system</span>
                  <div className="relative h-20 rounded-2xl overflow-hidden bg-[#FFF3E2]">
                    <Image src="/lb-feature-1.png" alt="Snap lock feature" fill className="object-cover" />
                  </div>
                  <p className="text-xs text-[#5C7A6F] font-light">Snap-fit interlocks let modules click together instantly. Module geometries derived from focus groups and menu audits accommodate everything from pizza slices to soup bowls.</p>
                  <svg className="pointer-events-none absolute bottom-2 right-3 w-5 h-2 text-[#FFCBA1] opacity-50" viewBox="0 0 20 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 4 Q5 1, 8 4 T14 4"/></svg>
                </div>

                <div className="group relative rounded-3xl bg-white/96 border border-[#D9E3F5] shadow-[0_10px_24px_rgba(60,90,150,0.08)] p-3 space-y-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(60,90,150,0.18)]">
                  <span className="pointer-events-none absolute -top-2 left-24 h-4 w-16 bg-[#D9E3F5]/70 rotate-[1deg] rounded-sm" />
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[#265C84]">Easy-grip separation holds</span>
                  <div className="relative h-20 rounded-2xl overflow-hidden bg-[#E7F1FF]">
                    <Image src="/lb-feature-2.png" alt="Easy grip feature" fill className="object-cover" />
                  </div>
                  <p className="text-xs text-[#5C7A6F] font-light">Nested geometry maximizes storage efficiency while maintaining easy separation. Raised finger holds provide leverage to break stacks apart. Tuned tolerances prevent vacuum-locking that slows service.</p>
                  <svg className="pointer-events-none absolute bottom-2 right-3 w-5 h-4 text-[#C8D9FF] opacity-50" viewBox="0 0 20 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8 L14 8 M10 4 L14 8 L10 12"/></svg>
                </div>

                <div className="group relative rounded-3xl bg-white/96 border border-[#D3ECD7] shadow-[0_10px_24px_rgba(70,120,80,0.08)] p-3 space-y-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(70,120,80,0.18)]">
                  <span className="pointer-events-none absolute -top-2 right-40 md:left-30 h-4 w-16 bg-[#D3ECD7]/70 rotate-[-2deg] rounded-sm" />
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[#45714A]">Color-coded, ergonomic modules</span>
                  <div className="relative h-20 rounded-2xl overflow-hidden bg-[#E9F8EA]">
                    <Image src="/lb-feature-3.png" alt="Ergonomic feature" fill className="object-cover " />
                  </div>
                  <p className="text-xs text-[#5C7A6F] font-light">Snap-fit connections are intuitive—each tray has a male and female size, and modules only lock in correct orientations. High-contrast colors help students quickly identify module types. Recessed finger grips and balanced weight distribution ensure comfortable, spill-free handling for K-12 hand sizes.</p>
                  <svg className="pointer-events-none absolute bottom-2 right-3 w-3 h-3 text-[#BFE6C8] opacity-50" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 1 L6 11 M1 6 L11 6"/></svg>
                </div>

                <div className="group relative rounded-3xl bg-white/96 border border-[#E0D6F4] shadow-[0_10px_24px_rgba(90,70,150,0.08)] p-3 space-y-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(90,70,150,0.18)]">
                  <span className="pointer-events-none absolute -top-2 right-8 h-4 w-20 bg-[#E0D6F4]/70 rotate-[4deg] rounded-sm" />
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[#5E4EB0]">Durable, easy-to-clean material & geometry</span>
                  <div className="relative h-20 rounded-2xl overflow-hidden bg-[#F3EEFF]">
                    <Image src="/lb-feature-4.png" alt="Durable feature" fill className="object-cover scale-125" />
                  </div>
                  <p className="text-xs text-[#5C7A6F] font-light">The food-safe nylon trays are designed to withstand industrial dishwasher cycles and impact drops. Generous corner radii and flat bases enable thorough cleaning and prevent food buildup.</p>
                  <svg className="pointer-events-none absolute bottom-2 right-3 w-3 h-3 text-[#C9BEF6] opacity-50" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 2 L10 10 M10 2 L2 10"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS – TIMELINE */}
      <section className="relative bg-gradient-to-b from-[#F5F9FF] to-[#F8FAFD] py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {/* Background grid */}
          <div className="pointer-events-none absolute inset-0">
            <div className="h-full w-full opacity-70 bg-[linear-gradient(to_right,rgba(210,220,230,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(210,220,230,0.35)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* Scattered background doodles */}
          <div className="pointer-events-none absolute inset-0">
            <svg className="absolute top-24 left-[6%] w-12 h-5 text-[#D4E3F4] opacity-60" viewBox="0 0 50 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 9 Q10 2, 18 9 T34 9 T50 9"/></svg>
            <svg className="absolute top-[350px] left-[4%] w-8 h-6 text-[#E6BBC5] opacity-50" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12 L24 12 M18 6 L24 12 L18 18"/></svg>
            <svg className="absolute top-[620px] left-[8%] w-5 h-5 text-[#C9C3F8] opacity-50" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M4 4 L16 16 M16 4 L4 16"/></svg>
            <svg className="absolute top-[920px] left-[5%] w-5 h-5 text-[#FFD4B8] opacity-55" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M10 3 L10 17 M3 10 L17 10"/></svg>
            <svg className="absolute top-[1200px] left-[10%] w-14 h-4 text-[#CDE9BB] opacity-50" viewBox="0 0 56 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 8 Q14 2, 26 8 T50 8"/></svg>
            <svg className="absolute top-[1500px] left-[6%] w-5 h-5 text-[#B7E1F1] opacity-55" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 2 L10 18 M2 10 L18 10 M4 4 L16 16 M16 4 L4 16"/></svg>
            <svg className="absolute top-[1780px] left-[8%] w-8 h-6 text-[#D4E3F4] opacity-50" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12 L24 12 M18 6 L24 12 L18 18"/></svg>
            <svg className="absolute top-[150px] right-[5%] w-10 h-5 text-[#E6BBC5] opacity-50" viewBox="0 0 40 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 14 L10 4 L18 14 L26 4 L34 14"/></svg>
            <svg className="absolute top-[480px] right-[8%] w-8 h-5 text-[#D4E3F4] opacity-45" viewBox="0 0 32 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6 L28 6 M4 12 L20 12"/></svg>
            <svg className="absolute top-[750px] right-[6%] w-4 h-4 text-[#CDE9BB] opacity-55" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M8 2 L8 14 M2 8 L14 8"/></svg>
            <svg className="absolute top-[1050px] right-[10%] w-10 h-4 text-[#C9C3F8] opacity-50" viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 8 Q10 2, 18 8 T34 8"/></svg>
            <svg className="absolute top-[1350px] right-[5%] w-4 h-4 text-[#FFD4B8] opacity-50" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 3 L13 13 M13 3 L3 13"/></svg>
            <svg className="absolute top-[1650px] right-[8%] w-10 h-5 text-[#E6BBC5] opacity-45" viewBox="0 0 40 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 14 L10 4 L18 14 L26 4 L34 14"/></svg>
          </div>

          {/* Header */}
          <div className="relative max-w-4xl mb-12 space-y-3">
            <p className="text-[13px] md:text-[15px] uppercase tracking-[0.3em] text-[#3C7A8F] font-bold">Design Process</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#1E2B28] leading-tight">A year-long journey from sketchbook to manufacturable hardware.</h2>
          </div>

          {/* timeline spine */}
          <div className="relative mt-6">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#CFE5F5] via-[#E6D0E8] to-[#D8DFF0] rounded-full" />

            <div className="space-y-10">
              {/* STEP 01 */}
              <TimelineCard step="01" color="blue" title="Exploration & Brainstorming" emoji="💡" imageSrc="/lb-1.png" imageAlt="Early tray layout sketches" tapeColor="#FFEBD9">
                We sketched dozens of layouts—collapsible silicone, wide rectangles, pentagons—and used morph charts + Pugh matrices to weigh capacity, stackability, manufacturability, and durability.
              </TimelineCard>

              {/* STEP 02 */}
              <TimelineCard step="02" color="pink" title="Low-Fidelity Iteration" emoji="📦" imageSrc="/lb-3-cad.png" imageAlt="High-fidelity CAD and machined tray" tapeColor="#FFE6EC" tapePosition="right">
                Foam and cardboard trays let us quickly test compartment sizes, proportions, and basic stack behavior. I conducted early-stage physical validation using laser-cut profiles, testing both the tactile user interface and storage logistics under operational constraints.
              </TimelineCard>

              {/* STEP 03 */}
              <TimelineCard step="03" color="purple" title='Interlocking Mechanism: The "Slide n&apos; Lock"' emoji="⚙️" imageSrc="/lb-2.png" imageAlt="Slide and lock prototypes" tapeColor="#E7E4FF" caption="Early prints explored divots, sliders, pinch-locks, and other layout mechanics.">
                We 3D-printed the "slide n&apos; lock" system and iterated divot tolerances, nub height, and assembly forces. Cafeteria pilots validated the haptic feedback of the locking mechanism, revealing critical failure points in high-throughput scenarios.
              </TimelineCard>

              {/* STEP 04 */}
              <TimelineCard step="04" color="orange" title="Mid-Fidelity Prototype" emoji="🔧" imageSrc="/lb-hero.png" imageAlt="Mid-fidelity assembled prototype modules" tapeColor="#FFF0E5" tapePosition="right" imageClass="object-cover object-[center_9%]" caption="CAD models of modular tray components.">
                We 3D-printed and assembled full-scale prototypes to test complete meal configurations. Testing revealed students struggled with three-module combinations when loaded, leading us to reinforce connection points and add color-coding for quick pairing. We validated stackability under weight and confirmed the interlocking mechanism survived repeated cycles.
              </TimelineCard>

              {/* STEP 05 */}
              <TimelineCard step="05" color="green" title="Material Research" emoji="🧪" fullWidth>
                We compared HDPE, polypropylene, and food-safe nylon—testing dishwashing, impact resistance, and cost. We refined the design to ensure injection molding feasibility, adjusting draft angles and wall thickness to guarantee the tray could be manufactured without defects.
              </TimelineCard>

              {/* STEP 06 */}
              <TimelineCard step="06" color="rose" title="High-Fidelity Machining" emoji="🔧" fullWidth>
                To machine the complex geometry, we engineered custom 3D-printed jigs to secure the HDPE stock during CNC operations. The resulting prototype enabled us to validate the mechanical interlocks and stress-test the tray in a live kitchen environment.
              </TimelineCard>

              {/* STEP 07 */}
              <TimelineCard step="07" color="teal" title="Snap n' Lock: Designed to Be Made" emoji="🔧" imageSrc="/lb-4-cad.png" imageAlt="Snap n' lock injection-ready geometry" tapeColor="#E0F7FF" tapePosition="center" imageClass="object-scale-down">
                Tooling analysis revealed our initial design was unmanufacturable at scale, forcing a return to first principles. We pivoted from a horizontal slide to a vertical snap-fit, optimizing the geometry for single-pull injection molding. This optimization preserved our system's modularity while ensuring the product remained viable for Durham Public Schools' budgeting.
              </TimelineCard>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="relative bg-[#F8FAF6] border-t border-[#E0D9CE]/60 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <svg className="absolute top-8 left-[5%] w-10 h-4 text-[#D4E3F4] opacity-45" viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 8 Q10 2, 18 8 T34 8"/></svg>
          <svg className="absolute top-12 right-[6%] w-4 h-4 text-[#CDE9BB] opacity-40" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 2 L8 14 M2 8 L14 8"/></svg>
          <svg className="absolute bottom-10 left-[8%] w-6 h-5 text-[#E6BBC5] opacity-35" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10 L16 10 M12 5 L16 10 L12 15"/></svg>
          <svg className="absolute bottom-6 right-[10%] w-4 h-4 text-[#C9C3F8] opacity-40" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 3 L13 13 M13 3 L3 13"/></svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-8 py-14 space-y-6">
          <p className="text-[13px] uppercase tracking-[0.3em] text-[#14526b] font-bold">Milestones</p>
          <div className="grid gap-4 md:grid-cols-3">
            <MilestoneCard label="Prototype to cafeteria" body="Multiple tray generations tested with Durham students and staff during real lunch service." icon="🏫" doodle="squiggle" />
            <MilestoneCard label="Provisional patent" body="Co-authored mechanical claims and drawings for the interlocking tray system." icon="📄" doodle="plus" />
            <MilestoneCard label="Funding & next steps" body="$3K+ in grants secured to explore tooling and early manufacturing conversations." icon="💸" doodle="arrow" />
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="relative bg-[#F5F3EF] border-t border-[#E0D9CE]/60 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <svg className="absolute top-10 right-[5%] w-8 h-4 text-[#FFD4B8] opacity-40" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12 L8 4 L14 12 L20 4 L26 12"/></svg>
          <svg className="absolute top-16 left-[6%] w-5 h-5 text-[#B7E1F1] opacity-45" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 2 L10 18 M2 10 L18 10 M4 4 L16 16 M16 4 L4 16"/></svg>
          <svg className="absolute top-[45%] left-[3%] w-10 h-4 text-[#D4E3F4] opacity-35" viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 8 Q10 2, 18 8 T34 8"/></svg>
          <svg className="absolute bottom-20 right-[8%] w-4 h-4 text-[#CDE9BB] opacity-40" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 2 L8 14 M2 8 L14 8"/></svg>
          <svg className="absolute bottom-28 left-[10%] w-6 h-5 text-[#E6BBC5] opacity-35" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10 L16 10 M12 5 L16 10 L12 15"/></svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 space-y-8">
          <p className="text-[13px] uppercase tracking-[0.3em] text-[#14526b] font-bold">Reflection</p>
          <h2 className="text-3xl md:text-4xl font-extralight text-[#1E2B28] leading-tight max-w-3xl">A product design process that changed how I think about impact and iteration.</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative rounded-3xl bg-white/80 border border-[#E6E0D7] p-4 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,60,80,0.12)]">
              <p className="text-xs tracking-[0.18em] uppercase text-[#8C8173] mb-1">Why it mattered</p>
              <p className="text-sm text-[#5C7A6F] leading-relaxed font-light">Cafeteria staff serve hundreds of students in short 30- to 60-minute windows. Better trays meant faster service, less waste, and thoughtful design that brings students an improved meal experience. Sustainability and lifecycle costs were critical—districts can't afford to replace equipment every few years, and menus constantly evolve.</p>
              <svg className="pointer-events-none absolute bottom-3 right-3 w-6 h-3 text-[#CDE9BB] opacity-45" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 6 Q6 2, 10 6 T18 6"/></svg>
            </div>
            <div className="relative rounded-3xl bg-white/80 border border-[#E6E0D7] p-4 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,60,80,0.12)]">
              <p className="text-xs tracking-[0.18em] uppercase text-[#8C8173] mb-1">What I learned</p>
              <p className="text-sm text-[#5C7A6F] leading-relaxed font-light">I had to let go of "finished" CAD more than once. We had to balance durability, cost, and compatibility with existing school infrastructures—all while keeping the design simple enough to manufacture at scale. Constraints from machinists, staff, and manufacturers kept sending us back to the sketchbook—and the design got better every time.</p>
              <svg className="pointer-events-none absolute bottom-3 right-3 w-3 h-3 text-[#D4E3F4] opacity-50" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 1 L6 11 M1 6 L11 6"/></svg>
            </div>
            <div className="relative rounded-3xl bg-white/80 border border-[#E6E0D7] p-4 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,60,80,0.12)]">
              <p className="text-xs tracking-[0.18em] uppercase text-[#8C8173] mb-1">Transition to manufacturing</p>
              <p className="text-sm text-[#5C7A6F] leading-relaxed font-light">With a manufacture-ready, patented design, we completed the DPS handoff. I concluded my involvement, while some team members formed an LLC to pursue commercializing the "Snap n' Lock" mechanism. 
              This project has set the standard for my future work: to engineer solutions that don't just function in a model, but deliver lasting, resilient value in the real world.</p>
              <svg className="pointer-events-none absolute bottom-3 right-3 w-5 h-4 text-[#E6BBC5] opacity-45" viewBox="0 0 20 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8 L14 8 M10 4 L14 8 L10 12"/></svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Helper Components ---------- */

const colorConfig = {
  blue: { border: "#D4E3F4", text: "#3C7A8F", shadow: "rgba(20,60,110,0.14)", hoverShadow: "rgba(20,60,110,0.22)", cardBorder: "#E4EBF4", doodle1: "#3C7A8F", doodle2: "#B8D4E8" },
  pink: { border: "#E6BBC5", text: "#D43D60", shadow: "rgba(120,40,70,0.12)", hoverShadow: "rgba(120,40,70,0.22)", cardBorder: "#FFE4EC", doodle1: "#D43D60", doodle2: "#E6BBC5" },
  purple: { border: "#C9C3F8", text: "#5D52D6", shadow: "rgba(80,70,170,0.12)", hoverShadow: "rgba(80,70,170,0.22)", cardBorder: "#DAD6FF", doodle1: "#5D52D6", doodle2: "#C9C3F8" },
  orange: { border: "#FFD4B8", text: "#C85A28", shadow: "rgba(180,70,30,0.12)", hoverShadow: "rgba(180,70,30,0.22)", cardBorder: "#FFE4D0", doodle1: "#C85A28", doodle2: "#FFD4B8" },
  green: { border: "#CDE9BB", text: "#5A7A39", shadow: "rgba(70,110,50,0.12)", hoverShadow: "rgba(70,110,50,0.22)", cardBorder: "#D7F0C7", doodle1: "#5A7A39", doodle2: "#CDE9BB" },
  rose: { border: "#E6BBC5", text: "#9A4B5F", shadow: "rgba(120,40,70,0.13)", hoverShadow: "rgba(120,40,70,0.22)", cardBorder: "#F0D0DA", doodle1: "#9A4B5F", doodle2: "#E6BBC5" },
  teal: { border: "#B7E1F1", text: "#287E99", shadow: "rgba(40,110,130,0.12)", hoverShadow: "rgba(40,110,130,0.22)", cardBorder: "#D5ECF7", doodle1: "#287E99", doodle2: "#B7E1F1" },
};

type TimelineCardProps = {
  step: string;
  color: keyof typeof colorConfig;
  title: string;
  emoji: string;
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageClass?: string;
  tapeColor?: string;
  tapePosition?: "left" | "right" | "center";
  caption?: string;
  fullWidth?: boolean;
};

function TimelineCard({ step, color, title, emoji, children, imageSrc, imageAlt, imageClass = "object-contain", tapeColor, tapePosition = "left", caption, fullWidth }: TimelineCardProps) {
  const c = colorConfig[color];
  const tapePos = tapePosition === "right" ? "right-10" : tapePosition === "center" ? "left-1/2 -translate-x-1/2" : "left-8";
  const tapeRot = tapePosition === "right" ? "rotate-[5deg]" : tapePosition === "center" ? "rotate-[2deg]" : "rotate-[-4deg]";

  return (
    <div className="relative pl-10 md:pl-16">
      <div className="absolute left-0 md:left-4 top-4 flex items-center justify-center">
        <div className="h-9 w-9 rounded-full bg-white shadow-md flex items-center justify-center" style={{ borderColor: c.border, borderWidth: 1 }}>
          <span className="text-[11px] font-medium" style={{ color: c.text }}>{step}</span>
        </div>
      </div>

      {fullWidth ? (
        <div className="relative group rounded-3xl bg-white/100 px-5 py-4 transition-all duration-150 hover:-translate-y-1.5 hover:rotate-[0.3deg]" style={{ borderColor: c.cardBorder, borderWidth: 1, boxShadow: `0 12px 26px ${c.shadow}` }}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg" aria-hidden>{emoji}</span>
            <h3 className="text-lg md:text-xl font-semibold text-[#1E2B28]">{title}</h3>
          </div>
          <p className="text-sm text-[#5C7A6F] leading-relaxed max-w-3xl">{children}</p>
          <svg className="pointer-events-none absolute bottom-3 right-4 w-10 h-5 opacity-45" style={{ color: c.doodle1 }} viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10 L30 10 M24 5 L30 10 L24 15"/></svg>
          <svg className="pointer-events-none absolute top-3 right-3 w-4 h-4 opacity-55" style={{ color: c.doodle2 }} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 2 L8 14 M2 8 L14 8"/></svg>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
          <div className="relative flex-1 group rounded-3xl bg-white/95 px-5 py-4 flex flex-col transition-all duration-150 hover:-translate-y-1.5 hover:-rotate-[0.4deg]" style={{ borderColor: c.cardBorder, borderWidth: 1, boxShadow: `0 12px 26px ${c.shadow}` }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg" aria-hidden>{emoji}</span>
              <h3 className="text-lg md:text-xl font-semibold text-[#1E2B28]">{title}</h3>
            </div>
            <p className="text-sm text-[#5C7A6F] leading-relaxed flex-1">{children}</p>
            <svg className="pointer-events-none absolute bottom-3 right-4 w-10 h-5 opacity-45" style={{ color: c.doodle1 }} viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10 L30 10 M24 5 L30 10 L24 15"/></svg>
            <svg className="pointer-events-none absolute top-3 right-3 w-8 h-3 opacity-55" style={{ color: c.doodle2 }} viewBox="0 0 32 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 6 Q8 2, 14 6 T26 6"/></svg>
          </div>

          <div className="md:w-[46%]">
            <div className="relative h-full rounded-3xl bg-white p-3 transition-all duration-150 hover:-translate-y-1 hover:rotate-[0.6deg]" style={{ borderColor: c.border, borderWidth: 1, boxShadow: `0 10px 24px ${c.shadow}` }}>
              {tapeColor && <span className={`pointer-events-none absolute -top-3 ${tapePos} h-5 w-20 rounded-sm shadow-sm ${tapeRot}`} style={{ backgroundColor: `${tapeColor}95` }} />}
              <div className={`relative w-full ${caption ? "h-48" : "h-full min-h-[160px]"} rounded-2xl overflow-hidden`}>
                {imageSrc && <Image src={imageSrc} alt={imageAlt || title} fill className={imageClass} />}
              </div>
            </div>
            {caption && <p className="text-xs text-[#8B8273] leading-relaxed mt-2 pl-1">{caption}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

type MilestoneCardProps = { label: string; body: string; icon: string; doodle?: "squiggle" | "plus" | "arrow" | "x" };

function MilestoneCard({ label, body, icon, doodle }: MilestoneCardProps) {
  return (
    <div className="relative rounded-3xl bg-white/85 border border-[#E3DED4] p-4 shadow-[0_10px_24px_rgba(40,60,80,0.08)] flex flex-col gap-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(40,60,80,0.14)]">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <p className="text-xs tracking-[0.18em] uppercase text-[#8C8173]">{label}</p>
      </div>
      <p className="text-sm text-[#5C7A6F] leading-relaxed font-light">{body}</p>
      {doodle === "squiggle" && <svg className="pointer-events-none absolute bottom-3 right-3 w-6 h-2 text-[#D4E3F4] opacity-50" viewBox="0 0 24 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 4 Q6 1, 10 4 T18 4"/></svg>}
      {doodle === "plus" && <svg className="pointer-events-none absolute bottom-3 right-3 w-3 h-3 text-[#CDE9BB] opacity-50" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 1 L6 11 M1 6 L11 6"/></svg>}
      {doodle === "arrow" && <svg className="pointer-events-none absolute bottom-3 right-3 w-5 h-4 text-[#E6BBC5] opacity-50" viewBox="0 0 20 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8 L14 8 M10 4 L14 8 L10 12"/></svg>}
      {doodle === "x" && <svg className="pointer-events-none absolute bottom-3 right-3 w-3 h-3 text-[#C9C3F8] opacity-45" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 2 L10 10 M10 2 L2 10"/></svg>}
    </div>
  );
}