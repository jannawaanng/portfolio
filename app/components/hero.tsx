"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 md:py-24 bg-[#f4e8cf] overflow-hidden">
      {/* Soft background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-10 w-52 h-52 rounded-full bg-[#DDEBFF] blur-3xl opacity-60" />
        <div className="absolute top-1/3 -right-16 w-48 h-48 rounded-full bg-[#F6E6FF] blur-3xl opacity-60" />
        <div className="absolute bottom-[-60px] left-1/4 w-40 h-40 rounded-full bg-[#DFF7F0] blur-3xl opacity-60" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-14 max-w-6xl w-full">
       {/* LEFT: Text block */}
<div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-[480px]">
  {/* Speech bubble – static */}
  <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/85 border border-[#E2E0DA] shadow-sm mb-4">
    <span className="w-2 h-2 rounded-full bg-[#8F9CF5]" />
    <span className="text-sm font-medium text-[#6b837b]">
      hi! my name is
    </span>
  </div>

  {/* Name */}
  <div className="relative inline-block mb-3 name-wrapper">
    <div className="name-underline absolute inset-x-0 bottom-1 h-4 rounded-full -z-10" />
    <h1 className="relative text-[clamp(42px,7vw,64px)] font-semibold tracking-tight text-[#203237]">
      Janna
    </h1>
  </div>

  {/* Role line */}
  <p className="inline-flex items-center justify-center md:justify-start px-4 py-2 rounded-full bg-white/90 border border-[#E2E0DA] text-[15px] sm:text-[16px] text-[#4A6A61] mb-5">
    product designer &amp; engineer
  </p>

  {/* Longer description */}
  <p className="text-[15px] sm:text-[17px] leading-relaxed text-[#5C7A6F] max-w-xl">
    I love tackling design challenges through{" "}
    <span className="font-semibold text-[#5a8970]">accessible</span>,{" "}
    <span className="font-semibold text-[#5a8970]">intuitive</span>,{" "}
    <span className="font-semibold text-[#5a8970]">human-centered</span>{" "}
    experiences that{" "}
    <span className="font-semibold text-[#5a8970]">spark joy</span>.
  </p>

  {/* CTA */}
  <div className="mt-5 flex justify-center md:justify-start">
    <button
      onClick={() => {
        const firstCard = document.getElementById("first-project");
        firstCard?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="px-5 py-2.5 rounded-full bg-[#203237] text-white text-sm sm:text-[15px] font-medium shadow-md hover:shadow-lg hover:scale-[1.03] hover:ring-2 hover:ring-[#203237]/10 active:scale-[0.98] transition-all flex items-center gap-2"
    >
      See my work
      <span className="text-lg">↓</span>
    </button>
  </div>
</div>


        {/* RIGHT: bunny moon with orbit + constellation chips + stars */}
        <div className="flex-1 flex items-center justify-center md:justify-start md:pl-4">
          <div className="relative w-[300px] sm:w-[330px] md:w-[350px] aspect-square">
            {/* soft radial glow behind the orbit */}
            <div className="pointer-events-none absolute inset-4 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(244,239,228,0))]" />

            {/* spinning orbit ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="orbit-ring-rotator relative w-[92%] h-[92%]">
                <div className="absolute inset-0 rounded-full border border-[#E9D9AA]/80" />

                {/* stars anchored on the ring */}
                <StarDot
                  className="absolute -top-1 left-1/2 -translate-x-1/2"
                  delay="0.2s"
                  size="xs"
                />
                <StarDot
                  className="absolute top-1/3 right-0"
                  delay="0.8s"
                  size="sm"
                />
                <StarDot
                  className="absolute bottom-0 left-1/5"
                  delay="1.4s"
                  size="xs"
                />
              </div>
            </div>

            {/* central bunny moon – smaller, clear gap */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 moon-bob">
              <Image
                src="/bunny-moon.png"
                alt="Bunny sitting on a crescent moon"
                fill
                className="object-contain"
              />
            </div>

            {/* constellation chips – poetic, mapped to research / interaction / systems */}
            <ConstellationLabel
              label="connect"
              className="absolute -top-2 left-1/2 -translate-x-1/2"
            />
            <ConstellationLabel
              label="design"
              className="absolute top-1/2 -left-16 -translate-y-1/2"
            />
            <ConstellationLabel
              label="define"
              className="absolute bottom-4 right-1"
            />

            {/* extra starfield around orbit */}
            <StarDot className="top-4 left-16" delay="0s" size="sm" />
            <StarDot className="top-11 right-14" delay="0.25s" size="xs" />
            <StarDot className="top-20 left-6" delay="0.5s" size="xs" />
            <StarDot className="top-1/3 right-7" delay="0.75s" size="sm" />
            <StarDot className="top-1/2 left-4" delay="1s" size="xs" />
            <StarDot className="top-[62%] right-14" delay="1.25s" size="sm" />
            <StarDot className="bottom-20 left-14" delay="1.5s" size="xs" />
            <StarDot className="bottom-14 right-12" delay="1.75s" size="sm" />
            <StarDot className="bottom-7 left-1/3" delay="2s" size="xs" />
            <StarDot className="top-[46%] right-1/3" delay="2.25s" size="xs" />
          </div>
        </div>
      </div>

      {/* Animations + utilities */}
      <style jsx global>{`
        /* Bunny float */
        @keyframes moon-bob {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0) rotate(-2deg);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-6px) rotate(2deg);
          }
        }
        .moon-bob {
          animation: moon-bob 6s ease-in-out infinite;
          transform-origin: center;
        }

        /* Orbit ring spins slowly */
        @keyframes orbit-spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .orbit-ring-rotator {
          animation: orbit-spin-slow 50s linear infinite;
          transform-origin: center;
        }

        /* Chips gently float but stay readable */
        @keyframes chip-float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .chip-float-inner {
          animation: chip-float 6s ease-in-out infinite;
        }

        /* Star twinkle */
        @keyframes star-twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.35);
          }
        }
        .star-twinkle {
          animation: star-twinkle 3s ease-in-out infinite;
        }

        /* Dynamic name */
        @keyframes name-breathe {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        .name-wrapper h1 {
          animation: name-breathe 7s ease-in-out infinite;
        }

        .name-underline {
          background: linear-gradient(90deg, #e4f2ec, #f6e6ff, #e4f2ec);
          background-size: 200% 100%;
          animation: underline-shimmer 10s ease-in-out infinite;
        }
        @keyframes underline-shimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}

/* constellation-style label: star + line + pill */
type ConstellationProps = {
  label: string;
  className?: string;
};

function ConstellationLabel({ label, className = "" }: ConstellationProps) {
  return (
    <div className={`chip-float-inner ${className}`}>
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#F7D18F] star-twinkle" />
        <span className="h-[1px] w-6 bg-[#E9D9AA]" />
        <span className="rounded-full bg-white/95 border border-[#E7E0D3] px-3 py-1 text-[11px] sm:text-[12px] text-[#5C7A6F] shadow-[0_8px_18px_rgba(44,68,60,0.08)] whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
}

/* tiny stars / dots */
type StarProps = {
  className?: string;
  delay?: string;
  size?: "xs" | "sm";
};

function StarDot({ className = "", delay = "0s", size = "xs" }: StarProps) {
  const dimension = size === "sm" ? "h-1.5 w-1.5" : "h-1 w-1";
  return (
    <div
      className={`absolute ${dimension} rounded-full bg-[#F7D18F]/90 star-twinkle ${className}`}
      style={{ animationDelay: delay }}
    />
  );
}
