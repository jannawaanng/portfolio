import Image from "next/image";

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

      {/* ============ 01. CONTEXT ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">

      <div className="flex items-center gap-3 mb-6">
        <span className="h-px w-8 bg-[#14526b]"></span>
        <p className="text-xs tracking-[0.2em] uppercase text-[#14526b] font-bold">01. The Problem</p>
      </div>
        <h2 className="text-4xl md:text-5xl font-extralight text-[#2C3E3A] mb-4 leading-tight">
          Students weren&apos;t using the Career Hub.
        </h2>
        
        <p className="text-base text-[#5C7A6F] leading-relaxed font-light mb-8 max-w-4xl">
          Despite Duke&apos;s 1:233 student-to-staff ratio (outperforming peer institutions like UPenn and UNC), 
          students defaulted to student-run organizations like DTECH and NSBE. The Duke Career Hub's user experience undermined its intended value. Our research identified several friction points:
        </p>

        {/* Problem cards */}
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
    <div 
      key={i} 
      className="group relative bg-white/60 backdrop-blur-sm border border-[#D4CFC4]/40 rounded-2xl p-6 text-center hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Top row: Icon + Stat side by side */}
<div className="flex items-center justify-center gap-4 mb-3">
  <div className="w-20 h-20 md:w-32 md:h-32 flex-shrink-0">
    <Image 
      src={item.icon} 
      alt="" 
      width={128} 
      height={128} 
      className="object-contain w-full h-full" 
    />
        </div>
       {/* RIGHT: Stat & Title stacked vertically */}
       <div className="flex flex-col items-start text-left">
       
          <p className="text-4xl font-bold text-[#14526b] tracking-tight leading-none mb-1">
            {item.stat}
          </p>

          <h3 className="text-sm font-bold text-[#557185] uppercase tracking-wide leading-tight">
            {item.title}
          </h3>
        </div>
      </div>

      <p className="text-sm text-[#5C7A6F] leading-relaxed font-medium max-w-sm mx-auto text-center">
        {item.desc}
      </p>
    </div>
  ))}
</div>
        </section>

        {/* ============ 02. PROCESS ============ */}
<section className="bg-stone-50 relative overflow-hidden">
  {/* Decorative subtle background blob for whimsy */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A8C5BA]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

  <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
    
    {/* Header */}
    <div className="mb-20 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="h-px w-8 bg-[#14526b]"></span>
        <p className="text-xs tracking-[0.2em] uppercase text-[#14526b] font-bold">02. The Process</p>
      </div>
      
      <p className="text-lg text-[#5C7A6F] font-light px-6 leading-relaxed max-w-5xl">
        I led a mixed-methods study combining behavioral data with qualitative insights 
        to understand the disconnect between user intent and site performance.
      </p>
    </div>

    {/* The Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          phase: "Discover",
          week: "Weeks 1-2",
          activities: [
            "Stakeholder alignment with Career Center Executive Director",
            "Mapped formal + informal channels of existing career support ecosystem",
            "Defined user goals using Jobs-To-Be-Done (JTBD) framework",
            "Recruited stratified sample of 20+ students"
          ],
          // No output defined here
        },
        {
          phase: "Diagnose",
          week: "Weeks 3-5",
          activities: [
            "Moderated usability testing with think-aloud protocol",
            "Analyzed engagement heatmaps of Career Hub landing page",
            "Conducted focus groups to find friction points",
            "Audited search query performance"
          ],
          output: "Usability Report"
        },
        {
          phase: "Organize",
          week: "Weeks 6-8",
          activities: [
            "Open card sort to uncover mental models",
            "Generated similarity matrices & dendrograms to guide grouping",
            "Competitive analysis benchmarking 7 peer institutions",
            "Developed 3 personas from research synthesis"
          ],
          output: "Restructured Sitemap"
        },
        {
          phase: "Define",
          week: "Weeks 9-12",
          activities: [
            "Established design principles for new interface",
            "Proposed new navigation structure",
            "Built high-fidelity prototype in Figma",
            "Stakeholder presentation & handoff"
          ],
          output: "High-fi Prototype"
        },
      ].map((step, i) => (
        <div 
          key={i} 
          className="group relative flex flex-col bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out border border-stone-100"
        >
          {/* Number & Header */}
          <div className="mb-6">
            <span className="block text-5xl font-serif text-stone-200 group-hover:text-[#A8C5BA] transition-colors duration-500 mb-2">
              0{i + 1}
            </span>
            <h3 className="text-xl font-bold text-[#2C3E3A]">{step.phase}</h3>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mt-1">{step.week}</p>
          </div>

          {/* List */}
          <ul className="space-y-3 mb-8 flex-grow">
            {step.activities.map((activity, j) => (
              <li key={j} className="text-[13px] text-stone-600 font-medium leading-normal flex items-start gap-2">
                <span className="text-[#A8C5BA] text-[10px] mt-[5px]">●</span>
                <span className="opacity-90">{activity}</span>
              </li>
            ))}
          </ul>

          {/* Conditional Output Badge - Only renders if output exists */}
          {step.output && (
            <div className="mt-auto pt-5 border-t border-dashed border-stone-100">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F4F8F6] rounded-full text-[#14526b]">
                 {/* Tiny icon */}
                 <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <span className="text-[11px] font-bold tracking-tight">{step.output}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
 \
      {/* ============ 03. RESEARCH FINDINGS ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[#14526b] font-semibold mb-4">03. Research Findings</p>
        
        <h2 className="text-3xl md:text-4xl font-extralight text-[#2C3E3A] mb-8 leading-tight">
          What we learned from 20+ students
        </h2>

        {/* Usability Testing */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-[#2C3E3A] mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#14526b] text-white text-xs flex items-center justify-center">A</span>
            Usability Testing
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#D4CFC4]/40 rounded-xl p-5">
              <p className="text-[10px] uppercase tracking-wider text-[#8C8173] mb-3">Methodology</p>
              <p className="text-sm text-[#5C7A6F] font-light mb-4">
                8 participants split into two groups: Group 1 had specific tasks (book an advisor, find 
                resume help), Group 2 explored freely for general guidance. Think-aloud protocol captured 
                real-time confusion.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-[#F5F3EF] rounded-lg p-3">
                  <p className="text-2xl font-extralight text-[#14526b]">76%</p>
                  <p className="text-[#5C7A6F]">found homepage text overwhelming</p>
                </div>
                <div className="bg-[#F5F3EF] rounded-lg p-3">
                  <p className="text-2xl font-extralight text-[#14526b]">0</p>
                  <p className="text-[#5C7A6F]">found advisor booking on first try</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-[#D4CFC4]/40 rounded-xl p-5">
              <p className="text-[10px] uppercase tracking-wider text-[#8C8173] mb-3">Key Quotes</p>
              <div className="space-y-3">
                {[
                  ["User A", "This mission info should be on an About page, not the homepage."],
                  ["User C", "The search results look like a basic Google page. Videos and Events returned nothing."],
                  ["User D", "I only found booking when I clicked a specific career field under Career Communities."],
                ].map(([user, quote], i) => (
                  <div key={i} className="border-l-2 border-[#A8C5BA] pl-3">
                    <p className="text-xs text-[#5C7A6F] italic">&quot;{quote}&quot;</p>
                    <p className="text-[10px] text-[#8C8173] mt-1">{user}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Heatmap */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-[#2C3E3A] mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#14526b] text-white text-xs flex items-center justify-center">B</span>
            Heatmap Analysis
          </h3>
          
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-6">
            <div className="bg-white border border-[#D4CFC4]/40 rounded-xl overflow-hidden">
              <div className="relative aspect-[2]">
                <Image src="/ch-heatmap.png" alt="Heatmap" fill className="object-cover" />
              </div>
            </div>
            
            <div className="bg-white border border-[#D4CFC4]/40 rounded-xl p-5">
              <p className="text-[10px] uppercase tracking-wider text-[#8C8173] mb-3">Findings</p>
              <ul className="space-y-3">
                {[
                  { area: "High engagement", detail: "Navigation dropdowns (especially Career Communities), Personalize button, Upcoming Events" },
                  { area: "Low engagement", detail: "Mission statement, general announcements, welcome text" },
                  { area: "Critical issue", detail: "\"Explore Options\" banner attracted significant hover attention but was NOT clickable—users expected it to be a button" },
                ].map((item, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-semibold text-[#2C3E3A]">{item.area}: </span>
                    <span className="text-[#5C7A6F] font-light">{item.detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs text-red-700">
                  <strong>Design debt:</strong> Non-interactive elements styled like buttons create 
                  dead ends and erode user trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Groups */}
        <div>
          <h3 className="text-lg font-semibold text-[#2C3E3A] mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#14526b] text-white text-xs flex items-center justify-center">C</span>
            Focus Groups
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
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
              <div key={i} className="bg-white border border-[#D4CFC4]/40 rounded-xl p-5">
                <p className="text-sm font-semibold text-[#2C3E3A] mb-2">{item.theme}</p>
                <p className="text-xs text-[#5C7A6F] font-light mb-3">{item.insight}</p>
                <div className="bg-[#A8C5BA]/10 rounded-lg px-3 py-2">
                  <p className="text-[10px] uppercase tracking-wider text-[#14526b] mb-1">Design implication</p>
                  <p className="text-xs text-[#2C3E3A] font-medium">{item.implication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04. CARD SORT ANALYSIS BOARD ============ */}
      <section className="bg-[#e8e4dc] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#14526b] font-semibold mb-4">04. Card Sort Analysis</p>
          
          <h2 className="text-3xl md:text-4xl font-extralight text-[#2C3E3A] mb-2 leading-tight">
            Rebuilding the information architecture
          </h2>
          
          <p className="text-base text-[#5C7A6F] font-light mb-8 max-w-2xl">
            I ran an open card sort with 8 participants sorting 124 cards representing all Career Hub 
            services. The results directly informed our navigation redesign.
          </p>

          {/* Card Sort Board */}
          <div className="bg-[#f5f0e8] border-2 border-[#d4cfc4] rounded-2xl p-6 md:p-8 shadow-lg">
            
            {/* Board Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b-2 border-dashed border-[#d4cfc4]">
              <div>
                <h3 className="text-xl font-semibold text-[#001A57]">Duke Career Hub Card Sort Analysis</h3>
                <p className="text-sm text-[#5C7A6F]">Open card sort · 8 participants · 124 cards</p>
              </div>
              <div className="flex gap-2">
                {[
                  { id: "P1", label: "Freshman", color: "#4CAF50" },
                  { id: "P2", label: "Sophomore", color: "#2196F3" },
                  { id: "P3", label: "Sophomore", color: "#2196F3" },
                  { id: "P4", label: "Junior", color: "#FF9800" },
                  { id: "P5", label: "Junior", color: "#FF9800" },
                  { id: "P6", label: "Senior", color: "#9C27B0" },
                  { id: "P7", label: "Senior", color: "#9C27B0" },
                  { id: "P8", label: "Grad", color: "#F44336" },
                ].map((p) => (
                  <div key={p.id} className="flex items-center gap-1 text-[10px]">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-bold" style={{ backgroundColor: p.color }}>
                      {p.id.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Comparison */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {/* Current Internal */}
              <div className="bg-white border-2 border-red-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <p className="text-xs font-semibold text-red-700 uppercase">Current Internal Categories</p>
                </div>
                <ul className="space-y-2 text-xs text-[#5C7A6F]">
                  <li className="flex gap-2"><span className="text-red-400">✕</span> Who We Serve</li>
                  <li className="flex gap-2"><span className="text-red-400">✕</span> Career Communities</li>
                  <li className="flex gap-2"><span className="text-red-400">✕</span> Career Development Process</li>
                  <li className="flex gap-2"><span className="text-red-400">✕</span> Featured Opportunities</li>
                  <li className="flex gap-2"><span className="text-red-400">✕</span> Career Readiness Resources</li>
                </ul>
                <div className="mt-3 bg-red-50 rounded-lg p-2 text-[10px] text-red-700">
                  Problems: Org-centric framing, overlapping categories, promotional nav item
                </div>
              </div>

              {/* Current Website */}
              <div className="bg-white border-2 border-yellow-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <p className="text-xs font-semibold text-yellow-700 uppercase">Current Website Nav</p>
                </div>
                <ul className="space-y-2 text-xs text-[#5C7A6F]">
                  <li className="flex gap-2"><span className="text-yellow-500">~</span> About</li>
                  <li className="flex gap-2"><span className="text-yellow-500">~</span> Jobs & Internships</li>
                  <li className="flex gap-2"><span className="text-yellow-500">~</span> Resources</li>
                  <li className="flex gap-2"><span className="text-yellow-500">~</span> Advising</li>
                  <li className="flex gap-2"><span className="text-yellow-500">~</span> Affinity Groups & Resources</li>
                </ul>
                <div className="mt-3 bg-yellow-50 rounded-lg p-2 text-[10px] text-yellow-700">
                  Problems: &quot;Resources&quot; too vague, awkward affinity bundling, missing Career Communities
                </div>
              </div>

              {/* Proposed */}
              <div className="bg-white border-2 border-green-300 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <p className="text-xs font-semibold text-green-700 uppercase">Proposed Navigation</p>
                </div>
                <ul className="space-y-2 text-xs text-[#5C7A6F]">
                  <li className="flex gap-2"><span className="text-green-500">✓</span> About</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Jobs & Internships</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Career Communities</strong></li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Prepare</strong> (not &quot;Resources&quot;)</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Advising</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Students</strong> (not &quot;Affinity Groups&quot;)</li>
                </ul>
                <div className="mt-3 bg-green-50 rounded-lg p-2 text-[10px] text-green-700">
                  Fixes: Action-oriented labels, adds Career Communities (8/8 agreement), user-centric
                </div>
              </div>
            </div>

            {/* Category Cards with Agreement */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-[#2C3E3A] uppercase tracking-wider mb-4">
                Proposed Categories with Agreement Scores
              </p>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  {
                    name: "About",
                    agreement: "7-8/8",
                    cards: ["Mission & Values", "Team Directory", "Contact Info", "Outcomes Data", "Employer Partnerships"],
                    color: "#6B7280"
                  },
                  {
                    name: "Jobs & Internships",
                    agreement: "7-8/8",
                    cards: ["Handshake", "On-Campus Recruiting", "Career Fairs", "Work-Study", "Research Positions"],
                    color: "#3B82F6"
                  },
                  {
                    name: "Career Communities",
                    agreement: "5-8/8",
                    cards: ["Finance & Consulting", "Tech & Data", "Healthcare", "Policy & Nonprofits", "Arts & Media"],
                    color: "#8B5CF6"
                  },
                  {
                    name: "Prepare",
                    agreement: "6-8/8",
                    cards: ["Resume Templates", "Interview Prep", "VMock", "LinkedIn Guide", "Salary Negotiation"],
                    color: "#10B981"
                  },
                  {
                    name: "Advising",
                    agreement: "5-8/8",
                    cards: ["1:1 Appointments", "Drop-In Hours", "Mock Interviews", "Industry Coaches", "Peer Advisors"],
                    color: "#F59E0B"
                  },
                  {
                    name: "Students",
                    agreement: "5-8/8",
                    cards: ["International (OPT/CPT)", "First-Gen", "Athletes", "By Class Year", "Pratt/Trinity"],
                    color: "#EC4899"
                  },
                ].map((cat, i) => (
                  <div key={i} className="bg-white rounded-xl border border-[#d4cfc4] overflow-hidden">
                    <div className="p-3" style={{ backgroundColor: `${cat.color}15` }}>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-bold" style={{ color: cat.color }}>{cat.name}</p>
                        <span className="text-[9px] bg-white px-1.5 py-0.5 rounded font-medium" style={{ color: cat.color }}>
                          {cat.agreement}
                        </span>
                      </div>
                    </div>
                    <div className="p-2 space-y-1">
                      {cat.cards.map((card, j) => (
                        <div key={j} className="bg-[#f5f5f5] rounded px-2 py-1 text-[10px] text-[#5C7A6F]">
                          {card}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contested Items */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-[#2C3E3A] uppercase tracking-wider mb-4">
                Contested Items (Split Votes) — Require Stakeholder Discussion
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { item: "OPT/CPT Resources", votes: "Students 5/8, Prepare 2/8, Jobs 1/8" },
                  { item: "Alumni Networking Database", votes: "Advising 3/8, Prepare 3/8, Jobs 2/8" },
                  { item: "Duke in Silicon Valley", votes: "Communities 4/8, Jobs 3/8, About 1/8" },
                  { item: "Data+/Code+/Story+", votes: "Jobs 4/8, Communities 2/8, Prepare 2/8" },
                  { item: "Career Workshops Calendar", votes: "Advising 4/8, Prepare 3/8, About 1/8" },
                  { item: "Investment Banking Prep", votes: "Prepare 4/8, Communities 3/8, Advising 1/8" },
                  { item: "Offer Negotiation Support", votes: "Advising 4/8, Prepare 4/8" },
                  { item: "Leadership Programs", votes: "Prepare 3/8, Advising 3/8, Jobs 2/8" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#FFF8E1] border border-[#FFE082] rounded-lg p-3">
                    <p className="text-xs font-semibold text-[#F57C00] mb-1">{item.item}</p>
                    <p className="text-[10px] text-[#8D6E63]">{item.votes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Participant Quotes */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-[#2C3E3A] uppercase tracking-wider mb-4">
                Participant Quotes
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { quote: "I think about careers by industry—like finance or tech. That's how my brain works when I'm job hunting.", participant: "P4 (Junior)", color: "#FF9800" },
                  { quote: "As an international student, I need visa stuff to be super easy to find. Putting it under 'my group' makes sense.", participant: "P8 (Grad, International)", color: "#F44336" },
                  { quote: "'Career Readiness Resources'—what does that even mean? Everything here makes me career ready.", participant: "P3 (Sophomore)", color: "#2196F3" },
                  { quote: "Where does Data+ go? It's a job but also a program but also research... I put it in three places.", participant: "P2 (Sophomore)", color: "#2196F3" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border-l-4" style={{ borderLeftColor: item.color }}>
                    <p className="text-sm text-[#2C3E3A] italic mb-2">&quot;{item.quote}&quot;</p>
                    <p className="text-xs font-semibold" style={{ color: item.color }}>{item.participant}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-[#001A57] text-white rounded-xl p-6">
              <p className="text-[10px] uppercase tracking-wider text-[#A8C5BA] mb-4">Key Card Sort Insights</p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    insight: "Career Communities is essential",
                    detail: "8/8 participants created an industry-based category naturally. This was the highest agreement item.",
                    action: "Add to main navigation"
                  },
                  {
                    insight: "\"Resources\" is too vague",
                    detail: "Students distinguished passive resources (guides) from active support (appointments). \"Prepare\" is more action-oriented.",
                    action: "Rename to \"Prepare\""
                  },
                  {
                    insight: "Duke programs cause confusion",
                    detail: "Data+, Bass Connections, DukeEngage split across categories. Students weren't sure if these were jobs, programs, or research.",
                    action: "Create cross-linking or subsection"
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-sm font-semibold text-[#A8C5BA] mb-2">{item.insight}</p>
                    <p className="text-xs text-white/70 mb-3">{item.detail}</p>
                    <div className="bg-white/10 rounded px-2 py-1">
                      <p className="text-[10px] text-[#A8C5BA]">Action: {item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 05. COMPETITIVE ANALYSIS ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[#14526b] font-semibold mb-4">05. Competitive Analysis</p>
        
        <h2 className="text-3xl md:text-4xl font-extralight text-[#2C3E3A] mb-4 leading-tight">
          Learning from peers and pre-professional orgs
        </h2>

        {/* University comparison */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-[#2C3E3A] mb-4">Peer University Career Centers</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl overflow-hidden">
              <thead className="bg-[#14526b] text-white">
                <tr>
                  <th className="text-left py-3 px-4 font-medium">School</th>
                  <th className="text-left py-3 px-4 font-medium">Staff Ratio</th>
                  <th className="text-left py-3 px-4 font-medium">Homepage CTAs</th>
                  <th className="text-left py-3 px-4 font-medium">Key Strength</th>
                </tr>
              </thead>
              <tbody className="text-[#5C7A6F]">
                <tr className="border-b border-[#E0D9CE]">
                  <td className="py-3 px-4 font-semibold text-[#2C3E3A]">Duke</td>
                  <td className="py-3 px-4">1:233 (best)</td>
                  <td className="py-3 px-4"><span className="text-red-600 font-medium">None visible</span></td>
                  <td className="py-3 px-4">Best staff resources among peers</td>
                </tr>
                <tr className="border-b border-[#E0D9CE] bg-green-50">
                  <td className="py-3 px-4 font-semibold text-[#2C3E3A]">UPenn</td>
                  <td className="py-3 px-4">1:296</td>
                  <td className="py-3 px-4"><span className="text-green-600 font-medium">4 prominent red buttons</span></td>
                  <td className="py-3 px-4">Same Day Advising, Appointments, Fairs, Resume Reviews</td>
                </tr>
                <tr className="border-b border-[#E0D9CE]">
                  <td className="py-3 px-4 font-semibold text-[#2C3E3A]">UNC</td>
                  <td className="py-3 px-4">1:900</td>
                  <td className="py-3 px-4">First-year guide</td>
                  <td className="py-3 px-4">Step-by-step onboarding for new students</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#2C3E3A]">Rutgers</td>
                  <td className="py-3 px-4">1:1,310</td>
                  <td className="py-3 px-4">Handshake featured</td>
                  <td className="py-3 px-4">&quot;#1 platform for career success&quot; messaging</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4">
            <p className="text-sm text-[#2E7D32]">
              <strong>Key insight:</strong> UPenn&apos;s model proves that clear CTAs in contrasting colors 
              (red on blue) drive action. Duke has similar layout but hides equivalent functionality under dropdowns.
            </p>
          </div>
        </div>

        {/* Pre-professional orgs */}
        <div>
          <h3 className="text-lg font-semibold text-[#2C3E3A] mb-4">Why Students Prefer Pre-Professional Orgs</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                org: "DTECH",
                focus: "Women in Tech",
                strengths: ["Mandatory live onboarding", "Weekly job email updates", "Direct resume-to-recruiter pipeline", "Alumni database access"],
                lesson: "Auto-enroll students + proactive outreach beats passive resources"
              },
              {
                org: "NSBE",
                focus: "Black Engineers",
                strengths: ["Industry pro workshops (Amazon, Google, Capital One)", "GroupMe community support", "Social + professional blend", "Word-of-mouth marketing"],
                lesson: "Community-building naturally cultivates engagement"
              },
              {
                org: "BOW",
                focus: "Business Women",
                strengths: ["20+ events/month", "Annual career conference", "1:1 recruiter coffee chats", "Niche programming (IB, consulting)"],
                lesson: "Frequency + specificity > comprehensive but static resources"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#D4CFC4] rounded-xl overflow-hidden">
                <div className="bg-[#14526b] text-white p-4">
                  <p className="text-base font-semibold">{item.org}</p>
                  <p className="text-xs text-white/70">{item.focus}</p>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 mb-4">
                    {item.strengths.map((s, j) => (
                      <li key={j} className="text-xs text-[#5C7A6F] flex gap-2">
                        <span className="text-[#A8C5BA]">→</span> {s}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[#F5F3EF] rounded-lg p-3">
                    <p className="text-[10px] uppercase tracking-wider text-[#14526b] mb-1">Design Lesson</p>
                    <p className="text-xs text-[#2C3E3A] font-medium">{item.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 06. PERSONAS ============ */}
      <section className="bg-white/40">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#14526b] font-semibold mb-4">06. Personas</p>
          
          <h2 className="text-3xl md:text-4xl font-extralight text-[#2C3E3A] mb-8 leading-tight">
            Three students, three different needs
          </h2>

          <div className="space-y-6">
            {[
              {
                name: "Sierra",
                type: "The First-Timer",
                color: "#4CAF50",
                year: "Sophomore",
                bio: "First-gen college student. Switched from Math to Econ last semester. No finance experience, never written a resume, hasn't started applications while classmates have internships.",
                goals: ["Understand what career paths exist in finance", "Learn how to craft a compelling resume", "Find where to apply for internships"],
                frustrations: ["Overwhelmed by the application process", "Doesn't know how to market non-finance experience", "Feels behind peers"],
                hubNeeds: "One clear starting point, not five tabs. Hand-holding through first steps."
              },
              {
                name: "Bo",
                type: "International Student",
                color: "#2196F3",
                year: "Freshman",
                bio: "From Shenzhen, China. Pre-Med Chemistry major on student visa. Wants to attend US med school but unsure what research jobs he's eligible for. Struggles with cultural differences in professional communication.",
                goals: ["Clarity on visa/work eligibility", "Find research opportunities for international students", "Learn US resume norms"],
                frustrations: ["Programs say 'no international students'", "Unsure how to present Chinese credentials", "Lacks confidence in professional English"],
                hubNeeds: "Dedicated international student resources, easy to find. Tailored guidance paths."
              },
              {
                name: "Jake",
                type: "Experienced Seeker",
                color: "#9C27B0",
                year: "Senior",
                bio: "CS major with two startup internships. Strong resume, knows Handshake/LinkedIn well. Sent 100+ applications to big tech, only 3 first-rounds, zero callbacks. Feeling burnt out.",
                goals: ["Understand why applications aren't converting", "Learn to stand out to larger companies", "Practice technical interviews"],
                frustrations: ["Doing everything 'right' but not landing offers", "Generic advice doesn't help", "Needs strategy, not templates"],
                hubNeeds: "Positioning strategy for big tech, interview coaching, advanced techniques."
              },
            ].map((persona, i) => (
              <div key={i} className="bg-white border border-[#D4CFC4] rounded-2xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 p-6" style={{ backgroundColor: `${persona.color}10` }}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl" style={{ backgroundColor: persona.color }}></div>
                      <div>
                        <p className="text-xl font-semibold text-[#2C3E3A]">{persona.name}</p>
                        <p className="text-xs uppercase tracking-wider" style={{ color: persona.color }}>{persona.type}</p>
                        <p className="text-xs text-[#8C8173]">{persona.year}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#5C7A6F] font-light">{persona.bio}</p>
                  </div>
                  
                  <div className="md:w-2/3 p-6 grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#14526b] font-semibold mb-2">Goals</p>
                      <ul className="space-y-1">
                        {persona.goals.map((g, j) => (
                          <li key={j} className="text-xs text-[#5C7A6F] flex gap-2">
                            <span className="text-green-500">•</span> {g}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#14526b] font-semibold mb-2">Frustrations</p>
                      <ul className="space-y-1">
                        {persona.frustrations.map((f, j) => (
                          <li key={j} className="text-xs text-[#5C7A6F] flex gap-2">
                            <span className="text-red-400">•</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#14526b] font-semibold mb-2">Hub Needs</p>
                      <p className="text-xs text-[#2C3E3A] font-medium">{persona.hubNeeds}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 07. DESIGN PRINCIPLES ============ */}
      <section className="bg-[#2C3E3A] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#A8C5BA] mb-4">07. Design Principles</p>
          
          <h2 className="text-3xl md:text-4xl font-extralight mb-8">
            From research to design decisions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Action over explanation",
                research: "75% found homepage overwhelming; mission text dominated above-fold",
                principle: "Show what to do, not why we exist",
                application: "Replace mission hero with 3 CTAs: Book advisor, Explore paths, Find jobs"
              },
              {
                num: "02",
                title: "Stage-based guidance",
                research: "Card sort showed students group by career stage, not office structure",
                principle: "Meet students where they are in their journey",
                application: "Navigation: Exploring → Preparing → Applying → Negotiating"
              },
              {
                num: "03",
                title: "Borrowed familiarity",
                research: "Pre-pro orgs outperformed Career Hub on engagement through community + personalization",
                principle: "Use patterns students already trust",
                application: "Student faces, conversational copy, prominent community feel"
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-4xl font-extralight text-[#A8C5BA] mb-3">{item.num}</p>
                <p className="text-lg font-semibold mb-4">{item.title}</p>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#A8C5BA] mb-1">Research Finding</p>
                    <p className="text-white/70 font-light">{item.research}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#A8C5BA] mb-1">Principle</p>
                    <p className="text-white font-medium">{item.principle}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#A8C5BA] mb-1">Application</p>
                    <p className="text-white/70 font-light">{item.application}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 08. SOLUTION ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[#14526b] font-semibold mb-4">08. Solution</p>
        
        <h2 className="text-3xl md:text-4xl font-extralight text-[#2C3E3A] mb-8 leading-tight">
          The redesign with justifications
        </h2>

        {/* Before/After */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="bg-[#E8E5DD] rounded-xl p-4 border-2 border-red-200 mb-4">
              <p className="text-[9px] uppercase tracking-wider text-red-600 font-semibold mb-2">Before</p>
              <div className="bg-white/50 rounded-lg overflow-hidden">
                <Image src="/hub_before.png" alt="Before" width={600} height={400} className="w-full h-auto" />
              </div>
            </div>
            <ul className="text-sm text-[#5C7A6F] space-y-2 font-light">
              <li className="flex gap-2"><span className="text-red-500">✕</span> Mission-heavy hero, no clear actions</li>
              <li className="flex gap-2"><span className="text-red-500">✕</span> Booking buried 4+ clicks deep</li>
              <li className="flex gap-2"><span className="text-red-500">✕</span> &quot;Explore Options&quot; not clickable (dead end)</li>
              <li className="flex gap-2"><span className="text-red-500">✕</span> Org-chart navigation structure</li>
            </ul>
          </div>

          <div>
            <div className="bg-[#E8E5DD] rounded-xl p-4 border-2 border-green-200 mb-4">
              <p className="text-[9px] uppercase tracking-wider text-green-600 font-semibold mb-2">After</p>
              <div className="bg-white/50 rounded-lg overflow-hidden">
                <Image src="/career_hub_after.png" alt="After" width={600} height={400} className="w-full h-auto" />
              </div>
            </div>
            <ul className="text-sm text-[#5C7A6F] space-y-2 font-light">
              <li className="flex gap-2"><span className="text-green-500">✓</span> Action-first CTAs above fold</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> One-click advisor booking</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> All interactive elements are clickable</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> Stage-based navigation</li>
            </ul>
          </div>
        </div>

        {/* Detailed Changes */}
        <div className="space-y-6">
          {[
            {
              area: "Hero Section",
              problem: "Mission statement wall of text dominated above-fold. 75% of usability participants found it overwhelming.",
              change: "3 action CTAs: Book an Advisor, Explore Career Paths, Find Jobs & Internships",
              justification: "UPenn's 4-button model proves CTAs drive engagement. Our heatmap showed users wanted actions, not philosophy.",
              impact: "Direct path to top tasks in 1 click"
            },
            {
              area: "Navigation Structure",
              problem: "Organized by office structure (Who We Serve, Career Development Process). Card sort showed students don't think this way.",
              change: "Stage-based grouping: Get Started → Explore → Prepare → Apply → Get Support",
              justification: "8/8 card sort participants grouped by career stage. Card sort also showed Career Communities was naturally created by all participants.",
              impact: "Matches student mental models; reduces cognitive load"
            },
            {
              area: "Advisor Booking",
              problem: "Required 4+ clicks via Career Communities dropdown. 0 usability participants found it on first try.",
              change: "Prominent 'Book an Advisor' button in hero + persistent in navigation",
              justification: "This is a core task. UPenn places 'Same Day Advising' and 'Appointments' as two of their four main CTAs.",
              impact: "Core task accessible in 1 click"
            },
            {
              area: "Handshake Integration",
              problem: "Mentioned but not prominent. Focus groups revealed students discovered it from peers, not Career Center.",
              change: "Featured prominently with onboarding context; linked to first-year orientation",
              justification: "Rutgers model: describes Handshake as '#1 platform for career success.' DTECH auto-enrolls members in platform updates.",
              impact: "Students discover primary job platform earlier"
            },
            {
              area: "Content Labels",
              problem: "'Resources' too vague (card sort). 'Affinity Groups & Resources' awkward bundling. 'Career Readiness Resources' unclear.",
              change: "'Prepare' (action-oriented), 'Students' (user-centric), 'Career Communities' (industry-based)",
              justification: "Card sort: Students distinguished passive resources from active support. P3: 'Career Readiness Resources—what does that even mean?'",
              impact: "Clear, action-oriented labels reduce confusion"
            },
            {
              area: "International Students",
              problem: "OPT/CPT resources hard to find. P8: 'I need visa stuff to be super easy to find.'",
              change: "Dedicated section under 'Students' with prominent placement",
              justification: "Card sort: 5/8 placed OPT/CPT under Students. Persona Bo represents significant user segment with unique needs.",
              impact: "International students find eligibility info immediately"
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[#D4CFC4] rounded-xl overflow-hidden">
              <div className="bg-[#14526b] text-white px-6 py-3">
                <p className="font-semibold">{item.area}</p>
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-wider text-red-600 font-semibold mb-1">Problem</p>
                    <p className="text-sm text-[#5C7A6F]">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-green-600 font-semibold mb-1">Change</p>
                    <p className="text-sm text-[#2C3E3A] font-medium">{item.change}</p>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-wider text-[#14526b] font-semibold mb-1">Justification</p>
                    <p className="text-sm text-[#5C7A6F]">{item.justification}</p>
                  </div>
                  <div className="bg-[#A8C5BA]/20 rounded-lg px-4 py-3">
                    <p className="text-[10px] uppercase tracking-wider text-[#14526b] font-semibold mb-1">Impact</p>
                    <p className="text-sm text-[#2C3E3A] font-medium">{item.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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