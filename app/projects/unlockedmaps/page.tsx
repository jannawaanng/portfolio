import React from "react";
import Image from "next/image";

export default function UnlockedMapsCaseStudy() {
  return (
    <main className="w-full bg-[#FAF9F6] selection:bg-[#c8f1ff] font-sans text-[#2C3E3A]">
      
      {/* ============ HERO ============ */}
      <section className="relative h-[480px] md:h-[540px] overflow-hidden bg-[#F5F3EF]">
        <Image
          src="/unlockedmaps-hero.png" 
          alt="UnlockedMaps accessible transit hero"
          fill
          priority
          className="object-cover object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-[#F5F3EF]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8)_0,transparent_45%)] pointer-events-none" />

        <div className="absolute inset-0 flex items-end">
          <div className="absolute left-0 right-0 bottom-10 h-60 bg-gradient-to-t from-[#c8f1ff]/65 via-[#fff3d7]/75 to-transparent pointer-events-none z-0" />
          <div className="w-full max-w-7xl mx-auto px-6 pb-14 md:pb-20 drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
            <p className="text-[11.5px] md:text-[13px] tracking-[0.4em] uppercase text-[#14526b] mb-1">
              APRIL – JULY 2025
            </p>
            <h1 className="text-5xl md:text-6xl font-extralight text-[#0e3951] leading-[0.85] mb-2 tracking-tighter">
              Unlocked<br />Maps
            </h1>
            <p className="text-base md:text-lg text-[#14526b] max-w-xl font-light">
              Auditing UI friction points, prototyping interaction-first solutions, and engineering a D.C. Metro expansion for an accessibility-first transit platform.
            </p>
          </div>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="relative -mt-10 px-6 flex justify-center">
        <div className="max-w-4xl w-full bg-gradient-to-r from-[#e7b25d] via-[#c8f1ff] to-[#c7f3d2] p-[1px] rounded-2xl shadow-lg">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl px-8 py-4 flex flex-wrap items-center justify-between gap-4 text-[#0e3951]">
            {[
              ["6", "weeks"],
              ["98", "stations mapped"],
              ["6", "metro lines"],
              ["3", "data sources"],
            ].map(([num, label], i) => (
              <div key={i} className="flex items-baseline gap-1.5 text-xs">
                <span className="text-xl font-light text-[#14526b]">{num}</span>
                <span className="opacity-60">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECT META ============ */}
      <section className="border-b border-[#E0D9CE]/60">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-10">
          {[
            ["Role", ["UI/UX Auditor", "Interaction Designer", "Data Engineer"]],
            ["Timeline", ["6 Weeks", "April–July 2025"]],
            ["Methods", ["Interface Audit", "Wireframing", "Competitive Analysis", "API Integration"]],
            ["Tools", ["Figma", "Retool", "Python", "WMATA API"]],
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
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <h3 className="text-[11px] tracking-[0.4em] uppercase text-[#14526b] font-bold mb-6">01. The Problem</h3>
          <h2 className="text-4xl md:text-5xl font-light text-[#2C3E3A] leading-tight mb-8">
            <span className="text-[#e7b25d]">Combating</span> an Accessibility <span className="italic font-serif opacity-30">&quot;Void&quot;</span>
          </h2>
          <p className="text-xl font-light leading-relaxed text-[#5C7A6F] max-w-3xl">
            UnlockedMaps provides transit autonomy for disabled riders, but the interface worked against the user&apos;s primary goal: 
            <span className="text-[#2C3E3A] font-medium"> verifying station accessibility in under three seconds.</span>
          </p>
        </div>

        {/* Pain Points */}
        <div className="space-y-8 border-t border-[#E0D9CE]/60 pt-12">
          {[
            {
              label: "Information Overload",
              color: "#e7b25d",
              text: "The layout relied on long paragraphs instead of quick status markers. This created unnecessary eye strain, making it impossible to parse elevator data during high-stress transit moments."
            },
            {
              label: "Zero Micro-Feedback",
              color: "#14526b",
              text: "The UI felt unresponsive. Toggling filters or searching for stations provided no visual confirmation—filter states weren't reinforced visually, and search had no suggestions or error handling."
            },
            {
              label: "Mismatched Hierarchy",
              color: "#2C3E3A",
              text: "Disabled riders rely on visual shorthand—icons and color-coding—to verify safety. The original UI buried these signals in dense, low-contrast text with all information treated with equal visual weight."
            },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-3 gap-6 items-start border-t border-[#E0D9CE]/30 pt-8 first:border-t-0 first:pt-0">
              <div className="font-bold uppercase tracking-widest text-[10px]" style={{ color: item.color }}>
                {item.label}
              </div>
              <div className="md:col-span-2">
                <p className="text-lg font-light text-[#2C3E3A] leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Week 1 Audit Findings */}
        <div className="mt-16 bg-white rounded-3xl border border-[#E0D9CE]/60 p-8 shadow-sm">
          <p className="text-[10px] uppercase tracking-widest text-[#14526b] font-bold mb-6">Week 1: Interface Audit</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-[#2C3E3A] mb-4">Core Interface Components</h4>
              <ul className="space-y-3 text-sm text-[#5C7A6F]">
                {[
                  { component: "Station Markers", detail: "Color-coded (green = accessible, orange = outages, red = inaccessible)" },
                  { component: "Fixed Legend", detail: "Transport mode symbols (trolley, train, subway)" },
                  { component: "Sidebar Panel", detail: "Checkbox-based transit agency/line selection" },
                  { component: "Filter Panel", detail: "Toggle for bike racks, wheelchair access, parking" },
                  { component: "Search Bar", detail: "Station lookup (no suggestions or error handling)" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#e7b25d] font-bold">→</span>
                    <span><strong className="text-[#2C3E3A]">{item.component}:</strong> {item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-[#2C3E3A] mb-4">Interaction Mode Mapping</h4>
              <div className="space-y-3">
                {[
                  { input: "Click/Tap Station", output: "Opens detail panel with outage calendar, Yelp/Refuge APIs" },
                  { input: "Toggle Filters", output: "Updates map in real-time (no visual confirmation)" },
                  { input: "Text Search", output: "Centers map on match (no feedback if not found)" },
                  { input: "Proximity Slider", output: "Adjusts amenity radius for food/restrooms" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#F5F3EF] rounded-lg p-3">
                    <p className="text-xs text-[#14526b] font-semibold">{item.input}</p>
                    <p className="text-xs text-[#5C7A6F] mt-1">{item.output}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Audit Conclusions */}
          <div className="mt-8 pt-8 border-t border-[#E0D9CE]/40">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#c7f3d2]/20 rounded-xl p-5 border border-[#c7f3d2]/40">
                <p className="text-[9px] uppercase tracking-widest text-green-700 font-bold mb-2">What Works</p>
                <ul className="space-y-1 text-xs text-[#2C3E3A]">
                  <li>• Color-coded markers support fast visual processing</li>
                  <li>• Clear, persistent legend for quick orientation</li>
                  <li>• Strong data integration (Yelp, Refuge Restrooms, outage logs)</li>
                </ul>
              </div>
              <div className="bg-[#ffe6bd]/30 rounded-xl p-5 border border-[#e7b25d]/30">
                <p className="text-[9px] uppercase tracking-widest text-[#e7b25d] font-bold mb-2">Pain Points</p>
                <ul className="space-y-1 text-xs text-[#2C3E3A]">
                  <li>• No microfeedback on filter toggles or search</li>
                  <li>• Cognitive overload from dense filter layout</li>
                  <li>• No community input or user contribution layer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 02. COMPETITIVE ANALYSIS ============ */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h3 className="text-[11px] tracking-[0.4em] uppercase text-[#14526b] font-bold mb-6">02. Research &amp; Analysis</h3>
        <h2 className="text-4xl font-light text-[#2C3E3A] leading-tight mb-6">
          Learning from <span className="italic font-serif">Commanding Presence</span>
        </h2>
        <p className="text-lg font-light text-[#5C7A6F] max-w-2xl mb-12">
          I researched the psychological impact of black backgrounds on user behavior and examined how premium brands use dark UI effectively without sacrificing usability.
        </p>

        <div className="bg-[#2C3E3A] p-10 rounded-[48px] text-white">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Industry Case Studies</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Spotify */}
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image src="/map-spotify.png" fill className="object-cover" alt="Spotify analysis" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1DB954] mb-2">Spotify</p>
                <p className="text-xs text-white/70 leading-relaxed">
                  Black background serves a functional purpose: creating contrast that lets album artwork colors achieve maximum visual impact. High contrast; point of space creates focus.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Engaging use of shape", "High contrast", "CTA prominence"].map((tag, i) => (
                    <span key={i} className="text-[8px] px-2 py-1 bg-[#1DB954]/20 text-[#1DB954] rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mercedes */}
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image src="/map-mercedes.png" fill className="object-cover" alt="Mercedes analysis" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#c8f1ff] mb-2">Mercedes</p>
                <p className="text-xs text-white/70 leading-relaxed">
                  Logo at top center creates immediate brand recognition. Fade-to-black gradient enhances text legibility. CTA placement achieves optimal engagement through compositional balance.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Background shift adds depth", "Fade supports hierarchy", "Color richness"].map((tag, i) => (
                    <span key={i} className="text-[8px] px-2 py-1 bg-[#c8f1ff]/20 text-[#c8f1ff] rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Design Application */}
          <div className="bg-white/10 rounded-2xl p-6">
            <p className="text-[10px] uppercase tracking-widest text-[#e7b25d] font-bold mb-3">Key Insight</p>
            <p className="text-sm text-white/80 leading-relaxed">
              Dark backgrounds work when they serve a <span className="text-[#e7b25d]">functional purpose</span>. 
              For UnlockedMaps, the fade-to-black effect directs attention to critical accessibility status 
              markers while maintaining a premium feel that builds user trust.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 03. DESIGN PROCESS ============ */}
      <section className="py-24 bg-[#F5F3EF] border-y border-[#E0D9CE]/60">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-[11px] tracking-[0.4em] uppercase text-[#14526b] font-bold mb-6">03. Design Process</h3>
          <h2 className="text-4xl font-light text-[#2C3E3A] leading-tight mb-6">
            From Wireframes to <span className="italic font-serif">Interactive Prototypes</span>
          </h2>
          <p className="text-lg font-light text-[#5C7A6F] max-w-2xl mb-12">
            I reorganized information architecture around user goals rather than system capabilities, using strategic sizing, color, and spatial relationships to guide attention.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Wireframe Visualization */}
            <div className="relative p-10 bg-white rounded-[32px] shadow-xl border border-[#E0D9CE]/40">
              <div className="flex justify-between items-center border-b border-[#E0D9CE] pb-4 mb-6">
                <span className="text-xs font-black tracking-tight text-[#0e3951]">UNLOCKED MAPS</span>
                <div className="flex gap-6 text-[9px] font-bold text-[#8C8173]">
                  <span>HOME</span><span>ABOUT</span><span>CITIES</span>
                </div>
              </div>
              
              <div className="space-y-5">
                <div className="h-3 bg-[#F5F3EF] w-1/3 rounded" />
                <div className="h-32 bg-gradient-to-b from-[#F5F3EF] to-[#E0D9CE]/30 rounded-xl flex items-center justify-center">
                  <span className="text-xs text-[#8C8173]">Hero with fade-to-black gradient</span>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 h-10 bg-[#F5F3EF] rounded-lg border-2 border-dashed border-[#E0D9CE] flex items-center justify-center">
                    <span className="text-[9px] text-[#8C8173]">From</span>
                  </div>
                  <div className="flex-1 h-10 bg-[#F5F3EF] rounded-lg border-2 border-dashed border-[#E0D9CE] flex items-center justify-center">
                    <span className="text-[9px] text-[#8C8173]">To</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="px-6 py-2 rounded-full bg-[#0e3951] text-white text-[9px] font-bold">FIND ROUTES</div>
                  <div className="px-6 py-2 rounded-full border border-[#0e3951] text-[#0e3951] text-[9px] font-bold">SAVE TRIP</div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#ffe6bd] rounded-full text-[9px] font-bold text-[#0e3951] rotate-6">
                WIREFRAME v2.0
              </div>
            </div>

            {/* Design Decisions */}
            <div className="space-y-6">
              {[
                {
                  week: "Week 2",
                  title: "Hero Page Redesign",
                  before: "Poor contrast with white text on dark background, CTA lost in busy imagery",
                  after: "Improved typography hierarchy, fade-to-black gradient, enhanced VIEW CITIES button",
                },
                {
                  week: "Week 3",
                  title: "Problem/Solution Carousel",
                  before: "Paragraph-heavy, creates eye strain, no clear content pathways",
                  after: "Horizontal carousel with lift animations, yellow hover glow, breadcrumb navigation",
                },
                {
                  week: "Week 3",
                  title: "Cities Page Interaction",
                  before: "Static grid with no feedback mechanisms",
                  after: "Search dropdown, filtering, responsive cards, map view toggle",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E0D9CE]/40 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[9px] px-2 py-1 bg-[#14526b]/10 text-[#14526b] rounded font-bold">{item.week}</span>
                    <p className="text-sm font-semibold text-[#2C3E3A]">{item.title}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-red-500 font-semibold mb-1">Before</p>
                      <p className="text-[#5C7A6F]">{item.before}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-green-600 font-semibold mb-1">After</p>
                      <p className="text-[#5C7A6F]">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Retool Implementation */}
          <div className="mt-12 bg-[#ffe6bd] rounded-[32px] p-8">
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[10px] uppercase tracking-widest text-[#0e3951] font-bold">Retool Implementation</p>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/40 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#14526b] animate-pulse" />
                <span className="text-[9px] font-bold text-[#14526b]">Interactive Prototype</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { feature: "Carousel Preview", desc: "Users can preview adjacent content, reducing cognitive load" },
                { feature: "Hover Feedback", desc: "Yellow glow effect and lift animations provide immediate tactile response" },
                { feature: "Search Filtering", desc: "Dropdown functionality for navigating large transit datasets" },
              ].map((item, i) => (
                <div key={i} className="bg-white/50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-[#0e3951] mb-1">{item.feature}</p>
                  <p className="text-[10px] text-[#0e3951]/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 04. TECHNICAL SOLUTION ============ */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h3 className="text-[11px] tracking-[0.4em] uppercase text-[#14526b] font-bold mb-6">04. Technical Solution</h3>
        <h2 className="text-4xl font-light text-[#2C3E3A] leading-tight mb-6">
          Mapping the <span className="italic font-serif text-[#14526b]">Invisible Network</span>
        </h2>
        <p className="text-lg font-light text-[#5C7A6F] max-w-2xl mb-12">
          I engineered the complete Washington DC Metro data layer—98 stations across 6 lines—using WMATA APIs, web scrapers, and custom regex parsers.
        </p>

        {/* DC Metro Overview */}
        <div className="bg-white rounded-[32px] p-8 border border-[#E0D9CE]/40 shadow-sm mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#14526b] font-bold mb-1">Washington DC Metro</p>
              <p className="text-2xl font-light text-[#2C3E3A]">98 Active Stations · 6 Lines</p>
            </div>
            <div className="flex gap-2">
              {[
                { code: "RD", color: "#BF0D3E" },
                { code: "OR", color: "#ED8B00" },
                { code: "SV", color: "#919D9D" },
                { code: "BL", color: "#009CDE" },
                { code: "YL", color: "#FFD100" },
                { code: "GR", color: "#00B140" },
              ].map((line) => (
                <div 
                  key={line.code}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-black text-white"
                  style={{ backgroundColor: line.color }}
                >
                  {line.code}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { source: "WMATA Station Directory", type: "Station metadata, line codes, accessibility", api: "/jStations, /jLines" },
              { source: "Open Data DC Portal", type: "GIS coordinates, entrance geometry", api: "GeoJSON, CSV, SHP" },
              { source: "WMATA Developer Portal", type: "Real-time elevator outages", api: "/ElevatorIncidents" },
            ].map((item, i) => (
              <div key={i} className="bg-[#F5F3EF] rounded-xl p-4">
                <p className="text-xs font-semibold text-[#2C3E3A] mb-1">{item.source}</p>
                <p className="text-[10px] text-[#5C7A6F] mb-2">{item.type}</p>
                <span className="text-[9px] px-2 py-1 bg-[#14526b]/10 text-[#14526b] rounded font-mono">{item.api}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Elevator Cron Job */}
          <div className="bg-[#0e3951] text-white rounded-[32px] p-8">
            <p className="text-[10px] uppercase tracking-widest text-[#e7b25d] font-bold mb-4">Elevator Outage Cron Job</p>
            <p className="text-sm font-light leading-relaxed mb-6 text-white/80">
              Python script fetches real-time elevator incidents from WMATA API, filters out escalator data, 
              uses fuzzy matching to align station names, and flags affected stations.
            </p>
            
            <div className="bg-white/10 rounded-xl p-4 mb-4">
              <p className="text-[10px] text-white/50 mb-2">Live verification (6 stations flagged):</p>
              <div className="flex flex-wrap gap-2">
                {["Dupont Circle", "Farragut North", "Metro Center", "Gallery Place", "L'Enfant Plaza", "Minnesota Ave"].map((station, i) => (
                  <span key={i} className="text-[9px] px-2 py-1 bg-red-500/20 text-red-300 rounded border border-red-500/30">
                    ⚠ {station}
                  </span>
                ))}
              </div>
            </div>
            <code className="text-[10px] text-[#c8f1ff] font-mono">wheelchair_accessible: false</code>
          </div>

          {/* Regex Scraper */}
          <div className="bg-[#c8f1ff] text-[#0e3951] rounded-[32px] p-8">
            <p className="text-[10px] uppercase tracking-widest font-bold mb-4">Ticket Office Scraper</p>
            <p className="text-sm font-light leading-relaxed mb-6">
              No API existed for ticket office locations. Built a custom regex-based scraper to detect station names in free-text entries.
            </p>
            
            <div className="bg-white/50 rounded-xl p-4 mb-4">
              <p className="text-[10px] opacity-70 mb-2">Pattern matching:</p>
              <code className="text-[10px] font-mono block">
                &quot;Commuter Store at X Station&quot;<br/>
                &quot;Connector Store at X Metro&quot;
              </code>
            </div>
            
            <div className="text-[10px]">
              <p className="font-semibold mb-1">Challenge solved:</p>
              <p className="opacity-70">Initial scraping returned noisy entries. Used regex + normalize_name() + manual verification.</p>
            </div>
          </div>
        </div>

        {/* Data Schema */}
        <div className="mt-8 bg-[#F5F3EF] rounded-[32px] p-8 border border-[#E0D9CE]/40">
          <p className="text-[10px] uppercase tracking-widest text-[#14526b] font-bold mb-6">Station Data Schema</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-semibold text-[#2C3E3A] mb-4">clean_station_data() function</p>
              <div className="space-y-2">
                {[
                  { field: "id, name, coords", source: "WMATA jStations API" },
                  { field: "line, service_lines", source: "WMATA jLines API" },
                  { field: "wheelchair_accessible", source: "Elevator cron job" },
                  { field: "parking, bike_rack", source: "Station page scraper" },
                  { field: "ticket_office", source: "Regex fare sales scraper" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-white rounded-lg px-3 py-2 text-xs">
                    <code className="text-[#14526b] font-mono">{item.field}</code>
                    <span className="text-[#8C8173]">{item.source}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-[#2C3E3A] mb-4">Technical Challenges Solved</p>
              <div className="space-y-3">
                {[
                  { issue: "Module import failures", solution: "Adjusted sys.path, copied keys.py configuration" },
                  { issue: "Data file not found", solution: "Ensured prerequisite scripts run before cron job" },
                  { issue: "Noisy ticket office data", solution: "Regex patterns + strict filtering + manual verification" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-3">
                    <p className="text-xs text-red-600 font-medium">{item.issue}</p>
                    <p className="text-xs text-[#5C7A6F] mt-1">→ {item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 05. OUTCOME ============ */}
      <section className="py-24 bg-[#0e3951] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold mb-6">05. Outcome</p>
          <h2 className="text-5xl md:text-6xl font-extralight leading-tight mb-6">
            <span className="italic font-serif text-[#e7b25d]">Participation</span> over Navigation
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            UnlockedMaps isn&apos;t just about finding a &quot;better route.&quot; It&apos;s about ensuring disabled riders have the autonomy to participate fully in urban life.
          </p>

          {/* Deliverables */}
          <div className="grid md:grid-cols-3 gap-6 text-left mb-16">
            {[
              {
                title: "UI/UX Audit Report",
                desc: "Comprehensive interface evaluation with interaction mapping, pain point inventory, and design recommendations",
                week: "Week 1"
              },
              {
                title: "Retool Prototype",
                desc: "Interactive prototype with carousel, hover effects, and redesigned hero/cities pages",
                week: "Weeks 2-3"
              },
              {
                title: "DC Data Layer",
                desc: "98 stations with real-time accessibility flags, amenity data, and ticket office locations",
                week: "Weeks 4-6"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <span className="text-[9px] px-2 py-1 bg-[#e7b25d]/20 text-[#e7b25d] rounded-full font-bold">{item.week}</span>
                <p className="text-base font-semibold mt-4 mb-2">{item.title}</p>
                <p className="text-xs text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="px-12 py-5 bg-[#e7b25d] text-[#0e3951] rounded-full font-black text-[11px] uppercase tracking-widest shadow-2xl hover:bg-white transition-all">
              Launch Prototype ↗
            </button>
            <button className="px-12 py-5 border border-white/20 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all">
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* ============ 06. REFLECTION ============ */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h3 className="text-[11px] tracking-[0.4em] uppercase text-[#14526b] font-bold mb-6">06. Reflection</h3>
        <h2 className="text-3xl font-light text-[#2C3E3A] leading-tight mb-12">
          What I learned &amp; what&apos;s next
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Learnings */}
          <div>
            <p className="text-sm font-semibold text-[#2C3E3A] mb-6">Key Takeaways</p>
            <div className="space-y-6">
              {[
                {
                  title: "Accessibility is about speed",
                  detail: "Disabled riders need to verify station status in under 3 seconds during high-stress moments. Every extra click or unclear signal is a potential barrier."
                },
                {
                  title: "Dark UI requires purpose",
                  detail: "Premium aesthetics only work when they serve function. The fade-to-black effect directs attention to critical status markers."
                },
                {
                  title: "Data quality determines trust",
                  detail: "Real-time elevator data is only valuable if it's accurate. Fuzzy matching had to be precise enough to avoid false positives."
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl font-extralight text-[#e7b25d]">0{i + 1}</span>
                  <div>
                    <p className="text-sm font-semibold text-[#2C3E3A] mb-1">{item.title}</p>
                    <p className="text-xs text-[#5C7A6F] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <p className="text-sm font-semibold text-[#2C3E3A] mb-6">Next Steps</p>
            <div className="space-y-4">
              {[
                { action: "Deploy elevator cron job to hosted server", status: "In Progress" },
                { action: "Connect Twitter/X API for outage alerts", status: "Pending" },
                { action: "Implement trip planning notifications", status: "Planned" },
                { action: "Add community input features", status: "Planned" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-white border border-[#E0D9CE]/60 rounded-xl px-4 py-3">
                  <span className="text-xs text-[#2C3E3A]">{item.action}</span>
                  <span className={`text-[9px] px-2 py-1 rounded-full font-medium ${
                    item.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                    item.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E0D9CE]/60">
          <p className="text-lg text-[#2C3E3A] font-light leading-relaxed max-w-3xl">
            This project taught me that <strong>accessible design isn&apos;t a feature—it&apos;s a foundation</strong>. 
            Every interface decision, every API call, every data validation step either enables or prevents someone from participating in their city.
          </p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <section className="bg-[#2C3E3A] text-white py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm text-white/50">
            UnlockedMaps · UI/UX Audit &amp; Data Engineering · April–July 2025
          </p>
        </div>
      </section>
    </main>
  );
}