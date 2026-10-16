"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Mic, 
  Boxes, 
  GraduationCap, 
  Navigation, 
  Printer, 
  Code2, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { ProductItem } from "@/data/products";
import TiltCard from "./TiltCard";

const iconsMap: Record<string, React.ReactNode> = {
  "ai-voice-agent": <Mic className="w-6 h-6 text-[#FF5722]" />,
  "business-management-platform": <Boxes className="w-6 h-6 text-[#FF7A50]" />,
  "education-erp": <GraduationCap className="w-6 h-6 text-[#FF8A65]" />,
  "fleet-asset-tracking": <Navigation className="w-6 h-6 text-[#FFA07A]" />,
  "cloud-printing-solutions": <Printer className="w-6 h-6 text-[#FF7043]" />,
  "bespoke-web-applications": <Code2 className="w-6 h-6 text-[#FF5722]" />,
};

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <TiltCard
      maxTilt={8}
      scale={1.02}
      className="rounded-3xl bg-[#121316] border border-white/10 hover:border-[#FF5722]/50 p-6 sm:p-7 flex flex-col justify-between group h-full transition-all shadow-xl"
    >
      <div>
        {/* Top Badges & Category */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-2xl bg-[#1A1B20] border border-white/5 group-hover:border-[#FF5722]/40 transition-colors">
            {iconsMap[product.slug] || <Sparkles className="w-6 h-6 text-[#FF5722]" />}
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FF5722]/10 text-[#FF8A65] border border-[#FF5722]/25">
            {product.badge}
          </span>
        </div>

        {/* Product Title & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-[#FF8A65] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs font-semibold text-[#FF7A50] mt-1 mb-3">
          {product.tagline}
        </p>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5 line-clamp-3">
          {product.summary}
        </p>

        {/* Pricing Block */}
        <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-[#181922] via-[#14151C] to-[#101116] border border-white/10 group-hover:border-[#FF5722]/40 transition-colors flex items-center justify-between shadow-inner">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
              Price Range (Min — Max)
            </span>
            <div className="text-sm sm:text-base font-black text-white font-mono tracking-tight group-hover:text-[#FF8A65] transition-colors">
              {product.pricing.range}
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#FF5722]/15 text-[#FF8A65] border border-[#FF5722]/30 whitespace-nowrap">
            {product.pricing.badge}
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-white/5 mb-5 bg-black/40 rounded-2xl px-3.5">
          {product.metrics.slice(0, 2).map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold text-white font-mono">
                {m.value}
              </span>
              <span className="text-[10px] text-gray-400 tracking-wider">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Key Features Bullet List */}
        <div className="space-y-2 mb-5">
          {product.keyFeatures.slice(0, 3).map((f, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5722] mt-0.5 flex-shrink-0" />
              <span className="line-clamp-1">{f.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link & Advisor Prompt */}
      <div className="pt-3 border-t border-white/5 space-y-2">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#FF8A65] group-hover:text-white transition-colors"
        >
          <span>Explore Architecture & Specs</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
        <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
          <span>Need custom setup?</span>
          <a
            href="tel:+919989876985"
            className="text-gray-300 hover:text-[#FF8A65] font-semibold transition-colors"
          >
            Advisor: +91 9989876985
          </a>
        </div>
      </div>
    </TiltCard>
  );
}
