"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 md:py-24 bg-[#f4e8cf] overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-10 w-52 h-52 rounded-full bg-[#DDEBFF] blur-3xl opacity-60" />
        <div className="absolute top-1/3 -right-16 w-48 h-48 rounded-full bg-[#F6E6FF] blur-3xl opacity-60" />
        <div className="absolute bottom-[-60px] left-1/4 w-40 h-40 rounded-full bg-[#DFF7F0] blur-3xl opacity-60" />
        
        {/* Floating Background Sparkles to fill empty space */}
        <div className="absolute top-1/4 left-[10%] animate-pulse opacity-40"><StarDot size="sm" /></div>
        <div className="absolute bottom-1/4 left-[5%] animate-bounce opacity-30"><StarDot size="xs" /></div>
        <div className="absolute top-1/2 left-[45%] animate-pulse opacity-20"><StarDot size="sm" /></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-14 max-w-6xl w-full">
        
        {/* LEFT: Text block */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-[480px]">
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/85 border border-[#E2E0DA] shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8F9CF5]" />
            <span className="text-sm font-medium text-[#6b837b]">hi! my name is</span>
          </div>

          <div className="relative inline-block mb-3 name-wrapper">
            <div className="name-underline absolute inset-x-0 bottom-1 h-4 rounded-full -z-10" />
            <h1 className="relative text-[clamp(42px,7vw,64px)] font-semibold tracking-tight text-[#203237]">
              Janna
            </h1>
            {/* Visual Bridge: Stardust trail leading from name to the Moon */}
            <div className="hidden md:block absolute -right-24 top-1/2 w-32 h-px bg-gradient-to-r from-[#F7D18F] to-transparent opacity-40 pointer-events-none">
                <div className="absolute -right-2 -top-1"><StarDot size="xs" /></div>
            </div>
          </div>

          <p className="inline-flex items-center justify-center md:justify-start px-4 py-2 rounded-full bg-white/90 border border-[#E2E0DA] text-[15px] sm:text-[16px] text-[#4A6A61] mb-5">
            product designer &amp; engineer
          </p>

          <p className="text-[15px] sm:text-[17px] leading-relaxed text-[#5C7A6F] max-w-xl mb-8">
            I love tackling design challenges through{" "}
            <span className="font-semibold text-[#5a8970]">accessible</span>,{" "}
            <span className="font-semibold text-[#5a8970]">intuitive</span>,{" "}
            <span className="font-semibold text-[#5a8970]">human-centered</span>{" "}
            experiences that{" "}
            <span className="font-semibold text-[#5a8970]">spark joy</span>.
          </p>

          {/* THEMED CTA COMPONENT */}
          <CarrotButton />
        </div>

        {/* RIGHT: Bunny Moon */}
        <div className="flex-1 flex items-center justify-center md:justify-start md:pl-4">
          <div className="relative w-[300px] sm:w-[330px] md:w-[350px] aspect-square">
            <div className="pointer-events-none absolute inset-4 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(244,239,228,0))]" />

            {/* spinning orbit ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="orbit-ring-rotator relative w-[92%] h-[92%]">
                <div className="absolute inset-0 rounded-full border border-[#E9D9AA]/80" />
                <StarDot className="absolute -top-1 left-1/2 -translate-x-1/2" delay="0.2s" size="xs" />
                <StarDot className="absolute top-1/3 right-0" delay="0.8s" size="sm" />
              </div>
            </div>

            {/* Bunny Moon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 moon-bob">
              <Image
                src="/bunny-moon.png"
                alt="Bunny sitting on a crescent moon"
                fill
                className="object-contain"
              />
            </div>

            <ConstellationLabel label="connect" className="absolute -top-2 left-1/2 -translate-x-1/2" />
            <ConstellationLabel label="design" className="absolute top-1/2 -left-16 -translate-y-1/2" />
            <ConstellationLabel label="define" className="absolute bottom-4 right-1" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes moon-bob {
          0%, 100% { transform: translate(-50%, -50%) translateY(0) rotate(-2deg); }
          50% { transform: translate(-50%, -50%) translateY(-10px) rotate(2deg); }
        }
        .moon-bob { animation: moon-bob 6s ease-in-out infinite; }
        
        @keyframes orbit-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .orbit-ring-rotator { animation: orbit-spin-slow 50s linear infinite; }

        @keyframes carrot-shake {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg); }
          75% { transform: rotate(2deg); }
          100% { transform: rotate(0deg); }
        }
        .carrot-hover:hover { animation: carrot-shake 0.3s ease-in-out infinite; }

        .star-twinkle { animation: star-twinkle 3s ease-in-out infinite; }
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}

/**
 * THEMED CTA: The Carrot Rocket
 */
function CarrotButton() {
  const scrollToWork = () => {
    document.getElementById("first-project")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToWork}
      className="group relative flex items-center gap-3 px-8 py-3 bg-[#FF9D42] text-white font-bold rounded-2xl shadow-[0_4px_0_0_#D97711] hover:shadow-[0_2px_0_0_#D97711] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all carrot-hover"
    >
      {/* Carrot Icon / Rocket */}
      <div className="relative w-8 h-8 transition-transform group-active:-rotate-45 group-active:translate-x-2 group-active:-translate-y-2">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Carrot Body */}
          <path d="M19.5 4.5L10 14L7 11L4.5 13.5L10.5 19.5L21.5 8.5L19.5 4.5Z" fill="#FFC107" className="hidden" /> {/* Placeholder for your SVG logic */}
          <path d="M20 4C20 4 16 4 13 7C10 10 5 20 5 20C5 20 15 15 18 12C21 9 21 5 21 5L20 4Z" fill="#FB8C00" />
          <path d="M5 20C4 21 3 21 2 22C3 21 3 20 4 19L5 20Z" stroke="#FB8C00" strokeWidth="2" />
          {/* Greens */}
          <path d="M19 5L22 2M19 5L17 2M19 5L22 5" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
        </svg>
        
        {/* Blast off smoke (visible on hover) */}
        <div className="absolute -bottom-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
        </div>
      </div>

      <span className="uppercase tracking-wider text-sm">Blast Off!</span>
      
      {/* Tooltip hint */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-[#5C7A6F] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        (See my work)
      </span>
    </button>
  );
}

function ConstellationLabel({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`chip-float-inner ${className}`}>
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#F7D18F] star-twinkle" />
        <span className="h-[1px] w-6 bg-[#E9D9AA]" />
        <span className="rounded-full bg-white/95 border border-[#E7E0D3] px-3 py-1 text-[11px] text-[#5C7A6F] shadow-sm">
          {label}
        </span>
      </div>
    </div>
  );
}

function StarDot({ className = "", delay = "0s", size = "xs" }: { className?: string; delay?: string; size?: "xs" | "sm" }) {
  const dimension = size === "sm" ? "h-1.5 w-1.5" : "h-1 w-1";
  return (
    <div
      className={`absolute ${dimension} rounded-full bg-[#F7D18F]/90 star-twinkle ${className}`}
      style={{ animationDelay: delay }}
    />
  );
}