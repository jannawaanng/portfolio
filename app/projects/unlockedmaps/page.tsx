import React from "react";
import Image from "next/image";

/**
 * UNLOCKED MAPS: PORTFOLIO CASE STUDY
 * Focus: UI/UX Audit, Data Engineering, & Interaction Strategy
 */
export default function UnlockedMapsCaseStudy() {
  return (
    <main className="w-full bg-[#FAF9F6] selection:bg-[#c8f1ff] font-sans text-[#2C3E3A]">
      
      {/* --- PRESERVED ORIGINAL HERO --- */}
      <section className="relative h-[480px] md:h-[500px] lg:h-[540px] overflow-hidden bg-[#F5F3EF]">
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
            <p className="text-[11.5px] md:text-[15px] px-1.5 tracking-[0.4em] uppercase text-[#14526b] mb-1">
              2024 – ONGOING
            </p>
            <h1 className="text-5xl md:text-6xl font-extralight text-[#0e3951] leading-[0.85] mb-2 tracking-tighter">
              Unlocked<br />Maps
            </h1>
            <p className="text-base md:text-xl px-1.5 py-1 mb-1 text-[#14526b] max-w-xl font-light">
              Engineering an accessibility platform's D.C. expansion by auditing UI friction points, scaling data architecture, and prototyping interaction-first solutions.
            </p>
          </div>
        </div>
      </section>

   {/* --- PROBLEM SECTION --- */}
<section className="py-24 px-6 max-w-5xl mx-auto">
  
  {/* Header: Clear and Bold */}
  <div className="mb-20">
    <h3 className="text-xs tracking-[0.4em] uppercase text-[#14526b] font-bold mb-6">01. The Problem</h3>
    <h2 className="text-5xl md:text-6xl font-light text-[#2C3E3A] leading-tight mb-8">
      <span className="text-[#e7b25d]">Combating</span> an Accessibility <span className="italic font-serif opacity-30">"Void"</span>.
    </h2>
    <p className="text-xl font-light leading-relaxed text-[#5C7A6F] max-w-3xl">
      UnlockedMaps provides transit autonomy, but the interface worked against the user’s primary goal: 
      <span className="text-[#2C3E3A] font-medium"> verifying station accessibility in under three seconds.</span>
    </p>
  </div>

  {/* Simplified Pain Points: Clean Rows */}
  <div className="space-y-12 border-t border-[#E0D9CE]/60 pt-12">
    
    {/* Row 1: Overload */}
    <div className="grid md:grid-cols-3 gap-6 items-start">
      <div className="text-[#e7b25d] font-bold uppercase tracking-widest text-[10px]">Information Overload</div>
      <div className="md:col-span-2">
        <p className="text-lg font-light text-[#2C3E3A] leading-relaxed">
          The layout relied on long paragraphs instead of quick status markers. This created unnecessary 
          <span className="font-semibold"> eye strain</span>, making it impossible to parse elevator data during high-stress transit moments.
        </p>
      </div>
    </div>

    {/* Row 2: Feedback */}
    <div className="grid md:grid-cols-3 gap-6 items-start border-t border-[#E0D9CE]/30 pt-12">
      <div className="text-[#14526b] font-bold uppercase tracking-widest text-[10px]">Zero Micro-Feedback</div>
      <div className="md:col-span-2">
        <p className="text-lg font-light text-[#2C3E3A] leading-relaxed">
          The UI felt unresponsive. Toggling filters or searching for stations provided no visual confirmation, leaving users guessing if the system had registered their request.
        </p>
      </div>
    </div>

    {/* Row 3: Hierarchy */}
    <div className="grid md:grid-cols-3 gap-6 items-start border-t border-[#E0D9CE]/30 pt-12">
      <div className="text-[#2C3E3A] font-bold uppercase tracking-widest text-[10px]">Mismatched Hierarchy</div>
      <div className="md:col-span-2">
        <p className="text-lg font-light text-[#2C3E3A] leading-relaxed">
          Disabled riders rely on <span className="italic font-serif">visual shorthand</span>—icons and color-coding—to verify safety. The original UI buried these signals in dense, low-contrast text.
        </p>
      </div>
    </div>

    {/* Creative "Insight" Highlight Box */}
    <div className="mt-16 p-8 rounded-2xl bg-[#0e3951] text-white overflow-hidden relative">
       <div className="absolute top-0 right-0 p-4 opacity-10 font-serif italic text-6xl">“</div>
       <p className="text-md font-light italic text-[#e7b25d] max-w-2xl leading-relaxed">
        &quot;Users trust icons and color far more than text—symbolic markers don’t just provide data; they affirm emotional safety.&quot;
      </p>
    </div>

  </div>

        {/* Case Study Integration */}
        <div className="grid md:grid-cols-2 gap-8 py-10">
          <div className="bg-[#2C3E3A] p-10 rounded-[48px] text-white space-y-4">
             <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">Competitor Analysis</p>
             <h4 className="text-2xl font-light italic">Mercedes & Spotify Strategy</h4>
             <p className="text-sm font-light opacity-80">
               I analyzed how Mercedes uses fade-to-black effects to enhance legibility and how Spotify uses contrast to let artwork achieve maximum visual impact.
             </p>
          </div>
          [Image of visual hierarchy principles in web design]
        </div>
      </section>

      {/* --- WIREFRAMING & REDESIGN PROCESS --- */}
      <section className="py-24 bg-[#F5F3EF] border-y border-[#E0D9CE]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative p-12 bg-white rounded-[48px] shadow-2xl border border-white space-y-8">
                <div className="flex justify-between items-center border-b pb-6">
                  <span className="text-xs font-black tracking-tighter text-[#0e3951]">UNLOCKED MAPS</span>
                  <div className="flex gap-6 text-[9px] font-bold opacity-30">
                    <span>HOME</span><span>ABOUT</span><span>CITIES</span>
                  </div>
                </div>
                {/* Visualizing the "Tab 2" Journey Validator */}
                <div className="space-y-6 py-10">
                  <div className="h-4 bg-[#F5F3EF] w-1/3 rounded" />
                  <div className="flex gap-4">
                    <div className="flex-1 h-10 bg-[#F5F3EF] rounded-xl border-2 border-dashed border-[#DED4C6]" />
                    <div className="flex-1 h-10 bg-[#F5F3EF] rounded-xl border-2 border-dashed border-[#DED4C6]" />
                  </div>
                  <div className="inline-block px-8 py-3 rounded-full bg-[#0e3951] text-white text-[10px] font-black">FIND ROUTES</div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#ffe6bd] rounded-full text-[9px] font-bold rotate-12">WIREFRAME v2.0</div>
             </div>

             <div className="space-y-8">
                <h3 className="text-sm tracking-[0.3em] uppercase text-[#14526b] font-bold">02. Design Process</h3>
                <h2 className="text-4xl font-extralight leading-tight">Establishing <span className="italic font-serif">Commanding Presence.</span></h2>
                <div className="space-y-6 text-lg font-light text-[#5C7A6F] leading-relaxed">
                  <p>
                    I redesigned the hero and navigation to establish a &quot;Commanding Presence&quot; inspired by high-end automotive UI.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="text-[#e7b25d] font-black">→</span>
                      <p className="text-sm font-medium">Reorganized information architecture around user goals (Journey Validator) rather than system capabilities.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[#e7b25d] font-black">→</span>
                      <p className="text-sm font-medium">Redesigned the &quot;VIEW CITIES&quot; path with enhanced styling for visual impact and user engagement.</p>
                    </li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL SOLUTION: THE DC DATA LAYER --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="mb-16 space-y-4 text-center lg:text-left">
          <h3 className="text-sm tracking-[0.3em] uppercase text-[#14526b] font-bold">03. Technical Solution</h3>
          <h2 className="text-5xl font-extralight leading-tight">Mapping the <span className="italic font-serif text-[#14526b]">Invisible Network.</span></h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 auto-rows-[250px]">
          <div className="lg:col-span-8 lg:row-span-2 bg-white rounded-[48px] border border-[#E0D9CE]/40 shadow-sm p-12 flex flex-col justify-between overflow-hidden relative">
            <div className="space-y-4 relative z-10">
              <h4 className="text-3xl font-light">The Washington DC Build</h4>
              <p className="text-lg text-[#5C7A6F] font-light leading-relaxed max-w-lg">
                I identified 98 active Metrorail stations across six lines. Using Open Data DC and WMATA APIs, I compiled entrance geometry and station metadata.
              </p>
            </div>
            <div className="flex gap-3 relative z-10">
               {['RED', 'OR', 'SV', 'BL', 'YL', 'GR'].map(line => (
                 <div key={line} className="w-8 h-8 rounded-full border border-[#E0D9CE] flex items-center justify-center text-[9px] font-black text-[#14526b]">{line}</div>
               ))}
            </div>
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(circle,rgba(20,82,107,0.3)_1px,transparent_1px)] bg-[size:30px_30px]" />
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#2C3E3A] rounded-[48px] p-8 text-white flex flex-col justify-center space-y-4">
            <h5 className="text-[10px] uppercase tracking-widest text-[#c7f3d2] font-bold">The Regex Scraper</h5>
            <p className="text-sm font-light italic leading-relaxed opacity-80">
              &quot;I built a custom regex-based scraper to detect ticket office locations from free-text entries like &apos;Commuter Store at Silver Spring Station.&apos;&quot;
            </p>
          </div>

          <div className="lg:col-span-4 lg:row-span-2 bg-[#ffe6bd] rounded-[48px] p-12 flex flex-col justify-between shadow-md group">
            <h4 className="text-xl font-medium">Retool Implementation</h4>
            <p className="text-sm font-light leading-relaxed">
              Implemented a **Horizontal Carousel** with lift animations and yellow hover glows to provide immediate tactile feedback.
            </p>
            <div className="flex items-center gap-4 p-4 bg-white/40 rounded-3xl border border-white/20">
              <span className="w-3 h-3 rounded-full bg-[#14526b] animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#14526b]">Active Feedback System</span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#c8f1ff] rounded-[48px] p-10 flex flex-col justify-center">
            <p className="text-[10px] uppercase font-bold text-[#0e3951] mb-2">Elevator Cron Job</p>
            <p className="text-xs text-[#0e3951]/80 font-medium leading-relaxed">
              Successfully automated real-time status marking; flagged 6 stations as inaccessible (e.g., Dupont Circle, Metro Center) during live outages.
            </p>
          </div>

          <div className="lg:col-span-4 bg-white border border-[#E0D9CE]/40 rounded-[48px] p-10 flex items-center justify-between shadow-sm">
            <p className="text-xs font-bold text-[#14526b] uppercase tracking-widest">Verified Data Layer</p>
            <span className="text-3xl text-[#14526b]">✔</span>
          </div>
        </div>
      </section>

      {/* --- WHIMSICAL CONCLUSION --- */}
      <section className="py-24 bg-[#0e3951] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Outcome</p>
          <h2 className="text-6xl font-extralight leading-tight italic font-serif text-[#e7b25d]">Participation over Navigation.</h2>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            UnlockedMaps isn&apos;t just about a &quot;better route.&quot; It&apos;s about ensuring disabled riders have the autonomy to participate fully in urban life—turning invisible barriers into solvable data points.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 pt-10">
            <button className="px-12 py-5 bg-[#e7b25d] text-[#0e3951] rounded-full font-black text-[11px] uppercase tracking-widest shadow-2xl hover:bg-white transition-all transform hover:-translate-y-1">
              Launch Prototype ↗
            </button>
            <button className="px-12 py-5 border border-white/20 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all">
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}