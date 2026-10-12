"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, Zap, Shield, HelpCircle } from "lucide-react";
import TiltCard from "./TiltCard";

interface PlanItem {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

const PLANS: PlanItem[] = [
  {
    id: "launch",
    name: "Rapid Launch",
    price: "$2,990",
    period: "/ sprint",
    tagline: "Ideal for fast MVP validation, dedicated microservice, or voice bot deployment.",
    features: [
      "RiseVoice AI Bot integration (<200ms latency)",
      "High-speed Next.js bespoke web dashboard",
      "Full API endpoints & authentication setup",
      "Standard cloud deployment (AWS/Azure)",
      "30-day post-launch hypercare & maintenance",
    ],
    ctaText: "Start Rapid Launch",
    ctaHref: "/contact?tier=rapid-launch",
  },
  {
    id: "growth-engine",
    name: "Growth & Scale Engine",
    price: "$4,990",
    period: "/ month",
    tagline: "Our most requested tier. Complete end-to-end automation & scalable architecture.",
    isPopular: true,
    features: [
      "Omnichannel ERP & Operations core engine",
      "High-concurrency IoT fleet tracking & MQTT brokers",
      "Custom AI speech workflows & webhook triggers",
      "Zero-latency cloud printing gateway integration",
      "Dedicated senior tech lead & DevOps engineer",
      "99.99% enterprise SLA guarantee & 24/7 monitoring",
    ],
    ctaText: "Claim Growth Engine",
    ctaHref: "/contact?tier=growth-engine",
  },
  {
    id: "enterprise-titan",
    name: "Enterprise Architecture",
    price: "$6,990",
    period: "/ engagement",
    tagline: "Bespoke high-scale enterprise systems engineered for millions of users.",
    features: [
      "Custom on-premise or sovereign cloud deployment",
      "Multi-tenant ERP with role-based fine grain permissions",
      "Hardware firmware custom integration (GPS/print)",
      "Dedicated solutions architect & round-the-clock priority",
      "Custom security audits, SOC2 & ISO compliance prep",
      "Comprehensive team training & source code handover",
    ],
    ctaText: "Consult Enterprise Lead",
    ctaHref: "/contact?tier=enterprise-titan",
  },
];

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<"project" | "annual">("project");

  return (
    <section id="pricing" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1B20] border border-white/10 text-xs font-semibold text-[#FF8A65]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>Transparent Engagement Models</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Choose your <span className="gradient-text-vibrant">Plan</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Flexible partnerships engineered to maximize ROI. Every engagement includes clear timelines, direct engineer communication, and production-ready code.
            </p>
          </div>

          <div className="inline-flex p-1 rounded-full bg-[#141519] border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setBillingCycle("project")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === "project"
                  ? "bg-[#FF5722] text-white shadow-md shadow-[#FF5722]/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sprint / Milestones
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === "annual"
                  ? "bg-[#FF5722] text-white shadow-md shadow-[#FF5722]/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Annual Partner (-20%)
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards matching reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => {
            if (plan.isPopular) {
              // RADIANT ORANGE CARD
              return (
                <TiltCard
                  key={plan.id}
                  maxTilt={6}
                  scale={1.03}
                  className="rounded-3xl gradient-orange-card p-8 sm:p-9 text-white flex flex-col justify-between relative overflow-hidden ring-2 ring-white/30"
                >
                  {/* Popular Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 text-white text-xs font-bold self-start mb-4 border border-white/20">
                    <Zap className="w-3.5 h-3.5 fill-white text-white" />
                    <span>Most Popular Choice</span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {plan.name}
                    </h3>

                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                        {billingCycle === "annual" ? "$3,990" : plan.price}
                      </span>
                      <span className="text-sm font-medium text-white/80">{plan.period}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pb-4 border-b border-white/20">
                      {plan.tagline}
                    </p>

                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-white/90 block">
                        Included In Scale Engine:
                      </span>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white font-medium">
                          <div className="w-4 h-4 rounded-full bg-white text-[#FF5722] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-6">
                    <Link
                      href={plan.ctaHref}
                      className="w-full py-4 rounded-full bg-[#090A0C] hover:bg-black text-white text-sm font-extrabold shadow-2xl transition-all flex items-center justify-center gap-2 group transform hover:scale-[1.02]"
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#FF5722] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </TiltCard>
              );
            }

            // DARK CARDS ON LEFT AND RIGHT
            return (
              <TiltCard
                key={plan.id}
                maxTilt={6}
                scale={1.01}
                className="rounded-3xl bg-[#121316] border border-white/10 hover:border-[#FF5722]/50 p-8 sm:p-9 text-white flex flex-col justify-between transition-all group"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#FF8A65] transition-colors">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-white font-display">
                      {billingCycle === "annual" 
                        ? plan.id === "launch" ? "$2,390" : "$5,590"
                        : plan.price}
                    </span>
                    <span className="text-sm font-medium text-gray-400">{plan.period}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pb-4 border-b border-white/10">
                    {plan.tagline}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                      Core Deliverables:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <div className="w-4 h-4 rounded-full bg-[#FF5722]/20 text-[#FF5722] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#FF5722]/30">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <Link
                    href={plan.ctaHref}
                    className="w-full py-3.5 rounded-full bg-[#FF5722]/15 hover:bg-[#FF5722] border border-[#FF5722]/40 hover:border-[#FF5722] text-[#FF8A65] hover:text-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
