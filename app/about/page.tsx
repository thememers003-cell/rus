import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Globe2, 
  ShieldCheck, 
  Terminal,
  HeartHandshake,
  Workflow
} from "lucide-react";
import PillarsSection from "@/components/PillarsSection";
import WorkflowSection from "@/components/WorkflowSection";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | RISEUPSOLUTIONS",
  description:
    "Learn about RISEUPSOLUTIONS: our engineering philosophy, foundational pillars, and commitment to building intelligent enterprise software.",
};

const techStack = [
  { name: "TypeScript & Next.js", role: "High-Performance Reactive Web UI" },
  { name: "Node.js & Go Microservices", role: "Sub-Millisecond Concurrency" },
  { name: "Python & Whisper AI", role: "Streaming Speech ASR & Neural Audio" },
  { name: "PostgreSQL & TimescaleDB", role: "Relational & High-Speed Telemetry" },
  { name: "MQTT & WebSockets", role: "Bi-Directional IoT & Hardware Stream" },
  { name: "Docker & AWS Kubernetes", role: "Cloud Elasticity & Multi-Region VPC" },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 space-y-20">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 text-brand-accent text-xs font-semibold uppercase tracking-wider border border-brand-blue/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Vision & Heritage</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Engineering Software That <span className="gradient-text-vibrant">Drives Real Impact</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          At RISEUPSOLUTIONS, we bridge the divide between theoretical innovation and operational execution. We build platforms that solve the gritty, high-stakes problems businesses face every single day.
        </p>
      </section>

      {/* 2. OUR STORY & POSITIONING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-brand-navy-border/80 bg-[#0F192E]/90 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-2xl">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
              Our Core Identity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why We Founded RISEUPSOLUTIONS
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Modern enterprises are bogged down by disconnected point solutions: one tool for calls, another for inventory, a separate app for delivery tracking, and clunky local printer drivers that crash whenever staff need them most.
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              RISEUPSOLUTIONS was formed to eliminate this friction. By pairing low-latency AI, seamless hardware IoT relays, and modern web architectures, we give organizations unified operational command over their business.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-emerald-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> 100% Reliable Cloud SLA
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Zero Bloatware
              </span>
            </div>
          </div>

          <div className="bg-black/30 p-6 sm:p-8 rounded-2xl border border-white/5 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-brand-accent" />
              <span>Engineering Standard of Excellence</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="font-bold text-white block mb-0.5">Sub-Second Default</span>
                <span>If a voice query takes 2 seconds or a receipt takes 10 seconds to print, the UX is broken. We design for millisecond responsiveness.</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="font-bold text-white block mb-0.5">Resilient Offline Tolerance</span>
                <span>Network hiccups must never stop a retail checkout or halt a delivery vehicle driver. Our apps buffer and auto-reconcile seamlessly.</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="font-bold text-white block mb-0.5">Clean Data Ownership</span>
                <span>You own 100% of your telemetry, CRM records, and business workflows. No proprietary format lock-in.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE PILLARS */}
      <div id="pillars">
        <PillarsSection />
      </div>

      {/* 4. TECHNOLOGY STACK MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-accent">
            <Cpu className="w-3.5 h-3.5" />
            <span>Under The Hood</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Built on Battle-Tested Modern Technologies
          </h2>
          <p className="text-sm text-gray-400">
            We avoid fragile experimental dependencies in favor of rock-solid industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel border border-brand-navy-border/70 flex items-start justify-between"
            >
              <div>
                <h4 className="text-sm font-bold text-white">{tech.name}</h4>
                <p className="text-xs text-gray-400 mt-1">{tech.role}</p>
              </div>
              <span className="text-[10px] font-mono text-brand-accent px-2 py-0.5 rounded bg-brand-blue/10 border border-brand-blue/20">
                Core
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 4-STAGE METHODOLOGY */}
      <div id="workflow">
        <WorkflowSection />
      </div>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-8 sm:p-12 glass-panel rounded-2xl border border-brand-accent/30 space-y-4 bg-gradient-to-r from-brand-navy-light to-brand-navy">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Partner With RISEUPSOLUTIONS
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Whether you want to automate repetitive customer calls, deploy IoT fleet telematics, or build a bespoke enterprise portal, our team is ready.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold shadow-lg shadow-brand-blue/30 transition-all"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
