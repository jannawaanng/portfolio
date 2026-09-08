"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Hero() {
  const handleScroll = () => {
    const target =
      document.getElementById("first-project") ||
      document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  function Dot({
    top,
    left,
    size,
    color,
    delay,
  }: {
    top: number;
    left: number;
    size: number;
    color: string;
    delay: number;
  }) {
    return (
      <div
        className="absolute rounded-full"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          boxShadow: `0 0 ${size * 1.5}px ${color}`,
          animation: `dot-twinkle 2.8s ease-in-out infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  }

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 75% at 75% 50%, rgb(248, 251, 240) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(255,245,250,0.6) 0%, transparent 50%),
            #FFF6F2
          `,
        }}
      />

      {/* Zen Water Layer */}
      <div className="absolute inset-0 z-[1]">
        <ZenWaterPhysics />
      </div>

      {/* Cosmic Layer — trimmed down so the water stays the star of the show */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        {/* ORBITAL ARCS */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.35 }}>
          <defs>
            <linearGradient id="arc-rose" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFCAD8" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFCAD8" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFCAD8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="arc-violet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D8C8F8" stopOpacity="0" />
              <stop offset="50%" stopColor="#D8C8F8" stopOpacity="1" />
              <stop offset="100%" stopColor="#D8C8F8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M -5% 30% Q 15% 5%, 35% 25%"
            fill="none"
            stroke="url(#arc-rose)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 2% 60% Q 18% 85%, 38% 72%"
            fill="none"
            stroke="url(#arc-violet)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <Dot top={8} left={6} size={4} color="#FFE8A3" delay={0} />
        <Dot top={14} left={11} size={7} color="#FFFFFF" delay={0.9} />
        <Dot top={19} left={24} size={5} color="#FFFFFF" delay={0.4} />
        <Dot top={11} left={31} size={4} color="#FFE8A3" delay={2.1} />
        <Dot top={22} left={16} size={6} color="#FFFFFF" delay={1.2} />

        {/* Accent stars — clustered around the moon, alternating */}
        <Star top={16} left={67} size={26} color="#FFC700" delay={1.1} glow />
        <Star top={32} left={70} size={24} color="#FFFFFF" delay={1.6} />

        {/* Small/medium screens — repositioned clear of bunny */}
        <div className="block lg:hidden">
          <Star top={62} left={88} size={28} color="#FFC700" delay={0.8} glow />
          <Star top={55} left={68} size={26} color="#FFFFFF" delay={0.3} glow />
        </div>

        {/* Large screens only — original position */}
        <div className="hidden lg:block">
          <Star top={20} left={80} size={28} color="#FFC700" delay={0.8} glow />
          <Star top={55} left={68} size={26} color="#FFFFFF" delay={0.3} glow />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between max-w-5xl w-full gap-12 md:gap-10 lg:gap-16 pointer-events-none px-4 pt-16 md:pt-0">
        <div className="flex-[1.15] flex flex-col items-center md:items-start text-center md:text-left max-w-[540px] pointer-events-auto w-full mx-auto md:mx-0 gap-6">
          {/* Eyebrow — grounds the name and adds hierarchy */}
          <span className="body-font text-[12px] font-semibold uppercase tracking-[0.22em] text-[#1F4E4A]/60">
            Product · UX · AI
          </span>

          <h1 className="name-font text-[clamp(64px,9vw,92px)] font-normal text-[#1E2E29] leading-[0.88] tracking-[-0.02em] -mt-1">
            Janna
          </h1>

          <p className="body-font text-[18px] sm:text-[20px] leading-[1.5] text-[#3d4844] text-balance max-w-[440px] lg:max-w-none lg:whitespace-nowrap">
            I dissolve complexity until only{" "}
            <span className="font-semibold text-[#1E2E29] border-b-2 border-[#FFC700]">
              what matters
            </span>
            {"\u00A0"}is left.
          </p>

          {/* Credentials — trust signal for recruiters, kept quiet so it supports rather than competes 
          <div className="body-font flex flex-wrap items-center justify-center md:justify-start gap-x-2.5 gap-y-1.5 text-[14px] font-medium text-[#1F4E4A]/85 leading-snug">
            <span>
              Product &amp; AI @{" "}
              <strong className="font-semibold text-[#1F4E4A]">Siemens</strong>
            </span>
            <span className="text-[#1F4E4A]/25">/</span>
            <span>
              Senior @{" "}
              <strong className="font-semibold text-[#1F4E4A]">Duke</strong>
            </span>
            <span className="text-[#1F4E4A]/25">/</span>
            <span>Patent co-inventor</span>
          </div>*/}

          <button
            onClick={handleScroll}
            className="body-font group relative inline-flex items-center gap-3 bg-[#1F4E4A] hover:bg-[#173B37] text-white pl-6 pr-2.5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#1F4E4A]/25 hover:-translate-y-0.5 active:scale-[0.98] shadow-sm whitespace-nowrap mx-auto md:mx-0"
          >
            <span className="text-[14px] font-semibold tracking-normal">
              See the work
            </span>

            <div className="relative w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg border border-white/15 transition-transform group-hover:rotate-12">
              <svg viewBox="0 0 24 24" className="w-5 h-5 z-10 overflow-visible">
                <defs>
                  <mask id="bite-mask">
                    <rect width="24" height="24" fill="white" />
                    <circle
                      cx="20"
                      cy="4"
                      r="5"
                      fill="black"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                    <circle
                      cx="17"
                      cy="8"
                      r="4"
                      fill="black"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"
                    />
                  </mask>
                </defs>
                <g mask="url(#bite-mask)">
                  <path
                    d="M20.5 3.5C20.5 3.5 16.5 3.5 13.5 6.5C10.5 9.5 5.5 19.5 5.5 19.5C5.5 19.5 15.5 14.5 18.5 11.5C21.5 8.5 21.5 4.5 21.5 4.5L20.5 3.5Z"
                    fill="#FB8C00"
                  />
                  <path
                    d="M19.5 4.5L21.5 1.5M19.5 4.5L16.5 2.5M19.5 4.5L20.5 6.5"
                    stroke="#4CAF50"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
          </button>
        </div>

        {/* RIGHT: Bunny — a signature detail, not a competing headline */}
        <div className="flex-1 flex items-center justify-center md:justify-end w-full">
          <BunnyOrbitSystem />
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Work+Sans:wght@400;500;600;700&display=swap");

        .name-font {
          font-family: "DM Serif Display", serif;
          text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.9);
        }

        .body-font {
          font-family: "Work Sans", ui-sans-serif, system-ui, sans-serif;
        }

        @keyframes bunny-bob {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0) rotate(-0.5deg);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-6px) rotate(0.5deg);
          }
        }
        .bunny-bob {
          animation: bunny-bob 5s ease-in-out infinite;
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-orbit {
          animation: orbit 18s linear infinite;
        }

        @keyframes sway {
          0%,
          100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        .animate-sway {
          animation: sway 3s ease-in-out infinite;
          transform-origin: bottom;
        }
        .animate-sway-delayed {
          animation: sway 3s ease-in-out infinite 1.5s;
          transform-origin: bottom;
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }

        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float-slower {
          animation: float-slower 6s ease-in-out infinite 0.5s;
        }

        @keyframes float-planet {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-float-planet {
          animation: float-planet 8s ease-in-out infinite;
        }
        .animate-float-planet-slow {
          animation: float-planet 10s ease-in-out infinite;
        }

        @keyframes dot-twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>

      {/* bottom fade into projects */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-24 bg-gradient-to-b from-transparent to-[#FCF8F5]" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   BUNNY ORBIT SYSTEM
═══════════════════════════════════════════════════════════════════════════ */
function BunnyOrbitSystem() {
  return (
    <div className="relative w-[260px] md:w-[320px] aspect-square">
      {/* Soft stage glow — neutral white so it reads as light, not a second sun */}
      <div
        className="absolute left-1/2 bottom-[8%] -translate-x-1/2 w-[85%] aspect-square rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 55%, transparent 75%)",
        }}
      />

      {/* A few controlled sparkles instead of a scattered field */}
      <span className="absolute top-[8%] right-[12%] w-1.5 h-1.5 rounded-full bg-[#FFC700] animate-twinkle" />
      <span
        className="absolute top-[20%] left-[10%] w-1 h-1 rounded-full bg-[#1F4E4A]/40 animate-twinkle"
        style={{ animationDelay: "1s" }}
      />
      <span
        className="absolute bottom-[22%] right-[6%] w-1 h-1 rounded-full bg-[#FFC700]/70 animate-twinkle"
        style={{ animationDelay: "1.8s" }}
      />

      {/* BUNNY — scaled down, desaturated to sit inside the site palette */}
      <div
        id="bunny-anchor"
        className="absolute left-1/2 bottom-[0%] -translate-x-1/2 translate-y-[-50%] z-20 bunny-bob"
      >
        <div
          className="relative w-32 h-32 md:w-44 md:h-44 hover:scale-105 transition-transform cursor-pointer"
          style={{
            filter:
              "drop-shadow(0 10px 20px rgba(0,0,0,0.14)) saturate(0.65) brightness(1.02)",
          }}
        >
          <Image
            src="/bunny-moon.png"
            alt="Bunny on moon"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   ZEN WATER PHYSICS - Optimized, aspect-ratio aware, smooth continuous ripples
═══════════════════════════════════════════════════════════════════════════ */
function ZenWaterPhysics() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Physics constants
    const WAVE_SPEED = 0.02;
    const DAMPING = 0.994;
    const TENSION = 3;
    const AMBIENT_STRENGTH = 10;
    const AMBIENT_RADIUS = 5;
    const MOUSE_STRENGTH = 6;
    const MOUSE_RADIUS = 4;

    // Grid will adapt to screen aspect ratio
    let SIM_WIDTH = 200;
    let SIM_HEIGHT = 200;
    let displayWidth = 0;
    let displayHeight = 0;

    // Double buffer - swap by index (NO data copying!)
    let bufferIdx = 0;
    let heightA: Float32Array;
    let heightB: Float32Array;
    let velocity: Float32Array;
    let imageData: ImageData;

    // Reusable offscreen buffer (created once, not per-frame)
    let off: OffscreenCanvas | null = null;
    let oc: OffscreenCanvasRenderingContext2D | null = null;

    // Island position
    let islandX = 0;
    let islandY = 0;
    let islandR = 18;

    let animationId: number;
    let phase = 0;
    let lastMX = -1,
      lastMY = -1;

    const initBuffers = () => {
      const len = SIM_WIDTH * SIM_HEIGHT;
      heightA = new Float32Array(len);
      heightB = new Float32Array(len);
      velocity = new Float32Array(len);
      imageData = ctx.createImageData(SIM_WIDTH, SIM_HEIGHT);
      off = new OffscreenCanvas(SIM_WIDTH, SIM_HEIGHT);
      oc = off.getContext("2d");
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      displayWidth = rect.width;
      displayHeight = rect.height;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // MATCH grid aspect ratio to screen (keeps ripples circular!)
      const aspect = displayWidth / displayHeight;
      const base = 380;

      if (aspect >= 1) {
        SIM_WIDTH = Math.round(base * aspect);
        SIM_HEIGHT = base;
      } else {
        SIM_WIDTH = base;
        SIM_HEIGHT = Math.round(base / aspect);
      }

      initBuffers();

      // island follows bunny position
      const bunny = document.getElementById("bunny-anchor");
      const canvasRect = canvas.getBoundingClientRect();

      if (bunny) {
        const b = bunny.getBoundingClientRect();
        // center of the bunny, relative to the canvas
        const cx = b.left + b.width / 2 - canvasRect.left;
        const cy = b.top + b.height / 2 - canvasRect.top;

        // convert from pixels → simulation grid coords
        islandX = (cx / displayWidth) * SIM_WIDTH;
        islandY = (cy / displayHeight) * SIM_HEIGHT;
        islandR = Math.min(SIM_WIDTH, SIM_HEIGHT) * 0.1;
      } else {
        // fallback if not found
        islandX = SIM_WIDTH * 0.74;
        islandY = SIM_HEIGHT * 0.48;
        islandR = Math.min(SIM_WIDTH, SIM_HEIGHT) * 0.1;
      }
    };

    const ripple = (x: number, y: number, str: number, rad: number) => {
      const r2 = rad * rad;
      const ext = Math.ceil(rad * 2.5);

      for (let dy = -ext; dy <= ext; dy++) {
        for (let dx = -ext; dx <= ext; dx++) {
          const px = (x + dx) | 0;
          const py = (y + dy) | 0;

          if (px < 1 || px >= SIM_WIDTH - 1 || py < 1 || py >= SIM_HEIGHT - 1)
            continue;

          const d2 = dx * dx + dy * dy;
          if (d2 > r2 * 6) continue;

          const toI = Math.sqrt((px - islandX) ** 2 + (py - islandY) ** 2);
          if (toI < islandR * 1.25) continue;

          velocity[px + py * SIM_WIDTH] += str * Math.exp(-d2 / (2 * r2));
        }
      }
    };

    const simulate = () => {
      const prev = bufferIdx === 0 ? heightA : heightB;
      const curr = bufferIdx === 0 ? heightB : heightA;

      for (let y = 1; y < SIM_HEIGHT - 1; y++) {
        for (let x = 1; x < SIM_WIDTH - 1; x++) {
          const i = x + y * SIM_WIDTH;

          const toI = Math.sqrt((x - islandX) ** 2 + (y - islandY) ** 2);
          if (toI < islandR) {
            curr[i] = 0;
            velocity[i] = 0;
            continue;
          }

          const lap =
            (prev[i - 1] +
              prev[i + 1] +
              prev[i - SIM_WIDTH] +
              prev[i + SIM_WIDTH] -
              4 * prev[i]) *
            TENSION;

          velocity[i] = (velocity[i] + lap * WAVE_SPEED) * DAMPING;
          curr[i] = prev[i] + velocity[i];
        }
      }

      bufferIdx = 1 - bufferIdx;
    };

    const render = () => {
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      const h = bufferIdx === 0 ? heightA : heightB;
      const d = imageData.data;

      for (let y = 0; y < SIM_HEIGHT; y++) {
        for (let x = 0; x < SIM_WIDTH; x++) {
          const i = x + y * SIM_WIDTH;
          const v = h[i];
          const p = i * 4;

          const toI = Math.sqrt((x - islandX) ** 2 + (y - islandY) ** 2);

          if (toI < islandR * 1.1) {
            d[p + 3] = 0;
            continue;
          }
          if (Math.abs(v) < 0.1) {
            d[p + 3] = 0;
            continue;
          }

          const hL = x > 0 ? h[i - 1] : v;
          const hR = x < SIM_WIDTH - 1 ? h[i + 1] : v;
          const hU = y > 0 ? h[i - SIM_WIDTH] : v;
          const hD = y < SIM_HEIGHT - 1 ? h[i + SIM_WIDTH] : v;

          const light = Math.max(
            -55,
            Math.min(55, (-(hR - hL) - (hD - hU)) * 12)
          );
          const edgeIntensity = Math.min(
            1,
            Math.pow(Math.max(0, Math.abs(light) - 38) / 20, 2.2)
          );

          // base water color — lighter, less "ocean" so it whispers not swirls
          const baseR = 188,
            baseG = 222,
            baseB = 232;

          // push toward pure white as edgeIntensity rises
          d[p] = (baseR + edgeIntensity * (255 - baseR)) | 0;
          d[p + 1] = (baseG + edgeIntensity * (255 - baseG)) | 0;
          d[p + 2] = (baseB + edgeIntensity * (255 - baseB)) | 0;

          let a = Math.abs(v) * 16 + edgeIntensity * 70;

          const fs = islandR * 1.1;
          const fe = islandR * 2.2;
          if (toI < fe) {
            const ft = Math.max(0, (toI - fs) / (fe - fs));
            a *= ft * ft;
          }

          // lower cap keeps the water ambient instead of forming shapes
          d[p + 3] = Math.min(60, a) | 0;
        }
      }

      if (oc && off) {
        oc.putImageData(imageData, 0, 0);
        ctx.imageSmoothingEnabled = false;
        ctx.imageSmoothingQuality = "low";
        ctx.drawImage(off, 0, 0, displayWidth, displayHeight);
      }
    };

    let pendingRipples: {
      x: number;
      y: number;
      str: number;
      rad: number;
      age: number;
    }[] = [];

    const queueRipple = (x: number, y: number, str: number, rad: number) => {
      pendingRipples.push({ x, y, str, rad, age: 0 });
    };

    const processPendingRipples = () => {
      const RAMP_FRAMES = 8;
      pendingRipples = pendingRipples.filter((r) => {
        ripple(r.x, r.y, r.str / RAMP_FRAMES, r.rad);
        r.age++;
        return r.age < RAMP_FRAMES;
      });
    };

    const animate = () => {
      phase += 0.01;

      // rotating sources as direct ripple() — already smooth/continuous
      const ang = phase;
      const dist = islandR * 1.4;
      ripple(
        islandX + Math.cos(ang) * dist,
        islandY + Math.sin(ang) * dist,
        AMBIENT_STRENGTH * 0.4,
        AMBIENT_RADIUS
      );

      const ang2 = phase * 1.3 + Math.PI;
      const dist2 = islandR * 1.6;
      ripple(
        islandX + Math.cos(ang2) * dist2,
        islandY + Math.sin(ang2) * dist2,
        AMBIENT_STRENGTH * 0.25,
        AMBIENT_RADIUS
      );

      // ramp these in instead of popping
      if (Math.random() < 0.03) {
        const ang3 = Math.random() * Math.PI * 2;
        const dist3 = islandR * 1.3 + Math.random() * 10;
        queueRipple(
          islandX + Math.cos(ang3) * dist3,
          islandY + Math.sin(ang3) * dist3,
          AMBIENT_STRENGTH * 0.6,
          AMBIENT_RADIUS
        );
      }

      if (Math.random() < 0.02) {
        const edge = Math.floor(Math.random() * 4);
        let ex, ey;
        if (edge === 0) {
          ex = Math.random() * SIM_WIDTH;
          ey = 2;
        } else if (edge === 1) {
          ex = Math.random() * SIM_WIDTH;
          ey = SIM_HEIGHT - 2;
        } else if (edge === 2) {
          ex = 2;
          ey = Math.random() * SIM_HEIGHT;
        } else {
          ex = SIM_WIDTH - 2;
          ey = Math.random() * SIM_HEIGHT;
        }
        queueRipple(ex, ey, AMBIENT_STRENGTH * 0.4, AMBIENT_RADIUS * 3);
      }

      processPendingRipples();
      simulate();
      simulate();
      render();
      animationId = requestAnimationFrame(animate);
    };

    const onMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      const sx = ((e.clientX - r.left) / displayWidth) * SIM_WIDTH;
      const sy = ((e.clientY - r.top) / displayHeight) * SIM_HEIGHT;

      if ((sx - lastMX) ** 2 + (sy - lastMY) ** 2 > 5) {
        const toI = Math.sqrt((sx - islandX) ** 2 + (sy - islandY) ** 2);
        if (toI > islandR * 1.3) ripple(sx, sy, MOUSE_STRENGTH, MOUSE_RADIUS);
        lastMX = sx;
        lastMY = sy;
      }
    };

    const onTouch = (e: TouchEvent) => {
      const r = canvas.getBoundingClientRect();
      const t = e.touches[0];
      const sx = ((t.clientX - r.left) / displayWidth) * SIM_WIDTH;
      const sy = ((t.clientY - r.top) / displayHeight) * SIM_HEIGHT;

      const toI = Math.sqrt((sx - islandX) ** 2 + (sy - islandY) ** 2);
      if (toI > islandR * 1.3) ripple(sx, sy, MOUSE_STRENGTH, MOUSE_RADIUS);
    };

    resize();

    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
      const dist = islandR * (1.3 + Math.random() * 0.6);
      ripple(
        islandX + Math.cos(a) * dist,
        islandY + Math.sin(a) * dist,
        AMBIENT_STRENGTH * (0.5 + Math.random() * 0.6),
        AMBIENT_RADIUS
      );
      // stagger how much each has already spread
      const headStart = Math.floor(Math.random() * 30);
      for (let s = 0; s < headStart; s++) simulate();
    }

    // Fast-forward the pond so it looks "already going"
    for (let i = 0; i < 120; i++) {
      if (Math.random() < 0.03) {
        const ang = Math.random() * Math.PI * 2;
        const dist = islandR * 1.35 + Math.random() * 6;
        ripple(
          islandX + Math.cos(ang) * dist,
          islandY + Math.sin(ang) * dist,
          AMBIENT_STRENGTH * (0.5 + Math.random() * 0.5),
          AMBIENT_RADIUS
        );
      }
      simulate();
    }

    render();

    canvas.addEventListener("mousemove", onMouse);
    canvas.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("resize", resize);
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", onMouse);
      canvas.removeEventListener("touchmove", onTouch);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ transform: "translate3d(0,0,0)" }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HELPER COMPONENTS
═══════════════════════════════════════════════════════════════════════════ */
function Star({
  top,
  left,
  size,
  color,
  delay,
  glow = false,
}: {
  top: number;
  left: number;
  size: number;
  color: string;
  delay: number;
  glow?: boolean;
}) {
  return (
    <div
      className="absolute"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        animation: `dot-twinkle 2.8s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        filter: glow
          ? `drop-shadow(0 0 ${size / 2}px ${color}) drop-shadow(0 0 ${
              size / 4
            }px white)`
          : `drop-shadow(0 0 ${size / 5}px ${color})`,
        zIndex: 1,
      }}
    >
      <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
        <path d="M12 0 L13 9 L22 12 L13 15 L12 24 L11 15 L2 12 L11 9 Z" />
      </svg>
    </div>
  );
}

type AvoidZone = { x: number; y: number; r: number };

function StarCluster({
  top,
  left,
  count,
  radius,
  colors,
  avoidZones = [],
}: {
  top: number;
  left: number;
  count: number;
  radius: number;
  colors: string[];
  avoidZones?: AvoidZone[];
}) {
  const stars = Array.from({ length: count }, (_, i) => {
    const offsetX = (Math.random() - 0.5) * radius * 2;
    const offsetY = (Math.random() - 0.5) * radius * 2;

    const starTop = top + offsetY;
    const starLeft = left + offsetX;

    // Skip stars that are too close to any avoid zone
    for (const zone of avoidZones) {
      const dist = Math.sqrt(
        (starTop - zone.y) ** 2 + (starLeft - zone.x) ** 2
      );
      if (dist < zone.r) return null;
    }

    const size = 12 + Math.random() * 6;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 3;
    const glow = Math.random() < 0.5;

    return (
      <Star
        key={i}
        top={starTop}
        left={starLeft}
        size={size}
        color={color}
        delay={delay}
        glow={glow}
      />
    );
  });

  return <>{stars.filter(Boolean)}</>;
}
