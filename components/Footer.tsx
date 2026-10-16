"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  Server
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { PRODUCTS_DATA } from "@/data/products";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <footer className="bg-[#090A0C] border-t border-white/10 text-gray-300 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#FF5722]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Newsletter CTA Section */}
        <div className="rounded-3xl p-6 sm:p-8 mb-16 border border-white/10 bg-[#121316] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF8A65] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>Stay Ahead of Enterprise Automation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Get product architecture insights & engineering updates
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              No marketing noise. Pure technical breakthroughs, IoT telematics updates, and Voice AI field reports.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-emerald-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Thank you! You are subscribed to RISEUPSOLUTIONS engineering briefs.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="px-4 py-2.5 bg-black/50 border border-white/10 rounded-full text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5722] transition-colors flex-grow"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#FF5722] hover:bg-[#FF6D3B] text-white text-sm font-bold rounded-full transition-all shadow-md shadow-[#FF5722]/30 flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3 group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-[#1E2026] via-[#2A2D35] to-[#141519] ring-1 ring-white/20 group-hover:ring-[#FF5722]/80 shadow-[0_0_15px_rgba(255,87,34,0.25)] transition-all duration-300 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-0.5 sm:p-1 overflow-hidden shadow-inner">
                  <img
                    src="/logo.png"
                    alt="RISEUP SOLUTIONS"
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <span className="font-display font-black text-base sm:text-lg tracking-tight text-white whitespace-nowrap group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF8A65] transition-all">
                RISEUP SOLUTIONS
              </span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {COMPANY_DATA.positioning}
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF5722] flex-shrink-0" />
                <div className="flex flex-wrap items-center gap-x-2">
                  <a href="mailto:riseupsolutions@zohomail.in" className="hover:text-white transition-colors">
                    riseupsolutions@zohomail.in
                  </a>
                  <span className="text-gray-600">•</span>
                  <a href="mailto:info@riseupsolutions.in" className="hover:text-white transition-colors">
                    info@riseupsolutions.in
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF5722] flex-shrink-0" />
                <span>{COMPANY_DATA.contact.hours}</span>
              </div>
            </div>

            {/* Advisor Direct Contact Box in Footer */}
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-[#FF5722]/30 space-y-1.5 shadow-lg">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF8A65] font-bold block">
                Talk to our Advisor
              </span>
              <div className="text-sm font-bold text-white">
                {COMPANY_DATA.advisor.name}
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <a
                  href={`tel:${COMPANY_DATA.advisor.phone}`}
                  className="text-gray-300 hover:text-[#FF8A65] font-mono font-semibold transition-colors"
                >
                  {COMPANY_DATA.advisor.displayPhone}
                </a>
                <a
                  href={`mailto:${COMPANY_DATA.advisor.email}`}
                  className="text-gray-400 hover:text-white transition-colors truncate"
                >
                  {COMPANY_DATA.advisor.email}
                </a>
              </div>
            </div>

            {/* System Status Beacon */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <Server className="w-3 h-3 text-emerald-400" />
                <span>Cloud Telemetry & API: Operational & Monitored</span>
              </div>
            </div>
          </div>

          {/* Products Column with Pricing */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Products & Pricing
            </h4>
            <ul className="space-y-2.5 text-sm">
              {PRODUCTS_DATA.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-gray-400 hover:text-[#FF8A65] transition-colors flex items-center justify-between text-xs group"
                  >
                    <span className="group-hover:text-white transition-colors">{product.name}</span>
                    <span className="text-[10px] font-mono text-[#FF8A65] bg-[#FF5722]/10 px-1.5 py-0.5 rounded border border-[#FF5722]/20">
                      {product.pricing.range.split("/")[0].trim()}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/industries#ind-education" className="text-gray-400 hover:text-[#FF8A65] transition-colors">
                  Education & Academics
                </Link>
              </li>
              <li>
                <Link href="/industries#ind-transport" className="text-gray-400 hover:text-[#FF8A65] transition-colors">
                  Logistics & Transport
                </Link>
              </li>
              <li>
                <Link href="/industries#ind-retail" className="text-gray-400 hover:text-[#FF8A65] transition-colors">
                  Retail & Wholesale
                </Link>
              </li>
              <li>
                <Link href="/industries#ind-hospitality" className="text-gray-400 hover:text-[#FF8A65] transition-colors">
                  Hospitality & F&B
                </Link>
              </li>
              <li>
                <Link href="/industries#ind-enterprise" className="text-gray-400 hover:text-[#FF8A65] transition-colors">
                  Enterprises & Startups
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Careers Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#FF8A65] transition-colors">
                  About RISEUPSOLUTIONS
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-[#FF8A65] transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#FF5722]/20 text-[#FF8A65] border border-[#FF5722]/30">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/careers#internships" className="text-[#FF8A65] hover:text-white transition-colors flex items-center gap-1">
                  <span>🎓 Internships</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#FF8A65] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_DATA.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-gray-500">Privacy Policy</span>
            <span className="text-gray-500">Terms of Service</span>
            <span className="text-gray-500">Security Specs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
