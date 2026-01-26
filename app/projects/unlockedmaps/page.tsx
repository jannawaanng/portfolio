"use client";
import React, { useState } from "react";
import Image from "next/image";

// Flexible image component that doesn't crop
function FlexImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative w-full ${className}`}>
      <Image 
        src={src} 
        alt={alt}
        width={1200}
        height={800}
        className="w-full h-auto rounded-xl border border-[#E0D9CE]/60"
        style={{ maxHeight: '500px', objectFit: 'contain', objectPosition: 'center' }}
      />
    </div>
  );
}

export default function UnlockedMapsCaseStudy() {
  const [aboutShowAfter, setAboutShowAfter] = useState(false);
  const [heroTweakShowNotes, setHeroTweakShowNotes] = useState(true);

  return (
    <main className="w-full bg-[#FAF9F6] selection:bg-[#c8f1ff] font-sans text-[#2C3E3A]">
      
      {/* ============ HERO ============ */}
      <section className="relative h-[420px] md:h-[480px] overflow-hidden bg-[#F5F3EF]">
      <Image
    src="/um-top-header.png"
    alt="UnlockedMaps accessible transit hero mobile"
    fill
    priority
    className="object-cover object-center lg:hidden"
  />

  {/* Desktop/Full Screen Image: Hidden by default, visible on large screens */}
  <Image
    src="/um-top-header.png"
    alt="UnlockedMaps accessible transit hero desktop"
    fill
    priority
    className="object-cover object-center hidden lg:block"
  />

  {/* Overlays stay on top of whichever image is visible */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-[#F5F3EF]/95 pointer-events-none" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8)_0,transparent_45%)] pointer-events-none" />

        <div className="absolute inset-0 flex items-end">
          <div className="absolute left-0 right-0 bottom-0 h-48 bg-gradient-to-t from-[#c8f1ff]/65 via-[#fff3d7]/75 to-transparent pointer-events-none z-0" />
          <div className="w-full max-w-7xl mx-auto px-7 pb-10 md:pb-16 md:px-24 drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
            <p className="font-semibold text-[10px] md:text-[11.5px] tracking-[0.4em] uppercase text-[#14526b] mb-1">
              JUNE 2025 - ONGOING
            </p>
            <h1 className="text-4xl md:text-5xl font-extralight text-[#0e3951] leading-[0.85] mb-2 tracking-tighter uppercase">
              Unlocked<br />Maps
            </h1>
            <p className="text-md md:text-base text-[#14526b] max-w-6xl">
              Auditing UI friction points, prototyping interaction-first solutions, and engineering a D.C. Metro expansion for an accessibility-first transit platform.
            </p>
          </div>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="relative -mt-8 px-6 flex justify-center z-10">
        <div className="max-w-4xl w-full bg-gradient-to-r from-[#e7b25d] via-[#c8f1ff] to-[#c7f3d2] p-[1px] rounded-2xl shadow-lg">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-[#0e3951]">
            {[
              ["98", "stations mapped"],
              ["6", "metro lines"],
              ["3", "data sources"],
            ].map(([num, label], i) => (
              <div key={i} className="flex items-baseline gap-1.5 text-xs">
                <span className="text-lg font-light text-[#14526b]">{num}</span>
                <span className="opacity-60">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECT META ============ */}
      <section className="border-b border-[#E0D9CE]/60">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 font-sans">
          {[
            ["Role", ["UI/UX Auditor", "Interaction Designer", "Data Engineer"]],
            ["Team", ["1 Designer/Developer", "1 Product Manager"]],
            ["Methods", ["Interface Audit", "Wireframing", "Competitive Analysis", "API Integration"]],
            ["Tools", ["Figma", "Retool", "Python", "WMATA API"]],
          ].map(([title, items], i) => (
            <div key={i}>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#8C8173] mb-1.5">{title as string}</p>
              <ul className="text-xs text-[#2C3E3A] font-medium space-y-0.5">
                {(items as string[]).map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

     {/* ============ 01. THE PROBLEM ============ */}
<section className="py-12 px-6 max-w-6xl mx-auto">
  <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 items-start mb-8">
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-5 bg-[#14526b]"></span>
        <p className="text-[9px] tracking-[0.2em] uppercase text-[#14526b] font-bold">01. The Problem</p>
      </div>
      <h2 className="text-2xl md:text-3xl font-light text-[#2C3E3A] leading-tight mb-4">
        <span className="text-[#e7b25d]">Combating</span> an Accessibility <span className="italic font-serif opacity-30">&quot;Void&quot;</span>
      </h2>
      <p className="text-sm leading-relaxed text-[#5C7A6F] mb-6">
        UnlockedMaps provides transit autonomy for riders with disabilities, but the original interface worked against the user&apos;s primary goal of
        <span className="text-[#2C3E3A] font-medium"> quickly verifying station accessibility.</span>
      </p>

      {/* Pain Points */}
      <div className="space-y-3">
        {[
          { label: "Information Overload", color: "#e7b25d", text: "Long paragraphs instead of quick status markers—eye strain during high-stress moments." },
          { label: "No Micro-Feedback", color: "#14526b", text: "No visual confirmation on toggles or search—users couldn't tell if actions registered." },
          { label: "Mismatched Hierarchy", color: "#2C3E3A", text: "Critical signals buried in dense, low-contrast text with equal visual weight." },
        ].map((item, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-1 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest mb-0.5" style={{ color: item.color }}>{item.label}</p>
              <p className="text-[11px] text-[#5C7A6F] leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Audit Summary */}
    <div className="bg-white rounded-xl border border-[#E0D9CE]/60 p-5 shadow-sm">
      <p className="text-[9px] uppercase tracking-widest text-[#14526b] font-bold mb-4">Interface Audit Summary</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-[10px] font-semibold text-[#2C3E3A] mb-2">Core Components</h4>
          <div className="space-y-1.5 text-[10px] text-[#5C7A6F]">
            {[
              ["Station Markers", "Color-coded status"],
              ["Filter Panel", "Wheelchair, parking toggles"],
              ["Search Bar", "No suggestions/errors"],
              ["Sidebar", "Checkbox agency selection"],
            ].map(([c, d], i) => (
              <div key={i} className="flex gap-1.5">
                <span className="text-[#e7b25d]">→</span>
                <span><strong className="text-[#2C3E3A]">{c}:</strong> {d}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-semibold text-[#2C3E3A] mb-2">Interaction Mapping</h4>
          <div className="space-y-1.5 text-[10px] text-[#5C7A6F]">
            {[
              ["Click Station", "Opens detail panel"],
              ["Toggle Filter", "Updates map (no confirm)"],
              ["Search", "Centers map (no error)"],
              ["Slider", "Adjusts amenity radius"],
            ].map(([c, d], i) => (
              <div key={i} className="flex gap-1.5">
                <span className="text-[#14526b]">•</span>
                <span><strong className="text-[#2C3E3A]">{c}:</strong> {d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#c7f3d2]/20 rounded-lg p-3 border border-[#c7f3d2]/40">
          <p className="text-[8px] uppercase tracking-widest text-green-700 font-bold mb-1">What Works</p>
          <ul className="text-[9px] text-[#2C3E3A] space-y-0.5">
            <li>• Color-coded markers</li>
            <li>• Persistent legend</li>
            <li>• Yelp/Refuge integration</li>
          </ul>
        </div>
        <div className="bg-[#ffe6bd]/30 rounded-lg p-3 border border-[#e7b25d]/30">
          <p className="text-[8px] uppercase tracking-widest text-[#e7b25d] font-bold mb-1">Pain Points</p>
          <ul className="text-[9px] text-[#2C3E3A] space-y-0.5">
            <li>• No microfeedback</li>
            <li>• Dense filter layout</li>
            <li>• No community layer</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Integrated Figures */}
  <div className="grid md:grid-cols-2 gap-6">
    <div className="rounded-xl border border-[#E0D9CE]/60 shadow-sm overflow-hidden bg-white">
      <img 
        src="/um-fig1.png" 
        alt="Product Interface Figure 1" 
        className="w-full h-auto object-cover"
      />
    </div>
    <div className="rounded-xl border border-[#E0D9CE]/60 shadow-sm overflow-hidden bg-white">
      <img 
        src="/um-fig2.png" 
        alt="Product Interface Figure 2" 
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</section>

      {/* ============ 02. RESEARCH ============ */}
      <section className="py-10 px-6 max-w-6xl mx-auto">

<div className="flex items-center gap-2 mb-3">

  <span className="h-px w-5 bg-[#14526b]"></span>

  <p className="text-[9px] tracking-[0.2em] uppercase text-[#14526b] font-bold">02. Research</p>

</div>
<h2 className="text-2xl font-light text-[#2C3E3A] leading-tight mb-3">

Dark UI <span className="italic font-serif">Industry Case Studies</span>

</h2>
        <p className="text-sm text-[#5C7A6F] max-w-2xl mb-6">
          Researching how premium brands use dark UI effectively without sacrificing usability.
        </p>

        <div className="bg-[#2C3E3A] p-8 md:p-16 rounded-[32px] text-white">
        <div className="grid md:grid-cols-2 gap-6">
            {/* Spotify */}
            <div>
              <Image 
                src="/map-spotify.png" 
                alt="Spotify analysis"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl mb-4"
              />
              <p className="text-sm font-semibold text-[#1DB954] mb-2">Spotify</p>
              <p className="text-xs text-white/70 leading-relaxed">
                Black background serves a functional purpose: creating contrast that lets album artwork achieve maximum visual impact.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Engaging use of shape", "High contrast", "CTA prominence"].map((tag, i) => (
                  <span key={i} className="text-[10px] px-2 py-1 bg-[#1DB954]/20 text-[#1DB954] rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* Mercedes */}
            <div>
              <Image 
                src="/map-mercedes.png" 
                alt="Mercedes analysis"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl mb-4"
              />
              <p className="text-sm font-semibold text-[#c8f1ff] mb-2">Mercedes</p>
              <p className="text-xs text-white/70 leading-relaxed">
                Logo at center creates immediate recognition. Fade-to-black gradient enhances text legibility and focus.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Background shift adds depth", "Fade supports hierarchy", "Color richness"].map((tag, i) => (
                  <span key={i} className="text-[10px] px-2 py-1 bg-[#c8f1ff]/20 text-[#c8f1ff] rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* ============ 03. DESIGN PROCESS: TWEAKS, EVOLUTION & SYSTEMS ============ */}
<section className="py-8 bg-[#F5F3EF] border-y border-[#E0D9CE]/60 font-sans">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex items-center gap-2 mb-2">
      <span className="h-px w-5 bg-[#14526b]"></span>
      <p className="text-[9px] tracking-[0.2em] uppercase text-[#14526b] font-bold">03. Design Process</p>
    </div>
  
    {/* ============ 3.1: MICRO-REFINEMENTS ============ */}
    <div className="mb-16">
     
      <h3 className="text-xl font-light text-[#2C3E3A] mb-8">3.1 Micro-Refinements: Optimizing the Existing Experience</h3>

      {/* grid items-stretch ensures the right-side cards match the image height exactly */}
      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-7 bg-white rounded-xl p-5 border border-[#E0D9CE]/60 shadow-sm flex flex-col">
          <p className="text-[9px] uppercase tracking-widest text-[#8C8173] mb-4 font-bold text-center italic">Hero Annotations & Modifications</p>
          <div className="relative flex-grow min-h-[300px] mb-4 overflow-hidden rounded-lg border border-[#E0D9CE]/40 bg-[#F8F9FA]">
            <Image 
              src={heroTweakShowNotes ? "/um-hero-before.png" : "/um-tweaked.png"} 
              alt="Hero annotations auditing contrast and placement" 
              fill
              className="object-contain" 
            />
          </div>
          <button 
        onClick={() => setHeroTweakShowNotes(!heroTweakShowNotes)}
        className="w-full py-2 bg-[#14526b]/10 hover:bg-[#14526b]/20 rounded-full text-[10px] font-bold text-[#14526b] uppercase tracking-widest transition-colors"
      >
        {heroTweakShowNotes ? "Apply Changes" : "Go Back"}
      </button>
    </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex-1 bg-white rounded-xl p-6 border border-[#E0D9CE]/60 shadow-sm flex flex-col justify-center">
            <p className="text-[9px] uppercase tracking-widest text-[#8C8173] mb-2 font-bold">Legibility</p>
            <p className="text-sm text-[#5C7A6F] leading-relaxed">
              Increased text scale and weight to achieve WCAG AA contrast standards and ensure the text is readable.
            </p>
          </div>
          <div className="flex-1 bg-white rounded-xl p-6 border border-[#E0D9CE]/60 shadow-sm flex flex-col justify-center">
            <p className="text-[9px] uppercase tracking-widest text-[#8C8173] mb-2 font-bold">Interaction Feedback</p>
            <p className="text-sm text-[#5C7A6F] leading-relaxed">
              Elevated visibility of "View Cities" CTA and added hover-lift animations to provide tactile feedback and eliminate interaction uncertainty.
            </p>
          </div>
        </div>
      </div>
    </div>
  

  {/* ============ 3.2: COMPONENT REDESIGNS (Establishing Brand Identity) ============ */}
<div className="border-t border-[#E0D9CE]/60 pt-10 mb-16 font-sans">
  <div className="mb-8">
    <p className="text-[9px] uppercase tracking-[0.2em] text-[#14526b] font-bold mb-2">3.2 Page & Component Redesign</p>
    <h3 className="text-2xl font-light text-[#2C3E3A]">Establishing Brand Identity</h3>
  </div>

  {/* Strategic Intro */}
  <div className="mb-10">
    <p className="text-sm leading-relaxed text-[#5C7A6F] max-w-3xl italic border-l-2 border-[#14526b]/20 pl-4">
      After resolving immediate friction points, the focus shifted to visual maturation. While the initial interface was functional, it lacked a distinct brand voice. The redesign should establish Unlocked Maps as a platform dedicated specifically to accessible transit.
    </p>
  </div>

  {/* Split Analysis Section to break up text density */}
  <div className="grid md:grid-cols-2 gap-10 mb-12 items-start">
    <div className="space-y-4">
      <p className="text-[10px] uppercase tracking-widest text-[#8C8173] font-bold">The Foundation (V0)</p>
      <p className="text-sm leading-relaxed text-[#5C7A6F]">
        The original interface (V0) relied on a dark UI that suffered from a lack of hierarchy and low-contrast text overlays. The primary CTA used a thin outline that failed to stand out against the background.
      </p>
    </div>
    <div className="space-y-4">
      <p className="text-[10px] uppercase tracking-widest text-[#14526b] font-bold">Changes Implemented (V1 & V2)</p>
      <p className="text-sm leading-relaxed text-[#5C7A6F]">
        V1 replaces the dark overlay with cityscape imagery and centered the headline "Unlock your city" to improve visual hierarchy. While cleaner, the design and subtitle "Experience seamless transit in cities worldwide" still failed to signal the specific accessibility mission. V2 refined this language with specific promises of "step-free routes and accessible stations," directly addressing the primary user goal. The cityscape imagery was replaced with an image of a blue path toward a station elevator, giving the mission more visibility.
      </p>
    </div>
  </div>

  {/* Hero Page Evolution Grid */}
  <div className="mb-8">
    <p className="text-[9px] uppercase tracking-widest text-[#14526b] font-bold mb-6 text-center">Hero Page Evolution</p>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { 
          img: "/um-hero-og.png", 
          label: "V0", 
          status: "before", 
          note: "Low contrast and text-heavy overlays obscured mission clarity." 
        },
        { 
          img: "/um-hero-redesign-1.png", 
          label: "V1", 
          status: "wip", 
          note: "Optimized hierarchy and navigation, but maintained a generic transit feel." 
        },
        { 
          img: "/um-new-hero.jpg", 
          label: "V2", 
          status: "after", 
          note: "Mission-driven imagery and accessibility focus." 
        },
      ].map((item, i) => (
        <div key={i} className="flex flex-col">
          {/* aspect-video ensures all images are the same height regardless of source file */}
          <div className="relative aspect-video mb-4 overflow-hidden rounded-xl border border-[#E0D9CE]/60 bg-white transition-all hover:shadow-md">
            <Image 
              src={item.img} 
              alt={item.label} 
              fill
              className="object-cover" 
            />
            <div className={`absolute top-2 left-2 px-2 py-1 text-white text-[8px] font-bold uppercase rounded shadow-sm z-10 ${
              item.status === 'before' ? 'bg-red-500' : 
              item.status === 'wip' ? 'bg-[#e7b25d]' : 'bg-green-600'
            }`}>
              {item.label}
            </div>
          </div>
          <p className="text-[10px] text-[#5C7A6F] leading-relaxed text-center italic px-2">
            {item.note}
          </p>
        </div>
      ))}
    </div>
  </div>

{/* ============ CITIES & ABOUT EVOLUTION (Tall Box Fix) ============ */}
<div className="grid md:grid-cols-2 gap-6 items-stretch w-full">
        
        {/* LEFT CARD: About Carousel */}
        <div className="bg-white/40 rounded-2xl p-6 border border-[#E0D9CE]/40 shadow-sm flex flex-col h-full">
          <div className="mb-4 shrink-0">
            <p className="text-[9px] uppercase tracking-widest text-[#14526b] font-bold mb-2">Problem/Solution Carousel</p>
            <h4 className="text-sm font-semibold text-[#2C3E3A] mb-2">Reducing Cognitive Load</h4>
            <p className="text-[11px] text-[#5C7A6F] leading-relaxed">
              The original "About" page greeted users with dense walls of text, and the excessive vertical space it took forced users to scroll multiple times. I refactored this into a swipeable carousel with the following three cards to break the narrative into digestible chunks.
            </p>
          </div>
          
          {/* IMAGE AREA: Forced to 450px height so nothing gets cut off */}
          <div className="relative w-full h-[450px] mb-4 rounded-xl border border-[#E0D9CE]/60 bg-[#FAFAFA] overflow-hidden shadow-inner">
            <Image 
              src={aboutShowAfter ? "/um-about-after.jpg" : "/um-about-before.png"} 
              alt="About evolution" 
              fill
              className="object-contain p-2" 
            />
                     </div>
          
          <button 
            onClick={() => setAboutShowAfter(!aboutShowAfter)}
            className="w-full shrink-0 py-2.5 bg-[#14526b]/10 hover:bg-[#14526b]/20 rounded-full text-[10px] font-bold text-[#14526b] uppercase tracking-widest transition-colors"
          >
            {aboutShowAfter ? "See Original" : "See Design Solution"}
          </button>
        </div>

        {/* RIGHT CARD: Cities Refinement (Vertical Stack) */}
        <div className="bg-white/40 rounded-2xl p-6 border border-[#E0D9CE]/40 shadow-sm flex flex-col h-full">
          <div className="mb-4 shrink-0">
            <p className="text-[9px] uppercase tracking-widest text-[#14526b] font-bold mb-2">Cities Page Refinement</p>
            <h4 className="text-sm font-semibold text-[#2C3E3A] mb-2">Scalable Filtering Logic</h4>
            <p className="text-[11px] text-[#5C7A6F] leading-relaxed">
              The original design used a static grid that failed to scale as more cities were added. I introduced region-based filtering and a search function to organize the expanding dataset and streamline navigation.
            </p>
          </div>

          {/* GRID: Changed to grid-cols-1 (Vertical Stack) + grid-rows-3 to fill height evenly */}
          <div className="grid grid-cols-1 grid-rows-3 gap-2 w-full h-[450px] mb-4">
            {[
              { img: "/um-city-before.png", label: "Original", status: "before" },
              { img: "/um-city-wireframe.png", label: "Wireframe", status: "wip" },
              { img: "/um-city-prototype.jpg", label: "Prototype", status: "after" },
            ].map((item, i) => (
              <div key={i} className="relative w-full h-full rounded-lg border border-[#E0D9CE]/60 bg-[#FAFAFA] overflow-hidden shadow-inner">
                {/* object-contain keeps the whole image visible inside the horizontal slot */}
                <Image 
                  src={item.img} 
                  alt={item.label} 
                  fill
                  className="object-contain p-2" 
                />
                <div className={`absolute top-2 left-2 px-1.5 py-0.5 text-[#0b3b42] text-[9px] font-bold uppercase rounded z-10 ${
                  item.status === 'before' ? 'bg-[#f5e4dd]' : 
                  item.status === 'wip' ? 'bg-[#f1e0c6]' : 'bg-[#d4e9f1]'
                }`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-auto shrink-0 bg-[#F1F5F9]/50 rounded-lg p-3 border border-slate-200">
            <p className="text-[10px] text-[#475569] leading-tight text-center italic">
              <strong>Deliverable:</strong> Filterable, searchable prototype that integrates a global map view to visualize all of the places the platform serves.
            </p>
          </div>
          </div> </div>
        </div>

    {/* 3.3: THE JOURNEY VALIDATOR (The New Functional Layer) */}
    <div className="border-t border-[#E0D9CE]/60 pt-8">
      <div className="mb-8">
        <p className="text-[9px] uppercase tracking-widest text-[#14526b] font-bold mb-2">3.3 The Verification Layer</p>
        <h3 className="text-lg font-light text-[#2C3E3A]">Addressing the Gap in Unlocked Maps</h3>
      </div>

      <div className="bg-[#14526b] text-white rounded-2xl p-6 mb-8 shadow-sm">
        <div className="grid md:grid-cols-[1fr,0.6fr] gap-4 items-center">
          <div>
            <p className="text-[9px] uppercase tracking-widest text-[#e7b25d] font-bold mb-2">The Problem</p>
            <p className="text-sm font-light leading-relaxed text-white/90">
            Accessibility data isn't integrated into standard apps like Google or Apple Maps. Since the current platform lacks route-finding, users must plan trips elsewhere and manually verify individual stations here, forcing inconvenient <strong className="text-[#e7b25d]">app-switching</strong> on the go.      </p>
          </div>
          <div className="bg-white/10 rounded-xl p-2.5 border border-white/10">
            <p className="text-[9px] uppercase tracking-widest text-[#e7b25d] font-bold mb-1"> Goal</p>
            <p className="text-[11px] leading-relaxed text-white/90">
            End-to-end navigation that integrates route-finding directly with accessibility data.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-2.5 border border-white/10">
            <p className="text-[9px] uppercase tracking-widest text-[#e7b25d] font-bold mb-1"> Proposed Solution</p>
            <p className="text-[11px] leading-relaxed text-white/90">
           This gap would be filled by a 'Journey Validator' feature, which would audit users' specific routes for accessibility barriers. Users can input their start and end points to instantly verify the accessibility status of every station along the route.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-[9px] uppercase tracking-widest text-[#14526b] font-bold mb-4">Prototype Wireframe</p>
        <Image src="/um-jv-concept.png" alt="Concept comparison" width={1000} height={600} className="w-full max-w-2xl h-auto rounded-xl border border-[#E0D9CE]/60 bg-white mx-auto mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { id: "A", name: "List-First", pro: "Maximum detail", con: "No spatial view" },
            { id: "B", name: "Floating Detail", pro: "Expansive map", con: "Directions obscured" },
            { id: "C", name: "Split-View", pro: "Balanced context", con: "Small touch targets" },
            { id: "D", name: "Step-Through", pro: "Zero distraction", con: "No journey overview" }
          ].map((concept, i) => (
            <div key={i} className="bg-white border border-[#E0D9CE]/60 rounded-xl p-2.5 shadow-sm">
              <p className="text-[10px] font-bold text-[#2C3E3A] mb-1 leading-tight text-center">Concept {concept.id}</p>
              <p className="text-[9px] text-[#5C7A6F] leading-tight mb-1"><span className="text-green-600 font-bold">Pro:</span> {concept.pro}</p>
              <p className="text-[9px] text-[#5C7A6F] leading-tight"><span className="text-red-500 font-bold">Con:</span> {concept.con}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ============ 04. TECHNICAL SOLUTION ============ */}
      <section className="py-10 px-6 max-w-5xl mx-auto border-t border-[#E0D9CE]/60">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-6 bg-[#14526b]"></span>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#14526b] font-bold">04. Dev Work</p>
        </div>
        <h2 className="text-3xl font-light text-[#2C3E3A] leading-tight mb-4">
          Expanding the Unlocked Maps Network: <span className="italic font-serif text-[#14526b]">Washington D.C.</span>
        </h2>
        <p className="text-base font-light text-[#5C7A6F] max-w-2xl mb-6">
          In addition to design work, I implemented the DC Metro data layer using WMATA APIs, web scrapers, and custom regex parsers.
        </p>

        <div className="bg-white rounded-2xl p-6 border border-[#E0D9CE]/40 shadow-sm mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <p className="text-lg font-light text-[#2C3E3A]">98 Stations · 6 Lines</p>
            <div className="flex gap-1.5">
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
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-black text-white"
                  style={{ backgroundColor: line.color }}
                >
                  {line.code}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { source: "WMATA Directory", api: "/jStations" },
              { source: "Open Data DC", api: "GeoJSON" },
              { source: "Elevator API", api: "/Incidents" },
            ].map((item, i) => (
              <div key={i} className="bg-[#F5F3EF] rounded-lg p-3 text-center">
                <p className="text-[10px] font-semibold text-[#2C3E3A]">{item.source}</p>
                <span className="text-[8px] px-1.5 py-0.5 bg-[#14526b]/10 text-[#14526b] rounded font-mono">{item.api}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#0e3951] text-white rounded-2xl p-5">
            <p className="text-[9px] uppercase tracking-widest text-[#e7b25d] font-bold mb-3">Elevator Cron Job</p>
            <p className="text-xs text-white/70 mb-3">Python script fetches real-time incidents, filters escalators, uses fuzzy matching for station names.</p>
                     </div>
          <div className="bg-[#c8f1ff] text-[#0e3951] rounded-2xl p-5">
            <p className="text-[9px] uppercase tracking-widest font-bold mb-3">Ticket Office Scraper</p>
            <p className="text-xs opacity-80 mb-3">No API existed—built regex scraper to detect station names in free-text entries.</p>
            <code className="text-[9px] font-mono bg-white/50 px-2 py-1 rounded">&quot;Commuter Store at X Station&quot;</code>
          </div>
        </div>
      </section>

      {/* ============ 05. OUTCOME ============ */}
      <section className="py-10 bg-[#0e3951] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[9px] tracking-[0.4em] uppercase text-white/40 font-bold mb-4">05. Outcome</p>
          <h2 className="text-4xl font-extralight leading-tight mb-4">
            <span className="italic font-serif text-[#e7b25d]">Participation</span> over Navigation
          </h2>
          <p className="text-sm text-white/60 font-light max-w-xl mx-auto mb-6">
            Ensuring disabled riders have the autonomy to participate fully in urban life.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-left mb-6">
            {[
              { title: "UI/UX Audit Report", desc: "Interface evaluation with pain points and recommendations" },
              { title: "Interactive Prototype", desc: "Carousel, hover effects, redesigned pages in Retool" },
              { title: "DC Data Layer", desc: "98 stations with real-time accessibility flags" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-sm font-semibold mb-1">{item.title}</p>
                <p className="text-[10px] text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#14526b] p-5 rounded-2xl max-w-lg mx-auto">
            <p className="text-base font-light">
              Architected the <span className="text-[#e7b25d] font-semibold">DC Metro data ecosystem</span>—elevator status for nearly 100 stations.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 06. REFLECTION ============ */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-6 bg-[#14526b]"></span>
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#14526b] font-bold">06. Reflection</p>
        </div>
        <h2 className="text-2xl font-light text-[#2C3E3A] leading-tight mb-6">
          Key Takeaways &amp; Next Steps
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { title: "Reducing interaction cost", detail: "For users in transit, every second counts. For this project, it was important for design decisions to prioritize immediate status visibility over deep navigation, so users can use the platform to make decisions on the go." },
              { title: "Implementing purpose-driven UI", detail: "Early iterations suffered from visual clutter; I had to figure out when to follow a 'less is more' approach. I wanted to ensure that visual elements were able to direct user attention effectively and simplify the consumption of complex data." },
              { title: "Data quality determines trust", detail: "Real-time data is only valuable if accurate. Real-time feeds are often messy and inconsistent. I built a robust normalization layer to clean and standardize inputs from various sources/APIs, ensuring a single, reliable source of truth for each station in the database." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-xl font-extralight text-[#e7b25d]">0{i + 1}</span>
                <div>
                  <p className="text-xs font-semibold text-[#2C3E3A] mb-0.5">{item.title}</p>
                  <p className="text-[10px] text-[#5C7A6F]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#F5F3EF] rounded-xl p-5 border border-[#E0D9CE]">
            <p className="text-[9px] uppercase tracking-widest text-[#14526b] font-bold mb-3">Next Steps</p>
            <div className="space-y-2">
              {[
                { action: "Deployment", status: "In Progress" },
                { action: "Twitter/X API integration", status: "Pending" },
                { action: "Community reporting feature", status: "Planned" },
                { action: "Journey Validator", status: "Planned" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-white rounded-lg px-3 py-2">
                  <span className="text-[10px] text-[#2C3E3A]">{item.action}</span>
                  <span className={`text-[8px] px-2 py-0.5 rounded-full font-medium ${
                    item.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                    item.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-[#2C3E3A] font-light max-w-2xl">
          <strong>Accessible design isn&apos;t a feature—it should be the foundation.</strong> 
        </p>
      </section>

     
    </main>
  );
}

