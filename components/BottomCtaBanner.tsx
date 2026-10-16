"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle, Mail, Phone } from "lucide-react";
import TiltCard from "./TiltCard";
import { COMPANY_DATA } from "@/data/company";

export default function BottomCtaBanner() {
  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <TiltCard
        maxTilt={5}
        scale={1.01}
        className="rounded-3xl bg-[#121316] border border-white/10 hover:border-[#FF5722]/50 p-8 sm:p-14 relative overflow-hidden shadow-2xl transition-all"
      >
        {/* Ambient orange glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5722]/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-[#FF8A65]/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1D24] border border-white/10 text-xs font-semibold text-[#FF8A65]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>Immediate Implementation Capacity</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Let's Bring Your <br />
              <span className="gradient-text-vibrant">Vision to Life</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed">
              Whether you need to deploy an intelligent voice AI pipeline, modernize an enterprise ERP, or connect thousands of IoT telematics nodes, our engineering team is ready to deliver.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${COMPANY_DATA.advisor.phone}`}
                className="px-8 py-4 rounded-full bg-[#FF5722] hover:bg-[#FF6D3B] text-white font-extrabold text-sm shadow-[0_6px_25px_rgba(255,87,34,0.4)] hover:shadow-[0_8px_35px_rgba(255,87,34,0.6)] transition-all flex items-center gap-2 group transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>Talk to Advisor: {COMPANY_DATA.advisor.displayPhone}</span>
              </a>

              <a
                href={COMPANY_DATA.advisor.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>WhatsApp Advisor</span>
              </a>

              <a
                href={`mailto:${COMPANY_DATA.advisor.email}`}
                className="px-6 py-4 rounded-full bg-[#18191E] hover:bg-[#202127] border border-white/10 text-gray-300 hover:text-white text-sm font-semibold transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#FF8A65]" />
                <span>{COMPANY_DATA.advisor.email}</span>
              </a>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Free Architecture Blueprint
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Direct Engineer & Advisor Call
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#FF5722]" /> Transparent Per-Unit Pricing
              </span>
            </div>
          </div>

          {/* Right Stage: Advisor & RISEUPSOLUTIONS Brand Showcase */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-56 sm:w-64 md:w-72 rounded-2xl overflow-hidden border border-[#FF5722]/30 bg-gradient-to-b from-[#181920] to-[#0D0E12] shadow-2xl flex flex-col items-center justify-center p-4 sm:p-5 group">
              <div className="absolute inset-0 bg-radial-gradient from-[#FF5722]/15 via-transparent to-transparent pointer-events-none" />
              
              <div className="bg-white rounded-xl p-4 w-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/logo.png"
                  alt="RISEUPSOLUTIONS"
                  className="w-full h-auto object-contain max-h-12 sm:max-h-14"
                />
              </div>
              
              <div className="mt-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-center w-full space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#FF8A65] tracking-wider font-bold block">
                  Lead Technical Advisor
                </span>
                <span className="text-sm font-bold text-white block">
                  {COMPANY_DATA.advisor.name}
                </span>
                <a
                  href={`tel:${COMPANY_DATA.advisor.phone}`}
                  className="text-xs font-mono text-gray-300 hover:text-white block pt-0.5"
                >
                  {COMPANY_DATA.advisor.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </section>
  );
}
