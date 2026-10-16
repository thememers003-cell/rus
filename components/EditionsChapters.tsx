"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Layers, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  Terminal, 
  Navigation, 
  Printer, 
  Radio, 
  Play, 
  Pause,
  Bot
} from "lucide-react";
import TiltCard from "./TiltCard";

export default function EditionsChapters() {
  const [voiceSimActive, setVoiceSimActive] = useState(true);
  const [activeCodeTab, setActiveCodeTab] = useState<"curl" | "node" | "python">("node");

  return (
    <div className="space-y-32 sm:space-y-44 relative z-10">
      {/* =========================================================================
          CHAPTER 1: AGENTIC & VOICE AI
         ========================================================================= */}
      <section id="chapter-agentic" className="scroll-mt-24">
        {/* Full-width Giant Chapter Title in Cosmic Particles */}
        <div className="text-center max-w-4xl mx-auto py-16 sm:py-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Intelligence Layer</span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none font-display">
            Agentic
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The autonomous platform you need to orchestrate voice, operational workflows, and intelligent actions across every business channel.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0F1014] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Voice Intelligence Pipeline
                  </span>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                    ₹6 - ₹15 / minute
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Human-grade conversational agents that execute in real time
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  RISEUPSOLUTIONS conversational neural agents replace rigid telephone trees. They comprehend context, schedule service bookings, check order telemetry, and write back directly to your core business database.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-xs transition-all flex items-center gap-2 shadow-lg"
                  >
                    <span>Deploy Agent</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/products/ai-voice-agent"
                    className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-all"
                  >
                    <span>View Specifications</span>
                  </Link>
                </div>
              </div>

              {/* Interactive Audio Cockpit */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-black/60 border border-white/10 p-5 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-gray-400">
                    <span className="flex items-center gap-2 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Neural Session
                    </span>
                    <button
                      onClick={() => setVoiceSimActive(!voiceSimActive)}
                      className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-[11px] flex items-center gap-1.5 transition-colors"
                    >
                      {voiceSimActive ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      <span>{voiceSimActive ? "Pause Audio" : "Resume"}</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Caller Audio</span>
                      <p className="text-white mt-1">"Can we reschedule dispatch for tomorrow morning?"</p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                      <span className="text-emerald-400 block text-[10px] uppercase font-bold">RISEUPSOLUTIONS Agent</span>
                      <p className="text-emerald-100 mt-1">"Order confirmed. I have shifted your delivery window to morning dispatch and synced your warehouse status."</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                      <span>Status: Low Latency Verified</span>
                      <span className="text-emerald-400 font-bold">Zero Audio Jitter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* High-Density Micro-Features Matrix (No Numbers, No Pricing) */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF5722]">✦</span> Neural Turn-Taking
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Natural human pauses, natural interjections, and immediate responses without robotic lag.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF5722]">✦</span> Autonomous Phone Ingestion
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Direct SIP trunk telephony connection to handle incoming and outgoing calls concurrently.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF5722]">✦</span> Direct Database Write-Back
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Call records, extracted tags, and updated customer tickets sync straight to your operations suite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 2: ENTERPRISE ERP & OPERATIONS
         ========================================================================= */}
      <section id="chapter-erp" className="scroll-mt-24">
        {/* Full-width Giant Chapter Title in Cosmic Particles */}
        <div className="text-center max-w-4xl mx-auto py-16 sm:py-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/30 text-xs font-semibold text-[#FF8A65]">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Business Engine</span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none font-display">
            Enterprise ERP
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Unified multi-tenant orchestration engineered for ambitious organizations that need total visibility without operational silos.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0F1014] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5722]/10 blur-[120px] pointer-events-none rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65]">
                    Multi-Branch Command & Control
                  </span>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 text-[#FF8A65]">
                    ₹50 - ₹150 / student (Campus)
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  One architecture to connect finances, teams, and supply chains
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Whether managing institutions, retail franchises, or manufacturing hubs, RISEUPSOLUTIONS eliminates disjointed legacy software with unified ledger sync, role hierarchies, and automated ledger balancing.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-xs transition-all flex items-center gap-2 shadow-lg"
                  >
                    <span>Schedule Architecture Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/products/business-management-platform"
                    className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-all"
                  >
                    <span>Explore Modules</span>
                  </Link>
                </div>
              </div>

              {/* ERP Module Visualization */}
              <div className="lg:col-span-6 space-y-3">
                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="font-bold text-white uppercase tracking-wider">Active Module Stream</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Synced
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-gray-400 text-[10px] block uppercase font-mono">Ledger Engine</span>
                      <span className="text-white font-bold block">Instant Reconciliation</span>
                      <span className="text-emerald-400 text-[11px]">Audit Proof</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-gray-400 text-[10px] block uppercase font-mono">Multi-Warehouse</span>
                      <span className="text-white font-bold block">Live Inventory Lock</span>
                      <span className="text-[#FF8A65] text-[11px]">Zero Overbooking</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-gray-400 text-[10px] block uppercase font-mono">Access Rights</span>
                      <span className="text-white font-bold block">Role Matrix System</span>
                      <span className="text-cyan-400 text-[11px]">Strict Security</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-gray-400 text-[10px] block uppercase font-mono">Compliance</span>
                      <span className="text-white font-bold block">Tax & Invoicing</span>
                      <span className="text-purple-400 text-[11px]">Automated Filing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* High-Density Micro-Features Matrix */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF5722]">✦</span> Multi-Tenant Hierarchy
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Support distinct regional branches or corporate entities under a single unified dashboard.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF5722]">✦</span> Zero-Downtime Rollout
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Smooth database migration from spreadsheet workflows without disrupting daily sales or staff.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF5722]">✦</span> End-to-End Audit Logs
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Every user transaction, inventory modification, and ledger export is timestamped and verifiable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 3: IOT FLEET & TELEMATICS
         ========================================================================= */}
      <section id="chapter-telematics" className="scroll-mt-24">
        {/* Full-width Giant Chapter Title in Cosmic Particles */}
        <div className="text-center max-w-4xl mx-auto py-16 sm:py-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Radio className="w-3.5 h-3.5" />
            <span>High-Frequency Hardware Layer</span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none font-display">
            IoT & Fleet
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Connect connected vehicles and hardware endpoints with ultra-fast MQTT brokers and real-time live telematics.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0F1014] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Real-Time Telemetry Pipeline
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Sensor streaming and route geofencing without data loss
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Our telematics broker ingests high-frequency GPS coordinates, fuel sensor reads, and CAN-bus telemetry even in intermittent cellular coverage with offline caching and instant reconnects.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-xs transition-all flex items-center gap-2 shadow-lg"
                  >
                    <span>Request Telematics Trial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/products/fleet-asset-tracking"
                    className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-all"
                  >
                    <span>View Technical Specs</span>
                  </Link>
                </div>
              </div>

              {/* Live Telematics Mockup */}
              <div className="lg:col-span-6 space-y-3">
                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-cyan-400 font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      MQTT Telemetry Stream
                    </span>
                    <span className="text-white">Live Socket Active</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-white font-bold block">Vehicle Node Alpha</span>
                        <span className="text-gray-400 text-[11px]">Express Highway Route</span>
                      </div>
                      <span className="text-emerald-400 font-bold">In Motion • Normal</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-white font-bold block">Geofence Boundary Check</span>
                        <span className="text-gray-400 text-[11px]">Primary Terminal Zone</span>
                      </div>
                      <span className="text-cyan-400 font-bold">Authorized Entry</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro-Features Grid */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF5722]">✦</span> High-Concurrency Brokers
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Engineered on distributed MQTT infrastructure to handle concurrent hardware connections seamlessly.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF5722]">✦</span> Offline Storage Buffering
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Devices securely queue telemetry packets during network drops and sync on reconnection.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF5722]">✦</span> Instant Alert Webhooks
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Trigger automated dispatch warnings for geofence breaches or irregular vehicle idling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 4: CLOUD PRINT ARCHITECTURE
         ========================================================================= */}
      <section id="chapter-print" className="scroll-mt-24">
        {/* Full-width Giant Chapter Title in Cosmic Particles */}
        <div className="text-center max-w-4xl mx-auto py-16 sm:py-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-xs font-semibold text-purple-400">
            <Printer className="w-3.5 h-3.5" />
            <span>Driverless Hardware Bridge</span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none font-display">
            Cloud Print
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Zero-latency remote print orchestration that triggers thermal receipts and warehouse packing slips straight from the web.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0F1014] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] pointer-events-none rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                    Headless Print Spooler
                  </span>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300">
                    ₹100 - ₹10,000 / setup
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  No print dialogs. No stuck queues. Direct byte streaming.
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Traditional web apps require browser print confirmation dialogues. RISEUPSOLUTIONS connects your cloud application directly to remote physical ESC/POS and laser printers across multiple locations in real time.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-xs transition-all flex items-center gap-2 shadow-lg"
                  >
                    <span>Request Print Setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/products/cloud-printing-solutions"
                    className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-all"
                  >
                    <span>View Protocols</span>
                  </Link>
                </div>
              </div>

              {/* Print Terminal */}
              <div className="lg:col-span-6 space-y-3 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-gray-400 border-b border-white/10 pb-2">
                    <span className="text-purple-400 font-bold">Print Spooler Gateway</span>
                    <span className="text-emerald-400">Daemon Active</span>
                  </div>
                  <div className="text-gray-300 space-y-1">
                    <p className="text-[#FF8A65]">▶ Received webhook: Order Ingestion</p>
                    <p className="text-white">▶ Generated ESC/POS raw raster stream</p>
                    <p className="text-emerald-400">✔ Dispatched to Kitchen Terminal: Delivered</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro-Features Grid */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF5722]">✦</span> Zero-Driver Outbound Sockets
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Local daemons initiate secure outbound websockets. No port forwarding or network vulnerabilities needed.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF5722]">✦</span> Dynamic Failover Routing
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  If a printer runs out of paper, orders automatically redirect to a designated backup terminal.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF5722]">✦</span> ESC/POS & Label Support
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Native generation for thermal receipts, shipping stickers, barcodes, and complex PDF vouchers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 5: OPERATIONS & REAL-TIME INTELLIGENCE
         ========================================================================= */}
      <section id="chapter-operations" className="scroll-mt-24">
        {/* Full-width Giant Chapter Title in Cosmic Particles */}
        <div className="text-center max-w-4xl mx-auto py-16 sm:py-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/50 border border-amber-500/30 text-xs font-semibold text-amber-400">
            <Activity className="w-3.5 h-3.5" />
            <span>Telemetry & Analytics</span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none font-display">
            Operations
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Real-time business telemetry and contextual operational awareness so your team acts on facts, not guesswork.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0F1014] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Actionable Enterprise Context
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight max-w-3xl">
                Real-time metrics, bottleneck alerts, and intelligent event feeds
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
                RISEUPSOLUTIONS aggregates telemetry across all deployed software modules into intuitive operational cockpits, detecting anomalies before they cause business friction.
              </p>

              {/* Micro-Features Grid */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-[#FF5722]">✦</span> Predictive Bottleneck Alerts
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Identify order delivery congestion and warehouse queues before customer complaints occur.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-[#FF5722]">✦</span> Autonomous Event Triggers
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Configure webhooks that auto-trigger stock restock requests or urgent team notifications.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-[#FF5722]">✦</span> Complete Audit Transparency
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Comprehensive chronological ledger of every system dispatch, user access, and API payload.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 6: DEVELOPER PLATFORM & SDKs
         ========================================================================= */}
      <section id="chapter-developer" className="scroll-mt-24">
        {/* Full-width Giant Chapter Title in Cosmic Particles */}
        <div className="text-center max-w-4xl mx-auto py-16 sm:py-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-xs font-semibold text-blue-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Ecosystem</span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none font-display">
            Developer
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Clean APIs, streaming WebSockets, and production-tested SDKs built for engineering teams who demand precision.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0F1014] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Developer-First Architecture
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Integrate in minutes with typed SDKs
                  </h3>
                </div>

                {/* Language Switcher */}
                <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/60 border border-white/10 self-start sm:self-auto text-xs">
                  <button
                    onClick={() => setActiveCodeTab("node")}
                    className={`px-3 py-1 rounded-full font-mono transition-all ${
                      activeCodeTab === "node" ? "bg-[#FF5722] text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    TypeScript
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("python")}
                    className={`px-3 py-1 rounded-full font-mono transition-all ${
                      activeCodeTab === "python" ? "bg-[#FF5722] text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Python
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("curl")}
                    className={`px-3 py-1 rounded-full font-mono transition-all ${
                      activeCodeTab === "curl" ? "bg-[#FF5722] text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    cURL
                  </button>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="rounded-2xl bg-black/80 border border-white/10 p-5 font-mono text-xs text-gray-300 overflow-x-auto">
                {activeCodeTab === "node" && (
                  <pre className="text-[#FF8A65]">
{`import { RiseUpClient } from "@riseupsolutions/sdk";

const client = new RiseUpClient({ apiKey: process.env.RISEUP_API_KEY });

// Launch autonomous voice agent dispatch
const session = await client.voice.createSession({
  agentId: "agent-voice-core",
  customerPhone: "+91-enterprise",
  webhookUrl: "https://your-domain.com/api/riseup-callback",
});

console.log("Session dispatched:", session.id);`}
                  </pre>
                )}
                {activeCodeTab === "python" && (
                  <pre className="text-cyan-300">
{`from riseup import RiseUpClient

client = RiseUpClient(api_key=os.environ.get("RISEUP_API_KEY"))

# Trigger automated cloud print task
job = client.print.spool(
    printer_id="terminal-warehouse-01",
    payload_type="esc_pos_raster",
    data=invoice_bytes
)

print(f"Print job queued: {job.status}")`}
                  </pre>
                )}
                {activeCodeTab === "curl" && (
                  <pre className="text-emerald-300">
{`curl -X POST https://api.riseupsolutions.in/v1/telematics/query \\
  -H "Authorization: Bearer $RISEUP_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"fleetId": "fleet-alpha", "stream": true}'`}
                  </pre>
                )}
              </div>

              {/* Micro-Features Grid */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-[#FF5722]">✦</span> Granular Scoped API Keys
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Issue read-only or scoped permissions per department, warehouse, or microservice.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-[#FF5722]">✦</span> Streaming WebSocket Endpoints
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Ultra-low latency duplex audio and telemetry feeds with auto-reconnect backoff logic.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-[#FF5722]">✦</span> Webhook Cryptographic Signing
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Every webhook payload is signed with HMAC SHA-256 for ironclad authenticity verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
