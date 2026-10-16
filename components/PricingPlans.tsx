"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, Zap, Shield, HelpCircle, Phone, Mail } from "lucide-react";
import TiltCard from "./TiltCard";
import { COMPANY_DATA } from "@/data/company";
import { PRODUCTS_DATA } from "@/data/products";

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
    price: "₹49,000",
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
    price: "₹1,49,000",
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
    price: "₹2,49,000",
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
                        {billingCycle === "annual" ? "₹1,19,000" : plan.price}
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
                        ? plan.id === "launch" ? "₹39,000" : "₹1,99,000"
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

        {/* Product-Specific Modular Rate Cards */}
        <div className="mt-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1B20] border border-white/10 text-xs font-semibold text-[#FF8A65]">
              <Zap className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>Unit & Usage Pricing</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Modular Platform <span className="gradient-text-vibrant">Rate Cards</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Need individual modules rather than a full sprint bundle? Deploy standalone microservices with transparent usage metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-[#121316] border border-white/10 hover:border-[#FF5722]/50 p-6 flex flex-col justify-between transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF8A65]">
                      {product.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FF5722]/15 text-[#FF8A65] border border-[#FF5722]/30">
                      {product.pricing.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-[#FF8A65] transition-colors">
                    {product.name}
                  </h4>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono text-gray-400 block">
                        Price Range (Min — Max)
                      </span>
                      <span className="text-[9px] font-mono text-[#FF8A65]">
                        {product.pricing.unit}
                      </span>
                    </div>
                    <div className="text-xl font-black text-white font-mono">
                      {product.pricing.range}
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {product.pricing.billingNote}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-xs font-bold text-[#FF8A65] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`tel:${COMPANY_DATA.advisor.phone}`}
                    className="text-[11px] text-gray-400 hover:text-white transition-colors"
                  >
                    Direct Quote →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Talk to our Advisor GANGALA MANISH KUMAR Banner */}
        <div className="mt-16 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#171922] via-[#121318] to-[#0D0E12] border border-[#FF5722]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5722]/15 blur-[120px] pointer-events-none rounded-full" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/30 text-xs font-semibold text-[#FF8A65]">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>Dedicated Technical Advisor</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Talk to our Advisor: <span className="text-[#FF8A65]">GANGALA MANISH KUMAR</span>
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Have questions about high-volume discounts, student-tier scaling for ERP, or multi-branch cloud printing hardware configurations? Connect directly with our lead advisor for a 1-on-1 technical consultation.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href={`tel:${COMPANY_DATA.advisor.phone}`}
                  className="px-6 py-3.5 rounded-full bg-[#FF5722] hover:bg-[#FF6D3B] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#FF5722]/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_DATA.advisor.displayPhone}</span>
                </a>

                <a
                  href={COMPANY_DATA.advisor.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <span>WhatsApp Advisor</span>
                </a>

                <a
                  href={`mailto:${COMPANY_DATA.advisor.email}`}
                  className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FF8A65]" />
                  <span>{COMPANY_DATA.advisor.email}</span>
                </a>
              </div>
            </div>

            {/* Advisor ID Card */}
            <div className="w-full lg:w-72 p-5 rounded-2xl bg-[#090A0D]/95 border border-white/10 text-center space-y-3 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FF5722] to-[#FF8A65] mx-auto flex items-center justify-center text-white font-black text-xl shadow-lg">
                GM
              </div>
              <div>
                <h4 className="text-base font-bold text-white">GANGALA MANISH KUMAR</h4>
                <p className="text-xs text-[#FF8A65] font-medium">{COMPANY_DATA.advisor.title}</p>
              </div>
              <div className="pt-2 border-t border-white/10 text-[11px] text-gray-400 space-y-1">
                <div className="text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Direct Advisor Assistance</span>
                </div>
                <p>+91 9989876985</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
