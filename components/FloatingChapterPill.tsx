"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp, Compass, ArrowUp } from "lucide-react";

interface Chapter {
  id: string;
  name: string;
  number: string;
}

const CHAPTERS: Chapter[] = [
  { id: "hero-stage", name: "Overview", number: "00" },
  { id: "chapter-agentic", name: "Agentic AI", number: "01" },
  { id: "chapter-voice", name: "Voice Intelligence", number: "02" },
  { id: "chapter-erp", name: "Enterprise ERP", number: "03" },
  { id: "chapter-telematics", name: "IoT & Fleet", number: "04" },
  { id: "chapter-print", name: "Cloud Print", number: "05" },
  { id: "chapter-operations", name: "Operations", number: "06" },
  { id: "chapter-developer", name: "Developer SDK", number: "07" },
];

export default function FloatingChapterPill() {
  const [activeChapter, setActiveChapter] = useState("Overview");
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show pill after scrolling past 250px
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
        setMenuOpen(false);
      }

      // Detect active chapter based on scroll position
      CHAPTERS.forEach((ch, idx) => {
        const el = document.getElementById(ch.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveChapter(ch.name);
            setActiveChapterIndex(idx);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <div className="relative pointer-events-auto">
        {/* Quick Menu Popover */}
        {menuOpen && (
          <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-72 p-3 rounded-2xl bg-[#121316]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-1 animate-in fade-in zoom-in-95 duration-200">
            <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-[#FF8A65] border-b border-white/10 mb-1.5 flex items-center justify-between">
              <span>Chapter Navigation</span>
              <Compass className="w-3.5 h-3.5 text-[#FF5722]" />
            </div>
            <div className="max-h-[300px] overflow-y-auto space-y-0.5 scrollbar-thin">
              {CHAPTERS.map((ch, idx) => (
                <button
                  key={ch.id}
                  onClick={() => jumpTo(ch.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between group ${
                    activeChapter === ch.name
                      ? "bg-[#FF5722] text-white shadow-[0_0_15px_rgba(255,87,34,0.4)]"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[10px] ${
                        activeChapter === ch.name ? "text-white/80" : "text-[#FF8A65]"
                      }`}
                    >
                      {ch.number}
                    </span>
                    <span>{ch.name}</span>
                  </div>
                  {activeChapter === ch.name && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            <div className="pt-1.5 border-t border-white/10 mt-1">
              <button
                onClick={scrollToTop}
                className="w-full px-3 py-1.5 rounded-lg text-[11px] font-semibold text-gray-400 hover:text-white hover:bg-white/5 flex items-center justify-center gap-1.5 transition-colors"
              >
                <ArrowUp className="w-3 h-3 text-[#FF5722]" />
                <span>Scroll to Top</span>
              </button>
            </div>
          </div>
        )}

        {/* The Floating Pill with Chapter Index Indicator */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white text-black hover:bg-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.6)] border border-white/20 transition-all transform active:scale-95 cursor-pointer ring-1 ring-black/5"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-black/50">
              0{activeChapterIndex}
            </span>
          </div>
          <span className="text-xs font-black tracking-tight">{activeChapter}</span>
          <div className="flex items-center gap-1.5 pl-2 border-l border-black/15">
            <ChevronUp
              className={`w-3.5 h-3.5 text-black/60 group-hover:text-black transition-transform duration-300 ${
                menuOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
