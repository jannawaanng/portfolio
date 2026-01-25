
"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Hero() {
  const handleScroll = () => {
    const target = document.getElementById("first-project") || document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 75% 50%, rgba(255,248,244,1) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(255,245,250,0.6) 0%, transparent 50%),
            #FFF6F2
          `,
        }}
      />

      {/* Zen Water Layer */}
      <div className="absolute inset-0 z-[1]">
        <ZenWaterPhysics />
      </div>

      {/* Cosmic Layer */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        
        {/* PLANET 1 - Rose */}
        <div className="absolute animate-float-planet" style={{ top: '16%', left: '4.5%' }}>
          <svg width="95" height="95" viewBox="0 0 85 85">
            <defs>
              <radialGradient id="planet1-base" cx="35%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#FFE4EC"/>
                <stop offset="45%" stopColor="#FFCAD8"/>
                <stop offset="100%" stopColor="#E8A0B8"/>
              </radialGradient>
              <radialGradient id="planet1-glow" cx="50%" cy="50%" r="50%">
                <stop offset="90%" stopColor="transparent"/>
                <stop offset="100%" stopColor="rgba(255,200,216,0.4)"/>
              </radialGradient>
              <filter id="planet1-texture" x="-20%" y="-20%" width="140%" height="140%" filterUnits="userSpaceOnUse">
                <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="3" result="noise"/>
                <feDiffuseLighting in="noise" lightingColor="#FFD8E4" surfaceScale="1.5" result="light">
                  <feDistantLight azimuth="45" elevation="60"/>
                </feDiffuseLighting>
                <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="1" k2="0.3" k3="0.1" k4="0"/>
              </filter>
              <clipPath id="planet1-clip">
                <circle cx="42.5" cy="42.5" r="38"/>
              </clipPath>
            </defs>
            <circle cx="42.5" cy="42.5" r="38" fill="url(#planet1-base)" filter="url(#planet1-texture)" clipPath="url(#planet1-clip)"/>
            <ellipse cx="30" cy="28" rx="18" ry="14" fill="rgba(255,255,255,0.2)"/>
            <circle cx="42.5" cy="42.5" r="40" fill="url(#planet1-glow)"/>
          </svg>
        </div>

        {/* PLANET 2 - Violet */}
        <div className="absolute animate-float-planet-slow top-[40%] right-[10%] md:top-[74%] sm:left-[17%]" style={{ animationDelay: '2s' }}>
          <svg width="120" height="120" viewBox="0 0 55 55">
            <defs>
              <radialGradient id="planet2-base" cx="35%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#EDE4FF"/>
                <stop offset="50%" stopColor="#D8C8F8"/>
                <stop offset="100%" stopColor="#B8A0E0"/>
              </radialGradient>
              <filter id="planet2-texture" x="-20%" y="-20%" width="140%" height="140%" filterUnits="userSpaceOnUse">
                <feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="3" result="noise"/>
                <feDiffuseLighting in="noise" lightingColor="#E0D8F0" surfaceScale=".7" result="light">
                  <feDistantLight azimuth="45" elevation="55"/>
                </feDiffuseLighting>
                <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="1" k2="0.25" k3="0.1" k4="0"/>
              </filter>
              <clipPath id="planet2-clip">
                <circle cx="27.5" cy="27.5" r="25"/>
              </clipPath>
              <radialGradient id="planet2-glow" cx="50%" cy="50%" r="50%">
                <stop offset="95%" stopColor="transparent"/>
                <stop offset="100%" stopColor="rgba(200,200,216)"/>
              </radialGradient>
            </defs>
            <circle cx="27.5" cy="27.5" r="25" fill="url(#planet2-base)" filter="url(#planet2-texture)" clipPath="url(#planet2-clip)"/>
            <ellipse cx="25" cy="20" rx="15" ry="12" fill="rgba(255,255,255,0.1)"/>
            <circle cx="27.5" cy="27.5" r="25" fill="url(#planet2-glow)"/>
          </svg>
        </div>

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
          <path d="M -5% 30% Q 15% 5%, 35% 25%" fill="none" stroke="url(#arc-rose)" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 2% 60% Q 18% 85%, 38% 72%" fill="none" stroke="url(#arc-violet)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>

        {/* STARS */}
        <Star top={4} left={18} size={12} color="#FFCAD8" delay={0} glow />
        <Star top={16} left={4} size={8} color="#FFD8E4" delay={0.6} />
        <Star top={22} left={16} size={6} color="#FFCAD8" delay={1.2} />
        <Star top={10} left={24} size={5} color="#FFE4EC" delay={1.8} />
        <Star top={60} left={4} size={10} color="#D8C8F8" delay={0.3} glow />
        <Star top={78} left={16} size={7} color="#E4DCF8" delay={0.9} />
        <Star top={72} left={3} size={5} color="#D8C8F8" delay={1.5} />
        <Star top={5} left={36} size={8} color="#FFE0D8" delay={0.5} glow />
        <Star top={16} left={46} size={6} color="#FFE8E4" delay={1.1} />
        <Star top={70} left={76} size={7} color="#E4DCF8" delay={0.7} glow />
        <Star top={82} left={86} size={5} color="#D8C8F8" delay={1.3} />
        <Star top={38} left={1} size={5} color="#FFD8E4" delay={2} />
        <Star top={88} left={42} size={5} color="#D8C8F8" delay={2.3} />
        <Star top={3} left={58} size={5} color="#FFE4EC" delay={2.6} />
      </div>

{/* CONTENT */}
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-5xl w-full gap-12 lg:gap-20 pointer-events-none">
        
{/* LEFT: Text Block */}
<div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-[500px] pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#FFE0E8] shadow-sm mb-6">
            <span className="text-lg">✨</span>
            <span className="text-[11px] font-bold tracking-widest text-[#C0989C] uppercase">
              Welcome to my orbit!
            </span>
          </div>

          <div className="relative mb-6 group cursor-default">
            <h1 className="name-font text-[clamp(64px,12vw,96px)] text-[#2d3a35] leading-[0.85] transition-transform duration-500 group-hover:scale-[1.02]">
              Janna<span className="text-[#FFBAC8]">.</span>
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-3 overflow-visible">
              <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full text-[#FFBAC8] opacity-70">
                <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <p className="text-[17px] sm:text-[19px] leading-relaxed text-[#5c6b66] mt-6 mb-10">
            Product designer & engineer building{" "}
            <span className="font-bold text-[#2d3a35] border-b-2 border-[#D4C4F0]">accessible</span>,{" "}
            <span className="font-bold text-[#2d3a35] border-b-2 border-[#FFBAC8]">intuitive</span>{" "}
            spaces that <span className="text-[#D4889C] italic font-semibold">spark joy</span>.
          </p>

          <button
            onClick={handleScroll}
            className="group relative flex items-center gap-5 bg-white border-2 border-[#FFE8EC] hover:border-[#FFBAC8] text-[#2d3a35] pl-10 pr-4 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FFBAC8]/15 hover:-translate-y-0.5 active:scale-[0.98] shadow-sm"
          >
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#6a6a64] group-hover:text-[#2d3a35]">
              Dig into my work
            </span>
            
            <div className="relative w-11 h-11 flex items-center justify-center bg-[#FFF8F4] rounded-full border border-[#FFE8E0] transition-transform group-hover:rotate-12">
              <svg viewBox="0 0 24 24" className="w-6 h-6 z-10 overflow-visible">
                <defs>
                  <mask id="bite-mask">
                    <rect width="24" height="24" fill="white" />
                    <circle cx="20" cy="4" r="5" fill="black" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <circle cx="17" cy="8" r="4" fill="black" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75" />
                  </mask>
                </defs>
                <g mask="url(#bite-mask)">
                  <path d="M20.5 3.5C20.5 3.5 16.5 3.5 13.5 6.5C10.5 9.5 5.5 19.5 5.5 19.5C5.5 19.5 15.5 14.5 18.5 11.5C21.5 8.5 21.5 4.5 21.5 4.5L20.5 3.5Z" fill="#FB8C00" />
                  <path d="M19.5 4.5L21.5 1.5M19.5 4.5L16.5 2.5M19.5 4.5L20.5 6.5" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </button>
        </div>

        {/* RIGHT: Bunny Orbit System */}
        <div className="flex-1 flex items-center justify-center md:justify-end w-full">
          <BunnyOrbitSystem />
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');

        .name-font {
          font-family: 'DM Serif Display', serif;
          text-shadow: 1px 1px 0px rgba(255,255,255,0.9);
        }
        
        @keyframes bunny-bob {
          0%, 100% { transform: translate(-50%, -38%) translateY(0) rotate(-0.5deg); }
          50% { transform: translate(-50%, -38%) translateY(-8px) rotate(0.5deg); }
        }
        .bunny-bob { animation: bunny-bob 5s ease-in-out infinite; }

        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-orbit { animation: orbit 18s linear infinite; }

        @keyframes sway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-sway { animation: sway 3s ease-in-out infinite; transform-origin: bottom; }
        .animate-sway-delayed { animation: sway 3s ease-in-out infinite 1.5s; transform-origin: bottom; }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slower { animation: float-slower 6s ease-in-out infinite 0.5s; }

        @keyframes float-planet {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-planet { animation: float-planet 8s ease-in-out infinite; }
        .animate-float-planet-slow { animation: float-planet 10s ease-in-out infinite; }

        @keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   BUNNY ORBIT SYSTEM
═══════════════════════════════════════════════════════════════════════════ */

function BunnyOrbitSystem() {
  return (
    <div className="relative w-[420px] md:w-[500px] aspect-square">
      
  {/* Cosmic Layer */}
<div className="pointer-events-none absolute inset-0 z-[25]">


</div>


      {/* Grass platform */}
      <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-[72%] h-[18%] rounded-[100%] bg-gradient-to-b from-[#8fae99] to-[#7abc72]/75 border-2 border-[#367e2e]/10 shadow-xl z-[10]">
        <div className="absolute top-4 left-[46%] text-md opacity-70 animate-sway">🌱</div>
        <div className="absolute -top-1 left-[78%] text-sm opacity-70 animate-sway">🌱</div>
        <div className="absolute top-8 right-[70%] text-lg opacity-70 animate-sway">🌱</div>
        <div className="absolute top-7 left-[70%] text-lg opacity-70 animate-sway">🌱</div>
        <div className="absolute top-7 left-[70%] text-lg opacity-70 animate-sway">🌱</div>
        <div className="absolute -top-1 right-[78%] text-sm opacity-70 animate-sway">🌱</div>
      </div>

      {/* BUNNY */}
      <div className="absolute left-1/2 bottom-[22%] -translate-x-1/2 translate-y-[-38%] z-20 bunny-bob">
        <div 
          className="relative w-32 h-32 md:w-36 md:h-36 hover:scale-105 transition-transform cursor-pointer"
          style={{ filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.18))' }}
        >
          <Image 
            src="/bunny-moon.png" 
            alt="Bunny on moon" 
            fill 
            className="object-contain"
            style={{ filter: 'contrast(1.2) saturate(0.75)' }}
            priority 
          />
          <div 
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[70%] h-[18%] rounded-full"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.25), transparent 75%)',
              filter: 'blur(5px)',
              zIndex: -1,
            }}
          />
        </div>
      </div>

      {/* Decorations */}
      <div className="absolute top-[42%] left-[25%] animate-float-slow z-[15]"><span className="text-xl">🥕</span></div>
      <div className="absolute top-[52%] right-[25%] animate-float-slower rotate-12 z-[15]"><span className="text-xl">🥕</span></div>
      <div className="absolute bottom-[32%] left-[32%] text-md opacity-80 animate-float-slower z-[15]">🌼</div>
      <div className="absolute bottom-[25%] left-[38%] text-xl opacity-80 animate-float-slower z-[15]">🌼</div>
      <div className="absolute bottom-[28%] left-[23%] text-lg opacity-80 animate-float-slower z-[15]">🌼</div>
      <div className="absolute bottom-[28%] right-[23%] text-lg opacity-80 animate-float-slower z-[15]">🌼</div>
      <div className="absolute bottom-[32%] right-[32%] text-md opacity-80 animate-float-slower z-[15]">🌼</div>
      <div className="absolute bottom-[25%] right-[38%] text-xl opacity-80 animate-float-slower z-[15]">🌼</div>
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
    
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Physics constants
    const WAVE_SPEED = 0.32;
    const DAMPING = 0.989;
    const TENSION = 0.022;
    const AMBIENT_STRENGTH = 10;
    const AMBIENT_RADIUS = 5;
    const MOUSE_STRENGTH = 14;
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
    
    // Island position
    let islandX = 0;
    let islandY = 0;
    let islandR = 18;
    
    let animationId: number;
    let phase = 0;
    let lastMX = -1, lastMY = -1;

    const initBuffers = () => {
      const len = SIM_WIDTH * SIM_HEIGHT;
      heightA = new Float32Array(len);
      heightB = new Float32Array(len);
      velocity = new Float32Array(len);
      imageData = ctx.createImageData(SIM_WIDTH, SIM_HEIGHT);
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
      const base = 180;
      
      if (aspect >= 1) {
        SIM_WIDTH = Math.round(base * aspect);
        SIM_HEIGHT = base;
      } else {
        SIM_WIDTH = base;
        SIM_HEIGHT = Math.round(base / aspect);
      }
      
      initBuffers();

      // Island matches bunny position
      const mobile = window.innerWidth < 768;
      if (mobile) {
        islandX = SIM_WIDTH * 0.50;
        islandY = SIM_HEIGHT * 0.7;
        islandR = Math.min(SIM_WIDTH, SIM_HEIGHT) * 0.09;
      } else {
        islandX = SIM_WIDTH * 0.74;
        islandY = SIM_HEIGHT * 0.48;
        islandR = Math.min(SIM_WIDTH, SIM_HEIGHT) * 0.08;
      }
    };

    const ripple = (x: number, y: number, str: number, rad: number) => {
      const r2 = rad * rad;
      const ext = Math.ceil(rad * 2.5);
      
      for (let dy = -ext; dy <= ext; dy++) {
        for (let dx = -ext; dx <= ext; dx++) {
          const px = (x + dx) | 0;
          const py = (y + dy) | 0;
          
          if (px < 1 || px >= SIM_WIDTH - 1 || py < 1 || py >= SIM_HEIGHT - 1) continue;
          
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
          
          const lap = (
            prev[i - 1] + prev[i + 1] +
            prev[i - SIM_WIDTH] + prev[i + SIM_WIDTH] -
            4 * prev[i]
          ) * TENSION;
          
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
          
          if (Math.abs(v) < 0.08) {
            d[p + 3] = 0;
            continue;
          }

          const hL = x > 0 ? h[i - 1] : v;
          const hR = x < SIM_WIDTH - 1 ? h[i + 1] : v;
          const hU = y > 0 ? h[i - SIM_WIDTH] : v;
          const hD = y < SIM_HEIGHT - 1 ? h[i + SIM_WIDTH] : v;
          
          const light = (-(hR - hL) - (hD - hU)) * 12;
          const t = Math.max(0, Math.min(1, (light + 35) / 70));
          
          d[p] = (198 + t * 47) | 0;
          d[p + 1] = (165 + t * 55) | 0;
          d[p + 2] = (215 + t * 30) | 0;

          let a = Math.abs(v) * 16 + Math.abs(light) * 0.6;
          
          const fs = islandR * 1.1;
          const fe = islandR * 2.2;
          if (toI < fe) {
            const ft = Math.max(0, (toI - fs) / (fe - fs));
            a *= ft * ft;
          }
          
          d[p + 3] = Math.min(80, a) | 0;
        }
      }

      const off = new OffscreenCanvas(SIM_WIDTH, SIM_HEIGHT);
      const oc = off.getContext('2d')!;
      oc.putImageData(imageData, 0, 0);
      
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(off, 0, 0, displayWidth, displayHeight);
    };

    
    const animate = () => {
      // Continuous staggered ripples (no sudden bursts!)
      phase += 0.012;
      if (Math.random() < 0.03) {
        const ang = phase + Math.random() * 0.6;
        const dist = islandR * 1.35 + Math.random() * 6;
        ripple(
          islandX + Math.cos(ang) * dist,
          islandY + Math.sin(ang) * dist,
          AMBIENT_STRENGTH * (0.5 + Math.random() * 0.5),
          AMBIENT_RADIUS
        );
      }
      
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
    
    // Initial ripples
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      ripple(
        islandX + Math.cos(a) * islandR * 1.4,
        islandY + Math.sin(a) * islandR * 1.4,
        AMBIENT_STRENGTH * 0.7,
        AMBIENT_RADIUS
      );
    }
    
    canvas.addEventListener('mousemove', onMouse);
    canvas.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', onMouse);
      canvas.removeEventListener('touchmove', onTouch);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ transform: 'translate3d(0,0,0)' }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HELPER COMPONENTS
═══════════════════════════════════════════════════════════════════════════ */
function Star({ top, left, size, color, delay, glow = false }: {
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
        animation: `twinkle 3s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        filter: glow
          ? `drop-shadow(0 0 ${size / 5}px ${color})`
          : `drop-shadow(0 0 ${size / 4}px rgba(0,0,0,0.4))`,
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
      const dist = Math.sqrt((starTop - zone.y) ** 2 + (starLeft - zone.x) ** 2);
      if (dist < zone.r) return null;
    }

    const size = 12 + Math.random() * 6; // random size
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 3;
    const glow = Math.random() < 0.5;

    return <Star key={i} top={starTop} left={starLeft} size={size} color={color} delay={delay} glow={glow} />;
  });

  return <>{stars.filter(Boolean)}</>;
}

