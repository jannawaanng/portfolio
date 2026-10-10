import Image from "next/image";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mb-6 inline-block">
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#14526b]">{children}</p>
      <span className="pointer-events-none absolute -bottom-1.5 left-0 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#ffc9d9] via-[#c2e3ff] to-[#c7f3d2]" />
    </div>
  );
}

const sectionShell = "relative overflow-hidden border-t border-[#E0D9CE]/60";
const paperGrid = "pointer-events-none absolute inset-0 opacity-45 bg-[linear-gradient(to_right,rgba(210,220,230,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(210,220,230,0.3)_1px,transparent_1px)] bg-[size:40px_40px]";
const quietCard = "rounded-[26px] border border-[#E6E0D7] bg-white/80 shadow-sm";

const specItems = [
  { k: "Patent", v: "Provisional Patent", note: "Co-authored mechanical claims", ink: "#5E4EB0", bg: "#F3EEFF", border: "#E0D6F4" },
  { k: "Funding", v: "$3K+ in Grants", note: "Toward tooling and manufacturing", ink: "#45714A", bg: "#EAF7ED", border: "#D3ECD7" },
  { k: "Validation", v: "Signed LOI", note: "District intent to purchase", ink: "#A35B26", bg: "#FFF3E2", border: "#F0E3D0" },
  { k: "Status", v: "DPS Handoff", note: "Manufacture-ready; LLC spun out", ink: "#265C84", bg: "#EAF3FF", border: "#D9E3F5" },
];

const principles = [
  { icon: "🧩", title: "Modularity", body: "Students build layouts around changing menus without adding operational complexity.", bg: "#FFF3E2", line: "#FFCBA1" },
  { icon: "🚶", title: "Faster lines", body: "Trays stack tightly for storage, then separate quickly to keep service moving.", bg: "#EAF3FF", line: "#C8D9FF" },
  { icon: "✋", title: "User-friendly", body: "An intuitive snap-fit, visible pairing cues, and grips sized for K–12 hands.", bg: "#EAF9EE", line: "#BFE6C8" },
  { icon: "🧼", title: "Built to last", body: "Designed for industrial dishwashing, repeated impact, and years of daily handling.", bg: "#F3EEFF", line: "#C9BEF6" },
];

const features = [
  { label: "Snap 'n' Lock system", img: "/lb-feature-1.png", bg: "#FFF3E2", border: "#F0E3D0", ink: "#A35B26", body: "Snap-fit interlocks connect instantly. Module geometries, informed by focus groups and menu audits, fit meals from pizza slices to soup bowls." },
  { label: "Easy-grip separation", img: "/lb-feature-2.png", bg: "#EAF3FF", border: "#D9E3F5", ink: "#265C84", body: "Nested geometry saves storage space while raised finger holds provide leverage to separate stacks without vacuum locking." },
  { label: "Color-coded modules", img: "/lb-feature-3.png", bg: "#EAF9EE", border: "#D3ECD7", ink: "#45714A", body: "Male and female sizing guides correct assembly. High-contrast colors help students identify compatible modules quickly." },
  { label: "Durable, cleanable material", img: "/lb-feature-4.png", bg: "#F3EEFF", border: "#E0D6F4", ink: "#5E4EB0", body: "Food-safe nylon withstands industrial wash cycles and drops. Rounded corners and flat bases reduce food buildup.", imageClass: "scale-125" },
];

export default function LunchPage() {
  return (
    <main className="w-full bg-[#F5F3EF] text-[#1E2B28]">
      <section className="relative overflow-hidden bg-[#F5F3EF] px-6 pb-12 pt-28 md:px-8 md:pb-16 md:pt-32">
        <div className={paperGrid} />
        <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#F8DDE7]/45 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full bg-[#DDF1F7]/55 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[36px] border border-[#DDD8CF] bg-[#F8F5EE]/95 shadow-[0_24px_70px_rgba(45,64,58,0.12)]">
            <div className="grid min-h-[570px] items-center lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative z-20 px-7 py-12 sm:px-10 md:px-14 md:py-16 lg:pr-4">
                <div className="mb-7 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#51716A]">
                  <span className="rounded-full border border-[#D7E6E1] bg-[#EAF4F1] px-3.5 py-1.5">Product Design</span>
                  <span>Aug 2023 — May 2024</span>
                </div>

                <h1 className="max-w-[680px] font-serif text-[43px] leading-[0.98] tracking-[-0.035em] text-[#1E2B28] sm:text-[52px] md:text-[62px] lg:text-[66px]">
                  Modular Trays for Durham Public Schools
                </h1>

                <p className="mt-6 max-w-[610px] text-[15px] leading-relaxed text-[#4F6D65] md:text-[17px]">
                  Designed, prototyped, and patented a reusable modular mealware system for Durham Public Schools, built to improve lunch-line flow and support a wider range of meals.
                </p>

               
              </div>

              <div className="relative min-h-[390px] overflow-hidden border-t border-[#E4DED4] bg-[#EEE8DC] lg:min-h-full lg:border-l lg:border-t-0">
                <Image
                  src="/lb-hero-header.png"
                  alt="Modular lunch tray system"
                  fill
                  priority
                  className="object-cover object-[65%_center]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F8F5EE]/30 via-transparent to-transparent lg:from-[#F8F5EE]/15" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-16 pt-10 md:px-8">
        <div className={paperGrid} />
        <div className="relative mx-auto max-w-6xl">
          <Eyebrow>At a glance</Eyebrow>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {specItems.map((s, i) => (
              <div key={s.k} className="relative overflow-hidden rounded-[22px] border px-4 py-4 shadow-sm" style={{ backgroundColor: s.bg, borderColor: s.border }}>
                <span className={`pointer-events-none absolute -top-2 h-4 w-14 rounded-sm opacity-60 ${i % 2 ? "right-6 rotate-[3deg]" : "left-6 -rotate-[3deg]"}`} style={{ backgroundColor: s.border }} />
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#8C8173]">{s.k}</p>
                <p className="mt-1 font-serif text-[20px] leading-tight" style={{ color: s.ink }}>{s.v}</p>
                <p className="mt-1 text-[11px] leading-snug text-[#5C7A6F]">{s.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <ScrapbookImage src="/lb-expo.jpg" alt="Team at the engineering expo" shadow="#CDE9BB" tape="#ffc9d9" />
            <ScrapbookImage src="/lb-patent.jpg" alt="Patent-pending prototype" shadow="#E6BBC5" tape="#8ab597" rotate />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 rounded-[26px] border border-[#E6E0D7] bg-white/70 p-6 md:grid-cols-4">
            <Meta title="Role" color="#ffc9d9" items={["CAD Modeling & Prototyping", "Materials Research", "Product Development"]} />
            <Meta title="Team" color="#c2e3ff" items={["5 Engineers", "3 Faculty Advisors"]} />
            <Meta title="Skills" color="#c7f3d2" items={["Injection Mold DFM", "Iterative Design", "Rapid Prototyping", "User Research"]} />
            <Meta title="Tools" color="#f3e3c7" items={["Fusion 360", "Onshape", "3D Printer", "CNC Router", "Laser Cutter"]} />
          </div>
        </div>
      </section>

      <section className={`${sectionShell} bg-[#F8FAFD] px-6 py-20 md:px-8`}>
        <div className="pointer-events-none absolute -right-24 top-8 h-64 w-64 rounded-full bg-[#DDF1F7]/55 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <Eyebrow>01 · Context</Eyebrow>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_1.35fr]">
            <div>
              <h2 className="max-w-xl font-serif text-[34px] leading-[1.08] tracking-[-0.02em] md:text-[44px]">Durham&apos;s lunch trays weren&apos;t keeping up.</h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#5C7A6F]">Durham Public Schools needed mealware that could support a broader menu while reducing the daily friction created by flimsy trays and stuck stacks.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-[#667A73]">
                <span className="rounded-full border border-[#F0D4DE] bg-[#FFE8F0] px-3.5 py-1.5">57 schools</span>
                <span className="rounded-full border border-[#D4E7F4] bg-[#E8F5FC] px-3.5 py-1.5">51K+ students</span>
              </div>
            </div>
            <div className={`${quietCard} p-6 md:p-7`}>
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#8C8173]">The operational gaps</p>
              <Problem title="Flimsy and unreliable" body="Single-use trays lacked the durability needed for an expanding, culturally inclusive menu." />
              <Problem title="Slow to separate" body="Trays stuck together and created avoidable friction for cafeteria staff during high-volume service." />
              <Problem title="Poor fit for meals" body="Thin, shallow compartments could not reliably hold varied foods, liquids, or portion sizes." last />
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionShell} bg-[#F8FAF6] px-6 py-20 md:px-8`}>
        <div className={paperGrid} />
        <div className="relative mx-auto max-w-6xl">
          <Eyebrow>02 · Design Principles</Eyebrow>
          <h2 className="max-w-3xl font-serif text-[32px] leading-[1.1] tracking-[-0.02em] md:text-[42px]">Goals grounded in cafeteria operations and student needs.</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
            <div className="space-y-3">
              {principles.map((p) => (
                <div key={p.title} className="relative flex gap-3 overflow-hidden rounded-[22px] border border-[#E6E0D7] bg-white/80 p-4 shadow-sm">
                  <span className="absolute bottom-0 left-0 top-0 w-1" style={{ backgroundColor: p.line }} />
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg" style={{ backgroundColor: p.bg }}>{p.icon}</div>
                  <div><h3 className="text-[14px] font-semibold">{p.title}</h3><p className="mt-0.5 text-[12.5px] leading-relaxed text-[#5C7A6F]">{p.body}</p></div>
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <div key={f.label} className="relative rounded-[26px] border bg-white/90 p-3 shadow-sm" style={{ borderColor: f.border }}>
                  <span className={`pointer-events-none absolute -top-2.5 h-4 w-16 rounded-sm opacity-75 ${i % 2 ? "right-7 rotate-3" : "left-7 -rotate-3"}`} style={{ backgroundColor: f.border }} />
                  <p className="px-1 pb-2 text-[10px] uppercase tracking-[0.2em]" style={{ color: f.ink }}>{f.label}</p>
                  <div className="relative h-24 overflow-hidden rounded-[19px]" style={{ backgroundColor: f.bg }}><Image src={f.img} alt={f.label} fill className={`object-cover ${f.imageClass ?? ""}`} /></div>
                  <p className="px-1 pb-1 pt-3 text-[12px] leading-relaxed text-[#5C7A6F]">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionShell} bg-gradient-to-b from-[#F5F9FF] to-[#F8FAFD] px-6 py-20 md:px-8`}>
        <div className={paperGrid} />
        <div className="relative mx-auto max-w-6xl">
          <Eyebrow>03 · Design Process</Eyebrow>
          <h2 className="max-w-4xl font-serif text-[32px] leading-[1.1] tracking-[-0.02em] md:text-[44px]">A year-long journey from sketchbook to manufacturable hardware.</h2>
          <div className="relative mt-12">
            <div className="absolute bottom-0 left-4 top-0 w-[2px] rounded-full bg-gradient-to-b from-[#CFE5F5] via-[#E6D0E8] to-[#D8DFF0] md:left-8" />
            <div className="space-y-10">
              <TimelineCard step="01" color="blue" title="Exploration & Brainstorming" emoji="💡" imageSrc="/lb-1.png" imageAlt="Early tray layout sketches" tapeColor="#FFEBD9">Sketched dozens of layouts, then used morph charts and Pugh matrices to compare capacity, stackability, manufacturability, and durability.</TimelineCard>
              <TimelineCard step="02" color="pink" title="Low-Fidelity Iteration" emoji="📦" imageSrc="/lb-3-cad.png" imageAlt="Foam and laser-cut test trays" tapeColor="#FFE6EC" tapePosition="right">Foam, cardboard, and laser-cut profiles let us test compartment sizing, tactile usability, and stack behavior before investing in higher-fidelity builds.</TimelineCard>
              <TimelineCard step="03" color="purple" title={'The "Slide n\' Lock" Mechanism'} emoji="⚙️" imageSrc="/lb-2.png" imageAlt="Slide and lock prototypes" tapeColor="#E7E4FF" caption="Early prints explored divots, sliders, and pinch-locks.">3D-printed the mechanism and iterated divot tolerances, nub height, and assembly force. Cafeteria pilots validated the interaction while exposing failure points under high throughput.</TimelineCard>
              <TimelineCard step="04" color="orange" title="Mid-Fidelity Prototype" emoji="🔧" imageSrc="/lb-tray.png" imageAlt="Assembled prototype modules" tapeColor="#FFF0E5" tapePosition="right" imageClass="object-contain object-[center_59%]" caption="Full-scale printed and assembled modules.">Full-scale meal configurations revealed that loaded three-module combinations were difficult for students. We reinforced connection points, added pairing cues, and retested repeated cycles.</TimelineCard>
              <TimelineCard step="05" color="green" title="Material Research" emoji="🧪" fullWidth>Compared HDPE, polypropylene, and food-safe nylon across dishwasher performance, impact resistance, and cost. Draft angles and wall thickness were then adjusted for injection molding.</TimelineCard>
              <TimelineCard step="06" color="rose" title="High-Fidelity Machining" emoji="🛠️" fullWidth>Designed custom 3D-printed jigs to secure HDPE stock during CNC operations. The machined prototype enabled mechanical validation and live-kitchen stress testing.</TimelineCard>
              <TimelineCard step="07" color="teal" title="Snap 'n' Lock: Designed to Be Made" emoji="✅" imageSrc="/lb-4-cad.png" imageAlt="Injection-ready snap-fit geometry" tapeColor="#E0F7FF" tapePosition="center" imageClass="object-scale-down">Tooling analysis showed the horizontal slide could not scale. We pivoted to a vertical snap-fit designed for single-pull injection molding while preserving modularity and budget viability.</TimelineCard>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionShell} bg-[#F5F3EF] px-6 py-20 md:px-8`}>
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#DDF1F7]/55 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#F8DDE7]/45 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <Eyebrow>04 · Outcome & Reflection</Eyebrow>
          <div className="grid gap-5 lg:grid-cols-[1.65fr_1fr]">
            <div className="relative overflow-hidden rounded-[30px] border border-[#D6E4E0] bg-[#EAF4F1] p-7 shadow-sm md:p-9">
              <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-[#B7E1F1]/60" />
              <div className="relative">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#51766D]">Outcome</p>
                <h3 className="max-w-xl font-serif text-[27px] leading-tight md:text-[34px]">A manufacture-ready product with a path to adoption.</h3>
                <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-[#4F6D65] md:text-[15px]">We delivered the final modular tray system to Durham Public Schools after redesigning it for scalable manufacturing, district operations, and daily K–12 use.</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Signed LOI", "Purchase intent"],
                    ["Provisional patent", "Co-authored claims"],
                    ["District handoff", "Manufacture-ready design"],
                  ].map(([value, label]) => <div key={value} className="rounded-2xl border border-white/80 bg-white/75 px-4 py-4"><p className="font-serif text-[19px] text-[#1F6258]">{value}</p><p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[#778B85]">{label}</p></div>)}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[30px] border border-[#E9D9B9] bg-[#FFF8E8] p-7 shadow-sm md:p-8">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#9A7431]">My contribution</p>
              <p className="font-serif text-[27px] leading-tight">Engineering the idea into a viable product.</p>
              <div className="mt-5 space-y-3 text-[13.5px] leading-relaxed text-[#6C624F]">
                {["Developed and iterated CAD across tray concepts", "Designed and tested interlocking mechanisms", "Evaluated materials and injection-molding constraints", "Built validation prototypes and supported patent documentation"].map((item) => <div key={item} className="flex gap-3 border-t border-[#E8D8B8] pt-3 first:border-0 first:pt-0"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F4C967]" />{item}</div>)}
              </div>
            </div>
            <div className="rounded-[26px] border border-[#E6E0D7] bg-white/75 px-7 py-6 lg:col-span-2">
              <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8C8173]">What I learned</p>
                <p className="max-w-3xl text-[14px] leading-relaxed text-[#5C7A6F] md:text-[15px]">I learned to treat constraints as design input, not compromise. Feedback from cafeteria staff, machinists, and manufacturers repeatedly sent us back to the sketchbook, producing a simpler and more viable product each time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ScrapbookImage({ src, alt, shadow, tape, rotate = false }: { src: string; alt: string; shadow: string; tape: string; rotate?: boolean }) {
  return <div className="relative"><div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[34px] opacity-40" style={{ backgroundColor: shadow }} /><span className={`absolute -top-3 left-1/2 z-20 h-7 w-20 -translate-x-1/2 ${rotate ? "rotate-3" : "-rotate-2"}`} style={{ backgroundColor: tape, opacity: 0.65 }} /><div className="relative aspect-[16/10] overflow-hidden rounded-[30px] border-4 border-white bg-white shadow-sm"><img src={src} alt={alt} className="h-full w-full object-cover" /></div></div>;
}

function Meta({ title, color, items }: { title: string; color: string; items: string[] }) {
  return <div><p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#8C8173]">{title}</p><ul className="space-y-2 text-[13px] font-medium text-[#2C3E3A]">{items.map((item) => <li key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />{item}</li>)}</ul></div>;
}

function Problem({ title, body, last = false }: { title: string; body: string; last?: boolean }) {
  return <div className={`py-4 ${last ? "" : "border-b border-[#E8E3DB]"}`}><p className="text-[12px] font-semibold text-[#2C3E3A]">{title}</p><p className="mt-1 text-[13.5px] leading-relaxed text-[#5C7A6F]">{body}</p></div>;
}

const colorConfig = {
  blue: { border: "#D4E3F4", text: "#3C7A8F", shadow: "rgba(20,60,110,0.10)", cardBorder: "#E4EBF4" },
  pink: { border: "#E6BBC5", text: "#D43D60", shadow: "rgba(120,40,70,0.09)", cardBorder: "#FFE4EC" },
  purple: { border: "#C9C3F8", text: "#5D52D6", shadow: "rgba(80,70,170,0.09)", cardBorder: "#DAD6FF" },
  orange: { border: "#FFD4B8", text: "#C85A28", shadow: "rgba(180,70,30,0.09)", cardBorder: "#FFE4D0" },
  green: { border: "#CDE9BB", text: "#5A7A39", shadow: "rgba(70,110,50,0.09)", cardBorder: "#D7F0C7" },
  rose: { border: "#E6BBC5", text: "#9A4B5F", shadow: "rgba(120,40,70,0.10)", cardBorder: "#F0D0DA" },
  teal: { border: "#B7E1F1", text: "#287E99", shadow: "rgba(40,110,130,0.09)", cardBorder: "#D5ECF7" },
};

type TimelineCardProps = { step: string; color: keyof typeof colorConfig; title: string; emoji: string; children: React.ReactNode; imageSrc?: string; imageAlt?: string; imageClass?: string; tapeColor?: string; tapePosition?: "left" | "right" | "center"; caption?: string; fullWidth?: boolean };

function TimelineCard({ step, color, title, emoji, children, imageSrc, imageAlt, imageClass = "object-contain", tapeColor, tapePosition = "left", caption, fullWidth }: TimelineCardProps) {
  const c = colorConfig[color];
  const tapePos = tapePosition === "right" ? "right-10" : tapePosition === "center" ? "left-1/2 -translate-x-1/2" : "left-8";
  const tapeRot = tapePosition === "right" ? "rotate-[5deg]" : tapePosition === "center" ? "rotate-[2deg]" : "rotate-[-4deg]";
  const text = <div className="relative flex flex-1 flex-col rounded-[26px] bg-white/90 px-5 py-5 shadow-sm" style={{ borderColor: c.cardBorder, borderWidth: 1, boxShadow: `0 12px 26px ${c.shadow}` }}><div className="mb-2 flex items-center gap-2"><span className="text-lg" aria-hidden>{emoji}</span><h3 className="text-[18px] font-semibold md:text-[20px]">{title}</h3></div><p className="text-[13.5px] leading-relaxed text-[#5C7A6F]">{children}</p></div>;
  return <div className="relative pl-10 md:pl-16"><div className="absolute left-0 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md md:left-4" style={{ borderColor: c.border, borderWidth: 1 }}><span className="text-[11px] font-semibold" style={{ color: c.text }}>{step}</span></div>{fullWidth ? text : <div className="flex flex-col gap-6 md:flex-row md:gap-8">{text}<div className="md:w-[46%]"><div className="relative h-full rounded-[26px] bg-white p-3 shadow-sm" style={{ borderColor: c.border, borderWidth: 1 }}>{tapeColor && <span className={`pointer-events-none absolute -top-3 ${tapePos} h-5 w-20 rounded-sm shadow-sm ${tapeRot}`} style={{ backgroundColor: `${tapeColor}95` }} />}<div className={`relative w-full overflow-hidden rounded-[18px] ${caption ? "h-48" : "h-full min-h-[170px]"}`}>{imageSrc && <Image src={imageSrc} alt={imageAlt || title} fill className={imageClass} />}</div></div>{caption && <p className="mt-2 pl-1 text-[12px] leading-relaxed text-[#8B8273]">{caption}</p>}</div></div>}</div>;
}
