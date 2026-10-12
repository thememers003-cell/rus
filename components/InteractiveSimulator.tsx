"use client";

import React, { useState, useEffect } from "react";
import { 
  Mic, 
  Navigation, 
  Printer, 
  Boxes, 
  Play, 
  Pause, 
  CheckCircle, 
  Activity, 
  Wifi, 
  Zap, 
  FileText,
  Volume2,
  RefreshCw,
  Clock,
  Sparkles
} from "lucide-react";

export default function InteractiveSimulator() {
  const [activeTab, setActiveTab] = useState<"voice" | "fleet" | "print" | "erp">("voice");

  // Voice AI Simulation State
  const [isCalling, setIsCalling] = useState(true);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

  const voiceDialogues = [
    {
      speaker: "Customer",
      text: "Hi, I have an urgent delivery scheduled for tomorrow at 2 PM. Can we move it to Friday morning?",
      time: "00:02",
      badge: "Inbound Audio Stream",
    },
    {
      speaker: "RiseVoice AI",
      text: "Certainly, Alex! I found Order #RU-8821 for 42 Elm Street. Friday morning between 9:00 AM and 11:30 AM has an open slot. Shall I confirm that change for you?",
      time: "00:04",
      badge: "Latency: 142ms • Neural TTS",
    },
    {
      speaker: "Customer",
      text: "Yes please, 9:30 AM on Friday works perfectly.",
      time: "00:07",
      badge: "Inbound Audio Stream",
    },
    {
      speaker: "RiseVoice AI",
      text: "Done! Your dispatch window is now rescheduled for Friday, 9:30 AM. I have sent an updated SMS confirmation to your mobile. Anything else I can assist with today?",
      time: "00:09",
      badge: "CRM Webhook Dispatched • SMS Sent",
    },
  ];

  useEffect(() => {
    if (activeTab !== "voice" || !isCalling) return;
    const interval = setInterval(() => {
      setCurrentDialogueIndex((prev) => (prev < voiceDialogues.length - 1 ? prev + 1 : 0));
    }, 3800);
    return () => clearInterval(interval);
  }, [activeTab, isCalling]);

  // Fleet Simulation State
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const vehicles = [
    {
      id: "VAN-04",
      driver: "Jordan Miller",
      speed: 58,
      fuel: "82%",
      temp: "3.8°C (Cold Chain OK)",
      location: "Interstate 95, Mile 104",
      status: "On Route",
      eta: "14 mins",
      score: "98/100",
    },
    {
      id: "TRUCK-12",
      driver: "Elena Rostova",
      speed: 42,
      fuel: "64%",
      temp: "-18.2°C (Frozen OK)",
      location: "East Metro Distribution Hub",
      status: "Approaching Dock 4",
      eta: "2 mins",
      score: "95/100",
    },
    {
      id: "DISPATCH-08",
      driver: "Tariq Owens",
      speed: 0,
      fuel: "91%",
      temp: "Ambient",
      location: "Central Warehouse Dock B",
      status: "Idle - Loading Cargo",
      eta: "Departing in 8m",
      score: "99/100",
    },
  ];

  // Print Simulation State
  const [printStatus, setPrintStatus] = useState<"idle" | "printing" | "success">("idle");
  const [printType, setPrintType] = useState<"kot" | "shipping" | "receipt">("kot");

  const triggerPrint = (type: "kot" | "shipping" | "receipt") => {
    setPrintType(type);
    setPrintStatus("printing");
    setTimeout(() => {
      setPrintStatus("success");
      setTimeout(() => setPrintStatus("idle"), 4000);
    }, 800);
  };

  return (
    <div className="w-full rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-[#121316]">
      {/* Simulator Header & Navigation */}
      <div className="px-5 py-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0A0B0E]">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold tracking-wide text-white uppercase flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#FF5722]" />
            Live Platform Simulator Cockpit
          </span>
          <span className="text-[10px] text-gray-400 border border-white/10 px-2 py-0.5 rounded-full hidden sm:inline-block">
            v2.4 Telemetry Sandbox
          </span>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1 bg-[#090A0C] p-1 rounded-full border border-white/10">
          <button
            onClick={() => setActiveTab("voice")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "voice"
                ? "bg-[#FF5722] text-white shadow-sm shadow-[#FF5722]/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Voice AI</span>
          </button>

          <button
            onClick={() => setActiveTab("fleet")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "fleet"
                ? "bg-[#FF5722] text-white shadow-sm shadow-[#FF5722]/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Fleet GPS</span>
          </button>

          <button
            onClick={() => setActiveTab("print")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "print"
                ? "bg-[#FF5722] text-white shadow-sm shadow-[#FF5722]/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cloud Print</span>
          </button>

          <button
            onClick={() => setActiveTab("erp")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "erp"
                ? "bg-[#FF5722] text-white shadow-sm shadow-[#FF5722]/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>ERP Sync</span>
          </button>
        </div>
      </div>

      {/* Simulator Content Area */}
      <div className="p-5 sm:p-7 min-h-[360px]">
        {/* 1. VOICE AI SIMULATION */}
        {activeTab === "voice" && (
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-brand-accent">
                  <Volume2 className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    RiseVoice AI • Conversational Audio Pipeline
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                      Live Call in Progress
                    </span>
                  </h4>
                  <p className="text-xs text-gray-400">
                    Active Session: SIP Trunk #481-992 • Whisper-V3 Streaming ASR
                  </p>
                </div>
              </div>

              {/* Audio Waveform Graphic */}
              <div className="flex items-center gap-1 h-6 px-3 bg-brand-navy rounded-lg border border-brand-navy-border">
                {[12, 24, 16, 28, 8, 20, 26, 14, 22, 10, 25, 18].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-brand-accent rounded-full transition-all duration-300"
                    style={{
                      height: isCalling ? `${h}px` : "4px",
                      opacity: isCalling ? 0.9 : 0.3,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Conversation Feed */}
            <div className="space-y-3 bg-black/30 p-4 rounded-xl border border-white/5 max-h-[220px] overflow-y-auto">
              {voiceDialogues.slice(0, currentDialogueIndex + 1).map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    item.speaker === "Customer" ? "items-start" : "items-end"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1 text-[11px] text-gray-400">
                    <span className="font-semibold text-gray-300">{item.speaker}</span>
                    <span>• {item.time}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/5 text-brand-accent">
                      {item.badge}
                    </span>
                  </div>
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      item.speaker === "Customer"
                        ? "bg-brand-navy-light text-gray-200 rounded-tl-sm border border-brand-navy-border"
                        : "bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-tr-sm shadow-md shadow-brand-blue/20"
                    }`}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Controls & Metrics */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-gray-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                  <Activity className="w-3.5 h-3.5" /> Latency: 142ms
                </span>
                <span className="flex items-center gap-1.5 text-brand-accent font-mono">
                  <Wifi className="w-3.5 h-3.5" /> Jitter: 0.8ms
                </span>
                <span className="text-gray-300 hidden md:inline">
                  Accuracy: 99.4%
                </span>
              </div>

              <button
                onClick={() => {
                  setCurrentDialogueIndex(0);
                  setIsCalling(true);
                }}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-1.5 text-xs"
              >
                <RefreshCw className="w-3 h-3 text-brand-accent" />
                <span>Replay Call Sequence</span>
              </button>
            </div>
          </div>
        )}

        {/* 2. FLEET GPS TELEMETRY SIMULATION */}
        {activeTab === "fleet" && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {vehicles.map((v, i) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVehicle(i)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedVehicle === i
                      ? "bg-brand-navy-light border-brand-accent shadow-md shadow-brand-blue/20"
                      : "bg-brand-navy/60 border-brand-navy-border hover:bg-brand-navy-light/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-sm text-white">{v.id}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        v.speed > 0
                          ? "bg-emerald-950 text-emerald-300 border border-emerald-500/30"
                          : "bg-amber-950 text-amber-300 border border-amber-500/30"
                      }`}
                    >
                      {v.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">{v.driver}</div>
                  <div className="text-xs font-mono text-brand-accent mt-2 flex justify-between">
                    <span>{v.speed} MPH</span>
                    <span>Fuel: {v.fuel}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Vehicle Telematics Panel */}
            <div className="bg-black/30 p-5 rounded-xl border border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Current Corridor</div>
                <div className="text-sm font-semibold text-white">
                  {vehicles[selectedVehicle].location}
                </div>
              </div>

              <div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Cold Chain Sensor</div>
                <div className="text-sm font-semibold text-emerald-400">
                  {vehicles[selectedVehicle].temp}
                </div>
              </div>

              <div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Driver Safety Score</div>
                <div className="text-sm font-semibold text-blue-400">
                  {vehicles[selectedVehicle].score}
                </div>
              </div>

              <div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">ETA To Waypoint</div>
                <div className="text-sm font-semibold text-amber-300">
                  {vehicles[selectedVehicle].eta}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" /> MQTT Telematics Pipeline Synced (10ms refresh)
              </span>
              <span className="text-gray-300">Geofence Compliance: 100% Valid</span>
            </div>
          </div>
        )}

        {/* 3. CLOUD PRINT SIMULATION */}
        {activeTab === "print" && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-3 border-b border-white/5">
              <div>
                <h4 className="text-sm font-semibold text-white">
                  RiseCloud Print • Remote Hardware Relay Simulator
                </h4>
                <p className="text-xs text-gray-400">
                  Thermal ESC/POS & Zebra ZPL Cloud Gateway • Zero Port Forwarding
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => triggerPrint("kot")}
                  disabled={printStatus === "printing"}
                  className="px-3 py-1.5 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-medium transition-all shadow-sm"
                >
                  Print Kitchen KOT
                </button>
                <button
                  onClick={() => triggerPrint("shipping")}
                  disabled={printStatus === "printing"}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium transition-all shadow-sm"
                >
                  Print Shipping Label
                </button>
                <button
                  onClick={() => triggerPrint("receipt")}
                  disabled={printStatus === "printing"}
                  className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-medium transition-all shadow-sm"
                >
                  Print POS Receipt
                </button>
              </div>
            </div>

            {/* Print Output Visualization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded-xl border border-white/5 space-y-3">
                <div className="text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center justify-between">
                  <span>Hardware Relay Status</span>
                  <span className="text-emerald-400 font-mono">EPSON TM-T88VI (USB001)</span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-gray-400">
                    <span>Relay Socket:</span>
                    <span className="text-white">wss://print.riseupsolutions.io/v1</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Paper Sensor:</span>
                    <span className="text-emerald-400">NORMAL (Full Roll)</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Buffer Queue:</span>
                    <span className="text-white">0 pending jobs</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Last Dispatch Time:</span>
                    <span className="text-brand-accent">210ms ACK</span>
                  </div>
                </div>

                {printStatus === "printing" && (
                  <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs flex items-center gap-2">
                    <Activity className="w-4 h-4 animate-spin text-brand-accent" />
                    <span>Streaming raw byte array to printer spooler...</span>
                  </div>
                )}

                {printStatus === "success" && (
                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Printed successfully! Auto-cutter engaged.</span>
                  </div>
                )}
              </div>

              {/* Simulated Receipt Preview */}
              <div className="bg-slate-100 text-slate-900 p-4 rounded-lg font-mono text-xs shadow-inner max-h-[200px] overflow-y-auto">
                <div className="text-center font-bold pb-2 border-b border-dashed border-slate-400">
                  {printType === "kot" && "=== KITCHEN ORDER TICKET #042 ==="}
                  {printType === "shipping" && "=== 4x6 ZEBRA SHIPPING MANIFEST ==="}
                  {printType === "receipt" && "=== RISEUP STORE CHECKOUT #8819 ==="}
                </div>
                <div className="py-2 text-[11px] space-y-1">
                  {printType === "kot" && (
                    <>
                      <div className="flex justify-between">
                        <span>Table 14 • 3 Guests</span>
                        <span>19:42 EST</span>
                      </div>
                      <div className="font-semibold pt-1">1x Grilled Salmon (No Butter)</div>
                      <div className="font-semibold">2x Truffle Risotto</div>
                      <div className="font-semibold">1x Sparkling Mineral Water</div>
                    </>
                  )}
                  {printType === "shipping" && (
                    <>
                      <div className="font-bold">TRACKING: 1Z 999 999 99 9999 9999</div>
                      <div>SHIP TO: Apex Supply Hub, Dock 4</div>
                      <div>CARRIER: Priority Next Day Air</div>
                      <div className="pt-1 font-bold">WEIGHT: 14.8 LBS • SKU COUNT: 4</div>
                    </>
                  )}
                  {printType === "receipt" && (
                    <>
                      <div className="flex justify-between">
                        <span>Items: 3 Subtotal</span>
                        <span>$148.50</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sales Tax (8.25%)</span>
                        <span>$12.25</span>
                      </div>
                      <div className="flex justify-between font-bold pt-1 border-t border-slate-300">
                        <span>TOTAL PAID</span>
                        <span>$160.75</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="text-center text-[10px] text-slate-500 pt-2 border-t border-dashed border-slate-400">
                  [DISPATCHED VIA RISECLOUD PRINT]
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. ERP SYNC SIMULATION */}
        {activeTab === "erp" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-brand-navy p-3 rounded-xl border border-brand-navy-border">
                <div className="text-[11px] text-gray-400 uppercase">Today's Gross Sales</div>
                <div className="text-lg font-bold text-white mt-1">$48,290.40</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">+14.2% vs yesterday</div>
              </div>

              <div className="bg-brand-navy p-3 rounded-xl border border-brand-navy-border">
                <div className="text-[11px] text-gray-400 uppercase">Synchronized SKUs</div>
                <div className="text-lg font-bold text-blue-400 mt-1">14,892</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Across 8 Warehouses</div>
              </div>

              <div className="bg-brand-navy p-3 rounded-xl border border-brand-navy-border">
                <div className="text-[11px] text-gray-400 uppercase">Pending Orders</div>
                <div className="text-lg font-bold text-amber-300 mt-1">138</div>
                <div className="text-[10px] text-amber-400 mt-0.5">Auto-Fulfillment Active</div>
              </div>

              <div className="bg-brand-navy p-3 rounded-xl border border-brand-navy-border">
                <div className="text-[11px] text-gray-400 uppercase">Auto-Reorder Triggers</div>
                <div className="text-lg font-bold text-purple-400 mt-1">12 POs</div>
                <div className="text-[10px] text-purple-300 mt-0.5">Sent to Suppliers</div>
              </div>
            </div>

            {/* Event log feed */}
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 space-y-2">
              <div className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Live Transaction Event Stream
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-gray-300 bg-white/5 p-2 rounded">
                  <span className="text-emerald-400 font-semibold">[POS-02] Sale Completed #RU-9021</span>
                  <span className="text-gray-400">$240.00 • Inventory Deducted (3 SKUs)</span>
                  <span className="text-gray-400">Just now</span>
                </div>
                <div className="flex items-center justify-between text-gray-300 bg-white/5 p-2 rounded">
                  <span className="text-blue-400 font-semibold">[ECOMM] Shopify Sync Triggered</span>
                  <span className="text-gray-400">Stock updated for SKU-881 across all nodes</span>
                  <span className="text-gray-400">2s ago</span>
                </div>
                <div className="flex items-center justify-between text-gray-300 bg-white/5 p-2 rounded">
                  <span className="text-purple-400 font-semibold">[LEDGER] Tax Invoicing Settled</span>
                  <span className="text-gray-400">Automated e-invoice PDF generated & emailed</span>
                  <span className="text-gray-400">6s ago</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
