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
          <div className="w-full max-w-7xl mx-auto px-6 pb-14 md:pb-20 drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
            <p className="text-[11.5px] md:text-[13px] tracking-[0.4em] uppercase text-[#162f62] mb-1">
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
        <div className="max-w-5xl w-full bg-gradient-to-r from-[#ffc9d9] via-[#c2e3ff] to-[#c7f3d2] p-[1px] rounded-[24px] shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
          {/* CHANGED: justify-between -> justify-center, and increased gap (gap-8 md:gap-16) */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[22px] px-8 py-3 flex flex-wrap items-center justify-center gap-8 md:gap-20 text-[#0d365e]">
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
      <section className="border-b border-[#E0D9CE]/0">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-10">
          {[
            ["Role", ["UX Research Lead", "Product Designer"]],
            ["Team", ["3 Designers", "1 Outreach", "1 Operations"]],
            ["Skills", ["User Research", "Information Architecture", "Product Strategy", "UI & Interaction Design"]],
            ["Tools", ["Figma", "FigJam", "Hotjar"]],
          ].map(([title, items], i) => (
            <div key={i}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8173] mb-2">{title as string}</p>
              <ul className="text-sm text-[#2C3E3A] font-medium space-y-1">
                {(items as string[]).map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 01. THE PROBLEM ============ */}
      <section className="max-w-6xl mx-auto px-6 py-20 font-sans text-[#2C3E3A]">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#14526b]"></span>
          <p className="text-xs tracking-[0.2em] uppercase text-[#14526b] font-bold">01. The Problem</p>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extralight text-[#2C3E3A] mb-6 leading-tight max-w-4xl">
          Students weren&apos;t using the Career Hub.
        </h2>
        
        <p className="text-lg text-[#5C7A6F] leading-relaxed font-light mb-12 max-w-3xl">
          Despite Duke&apos;s 1:233 student-to-staff ratio (outperforming peer institutions like UPenn and UNC), 
          students defaulted to student-run organizations like DTECH and NSBE. The Career Hub&apos;s UX undermined its value.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "/ch-1.png",
              stat: "76%",
      title: " Reported High Cognitive Load",
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
            <div key={i} className="bg-white border border-[#D4CFC4] rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                   <Image src={item.icon} alt="" fill className="object-contain" />
                </div>
                <div>
                  <p className="text-3xl font-light text-[#14526b]">{item.stat}</p>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-[#8C8173]">{item.title}</p>
                </div>
              </div>
              <p className="text-sm text-[#5C7A6F] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 02. THE PROCESS ============ */}
      <section className="bg-white py-20 border-y border-[#D4CFC4]/50 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#14526b]"></span>
            <p className="text-xs tracking-[0.2em] uppercase font-bold font-sans text-[#2C3E3A]">02. The Process</p>
          </div>
          
          <p className="text-lg text-[#5C7A6F] font-light mb-12 max-w-3xl">
            I led a mixed-methods study combining behavioral data with qualitative insights 
            to understand the disconnect between user intent and site performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={i} className="group p-6 bg-[#F5F3EF] rounded-2xl border border-transparent hover:border-[#D4CFC4] hover:bg-white transition-all">
                <span className="text-4xl font-serif text-[#D4CFC4] group-hover:text-[#A8C5BA] mb-2 block">0{i + 1}</span>
                <h3 className="text-lg font-bold text-[#2C3E3A] mb-1">{step.phase}</h3>
                <p className="text-[10px] uppercase tracking-widest text-[#8C8173] mb-4">{step.week}</p>
                <ul className="space-y-2 mb-6 min-h-[100px]">
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
     <section className="max-w-6xl mx-auto px-6 py-20 font-sans text-[#2C3E3A]">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-[#14526b]"></span>
          <p className="text-xs tracking-[0.2em] uppercase text-[#14526b] font-bold ">03. Research Findings</p>
        </div>

        {/* A. Usability Testing (Restored Original Content) */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#2C3E3A] mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#14526b] text-white text-xs flex items-center justify-center">A</span>
            Usability Testing
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: Methodology & Stats */}
            <div className="bg-white border border-[#D4CFC4]/40 rounded-xl p-5 shadow-sm">
              <p className="text-[10px] uppercase tracking-wider text-[#8C8173] mb-3 font-bold">Methodology</p>
              <p className="text-sm text-[#5C7A6F] font-light mb-6 leading-relaxed">
                8 participants split into two groups: Group 1 had specific tasks (book an advisor, find resume help), Group 2 explored freely. Think-aloud protocol captured real-time confusion.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F5F3EF] rounded-lg p-3">
                  <p className="text-3xl font-light text-[#14526b] mb-1">76%</p>
                  <p className="text-[11px] text-[#5C7A6F] leading-tight">found homepage text overwhelming</p>
                </div>
                <div className="bg-[#F5F3EF] rounded-lg p-3">
                  <p className="text-3xl font-light text-[#14526b] mb-1">1/8</p>
                  <p className="text-[11px] text-[#5C7A6F] leading-tight">found advisor booking on first try</p>
                </div>
              </div>
            </div>
            
            {/* Right: Key Quotes (Restored) */}
            <div className="bg-white border border-[#D4CFC4]/40 rounded-xl p-5 shadow-sm">
              <p className="text-[10px] uppercase tracking-wider text-[#8C8173] mb-3 font-bold">Key Quotes</p>
              <div className="space-y-4">
                {[
                  ["User A", "This mission info should be on an About page, not the homepage. I just want to find a job."],
                  ["User C", "The search results look like a basic Google page. Videos and Events returned nothing."],
                  ["User D", "I only found booking when I clicked a specific career field... I didn't know I could just book a general appointment."],
                ].map(([user, quote], i) => (
                  <div key={i} className="border-l-2 border-[#14526b]/30 pl-3">
                    <p className="text-xs text-[#5C7A6F] italic mb-1">&quot;{quote}&quot;</p>
                    <p className="text-[10px] text-[#14526b] font-bold">{user}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* B. Heatmap Analysis (Fixed Layout) */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#2C3E3A] mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#14526b] text-white text-xs flex items-center justify-center">B</span>
            Heatmap Analysis
          </h3>
          
          {/* Flex container keeps image and text close */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Image Container: constrained width */}
            <div className="w-full md:max-w-xl flex-shrink-0">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[#D4CFC4] shadow-sm">
                <Image 
                  src="/ch-heatmap.png" 
                  alt="Heatmap showing dead clicks" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
            
            {/* Text Container: constrained width */}
            <div className="w-full md:max-w-md bg-white border border-[#D4CFC4] rounded-xl p-5 shadow-sm">
              <p className="text-[10px] uppercase tracking-wider text-[#8C8173] mb-3 font-bold">Findings</p>
              <ul className="space-y-3">
                {[
                  { area: "High engagement", detail: "Navigation dropdowns (especially Career Communities), Personalize button, Upcoming Events" },
                  { area: "Low engagement", detail: "Mission statement, general announcements, welcome text" },
                  { area: "Critical issue", detail: "\"Explore Options\" banner attracted significant hover attention but was NOT clickable" },
                ].map((item, i) => (
                  <li key={i} className="text-xs leading-relaxed">
                    <span className="font-bold text-[#14526b]">{item.area}: </span>
                    <span className="text-[#5C7A6F]">{item.detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs text-red-700 leading-snug">
                  <strong>Design debt:</strong> Non-interactive elements styled like buttons create 
                  dead ends and erode user trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* C. Focus Groups (Cleaned up loop) */}
        <div>
          <h3 className="text-lg font-semibold text-[#2C3E3A] mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#14526b] text-white text-xs flex items-center justify-center">C</span>
            Focus Groups
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                theme: "Generic advice",
                insight: "Students pursuing data science received feedback like \"change BS to Bachelor of Science\"—no industry-specific guidance on presenting technical skills.",
                implication: "Need specialized advisors or industry-specific resources"
              },
              {
                theme: "Automated over personal",
                insight: "Mock interview requests redirected to online tools instead of in-person sessions. Students felt Career Center lacked human touch.",
                implication: "Surface 1:1 advising more prominently"
              },
              {
                theme: "Poor marketing",
                insight: "Students discovered Handshake from peers, not Career Center. Many didn't know about alumni database until junior year.",
                implication: "Proactive onboarding during orientation"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#D4CFC4] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <p className="text-sm font-bold text-[#2C3E3A] mb-2">{item.theme}</p>
                <p className="text-xs text-[#5C7A6F] font-light mb-4 flex-grow leading-relaxed">{item.insight}</p>
                <div className="bg-[#14526b]/5 rounded-lg px-3 py-2 mt-auto">
                  <p className="text-[9px] uppercase tracking-wider text-[#14526b] font-bold mb-1">Design implication</p>
                  <p className="text-xs text-[#2C3E3A] font-medium leading-tight">{item.implication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* ============ 04. CARD SORT ANALYSIS BOARD ============ */}
<section className="bg-[#e8e4dc] py-20 border-t border-[#d4cfc4]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="max-w-3xl mb-12">
      <p className="text-[11px] tracking-[0.4em] uppercase text-[#14526b] font-semibold mb-4">04. Info Architecture</p>
      <h2 className="text-3xl md:text-4xl font-extralight text-[#2C3E3A] mb-4 leading-tight">
        Rebuilding the mental model
      </h2>
      <p className="text-lg text-[#5C7A6F] font-light leading-relaxed">
        To align the Hub with student thinking, I led a hybrid card sort. By analyzing how participants grouped 87 items, we dismantled "organizational jargon" in favor of a task-based hierarchy.
      </p>
    </div>

    {/* MAIN ANALYSIS DASHBOARD */}
    <div className="bg-[#f9f8f6] border border-[#d4cfc4] rounded-3xl p-6 md:p-10 shadow-xl text-[#2C3E3A]">
      
      {/* 1. Header & Methodology Stats */}
      <div className="flex flex-wrap items-center justify-between gap-6 mb-10 pb-8 border-b border-[#d4cfc4]">
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[#8C8173] font-bold mb-1">Methodology</p>
            <p className="text-sm font-bold text-[#14526b]">Hybrid Open Sort</p>
            <p className="text-[10px] text-[#5C7A6F]">OptimalSort + In-Person</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[#8C8173] font-bold mb-1">Participants</p>
            <p className="text-sm font-bold text-[#14526b]">n = 10 Duke Students</p>
            <p className="text-[10px] text-[#5C7A6F]">Fr, So, Jr, Sr, Grad Mix</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[#8C8173] font-bold mb-1">Results</p>
            <p className="text-sm font-bold text-[#14526b]">87 Items · 8 Categories</p>
            <p className="text-[10px] text-[#5C7A6F]">73% Avg. Agreement</p>
          </div>
        </div>
        
        {/* Agreement Legend */}
        <div className="bg-white border border-[#d4cfc4] p-3 rounded-xl flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#14526b]"></div>
            <span className="text-[10px] font-bold">10/10 Perfect</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#14526b]/40"></div>
            <span className="text-[10px] font-bold">5-7/10 Mod.</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-200"></div>
            <span className="text-[10px] font-bold">≤2 Contested</span>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-[1.2fr_0.8fr] gap-12 mb-12">
        
        {/* 2. LEFT: Similarity Matrix (Heatmap) */}
        <div className="bg-white rounded-2xl border border-[#d4cfc4] p-6 shadow-sm flex flex-col">
          <div className="mb-6">
            <h3 className="text-base font-bold">Category Similarity Matrix</h3>
            <p className="text-xs text-[#5C7A6F]">Visualizing cross-category grouping frequency.</p>
          </div>

          <div className="overflow-x-auto pb-4 flex justify-center">
            <div className="min-w-[450px]">
              <div className="grid grid-cols-[80px_repeat(8,1fr)] gap-px border border-[#d4cfc4] bg-[#d4cfc4]">
                <div className="bg-[#f9f8f6]"></div>
                {["Ab", "Pr", "Co", "Af", "Re", "Ad", "Jo", "Fe"].map((h, i) => (
                  <div key={i} className="bg-[#f9f8f6] py-2 text-center text-[9px] font-bold text-[#14526b]">{h}</div>
                ))}
                
                {[
                  { l: "About", d: ["-", "21", "8", "5", "15", "18", "7", "9"] },
                  { l: "Process", d: ["21", "-", "12", "6", "31", "24", "9", "14"] },
                  { l: "Comm", d: ["8", "12", "-", "42", "16", "11", "28", "35"] },
                  { l: "Affin", d: ["5", "6", "42", "-", "13", "19", "14", "22"] },
                  { l: "Res", d: ["15", "31", "16", "13", "-", "48", "26", "21"] },
                  { l: "Adv", d: ["18", "24", "11", "19", "48", "-", "33", "17"] },
                  { l: "Jobs", d: ["7", "9", "28", "14", "26", "33", "-", "45"] },
                  { l: "Feat", d: ["9", "14", "35", "22", "21", "17", "45", "-"] },
                ].map((row, i) => (
                  <Fragment key={i}>
                    <div className="bg-[#f9f8f6] py-2 px-2 text-[9px] font-bold">{row.l}</div>
                    {row.d.map((val, j) => {
                      const num = parseInt(val);
                      const isNumber = !isNaN(num);
                      return (
                        <div 
                          key={j} 
                          className="py-2 text-center text-[9px] font-medium"
                          style={{ 
                            backgroundColor: !isNumber ? "#ffffff" : `rgba(20, 82, 107, ${num/100 + 0.05})`,
                            color: isNumber && num > 40 ? "white" : "#2C3E3A"
                          }}
                        >
                          {val}{isNumber ? '%' : ''}
                        </div>
                      )
                    })}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. RIGHT: Category Breakdown */}
        <div className="space-y-4">
          <h3 className="text-base font-bold mb-2">Category Agreement & Item Clustering</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { n: "Advising", s: "10/10", i: "Schedule 1:1, Drop-In, Mock Interviews" },
              { n: "Jobs & Internships", s: "10/10", i: "Handshake, Career Fairs, Search" },
              { n: "Resources", s: "10/10", i: "Resume Templates, Cover Letter Guide" },
              { n: "Career Communities", s: "10/10", i: "Finance, Technology, Healthcare" },
              { n: "Affinity Groups", s: "10/10", i: "International, First-Gen, Veterans" },
              { n: "Featured Opps", s: "10/10", i: "Duke-Exclusive, Silicon Valley" }
            ].map((cat, i) => (
              <div key={i} className="bg-white border border-[#d4cfc4] p-3 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-1 text-[#2C3E3A]">
                  <p className="text-xs font-bold text-[#14526b]">{cat.n}</p>
                  <span className="text-[8px] bg-green-50 text-green-700 font-bold px-1.5 py-0.5 rounded border border-green-100">{cat.s}</span>
                </div>
                <p className="text-[9px] text-[#8C8173] leading-tight">{cat.i}</p>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 mt-6">
              <p className="text-[10px] font-bold text-orange-800 uppercase tracking-widest mb-2">⚠️ Contested Items — Needed Cross-Linking</p>
              <div className="grid grid-cols-1 gap-2">
                  {[
                    { item: "OPT/CPT Resources", split: "Affinity vs. Jobs vs. Resources" },
                    { item: "Alumni Database", split: "Advising vs. Resources vs. Communities" },
                    { item: "Career Workshop Calendar", split: "Resources vs. About vs. Process" }
                  ].map((ci, i) => (
                      <div key={i} className="flex justify-between items-center text-[10px]">
                          <span className="font-semibold text-orange-900">{ci.item}</span>
                          <span className="text-orange-700 opacity-70 italic">{ci.split}</span>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </div>

      {/* 4. QUALITATIVE INSIGHTS & QUOTES */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="space-y-4">
           <h4 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-[#d4cfc4] pb-2">Key Findings</h4>
           {[
             { f: "The 'Interactive' Split", d: "Participants struggled to distinguish between guides (passive) and appointments (active services).", r: "Decision: Split 'Resources' into 'Tools' vs 'Advising'." },
             { f: "Industry First", d: "100% agreement on industry-based clusters (Finance, Tech, Healthcare).", r: "Decision: Prominently feature 'Career Communities'." },
             { f: "Marketing vs. Utilities", d: "Students viewed 'Featured Opps' as special jobs, not a separate section.", r: "Decision: Integrated Featured items into main Job board." }
           ].map((item, i) => (
             <div key={i} className="bg-white p-4 rounded-xl border border-[#d4cfc4]/60">
                <p className="text-xs font-bold text-[#14526b] mb-1">{item.f}</p>
                <p className="text-[11px] text-[#5C7A6F] mb-2 leading-relaxed">{item.d}</p>
                <p className="text-[10px] font-bold uppercase tracking-tighter opacity-80">{item.r}</p>
             </div>
           ))}
        </div>

        <div className="space-y-4">
           <h4 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-[#d4cfc4] pb-2">User Feedback</h4>
           <div className="grid gap-3">
             {[
               { q: "I think about careers by industry. That's how my brain works when I'm job hunting.", p: "P3 (Senior)" },
               { q: "As an international student, I'd look for visa stuff under my identity group, not buried in general resources.", p: "P4 (Grad)" },
               { q: "Featured opportunities feels like marketing. I'd expect to find those under Jobs.", p: "P2 (Junior)" },
               { q: "I kept going back and forth on alumni—is it a resource or networking/advising?", p: "P1 (Sophomore)" }
             ].map((quote, i) => (
               <div key={i} className="bg-[#f5f3ef] p-4 rounded-xl border-l-4 border-[#14526b]">
                  <p className="text-xs italic text-[#5C7A6F] mb-1 leading-relaxed">"{quote.q}"</p>
                  <p className="text-[10px] font-bold text-[#14526b]">— {quote.p}</p>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* 5. NEXT STEPS & TIMELINE */}
      <div className="bg-[#14526b] text-white rounded-2xl p-8">
         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-md">
               <p className="text-xs font-bold text-[#A8C5BA] uppercase tracking-[0.2em] mb-2">Moving Forward</p>
               <p className="text-sm font-light leading-relaxed text-[#f0f0f0]">
                 Using this IA, we moved into high-fidelity prototyping. The goal was to reduce click-depth for advising from 9.2 clicks to under 3.
               </p>
            </div>
            <div className="flex gap-4">
              {[
                { w: "W1", t: "Stakeholder Review" },
                { w: "W2", t: "IA Prototype" },
                { w: "W3", t: "Tree Testing (n=20)" },
                { w: "W4", t: "Final Handoff" }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold mb-2 bg-white/5">
                    {step.w}
                  </div>
                  <p className="text-[9px] font-medium opacity-70 max-w-[60px]">{step.t}</p>
                </div>
              ))}
            </div>
         </div>
      </div>

    </div>
  </div>
</section>


{/* ============ 05. COMPETITIVE ANALYSIS ============ */}
<section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#14526b] font-bold mb-4  font-sans">05. Competitive Analysis</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#2C3E3A] mb-4 leading-tight  font-sans">
            Benchmarking against peers &amp; alternatives
          </h2>
          <p className="text-base text-[#5C7A6F] font-light max-w-2xl leading-relaxed">
            I analyzed peer university career centers and Duke&apos;s pre-professional organizations to identify
            patterns in information architecture and engagement.
          </p>
        </div>

        {/* 1. UNIVERSITY COMPARISON TABLE */}
        <div className="mb-16  font-sans">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 rounded bg-[#14526b] flex items-center justify-center text-white text-xs font-bold">1</div>
            <h3 className="text-lg font-semibold text-[#2C3E3A]">Peer University Career Centers</h3>
          </div>

          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#F8FAFC] text-[#14526b] border-b border-[#E5E7EB]">
                  <tr>
                    <th className="py-4 px-6 font-semibold w-1/5">Institution</th>
                    <th className="py-4 px-6 font-semibold w-1/6">Staff Ratio</th>
                    <th className="py-4 px-6 font-semibold w-1/3">Above-the-Fold Strategy</th>
                    <th className="py-4 px-6 font-semibold">Primary Navigation Categories</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]">
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
                      <td className="py-5 px-6 font-medium text-[#2C3E3A]">{uni.name}</td>
                      <td className="py-5 px-6 text-[#5C7A6F] font-mono text-xs">{uni.ratio}</td>
                      <td className="py-5 px-6">
                        <ul className="space-y-1.5">
                          {uni.aboveFold.map((item, i) => (
                            <li key={i} className="flex items-start text-xs text-[#5C7A6F]">
                              <span className="mr-2 text-[#14526b]">•</span>{item}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex flex-wrap gap-2">
                          {/* BUBBLES UI */}
                          {uni.nav.map((cat, i) => (
                            <span key={i} className={`text-[10px] px-2.5 py-1 rounded-full font-medium border ${idx === 0 ? 'bg-red-50 text-red-700 border-red-100' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
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
          
          {/* Insight Box */}
          <div className="bg-[#F1F5F9] rounded-lg p-4 border-l-4 border-[#14526b] flex gap-4 mt-6  font-sans">
            <div className="text-xl">💡</div>
            <div>
              <h4 className="text-xs font-bold text-[#14526b] uppercase tracking-wide mb-1">Key Insight</h4>
              <p className="text-sm text-[#475569] ">Duke is the only institution organizing navigation by <strong>internal process</strong> rather than <strong>user audience</strong>, despite having the best staff-to-student ratio.</p>
            </div>
          </div>
        </div>

        {/* 2. PRE-PROFESSIONAL ORGS (Converted to Cards) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 rounded bg-[#14526b] flex items-center justify-center text-white text-xs font-bold">2</div>
            <h3 className="text-lg font-semibold text-[#2C3E3A]  font-sans">Duke Pre-Professional Organizations</h3>
          </div>

                  <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "DTECH",
                sub: "Women in Tech",
                members: "500+",
                color: "bg-purple-50 border-purple-100",
                textColor: "text-purple-900",
                engagement: ["Mandatory onboarding", 
                  "Proactive outreach (e.g. weekly push digest)", 
                  "Internal referral & job ecosystem",
                  "Access to alumni database",
                  "Placement support (e.g. coordinating internship housing)"],
                offering: "High-touch placement and resume-to-recruiter pipeline"
              },
              {
                name: "NSBE",
                sub: "Black Engineers",
                members: "70+",
                color: "bg-orange-50 border-orange-100",
                textColor: "text-orange-900",
                engagement: ["Peer support (e.g. GroupMe chat)", 
                  "Social-professional blending", 
                  "Access to national network and NSBE convention", 
                  "Big tech workshops (Google, Amazon, Capitol One, etc.)", 
                  "Word-of-mouth marketing"],
                offering: "Direct, high-trust corporate pipelines"
              },
              {
                name: "BOW",
                sub: "Business Women",
                members: "300+",
                color: "bg-blue-50 border-blue-100",
                textColor: "text-blue-900",
                engagement: ["20+ events/month", 
                  "Targeted industry tracks (IB, consulting)", 
                  "Recruiter access",
                  "Structured coffee chat system"],
                offering: "Niche programming and professional networking opportunity"
              },
              {
                name: "SWE",
                sub: "Women Engineers",
                members: "200+",
                color: "bg-emerald-50 border-emerald-100",
                textColor: "text-emerald-900",
                bulletColor: "text-emerald-400",
                engagement: [
                  "Corporate events (e.g.networking dinners)",
                  "Technical skill workshops",
                  "Regional and national conference access",
                  "Peer mentorship pairings"
                ],
                offering: "Industry-aligned professional development and networking"
              }
            ].map((org, idx) => (
              <div key={idx} className={`rounded-xl border p-5 ${org.color} shadow-sm hover:shadow-md transition-shadow`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className={`text-lg font-bold ${org.textColor}`}>{org.name}</h4>
                    <span className="text-xs font-medium text-gray-500 bg-white/60 px-2 py-0.5 rounded">{org.sub}</span>
                  </div>
                  <div className="text-right">
                    <span className={`block text-xs font-bold ${org.textColor}`}>{org.members}</span>
                    <span className="text-[9px] text-gray-400 uppercase">Active</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 tracking-wider font-semibold mb-2">Engagement Model</p>
                    <ul className="space-y-1">
                      {org.engagement.map((item, i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start">
                          <span className="mr-1.5 text-gray-400">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-black/5">
                    <p className="text-[10px] uppercase text-gray-400 tracking-wider font-semibold mb-1">Key Offering</p>
                    <p className="text-xs font-medium text-gray-800">{org.offering}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. COMPARATIVE SUMMARY */}
        <div className="mb-16  font-sans">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 rounded bg-[#14526b] flex items-center justify-center text-white text-xs font-bold">3</div>
            <h3 className="text-lg font-semibold text-[#2C3E3A]">Comparative Summary</h3>
          </div>

          <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-[#14526b] text-white">
                <tr>
                  <th className="text-left py-3 px-5 font-medium w-1/4">Dimension</th>
                  <th className="text-left py-3 px-5 font-medium bg-[#0f3f52] w-1/4">Duke Career Hub (Current)</th>
                  <th className="text-left py-3 px-5 font-medium w-1/4">Peer Universities</th>
                  <th className="text-left py-3 px-5 font-medium w-1/4">Student Orgs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { dim: "Homepage CTAs", duke: "None visible", peers: "1-4 visible CTAs", orgs: "N/A" },
                  { dim: "Content Organization", duke: "Process-based", peers: "Audience-based", orgs: "Industry tracks" },
                  { dim: "Advising Access", duke: "4+ clicks", peers: "1-2 clicks", orgs: "Direct, peer-based" },
                  { dim: "Communication Model", duke: "Pull", peers: "Pull", orgs: "Push" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-4 px-5 font-semibold text-[#2C3E3A]">{row.dim}</td>
                    <td className="py-4 px-5 text-red-600 bg-red-50/30 font-medium">{row.duke}</td>
                    <td className="py-4 px-5 text-[#5C7A6F]">{row.peers}</td>
                    <td className="py-4 px-5 text-[#5C7A6F]">{row.orgs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ============ 04. STRATEGIC IMPLICATIONS (Polished & Visible) ============ */}
<div className="relative overflow-hidden rounded-3xl bg-[#eff1ee] border border-[#807a6c] p-8 shadow-sm md:p-12">
  {/* Ambient Sage Accent */}
  <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#A8C5BA]/20 blur-3xl pointer-events-none" />
  
  <div className="relative z-10">
    <div className="mb-10">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#5C7A6F]">Synthesis</p>
      <h3 className="mt-2 text-3xl font-light leading-tight md:text-4xl text-[#2C3E3A]">
        Implications for <span className="font-serif italic text-[#6e877e]">Redesign</span>
      </h3>
    </div>

    <div className="grid gap-10 md:grid-cols-2 font-sans">
      {/* Group 1: Peer University Patterns */}
      <div className="space-y-6">
        {/* Changed border to be more visible against the background */}
        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5C7A6F] border-b border-[#807a6c]/30 pb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A8C5BA]" />
          From Peer Universities 
        </h4>
        
        <div className="grid gap-4">
          {[
            { 
              title: "Audience-Based Navigation", 
              outcome: "Navigation should match student search behavior and lead towards **actionable, intuitive pathways**." 
            },
            { 
              title: "Elevate 'Book an Appointment'", 
              outcome: "Prioritize high-impact CTAs and ensure booking buttons are **accessible on the homepage**." 
            }
          ].map((item, i) => (
            /* Unified background to white and border to visible taupe */
            <div key={i} className="group rounded-xl border border-[#807a6c]/20 bg-white/60 p-5 transition-all hover:border-[#14526b]/50 hover:bg-white">
              <p className="text-sm font-bold text-[#2C3E3A] mb-2">{item.title}</p>
              <p className="text-xs leading-relaxed text-[#5C7A6F]">
                {item.outcome.split('**').map((part, index) => 
                  index % 2 === 1 ? <strong key={index} className="text-[#6c91a0] font-bold">{part}</strong> : part
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Group 2: Student Org Insights */}
      <div className="space-y-6">
        {/* Consistent visible divider */}
        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5C7A6F] border-b border-[#807a6c]/30 pb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A8C5BA]" />
          from Student Orgs
        </h4>
        
        <div className="grid gap-4">
          {[
            { 
              title: "Industry-Specific Tracks", 
              outcome: "Map resources by industry to accelerate student discovery." 
            },
            { 
              title: "Identity-Based Community-Building", 
              outcome: "**NSBE/DTECH** success validates demand for identity-based support and the engagement it fosters." 
            }
          ].map((item, i) => (
            <div key={i} className="group rounded-xl border border-[#807a6c]/20 bg-white/60 p-5 transition-all hover:border-[#14526b]/50 hover:bg-white">
              <p className="text-sm font-bold text-[#2C3E3A] mb-2">{item.title}</p>
              <p className="text-xs leading-relaxed text-[#5C7A6F]">
                {item.outcome.split('**').map((part, index) => 
                  index % 2 === 1 ? <strong key={index} className="text-[#6c91a0] font-bold">{part}</strong> : part
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
      </section>

          {/* ============ 06. PERSONAS (High-Density Implementation Synthesis) ============ */}
<section className="bg-[#F9F8F6] py-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="mb-10">
      <p className="text-[10px] tracking-[0.4em] uppercase text-[#14526b] font-bold mb-2">06. Personas</p>
      <h2 className="text-2xl md:text-3xl font-extralight text-[#2C3E3A]">
        User Needs <span className="font-serif italic text-[#6e877e]">Synthesis</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
        <div key={i} className="bg-white border border-[#D4CFC4] rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow">
          {/* Header */}
          <div className="mb-5 border-b border-[#F5F3EF] pb-4">
            <span className={`inline-block px-2 py-0.5 rounded-[4px] text-[8px] font-bold uppercase tracking-widest text-white mb-2 ${p.accent}`}>
              {p.type}
            </span>
            <p className="text-[11px] font-bold text-[#2C3E3A] mb-1">{p.year}</p>
            <p className="text-[10px] leading-relaxed text-[#5C7A6F] italic">{p.bio}</p>
          </div>

          <div className="space-y-6 flex-grow">
            {/* Core Matrix */}
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

            {/* Implementation Details */}
            <div className="mt-auto">
              <p className="text-[8px] uppercase font-bold text-[#14526b] mb-3 tracking-widest">Design Implementation</p>
              <div className="space-y-2.5">
                {p.implications.map((imp, j) => (
                  <div key={j} className="bg-[#F9F8F6] p-3 rounded-lg border border-[#D4CFC4]/30">
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

{/* ============ 07. STRATEGY & DESIGN EVOLUTION ============ */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="mb-12">
    <p className="text-[10px] tracking-[0.4em] uppercase text-[#14526b] font-bold mb-3">07. Strategy & Evolution</p>
    <h2 className="text-3xl md:text-5xl font-extralight text-[#2C3E3A] leading-tight">
      Bridging research to <span className="font-serif italic text-[#6e877e]">visual decisions.</span>
    </h2>
  </div>

  {/* Condensed Strategic Pillars */}
  <div className="grid md:grid-cols-3 gap-6 mb-12 border-y border-[#D4CFC4] py-8">
    {[
      { title: "Action Over Explanation", desc: "Prioritizing task-based pathways over institutional mission text." },
      { title: "Stage-Based Navigation", desc: "Aligning architecture with the student journey: Explore → Prepare → Apply." },
      { title: "Community-Led Trust", desc: "Mirroring identity-based success models seen in NSBE and DTECH." }
    ].map((p, i) => (
      <div key={i} className="flex gap-4 items-start">
        <span className="text-xl font-serif italic text-[#A8C5BA]">0{i + 1}</span>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#14526b]">{p.title}</h4>
          <p className="text-[10px] text-[#5C7A6F] leading-tight mt-1">{p.desc}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Integrated Evolution Grid */}
  <div className="grid md:grid-cols-3 gap-6">
    
    {/* PHASE 1: THE ISSUE */}
    <div className="flex flex-col border border-[#D4CFC4] rounded-2xl overflow-hidden bg-white shadow-sm">
      <div className="bg-[#FEE2E2] px-5 py-3">
        <span className="text-[10px] font-bold text-[#991B1B] uppercase tracking-[0.2em]">The Issue</span>
      </div>
      <div className="aspect-[16/10] bg-gray-100 relative border-b border-[#F5F3EF]">
        <img src="ch-before.png" alt="Original Hub Design" className="w-full h-full object-cover object-top" />
      </div>
      <div className="p-6">
        <p className="text-[9px] font-bold uppercase text-[#991B1B] mb-3 tracking-widest">Primary Friction</p>
        <ul className="text-[11px] text-[#5C7A6F] space-y-3 leading-relaxed">
          <li className="flex gap-2">
            <span className="text-red-400">●</span> 
            <div><strong>Mission-heavy hero:</strong> 75% of users felt overwhelmed by text-wall.</div>
          </li>
          <li className="flex gap-2">
            <span className="text-red-400">●</span> 
            <div><strong>Org-chart Nav:</strong> IA matched office hierarchy, not student journey.</div>
          </li>
          <li className="flex gap-2">
            <span className="text-red-400">●</span> 
            <div><strong>Buried Booking:</strong> Advisor access was hidden 4+ clicks deep.</div>
          </li>
        </ul>
      </div>
    </div>

    {/* PHASE 2: INITIAL PROTOTYPE */}
    <div className="flex flex-col border border-[#D4CFC4] rounded-2xl overflow-hidden bg-white shadow-sm">
      <div className="bg-[#FEF3C7] px-5 py-3">
        <span className="text-[10px] font-bold text-[#92400E] uppercase tracking-[0.2em]">Initial Prototype</span>
      </div>
      <div className="aspect-[16/10] bg-gray-100 relative border-b border-[#F5F3EF]">
        <img src="ch-prototype.png" alt="Iterative Prototype" className="w-full h-full object-cover object-top" />
      </div>
      <div className="p-6">
        <p className="text-[9px] font-bold uppercase text-[#92400E] mb-3 tracking-widest">Structural Shifts</p>
        <ul className="text-[11px] text-[#5C7A6F] space-y-3 leading-relaxed">
          <li className="flex gap-2">
            <span className="text-yellow-500">●</span> 
            <div><strong>Task-Based Tiles:</strong> Visual icons for 'Resume' and 'Jobs' to bypass cognitive load.</div>
          </li>
          <li className="flex gap-2">
            <span className="text-yellow-500">●</span> 
            <div><strong>Identity Hubs:</strong> Specific pathways for International and First-Gen students.</div>
          </li>
          <li className="flex gap-2">
            <span className="text-yellow-500">●</span> 
            <div><strong>Direct Access:</strong> Prominent advisor booking button added to global navigation.</div>
          </li>
        </ul>
      </div>
    </div>

    {/* PHASE 3: FINALIZED DESIGN */}
    <div className="flex flex-col border-2 border-[#10B981] rounded-2xl overflow-hidden bg-white shadow-lg">
      <div className="bg-[#D1FAE5] px-5 py-3">
        <span className="text-[10px] font-bold text-[#065F46] uppercase tracking-[0.2em]">Finalized Design</span>
      </div>
      <div className="aspect-[16/10] bg-gray-100 relative border-b border-[#F5F3EF]">
        <img src="ch-final.png" alt="Final Redesign" className="w-full h-full object-cover object-top" />
      </div>
      <div className="p-6">
        <p className="text-[9px] font-bold uppercase text-[#065F46] mb-3 tracking-widest">Technical Refinements</p>
        <ul className="text-[11px] text-[#2C3E3A] space-y-3 leading-relaxed font-medium">
          <li className="flex gap-2">
            <span className="text-[#10B981]">●</span> 
            <div><strong>Ecosystem Sync:</strong> Integrated Handshake/LinkedIn feeds for real-time value.</div>
          </li>
          <li className="flex gap-2">
            <span className="text-[#10B981]">●</span> 
            <div><strong>Label Clarity:</strong> Mapping resources to industry categories <strong>accelerates discovery</strong>.</div>
          </li>
          <li className="flex gap-2">
            <span className="text-[#10B981]">●</span> 
            <div><strong>Identity-Led Trust:</strong> Identity hubs scale engagement by <strong>providing specificity</strong>.</div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</section>

      {/* ============ 09. REFLECTION ============ */}
      <section className="bg-[#f8f7f4]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#14526b] font-semibold mb-4">09. Reflection & Next Steps</p>
          
          <h2 className="text-3xl md:text-4xl font-extralight text-[#2C3E3A] mb-8 leading-tight">
            What I learned and what comes next
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* What I learned */}
            <div>
              <h3 className="text-lg font-semibold text-[#2C3E3A] mb-6">Key Takeaways</h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "University services are products",
                    detail: "The Career Hub competes for attention against student orgs with better marketing and community. Treating it like a product—with users, JTBD, and competitive pressure—revealed the real problems."
                  },
                  {
                    title: "Card sorting reveals hidden assumptions",
                    detail: "The mismatch between org-chart IA and student thinking wouldn't have surfaced in interviews alone. Watching students physically group services exposed assumptions baked into the current design."
                  },
                  {
                    title: "Competitors aren't always obvious",
                    detail: "DTECH, BOW, and NSBE weren't on the Career Center's radar as competitors. But they're where students actually go. The real benchmark wasn't UPenn—it was GroupMe."
                  },
                  {
                    title: "Mixed methods catch what metrics miss",
                    detail: "Heatmaps showed where clicks went; focus groups explained why. Quantitative data identified problems; qualitative research revealed solutions."
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl font-extralight text-[#A8C5BA]">0{i + 1}</span>
                    <div>
                      <p className="text-sm font-semibold text-[#2C3E3A] mb-1">{item.title}</p>
                      <p className="text-sm text-[#5C7A6F] font-light">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next steps */}
            <div>
              <h3 className="text-lg font-semibold text-[#2C3E3A] mb-6">If I Had Another Semester</h3>
              
              <div className="space-y-4">
                {[
                  {
                    action: "A/B test hero CTAs",
                    detail: "Run low-lift test on homepage before full redesign. Measure which CTA drives most engagement: 'Book Advisor' vs 'Explore Paths' vs 'Find Jobs'.",
                    effort: "Low"
                  },
                  {
                    action: "Tree test the new IA",
                    detail: "Validate stage-based navigation with 15-20 participants using realistic task scenarios in Treejack before implementation.",
                    effort: "Medium"
                  },
                  {
                    action: "Co-design with org leaders",
                    detail: "Partner with DTECH, BOW, NSBE leaders to integrate their patterns. Make official and informal resources feel like one continuous experience.",
                    effort: "Medium"
                  },
                  {
                    action: "Auto-enroll freshmen",
                    detail: "Work with orientation to onboard first-years into Handshake and weekly career emails from day one. Adopt DTECH's mandatory onboarding model.",
                    effort: "High (political)"
                  },
                  {
                    action: "Measure long-term engagement",
                    detail: "Track if redesign increases return visits and advisor bookings over a full recruiting cycle (Aug–May).",
                    effort: "Ongoing"
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[#D4CFC4] rounded-xl p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-3">
                        <span className="text-lg font-extralight text-[#A8C5BA]">0{i + 1}</span>
                        <div>
                          <p className="text-sm font-semibold text-[#2C3E3A] mb-1">{item.action}</p>
                          <p className="text-xs text-[#5C7A6F] font-light">{item.detail}</p>
                        </div>
                      </div>
                      <span className={`text-[9px] uppercase tracking-wider px-2 py-1 rounded flex-shrink-0 ${
                        item.effort === 'Low' ? 'bg-green-100 text-green-700' :
                        item.effort === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        item.effort === 'High (political)' ? 'bg-red-100 text-red-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.effort}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing thought */}
          <div className="mt-12 pt-8 border-t border-[#D4CFC4]">
            <p className="text-lg text-[#2C3E3A] font-light leading-relaxed max-w-3xl">
              The goal isn&apos;t just a better website. It&apos;s making the official Career Hub and the places 
              students actually go feel like <strong>one continuous experience</strong>. Not competing systems, 
              but connected touchpoints in a student&apos;s career journey.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <section className="bg-[#2C3E3A] text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-white/60">
            Duke Career Hub Redesign · Spring 2025 · UX Research & Product Design
          </p>
        </div>
      </section>
    </main>
  );
}