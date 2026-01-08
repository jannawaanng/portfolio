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
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Back to top"
      className="
        fixed bottom-4 right-2
        z-[9999]
        h-16 w-16
        bg-transparent
        group
        transition-transform duration-200
        hover:scale-105 active:scale-95  /* bunny + arrow scale together */
      "
    >
      <div className="relative h-full w-full flex items-center justify-center">
        {/* GLASS BUNNY */}
        <div
          className="
            absolute inset-0
            bg-[#82a3c6]
            backdrop-blur-md
          "
          style={BUNNY_MASK}
        />

        {/* FILLED BUNNY */}
        <div
          className="
            absolute inset-[4px]
            bg-[#95b8d3]
            group-hover:bg-[#a0c6e4]
            transition-colors duration-300
          "
          style={BUNNY_MASK}
        />

        {/* ARROW – same look, no separate scaling */}
        <span className="relative text-white text-lg translate-y-1.5 pointer-events-none">
          ↑
        </span>
      </div>
    </button>
  );
}
