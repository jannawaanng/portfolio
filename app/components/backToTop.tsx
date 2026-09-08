"use client";

import { useState, useEffect } from "react";

const BUNNY_MASK: React.CSSProperties = {
  WebkitMaskImage: "url('/bunny.png')",
  maskImage: "url('/bunny.png')",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
};

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`
  group fixed bottom-7 right-7 z-[9999]
  h-14 w-14 rounded-full
  border border-[#1A1816]/20
hover:bg-[#F5EFE8]
backdrop-blur-md
  shadow-[0_8px_24px_-6px_rgba(90,120,140,0.2)]
  transition-all duration-300 ease-out
  hover:shadow-[0_12px_30px_-8px_rgba(90,120,140,0.28)]
  active:scale-95
  bg-[#F0E9E0]/90
  ${visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"}
`}
    >{/* GLOSSY TOP SHEEN — bright arc across the upper half */}
<span
  aria-hidden="true"
  className="pointer-events-none absolute inset-x-1 top-1 h-1/2 rounded-t-full bg-gradient-to-b from-white/70 to-transparent blur-[1px]"
/>

{/* SPECULAR HIGHLIGHT — the shiny hotspot real glass has */}
<span
  aria-hidden="true"
  className="pointer-events-none absolute left-3 top-2 h-3 w-4 rounded-full bg-white/80 blur-[3px]"
/>
      <div className=" h-9 w-9">
        {/* FILLED BUNNY */}
        <div
          className="
            absolute inset-1
bg-[#7FB0C4]
group-hover:bg-[#8FC0D2]
            transition-colors duration-200
          "
          style={BUNNY_MASK}
        />

        {/* ARROW */}
        <span className="absolute inset-0 flex items-center justify-center translate-y-[4px] text-white inter-events-none drop-shadow-[0_1px_1px_rgba(60,90,130,0.5)]">
          ↑
        </span>
      </div>
    </button>
  );
}
