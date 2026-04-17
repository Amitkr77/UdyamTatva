"use client";

import { TICKER_TEXT } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export function TickerSection() {
  // Create a longer string for the cyber effect
  const cyberText = Array(8).fill(TICKER_TEXT).join(" /// ");
  const binaryText = Array(20).fill("01001000 01000101 01001100 01001100 01001111").join(" ");

  const tickerRef = useRef<HTMLDivElement>(null);
  const binaryRef = useRef<HTMLDivElement>(null);
  
  const [isHovered, setIsHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  
  // Animation Refs
  const posRef = useRef(0);
  const binaryPosRef = useRef(0);
  const speedRef = useRef(2);
  const targetSpeedRef = useRef(2);
  const animRef = useRef<number | null>(null);
  
  // Glitch State
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const t1 = tickerRef.current;
    const t2 = binaryRef.current;
    if (!t1 || !t2) return;

    const animate = () => {
      // Mechanical easing for speed
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.1;
      
      // Main Ticker Movement
      posRef.current -= speedRef.current;
      const child1 = t1.children[0] as HTMLElement;
      if (child1 && posRef.current <= -child1.offsetWidth / 2) {
        posRef.current = 0; // Reset for seamless loop
      }
      t1.style.transform = `translateX(${posRef.current}px)`;

      // Binary Footer Movement (Faster)
      binaryPosRef.current -= (speedRef.current * 3);
      const child2 = t2.children[0] as HTMLElement;
      if (child2 && binaryPosRef.current <= -child2.offsetWidth) {
        binaryPosRef.current = 0;
      }
      t2.style.transform = `translateX(${binaryPosRef.current}px)`;

      // Random Glitch Trigger
      if (Math.random() > 0.98 && !isHovered) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 100);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX((e.clientX - rect.left) / rect.width);
  };

  return (
    <div
      className="relative w-full overflow-hidden font-mono select-none"
      style={{ 
        background: "#050505",
        border: "1px solid #333",
        boxShadow: "0 0 40px rgba(0, 243, 255, 0.05)"
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        targetSpeedRef.current = 0; // Stop on hover
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        targetSpeedRef.current = 2; // Resume speed
      }}
      onMouseMove={handleMouseMove}
    >
      {/* ── BACKGROUND GRID ── */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
        }}
      />

      {/* ── TOP SYSTEM BAR ── */}
      <div className="relative flex items-center justify-between px-6 py-2 border-b border-gray-800 bg-black/80 backdrop-blur-sm z-20">
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 px-3 py-1 border ${isHovered ? 'border-cyan-500 text-cyan-400' : 'border-pink-600 text-pink-500'} bg-opacity-10`}>
            <div className={`w-2 h-2 ${isHovered ? 'bg-cyan-400' : 'bg-pink-600'} animate-pulse`} />
            <span className="text-[10px] font-bold tracking-widest">
              {isHovered ? "SYSTEM STABLE" : "CRITICAL ALERT"}
            </span>
          </div>
          
          {/* Fake CPU Bars */}
          <div className="hidden md:flex gap-1">
            {[40, 70, 30, 85, 50].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div 
                  className="w-1 bg-gray-800 h-8 relative overflow-hidden"
                >
                  <div 
                    className={`absolute bottom-0 w-full transition-all duration-500 ${isHovered ? 'bg-cyan-500' : 'bg-pink-600'}`}
                    style={{ height: `${h}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
           <h2 className={`text-sm font-black tracking-[0.5em] uppercase ${isHovered ? 'text-cyan-400' : 'text-pink-500'} drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]`}>
             DATA_STREAM_V.2.0
           </h2>
        </div>

        <div className="text-[10px] text-gray-500">
          SECURE_CONN: <span className={isHovered ? "text-cyan-400" : "text-red-500"}>{isHovered ? "ENCRYPTED" : "UNSECURED"}</span>
        </div>
      </div>

      {/* ── MAIN GLITCH TICKER ── */}
      <div className="relative h-24 flex items-center overflow-hidden border-b border-gray-800 bg-black">
        
        {/* Scanline Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
        
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-20" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-20" />

        <div ref={tickerRef} className="flex whitespace-nowrap will-change-transform">
          {/* We duplicate content for seamless loop */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center pr-12">
              {cyberText.split(" /// ").map((word, i) => (
                <div key={i} className="flex items-center">
                  <span 
                    className={`text-4xl md:text-5xl font-black uppercase tracking-tighter italic
                      ${isHovered ? 'text-cyan-100' : 'text-white'}
                    `}
                    style={{
                      textShadow: isHovered 
                        ? '0 0 20px rgba(0, 243, 255, 0.6)' 
                        : '0 0 15px rgba(255, 0, 255, 0.4)',
                      transform: glitchActive && i % 3 === 0 ? `translateX(${Math.random() * 4 - 2}px)` : 'none',
                      opacity: glitchActive && i % 5 === 0 ? 0.5 : 1
                    }}
                  >
                    {word}
                  </span>
                  <span className="mx-6 text-pink-500 text-2xl opacity-50">✖</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── BINARY FOOTER ── */}
      <div className="relative h-8 bg-[#0a0a0a] overflow-hidden border-t border-gray-900">
        <div ref={binaryRef} className="flex whitespace-nowrap will-change-transform opacity-60">
           {[...Array(2)].map((_, i) => (
             <div key={i} className="flex items-center text-[10px] text-green-500 font-mono tracking-widest pr-12">
               {binaryText}
             </div>
           ))}
        </div>
        
        {/* Center Overlay Badge */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-black border border-gray-800 z-30 transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0.9})`
          }}
        >
          <span className="text-[10px] text-cyan-400 font-bold tracking-[0.2em]">
            PAUSED_BY_USER
          </span>
        </div>
      </div>

      {/* ── DECORATIVE CORNERS ── */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500 z-40" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500 z-40" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500 z-40" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500 z-40" />

      {/* ── MOUSE SPOTLIGHT EFFECT ── */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 mix-blend-screen"
        style={{
          background: `radial-gradient(600px circle at ${mouseX * 100}% 50%, rgba(0, 243, 255, 0.06), transparent 40%)`
        }}
      />
    </div>
  );
}