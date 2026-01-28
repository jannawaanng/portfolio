'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
// FIXED: Correct import path for Footer
import Footer from "../../components/footer";

export default function AboutMe() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeItem, setActiveItem] = useState({
    icon: '✨',
    label: 'To explore:',
    desc: 'Hover over objects on the desk!',
    link: null as string | null,
    type: 'default' as 'default' | 'music',
  });
  
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio('/saturn.mp3'); 
    audioRef.current.volume = 0.2;
    
    const audio = audioRef.current;
    
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      audio.currentTime = 48; // Jump to chorus start
      setCurrentTime(48);
    };

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      audio.currentTime = 48; 
    };
    
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);
    
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error("Audio play failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleObjectEnter = useCallback((icon: string, label: string, desc: string, link: string | null, type: 'default' | 'music' = 'default') => {
    if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    enterTimeoutRef.current = setTimeout(() => {
      setActiveItem({ icon, label, desc, link, type });
    }, 100);
  }, []);

  const handleObjectLeave = useCallback(() => {
    if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    resetTimeoutRef.current = setTimeout(() => {
      setActiveItem({
        icon: '✨',
        label: 'Keep exploring:',
        desc: 'Which object to take a look at next?',
        link: null,
        type: 'default',
      });
    }, 1500); 
  }, []);

  const handleCardEnter = useCallback(() => {
    if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
  }, []);

  const handleCardLeave = useCallback(() => {
    handleObjectLeave();
  }, [handleObjectLeave]);

 // Music Player Card Component
 const MusicPlayerCard = () => (
  <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-[#e8ddd0] p-3 shadow-sm transition-all duration-300">
    <div className="flex items-center gap-3">
      {/* Album Art */}
      <div className="relative w-14 h-14 rounded-lg overflow-hidden shadow-sm shrink-0 bg-[#f5f0ea]">
        <Image 
          src="/saturn.png" 
          alt="Saturn - SZA"
          fill
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-black/5 ${isPlaying ? 'animate-pulse' : ''}`} />
      </div>
      
      {/* Song Info + Controls */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[12px] font-semibold text-[#5c4a3d] truncate">Saturn</p>
            <p className="text-[11px] text-[#9c8b7a] truncate">SZA · SOS</p>
          </div>
          
          {/* Play/Pause Button */}
          <button 
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-[#c4a882] flex items-center justify-center hover:bg-[#a08060] hover:scale-105 transition-all shrink-0 shadow-sm"
          >
            {isPlaying ? (
              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg className="w-2.5 h-2.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Progress Bar & Time Labels */}
        <div className="mt-2">
          <div className="h-1 bg-[#f5f0ea] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#c4a882] rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Time Display Labels */}
          <div className="flex justify-between mt-1 px-0.5">
            <span className="text-[8px] font-mono text-[#9c8b7a] uppercase">
              {formatTime(currentTime)}
            </span>
            <span className="text-[8px] font-mono text-[#9c8b7a] uppercase">
              {formatTime(duration)}
            </span>
          </div>
        </div>
        
        {/* Now Playing indicator */}
        {isPlaying && (
          <div className="flex items-center gap-1 mt-1">
            <div className="flex items-end gap-[2px] h-2.5">
              <span className="w-[2px] bg-[#c4a882] rounded-full animate-bounce" style={{ height: '40%', animationDuration: '0.6s' }} />
              <span className="w-[2px] bg-[#c4a882] rounded-full animate-bounce" style={{ height: '80%', animationDelay: '0.2s', animationDuration: '0.6s' }} />
              <span className="w-[2px] bg-[#c4a882] rounded-full animate-bounce" style={{ height: '60%', animationDelay: '0.4s', animationDuration: '0.6s' }} />
            </div>
            <span className="text-[8px] text-[#c4a882] ml-1 font-medium uppercase tracking-wider">Playing</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center px-4 md:px-8 pt-20 md:pt-24 pb-12"><div className="w-full max-w-5xl">
          
          {/* Two column layout - ADDED ITEMS-STRETCH TO FORCE HEIGHT MATCHING */}
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-16">
            
            {/* LEFT: Desk + Drawer */}
            <div className="lg:flex-1 flex flex-col relative z-20">
              
            {/* DESK SURFACE */}
            <div 
            className="relative mx-auto bg-[#e8dcd0] rounded-lg shadow-sm overflow-hidden w-full max-w-2xl"
                  style={{ aspectRatio: '720 / 440' }}
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
                  className="absolute z-10 cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
                  style={{ top: '3%', left: '34%', width: '30%' }}
                  onMouseEnter={() => handleObjectEnter('🪴', 'Skills & Hobbies', 'Traveling   ·   Thrifting + Upcycling   ·   Painting   ·   Ceramics   ·   Scrapbooking   ·   Hiking', null)}
                  onMouseLeave={handleObjectLeave}
                >
                  <Image src="/desk-plant.svg" alt="Plants" width={130} height={70} className="w-full h-auto pointer-events-none" />
                </div>
                
                {/* DUKE PENNANT */}
                <div 
                  className="absolute z-10 cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
                  style={{ top: '15%', right: '8%', width: '28%' }}
                  onMouseEnter={() => handleObjectEnter('🏫', 'Duke University', 'Mechanical Engineering · CS & Visual Media', null)}
                  onMouseLeave={handleObjectLeave}
                >
                  <Image src="/desk-pennant.svg" alt="Duke pennant" width={130} height={60} className="w-full h-auto pointer-events-none" />
                </div>
                
                {/* CAMERA */}
                <a 
                  href="/pages/photos"
                  className="absolute z-10 cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
                  style={{ top: '55%', left: '20%', width: '16%' }}
                  onMouseEnter={() => handleObjectEnter('📷', 'Photos', 'Snapshots of my everyday!', '/pages/photos')}
                  onMouseLeave={handleObjectLeave}
                >
                  <Image src="/desk-camera.svg" alt="Camera" width={110} height={90} className="w-full h-auto pointer-events-none" />
                </a>
                
                {/* METROCARD */}
                <div 
                  className="absolute z-10 cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
                  style={{ top: '44%', left: '9%', width: '14%' }}
                  onMouseEnter={() => handleObjectEnter('🚇', 'From: Flushing, Queens', 'Born in NYC & raised on its amazing eats ', null)}
                  onMouseLeave={handleObjectLeave}
                >
                  <Image src="/desk-metrocard.svg" alt="MetroCard" width={85} height={55} className="w-full h-auto pointer-events-none" />
                </div>
                
                {/* HEADPHONES - triggers music player */}
                <div 
                  className="absolute z-10 cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
                  style={{ top: '10%', left: '7%', width: '28%' }}
                  onMouseEnter={() => handleObjectEnter('🎧', 'Now Playing', 'Saturn - SZA', null, 'music')}
                  onMouseLeave={handleObjectLeave}
                >
                  <Image src="/desk-headphone.svg" alt="Headphones" width={115} height={130} className="w-full h-auto pointer-events-none" />
                </div>
                
                {/* LAPTOP + IPAD + PEN */}
                <a
                  href="/#projects"
                  className="absolute z-20 cursor-pointer transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1 left-1/2 -translate-x-1/2 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
                  style={{ top: '20%', left: '50%', width: '45%' }}
                  onMouseEnter={() => handleObjectEnter('💻', 'Projects', 'Where the magic happens!', '/projects')}
                  onMouseLeave={handleObjectLeave}
                >
                  <Image src="/desk-tech.svg" alt="Laptop and iPad" width={260} height={220} className="w-full h-auto pointer-events-none" />
                </a>
                
                {/* PALETTE */}
                <a 
                  href="/pages/artwork"
                  className="absolute z-10 cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
                  style={{ top: '27%', right: '10%', width: '24%' }}
                  onMouseEnter={() => handleObjectEnter('🎨', 'Artwork', 'My designs, paintings & illustrations', '/pages/artwork')}
                  onMouseLeave={handleObjectLeave}
                >
                  <Image src="/desk-palette.svg" alt="Watercolor palette" width={145} height={100} className="w-full h-auto pointer-events-none" />
                </a>
                
                {/* MATCHA */}
                <div 
                  className="absolute z-20 cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1 p-2 drop-shadow-[0_5px_3px_rgba(92,74,61,0.4)]"
                  style={{ top: '61%', right: '7%', width: '15%' }}
                  onMouseEnter={() => handleObjectEnter('🍵', 'Powered by Matcha', 'Iced with 2% milk, every morning', null)}
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
              <div className="w-full mx-auto">
                <button 
                  className="w-full cursor-pointer group"
                  onClick={() => setDrawerOpen(!drawerOpen)}
                >
                  <div 
                    className="w-full h-11 bg-gradient-to-b from-[#c8b898] to-[#b8a888] flex items-center justify-center hover:from-[#c0b090] hover:to-[#b09878] transition-all active:scale-[0.998] rounded-b-lg shadow-md gap-3"
                  >
                    <span className={`text-[10px] uppercase tracking-[0.18em] font-medium text-[#7a6b58] transition-colors group-hover:text-[#5c4a3d]`}>
                      {drawerOpen ? 'Close' : 'Open drawer'}
                    </span>
                    <div className="w-10 h-2 bg-[#a89070] rounded-full shadow-inner" />
                    <span className={`text-[10px] text-[#9a8b78] transition-transform duration-300 ${drawerOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </div>
                </button>
                
                {/* BIO CARD - slides out from drawer */}
                <div 
                  className={`transition-all duration-500 ease-out overflow-hidden ${
                    drawerOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-white rounded-b-2xl border border-t-0 border-[#e8ddd0] p-6 shadow-lg">
                    
                    <div className="md:columns-2 gap-8 space-y-3">
                      <p className="text-[14px] text-[#6c5b4a] leading-relaxed break-inside-avoid">
                        I&apos;m Janna, a junior at <span className="text-[#003087] font-medium">Duke University</span>. 
                      </p>
                      <p className="text-[14px] text-[#6c5b4a] leading-relaxed break-inside-avoid">
                         My hands are rarely still. From throwing clay to upcycling old clothes into something new,
                         I'm driven by a restless <span className="font-medium text-[#5c4a3d]"> need to build</span>, 
                         and I love the process of turning my ideations into something tangible.
                        </p>
                      <p className="text-[14px] text-[#6c5b4a] leading-relaxed break-inside-avoid">
                      In high school, robotics introduced me to a new world of creation. I traded glue guns for CAD software and cardboard for 3D prints, falling in love with the challenge of mechanical constraints.
                      Discovering <span className="font-medium text-[#5c4a3d]">product design </span>
                          has allowed me to merge engineering and storytelling 
                        to design experiences that feel <span className="font-medium text-[#5c4a3d]">intuitive and joyful</span>. </p>
                      <p className="text-[14px] text-[#6c5b4a] leading-relaxed break-inside-avoid">
                      I try to bring this same intentionality into my own life—whether I'm teaching art to youth or scrapbooking the everyday things I'm grateful for.
                      These values also ground my advocacy; as a person with a disability, I believe that 
                      <span className="font-medium text-[#5c4a3d]"> inclusive design </span> is simply better design. 
                      I'm always expanding my toolkit to build experiences that foster connection and celebrate diversity (and to fill my future home with pieces I’ve made by hand).
                        </p>
                    </div>
             
                  </div>
                </div>
              </div>
            </div>

           {/* RIGHT: Title + Info card */}
           <div className="mt-8 lg:mt-0 lg:w-[320px] lg:shrink-0 flex flex-col relative z-30">
              
              {/* TITLE */}
              <div className="text-center lg:text-left mb-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#c4a882] mb-1">
                  ✿ Welcome to my desk
                </p>
                <h1 className="text-2xl md:text-3xl font-light text-[#5c4a3d] leading-tight">
                  Get to know <span className="italic font-serif text-[#c4a882]">me!</span>
                </h1>
              </div>

              {/* INFO CARD */}
              <div 
                className="w-full mb-4"
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
              >
                {activeItem.type === 'music' ? (
                  <MusicPlayerCard />
                ) : (
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-[#e8ddd0] p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#f5f0ea] flex items-center justify-center text-lg shrink-0">
                        {activeItem.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-medium text-[#5c4a3d] leading-tight font-sans">
                          {activeItem.label}
                        </p>
                        <p className="text-[11px] text-[#9c8b7a] leading-snug mt-1 font-sans">
                          {activeItem.desc}
                        </p>
                      </div>
                    </div>
                    {activeItem.link && (
                      <a 
                        href={activeItem.link} 
                        className="inline-block mt-2 text-[10px] font-semibold text-[#c4a882] hover:text-[#a08060] transition-colors"
                      >
                        View →
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Quick links */}
              <div className="hidden lg:block">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#c4b8a8] mb-3">Quick links</p>
                <div className="flex flex-wrap gap-2">
                  <a href="/#projects" className="text-[11px] px-3 py-1.5 rounded-full bg-[#f5ede4] text-[#6b5c50] hover:bg-[#ebe0d4] transition-colors">
                    Projects
                  </a>
                  <a href="/pages/artwork" className="text-[11px] px-3 py-1.5 rounded-full bg-[#ede4f0] text-[#6b5080] hover:bg-[#e0d4e8] transition-colors">
                    Artwork
                  </a>
                  <a href="/pages/photos" className="text-[11px] px-3 py-1.5 rounded-full bg-[#e4f0e8] text-[#507060] hover:bg-[#d4e8dc] transition-colors">
                    Photos
                  </a>
                </div>
              </div>

              {/* --- THE POLAROID (UNDER QUICK LINKS) --- */}
              <div className={`mt-8 transition-all duration-700 delay-100 '}`}>
                 <div className="hidden lg:block  relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-300 ease-out origin-center mx-12 lg:mx-12 w-fit">
                    <div className="bg-white p-2.5 pb-8 rounded shadow-[2px_4px_8px_-2px_rgba(0,0,0,0.1)] border border-[#e8ddd0]">
                        <div className="w-44 h-44 bg-[#f4f0ec] rounded-sm overflow-hidden relative">
                            <Image 
                                src="/headshot.jpg" 
                                alt="Janna" 
                                fill
                                className="object-cover opacity-95 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        {/* Washi Tape */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#e5d0b1] opacity-60 rotate-1 shadow-sm mix-blend-multiply"></div>
                    </div>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>
           
      {/* Footer */}
      <div className="w-full mt-auto">
        <Footer />
      </div>

    </div>
  );
}