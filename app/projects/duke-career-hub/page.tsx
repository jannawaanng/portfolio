import Image from "next/image";
import React, { Fragment } from 'react';

export default function DukeCareerHubPage() {
  return (
    <main className="w-full bg-[#F5F3EF]">
      {/* ============ HERO ============ */}
      <section className="relative h-[480px] md:h-[520px] overflow-hidden bg-[#F5F3EF]">
        <Image
          src="/mockup-career-hub-expanded.png"
          alt="Duke Career Hub Redesign"
          fill
          priority
          className="object-cover object-[0%_80%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-transparent to-[#F5F3EF]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.75)_0,transparent_45%)] pointer-events-none" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="absolute left-0 right-0 bottom-10 h-60 bg-gradient-to-t from-[#ffe9f0]/50 via-[#effffa]/70 to-transparent pointer-events-none z-0" />
          <div className="w-full max-w-6xl mx-auto px-6 pb-14 md:pb-20 drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
            <p className="text-[11px] md:text-[12px] tracking-[0.4em] uppercase text-[#162f62] mb-1 font-medium">
              JAN–MAY 2025
            </p>
            <h1 className="text-5xl md:text-6xl font-extralight text-[#14526b] leading-[0.85] mb-2 tracking-tighter">
              Duke<br />Career Hub
            </h1>
            <p className="text-base md:text-lg text-[#162f62] max-w-lg font-light">
              Redesigning a career platform to work the way students work.
            </p>
          </div>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="relative -mt-12 md:-mt-16 px-6 flex justify-center">
        <div className="max-w-5xl w-full bg-gradient-to-r from-[#ffc9d9] via-[#c2e3ff] to-[#c7f3d2] p-[1px] rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
          <div className="bg-white/70 backdrop-blur-xl rounded-[15px] px-8 py-3 flex flex-wrap items-center justify-center gap-8 md:gap-20 text-[#0d365e]">
            {[
              ["5", "Person Team"],
              ["4", "Research Methods"],
              ["20+", "Participants"]
            ].map(([num, label], i) => (
              <div key={i} className="flex items-baseline gap-1.5 text-xs">
                <span className="text-lg font-light">{num}</span>
                <span className="opacity-70">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECT META ============ */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-10">
        {[
          ["Role", ["UX Research Lead", "Product Designer"]],
          ["Team", ["3 Designers", "1 Outreach", "1 Operations"]],
          ["Skills", ["User Research", "Information Architecture", "Product Strategy", "UI & Interaction Design"]],
          ["Tools", ["Figma", "FigJam", "Hotjar"]],
        ].map(([title, items], i) => (
          <div key={i}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-2 font-medium">{title as string}</p>
            <ul className="text-sm text-[#2C3E3A] font-medium space-y-1">
              {(items as string[]).map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {/* ============ 01. THE PROBLEM ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#14526b] font-bold">01. The Problem</p>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extralight text-[#2C3E3A] mb-5 leading-tight max-w-4xl">
          Students weren&apos;t using the Career Hub.
        </h2>
        
        <p className="text-base text-[#5C7A6F] leading-relaxed font-light mb-10 max-w-3xl">
          Despite Duke&apos;s 1:233 student-to-staff ratio (outperforming peer institutions like UPenn and UNC), 
          students defaulted to student-run organizations like DTECH and NSBE. The Career Hub&apos;s UX undermined its value.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: "/ch-1.png",
              stat: "76%",
              title: "Reported High Cognitive Load",
              desc: "Dense static text, a lack of call-to-action buttons, and unclear visual hierarchy obscured core actions."
            },
            {
              icon: "/ch-2.png",
              stat: "9.2 clicks",
              title: "avg. number to book advising",
              desc: "Deeply nested menus and a lack of direct entry points drove up the interaction cost for this key task."
            },
            {
              icon: "/ch-3.png",
              stat: "142 sec.",
              title: "Avg. Time to Find Given Resource",
              desc: "Navigation categories reflected organizational structure instead of user goals, resulting in frequent misnavigation and backtracking."
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[#E5E0D5] rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 flex-shrink-0">
                   <Image src={item.icon} alt="" fill className="object-contain" />
                </div>
                <div>
                  <p className="text-2xl font-light text-[#14526b]">{item.stat}</p>
                  <p className="text-[9px] uppercase tracking-wider font-bold text-[#8C8173]">{item.title}</p>
                </div>
              </div>
              <p className="text-sm text-[#5C7A6F] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 02. THE PROCESS ============ */}
      <section className="bg-white py-16 border-y border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#14526b]">02. The Process</p>
          </div>
          
          <p className="text-base text-[#5C7A6F] font-light mb-10 max-w-3xl">
            I led a mixed-methods study combining behavioral data with qualitative insights 
            to understand the disconnect between user intent and site performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                phase: "Discover",
                week: "Weeks 1-2",
                items: ["Stakeholder alignment", "Ecosystem mapping", "Defined user goals with JTBD Framework", "Recruited stratified student sample"]
              },
              {
                phase: "Diagnose",
                week: "Weeks 3-5",
                items: ["Usability testing", "Heatmap analysis", "Focus groups", "Search query audit"],
                tag: "Usability Report"
              },
              {
                phase: "Organize",
                week: "Weeks 6-8",
                items: ["Open card sort", "Similarity matrices", "Competitive analysis", "Persona development"],
                tag: "Restructured IA"
              },
              {
                phase: "Define",
                week: "Weeks 9-12",
                items: ["Design principles", "Navigation proposal", "Hi-fi prototyping", "Stakeholder handoff"],
                tag: "Final Prototype"
              },
            ].map((step, i) => (
              <div key={i} className="group p-5 bg-[#F5F3EF] rounded-xl border border-transparent hover:border-[#E5E0D5] hover:bg-white transition-all">
                <span className="text-3xl font-serif text-[#D4CFC4] group-hover:text-[#A8C5BA] mb-2 block">0{i + 1}</span>
                <h3 className="text-base font-bold text-[#2C3E3A] mb-1">{step.phase}</h3>
                <p className="text-[10px] uppercase tracking-widest text-[#8C8173] mb-4">{step.week}</p>
                <ul className="space-y-2 mb-5 min-h-[100px]">
                  {step.items.map((item, j) => (
                    <li key={j} className="text-xs text-[#5C7A6F] flex gap-2">
                      <span className="text-[#A8C5BA]">•</span> {item}
                    </li>
                  ))}
                </ul>
                {step.tag && (
                  <div className="inline-block bg-[#14526b]/10 text-[#14526b] text-[10px] font-bold px-3 py-1 rounded-full">
                    {step.tag}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03. RESEARCH FINDINGS ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#14526b] font-bold">03. Research Findings</p>
        </div>

        {/* A. Usability Testing */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-[#2C3E3A] mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#14526b] text-white text-[10px] flex items-center justify-center">A</span>
            Usability Testing
          </h3>
          
          <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-3 bg-white border border-[#E5E0D5] rounded-xl p-4 flex flex-col justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-[#8C8173] mb-1.5 font-bold">Methodology</p>
                <p className="text-xs text-[#5C7A6F] font-light mb-4 leading-relaxed">
                  8 participants (task-based vs. exploratory groups). Think-aloud protocol used to capture real-time friction.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#F5F3EF] rounded-lg p-2.5 flex items-center gap-3">
                  <p className="text-2xl font-light text-[#14526b]">76%</p>
                  <p className="text-[10px] text-[#5C7A6F] leading-tight">found homepage <br/> text overwhelming</p>
                </div>
                <div className="bg-[#F5F3EF] rounded-lg p-2.5 flex items-center gap-3">
                  <p className="text-2xl font-light text-[#14526b]">1/8</p>
                  <p className="text-[10px] text-[#5C7A6F] leading-tight">booked advisor <br/> on first try</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-white border border-[#E5E0D5] rounded-xl p-4">
              <p className="text-[9px] uppercase tracking-wider text-[#8C8173] mb-2 font-bold">Key Quotes</p>
              <div className="space-y-2.5">
                {[
                  ["User A", "This info should be on an About page. I just want to find a job."],
                  ["User C", "Search results look like basic Google. Videos/Events returned nothing."],
                  ["User D", "I didn't know I could just book a general appointment."],
                ].map(([user, quote], i) => (
                  <div key={i} className="border-l-2 border-[#14526b]/20 pl-3">
                    <p className="text-[11px] text-[#5C7A6F] italic leading-tight mb-0.5">&quot;{quote}&quot;</p>
                    <p className="text-[9px] text-[#14526b] font-bold">{user}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* B. Heatmap Analysis */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-[#2C3E3A] mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#14526b] text-white text-[10px] flex items-center justify-center">B</span>
            Heatmap Analysis
          </h3>
          
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="w-full md:w-7/12 shrink-0">
              <div className="relative aspect-[21/9] md:aspect-[2.5/1] rounded-xl overflow-hidden border border-[#E5E0D5] h-full">
                <Image 
                  src="/ch-heatmap.png" 
                  alt="Heatmap showing dead clicks" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
            
            <div className="w-full md:w-5/12 bg-white border border-[#E5E0D5] rounded-xl p-4 flex flex-col">
              <div className="mb-4">
                <p className="text-[9px] uppercase tracking-wider text-[#8C8173] mb-2 font-bold">Findings</p>
                <div className="space-y-1.5">
                  {[
                    { area: "High engagement", detail: "Nav dropdowns, Personalize button, Events" },
                    { area: "Low engagement", detail: "Mission statement, general announcements" },
                    { area: "Critical issue", detail: "\"Explore Options\" banner was NOT clickable" },
                  ].map((item, i) => (
                    <p key={i} className="text-[11px] leading-tight">
                      <span className="font-bold text-[#14526b]">{item.area}: </span>
                      <span className="text-[#5C7A6F]">{item.detail}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-auto bg-red-50 border border-red-100 rounded-lg p-2.5">
                <p className="text-[10px] text-red-700 leading-tight">
                  <strong>Design debt:</strong> Non-interactive elements styled like buttons create dead ends and erode user trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* C. Focus Groups */}
        <div>
          <h3 className="text-sm font-semibold text-[#2C3E3A] mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#14526b] text-white text-[10px] flex items-center justify-center">C</span>
            Focus Groups
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                theme: "Generic advice",
                insight: "Data science students received non-technical feedback. Lacked industry-specific guidance.",
                implication: "Specialized advisors or industry resources"
              },
              {
                theme: "Automated over personal",
                insight: "Mock interviews redirected to online tools. Lacked human touch and 1:1 support.",
                implication: "Surface 1:1 advising more prominently"
              },
              {
                theme: "Poor marketing",
                insight: "Discovered Handshake via peers. Many didn't know about alumni database until junior year.",
                implication: "Proactive orientation onboarding"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#E5E0D5] rounded-xl p-4 hover:shadow-md transition-shadow flex flex-col">
                <p className="text-xs font-bold text-[#2C3E3A] mb-1.5">{item.theme}</p>
                <p className="text-[11px] text-[#5C7A6F] font-light mb-3 flex-grow leading-snug">{item.insight}</p>
                <div className="bg-[#14526b]/5 rounded-lg px-2.5 py-1.5 mt-auto">
                  <p className="text-[8px] uppercase tracking-wider text-[#14526b] font-bold">Implication</p>
                  <p className="text-[10px] text-[#2C3E3A] font-medium leading-tight">{item.implication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04. CARD SORT ============ */}
      <section className="bg-[#e8e4dc] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="mb-4">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#14526b] font-bold">04. Card Sort</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-extralight text-[#2C3E3A] leading-tight">
                Understanding mental models to rework IA.
              </h2>
            </div>
            <div className="flex gap-8 border-l border-[#d4cfc4] pl-8">
              <div>
                <p className="text-2xl font-light text-[#14526b]">124</p>
                <p className="text-[9px] font-bold text-[#2C3E3A] uppercase tracking-wider">Items Sorted</p>
              </div>
              <div>
                <p className="text-2xl font-light text-[#14526b]">10</p>
                <p className="text-[9px] font-bold text-[#2C3E3A] uppercase tracking-wider">Participants</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-5">
            <div className="lg:col-span-7 space-y-5">
              <div className="bg-white rounded-xl border border-[#E5E0D5] p-5">
                <h3 className="text-[10px] font-bold text-[#2C3E3A] uppercase tracking-widest mb-4">High Consensus Categories</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: "Industry Paths", desc: "All 10 participants independently created industry groupings (Finance, Tech, etc.)." },
                    { title: "Functional Tools", desc: "Items like Handshake and Job Boards were placed in under 5 seconds." },
                    { title: "Independent Prep", desc: "Self-service materials (templates) were kept distinct from human advising." }
                  ].map((item, i) => (
                    <div key={i} className="border-l-2 border-[#E5E0D5] pl-3">
                      <p className="text-[10px] font-bold text-[#14526b] mb-1">{item.title}</p>
                      <p className="text-[9px] text-[#5C7A6F] leading-snug">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-[#E5E0D5] p-5">
                <h3 className="text-[10px] font-bold text-[#2C3E3A] uppercase tracking-widest mb-4">Boundary Confusion (Overlap %)</h3>
                <div className="space-y-4">
                  {[
                    { pair: "Resources ↔ Advising", pct: 48, note: "Users struggle to distinguish static guides from interactive services." },
                    { pair: "Jobs ↔ Featured Opportunities", pct: 45, note: "Featured items were often viewed as promotional rather than navigational." },
                    { pair: "Communities ↔ Affinity Groups", pct: 42, note: "Ambiguity between professional industry paths and identity-based groups." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 text-[10px] font-bold text-[#DC2626]">{item.pct}%</div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-[#2C3E3A] mb-1">{item.pair}</p>
                        <div className="w-full bg-[#f5f3ef] h-1 rounded-full">
                          <div className="bg-[#DC2626] h-full rounded-full" style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
                      <p className="w-1/3 text-[9px] text-[#8C8173] italic leading-tight">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#14526b] rounded-xl p-5 text-white h-full flex flex-col">
                <h3 className="text-[10px] font-bold uppercase tracking-widest mb-5 text-[#A8C5BA]">Behavioral Observations</h3>
                <ul className="space-y-4 flex-1">
                  <li className="flex gap-3">
                    <span className="text-[#A8C5BA] text-xs font-mono">01</span>
                    <p className="text-[10px] text-white/80 leading-relaxed">
                      <span className="text-white font-bold">Task-Oriented Labels:</span> Participants favored brevity and verbs. Created category names averaged 2.3 words vs. the site's 3.8.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#A8C5BA] text-xs font-mono">02</span>
                    <p className="text-[10px] text-white/80 leading-relaxed">
                      <span className="text-white font-bold">Identity-Based Grouping:</span> International students expect visa/work authorization content grouped by identity rather than content type.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#A8C5BA] text-xs font-mono">03</span>
                    <p className="text-[10px] text-white/80 leading-relaxed">
                      <span className="text-white font-bold">Search vs. Browse:</span> Items with high specific intent (OPT/CPT, specific named advisors) triggered a "search" mental model rather than a navigation one.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#A8C5BA] text-xs font-mono">04</span>
                    <p className="text-[10px] text-white/80 leading-relaxed">
                      <span className="text-white font-bold">Cognitive Overhead:</span> The general "Resources" category took the longest to sort (24m avg), indicating it functions as a confusing catch-all.
                    </p>
                  </li>
                </ul>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-[11px] italic font-light text-white leading-relaxed">
                    "Isn't everything on a career site supposed to make me 'career ready'? The <span className="underline decoration-[#A8C5BA] underline-offset-4">Career Readiness Resources</span> label is redundant."
                  </p>
                  <p className="text-[9px] text-[#A8C5BA] mt-2 uppercase tracking-widest">— P3, Sophomore</p>
                </div>
              </div>
            </div>
          </div>

          {/* DESIGN IMPLICATIONS */}
          <div className="mt-5 bg-white rounded-xl border border-[#E5E0D5] overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#F5F3EF]">
              {[
                { 
                  find: "Industry is the primary mental model", 
                  action: "Elevate industry categories to primary global navigation, replacing internal organizational labels." 
                },
                { 
                  find: "Functional ambiguity in Support", 
                  action: "Establish a clear functional split: 'Tools & Guides' (self-service) vs. 'Connect' (human-led)." 
                },
                { 
                  find: "Multi-purpose context items", 
                  action: "Apply poly-hierarchical navigation—placing items like Alumni Network in multiple logical paths." 
                }
              ].map((item, i) => (
                <div key={i} className="p-5 flex flex-col gap-2">
                  <div>
                    <p className="text-[8px] font-bold text-[#8C8173] uppercase tracking-widest mb-1">Observation</p>
                    <p className="text-[10px] text-[#5C7A6F] leading-tight">{item.find}</p>
                  </div>
                  <div className="mt-auto pt-3 border-t border-[#F5F3EF]">
                    <p className="text-[8px] font-bold text-[#14526b] uppercase tracking-widest mb-1">Design Action</p>
                    <p className="text-[10px] text-[#2C3E3A] leading-snug">
                      <span className="text-[#14526b] font-bold">→</span> {item.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 05. COMPETITIVE ANALYSIS ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4"> 
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#14526b] font-bold mb-3">05. Competitive Analysis</p>
            <h2 className="text-3xl md:text-4xl font-extralight text-[#2C3E3A] leading-tight">
              Benchmarking against peers &amp; alternatives
            </h2>
          </div>
          <p className="text-sm text-[#5C7A6F] font-light max-w-md leading-snug">
            I analyzed peer university career centers and Duke&apos;s pre-professional organizations to identify patterns in IA and engagement.
          </p>
        </div>

        {/* 1. UNIVERSITY COMPARISON TABLE */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-5 rounded bg-[#14526b] flex items-center justify-center text-white text-[10px] font-bold">1</div>
            <h3 className="text-sm font-semibold text-[#2C3E3A]">Peer University Career Centers</h3>
          </div>

          <div className="bg-white rounded-xl border border-[#E5E0D5] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#F8FAFC] text-[#14526b] border-b border-[#E5E0D5]">
                  <tr>
                    <th className="py-2.5 px-4 font-semibold w-1/5">Institution</th>
                    <th className="py-2.5 px-4 font-semibold w-1/6 text-center">Staff Ratio</th>
                    <th className="py-2.5 px-4 font-semibold w-1/3">Above-the-Fold Strategy</th>
                    <th className="py-2.5 px-4 font-semibold">Primary Navigation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D5]">
                  {[
                    {
                      name: "Duke University",
                      ratio: "1:233",
                      aboveFold: ["Mission statement text", "Nav dropdowns", "No visible action buttons"],
                      nav: ["Who We Serve", "Career Communities", "Process", "Opportunities", "Resources"]
                    },
                    {
                      name: "UPenn",
                      ratio: "1:296",
                      aboveFold: ["4 high-contrast CTA buttons", "Same Day Advising", "Minimal text"],
                      nav: ["Students", "Employers", "About", "Resources", "Connect"]
                    },
                    {
                      name: "UNC Chapel Hill",
                      ratio: "1:900",
                      aboveFold: ["First-Year Guide", "Step-by-step flow", "Audience entry points"],
                      nav: ["Students", "Employers", "Alumni", "About Us"]
                    },
                    {
                      name: "Rutgers",
                      ratio: "1:1,310",
                      aboveFold: ["Handshake Featured", "Platform-first messaging", "Single primary CTA"],
                      nav: ["Students", "Employers", "Advisors", "About"]
                    }
                  ].map((uni, idx) => (
                    <tr key={idx} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="py-2 px-4 font-medium text-[#2C3E3A]">{uni.name}</td>
                      <td className="py-2 px-4 text-[#5C7A6F] font-mono text-[10px] text-center">{uni.ratio}</td>
                      <td className="py-2 px-4">
                        <ul className="flex flex-wrap gap-x-3 gap-y-0.5">
                          {uni.aboveFold.map((item, i) => (
                            <li key={i} className="flex items-center text-[11px] text-[#5C7A6F]">
                              <span className="mr-1 text-[#14526b]">•</span>{item}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-2 px-4">
                        <div className="flex flex-wrap gap-1">
                          {uni.nav.map((cat, i) => (
                            <span key={i} className={`text-[9px] px-2 py-0.5 rounded-full font-medium border ${idx === 0 ? 'bg-red-50 text-red-700 border-red-100' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                              {cat}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-[#F1F5F9] rounded-lg p-3 border-l-4 border-[#14526b] flex items-center gap-4 mt-3">
            <div className="text-lg">💡</div>
            <p className="text-xs text-[#475569]">
              <strong className="text-[#14526b] uppercase text-[10px] mr-2">Key Insight</strong>
              Duke is the only institution organizing navigation by <strong>internal process</strong> rather than <strong>user audience</strong>, despite having the best staff-to-student ratio.
            </p>
          </div>
        </div>

        {/* 2. PRE-PROFESSIONAL ORGS */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-5 rounded bg-[#14526b] flex items-center justify-center text-white text-[10px] font-bold">2</div>
            <h3 className="text-sm font-semibold text-[#2C3E3A]">Duke Pre-Professional Organizations</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "DTECH", sub: "Duke Women in Tech", members: "500+", color: "bg-purple-50 border-purple-100", textColor: "text-purple-900",
                engagement: ["Mandatory onboarding", "Weekly push digest", "Internal referral system", "Alumni database", "Placement support"],
                offering: "High-touch placement and resume-to-recruiter pipeline"
              },
              {
                name: "NSBE", sub: "National Society of Black Engineers (Duke chapter)", members: "70+", color: "bg-orange-50 border-orange-100", textColor: "text-orange-900",
                engagement: ["Peer support (GroupMe)", "Social-professional blend", "National network", "Big tech workshops", "Word-of-mouth marketing"],
                offering: "Direct, high-trust corporate pipelines"
              },
              {
                name: "BOW", sub: "Business Oriented Women", members: "300+", color: "bg-blue-50 border-blue-100", textColor: "text-blue-900",
                engagement: ["20+ events/month", "Industry tracks (IB/Consulting)", "Recruiter access", "Structured coffee chats"],
                offering: "Niche programming and professional networking opportunity"
              },
              {
                name: "SWE", sub: "Society of Women Engineers (Duke chapter)", members: "200+", color: "bg-emerald-50 border-emerald-100", textColor: "text-emerald-900",
                engagement: ["Networking dinners", "Technical skill workshops", "Conference access", "Peer mentorship pairings"],
                offering: "Industry-aligned professional development and networking"
              }
            ].map((org, idx) => (
              <div key={idx} className={`rounded-xl border px-4 py-3 ${org.color} flex flex-col sm:flex-row gap-3 sm:gap-4`}>
                <div className="sm:w-32 shrink-0 border-b sm:border-b-0 sm:border-r border-black/5 pb-2 sm:pb-0 sm:pr-4">
                  <h4 className={`text-base font-bold leading-tight ${org.textColor}`}>{org.name}</h4>
                  <p className="text-[9px] font-medium text-gray-500 leading-tight mb-1">{org.sub}</p>
                  <div className="flex items-center gap-1.5 sm:block">
                    <span className={`text-[10px] font-bold ${org.textColor}`}>{org.members}</span>
                    <span className="text-[8px] text-gray-400 font-normal uppercase">Active</span>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2"> 
                    {org.engagement.map((item, i) => (
                      <div key={i} className="text-[10px] text-gray-700 flex items-start leading-tight min-w-[120px] flex-1">
                        <span className="mr-1 text-gray-400">✓</span> {item}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-1.5 border-t border-black/5">
                    <p className="text-[10px] font-medium text-gray-800 leading-tight">
                      <span className="text-gray-400 uppercase text-[8px] mr-1">Key Offering:</span>
                      {org.offering}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. COMPARATIVE SUMMARY */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-5 rounded bg-[#14526b] flex items-center justify-center text-white text-[10px] font-bold">3</div>
            <h3 className="text-sm font-semibold text-[#2C3E3A]">Comparative Summary</h3>
          </div>
          <div className="bg-white rounded-xl border border-[#E5E0D5] overflow-hidden">
            <table className="w-full text-[11px]">
              <thead className="bg-[#14526b] text-white">
                <tr className="divide-x divide-white/10">
                  <th className="text-left py-2 px-4 font-medium w-1/4">Dimension</th>
                  <th className="text-left py-2 px-4 font-medium bg-[#0f3f52] w-1/4">Duke (Current)</th>
                  <th className="text-left py-2 px-4 font-medium w-1/4">Peer Universities</th>
                  <th className="text-left py-2 px-4 font-medium w-1/4">Student Orgs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { dim: "Homepage CTAs", duke: "None visible", peers: "1-4 visible CTAs", orgs: "N/A" },
                  { dim: "Content Organization", duke: "Process-based", peers: "Audience-based", orgs: "Industry tracks" },
                  { dim: "Advising Access", duke: "4+ clicks", peers: "1-2 clicks", orgs: "Direct, peer-based" },
                  { dim: "Communication Model", duke: "Pull", peers: "Pull", orgs: "Push" },
                ].map((row, i) => (
                  <tr key={i} className="divide-x divide-gray-50">
                    <td className="py-1.5 px-4 font-semibold text-[#2C3E3A]">{row.dim}</td>
                    <td className="py-1.5 px-4 text-red-600 bg-red-50/30 font-medium">{row.duke}</td>
                    <td className="py-1.5 px-4 text-[#5C7A6F]">{row.peers}</td>
                    <td className="py-1.5 px-4 text-[#5C7A6F]">{row.orgs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* STRATEGIC IMPLICATIONS */}
        <div className="rounded-2xl bg-[#eff1ee] border border-[#d4cfc4] p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#5C7A6F]">Synthesis</p>
              <h3 className="mt-1 text-2xl font-extralight leading-tight text-[#2C3E3A]">
                Implications for <span className="font-serif italic text-[#6e877e]">Redesign</span>
              </h3>
            </div>

            <div className="md:w-2/3 grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#5C7A6F] border-b border-[#d4cfc4]/40 pb-1 mb-3">Peer University Patterns</h4>
                <div className="space-y-3">
                  {[
                    { title: "Audience-Based Navigation", outcome: "Match search behavior with **actionable, intuitive pathways**." },
                    { title: "Elevate 'Book an Appointment'", outcome: "Prioritize CTAs **accessible on the homepage**." }
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-[11px] font-bold text-[#2C3E3A]">{item.title}</p>
                      <p className="text-[10px] text-[#5C7A6F]">
                        {item.outcome.split('**').map((part, index) => index % 2 === 1 ? <strong key={index} className="text-[#6c91a0]">{part}</strong> : part)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#5C7A6F] border-b border-[#d4cfc4]/40 pb-1 mb-3">Student Org Insights</h4>
                <div className="space-y-3">
                  {[
                    { title: "Industry-Specific Tracks", outcome: "Map resources by industry to accelerate discovery." },
                    { title: "Identity-Based Success", outcome: "**NSBE/DTECH** validates demand for identity-based support." }
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-[11px] font-bold text-[#2C3E3A]">{item.title}</p>
                      <p className="text-[10px] text-[#5C7A6F]">
                        {item.outcome.split('**').map((part, index) => index % 2 === 1 ? <strong key={index} className="text-[#6c91a0]">{part}</strong> : part)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 06. PERSONAS ============ */}
      <section className="bg-[#F9F8F6] py-16 border-y border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#14526b] font-bold">06. Personas</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extralight text-[#2C3E3A] mb-10 tracking-tight leading-tight">
            User Needs <span className="font-serif italic text-[#6e877e]">Synthesis</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              {
                type: "The First-Timer",
                accent: "bg-green-600",
                year: "Freshman · Economics · First-Gen",
                bio: "Needs a low-stakes entry point. Jargon and complex site architecture create an immediate 'bounce' effect.",
                goals: ["Explore career paths", "Draft first resume", "Identify internships"],
                behaviors: ["Relies on peers", "Struggles with jargon"],
                implications: [
                  { 
                    feat: "Curated Underclassman Hub", 
                    how: "Implementing a 'Getting Started' landing page that replaces institutional labels with a step-by-step 1-2-3 checklist for beginners." 
                  },
                  { 
                    feat: "Task-Based Visual Navigation", 
                    how: "Replacing text-heavy menus with icon-driven tiles (e.g., 'Build a Resume', 'Find a Major') to bypass cognitive load." 
                  }
                ]
              },
              {
                type: "The International Student",
                accent: "bg-blue-600",
                year: "Freshman · Chemistry · Shenzhen",
                bio: "Faces legal and cultural barriers. Requires explicit clarity on visa eligibility and localized career norms.",
                goals: ["Visa-friendly roles", "CPT/OPT clarity", "US resume norms"],
                behaviors: ["'International' filter first", "Fine print scrutiny", "Credential translation"],
                implications: [
                  { 
                    feat: "Integrated Global Identity Hub", 
                    how: "Centralizing F-1/J-1 legal info and tagging every event/job with 'Visa Sponsor' status icons for immediate eligibility filtering." 
                  },
                  { 
                    feat: "Identity-Led Affinity Mapping", 
                    how: "Implementing a top-level 'Affinity' filter to connect students with international alumni who have successfully navigated similar visa paths." 
                  }
                ]
              },
              {
                type: "The Experienced Seeker",
                accent: "bg-purple-600",
                year: "Senior · CS · 2 Internships",
                bio: "Needs technical refinement and high-level strategy. Generic resources feel like a waste of time.",
                goals: ["Technical interview prep", "Alumni networking", "Conversion strategy"],
                behaviors: ["Uses advanced filters", "Skips basic content", "Seeks recruiter access"],
                implications: [
                  { 
                    feat: "Verticalized Industry Tracks", 
                    how: "Creating deep-dive silos for Tech/Finance that feature technical case studies and niche-specific alumni contact databases." 
                  },
                  { 
                    feat: "Advanced 'Strategy-First' Content", 
                    how: "Replacing basic 'Resume 101' with expert modules on 'Offer Negotiation' and 'Technical System Design' interview prep." 
                  }
                ]
              }
            ].map((p, i) => (
              <div key={i} className="bg-white border border-[#E5E0D5] rounded-xl p-5 flex flex-col hover:shadow-md transition-shadow">
                <div className="mb-4 border-b border-[#F5F3EF] pb-4">
                  <span className={`inline-block px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest text-white mb-2 ${p.accent}`}>
                    {p.type}
                  </span>
                  <p className="text-[11px] font-bold text-[#2C3E3A] mb-1">{p.year}</p>
                  <p className="text-[10px] leading-relaxed text-[#5C7A6F] italic">{p.bio}</p>
                </div>

                <div className="space-y-5 flex-grow">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[8px] uppercase font-bold text-[#14526b] mb-2 tracking-widest">Goals</p>
                      <ul className="space-y-1.5">
                        {p.goals.map((g, j) => (
                          <li key={j} className="text-[9px] text-[#2C3E3A] leading-tight flex gap-1">
                            <span className="text-[#A8C5BA]">●</span> {g}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[8px] uppercase font-bold text-[#14526b] mb-2 tracking-widest">Behaviors</p>
                      <ul className="space-y-1.5">
                        {p.behaviors.map((b, j) => (
                          <li key={j} className="text-[9px] text-[#5C7A6F] leading-tight flex gap-1">
                            <span className="opacity-40">→</span> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[8px] uppercase font-bold text-[#14526b] mb-3 tracking-widest">Design Implementation</p>
                    <div className="space-y-2">
                      {p.implications.map((imp, j) => (
                        <div key={j} className="bg-[#F9F8F6] p-3 rounded-lg border border-[#E5E0D5]/50">
                          <p className="text-[10px] font-bold text-[#2C3E3A] mb-1 leading-none">{imp.feat}</p>
                          <p className="text-[9px] text-[#5C7A6F] leading-snug">
                            <span className="text-[#14526b] font-semibold">How:</span> {imp.how}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 07. DESIGN EVOLUTION ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#14526b] font-bold">07. Redesign</p>
        </div>
       
        {/* Strategic Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-14 py-8 border-y border-[#E5E0D5]/50">
          {[
            { title: "Action Over Explanation", desc: "Prioritizing task-based pathways over static administrative text." },
            { title: "Stage-Based Navigation", desc: "Aligning architecture with the student journey: Explore → Prepare → Apply." },
            { title: "Clarify Utility", desc: "Elevating high-impact tools from sub-menus to immediate entry points." }
          ].map((p, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-3xl font-serif italic text-[#A8C5BA] leading-none">0{i + 1}</span>
              <div>
                <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#14526b] mb-2">{p.title}</h4>
                <p className="text-sm text-[#5C7A6F] leading-relaxed font-light">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Evolution Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          
          {/* ORIGINAL */}
          <div className="flex flex-col border border-[#E5E0D5] rounded-xl overflow-hidden bg-white">
            <div className="bg-[#FEE2E2] px-4 py-2">
              <span className="text-[10px] font-bold text-[#991B1B] uppercase tracking-widest">Original Site</span>
            </div>
            <div className="aspect-[16/10] bg-gray-100 relative border-b border-[#F5F3EF]">
              <img src="/ch-before.png" alt="Original Hub Design" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="bg-[#FEE2E2]/30 rounded-lg px-3 py-2 mb-4">
                <p className="text-[10px] text-[#991B1B] leading-relaxed">
                Vague hero messaging and a lack of a clear focal point created immediate navigational friction, leaving users overwhelmed and without a clear next step.
                </p>
              </div>
              
              <p className="text-[9px] font-bold uppercase text-[#991B1B] mb-2 tracking-widest">Issues Identified</p>
              <ul className="text-[10px] text-[#5C7A6F] space-y-2 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-red-400 mt-0.5">●</span>
                  <span><strong className="text-[#2C3E3A]">Information Overload:</strong> Mission text dominated above-the-fold space</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-0.5">●</span>
                  <span><strong className="text-[#2C3E3A]">Semantic Friction:</strong> Ambiguous navigation labeling fails to map to user goals</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-0.5">●</span>
                  <span><strong className="text-[#2C3E3A]">Buried actions:</strong> Lack of prominent CTAs above fold</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-0.5">●</span>
                  <span><strong className="text-[#2C3E3A]">Visual noise:</strong> Yellow-on-white overlays and competing graphics reduced legibility</span>
                </li>
              </ul>
            </div>
          </div>

          {/* PROTOTYPE */}
          <div className="flex flex-col border border-[#E5E0D5] rounded-xl overflow-hidden bg-white">
            <div className="bg-[#FEF3C7] px-4 py-2">
              <span className="text-[10px] font-bold text-[#92400E] uppercase tracking-widest">Initial Prototype</span>
            </div>
            <div className="aspect-[16/10] bg-gray-100 relative border-b border-[#F5F3EF]">
              <img src="/ch-prototype.png" alt="Iterative Prototype" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="bg-[#FEF3C7]/30 rounded-lg px-3 py-2 mb-4">
                <p className="text-[10px] text-[#92400E] leading-relaxed">
                  Utility dramatically improved with visible CTAs and restructured navigation. However, the aggressive blue saturation and dense multi-column layout flattened the visual hierarchy, creating legibility hurdles and visual noise.
                </p>
              </div>
              
              <p className="text-[9px] font-bold uppercase text-[#065F46] mb-2 tracking-widest">Improvements</p>
              <ul className="text-[10px] text-[#5C7A6F] space-y-1.5 leading-relaxed mb-4">
                <li className="flex gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Action-first hero with "Launch Your Career" and 4 prominent CTAs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Restructured navigation with task-based categories (Jobs, Resources, Advising)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>High-contrast background organizes content into defined "cards" </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>"Upcoming Events" section updated with category filters</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Additional entry points added with "Spotlight Resources" section</span>
                </li>
              </ul>
              
              <p className="text-[9px] font-bold uppercase text-[#991B1B] mb-2 tracking-widest">Remaining Issues</p>
              <ul className="text-[10px] text-[#5C7A6F] space-y-1.5 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-red-400 mt-0.5">●</span>
                  <span>Design fails to convey institutional identity</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-0.5">●</span>
                  <span>4 hero CTAs created decision paralysis; unclear primary action</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-0.5">●</span>
                  <span>Text legibility issues persisted over background imagery</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FINAL */}
          <div className="flex flex-col border-2 border-[#10B981] rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="bg-[#D1FAE5] px-4 py-2">
              <span className="text-[10px] font-bold text-[#065F46] uppercase tracking-widest">Final Design</span>
            </div>
            <div className="aspect-[16/10] bg-gray-100 relative border-b border-[#F5F3EF]">
              <img src="/ch-final.png" alt="Final Redesign" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="bg-[#D1FAE5]/30 rounded-lg px-3 py-2 mb-4">
                <p className="text-[10px] text-[#065F46] leading-relaxed">
                  Balances utility with institutional messaging. Uses clear visual hierarchy and task-first architecture to facilitate intuitive pathfinding and user discovery.
                </p>
              </div>
              
              <p className="text-[9px] font-bold uppercase text-[#065F46] mb-2 tracking-widest">Key Refinements</p>
              <ul className="text-[10px] text-[#2C3E3A] space-y-2 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#10B981] mt-0.5">●</span>
                  <span>CTAs reduced to 2 core actions (Schedule Advising, Find Opportunities); Handshake/LinkedIn moved to persistent utility bar</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#10B981] mt-0.5">●</span>
                  <span>Chapel imagery with glassmorphism overlay ensures text legibility</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#10B981] mt-0.5">●</span>
                  <span>Refined global navigation into action-oriented categories</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#10B981] mt-0.5">●</span>
                  <span>Dedicated International and Freshman Hubs address persona-specific needs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#10B981] mt-0.5">●</span>
                  <span>Guiding mission retained as subtle sub-hero element (visible but not obstructive)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 08. REFLECTION & NEXT STEPS ============ */}
      <section className="bg-[#f8f7f4] py-16 border-t border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#14526b] font-bold">08. Reflection</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-extralight text-[#2C3E3A] mb-10 leading-tight tracking-tight">
                Learning to see services as products
              </h2>
              
              <div className="space-y-10">
                {[
                  { title: "The 'Invisible' Competition", detail: "I didn't initially view university services as 'products' until I saw students choosing GroupMe and student orgs (DTECH, BOW) over the Hub. It shifted my perspective—we weren't just fixing a site; we were competing for trust." },
                  { title: "Assumptions vs. Card Sorts", detail: "The mismatch between the Hub's org-chart IA and actual student mental models was huge. Watching people physically group resources exposed assumptions in the current design that interviews alone never would have caught." },
                  { title: "Mixed-Method Clarity", detail: "Heatmaps showed me the 'what' (where people clicked), but talking to students gave me the 'why.' Using both was the only way to move from identifying problems to actually designing solutions." }
                ].map((item, i) => (
                  <div key={i} className="relative pl-10">
                    <span className="absolute left-0 top-0 text-[11px] font-bold text-[#A8C5BA] tracking-[0.2em] font-mono">0{i + 1}</span>
                    <p className="text-sm font-bold text-[#2C3E3A] mb-2 uppercase tracking-widest">{item.title}</p>
                    <p className="text-[13px] text-[#5C7A6F] leading-relaxed font-light">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E5E0D5] rounded-2xl p-8 border-b-4 border-b-[#14526b]/10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#14526b] mb-8">Looking Ahead: Phase 2</h3>
                
                <div className="grid gap-4">
                  {[
                    { action: "Hero CTA A/B Testing", detail: "Validating whether 'Explore Paths' or 'Book Advisor' drives more high-value engagement on the homepage." },
                    { action: "Tree Testing the IA", detail: "Running the new industry-based navigation through Treejack to ensure the categorization works at scale." },
                    { action: "Org Leader Co-Design", detail: "Partnering with DTECH and NSBE to integrate their successful peer-led patterns directly into the Hub." },
                    { action: "Mandatory Freshmen Onboarding", detail: "Collaborating with orientation to shift the Hub from an 'elective' resource to a standard part of the freshman curriculum." }
                  ].map((item, i) => (
                    <div key={i} className="group p-4 border border-[#F5F3EF] hover:border-[#A8C5BA] hover:bg-[#F9FAFB] rounded-xl transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-7 h-7 rounded-lg bg-[#F5F3EF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#14526b] transition-colors">
                          <span className="text-[10px] font-bold text-[#14526b] group-hover:text-white">{i + 1}</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#2C3E3A] mb-1 tracking-tight">{item.action}</p>
                          <p className="text-[11px] text-[#5C7A6F] leading-normal font-light">{item.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-[#E5E0D5]/50">
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl text-[#2C3E3A] font-extralight leading-relaxed italic">
                I really enjoyed this project because it forced me to think <span className="text-[#14526b] font-medium not-italic underline decoration-[#A8C5BA] underline-offset-8">end-to-end</span>. 
                It wasn&apos;t just about a better website—it was about understanding the nuances of the student experience. 
                We focused on connecting official support with organic networks so the entire journey feels like 
                <strong> one continuous, cohesive experience</strong>, regardless of where a student starts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}