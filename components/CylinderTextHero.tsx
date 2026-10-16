"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Mic, 
  Boxes, 
  Navigation, 
  Printer, 
  Activity, 
  Code2, 
  Play, 
  Pause,
  ChevronRight
} from "lucide-react";

interface PlanetNode {
  id: string;
  name: string;
  tag: string;
  chapterId: string;
  icon: React.ReactNode;
  color: string;
  accent: string;
  description: string;
}

const PLANETS: PlanetNode[] = [
  {
    id: "voice",
    name: "RiseVoice AI",
    tag: "Agentic Audio",
    chapterId: "chapter-voice",
    icon: <Mic className="w-full h-full text-white" />,
    color: "#FF5722",
    accent: "from-[#FF6B35] to-[#FF3D00]",
    description: "Sub-200ms latency voice bots with streaming Whisper ASR & real-time telephony.",
  },
  {
    id: "erp",
    name: "Enterprise ERP",
    tag: "Unified Core",
    chapterId: "chapter-erp",
    icon: <Boxes className="w-full h-full text-white" />,
    color: "#FF8A65",
    accent: "from-[#FF8A65] to-[#E64A19]",
    description: "Omnichannel inventory, multi-branch ledger, and compliance automation.",
  },
  {
    id: "fleet",
    name: "IoT Telematics",
    tag: "100k+ Devices",
    chapterId: "chapter-telematics",
    icon: <Navigation className="w-full h-full text-white" />,
    color: "#FF7043",
    accent: "from-[#FF7043] to-[#D84315]",
    description: "High-concurrency MQTT telemetry brokers & sub-second GPS packet processing.",
  },
  {
    id: "print",
    name: "Cloud Print",
    tag: "Zero Driver",
    chapterId: "chapter-print",
    icon: <Printer className="w-full h-full text-white" />,
    color: "#FFA07A",
    accent: "from-[#FFA07A] to-[#FF5722]",
    description: "Headless network print spooler with zero configuration or local drivers.",
  },
  {
    id: "operations",
    name: "Operations BI",
    tag: "Real-Time Telemetry",
    chapterId: "chapter-operations",
    icon: <Activity className="w-full h-full text-white" />,
    color: "#FF5722",
    accent: "from-[#FF6D3B] to-[#BF360C]",
    description: "Predictive anomaly detection, visual telemetry pipelines, and unified KPIs.",
  },
  {
    id: "developer",
    name: "Developer SDK",
    tag: "REST & WebSockets",
    chapterId: "chapter-developer",
    icon: <Code2 className="w-full h-full text-white" />,
    color: "#FF8A50",
    accent: "from-[#FF8A50] to-[#E64A19]",
    description: "High-throughput APIs, webhooks, and modern developer tooling.",
  },
];

export default function CylinderTextHero() {
  const [activePlanet, setActivePlanet] = useState<PlanetNode | null>(PLANETS[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  const stageRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const isPausedRef = useRef(false);
  const lastTimeRef = useRef<number | null>(null);

  // Synchronize pause ref
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Window resize observer for responsive orbital radii
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Butter-smooth celestial orbit loop
  useEffect(() => {
    let animId: number;

    const loop = (time: number) => {
      if (lastTimeRef.current !== null) {
        const delta = Math.min(time - lastTimeRef.current, 50);
        const speed = isPausedRef.current ? 0.00008 : 0.00048;
        angleRef.current = (angleRef.current + speed * delta) % (2 * Math.PI);
        setOrbitAngle(angleRef.current);
      }
      lastTimeRef.current = time;
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // On mobile (< 640px), auto-highlight front-most planet as it revolves
  useEffect(() => {
    if (windowWidth >= 640 || isPaused) return;
    let maxDepth = -Infinity;
    let frontPlanet = PLANETS[0];
    PLANETS.forEach((planet, index) => {
      const theta = orbitAngle + (index * (2 * Math.PI / PLANETS.length));
      const depth = Math.sin(theta);
      if (depth > maxDepth) {
        maxDepth = depth;
        frontPlanet = planet;
      }
    });
    setActivePlanet(frontPlanet);
  }, [orbitAngle, windowWidth, isPaused]);

  // Interactive 3D Cursor Parallax (Desktop)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (windowWidth < 768 || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setMouseTilt({ x: 0, y: 0 });
  };

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Refined orbital radii (compact, sleek, mathematically locked to orbit path)
  const isMobile = windowWidth < 640;
  const rx = windowWidth < 380 ? 116 : windowWidth < 640 ? 132 : windowWidth < 1024 ? 250 : windowWidth < 1440 ? 330 : 375;
  const ry = isMobile ? 56 : windowWidth < 1024 ? 80 : windowWidth < 1440 ? 104 : 118;

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 overflow-hidden bg-gradient-to-b from-transparent via-[#090A0C] to-transparent">
      {/* 1. TOP STATUS BADGE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 text-center mb-1">
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#131418]/95 border border-white/10 text-[11px] sm:text-xs text-gray-300 shadow-xl backdrop-blur-xl">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5722] shadow-[0_0_10px_#FF5722] animate-pulse" />
          <span className="font-display font-black tracking-wider uppercase text-[10px] sm:text-xs text-[#FF8A65]">
            RISEUP SOLUTIONS
          </span>
          <span className="text-white/20">•</span>
          <span className="text-gray-400 font-medium hidden sm:inline">Autonomous Enterprise Orbit System</span>
          <span className="text-emerald-400 font-semibold text-[10px] sm:text-[11px] flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Live Celestial Engine
          </span>
        </div>
      </div>

      {/* 2. REFINED SOLAR ORBIT STAGE (EXACT CELESTIAL ALIGNMENT & DECREASED SIZES) */}
      <div 
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-[1280px] mx-auto h-[380px] sm:h-[460px] md:h-[500px] lg:h-[540px] flex items-center justify-center z-10 my-1 select-none overflow-hidden sm:overflow-visible"
      >
        {/* Ambient Warm Radial Solar Glows - Decreased size for sleek atmosphere */}
        <div className="absolute w-[240px] sm:w-[420px] lg:w-[620px] h-[180px] sm:h-[300px] lg:h-[400px] bg-[#FF5722]/12 blur-[90px] sm:blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute w-[160px] sm:w-[260px] lg:w-[380px] h-[160px] sm:h-[260px] lg:h-[380px] bg-[#FF8A65]/10 blur-[70px] sm:blur-[90px] rounded-full pointer-events-none" />

        {/* 3D PARALLAX MOTION FRAME: Locks SVG tracks and revolving planets in 100% sync */}
        <div 
          className="relative w-full h-full flex items-center justify-center pointer-events-none transition-transform duration-200 ease-out"
          style={{
            transform: `translate3d(${mouseTilt.x * 14}px, ${mouseTilt.y * 10}px, 0px)`,
          }}
        >
          {/* SVG ORBIT TRACKS: Precisely rendered using exact rx & ry */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: "visible" }}
          >
            <defs>
              <linearGradient id="orbitLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF5722" stopOpacity="0.85" />
                <stop offset="30%" stopColor="#FF8A65" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#FF3D00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFA07A" stopOpacity="0.45" />
              </linearGradient>
              <filter id="orbitGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer Faint Concentric Guide Ring */}
            <ellipse 
              cx="50%" cy="50%" 
              rx={rx * 1.22} ry={ry * 1.22} 
              fill="none" 
              stroke="rgba(255,255,255,0.06)" 
              strokeWidth="1" 
              strokeDasharray="4 8" 
            />

            {/* Inner Concentric Guide Ring */}
            <ellipse 
              cx="50%" cy="50%" 
              rx={rx * 0.74} ry={ry * 0.74} 
              fill="none" 
              stroke="rgba(255,255,255,0.05)" 
              strokeWidth="1" 
              strokeDasharray="3 6" 
            />

            {/* Radiant Orbit Glow Halo */}
            <ellipse 
              cx="50%" cy="50%" 
              rx={rx} ry={ry} 
              fill="none" 
              stroke="#FF5722" 
              strokeWidth="3.5" 
              strokeOpacity="0.32" 
              filter="url(#orbitGlow)" 
            />

            {/* Crisp Main Planetary Orbit Track (The exact line planets revolve along) */}
            <ellipse 
              cx="50%" cy="50%" 
              rx={rx} ry={ry} 
              fill="none" 
              stroke="url(#orbitLineGrad)" 
              strokeWidth="1.5" 
            />

            {/* Delicate Stardust Orbit Ticks */}
            <ellipse 
              cx="50%" cy="50%" 
              rx={rx} ry={ry} 
              fill="none" 
              stroke="rgba(255,255,255,0.22)" 
              strokeWidth="1" 
              strokeDasharray="2 12" 
            />
          </svg>

          {/* THE CENTRAL SUN MEDALLION (Sleeker, decreased size, ultra-refined luxury finish) */}
          <div 
            className="relative z-20 flex flex-col items-center justify-center group pointer-events-auto transition-transform duration-300 ease-out animate-float-gentle"
          >
            {/* Pulsing Solar Corona Flare - Balanced for mobile & desktop */}
            <div className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-gradient-to-tr from-[#FF3D00] via-[#FF5722] to-[#FFA07A] blur-[18px] sm:blur-[30px] opacity-45 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none animate-corona-breath" />

            {/* Rotating Solar Astrolabe Ticks Ring */}
            <div className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border border-dashed border-[#FF8A65]/35 animate-[spin_90s_linear_infinite] pointer-events-none" />

            {/* Circular Sun Core Disc - Clean, sleek, perfectly proportioned on phones (48px) and desktop (112px) */}
            <div className="relative w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full p-[1.5px] sm:p-[2.5px] bg-gradient-to-tr from-[#1E2026] via-[#2D313B] to-[#121316] ring-1.5 sm:ring-2 ring-white/20 group-hover:ring-[#FF5722] shadow-[0_0_18px_rgba(255,87,34,0.3)] sm:shadow-[0_0_35px_rgba(255,87,34,0.38)] transition-all duration-500 transform group-hover:scale-105">
              {/* Clean White Inner Jewel Housing the Logo */}
              <div className="relative w-full h-full rounded-full bg-white p-1 sm:p-2 md:p-2.5 flex items-center justify-center shadow-inner overflow-hidden border border-white">
                {/* Luxury Diagonal Shimmer Light Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none animate-shimmer-sweep w-[50%] h-full transform -skew-x-12" />

                <img
                  src="/logo.png"
                  alt="RISEUP SOLUTIONS"
                  className="w-full h-full object-contain transform filter drop-shadow-sm group-hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>
            </div>
          </div>

          {/* THE REVOLVING PLANETS (Centered EXACTLY on the orbit line at all times) */}
          {PLANETS.map((planet, index) => {
            const totalPlanets = PLANETS.length;
            const theta = orbitAngle + (index * (2 * Math.PI / totalPlanets));

            // Coordinates on the exact ellipse path
            const x = Math.cos(theta) * rx;
            const y = Math.sin(theta) * ry;

            // Depth calculation: sin(theta) < 0 is back/top (behind sun), > 0 is front/bottom (in front of sun)
            const sinVal = Math.sin(theta);
            const depth = (sinVal + 1) / 2; // 0 to 1
            const scale = isMobile ? (0.75 + depth * 0.25) : (0.80 + depth * 0.28);
            
            // Behind the central sun (sun is z-20) vs In front of the sun
            const zIndex = sinVal < -0.15 ? 12 : 35;
            const opacity = 0.72 + depth * 0.28;
            const isHovered = activePlanet?.id === planet.id;

            return (
              <div
                key={planet.id}
                onClick={() => {
                  setActivePlanet(planet);
                  setIsPaused(true);
                }}
                onMouseEnter={() => {
                  setActivePlanet(planet);
                  setIsPaused(true);
                }}
                onMouseLeave={() => {
                  setIsPaused(false);
                }}
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0px) scale(${isHovered ? scale * 1.12 : scale})`,
                  zIndex: isHovered ? 60 : zIndex,
                  opacity: isHovered ? 1 : opacity,
                  willChange: "transform, opacity",
                }}
                className="absolute cursor-pointer transition-transform duration-75 group pointer-events-auto flex items-center justify-center"
              >
                {/* The Planet Sphere Body (Exact center placed on the line) - Decreased size */}
                <div 
                  className={`relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full p-[2px] bg-gradient-to-tr ${planet.accent} shadow-xl transition-all duration-300 flex items-center justify-center ${
                    isHovered 
                      ? "ring-2 ring-white shadow-[0_0_24px_rgba(255,87,34,0.9)] scale-110" 
                      : "shadow-[0_0_12px_rgba(255,87,34,0.35)]"
                  }`}
                >
                  {/* Soft Stardust Aura Glow */}
                  <div 
                    className="absolute -inset-1 rounded-full blur-sm opacity-30 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: planet.color }}
                  />

                  {/* Glossy Planet Interior */}
                  <div className="w-full h-full rounded-full bg-[#121316] flex items-center justify-center relative overflow-hidden p-1.5 sm:p-2">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/40 pointer-events-none" />
                    <div className="relative z-10 w-full h-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      {planet.icon}
                    </div>
                  </div>

                  {/* Planetary Mini Orbit Ring Accent */}
                  <div className="absolute -inset-1 rounded-full border border-dashed border-white/20 pointer-events-none animate-[spin_24s_linear_infinite]" />
                </div>

                {/* Planet Name Pill Tag (Floats below the sphere without shifting its center) */}
                <div className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2.5 py-0.5 sm:px-3 sm:py-0.5 rounded-lg bg-[#141519]/95 border border-white/10 shadow-lg backdrop-blur-xl text-center whitespace-nowrap transition-all group-hover:border-[#FF5722] group-hover:bg-[#1a1b22] pointer-events-none">
                  <span className="text-[9.5px] sm:text-[10.5px] font-bold text-white group-hover:text-[#FF8A65] transition-colors block leading-tight">
                    {planet.name}
                  </span>
                  <span className="text-[7px] sm:text-[7.5px] font-mono text-[#FF8A65] tracking-wider uppercase block font-semibold mt-0.5">
                    {planet.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ACTIVE PLANET DOCKED HUD: Cleanly placed at bottom, no collision with bottom planet */}
        {activePlanet && (
          <div className="hidden sm:flex absolute bottom-3 left-1/2 -translate-x-1/2 z-40 items-center gap-3 px-4 py-1.5 rounded-xl bg-[#141519]/95 border border-[#FF5722]/50 shadow-[0_0_20px_rgba(255,87,34,0.25)] backdrop-blur-2xl text-center max-w-lg animate-in fade-in zoom-in-95 duration-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF8A65] flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-ping" />
              {activePlanet.tag}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs font-semibold text-white whitespace-nowrap">
              {activePlanet.name}
            </span>
            <span className="text-white/20">•</span>
            <button
              onClick={() => scrollToChapter(activePlanet.chapterId)}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF8A65] hover:text-white transition-colors whitespace-nowrap ml-auto"
            >
              <span>Explore Chapter</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* ORBIT PLAY/PAUSE INTERACTIVE TOGGLE */}
        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="hidden sm:flex absolute bottom-3 right-4 sm:right-8 z-40 items-center gap-2 text-xs font-mono text-gray-400 bg-[#121316]/90 hover:bg-[#1a1b22] px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/20 backdrop-blur-md shadow-xl transition-all cursor-pointer"
        >
          {isPaused ? (
            <>
              <Play className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-gray-300">Resume Orbit</span>
            </>
          ) : (
            <>
              <Pause className="w-3.5 h-3.5 text-[#FF5722]" />
              <span className="text-gray-300">Celestial Revolution 60FPS</span>
            </>
          )}
        </button>
      </div>

      {/* 4. MOBILE INTERACTIVE SYSTEM SELECTOR STRIP (Swipeable & Tap-Friendly) */}
      <div className="sm:hidden w-full px-4 mt-1 mb-4 z-20">
        <div className="text-[10px] font-mono uppercase text-[#FF8A65] font-bold tracking-wider mb-2 flex items-center justify-between">
          <span>Enterprise Systems</span>
          <span className="text-gray-500">Tap to inspect</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
          {PLANETS.map((planet) => {
            const isSelected = activePlanet?.id === planet.id;
            return (
              <button
                key={planet.id}
                onClick={() => {
                  setActivePlanet(planet);
                  setIsPaused(true);
                }}
                className={`snap-start flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                  isSelected
                    ? "bg-[#FF5722] text-white border-[#FF5722] shadow-[0_0_15px_rgba(255,87,34,0.4)]"
                    : "bg-[#141519]/90 text-gray-300 border-white/10 hover:border-white/25 hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: planet.color }} />
                <span>{planet.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. BOTTOM HERO BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-2 sm:pt-4">
        <div className="border-t border-white/10 pt-6 sm:pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left: Headline & Statement */}
          <div className="md:col-span-5 space-y-2 sm:space-y-3">
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
              Software to orchestrate, automate, and build everywhere
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              RISEUP SOLUTIONS operates as a unified technological solar system — delivering autonomous voice agents, enterprise ERPs, high-concurrency fleet telematics, and cloud printing.
            </p>
          </div>

          {/* Right: Quick Chapter Index Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-x-6 sm:gap-y-3 text-xs sm:text-sm">
            <div className="space-y-1">
              <button
                onClick={() => scrollToChapter("chapter-agentic")}
                className="w-full text-left font-semibold text-gray-300 hover:text-[#FF8A65] transition-colors block py-1 px-2 rounded-lg bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-transparent"
              >
                Agentic AI
              </button>
              <button
                onClick={() => scrollToChapter("chapter-voice")}
                className="w-full text-left font-semibold text-gray-300 hover:text-[#FF8A65] transition-colors block py-1 px-2 rounded-lg bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-transparent"
              >
                Voice Intel
              </button>
            </div>

            <div className="space-y-1">
              <button
                onClick={() => scrollToChapter("chapter-erp")}
                className="w-full text-left font-semibold text-gray-300 hover:text-[#FF8A65] transition-colors block py-1 px-2 rounded-lg bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-transparent"
              >
                Enterprise ERP
              </button>
              <button
                onClick={() => scrollToChapter("chapter-telematics")}
                className="w-full text-left font-semibold text-gray-300 hover:text-[#FF8A65] transition-colors block py-1 px-2 rounded-lg bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-transparent"
              >
                IoT Fleet
              </button>
            </div>

            <div className="space-y-1">
              <button
                onClick={() => scrollToChapter("chapter-print")}
                className="w-full text-left font-semibold text-gray-300 hover:text-[#FF8A65] transition-colors block py-1 px-2 rounded-lg bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-transparent"
              >
                Cloud Print
              </button>
              <button
                onClick={() => scrollToChapter("chapter-operations")}
                className="w-full text-left font-semibold text-gray-300 hover:text-[#FF8A65] transition-colors block py-1 px-2 rounded-lg bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-transparent"
              >
                Operations
              </button>
            </div>

            <div className="space-y-1">
              <button
                onClick={() => scrollToChapter("chapter-developer")}
                className="w-full text-left font-semibold text-gray-300 hover:text-[#FF8A65] transition-colors block py-1 px-2 rounded-lg bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-transparent"
              >
                Developer SDK
              </button>
              <Link
                href="/contact"
                className="w-full text-left font-bold text-[#FF8A65] hover:text-white transition-colors block py-1 px-2 rounded-lg bg-[#FF5722]/10 sm:bg-transparent border border-[#FF5722]/20 sm:border-transparent flex items-center justify-between"
              >
                <span>Connect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
