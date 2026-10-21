"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

interface TrailPoint {
  x: number;
  y: number;
  alpha: number;
}

export default function LuxuryAudioAndCursor() {
  const pathname = usePathname();
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [trailDots, setTrailDots] = useState<TrailPoint[]>([]);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const lastScrollYRef = useRef(0);
  const lastScrollSoundTimeRef = useRef(0);
  const lastHoverSoundTimeRef = useRef(0);
  const lastHoverTargetRef = useRef<Element | null>(null);
  const trailingPosRef = useRef({ x: -100, y: -100 });
  const targetPosRef = useRef({ x: -100, y: -100 });
  const trailHistoryRef = useRef<{ x: number; y: number }[]>([]);

  // Safe helper to obtain or resume AudioContext
  const getAudioContext = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          audioCtxRef.current = new AudioContextClass();
        }
      }
      if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
      return audioCtxRef.current;
    } catch {
      return null;
    }
  }, []);

  // 1. SOUND EFFECT: Velvety Luxury Hover Chime (Tactile, warm harmonic tick)
  const playHoverSound = useCallback(() => {
    if (!isAudioEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1050, now);
      filter.Q.setValueAtTime(3.8, now);

      osc.type = "sine";
      osc.frequency.setValueAtTime(940, now);
      osc.frequency.exponentialRampToValueAtTime(1260, now + 0.038);

      gain.gain.setValueAtTime(0.024, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.038);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.042);
    } catch {
      // Audio error suppressed
    }
  }, [isAudioEnabled, getAudioContext]);

  // 2. SOUND EFFECT: Crisp Luxury Tactile Button Switch (Mechanical click + warm pop)
  const playClickSound = useCallback(() => {
    if (!isAudioEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // High transient snap
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = "highpass";
      filter.frequency.setValueAtTime(1300, now);

      osc.type = "triangle";
      osc.frequency.setValueAtTime(1600, now);
      osc.frequency.exponentialRampToValueAtTime(280, now + 0.032);

      gain.gain.setValueAtTime(0.068, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.032);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.036);

      // Low mechanical body resonance
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(440, now);
      subOsc.frequency.exponentialRampToValueAtTime(130, now + 0.028);

      subGain.gain.setValueAtTime(0.048, now);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.028);

      subOsc.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 0.032);
    } catch {
      // Audio error suppressed
    }
  }, [isAudioEnabled, getAudioContext]);

  // 3. SOUND EFFECT: Smooth Scroll Micro-Acoustic Feedback
  const playScrollSound = useCallback(() => {
    if (!isAudioEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(780, now);
      filter.Q.setValueAtTime(3.2, now);

      osc.type = "sine";
      osc.frequency.setValueAtTime(680, now);
      osc.frequency.exponentialRampToValueAtTime(360, now + 0.035);

      gain.gain.setValueAtTime(0.022, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.038);
    } catch {
      // Audio error suppressed
    }
  }, [isAudioEnabled, getAudioContext]);

  // Scroll listener: Calculates page progress & triggers acoustic scroll feedback
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentY / maxScroll) * 100)));
      }

      const delta = Math.abs(currentY - lastScrollYRef.current);
      const now = Date.now();

      // Trigger soft acoustic haptic every ~75px of scroll delta, max once every 90ms
      if (delta > 70 && now - lastScrollSoundTimeRef.current > 85) {
        lastScrollSoundTimeRef.current = now;
        lastScrollYRef.current = currentY;
        playScrollSound();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [playScrollSound]);

  // Auto-observe sections & cards for smooth scroll-triggered entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );

    const elementsToAnimate = document.querySelectorAll(
      "section, .glass-card, [id^='chapter-'] > div"
    );
    elementsToAnimate.forEach((el) => {
      if (!el.classList.contains("scroll-reveal")) {
        el.classList.add("scroll-reveal");
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-initialize audio on first user click or tap anywhere
  useEffect(() => {
    const handleFirstInteraction = () => {
      getAudioContext();
      setIsAudioEnabled(true);
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });
    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [getAudioContext]);

  // Toggle audio consent button
  const toggleAudio = () => {
    if (!isAudioEnabled) {
      getAudioContext();
      setIsAudioEnabled(true);
      playClickSound();
    } else {
      setIsAudioEnabled(false);
    }
  };

  // Luxury Custom Cursor with Dynamic Sunset Orange Colors & Physics
  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      targetPosRef.current = { x: e.clientX, y: e.clientY };
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Trail history update
      const history = trailHistoryRef.current;
      history.unshift({ x: e.clientX, y: e.clientY });
      if (history.length > 5) history.pop();

      // Check if hovering interactive element
      const target = (e.target as HTMLElement | null)?.closest(
        "button, a, input, select, textarea, [role='button'], .cursor-pointer, [data-interactive]"
      );
      if (target && target !== lastHoverTargetRef.current) {
        lastHoverTargetRef.current = target;
        setIsHovered(true);
        const now = Date.now();
        if (now - lastHoverSoundTimeRef.current > 70) {
          lastHoverSoundTimeRef.current = now;
          playHoverSound();
        }
      } else if (!target) {
        lastHoverTargetRef.current = null;
        setIsHovered(false);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const target = (e.target as HTMLElement | null)?.closest(
        "button, a, input, select, textarea, [role='button'], .cursor-pointer"
      );
      if (target) {
        playClickSound();
      }
    };

    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth lerp frame loop for trailing luxury halo and stardust embers
    let animId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const followLoop = () => {
      trailingPosRef.current.x = lerp(trailingPosRef.current.x, targetPosRef.current.x, 0.22);
      trailingPosRef.current.y = lerp(trailingPosRef.current.y, targetPosRef.current.y, 0.22);
      setTrailingPos({ x: trailingPosRef.current.x, y: trailingPosRef.current.y });

      // Create decaying trail points
      const dots: TrailPoint[] = trailHistoryRef.current.map((pt, i) => ({
        x: pt.x,
        y: pt.y,
        alpha: Math.max(0, 0.45 - i * 0.1),
      }));
      setTrailDots(dots);

      animId = requestAnimationFrame(followLoop);
    };

    animId = requestAnimationFrame(followLoop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [playHoverSound, playClickSound]);

  // Masked route isolation: Do not render custom cursor or audio controls on /print route
  if (pathname?.startsWith("/print")) {
    return null;
  }

  return (
    <>
      {/* 1. TOP SCROLL PROGRESS BAR: Luxury glowing gradient meter */}
      <div
        className="fixed top-0 left-0 h-[2.5px] z-[9999] pointer-events-none transition-all duration-75 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #FF3D00 0%, #FF5722 50%, #FFA07A 100%)",
          boxShadow: "0 0 10px rgba(255, 87, 34, 0.8)",
        }}
      />

      {/* 2. BESPOKE LUXURY CUSTOM CURSOR (Active only on this website) */}
      {isVisible && (
        <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
          {/* Stardust Trail Embers */}
          {trailDots.map((dot, idx) => (
            <div
              key={idx}
              className="fixed rounded-full pointer-events-none transition-transform duration-75"
              style={{
                left: dot.x,
                top: dot.y,
                width: `${Math.max(2, 6 - idx * 1.2)}px`,
                height: `${Math.max(2, 6 - idx * 1.2)}px`,
                marginLeft: `-${Math.max(1, 3 - idx * 0.6)}px`,
                marginTop: `-${Math.max(1, 3 - idx * 0.6)}px`,
                backgroundColor: idx % 2 === 0 ? "#FF5722" : "#FFA07A",
                opacity: dot.alpha,
                boxShadow: "0 0 6px #FF5722",
              }}
            />
          ))}

          {/* Main Precision Cursor: Features the signature RISEUP chevron diamond & glowing optic bead */}
          <div
            className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 transition-transform duration-75 ease-out flex items-center justify-center pointer-events-none"
            style={{
              transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0px) scale(${
                isClicking ? 0.78 : isHovered ? 1.35 : 1
              })`,
            }}
          >
            {/* Signature Diamond Chevron Motif in Solar Flame Colors */}
            <svg
              viewBox="0 0 24 24"
              className={`w-5 h-5 transition-transform duration-300 ${
                isHovered
                  ? "rotate-45 drop-shadow-[0_0_12px_rgba(255,87,34,1)] scale-110"
                  : "drop-shadow-[0_0_8px_rgba(255,87,34,0.85)]"
              }`}
              fill="none"
            >
              {/* Top Chevron Point */}
              <path
                d="M12 2L20 10"
                stroke={isHovered ? "#FF8A65" : "#FF6B35"}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M12 2L4 10"
                stroke="#FF3D00"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Center Core Optic Bead */}
              <circle
                cx="12"
                cy="12"
                r={isHovered ? "3.2" : "2.5"}
                fill="#FFFFFF"
                className="drop-shadow-[0_0_6px_#FFFFFF]"
              />
              {/* Bottom Chevron Point */}
              <path
                d="M12 22L20 14"
                stroke={isHovered ? "#FF8A65" : "#FF6B35"}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M12 22L4 14"
                stroke="#FF3D00"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Smooth Trailing Luxury Magnetic Halo with Vibrant Orange Solar Glow */}
          <div
            className={`fixed top-0 left-0 rounded-full border pointer-events-none transition-all duration-200 ease-out flex items-center justify-center ${
              isHovered
                ? "w-14 h-14 -ml-7 -mt-7 border-[#FF5722] bg-[#FF5722]/15 backdrop-blur-[1px] shadow-[0_0_28px_rgba(255,87,34,0.55)] ring-2 ring-[#FF8A65]/30 scale-105"
                : "w-8 h-8 -ml-4 -mt-4 border-[#FF5722]/40 bg-[#FF5722]/5 shadow-[0_0_14px_rgba(255,87,34,0.25)]"
            }`}
            style={{
              transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0px)`,
            }}
          >
            {/* Center trailing micro-flare */}
            <div
              className={`rounded-full bg-[#FF5722] transition-all duration-200 ${
                isHovered ? "w-2 h-2 opacity-90 shadow-[0_0_8px_#FF5722]" : "w-1 h-1 opacity-60"
              }`}
            />
          </div>
        </div>
      )}

      {/* 3. FLOATING ACOUSTIC AUDIO HAPTIC FEEDBACK TOGGLE */}
      <aside
        aria-label="Audio controls"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2"
      >
        <button
          onClick={toggleAudio}
          className={`group flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border backdrop-blur-xl transition-all duration-300 shadow-2xl text-[11px] sm:text-xs cursor-pointer ${
            isAudioEnabled
              ? "bg-[#18191E]/95 border-[#FF5722]/60 text-white shadow-[0_0_22px_rgba(255,87,34,0.35)] ring-1 ring-[#FF5722]/50"
              : "bg-[#101115]/85 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
          }`}
          title={isAudioEnabled ? "Mute interactive sounds" : "Enable luxury interactive sounds"}
        >
          {isAudioEnabled ? (
            <>
              <div className="relative flex items-center justify-center">
                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5722] animate-pulse" />
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <span className="font-mono tracking-wider uppercase font-semibold text-gray-200">
                <span className="hidden sm:inline">Acoustic: </span>
                <span className="text-[#FF8A65]">Active</span>
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-white transition-colors" />
              <span className="font-mono tracking-wider uppercase font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                Sound Off
              </span>
            </>
          )}
        </button>
      </aside>
    </>
  );
}
