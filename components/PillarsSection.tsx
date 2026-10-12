"use client";

import React from "react";
import { Lightbulb, Network, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import TiltCard from "./TiltCard";

const pillarIcons = [
  <Lightbulb key="1" className="w-6 h-6 text-[#FF5722]" />,
  <Network key="2" className="w-6 h-6 text-[#FF7A50]" />,
  <Layers key="3" className="w-6 h-6 text-[#FF8A65]" />,
  <ShieldCheck key="4" className="w-6 h-6 text-[#FFA07A]" />,
];

export default function PillarsSection() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1B20] border border-white/10 text-xs font-semibold text-[#FF8A65]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>Engineering Principles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built on Core <span className="gradient-text-vibrant">Architectural Pillars</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Why forward-thinking enterprises trust RISEUPSOLUTIONS to orchestrate and scale their mission-critical operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_DATA.pillars.map((pillar, index) => (
            <TiltCard
              key={pillar.title}
              maxTilt={7}
              scale={1.02}
              className="rounded-3xl bg-[#121316] border border-white/10 hover:border-[#FF5722]/50 p-6 sm:p-7 flex flex-col justify-between group shadow-xl transition-all"
            >
              <div>
                <div className="p-3 w-fit rounded-2xl bg-[#18191E] border border-white/5 mb-5 group-hover:scale-110 transition-transform">
                  {pillarIcons[index]}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF8A65] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
