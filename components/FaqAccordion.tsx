"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA, FAQItem } from "@/data/faq";

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "General", "AI & Integration", "Deployment", "Security & SLA"];

  const filteredFaqs =
    activeCategory === "All"
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === activeCategory);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full space-y-6">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeCategory === cat
                ? "bg-brand-blue text-white shadow-md shadow-brand-blue/30"
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`glass-panel rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-brand-accent/50 bg-[#0F192E]/90 shadow-lg"
                  : "border-brand-navy-border/70 hover:border-brand-navy-border bg-[#0B1220]/60"
              }`}
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-sm sm:text-base font-semibold text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-accent flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
