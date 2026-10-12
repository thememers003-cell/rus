"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Zap, Shield, Globe } from "lucide-react";
import InteractiveSimulator from "./InteractiveSimulator";
import TiltCard from "./TiltCard";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Background orange glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-[#FF5722]/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#FF8A65]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Status Pill Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141519] border border-white/10 text-xs text-gray-300 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#FF5722] shadow-[0_0_8px_#FF5722]" />
            <span className="font-bold tracking-wider uppercase text-[11px] text-[#FF8A65]">
              RISEUP SOLUTIONS
            </span>
            <span className="text-white/20">•</span>
            <span className="text-gray-400 hidden sm:inline">
              Enterprise AI & Cloud Architect
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-400 font-medium self-start sm:self-auto">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Available for Enterprise Engagements
            </span>
          </div>
        </div>

        {/* HERO MAIN STAGE: Split Layout matching the video/screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Column: Sub-heading & Designer/Architect Info */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF7A50] flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>Full-Stack & Voice AI Lab</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              Enterprise Digital <br />
              Architect based <br />
              in India & Global
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              We translate intricate operational roadblocks into high-velocity autonomous software engines.
            </p>
          </div>

          {/* Center Column: RISEUPSOLUTIONS Logo Stage */}
          <div className="lg:col-span-6 flex justify-center">
            <TiltCard
              maxTilt={12}
              scale={1.03}
              className="relative w-72 sm:w-88 h-72 sm:h-96 rounded-3xl overflow-hidden border border-[#FF5722]/30 shadow-[0_20px_60px_rgba(255,87,34,0.3)] bg-gradient-to-b from-[#15161c] to-[#0a0b0e] flex flex-col items-center justify-center p-6 group"
            >
              {/* Background ambient lighting */}
              <div className="absolute inset-0 bg-radial-gradient from-[#FF5722]/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FF5722]/15 blur-[60px] rounded-full pointer-events-none" />
              
              {/* Elevated Logo Card */}
              <div className="relative z-10 w-full max-w-[270px] bg-white rounded-2xl p-6 sm:p-7 flex items-center justify-center shadow-2xl border border-white/40 group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/logo.png"
                  alt="RISEUPSOLUTIONS"
                  className="w-full h-auto object-contain max-h-24"
                />
              </div>
              
              {/* Floating micro-badge */}
              <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-[#111216]/95 backdrop-blur-md border border-white/10 flex items-center justify-between z-10 shadow-lg">
                <div>
                  <span className="text-[10px] font-bold text-[#FF8A65] uppercase block">Platform Engine</span>
                  <span className="text-xs font-extrabold text-white">Voice AI + Enterprise ERP</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#FF5722] text-white flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Key Value Pillars (No Numbers) */}
          <div className="lg:col-span-3 space-y-6 text-left lg:text-right">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Engineering That <br className="hidden lg:block" /> Delivers Real Results
              </h3>
              <p className="text-xs text-gray-400">
                Measurable business acceleration powered by battle-tested code.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-t border-white/10 pt-3">
                <div className="text-base sm:text-lg font-extrabold text-white font-display flex items-center lg:justify-end gap-1.5">
                  <span className="text-[#FF5722]">✦</span> Enterprise Deployments
                </div>
                <span className="text-xs text-gray-400 font-medium">Mission-critical cloud & on-premise platforms</span>
              </div>

              <div className="border-t border-white/10 pt-3">
                <div className="text-base sm:text-lg font-extrabold text-white font-display flex items-center lg:justify-end gap-1.5">
                  <span className="text-[#FF5722]">✦</span> Corporate Partnerships
                </div>
                <span className="text-xs text-gray-400 font-medium">Trusted by leading enterprises globally</span>
              </div>

              <div className="border-t border-white/10 pt-3">
                <div className="text-base sm:text-lg font-extrabold text-white font-display flex items-center lg:justify-end gap-1.5">
                  <span className="text-[#FF5722]">✦</span> IoT Telemetry Streaming
                </div>
                <span className="text-xs text-gray-400 font-medium">Real-time hardware & sensor data orchestration</span>
              </div>
            </div>
          </div>
        </div>

        {/* MASSIVE HERO BRAND TYPOGRAPHY: "RISEUPSOLUTIONS" */}
        <div className="text-center relative my-4 sm:my-6 select-none pointer-events-none">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[112px] font-black tracking-tight text-white/95 leading-none font-display">
            RISEUP<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A65] via-[#FF5722] to-[#FF3D00]">SOLUTIONS</span>
          </h1>
          <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#FF8A65] mt-3">
            DIGITAL ENGINEERING LAB • AUTONOMOUS PLATFORMS
          </div>
        </div>

        {/* HERO STATEMENT & CTA CARD */}
        <div className="mt-8 max-w-3xl mx-auto rounded-3xl bg-[#121316]/80 backdrop-blur-xl border border-white/10 p-6 sm:p-8 text-center space-y-5 shadow-2xl">
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Crafting Meaningful Platforms & Intuitive Digital Experiences That Stand Out
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            RISEUPSOLUTIONS builds modern voice intelligence, ERP orchestration, fleet telematics, and cloud printing. We partner with ambitious enterprises to engineer high-velocity digital products.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#FF5722] hover:bg-[#FF6D3B] text-white font-bold text-sm shadow-[0_6px_25px_rgba(255,87,34,0.4)] hover:shadow-[0_8px_35px_rgba(255,87,34,0.6)] transition-all flex items-center gap-2 group transform hover:-translate-y-0.5"
            >
              <span>Let's Talk Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/products"
              className="px-6 py-3.5 rounded-full bg-[#18191E] hover:bg-[#202127] border border-white/10 text-gray-300 hover:text-white font-semibold text-sm transition-all"
            >
              <span>Explore Products</span>
            </Link>
          </div>
        </div>

        {/* Live Interactive Cockpit Simulator */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65] block">
              Real-Time Cockpit Testing
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Test Live Modules In Real Time
            </h3>
          </div>
          <InteractiveSimulator />
        </div>
      </div>
    </section>
  );
}
