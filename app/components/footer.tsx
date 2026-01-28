"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M7 11v6M7 7v.01M11 11v6m0-3a2 2 0 0 1 4 0v3" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
    <footer className="w-full py-5 px-6 relative overflow-hidden bg-gradient-to-b from-[#FDF9F7] to-[#FBF4F0]">
      
      {/* Constellations */}
      <svg className="absolute top-1.5 right-[5%] w-20 h-16 opacity-55 pointer-events-none" viewBox="0 0 128 96">
        <circle cx="20" cy="32" r="2.5" fill="#D4B8D0" />
        <circle cx="56" cy="16" r="2" fill="#E8D4C8" />
        <circle cx="88" cy="40" r="3" fill="#C9B8D4" />
        <circle cx="108" cy="20" r="2" fill="#D4C4B8" />
        <path d="M20 32 L56 16 L88 40 L108 20" stroke="#E0D4D0" strokeWidth="1" fill="none" />
      </svg>
      
      <svg className="absolute top-4 left-[3%] w-20 h-16 opacity-60 pointer-events-none" viewBox="0 0 96 72">
        <circle cx="12" cy="24" r="2" fill="#C8D4C8" />
        <circle cx="40" cy="12" r="2.5" fill="#D4DCD4" />
        <circle cx="72" cy="28" r="2" fill="#B8C8B8" />
        <circle cx="52" cy="52" r="2.5" fill="#C8D8C8" />
        <path d="M12 24 L40 12 L72 28" stroke="#D4E0D4" strokeWidth="0.8" fill="none" />
        <path d="M40 12 L52 52" stroke="#DCE8DC" strokeWidth="0.6" fill="none" />
      </svg>
      
      <svg className="absolute bottom-5 right-[3%] w-20 h-14 opacity-75 pointer-events-none" viewBox="0 0 80 64">
        <circle cx="16" cy="20" r="2" fill="#D8C8D0" />
        <circle cx="44" cy="12" r="1.5" fill="#E0D4D8" />
        <circle cx="64" cy="32" r="2.5" fill="#D0C0C8" />
        <circle cx="36" cy="48" r="2" fill="#DCD0D4" />
        <path d="M16 20 L44 12 L64 32" stroke="#E4D8DC" strokeWidth="0.7" fill="none" />
        <path d="M44 12 L36 48 L64 32" stroke="#EAE0E4" strokeWidth="0.5" fill="none" />
      </svg>

      <div className="absolute top-4 left-[18%] text-[#D4C0C8]/50 text-xs">✦</div>
      <div className="absolute bottom-6 right-[22%] text-[#C8D0C8]/45 text-sm">✧</div>
      <div className="absolute top-6 right-[25%] text-[#D0C8D4]/40 text-[10px]">✦</div>

      <div className="max-w-5xl mx-auto relative">
        
        {/* Main row - items-center ensures the whole block is centered on mobile */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 mb-4">
          
          {/* Text section - centered on mobile */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#B8A8A0]">
              {isHome ? "end of transmission . . ." : "✧ mission complete ✧"}
            </p>
            
            <h2 className="font-serif text-xl md:text-2xl text-[#3D3530] leading-snug">
              {isHome ? (
                <>You've reached the edge of my galaxy <span className="text-[#C9A8B8]">✦</span></>
              ) : (
                <>Ready for re-entry? <span className="inline-block hover:rotate-12 transition-transform">🛸</span></>
              )}
            </h2>
          </div>
          
          {/* Action section - Row layout preserved on all screens, centered as a block */}
          <div className="flex flex-row items-center gap-3">
            {isHome ? (
              <button
                onClick={handleSignal}
                disabled={signalSent}
                className={`
                  group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium
                  transition-all duration-300
                  ${signalSent 
                    ? 'bg-[#D4DDD6] text-[#5C6B5E]' 
                    : 'bg-[#7A9E8A] text-white hover:bg-[#6B8E7A]'
                  }
                `}
              >
                <span className={signalSent ? 'animate-pulse' : ''}>
                  {signalSent ? '✨' : '📡'}
                </span>
                {signalSent ? 'opening email...' : 'send me a signal'}
              </button>
            ) : (
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#7A9E8A] text-white hover:bg-[#6B8E7A] transition-all duration-300"
              >
                back to orbit
                <span className="group-hover:-translate-y-0.5 transition-transform">🚀</span>
              </Link>
            )}
            
            <div className="flex items-center">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 text-[#A09890] hover:text-[#6B5C58] rounded-full hover:bg-[#F0E8E4] transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom line */}
        <div className="border-t border-[#E8DCD4] pt-3 flex flex-col items-center md:flex-row md:justify-between gap-2 text-[12px] text-[#A8A098]">
          <p className="flex items-center gap-1.5 justify-center">
            <span>open to</span>
            <span className="px-2 py-0.5 rounded-full bg-[#F5E8E4] text-[#8B6B60]">collabs</span>
            <span className="px-2 py-0.5 rounded-full bg-[#EDE4F0] text-[#7B6085]">ideas</span>
            <span className="px-2 py-0.5 rounded-full bg-[#F0EBE0] text-[#806B50]">hellos</span>
          </p>
          <p className="flex items-center gap-1.5 justify-center">
            <span>made with</span>
            <span>🍵🎧🤍</span>
            <span>+</span>
            <span>next.js</span>
            <span>by</span>
            <span><sup>©</sup> 2026 Janna</span>
          </p>
        </div>
        
      </div>
    </footer>
  );
}