"use client";

import React from "react";
import { Search, Compass, Cpu, Rocket, ArrowRight, Sparkles } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import TiltCard from "./TiltCard";

const stepIcons = [
  <Search key="1" className="w-6 h-6 text-[#FF5722]" />,
  <Compass key="2" className="w-6 h-6 text-[#FF7A50]" />,
  <Cpu key="3" className="w-6 h-6 text-[#FF8A65]" />,
  <Rocket key="4" className="w-6 h-6 text-[#FFA07A]" />,
];

export default function WorkflowSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1B20] border border-white/10 text-xs font-semibold text-[#FF8A65]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>Engineering Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How We Deliver <span className="gradient-text-vibrant">Transformative Software</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            A battle-tested engineering lifecycle ensuring seamless migration, zero operational downtime, and rapid value delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_DATA.workflow.map((item, index) => (
            <TiltCard
              key={item.step}
              maxTilt={7}
              scale={1.02}
              className="rounded-3xl bg-[#121316] border border-white/10 hover:border-[#FF5722]/50 p-6 sm:p-7 relative flex flex-col justify-between group shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-[#18191E] border border-white/5 group-hover:border-[#FF5722]/30 transition-colors">
                    {stepIcons[index]}
                  </div>
                  <span className="text-sm font-mono font-bold text-white/30 group-hover:text-[#FF5722] transition-colors uppercase tracking-wider">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF8A65] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span className="uppercase tracking-wider font-semibold font-mono text-[11px] text-[#FF8A65]">{item.step}</span>
                <span className="text-[#FF5722] group-hover:translate-x-1 transition-transform inline-flex items-center">
                  →
                </span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
