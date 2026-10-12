"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  Pause, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  ExternalLink,
  Mic,
  Boxes,
  GraduationCap,
  Navigation,
  Printer,
  Code2,
  ShieldCheck,
  Zap,
  Layers,
  Activity,
  Cpu
} from "lucide-react";
import { PRODUCTS_DATA, ProductItem } from "@/data/products";

// Product visual pairings matching the products
const PRODUCT_VISUALS: Record<string, { image: string; icon: React.ReactNode; color: string }> = {
  "ai-voice-agent": {
    image: "/showcase/showcase-phone.jpg",
    icon: <Mic className="w-5 h-5 text-white" />,
    color: "#FF5722",
  },
  "business-management-platform": {
    image: "/showcase/showcase-cube.jpg",
    icon: <Boxes className="w-5 h-5 text-white" />,
    color: "#FF8A65",
  },
  "education-erp": {
    image: "/showcase/showcase-phone.jpg",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    color: "#FF7043",
  },
  "fleet-asset-tracking": {
    image: "/showcase/hero-cylinder.jpg",
    icon: <Navigation className="w-5 h-5 text-white" />,
    color: "#FFA07A",
  },
  "cloud-printing-solutions": {
    image: "/showcase/hero-portrait.jpg",
    icon: <Printer className="w-5 h-5 text-white" />,
    color: "#FF5722",
  },
  "bespoke-web-applications": {
    image: "/showcase/showcase-cube.jpg",
    icon: <Code2 className="w-5 h-5 text-white" />,
    color: "#FF8A50",
  },
};

export default function Arc3DShowcase() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Butter-smooth continuous kinetic flow from left to right using rAF
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Start with scroll position in middle of duplicated content for seamless infinite looping
    if (container.scrollLeft === 0) {
      container.scrollLeft = container.scrollWidth / 3;
    }

    let lastTimestamp: number | null = null;
    // Flow speed: ~38 pixels per second (gentle, readable, luxury pace)
    const speed = 0.55; 

    const step = (timestamp: number) => {
      if (lastTimestamp !== null) {
        if (!isPausedRef.current && !isDraggingRef.current && container) {
          // Flow from left to right: scrollLeft decrements smoothly
          container.scrollLeft -= speed;

          // Infinite loop reset wrap-around
          const oneThird = container.scrollWidth / 3;
          if (container.scrollLeft <= 10) {
            container.scrollLeft += oneThird;
          } else if (container.scrollLeft >= oneThird * 2) {
            container.scrollLeft -= oneThird;
          }
        }
      }
      lastTimestamp = timestamp;
      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Smooth drag & touch interaction handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    isDraggingRef.current = true;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag sensitivity
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    isDraggingRef.current = false;
  };

  // Nudge buttons for keyboard & click navigation
  const scrollNudge = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const offset = direction === "left" ? -420 : 420;
    container.scrollBy({ left: offset, behavior: "smooth" });
  };

  // Triple products array to guarantee 100% seamless infinite scroll loop
  const tripleProducts = [...PRODUCTS_DATA, ...PRODUCTS_DATA, ...PRODUCTS_DATA];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-transparent via-[#0D0E12] to-transparent">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] h-[520px] bg-[#FF5722]/12 blur-[170px] pointer-events-none rounded-full" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-10 sm:mb-14">
        {/* Header Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1B20]/95 border border-white/10 text-xs font-semibold text-[#FF8A65] shadow-xl mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#FF5722] animate-pulse" />
          <span className="font-mono tracking-wider uppercase text-[11px]">Official Product Suite</span>
          <span className="text-white/20">•</span>
          <span className="text-gray-300 font-medium">Kinetic Story Stream</span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="text-emerald-400 font-semibold hidden sm:inline flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Enterprise Ready
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Engineered for Scale. <br className="hidden sm:block" />
          <span className="gradient-text-vibrant">Every Product Has a Story.</span>
        </h2>
        <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
          Explore our proprietary autonomous platforms. Hover over any product card to pause the flow, inspect measured SLAs, and access technical deployment blueprints.
        </p>

        {/* Stream Navigation & Flow Controls */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141519] border border-white/10 hover:border-[#FF5722]/50 text-xs text-gray-300 hover:text-white transition-all shadow-md active:scale-95"
          >
            {isPaused ? (
              <>
                <Play className="w-3 h-3 text-emerald-400" />
                <span className="font-mono uppercase text-[10px] font-bold">Resume Flow</span>
              </>
            ) : (
              <>
                <Pause className="w-3 h-3 text-[#FF5722]" />
                <span className="font-mono uppercase text-[10px] font-bold">Pause Stream</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollNudge("left")}
              className="p-2 rounded-full bg-[#141519] border border-white/10 hover:border-[#FF5722]/50 text-gray-400 hover:text-white transition-all active:scale-95 shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollNudge("right")}
              className="p-2 rounded-full bg-[#141519] border border-white/10 hover:border-[#FF5722]/50 text-gray-400 hover:text-white transition-all active:scale-95 shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* CONTINUOUS LEFT-TO-RIGHT KINETIC PRODUCT STREAM */}
      <div 
        className="relative w-full overflow-hidden py-4 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          if (!isDragging) setIsPaused(false);
        }}
      >
        {/* Cinema Edge Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#090A0C] via-[#090A0C]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#090A0C] via-[#090A0C]/80 to-transparent z-20 pointer-events-none" />

        {/* Scroll Track with Kinetic Drag & Smooth Glide */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`flex gap-5 sm:gap-6 px-6 overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing ${
            isDragging ? "scroll-auto" : "scroll-smooth"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {tripleProducts.map((product, idx) => {
            const visual = PRODUCT_VISUALS[product.slug] || {
              image: "/showcase/showcase-cube.jpg",
              icon: <Zap className="w-5 h-5 text-white" />,
              color: "#FF5722",
            };

            const primaryMetric = product.metrics[0];
            const secondaryMetric = product.metrics[1];

            return (
              <div
                key={`${product.id}-${idx}`}
                onClick={(e) => {
                  // Only open if not dragging
                  if (!isDragging) {
                    setSelectedProduct(product);
                  }
                }}
                className="group relative w-[310px] sm:w-[370px] md:w-[400px] h-[520px] sm:h-[550px] rounded-3xl overflow-hidden cursor-pointer flex-shrink-0 bg-gradient-to-b from-[#161820] via-[#101115] to-[#0A0B0E] border border-white/10 hover:border-[#FF5722] hover:shadow-[0_20px_50px_rgba(255,87,34,0.4)] transition-all duration-500 transform hover:-translate-y-2.5 flex flex-col justify-between p-5 sm:p-6"
              >
                {/* Top Subtle Amber Sheen on Hover */}
                <div className="absolute -top-20 inset-x-0 h-36 bg-gradient-to-b from-[#FF5722]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* 1. TOP HEADER: Product Badge & Category */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-[#1D1F27] border border-white/10 flex items-center justify-center p-1">
                      {visual.icon}
                    </span>
                    <div>
                      <span className="text-[10px] font-mono font-black text-[#FF8A65] tracking-wider uppercase block">
                        {product.badge}
                      </span>
                      <span className="text-[11px] font-mono text-gray-400 block -mt-0.5">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[10px] text-emerald-300 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active</span>
                  </span>
                </div>

                {/* 2. CENTER IMAGE & FLOATING METRIC CHIP */}
                <div className="relative z-10 w-full h-44 sm:h-48 my-3 rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all shadow-inner">
                  {/* Product Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
                    style={{ backgroundImage: `url(${visual.image})` }}
                  />
                  {/* Cinematic Dark Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

                  {/* Floating Metric Pill Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 sm:p-3 rounded-xl bg-[#0D0F14]/90 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-xl">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">
                        {primaryMetric?.label || "Key Metric"}
                      </span>
                      <span className="text-base sm:text-lg font-black text-[#FF8A65] block leading-tight">
                        {primaryMetric?.value || "Enterprise"}
                      </span>
                    </div>

                    <div className="text-right pl-2 border-l border-white/10">
                      <span className="text-[9px] uppercase font-mono tracking-wider text-gray-400 block">
                        {secondaryMetric?.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white block">
                        {secondaryMetric?.value}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. PRODUCT STORY, FEATURES & ACTION */}
                <div className="relative z-10 text-left flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-black text-white group-hover:text-[#FF8A65] transition-colors leading-tight line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs font-semibold text-gray-300 line-clamp-1">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed pt-1">
                      {product.summary}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-2.5 pb-1 space-y-1">
                    {product.keyFeatures.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-gray-300 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5722] flex-shrink-0" />
                        <span className="truncate">{feat.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Bottom CTA Strip */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-gray-400">
                      {product.technicalSpecs.deployment.split("/")[0]}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#FF8A65] group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                        Inspect Story <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FULL PRODUCT STORY MODAL / ARCHITECTURE SPECS DRAWER */}
      {selectedProduct && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-gradient-to-b from-[#181920] to-[#0F1014] border border-[#FF5722]/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badge & Category */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#FF5722] text-white text-xs font-mono font-black uppercase">
                {selectedProduct.badge}
              </span>
              <span className="text-xs font-mono text-gray-400">
                {selectedProduct.category}
              </span>
            </div>

            {/* Product Name & Tagline */}
            <h3 id="product-modal-title" className="text-xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-1">
              {selectedProduct.name}
            </h3>
            <p className="text-sm sm:text-base text-[#FF8A65] font-semibold mb-5">
              {selectedProduct.tagline}
            </p>

            {/* 4-Box Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#121317] border border-white/10 mb-6 shadow-inner">
              {selectedProduct.metrics.map((m, i) => (
                <div key={i} className="text-center sm:text-left">
                  <span className="text-[10px] uppercase font-mono text-gray-400 block truncate">
                    {m.label}
                  </span>
                  <span className="text-base sm:text-xl font-black text-[#FF8A65] block leading-tight">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Full Product Description */}
            <div className="space-y-3 mb-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <h4 className="font-bold text-white uppercase text-xs tracking-wider font-mono">
                System Narrative & Overview:
              </h4>
              <p>{selectedProduct.description}</p>
            </div>

            {/* Key Features */}
            <div className="mb-6 space-y-2.5">
              <h4 className="font-bold text-white uppercase text-xs tracking-wider font-mono mb-2">
                Core Architectural Capabilities:
              </h4>
              {selectedProduct.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold">{feat.title}: </strong>
                    <span>{feat.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Specs & Protocols */}
            <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block font-bold">
                Enterprise Deployment Specs:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300">
                <div>
                  <span className="text-gray-400">Deployment: </span>
                  <span className="font-semibold">{selectedProduct.technicalSpecs.deployment}</span>
                </div>
                {selectedProduct.technicalSpecs.latency && (
                  <div>
                    <span className="text-gray-400">Latency SLA: </span>
                    <span className="font-semibold text-[#FF8A65]">{selectedProduct.technicalSpecs.latency}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href={`/products/${selectedProduct.slug}`}
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FF5722] hover:bg-[#FF6D3B] text-white font-bold text-xs shadow-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <span>View Dedicated Product Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-semibold text-xs transition-colors text-center"
              >
                Schedule Solution Demo
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM CALL TO ACTION BANNER */}
      <div className="mt-14 max-w-xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Let's Create Something <br />
          <span className="gradient-text-vibrant">Exceptional</span>
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-md mx-auto">
          Translate intricate operational roadblocks into high-velocity autonomous software engines.
        </p>

        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-[#FF5722] hover:bg-[#FF6D3B] text-white text-xs sm:text-sm font-bold shadow-[0_6px_25px_rgba(255,87,34,0.4)] hover:shadow-[0_8px_35px_rgba(255,87,34,0.6)] transition-all flex items-center gap-2 group transform hover:-translate-y-0.5"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/products"
            className="px-6 py-3.5 rounded-full bg-[#15161A] hover:bg-[#1D1E24] border border-white/10 text-gray-300 hover:text-white text-xs sm:text-sm font-semibold transition-all"
          >
            <span>Explore All Products</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
