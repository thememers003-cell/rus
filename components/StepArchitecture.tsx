"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Cpu, Layers, Radio, Check } from "lucide-react";
import TiltCard from "./TiltCard";

interface StepItem {
  number: string;
  category: string;
  title: string;
  description: string;
  highlights: string[];
  link: string;
}

const STEPS: StepItem[] = [
  {
    number: "AI",
    category: "Intelligent Automation",
    title: "Conversational Voice AI & Neural Agents",
    description: "Ultra-low latency voice pipelines powered by speech models and real-time streaming WebSockets. Replace interactive IVRs with autonomous voice workflows.",
    highlights: ["Ultra-responsive roundtrip audio", "Zero-jitter telematics streaming", "Omnichannel CRM sync"],
    link: "/products/ai-voice-agent",
  },
  {
    number: "ERP",
    category: "Unified Platforms",
    title: "Full-Scale Enterprise ERP & Operations",
    description: "Modular enterprise management suites for high-growth firms. Real-time billing, multi-warehouse inventory, fleet logistics, and institutional modules.",
    highlights: ["Unified multi-tenant architecture", "Real-time ledger & invoicing", "Automated compliance logs"],
    link: "/products/business-management-platform",
  },
  {
    number: "IOT",
    category: "Hardware & Cloud IoT",
    title: "High-Frequency Telematics & Cloud Print",
    description: "Connect enterprise physical devices with high-speed MQTT brokers, GPS live telematics relays, and zero-latency headless network print spoolers.",
    highlights: ["High-concurrency MQTT devices", "Zero-driver cloud print relay", "Real-time GPS packet processing"],
    link: "/products/fleet-asset-tracking",
  },
];

export default function StepArchitecture() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1B20] border border-white/10 text-xs font-semibold text-[#FF8A65]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>End-to-End Execution</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Engineering Solutions That <br />
            <span className="gradient-text-vibrant">Elevate Your Enterprise</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
            From strategic system architecture to full-stack execution, we engineer bespoke digital platforms that help forward-thinking organizations scale effortlessly.
          </p>
        </div>

        {/* 3 Step Cards matching 01, 02, 03 layout from reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((step) => (
            <TiltCard
              key={step.number}
              maxTilt={8}
              scale={1.02}
              className="rounded-3xl bg-[#121316] border border-white/10 hover:border-[#FF5722]/60 p-7 sm:p-8 flex flex-col justify-between transition-all group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-black text-[#FF5722] font-display">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FF5722]/10 border border-[#FF5722]/20 text-[#FF8A65]">
                    {step.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF8A65] transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-white/5 space-y-2">
                  {step.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={step.link}
                  className="text-xs font-bold text-gray-300 group-hover:text-[#FF8A65] flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-xs text-gray-500 font-mono">RISEUPSOLUTIONS Core</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
