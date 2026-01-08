import Image from "next/image";

export default function AmgenOperationsPage() {
  return (
    <main className="w-full bg-[#F5F3EF]">
      {/* HERO - light, airy, Apple-ish but more industrial/ops-y */}
      <section className="relative h-[480px] md:h-[500px] lg:h-[540px] overflow-hidden bg-[#F5F3EF]">
        {/* photo (swap src with your own plant / dashboard image) */}
        <Image
          src="/amgen-operations-hero.png"
          alt="Amgen Operations & Maintenance Dashboards"
          fill
          priority
          className="object-cover object-[50%_50%]"
        />

        {/* soft bright overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-transparent to-[#F5F3EF]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8)_0,transparent_45%)] pointer-events-none" />

        {/* bottom pastel glass strip */}
        <div
          className="
            absolute 
            left-0
            right-0
            bottom-10
            h-60 
            bg-gradient-to-t 
            from-[#d7f3ff]/60
            via-[#fff4d7]/70
            to-transparent 
            pointer-events-none 
            z-0
          "
        />

        {/* text */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-7xl mx-auto px-6 pb-14 md:pb-20 drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
            <p className="text-[11.5px] md:text-[15px] px-1.5 tracking-[0.4em] uppercase text-[#123459] mb-1">
              JUN–AUG 2025
            </p>
            <h1 className="text-5xl md:text-6xl font-extralight text-[#0f3752] leading-[0.9] mb-2 tracking-tighter">
              Amgen<br />Operations Engineering
            </h1>
            <p className="text-base md:text-xl px-1.5 py-1 mb-1 text-[#123459] max-w-xl font-light">
              Turning 1,000+ assets of maintenance data into clearer workflows and less downtime.
            </p>
          </div>
        </div>
      </section>

      {/* APPLE-GLASS STATS BAR – ops-flavored */}
      <section className="relative -mt-12 md:-mt-20 px-10 flex justify-center">
        <div className="max-w-4xl w-full bg-gradient-to-r from-[#c7eaff] via-[#fbe3c0] to-[#d5f4e0] p-[1px] rounded-[26px] shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
          <div
            className="
              bg-white/65 backdrop-blur-xl
              rounded-[24px]
              px-10 py-2.5
              flex flex-wrap items-center justify-between gap-2
              text-[#0d365e]
            "
          >
            <div className="flex items-baseline gap-1 text-xs">
              <span className="text-lg font-light">1000+</span>
              <span className="opacity-70">assets analyzed</span>
            </div>

            <div className="flex items-baseline gap-1 text-xs">
              <span className="text-lg font-light">20+</span>
              <span className="opacity-70">stakeholders aligned</span>
            </div>

            <div className="flex items-baseline gap-1 text-xs">
              <span className="text-lg font-light">8%</span>
              <span className="opacity-70">downtime reduction</span>
            </div>

            <div className="flex items-baseline gap-1 text-xs">
              <span className="text-lg font-light">3</span>
              <span className="opacity-70">months on-site</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT FACTS – compact table-style block */}
      <section className="bg-[#F5F3EF] border-b border-[#E0D9CE]/60">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {/* ROLE */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Role
            </p>
            <p className="text-sm text-[#2C3E3A] font-medium">
              Operations Engineering Intern
            </p>
          </div>

          {/* TEAM */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Team
            </p>
            <p className="text-sm text-[#2C3E3A] font-medium leading-snug">
              System owners, schedulers,<br className="hidden md:block" />
              QA & maintenance techs
            </p>
          </div>

          {/* SKILLS */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Skills
            </p>
            <p className="text-sm text-[#2C3E3A] font-medium leading-snug">
              Workflow design, data analysis,<br className="hidden md:block" />
              dashboarding, stakeholder alignment
            </p>
          </div>

          {/* TOOLS */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-1">
              Tools
            </p>
            <p className="text-sm text-[#2C3E3A] font-medium leading-snug">
              Power BI, Excel, Maximo,<br className="hidden md:block" />
              Smartsheet
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* CONTEXT + PROCESS */}
        <div className="mb-20 grid md:grid-cols-[1fr_300px] gap-10">
          <div>
            <h2 className="text-4xl font-extralight text-[#2C3E3A] mb-4 leading-tight">
              Reliable lines, messy maintenance
            </h2>
            <p className="text-base text-[#5C7A6F] leading-relaxed font-light mb-6">
              Amgen&apos;s Thousand Oaks site runs complex production lines with
              hundreds of critical assets. The maintenance program worked—but
              workflows were fragmented across tools, teams, and spreadsheets.
              That fragmentation showed up as preventable delays, unclear
              ownership, and too much time spent hunting for information instead
              of fixing problems.
            </p>
            <p className="text-base text-[#5C7A6F] leading-relaxed font-light mb-6">
              My summer was about turning that ecosystem into something more
              usable: surfacing the right asset data, simplifying scheduling
              logic, and giving teams clearer visibility into what needed
              attention next.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Asset hierarchy mapping",
                "Stakeholder interviews",
                "Workflow mapping",
                "Downtime analysis",
                "Dashboard design",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-3 py-1.5 rounded-full bg-[#A8C5BA]/20 text-[#2C3E3A] border border-[#A8C5BA]/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* PROCESS SIDEBAR */}
          <div className="bg-[#2C3E3A] text-white rounded-2xl p-6">
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#A8C5BA] mb-5">
              Process
            </p>
            <div className="space-y-4 text-xs">
              {[
                "Shadow & map current workflows",
                "Quantify bottlenecks in Maximo data",
                "Redesign scheduling logic & handoffs",
                "Prototype dashboards with real assets",
                "Roll out, train, and refine with teams",
              ].map((step, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-xl font-extralight text-[#A8C5BA]">
                    0{i + 1}
                  </span>
                  <span className="mt-1">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTLENECK INSIGHT */}
        <div className="mb-20 bg-gradient-to-br from-[#8BA89E]/10 to-[#A8C5BA]/10 rounded-2xl p-8 border border-[#D4CFC4]/40">
          <div className="grid md:grid-cols-[1fr_400px] gap-8 items-center">
            <div>
              <p className="text-[9px] uppercase tracking-wider text-[#8BA89E] mb-3">
                BOTTLENECK FINDING
              </p>
              <h3 className="text-3xl font-extralight text-[#2C3E3A] mb-4 leading-tight">
                Work orders were scheduled on paper logic—not system reality
              </h3>
              <p className="text-sm text-[#5C7A6F] font-light leading-relaxed mb-3">
                By joining Maximo work order history with asset hierarchies, I
                found clusters of overdue and rescheduled work around a small
                set of high-impact assets. Schedulers were compensating
                manually, but the underlying rules hadn&apos;t been updated to
                match how the lines actually ran.
              </p>
              <p className="text-sm text-[#5C7A6F] font-light leading-relaxed">
                That insight became the backbone for a new scheduling structure:
                clearer priorities, standardized logic fields, and live asset
                data driving when work should really happen.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-[#1e88e5]/15 via-[#ffb300]/20 to-[#43a047]/20 rounded-xl flex items-center justify-center text-xs text-[#5C7A6F]/50">
              [Work order flow / bottleneck visualization]
            </div>
          </div>
        </div>

        {/* STAKEHOLDER INSIGHTS */}
        <div className="mb-20">
          <h2 className="text-4xl font-extralight text-[#2C3E3A] mb-8 leading-tight">
            What 20+ stakeholders told us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Too many places to look",
                quote:
                  '"I spend more time finding the right asset than planning the work."',
                points: [
                  "Asset IDs, locations, and status scattered across tools",
                  "Critical context lived in people’s heads",
                ],
              },
              {
                title: "Schedules fought reality",
                quote:
                  '"The schedule looks clean until the line actually goes down."',
                points: [
                  "Paper rules didn’t reflect real changeover and cleaning times",
                  "Frequent reschedules created noise and rework",
                ],
              },
              {
                title: "Compliance was hard to see",
                quote:
                  '"We’re compliant, but it’s hard to show that quickly and clearly."',
                points: [
                  "Regulatory status buried in raw Maximo reports",
                  "No simple view of what was at risk this week",
                ],
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
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT I DELIVERED */}
        <div className="mb-20">
          <h2 className="text-4xl font-extralight text-[#2C3E3A] mb-8 leading-tight">
            What I redesigned & built
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                feature: "Maintenance workflow redesign",
                from: "Inconsistent steps across identical asset types",
                to: "Standardized flows mapped to 1,000+ assets",
                impact:
                  "Gave schedulers and techs a shared mental model for how work should flow.",
              },
              {
                feature: "Smartsheet compliance dashboards",
                from: "Static Maximo exports and manual updates",
                to: "Automated dashboards tracking regulatory status in real time",
                impact:
                  "Made it easy to see which assets and work orders were at risk this week.",
              },
              {
                feature: "Scheduling logic refactor",
                from: "Hard-coded assumptions about line availability",
                to: "Logic fields that incorporate live asset and production data",
                impact:
                  "Reduced reschedules and helped drive an estimated 8% reduction in downtime.",
              },
              {
                feature: "Operational visibility toolkit",
                from: "Ad hoc reports for each stakeholder group",
                to: "Shared views for system owners, QA, and schedulers",
                impact:
                  "Aligned conversations around one source of truth instead of competing spreadsheets.",
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
                      <p className="text-[#8BA89E] uppercase tracking-wider mb-1">
                        From
                      </p>
                      <p className="text-[#5C7A6F] font-light">{item.from}</p>
                    </div>
                    <div>
                      <p className="text-[#8BA89E] uppercase tracking-wider mb-1">
                        To
                      </p>
                      <p className="text-[#5C7A6F] font-light">{item.to}</p>
                    </div>
                    <div className="pt-2 border-t border-[#D4CFC4]/30">
                      <p className="text-[#2C3E3A] font-medium">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OPS PRINCIPLES */}
        <div className="mb-20 bg-[#2C3E3A] text-white rounded-2xl p-10">
          <p className="text-[8px] uppercase tracking-[0.3em] text-[#A8C5BA] mb-6">
            OPERATIONS PRINCIPLES
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            {[
              ["Make the data feel human", "Dashboards should explain, not just display."],
              ["Design for the edge cases", "Workflows should still hold under stress and exceptions."],
              ["Close the loop", "Improvements don’t count until they show up on the line."],
            ].map(([title, desc], i) => (
              <div key={i}>
                <p className="text-2xl font-extralight text-[#A8C5BA] mb-2">
                  0{i + 1}
                </p>
                <p className="font-semibold mb-2">{title}</p>
                <p className="text-white/70 text-xs font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* KEY PARTNERS */}
        <div className="mb-20">
          <h2 className="text-4xl font-extralight text-[#2C3E3A] mb-8 leading-tight">
            Designed with the people who use it
          </h2>
          <div className="space-y-4">
            {[
              [
                "Maria",
                "Maintenance Technician",
                "Needs to know exactly which asset, which step, and which constraints matter—without digging through three tools.",
                "#A8C5BA",
              ],
              [
                "Dev",
                "Scheduler",
                "Balances line availability, technician capacity, and compliance windows. Needs rules that reflect reality, not wishful thinking.",
                "#8BA89E",
              ],
              [
                "Lena",
                "QA Lead",
                "Owns audit readiness. Needs fast, defensible answers to “Are we covered?” across 1,000+ assets.",
                "#B8D4C8",
              ],
            ].map(([name, type, desc, color], i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-white/60 border border-[#D4CFC4]/30 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${color}, ${color}99)`,
                  }}
                />
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-[#2C3E3A]">
                      {name}
                    </h3>
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

        {/* REFLECTION */}
        <div className="border-top border-[#D4CFC4]/40 pt-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extralight text-[#2C3E3A] mb-4 leading-tight">
              What I took away
            </h2>
            <p className="text-base text-[#5C7A6F] font-light leading-relaxed mb-4">
              This internship was a lesson in how deeply operations depends on
              clarity—of data, of ownership, and of process. By coordinating
              with 20+ stakeholders and grounding every design decision in
              asset-level reality, I saw how small workflow changes can unlock
              measurable improvements across entire production lines.
            </p>
            <p className="text-base text-[#5C7A6F] font-light leading-relaxed mb-4">
              If I had another cycle, I&apos;d push further into experimentation:
              A/B testing alternative scheduling rules, layering in predictive
              models for riskier assets, and tying downtime metrics even more
              directly to the dashboards we shipped.
            </p>
            <p className="text-base text-[#5C7A6F] font-light leading-relaxed">
              The throughline: operations design isn&apos;t done when the
              dashboard looks good—it&apos;s done when the line runs smoother.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
