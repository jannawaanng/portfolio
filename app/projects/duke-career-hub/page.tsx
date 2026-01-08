"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 md:py-16 bg-gradient-to-br from-[#fef5e7] via-[#f4e8cf] to-[#ffe8d6] overflow-hidden">
      {/* Enhanced animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-10 w-64 h-64 rounded-full bg-[#DDEBFF] blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 -right-16 w-56 h-56 rounded-full bg-[#F6E6FF] blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-60px] left-1/4 w-48 h-48 rounded-full bg-[#DFF7F0] blur-3xl opacity-70 animate-blob animation-delay-4000" />
        
        {/* Floating carrots in background */}
        <div className="absolute top-20 left-[15%] opacity-20 animate-float-slow">
          <div className="text-4xl">🥕</div>
        </div>
        <div className="absolute top-[60%] right-[20%] opacity-15 animate-float-slower">
          <div className="text-3xl rotate-45">🥕</div>
        </div>
        <div className="absolute bottom-32 left-[25%] opacity-20 animate-float">
          <div className="text-2xl -rotate-12">🥕</div>
        </div>
      </div>

      {/* Main content - tighter, more dynamic layout */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-10 max-w-6xl w-full">
       {/* LEFT: Text block - more compact */}
<div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-[520px]">
  {/* Animated speech bubble */}
  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 border-2 border-[#E2E0DA] shadow-lg mb-5 hover:scale-105 transition-transform cursor-default">
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8F9CF5] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8F9CF5]"></span>
    </span>
    <span className="text-sm font-semibold text-[#6b837b] tracking-wide">
      HI! MY NAME IS
    </span>
  </div>

  {/* Name with dynamic underline */}
  <div className="relative inline-block mb-4 name-wrapper group">
    <div className="name-underline absolute inset-x-0 bottom-2 h-5 rounded-full -z-10 group-hover:h-6 transition-all duration-300" />
    <h1 className="relative text-[clamp(48px,8vw,72px)] font-bold tracking-tight text-[#203237] drop-shadow-sm">
      Janna
    </h1>
    <span className="absolute -top-8 -right-8 text-4xl animate-wave">🐰</span>
  </div>

  {/* Role with icon */}
  <p className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/95 to-[#f0f9ff]/95 border-2 border-[#E2E0DA] text-[16px] sm:text-[17px] font-semibold text-[#4A6A61] mb-6 shadow-md">
    <span className="text-xl">✨</span>
    product designer &amp; engineer
  </p>

  {/* Description with highlights */}
  <p className="text-[16px] sm:text-[18px] leading-relaxed text-[#5C7A6F] max-w-xl mb-8">
    I love tackling design challenges through{" "}
    <span className="inline-block px-2 py-0.5 rounded bg-[#e4f2ec] font-bold text-[#3a7a5f] hover:scale-110 transition-transform cursor-default">accessible</span>,{" "}
    <span className="inline-block px-2 py-0.5 rounded bg-[#f6e6ff] font-bold text-[#7a3a9f] hover:scale-110 transition-transform cursor-default">intuitive</span>,{" "}
    <span className="inline-block px-2 py-0.5 rounded bg-[#fff4e6] font-bold text-[#9f6a3a] hover:scale-110 transition-transform cursor-default">human-centered</span>{" "}
    experiences that{" "}
    <span className="inline-block px-2 py-0.5 rounded bg-[#ffe6f0] font-bold text-[#9f3a6a] hover:scale-110 transition-transform cursor-default">spark joy</span>!
  </p>

  {/* Carrot CTA */}
  <div className="mt-2 flex justify-center md:justify-start">
    <button
      onClick={() => {
        const firstCard = document.getElementById("first-project");
        firstCard?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="group relative px-6 py-3 rounded-full bg-gradient-to-br from-[#ff8c42] to-[#ff6b35] text-white text-base font-bold shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-3">
        <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🥕</span>
        <span>Dig into my work</span>
        <span className="text-xl group-hover:translate-y-1 transition-transform duration-300">↓</span>
      </span>
      {/* Bite effect on hover */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-[#f4e8cf] rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  </div>
</div>


        {/* RIGHT: Bunny garden scene with interactive elements */}
        <div className="flex-1 flex items-center justify-center md:justify-start md:pl-4">
          <div className="relative w-[320px] sm:w-[360px] md:w-[400px] aspect-square">
            {/* Glowing garden base */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,248,220,0.98),rgba(244,232,207,0.3))] blur-sm" />

            {/* Garden ground with grass */}
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[85%] h-24 rounded-[100%] bg-gradient-to-b from-[#a8d5a3] to-[#7ab574] border-4 border-[#6a9f65] shadow-2xl">
              {/* Grass tufts */}
              <div className="absolute -top-2 left-[20%] text-xl animate-sway">🌱</div>
              <div className="absolute -top-1 left-[40%] text-lg animate-sway-delayed">🌿</div>
              <div className="absolute -top-2 left-[60%] text-xl animate-sway">🌱</div>
              <div className="absolute -top-1 left-[80%] text-lg animate-sway-delayed">🌿</div>
            </div>

            {/* Bunny on the garden - larger, more prominent */}
            <div className="absolute left-1/2 bottom-1/4 -translate-x-1/2 translate-y-[-45%] z-20 bunny-hop cursor-pointer hover:scale-110 transition-transform">
              <div className="relative w-32 h-32 md:w-36 md:h-36">
                <Image
                  src="/bunny-moon.png"
                  alt="Bunny in the garden"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Carrots growing around - interactive */}
            <div className="absolute top-[35%] left-[15%] carrot-grow cursor-pointer hover:scale-125 hover:-translate-y-2 transition-all group">
              <div className="text-4xl drop-shadow-lg">🥕</div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-2 py-1 rounded text-xs font-bold text-[#ff6b35] whitespace-nowrap shadow-lg">
                Fresh!
              </div>
            </div>
            
            <div className="absolute top-[45%] right-[12%] carrot-grow animation-delay-1000 cursor-pointer hover:scale-125 hover:-translate-y-2 transition-all group">
              <div className="text-4xl drop-shadow-lg rotate-12">🥕</div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-2 py-1 rounded text-xs font-bold text-[#ff6b35] whitespace-nowrap shadow-lg">
                Yum!
              </div>
            </div>
            
            <div className="absolute bottom-[22%] left-[25%] carrot-grow animation-delay-2000 cursor-pointer hover:scale-125 hover:-translate-y-2 transition-all group">
              <div className="text-3xl drop-shadow-lg -rotate-6">🥕</div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-2 py-1 rounded text-xs font-bold text-[#ff6b35] whitespace-nowrap shadow-lg">
                Crispy!
              </div>
            </div>

            {/* Flowers and details */}
            <div className="absolute top-[28%] left-[35%] text-2xl animate-float">🌸</div>
            <div className="absolute top-[38%] right-[30%] text-xl animate-float-slower">🌼</div>
            <div className="absolute bottom-[35%] left-[42%] text-lg animate-float-slow">🌺</div>

            {/* Floating sparkles */}
            <StarDot className="top-12 left-20" delay="0s" size="sm" />
            <StarDot className="top-16 right-16" delay="0.3s" size="xs" />
            <StarDot className="top-[45%] left-8" delay="0.6s" size="sm" />
            <StarDot className="top-[55%] right-12" delay="0.9s" size="xs" />
            <StarDot className="bottom-28 left-16" delay="1.2s" size="sm" />
            <StarDot className="bottom-20 right-20" delay="1.5s" size="xs" />

            {/* Design process labels - repositioned */}
            <ConstellationLabel
              label="🔍 research"
              className="absolute top-8 left-1/2 -translate-x-1/2"
            />
            <ConstellationLabel
              label="✏️ design"
              className="absolute top-1/2 -left-20 -translate-y-1/2"
            />
            <ConstellationLabel
              label="🚀 build"
              className="absolute bottom-12 right-0"
            />
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx global>{`
        /* Blob animation */
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Floating animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }
        @keyframes float-slower {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 6s ease-in-out infinite;
        }

        /* Wave animation for bunny emoji */
        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
        }

        /* Bunny hop */
        @keyframes bunny-hop {
          0%, 100% {
            transform: translate(-50%, -45%) translateY(0) rotate(-2deg);
          }
          50% {
            transform: translate(-50%, -45%) translateY(-12px) rotate(2deg);
          }
        }
        .bunny-hop {
          animation: bunny-hop 3s ease-in-out infinite;
        }

        /* Carrot growing animation */
        @keyframes carrot-grow {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-5px) rotate(3deg) scale(1.05);
          }
        }
        .carrot-grow {
          animation: carrot-grow 4s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Grass sway */
        @keyframes sway {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        @keyframes sway-delayed {
          0%, 100% {
            transform: rotate(3deg);
          }
          50% {
            transform: rotate(-3deg);
          }
        }
        .animate-sway {
          animation: sway 3s ease-in-out infinite;
          transform-origin: bottom;
        }
        .animate-sway-delayed {
          animation: sway-delayed 3s ease-in-out infinite;
          transform-origin: bottom;
        }

        /* Star twinkle */
        @keyframes star-twinkle {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }
        .star-twinkle {
          animation: star-twinkle 2.5s ease-in-out infinite;
        }

        /* Dynamic name */
        @keyframes name-breathe {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        .name-wrapper h1 {
          animation: name-breathe 4s ease-in-out infinite;
        }

        .name-underline {
          background: linear-gradient(90deg, #ffd6e8, #e4f2ec, #f6e6ff, #fff4e6, #ffd6e8);
          background-size: 200% 100%;
          animation: underline-shimmer 8s ease-in-out infinite;
        }
        @keyframes underline-shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Chip float - gentler */
        @keyframes chip-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .chip-float-inner {
          animation: chip-float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

/* Enhanced constellation-style label with emoji */
type ConstellationProps = {
  label: string;
  className?: string;
};

function ConstellationLabel({ label, className = "" }: ConstellationProps) {
  return (
    <div className={`chip-float-inner ${className}`}>
      <div className="flex items-center gap-2 hover:scale-110 transition-transform cursor-default">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ffd700] star-twinkle shadow-lg" />
        <span className="h-[2px] w-8 bg-gradient-to-r from-[#ffd700] to-[#E9D9AA]" />
        <span className="rounded-full bg-white/98 border-2 border-[#E7E0D3] px-4 py-2 text-[12px] sm:text-[13px] font-bold text-[#5C7A6F] shadow-[0_10px_20px_rgba(44,68,60,0.12)] whitespace-nowrap hover:shadow-[0_12px_24px_rgba(44,68,60,0.18)] transition-shadow">
          {label}
        </span>
      </div>
    </div>
  );
}

/* Enhanced star dots with glow */
type StarProps = {
  className?: string;
  delay?: string;
  size?: "xs" | "sm";
};

function StarDot({ className = "", delay = "0s", size = "xs" }: StarProps) {
  const dimension = size === "sm" ? "h-2 w-2" : "h-1.5 w-1.5";
  return (
    <div
      className={`absolute ${dimension} rounded-full bg-gradient-to-br from-[#ffd700] to-[#F7D18F] star-twinkle shadow-lg ${className}`}
      style={{ animationDelay: delay }}
    />
  );
}