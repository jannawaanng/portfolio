"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M7 11v6M7 7v.01M11 11v6m0-3a2 2 0 0 1 4 0v3" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="M22 7l-10 6L2 7" />
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [signalSent, setSignalSent] = useState(false);

  const handleSignal = () => {
    setSignalSent(true);
    setTimeout(() => {
      window.location.href = "mailto:janna.wang@duke.edu?subject=Hey Janna! ✨";
    }, 600);
    setTimeout(() => setSignalSent(false), 3000);
  };

  const socialLinks = [
    { name: "Instagram", icon: <InstagramIcon />, href: "#" },
    { name: "LinkedIn", icon: <LinkedInIcon />, href: "#" },
    { name: "Email", icon: <MailIcon />, href: "mailto:janna.wang@duke.edu" },
  ];

  return (
    <footer className="w-full pt-8 pb-8 px-6 relative overflow-hidden">
      
      {/* Smooth gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8e7fd] via-[#544e7e] to-[#0a1d46] pointer-events-none" />
      
      {/* Soft centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#ffeadd] via-[#e0ccdd] to-[#f3ddea] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        
        {/* ══════════ CONSTELLATIONS ══════════ */}
        
        {/* Violet - top left */}
        <svg className="z-50 absolute -top-6 -left-4 w-28 h-24 opacity-70" viewBox="0 0 112 96">
          <circle cx="16" cy="32" r="3" fill="#c4b5fd" />
          <circle cx="44" cy="16" r="2.5" fill="#ddd6fe" />
          <circle cx="72" cy="36" r="3.5" fill="#a78bfa" />
          <circle cx="100" cy="20" r="2.5" fill="#c4b5fd" />
          <circle cx="56" cy="68" r="3" fill="#ddd6fe" />
          <path d="M16 32 L44 16 L72 36 L100 20" stroke="#ddd6fe" strokeWidth="0.8" fill="none" opacity="0.8" />
          <path d="M44 16 L56 68 L72 36" stroke="#ede9fe" strokeWidth="0.6" fill="none" opacity="0.6" />
        </svg>
        
        {/* Pink - top right */}
        <svg className="z-50 absolute -top-6 -right-2 w-24 h-20 opacity-65" viewBox="0 0 96 80">
          <circle cx="12" cy="24" r="3" fill="#f9a8d4" />
          <circle cx="40" cy="12" r="2.5" fill="#fbcfe8" />
          <circle cx="68" cy="28" r="3" fill="#f472b6" />
          <circle cx="88" cy="16" r="2" fill="#f9a8d4" />
          <circle cx="48" cy="56" r="2.5" fill="#fce7f3" />
          <path d="M12 24 L40 12 L68 28 L88 16" stroke="#fbcfe8" strokeWidth="0.7" fill="none" opacity="0.8" />
          <path d="M40 12 L48 56 L68 28" stroke="#fce7f3" strokeWidth="0.5" fill="none" opacity="0.6" />
        </svg>
        
        {/* Gold - bottom left */}
        <svg className="z-50 absolute -bottom-0 -left-7 w-24 h-20 opacity-75" viewBox="0 0 96 80">
          <circle cx="12" cy="24" r="2.5" fill="#fcd34d" />
          <circle cx="40" cy="12" r="3" fill="#fde68a" />
          <circle cx="68" cy="28" r="2.5" fill="#fbbf24" />
          <circle cx="48" cy="52" r="3" fill="#fcd34d" />
          <circle cx="84" cy="60" r="2" fill="#fef3c7" />
          <path d="M12 24 L40 12 L68 28" stroke="#fde68a" strokeWidth="0.6" fill="none" opacity="0.8" />
          <path d="M40 12 L48 52 L68 28" stroke="#fef3c7" strokeWidth="0.5" fill="none" opacity="0.6" />
          <path d="M48 52 L84 60" stroke="#fef3c7" strokeWidth="0.4" fill="none" opacity="0.5" />
        </svg>
        
        {/* Violet - bottom right */}
        <svg className="z-50 absolute -bottom-8 -right-4 w-28 h-22 opacity-80" viewBox="0 0 112 88">
          <circle cx="16" cy="22" r="3" fill="#a78bfa" />
          <circle cx="48" cy="10" r="2.5" fill="#c4b5fd" />
          <circle cx="80" cy="26" r="3" fill="#8b5cf6" />
          <circle cx="100" cy="14" r="2" fill="#ddd6fe" />
          <circle cx="60" cy="58" r="2.5" fill="#c4b5fd" />
          <circle cx="92" cy="72" r="2.5" fill="#ddd6fe" />
          <path d="M16 22 L48 10 L80 26 L100 14" stroke="#ddd6fe" strokeWidth="0.7" fill="none" opacity="0.8" />
          <path d="M48 10 L60 58 L80 26" stroke="#ede9fe" strokeWidth="0.5" fill="none" opacity="0.6" />
          <path d="M60 58 L92 72" stroke="#ede9fe" strokeWidth="0.4" fill="none" opacity="0.5" />
        </svg>

        {/* ══════════ STARS ══════════ */}
        
        <div className="z-50 absolute -top-1 left-[18%] text-violet-400/60 text-sm animate-pulse">✦</div>
        <div className="z-50 absolute -top-3 left-[38%] text-pink-300/50 text-xs animate-pulse delay-200">✧</div>
        <div className="z-50 absolute -top-5 right-[35%] text-violet-300/50 text-sm animate-pulse delay-400">✧</div>
        <div className="z-50 absolute -top-4 right-[18%] text-pink-400/45 text-xs animate-pulse delay-100">✦</div>
        
        <div className="z-50 absolute -bottom-4 left-[22%] text-amber-400/45 text-xs animate-pulse delay-300">✦</div>
        <div className="z-50 absolute -bottom-6 left-[42%] text-violet-400/50 text-sm animate-pulse delay-500">✧</div>
        <div className="z-50 absolute -bottom-3 right-[28%] text-pink-300/45 text-xs animate-pulse delay-150">✦</div>
        <div className="z-50 absolute -bottom-5 right-[15%] text-violet-300/50 text-sm animate-pulse delay-350">✧</div>

        {/* Sparkle dots */}
        <div className="z-50 absolute -top-2 left-[28%] w-1 h-1 bg-violet-400/50 rounded-full animate-pulse delay-100" />
        <div className="z-50 absolute -top-4 right-[45%] w-1.5 h-1.5 bg-pink-300/40 rounded-full animate-pulse delay-300" />
        <div className="z-50 absolute -bottom-2 left-[48%] w-1 h-1 bg-amber-400/40 rounded-full animate-pulse delay-200" />
        <div className="z-50 absolute -bottom-4 right-[38%] w-1.5 h-1.5 bg-violet-300/45 rounded-full animate-pulse delay-400" />

        {/* ══════════ MAIN CARD ══════════ */}
        
        <div className="bg-white/85 backdrop-blur-sm border border-white rounded-2xl px-8 py-4 shadow-xl shadow-rose-200/25 relative z-10">
          
          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 text-violet-400/70 text-sm">✦</div>
          <div className="absolute -top-2 -right-2 text-pink-400/60 text-sm">✧</div>
          <div className="absolute -bottom-2 -left-2 text-amber-400/50 text-[11px]">✧</div>
          <div className="absolute -bottom-2 -right-2 text-violet-400/60 text-[11px]">✦</div>
          
          {/* Top row */}
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-[9px] uppercase tracking-[0.2em] text-violet-600/80 bg-violet-50/80 px-3 py-1 rounded-full border border-violet-200/40 font-medium">
              {isHome ? "✧ end of transmission ✧" : "✧ mission complete ✧"}
            </span>
            
            <div className="flex gap-1.5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 bg-white hover:bg-pink-50 rounded-full border border-stone-200/60 hover:border-pink-300 text-stone-400 hover:text-pink-500 hover:scale-110 hover:shadow-lg hover:shadow-pink-200/30 transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Main row */}
          <div className="flex items-center justify-between gap-6 mb-5">
            <h2 className="text-lg md:text-xl font-serif text-stone-700 flex items-center gap-2">
              {isHome ? (
                <>
                  You've reached the edge of my galaxy
                  <span className="text-pink-400 animate-pulse">✦</span>
                </>
              ) : (
                <>
                  Ready for re-entry?
                  <span className="inline-block hover:rotate-12 transition-transform">🛸</span>
                </>
              )}
            </h2>
            
            {isHome ? (
              <button
                onClick={handleSignal}
                disabled={signalSent}
                className={`
                  group flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium
                  transition-all duration-300
                  ${signalSent 
                    ? 'bg-gradient-to-r from-pink-100 to-violet-100 text-pink-600 scale-105 shadow-lg shadow-pink-200/50 border border-pink-200' 
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-pink-300 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-100/50'
                  }
                `}
              >
                <span className={signalSent ? 'animate-spin' : 'group-hover:rotate-12 transition-transform'}>
                  {signalSent ? '✨' : '📡'}
                </span>
                {signalSent ? 'opening mail...' : 'send me a signal'}
                {!signalSent && <span className="text-pink-400 text-xs ml-0.5">✦</span>}
              </button>
            ) : (
              <Link
                href="/"
                className="group flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white border border-stone-200 text-stone-600 hover:border-violet-300 hover:text-violet-600 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-200"
              >
                back to orbit
                <span className="group-hover:-translate-y-0.5 transition-transform">🚀</span>
              </Link>
            )}
          </div>

          {/* ══════════ BOTTOM BAR (inside card now) ══════════ */}
          
          <div className="flex items-center justify-between pt-4 border-t border-stone-100">
            <p className="text-xs text-stone-500 flex items-center gap-1.5">
              <span>open to</span>
              <span className="bg-pink-50 px-2 py-0.5 rounded-full text-pink-600 border border-pink-200/60 font-medium">collabs</span>
              <span className="text-stone-300">&</span>
              <span className="bg-violet-50 px-2 py-0.5 rounded-full text-violet-600 border border-violet-200/60 font-medium">ideas</span>
              <span className="text-stone-300">&</span>
              <span className="bg-amber-50 px-2 py-0.5 rounded-full text-amber-600 border border-amber-200/60 font-medium">hellos</span>
              <span className="text-pink-400">↗</span>
            </p>
            
            <p className="text-[11px] text-stone-400 flex items-center gap-1.5">
              <span>designed with</span>
              <span>🍵🎧💖</span>
              <span>+</span>
              <span className="font-medium text-stone-500">next.js</span>
              <span className="text-stone-300">·</span>
              <span className="font-medium text-stone-500">janna</span>
              <span>© 2026</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}