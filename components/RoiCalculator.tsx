"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, TrendingUp, Sparkles, DollarSign, Clock } from "lucide-react";
import TiltCard from "./TiltCard";

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState<number>(25);
  const [manualHours, setManualHours] = useState<number>(12);
  const [hourlyRate, setHourlyRate] = useState<number>(45);

  // Calculate: RiseUp automation typically recovers ~65% of manual operational hours
  const automationEfficiency = 0.65;
  const weeklyHoursSaved = Math.round(teamSize * manualHours * automationEfficiency);
  const annualHoursSaved = weeklyHoursSaved * 50;
  const annualDollarSavings = Math.round(annualHoursSaved * hourlyRate);

  return (
    <div className="rounded-3xl p-6 sm:p-10 border border-white/10 bg-[#121316] shadow-2xl">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Left Inputs Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1B20] text-[#FF8A65] text-xs font-semibold uppercase tracking-wider border border-white/10">
              <Calculator className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>Interactive ROI Estimator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Quantify Your <span className="gradient-text-vibrant">Operational Savings</span>
            </h3>
            <p className="text-sm text-gray-400">
              See the immediate business impact of replacing fragmented manual workflows with RiseUp Solutions intelligent automation.
            </p>
          </div>

          <div className="space-y-5 pt-2">
            {/* Slider 1: Team Size */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-gray-300">Operations & Frontline Team Size</span>
                <span className="text-[#FF8A65] font-bold font-mono text-sm">{teamSize} team members</span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#FF5722]"
              />
              <div className="flex justify-between text-[10px] text-gray-500">
                <span>5</span>
                <span>100</span>
                <span>200+</span>
              </div>
            </div>

            {/* Slider 2: Manual Hours */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-gray-300">Manual Hours Per Employee / Week</span>
                <span className="text-[#FF8A65] font-bold font-mono text-sm">{manualHours} hrs/week</span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                step="1"
                value={manualHours}
                onChange={(e) => setManualHours(Number(e.target.value))}
                className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#FF5722]"
              />
              <div className="flex justify-between text-[10px] text-gray-500">
                <span>2 hrs (Light)</span>
                <span>15 hrs (Moderate)</span>
                <span>30 hrs (Heavy Data Entry)</span>
              </div>
            </div>

            {/* Slider 3: Hourly Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-gray-300">Blended Hourly Labor Cost</span>
                <span className="text-[#FF8A65] font-bold font-mono text-sm">${hourlyRate} / hr</span>
              </div>
              <input
                type="range"
                min="18"
                max="120"
                step="2"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#FF5722]"
              />
              <div className="flex justify-between text-[10px] text-gray-500">
                <span>$18 / hr</span>
                <span>$60 / hr</span>
                <span>$120 / hr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Dashboard */}
        <div className="w-full lg:w-1/2 bg-[#0C0D10] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
              Estimated Annual Savings
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mt-2 font-mono flex items-baseline gap-1">
              <span className="text-[#FF5722] text-3xl">$</span>
              <span>{annualDollarSavings.toLocaleString()}</span>
              <span className="text-xs font-normal text-gray-400 font-sans">/ year</span>
            </div>
            <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              Calculated at conservative 65% operational efficiency conversion
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#FF8A65]" />
                <span>Annual Hours Saved</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                {annualHoursSaved.toLocaleString()}
              </div>
              <div className="text-[10px] text-gray-400 mt-0.5">
                ~{weeklyHoursSaved} hours / week
              </div>
            </div>

            <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>Payback Horizon</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-[#FF8A65] font-mono">
                &lt; 45 Days
              </div>
              <div className="text-[10px] text-gray-400 mt-0.5">
                Rapid ROI payback
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="w-full py-4 px-6 rounded-full bg-[#FF5722] hover:bg-[#FF6D3B] text-white font-extrabold text-sm transition-all shadow-lg shadow-[#FF5722]/30 flex items-center justify-center gap-2 group"
            >
              <span>Request Detailed Cost-Benefit Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
