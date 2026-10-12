import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Zap, 
  ChevronRight,
  Layers,
  Activity,
  FileCheck,
  ExternalLink
} from "lucide-react";
import { PRODUCTS_DATA, ProductItem } from "@/data/products";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS_DATA.find((p) => p.slug === params.slug);
  if (!product) {
    return { title: "Product Not Found | RiseUp Solutions" };
  }
  return {
    title: `${product.name} | ${product.tagline}`,
    description: product.summary,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = PRODUCTS_DATA.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS_DATA.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="pt-28 pb-24 space-y-20">
      {/* 1. PRODUCT HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-500" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-gray-500" />
            <span className="text-brand-accent font-medium">{product.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pt-2">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 text-brand-accent text-xs font-semibold uppercase tracking-wider border border-brand-blue/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{product.category}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-xl sm:text-2xl text-brand-accent font-medium">
                {product.tagline}
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 hover:from-brand-blue-hover hover:to-blue-700 text-white font-semibold text-sm shadow-xl shadow-brand-blue/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Custom Demo & Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#specs"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>View Technical Specs</span>
                </a>
              </div>
            </div>

            {/* Key Metrics Highlight Card */}
            <div className="w-full lg:w-80 glass-panel rounded-2xl p-6 border border-brand-navy-border/80 bg-[#0F192E]/90 space-y-4 shadow-xl">
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                Benchmark Performance
              </span>
              <div className="grid grid-cols-2 gap-4 pt-1">
                {product.metrics.map((m, idx) => (
                  <div key={idx} className="bg-black/30 p-3 rounded-xl border border-white/5">
                    <div className="text-xl sm:text-2xl font-black text-white font-mono">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-1 leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Platform Capabilities & Features
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Engineered with zero technical debt for demanding enterprise operational workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.keyFeatures.map((f, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-brand-navy-border/80 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-blue/20 text-brand-accent border border-brand-blue/30">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{f.title}</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed pl-12">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS & ARCHITECTURE */}
      <section id="specs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-brand-navy-border/80 bg-[#0E172B]/95 space-y-10 shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-accent mb-2">
              <Cpu className="w-4 h-4" />
              <span>Technical Data Sheet</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Architecture & System Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Spec Table */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 border-b border-white/5 pb-2">
                Infrastructure Parameters
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                {product.technicalSpecs.latency && (
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-gray-400">Response / Latency</span>
                    <span className="text-emerald-400 font-mono font-semibold">
                      {product.technicalSpecs.latency}
                    </span>
                  </div>
                )}

                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-400">Deployment Topology</span>
                  <span className="text-white font-medium text-right max-w-xs">
                    {product.technicalSpecs.deployment}
                  </span>
                </div>

                {product.technicalSpecs.protocol && (
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-gray-400">Communication Protocol</span>
                    <span className="text-brand-accent font-mono">
                      {product.technicalSpecs.protocol}
                    </span>
                  </div>
                )}

                <div className="py-2 border-b border-white/5">
                  <span className="text-gray-400 block mb-2">Native Integrations</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.technicalSpecs.integrations.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-gray-200 text-xs font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="py-2">
                  <span className="text-gray-400 block mb-2">Security & Regulatory Compliance</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.technicalSpecs.compliance.map((comp, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-mono"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Architecture Highlights */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 border-b border-white/5 pb-2">
                Engineering Highlights
              </h3>

              <div className="space-y-3">
                {product.architectureHighlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-md bg-brand-blue/20 text-brand-accent flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                      {hl}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL WORLD USE CASES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Proven Use Cases & Business Outcomes
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              How organizations implement {product.name} to solve operational bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.useCases.map((uc, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-brand-navy-border/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-accent block mb-2">
                    {uc.target}
                  </span>
                  <h3 className="text-base font-bold text-white mb-3">{uc.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    {uc.outcome}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Operational Return</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RELATED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Complementary Enterprise Modules
            </h2>
            <Link
              href="/products"
              className="text-xs text-brand-accent hover:text-white flex items-center gap-1"
            >
              <span>View all products</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                className="glass-card rounded-2xl p-6 border border-brand-navy-border/80 group"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-blue/15 text-brand-accent mb-2 inline-block">
                  {p.badge}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-brand-accent transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  {p.summary}
                </p>
                <div className="pt-4 mt-4 border-t border-white/5 text-xs text-brand-accent font-semibold flex items-center justify-between">
                  <span>Explore Module</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-8 sm:p-12 glass-panel rounded-2xl border border-brand-accent/30 space-y-4 bg-gradient-to-r from-brand-navy-light to-brand-navy">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to integrate {product.name}?
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Book a personalized technical walkthrough with our software architects. We can demo live integrations against your test sandbox.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold shadow-lg shadow-brand-blue/30 transition-all"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
