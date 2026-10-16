"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Zap,
  Phone,
  Mail
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS_DATA, ProductItem } from "@/data/products";
import { COMPANY_DATA } from "@/data/company";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "AI & Automation",
    "Core Operations",
    "IoT & Telematics",
    "Infrastructure",
    "Custom Engineering",
  ];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="pt-28 pb-24 space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 text-brand-accent text-xs font-semibold uppercase tracking-wider border border-brand-blue/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Platform Catalog</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Intelligent Software For <span className="gradient-text-vibrant">Modern Enterprise</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          From voice AI and real-time fleet GPS to cloud thermal printing and ERP platforms. Explore our battle-tested modular solutions.
        </p>

        {/* Search & Filter Bar */}
        <div className="pt-6 max-w-3xl mx-auto flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative w-full flex-grow">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products, capabilities, or protocols (e.g. Voice, GPS, Print)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-brand-navy-light/90 border border-brand-navy-border rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent transition-colors shadow-inner"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-brand-blue text-white shadow-md shadow-brand-blue/30"
                  : "bg-brand-navy border border-brand-navy-border text-gray-400 hover:text-white hover:bg-brand-navy-light"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center text-gray-400 space-y-3">
            <p className="text-base text-white">No products found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-lg bg-brand-blue text-white text-xs font-semibold"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Architecture & Integration Specs Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-brand-navy-border/80 bg-[#0E172B]/95 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Platform Integration & Security Guarantee
            </h2>
            <p className="text-sm text-gray-400">
              Every RiseUp solution complies with strict enterprise infrastructure standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black/30 border border-white/5 space-y-3">
              <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">API-First Modular Engine</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Seamless REST and GraphQL interfaces with event-driven webhooks. Connect into existing Salesforce, HubSpot, SAP, or proprietary database stacks without ripping and replacing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/30 border border-white/5 space-y-3">
              <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Enterprise Privacy & Compliance</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Bank-level AES-256 data encryption at rest and TLS 1.3 in transit. SOC2 ready, FERPA/COPPA aligned for academic portals, and zero raw PII storage options for voice calls.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/30 border border-white/5 space-y-3">
              <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-400">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">High Availability & Dedicated VPC</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                99.99% multi-region cloud uptime SLA. Enterprise customers can deploy into dedicated single-tenant VPCs (AWS, Google Cloud, Azure) or hybrid on-premise gateways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Advisor Banner - GANGALA MANISH KUMAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#171922] via-[#121318] to-[#0D0E12] border border-[#FF5722]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5722]/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/30 text-xs font-semibold text-[#FF8A65]">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>Personalized Architecture & Pricing Consultation</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Talk to Our Advisor: <span className="text-[#FF8A65]">GANGALA MANISH KUMAR</span>
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Need customized quotes for Cloud Printing (<span className="text-white font-semibold">₹100 to ₹10,000</span>), Voice AI (<span className="text-white font-semibold">₹6 - ₹15 / min</span>), Academic ERP (<span className="text-white font-semibold">₹50 - ₹150 / student</span>), or Bespoke Engineering (<span className="text-white font-semibold">₹49,000 - ₹2,50,000</span>)? Connect directly with our lead advisor for tailored volume pricing and deployment planning.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
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
                  className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
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

            {/* Advisor Badge Card */}
            <div className="w-full lg:w-72 p-5 rounded-2xl bg-[#090A0D]/90 border border-white/10 text-center space-y-3 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FF5722] to-[#FF8A65] mx-auto flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#FF5722]/30">
                GM
              </div>
              <div>
                <h4 className="text-base font-bold text-white">GANGALA MANISH KUMAR</h4>
                <p className="text-xs text-[#FF8A65] font-medium">{COMPANY_DATA.advisor.title}</p>
              </div>
              <div className="pt-2 border-t border-white/10 text-[11px] text-gray-400 space-y-1">
                <div className="text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Direct Inquiries</span>
                </div>
                <p>Monday - Saturday, IST Business Hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready To Build CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-8 sm:p-12 glass-panel rounded-2xl border border-brand-accent/30 space-y-4 bg-gradient-to-r from-brand-navy-light to-brand-navy">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need a Tailored Multi-Module Bundle?
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Our systems architects can formulate a customized technical roadmap integrating Voice AI, Cloud Printing, and ERP workflows into a singular unified cockpit.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold shadow-lg shadow-brand-blue/30 transition-all"
            >
              <span>Speak with a Lead Architect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
