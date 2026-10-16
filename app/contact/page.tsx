import React from "react";
import type { Metadata } from "next";
import { 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Server, 
  CheckCircle2, 
  MessageSquare
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact & Schedule Demo | RISEUPSOLUTIONS",
  description:
    "Connect with our solutions architects to schedule an interactive platform demo or discuss your custom enterprise software requirements.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 space-y-20">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 text-brand-accent text-xs font-semibold uppercase tracking-wider border border-brand-blue/30">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Connect With Our Engineering Team</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Let’s Build Something That <span className="gradient-text-vibrant">Moves You Forward</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Whether you need a tailored demonstration of RiseVoice AI, an on-site IoT cloud printing audit, or a comprehensive campus ERP blueprint, we’re here to help.
        </p>
      </section>

      {/* 2. FORM & CONTACT DETAILS SPLIT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right: Direct Channels & SLA (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Talk to our Advisor Featured Box */}
            <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#1C1D26] via-[#14151B] to-[#0E0F14] border-2 border-[#FF5722]/50 shadow-2xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#FF5722]/15 blur-[60px] pointer-events-none rounded-full" />
              
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 text-[11px] font-bold text-[#FF8A65]">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
                  <span>Talk to our Advisor</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Direct Line
                </span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF5722] to-[#FF8A65] flex items-center justify-center text-white font-black text-lg shadow-md flex-shrink-0">
                  GM
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">GANGALA MANISH KUMAR</h3>
                  <p className="text-xs font-semibold text-[#FF8A65]">{COMPANY_DATA.advisor.title}</p>
                  <p className="text-[11px] text-gray-400 mt-1">Direct architecture scoping, pricing & pilots</p>
                </div>
              </div>

              {/* Direct Quick Buttons */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={`tel:${COMPANY_DATA.advisor.phone}`}
                  className="w-full py-3 px-4 rounded-xl bg-[#FF5722] hover:bg-[#FF6D3B] text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-[#FF5722]/30 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_DATA.advisor.displayPhone}</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={COMPANY_DATA.advisor.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${COMPANY_DATA.advisor.email}`}
                    className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#FF8A65]" />
                    <span className="truncate">Email Advisor</span>
                  </a>
                </div>
              </div>

              {/* Pricing Guidance Micro List */}
              <div className="pt-3 border-t border-white/10 space-y-1.5 text-[11px]">
                <span className="text-gray-400 font-mono uppercase text-[10px] block font-semibold">
                  Platform Pricing Reference:
                </span>
                <div className="flex justify-between text-gray-300">
                  <span>Voice AI Agent:</span>
                  <span className="font-mono text-white font-semibold">₹6 - ₹15 / minute</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Business ERP:</span>
                  <span className="font-mono text-white font-semibold">₹999 - ₹4,999 / mo</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Academic ERP:</span>
                  <span className="font-mono text-white font-semibold">₹50 - ₹150 / student</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Fleet Telematics:</span>
                  <span className="font-mono text-white font-semibold">₹299 - ₹499 / vehicle</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Cloud Printing:</span>
                  <span className="font-mono text-white font-semibold">₹100 - ₹10,000 / setup</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Bespoke Engineering:</span>
                  <span className="font-mono text-white font-semibold">₹49K - ₹2.5L / milestone</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-brand-navy-border/80 bg-[#0F192E]/90 space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Company Inquiries</h3>
                <p className="text-xs text-gray-400">
                  Official corporate channels & department emails.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-black/30 border border-white/5">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-brand-accent mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Official & Primary Inquiries</span>
                    <a
                      href={`mailto:${COMPANY_DATA.contact.email}`}
                      className="text-white hover:text-brand-accent font-semibold transition-colors block"
                    >
                      {COMPANY_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-black/30 border border-white/5">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">General Information & Support</span>
                    <a
                      href={`mailto:${COMPANY_DATA.contact.infoEmail}`}
                      className="text-white hover:text-cyan-400 font-semibold transition-colors block"
                    >
                      {COMPANY_DATA.contact.infoEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-black/30 border border-white/5">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Careers & Talent Acquisition</span>
                    <a
                      href={`mailto:${COMPANY_DATA.contact.hrEmail}`}
                      className="text-white hover:text-indigo-400 font-semibold transition-colors block"
                    >
                      {COMPANY_DATA.contact.hrEmail}
                    </a>
                  </div>
                </div>



                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-black/30 border border-white/5">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Business Hours</span>
                    <span className="text-white font-medium">
                      {COMPANY_DATA.contact.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* SLA Guarantee Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-brand-blue/15 to-blue-600/10 border border-brand-blue/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Enterprise Response SLA</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  All enterprise inquiry submissions receive an initial technical assessment from an experienced solutions architect within 4 business hours.
                </p>
              </div>
            </div>

            {/* Cloud Status Card */}
            <div className="glass-panel rounded-2xl p-6 border border-brand-navy-border/80 bg-[#0B1220]/90 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-brand-accent" />
                  Infrastructure Health
                </span>
                <span className="text-[11px] text-emerald-400 font-mono font-semibold">
                  99.99% Nominal
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                RiseVoice AI telephony gateways, RiseTrack MQTT ingestion brokers, and RiseCloud Print relays are operating at peak health with zero active incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL FAQS ACCORDION */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-400">
            Common questions regarding integration timelines, cloud security, and hardware relays.
          </p>
        </div>

        <FaqAccordion />
      </section>
    </div>
  );
}
