'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

export default function AboutMe() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState({
    icon: '✨',
    label: 'Hover to explore',
    desc: 'Each object tells a story',
    link: null as string | null,
  });
  
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleObjectEnter = useCallback((icon: string, label: string, desc: string, link: string | null) => {
    if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    enterTimeoutRef.current = setTimeout(() => {
      setActiveItem({ icon, label, desc, link });
    }, 100);
  }, []);

  const handleObjectLeave = useCallback(() => {
    if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    resetTimeoutRef.current = setTimeout(() => {
      setActiveItem({
        icon: '✨',
        label: 'Hover to explore',
        desc: 'Each object tells a story',
        link: null,
      });
    }, 1000);
  }, []);

  const handleCardEnter = useCallback(() => {
    if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
  }, []);

  const handleCardLeave = useCallback(() => {
    handleObjectLeave();
  }, [handleObjectLeave]);

  return (
    <div className="min-h-screen flex flex-col items-center pt-16 lg:pt-20 pb-4 px-4 md:px-6 bg-[#faf8f5]">
      <div className="relative w-full max-w-[720px]">
        
        {/* HEADER: Title left, Info card right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 mb-4 lg:mb-5">
          
          {/* TITLE */}
          <div className="text-center sm:text-left shrink-0">
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#c4a882] mb-0.5">
              ✿ Welcome to my desk
            </p>
            <h1 className="text-xl md:text-2xl font-light text-[#5c4a3d]">
              Get to know <span className="italic font-serif text-[#c4a882]">me</span>
            </h1>
          </div>

          {/* INFO CARD */}
          <div 
            className="shrink-0"
            onMouseEnter={handleCardEnter}
            onMouseLeave={handleCardLeave}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[#e8ddd0] px-3 py-2.5 flex items-center gap-3 shadow-sm min-w-[260px]">
              <div className="w-9 h-9 rounded-full bg-[#f5f0ea] flex items-center justify-center text-lg shrink-0">
                {activeItem.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-[#5c4a3d] leading-tight">
                  {activeItem.label}
                </p>
                <p className="text-[10px] text-[#9c8b7a] leading-snug mt-0.5">
                  {activeItem.desc}
                </p>
              </div>
              {activeItem.link && (
                <a 
                  href={activeItem.link} 
                  className="text-[10px] font-semibold text-[#c4a882] hover:text-[#a08060] transition-colors whitespace-nowrap shrink-0"
                >
                  View →
                </a>
              )}
            </div>
          </div>

        </div>

        {/* DESK WRAPPER */}
        <div className="relative mx-auto w-full">
          
          {/* DESK SURFACE */}
          <div 
            className="relative mx-auto bg-[#e8dcd0] rounded-lg shadow-sm overflow-hidden"
            style={{ 
              width: '100%',
              aspectRatio: '720 / 440'
            }}
          >
            
            {/* DESK MAT */}
            <div 
              className="absolute z-0 left-1/2 -translate-x-1/2"
              style={{ top: '25%', left: '50%', width: '70%' }}
            >
              <Image src="/desk-mat.svg" alt="Desk mat" width={420} height={280} className="w-full h-auto" />
            </div>
            
            {/* PLANT */}
            <div 
              className="absolute z-10 cursor-pointer transition-transform duration-200 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
              style={{ top: '3%', left: '34%', width: '30%' }}
              onMouseEnter={() => handleObjectEnter('🪴', 'Skills & Hobbies', 'Figma · Python · Crocheting · Film photography', null)}
              onMouseLeave={handleObjectLeave}
            >
              <Image src="/desk-plant.svg" alt="Plants" width={130} height={70} className="w-full h-auto pointer-events-none" />
            </div>
            
            {/* DUKE PENNANT */}
            <div 
              className="absolute z-10 cursor-pointer transition-transform duration-200 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
              style={{ top: '15%', right: '8%', width: '28%' }}
              onMouseEnter={() => handleObjectEnter('🏫', 'Duke University', 'Information Science · UX & Data Science', null)}
              onMouseLeave={handleObjectLeave}
            >
              <Image src="/desk-pennant.svg" alt="Duke pennant" width={130} height={60} className="w-full h-auto pointer-events-none" />
            </div>
            
            {/* CAMERA */}
            <a 
              href="/photography"
              className="absolute z-10 cursor-pointer transition-transform duration-200 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
              style={{ top: '55%', left: '20%', width: '16%' }}
              onMouseEnter={() => handleObjectEnter('📷', 'Photography', 'Capturing moments & teaching youth', '/photography')}
              onMouseLeave={handleObjectLeave}
            >
              <Image src="/desk-camera.svg" alt="Camera" width={110} height={90} className="w-full h-auto pointer-events-none" />
            </a>
            
            {/* METROCARD */}
            <div 
              className="absolute z-10 cursor-pointer transition-transform duration-200 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
              style={{ top: '44%', left: '9%', width: '14%' }}
              onMouseEnter={() => handleObjectEnter('🚇', 'NYC Native', 'Born & raised in New York City', null)}
              onMouseLeave={handleObjectLeave}
            >
              <Image src="/desk-metrocard.svg" alt="MetroCard" width={85} height={55} className="w-full h-auto pointer-events-none" />
            </div>
            
            {/* HEADPHONES */}
            <div 
              className="absolute z-10 cursor-pointer transition-transform duration-200 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
              style={{ top: '10%', left: '7%', width: '28%' }}
              onMouseEnter={() => handleObjectEnter('🎧', 'Now Playing', 'Lo-fi beats or Taylor Swift', null)}
              onMouseLeave={handleObjectLeave}
            >
              <Image src="/desk-headphone.svg" alt="Headphones" width={115} height={130} className="w-full h-auto pointer-events-none" />
            </div>
            
            {/* LAPTOP + IPAD + PEN */}
            <div 
              className="absolute z-20 cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:-translate-y-1 left-1/2 -translate-x-1/2 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
              style={{ top: '20%', left: '50%', width: '45%' }}
              onMouseEnter={() => handleObjectEnter('💻', 'Projects', 'Where the magic happens — view my work', '/projects')}
              onMouseLeave={handleObjectLeave}
            >
              <Image src="/desk-tech.svg" alt="Laptop and iPad" width={260} height={220} className="w-full h-auto pointer-events-none" />
            </div>
            
            {/* PALETTE */}
            <a 
              href="/artwork"
              className="absolute z-10 cursor-pointer transition-transform duration-200 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
              style={{ top: '27%', right: '10%', width: '24%' }}
              onMouseEnter={() => handleObjectEnter('🎨', 'Artwork', 'Apparel design, graphics & illustration', '/artwork')}
              onMouseLeave={handleObjectLeave}
            >
              <Image src="/desk-palette.svg" alt="Watercolor palette" width={145} height={100} className="w-full h-auto pointer-events-none" />
            </a>
            
            {/* MATCHA */}
            <div 
              className="absolute z-20 cursor-pointer transition-transform duration-200 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
              style={{ top: '61%', right: '7%', width: '15%' }}
              onMouseEnter={() => handleObjectEnter('🍵', 'Powered by Matcha', 'Iced, oat milk, less ice — always', null)}
              onMouseLeave={handleObjectLeave}
            >
              <Image src="/desk-matcha.svg" alt="Matcha latte" width={75} height={85} className="w-full h-auto pointer-events-none" />
            </div>
            
            {/* MOUSE + MOUSEPAD */}
            <div 
              className="absolute z-10"
              style={{ top: '46%', right: '16%', width: '22%' }}
            >
              <Image src="/desk-mouse.svg" alt="Mouse" width={70} height={60} className="w-full h-auto" />
            </div>
            
          </div>

          {/* DRAWER */}
          <div 
            className="w-full mx-auto cursor-pointer"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <div 
              className="w-full h-8 md:h-10 bg-gradient-to-b from-[#c8b898] to-[#b8a888] flex items-center justify-center hover:from-[#c0b090] hover:to-[#b09878] transition-all active:scale-[0.998] rounded-b-md shadow-md"
            >
              <div className="w-14 md:w-20 h-1.5 md:h-2 bg-[#a89070] rounded-full shadow-inner" />
            </div>
            
            <p className={`text-center text-[7px] uppercase tracking-widest font-medium mt-1 transition-colors ${drawerOpen ? 'text-[#c4a882]' : 'text-[#a89878]'}`}>
              {drawerOpen ? 'Click to close' : 'Click to open'}
            </p>
          </div>
          
        </div>
        
        {/* BIO CARD */}
        <div 
          className={`fixed bottom-4 left-1/2 w-[280px] md:w-[320px] z-50 transition-all duration-500 ${
            drawerOpen 
              ? 'opacity-100 -translate-x-1/2 translate-y-0' 
              : 'opacity-0 -translate-x-1/2 translate-y-[120%] pointer-events-none'
          }`}
        >
          <div className="bg-white rounded-2xl border border-[#e8ddd0] p-5 shadow-lg">
            
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#f0d8d0] via-[#d0e0d8] to-[#d8d8e8] flex items-center justify-center text-[#5c4a3d] font-semibold text-base">
                J
              </div>
              <div>
                <p className="font-semibold text-[#5c4a3d] text-[15px]">Janna Wang</p>
                <p className="text-[10px] text-[#9c8b7a]">Product Designer</p>
              </div>
            </div>
            
            <p className="text-[12px] text-[#6c5b4a] leading-relaxed mb-2">
              I&apos;m a student at <span className="text-[#003087] font-medium">Duke University</span> studying Information Science with concentrations in UX Design & Data Science.
            </p>
            <p className="text-[12px] text-[#6c5b4a] leading-relaxed mb-3">
              I create in ways that foster <span className="text-[#5c4a3d] font-medium">accessibility</span>, 
              <span className="text-[#5c4a3d] font-medium"> connection</span>, and 
              <span className="text-[#5c4a3d] font-medium"> joyful experiences</span>.
            </p>
            
            <div className="flex gap-4 pt-3 border-t border-[#e8ddd0]">
              <a href="#" className="text-[9px] uppercase tracking-wider font-semibold text-[#c4a882] hover:text-[#a08060] transition-colors">Resume</a>
              <a href="#" className="text-[9px] uppercase tracking-wider font-semibold text-[#c4a882] hover:text-[#a08060] transition-colors">LinkedIn</a>
              <a href="#" className="text-[9px] uppercase tracking-wider font-semibold text-[#c4a882] hover:text-[#a08060] transition-colors">Email</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}