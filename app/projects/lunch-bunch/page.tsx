import Image from "next/image";

/* ==================================================================
   MODULAR TRAYS — Durham Public Schools
   Engineering-notebook aesthetic KEPT (grid, tape, doodles, color
   timeline). STRUCTURE aligned to the other case studies:
   typographic hero · impact-first spec strip · numbered eyebrows ·
   tightened, recruiting-optimized copy.
   ================================================================== */

/* ---- shared eyebrow: numbered like the other case studies, but
        keeps the notebook gradient underline for personality ---- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mb-6 inline-block">
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#14526b]">
        {children}
      </p>
      <span className="pointer-events-none absolute -bottom-1.5 left-0 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#ffc9d9] via-[#c2e3ff] to-[#c7f3d2]" />
    </div>
  );
}

export default function LunchPage() {
  return (
    <main className="w-full bg-[#F5F3EF]">
      {/* ============================ HERO ============================ */}
      <section className="relative h-[430px] overflow-hidden bg-[#F5F3EF] md:h-[480px]">
        <Image
          src="/lb-top-head.png"
          alt="Modular lunch trays"
          fill
          priority
          className="object-cover object-center"
        />
        {/* tighter overlay so the tray reads clearly + text is legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E2B28]/10 via-[#F5F3EF]/10 to-[#F5F3EF] pointer-events-none" />

        <div className="absolute inset-0 flex items-end">
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 md:pb-20">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#4b6460]">
              Aug 2023 — May 2024
            </p>
            <h1 className="max-w-3xl font-serif text-[40px] leading-[1.02] tracking-[-0.02em] text-[#1E2B28] md:text-[58px]">
              Modular Trays for Durham Public Schools
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#2b4a37] md:text-[18px]">
              A patented, reusable mealware system with an interlocking
              mechanism — designed to clear lunch-line congestion and support a
              wider, more inclusive menu across 57 schools.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SPEC SHEET (impact first) ===================== */}
      <section className="relative bg-[#F5F3EF] px-6 pt-16 pb-4">
        <div className="pointer-events-none absolute inset-0">
          <div className="h-full w-full opacity-60 bg-[linear-gradient(to_right,rgba(210,220,230,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(210,220,230,0.35)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <Eyebrow>Spec Sheet</Eyebrow>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {[
              { k: "Outcome", v: "Provisional Patent", note: "Co-authored mechanical claims", from: "#E5DEFF", to: "#C9BEF6", ink: "#5E4EB0" },
              { k: "Funding", v: "$3K+ in Grants", note: "Toward tooling & manufacturing", from: "#DDF4E4", to: "#BFE6C8", ink: "#45714A" },
              { k: "Scale", v: "57 Schools", note: "51k+ K-12 students district-wide", from: "#E1EDFF", to: "#C8D9FF", ink: "#265C84" },
              { k: "Status", v: "DPS Handoff", note: "Manufacture-ready; LLC spun out", from: "#FFE1C5", to: "#FFCBA1", ink: "#A35B26" },
            ].map((s, i) => (
              <div
                key={s.k}
                className="group relative rounded-[20px] border border-[#E1DFD8] bg-white/95 px-4 py-4 shadow-[0_10px_24px_rgba(32,60,90,0.08)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(32,60,90,0.14)]"
              >
                <div
                  className="absolute left-0 top-3 bottom-3 w-1 rounded-l-[20px]"
                  style={{ backgroundImage: `linear-gradient(to bottom, ${s.from}, ${s.to})` }}
                />
                <span
                  className={`pointer-events-none absolute -top-2 h-4 w-14 rounded-sm ${
                    i % 2 ? "right-6 rotate-[3deg]" : "left-6 -rotate-[3deg]"
                  }`}
                  style={{ backgroundColor: `${s.to}90` }}
                />
                <p className="pl-2 text-[10px] uppercase tracking-[0.22em] text-[#8C8173]">
                  {s.k}
                </p>
                <p className="mt-1 pl-2 font-serif text-[21px] leading-tight" style={{ color: s.ink }}>
                  {s.v}
                </p>
                <p className="mt-1 pl-2 text-[11px] font-light leading-snug text-[#5C7A6F]">
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SCRAPBOOK GALLERY + META ================= */}
      <section className="relative bg-[#F5F3EF] pt-10">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Expo */}
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[40px] bg-[#CDE9BB] opacity-40" />
              <div className="absolute -top-3 left-1/2 z-20 h-8 w-20 -translate-x-1/2 -rotate-2 border border-white/20 bg-[#ffc9d9]/60 backdrop-blur-sm" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border-4 border-white bg-white shadow-sm transition-all hover:shadow-md">
                <img src="/lb-expo.jpg" alt="Team at the engineering expo" className="h-full w-full object-cover" />
              </div>
            </div>
            {/* Patent */}
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[40px] bg-[#E6BBC5] opacity-40" />
              <div className="absolute -top-3 left-1/2 z-20 h-8 w-20 -translate-x-1/2 rotate-3 border border-white/20 bg-[#8ab597]/70 backdrop-blur-sm" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border-4 border-white bg-white shadow-sm transition-all hover:shadow-md">
                <img src="/lb-patent.jpg" alt="Patent-pending prototype" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 pb-4 md:grid-cols-4">
            {[
              { t: "Role", dot: "#ffc9d9", items: ["CAD Modeling & Prototyping", "Materials Research", "Product Development"] },
              { t: "Team", dot: "#c2e3ff", items: ["5 Engineers", "3 Faculty Advisors"] },
              { t: "Skills", dot: "#c7f3d2", items: ["Injection Mold DFM", "Iterative Design", "Rapid Prototyping", "User Research"] },
              { t: "Tools", dot: "#f3e3c7", items: ["Fusion 360", "Onshape", "3D Printer", "CNC Router", "Laser Cutter"] },
            ].map((col) => (
              <div key={col.t}>
                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#8C8173]">
                  {col.t}
                </p>
                <ul className="space-y-2 text-[13px] font-medium text-[#2C3E3A]">
                  {col.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: col.dot }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= 01 · CONTEXT ======================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F3EF] to-[#F8FAFD] px-6 py-20">
        <div className="pointer-events-none absolute inset-0">
          <svg className="absolute top-16 left-[4%] w-6 h-5 text-[#E6BBC5] opacity-40" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10 L16 10 M12 5 L16 10 L12 15" /></svg>
          <svg className="absolute bottom-16 right-[6%] w-8 h-4 text-[#FFD4B8] opacity-35" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12 L8 4 L14 12 L20 4 L26 12" /></svg>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <Eyebrow>01 · Context</Eyebrow>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.7fr)]">
            <div className="space-y-5">
              <h2 className="max-w-xl font-serif text-[34px] leading-[1.08] tracking-[-0.02em] text-[#1E2B28] md:text-[44px]">
                Durham&apos;s lunch trays weren&apos;t keeping up.
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.18em] text-[#8C8173]">
                <span className="rounded-full bg-[#FFE0EE] px-3.5 py-1 shadow-sm">57 schools</span>
                <span className="rounded-full bg-[#E0F3FF] px-3.5 py-1 shadow-sm">51k+ students, K-12</span>
              </div>
              <p className="text-[15px] leading-relaxed text-[#5C7A6F]">
                Our stakeholder at{" "}
                <span className="font-semibold text-[#2C3E3A]">Durham Public Schools</span>{" "}
                had a clear problem: the existing trays couldn&apos;t match what the
                district was trying to serve.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                { tag: "Flimsy", body: "Single-use trays lacked durability and couldn't support the expanding, culturally inclusive menu." },
                { tag: "Inefficient", body: "Trays stuck together and slowed down lunch lines, creating friction for staff." },
                { tag: "Unreliable", body: "Thin, shallow compartments didn't fit the new variety of meals, liquid foods, or portion sizes.", wide: true },
              ].map((c) => (
                <div
                  key={c.tag}
                  className={`group relative rounded-2xl border border-[#E4EBE4] bg-white/90 px-4 py-3 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,70,90,0.18)] ${c.wide ? "md:col-span-2" : ""}`}
                >
                  <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[#7A8F82]">
                    {c.tag}
                  </p>
                  <p className="text-[13.5px] leading-relaxed text-[#5C7A6F]">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 02 · DESIGN PRINCIPLES + FEATURES ================= */}
      <section className="relative overflow-hidden bg-[#F8FAF6] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="h-full w-full opacity-70 bg-[linear-gradient(to_right,rgba(210,220,230,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(210,220,230,0.35)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        {/* punch holes */}
        <div className="pointer-events-none absolute left-5 top-16 bottom-16 hidden flex-col justify-between md:flex">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="h-3 w-3 rounded-full border border-[#C7CFD8] bg-[#F8FAF6]" />
          ))}
        </div>

        <div className="relative mx-auto max-w-6xl space-y-10 px-6 md:px-8">
          <div className="max-w-3xl">
            <Eyebrow>02 · Design Principles</Eyebrow>
            <h2 className="font-serif text-[32px] leading-[1.1] tracking-[-0.02em] text-[#1E2B28] md:text-[42px]">
              Four goals, grounded in cafeteria operations and student needs.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
            {/* Principles */}
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#8C8173]">
                What we optimized for
              </p>
              <div className="space-y-3">
                {[
                  { icon: "🧩", title: "Modularity", body: "Students build custom layouts for daily menus — adapting to diverse K-12 needs without logistical complexity.", from: "#FFE1C5", to: "#FFCBA1", bubble: "#FFF3E2" },
                  { icon: "🚶", title: "Faster lines", body: "Built for high throughput: trays stack tight for storage, then separate fast to keep lunch lines moving.", from: "#E1EDFF", to: "#C8D9FF", bubble: "#EAF3FF" },
                  { icon: "✋", title: "User-friendly", body: "Intuitive snap-fit with bright colors students love; ergonomic grips for comfortable, spill-free handling.", from: "#DDF4E4", to: "#BFE6C8", bubble: "#EAF9EE" },
                  { icon: "🧼", title: "Built to last", body: "Withstands industrial dishwashers, heavy daily use, and frequent handling — for years, not months.", from: "#E5DEFF", to: "#C9BEF6", bubble: "#F3EEFF" },
                ].map((p) => (
                  <div
                    key={p.title}
                    className="group relative flex items-start gap-3 rounded-[20px] border border-[#E1DFD8] bg-white/95 px-4 py-3 shadow-[0_10px_24px_rgba(32,60,90,0.08)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(32,60,90,0.14)]"
                  >
                    <div className="absolute left-0 top-2 bottom-2 w-1 rounded-l-[20px]" style={{ backgroundImage: `linear-gradient(to bottom, ${p.from}, ${p.to})` }} />
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full text-lg shadow-sm" style={{ backgroundColor: p.bubble }}>
                      <span className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:scale-110">{p.icon}</span>
                    </div>
                    <div className="pl-1">
                      <h3 className="text-[14px] font-semibold text-[#1E2B28]">{p.title}</h3>
                      <p className="text-[12.5px] font-light leading-relaxed text-[#5C7A6F]">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#8C8173]">
                How it shows up in the tray
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { tapeFrom: "#FFEBD9", tapeInk: "#A35B26", label: "Snap 'n' Lock system", img: "/lb-feature-1.png", bg: "#FFF3E2", border: "#F0E3D0", body: "Snap-fit interlocks click together instantly. Module geometries — derived from focus groups and menu audits — fit everything from pizza slices to soup bowls." },
                  { tapeFrom: "#D9E3F5", tapeInk: "#265C84", label: "Easy-grip separation", img: "/lb-feature-2.png", bg: "#E7F1FF", border: "#D9E3F5", body: "Nested geometry maximizes storage while raised finger holds give leverage to break stacks apart. Tuned tolerances prevent the vacuum-locking that slows service." },
                  { tapeFrom: "#D3ECD7", tapeInk: "#45714A", label: "Color-coded modules", img: "/lb-feature-3.png", bg: "#E9F8EA", border: "#D3ECD7", body: "Male/female sizing means modules only lock in correct orientations. High-contrast colors help students identify types; recessed grips fit K-12 hand sizes." },
                  { tapeFrom: "#E0D6F4", tapeInk: "#5E4EB0", label: "Durable, cleanable material", img: "/lb-feature-4.png", bg: "#F3EEFF", border: "#E0D6F4", imgClass: "scale-125", body: "Food-safe nylon survives industrial dishwasher cycles and impact drops. Generous corner radii and flat bases prevent food buildup." },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="group relative space-y-2 rounded-3xl border bg-white/96 p-3 shadow-[0_10px_24px_rgba(60,60,60,0.08)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(60,60,60,0.16)]"
                    style={{ borderColor: f.border }}
                  >
                    <span className="pointer-events-none absolute -top-2.5 left-6 h-4 w-16 -rotate-3 rounded-sm" style={{ backgroundColor: `${f.tapeFrom}b0` }} />
                    <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: f.tapeInk }}>
                      {f.label}
                    </span>
                    <div className="relative h-20 overflow-hidden rounded-2xl" style={{ backgroundColor: f.bg }}>
                      <Image src={f.img} alt={f.label} fill className={`object-cover ${f.imgClass ?? ""}`} />
                    </div>
                    <p className="text-[12px] font-light leading-relaxed text-[#5C7A6F]">
                      {f.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 03 · DESIGN PROCESS (timeline) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F9FF] to-[#F8FAFD] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="h-full w-full opacity-70 bg-[linear-gradient(to_right,rgba(210,220,230,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(210,220,230,0.35)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-12 max-w-4xl">
            <Eyebrow>03 · Design Process</Eyebrow>
            <h2 className="font-serif text-[32px] leading-[1.1] tracking-[-0.02em] text-[#1E2B28] md:text-[44px]">
              A year-long journey from sketchbook to manufacturable hardware.
            </h2>
          </div>

          <div className="relative mt-6">
            <div className="absolute left-4 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-[#CFE5F5] via-[#E6D0E8] to-[#D8DFF0] md:left-8" />
            <div className="space-y-10">
              <TimelineCard step="01" color="blue" title="Exploration & Brainstorming" emoji="💡" imageSrc="/lb-1.png" imageAlt="Early tray layout sketches" tapeColor="#FFEBD9">
                Sketched dozens of layouts—collapsible silicone, wide rectangles, pentagons—then used morph charts and Pugh matrices to weigh capacity, stackability, manufacturability, and durability.
              </TimelineCard>

              <TimelineCard step="02" color="pink" title="Low-Fidelity Iteration" emoji="📦" imageSrc="/lb-3-cad.png" imageAlt="Foam and laser-cut test trays" tapeColor="#FFE6EC" tapePosition="right">
                Foam and cardboard trays let us test compartment sizes and stack behavior fast. I ran early physical validation with laser-cut profiles, probing both the tactile UX and storage logistics under real operational constraints.
              </TimelineCard>

              <TimelineCard step="03" color="purple" title={'The "Slide n\' Lock" Mechanism'} emoji="⚙️" imageSrc="/lb-2.png" imageAlt="Slide and lock prototypes" tapeColor="#E7E4FF" caption="Early prints explored divots, sliders, and pinch-locks.">
                3D-printed the slide-n&apos;-lock system and iterated divot tolerances, nub height, and assembly forces. Cafeteria pilots validated the locking haptics, and also  exposed critical failure points under high throughput.
              </TimelineCard>

              <TimelineCard step="04" color="orange" title="Mid-Fidelity Prototype" emoji="🔧" imageSrc="/lb-tray.png" imageAlt="Assembled prototype modules" tapeColor="#FFF0E5" tapePosition="right" imageClass="object-contain object-[center_59%]" caption="Full-scale printed and assembled modules.">
                Assembled full-scale prototypes to test complete meal configs. Students struggled with loaded three-module combos, so we reinforced connection points and added color-coding for quick pairing, then confirmed the interlock survived repeated cycles.
              </TimelineCard>

              <TimelineCard step="05" color="green" title="Material Research" emoji="🧪" fullWidth>
                Compared HDPE, polypropylene, and food-safe nylon across dishwashing, impact resistance, and cost. Then adjusted draft angles and wall thickness to guarantee the tray could be injection-molded without defects.
              </TimelineCard>

              <TimelineCard step="06" color="rose" title="High-Fidelity Machining" emoji="🛠️" fullWidth>
                Engineered custom 3D-printed jigs to secure HDPE stock during CNC operations. The machined prototype let us validate the mechanical interlocks and stress-test the tray in a live kitchen.
              </TimelineCard>

              <TimelineCard step="07" color="teal" title="Snap 'n' Lock: Designed to Be Made" emoji="✅" imageSrc="/lb-4-cad.png" imageAlt="Injection-ready snap-fit geometry" tapeColor="#E0F7FF" tapePosition="center" imageClass="object-scale-down">
                Tooling analysis showed our first design was unmanufacturable at scale — so we returned to first principles. Pivoting from a horizontal slide to a vertical snap-fit optimized the geometry for single-pull injection molding, preserving modularity while keeping it viable for the district&apos;s budget.
              </TimelineCard>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= 04 · REFLECTION ======================= */}
      <section className="relative overflow-hidden border-t border-[#E0D9CE]/60 bg-[#F5F3EF]">
        <div className="pointer-events-none absolute inset-0">
          <svg className="absolute top-16 left-[6%] w-5 h-5 text-[#B7E1F1] opacity-45" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 2 L10 18 M2 10 L18 10 M4 4 L16 16 M16 4 L4 16" /></svg>
          <svg className="absolute bottom-20 right-[8%] w-4 h-4 text-[#CDE9BB] opacity-40" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 2 L8 14 M2 8 L14 8" /></svg>
        </div>

        <div className="relative mx-auto max-w-6xl space-y-8 px-6 py-20 md:px-8">
          <div className="max-w-3xl">
            <Eyebrow>04 · Reflection</Eyebrow>
            <h2 className="font-serif text-[30px] leading-[1.1] tracking-[-0.02em] text-[#1E2B28] md:text-[40px]">
              A process that reshaped how I think about impact and iteration.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "Why it mattered", body: "Staff serve hundreds of students in 30–60 minute windows. Better trays meant faster service, less waste, and a better meal experience with lifecycle costs districts could actually afford." },
              { t: "What I learned", body: "I had to let go of \"finished\" CAD more than once. Constraints from machinists, staff, and manufacturers kept sending us back to the sketchbook, and the design got better every time." },
              { t: "The handoff", body: "With a manufacture-ready, patented design, we completed the DPS handoff. Some teammates formed an LLC to commercialize the mechanism. This set my standard: engineer solutions that deliver real-world value, not just model-world function." },
            ].map((r) => (
              <div
                key={r.t}
                className="relative rounded-3xl border border-[#E6E0D7] bg-white/85 p-5 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,60,80,0.12)]"
              >
                <p className="mb-1.5 text-[11px] uppercase tracking-[0.18em] text-[#8C8173]">
                  {r.t}
                </p>
                <p className="text-[13.5px] font-light leading-relaxed text-[#5C7A6F]">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================ HELPERS ============================ */

const colorConfig = {
  blue: { border: "#D4E3F4", text: "#3C7A8F", shadow: "rgba(20,60,110,0.14)", cardBorder: "#E4EBF4", doodle1: "#3C7A8F", doodle2: "#B8D4E8" },
  pink: { border: "#E6BBC5", text: "#D43D60", shadow: "rgba(120,40,70,0.12)", cardBorder: "#FFE4EC", doodle1: "#D43D60", doodle2: "#E6BBC5" },
  purple: { border: "#C9C3F8", text: "#5D52D6", shadow: "rgba(80,70,170,0.12)", cardBorder: "#DAD6FF", doodle1: "#5D52D6", doodle2: "#C9C3F8" },
  orange: { border: "#FFD4B8", text: "#C85A28", shadow: "rgba(180,70,30,0.12)", cardBorder: "#FFE4D0", doodle1: "#C85A28", doodle2: "#FFD4B8" },
  green: { border: "#CDE9BB", text: "#5A7A39", shadow: "rgba(70,110,50,0.12)", cardBorder: "#D7F0C7", doodle1: "#5A7A39", doodle2: "#CDE9BB" },
  rose: { border: "#E6BBC5", text: "#9A4B5F", shadow: "rgba(120,40,70,0.13)", cardBorder: "#F0D0DA", doodle1: "#9A4B5F", doodle2: "#E6BBC5" },
  teal: { border: "#B7E1F1", text: "#287E99", shadow: "rgba(40,110,130,0.12)", cardBorder: "#D5ECF7", doodle1: "#287E99", doodle2: "#B7E1F1" },
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

function TimelineCard({
  step, color, title, emoji, children, imageSrc, imageAlt,
  imageClass = "object-contain", tapeColor, tapePosition = "left", caption, fullWidth,
}: TimelineCardProps) {
  const c = colorConfig[color];
  const tapePos = tapePosition === "right" ? "right-10" : tapePosition === "center" ? "left-1/2 -translate-x-1/2" : "left-8";
  const tapeRot = tapePosition === "right" ? "rotate-[5deg]" : tapePosition === "center" ? "rotate-[2deg]" : "rotate-[-4deg]";

  return (
    <div className="relative pl-10 md:pl-16">
      <div className="absolute left-0 top-4 flex items-center justify-center md:left-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md" style={{ borderColor: c.border, borderWidth: 1 }}>
          <span className="text-[11px] font-semibold" style={{ color: c.text }}>{step}</span>
        </div>
      </div>

      {fullWidth ? (
        <div className="group relative rounded-3xl bg-white px-5 py-4 transition-all duration-150 hover:-translate-y-1.5 hover:rotate-[0.3deg]" style={{ borderColor: c.cardBorder, borderWidth: 1, boxShadow: `0 12px 26px ${c.shadow}` }}>
          <div className="mb-2 flex items-center gap-2">
            <span className="text-lg" aria-hidden>{emoji}</span>
            <h3 className="text-[18px] font-semibold text-[#1E2B28] md:text-[20px]">{title}</h3>
          </div>
          <p className="max-w-3xl text-[13.5px] leading-relaxed text-[#5C7A6F]">{children}</p>
          <svg className="pointer-events-none absolute bottom-3 right-4 w-10 h-5 opacity-45" style={{ color: c.doodle1 }} viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10 L30 10 M24 5 L30 10 L24 15" /></svg>
        </div>
      ) : (
        <div className="flex flex-col items-stretch gap-6 md:flex-row md:gap-8">
          <div className="group relative flex flex-1 flex-col rounded-3xl bg-white/95 px-5 py-4 transition-all duration-150 hover:-translate-y-1.5 hover:-rotate-[0.4deg]" style={{ borderColor: c.cardBorder, borderWidth: 1, boxShadow: `0 12px 26px ${c.shadow}` }}>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg" aria-hidden>{emoji}</span>
              <h3 className="text-[18px] font-semibold text-[#1E2B28] md:text-[20px]">{title}</h3>
            </div>
            <p className="flex-1 text-[13.5px] leading-relaxed text-[#5C7A6F]">{children}</p>
            <svg className="pointer-events-none absolute bottom-3 right-4 w-10 h-5 opacity-45" style={{ color: c.doodle1 }} viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10 L30 10 M24 5 L30 10 L24 15" /></svg>
          </div>

          <div className="md:w-[46%]">
            <div className="relative h-full rounded-3xl bg-white p-3 transition-all duration-150 hover:-translate-y-1 hover:rotate-[0.6deg]" style={{ borderColor: c.border, borderWidth: 1, boxShadow: `0 10px 24px ${c.shadow}` }}>
              {tapeColor && <span className={`pointer-events-none absolute -top-3 ${tapePos} h-5 w-20 rounded-sm shadow-sm ${tapeRot}`} style={{ backgroundColor: `${tapeColor}95` }} />}
              <div className={`relative w-full overflow-hidden rounded-2xl ${caption ? "h-48" : "h-full min-h-[160px]"}`}>
                {imageSrc && <Image src={imageSrc} alt={imageAlt || title} fill className={imageClass} />}
              </div>
            </div>
            {caption && <p className="mt-2 pl-1 text-[12px] leading-relaxed text-[#8B8273]">{caption}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
