import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2, Zap } from "lucide-react";
import ShopifyParticleCanvas from "@/components/ShopifyParticleCanvas";
import CylinderTextHero from "@/components/CylinderTextHero";
import FloatingChapterPill from "@/components/FloatingChapterPill";
import EditionsChapters from "@/components/EditionsChapters";
import Arc3DShowcase from "@/components/Arc3DShowcase";
import WorkflowSection from "@/components/WorkflowSection";
import BottomCtaBanner from "@/components/BottomCtaBanner";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* 3D Cosmic Particle Background from Shopify Editions Recording */}
      <ShopifyParticleCanvas />

      {/* Floating Chapter Tracker Pill from Video */}
      <FloatingChapterPill />

      <div className="space-y-16 sm:space-y-24 relative z-10">
        {/* 1. HERO SECTION: 3D CYLINDER TEXT & LOGO SHOWCASE */}
        <div id="hero-stage">
          <CylinderTextHero />
        </div>

        {/* 2. SHOPIFY EDITIONS CHAPTERS (Agentic, ERP, IoT Fleet, Cloud Print, Operations, Developer) */}
        <EditionsChapters />

        {/* 3. INTERACTIVE 3D ARC GALLERY */}
        <Arc3DShowcase />

        {/* 4. ENGINEERING METHODOLOGY */}
        <WorkflowSection />

        {/* 5. HIGH-CONVERTING BOTTOM CTA */}
        <BottomCtaBanner />
      </div>
    </div>
  );
}
