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
            {/* Direct Contact Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-brand-navy-border/80 bg-[#0F192E]/90 space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Direct Communication</h3>
                <p className="text-xs text-gray-400">
                  Speak directly with technical support and client strategy specialists.
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
