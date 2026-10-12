import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Layers,
  GraduationCap,
  Truck,
  Store,
  Utensils,
  Stethoscope
} from "lucide-react";
import { INDUSTRIES_DATA, IndustrySolution } from "@/data/industries";
import { PRODUCTS_DATA } from "@/data/products";

export const metadata: Metadata = {
  title: "Industry Solutions | RiseUp Solutions",
  description:
    "Tailored enterprise software solutions for Education, Logistics, Retail, Hospitality, Healthcare, and Corporate Enterprises.",
};

const iconMap: Record<string, React.ReactNode> = {
  ind_education: <GraduationCap className="w-6 h-6 text-sky-400" />,
  ind_logistics: <Truck className="w-6 h-6 text-blue-400" />,
  ind_retail: <Store className="w-6 h-6 text-indigo-400" />,
  ind_hospitality: <Utensils className="w-6 h-6 text-amber-400" />,
  ind_healthcare: <Stethoscope className="w-6 h-6 text-emerald-400" />,
  ind_enterprise: <Building2 className="w-6 h-6 text-cyan-400" />,
};

export default function IndustriesPage() {
  return (
    <div className="pt-28 pb-24 space-y-20">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 text-brand-accent text-xs font-semibold uppercase tracking-wider border border-brand-blue/30">
          <Building2 className="w-3.5 h-3.5" />
          <span>Industry Solutions Engineering</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Purpose-Built For <span className="gradient-text-vibrant">Real Operational Environments</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Generic software creates friction. We engineer specialized technological infrastructure designed around the distinct operational models of each industry.
        </p>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {INDUSTRIES_DATA.map((ind) => (
            <a
              key={ind.id}
              href={`#${ind.id}`}
              className="px-3.5 py-1.5 rounded-xl bg-brand-navy border border-brand-navy-border text-gray-300 hover:text-white hover:border-brand-accent/40 text-xs font-medium transition-all"
            >
              {ind.title}
            </a>
          ))}
        </div>
      </section>

      {/* 2. INDUSTRY DETAILED SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {INDUSTRIES_DATA.map((ind, index) => {
          const featuredProds = PRODUCTS_DATA.filter((p) =>
            ind.featuredProducts.includes(p.slug)
          );

          return (
            <div
              key={ind.id}
              id={ind.id}
              className="glass-panel rounded-3xl p-8 sm:p-12 border border-brand-navy-border/80 bg-[#0F192E]/90 scroll-mt-28 space-y-8 shadow-2xl"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent px-2.5 py-1 rounded bg-brand-blue/15 border border-brand-blue/25 inline-block mb-2">
                    {ind.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {ind.title}
                  </h2>
                  <p className="text-base text-brand-accent font-medium">
                    {ind.tagline}
                  </p>
                </div>

                {/* Impact Stat Badges */}
                <div className="flex flex-wrap gap-3">
                  {ind.quantifiableImpact.map((q, qIdx) => (
                    <div
                      key={qIdx}
                      className="bg-black/40 px-4 py-2.5 rounded-xl border border-white/5 text-right"
                    >
                      <div className="text-lg font-black text-white font-mono">{q.stat}</div>
                      <div className="text-[10px] text-gray-400">{q.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl">
                {ind.description}
              </p>

              {/* Challenges vs Solutions 2-Column Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Friction Points */}
                <div className="space-y-4 bg-black/20 p-6 rounded-2xl border border-white/5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Typical Operational Friction</span>
                  </h3>
                  <div className="space-y-3">
                    {ind.challenges.map((c, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <span className="text-amber-400/80 font-bold">•</span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RiseUp Blueprint */}
                <div className="space-y-4 bg-brand-navy-light/40 p-6 rounded-2xl border border-brand-navy-border/60">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>RiseUp Engineered Solutions</span>
                  </h3>
                  <div className="space-y-3">
                    {ind.solutions.map((s, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                          <span className="text-emerald-400">✓</span> {s.name}
                        </h4>
                        <p className="text-xs text-gray-300 pl-4 leading-relaxed">
                          {s.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recommended Product Stack */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mr-1">
                    Integrated Stack:
                  </span>
                  {featuredProds.map((prod) => (
                    <Link
                      key={prod.id}
                      href={`/products/${prod.slug}`}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-gray-200 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5"
                    >
                      <span>{prod.name}</span>
                      <ArrowRight className="w-3 h-3 text-brand-accent" />
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-white transition-colors"
                >
                  <span>Request {ind.title} Architecture Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-8 sm:p-12 glass-panel rounded-2xl border border-brand-accent/30 space-y-4 bg-gradient-to-r from-brand-navy-light to-brand-navy">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Don't see your specific sector listed?
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Our modular architecture is adaptable across virtually any high-volume transactional or data-driven operation. Speak with our systems engineering team today.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold shadow-lg shadow-brand-blue/30 transition-all"
            >
              <span>Schedule Sector Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
