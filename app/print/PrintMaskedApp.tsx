"use client";

import React, { useState, useEffect, useRef } from "react";
import { Printer, Sparkles, ShieldCheck } from "lucide-react";

export default function PrintMaskedApp() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [targetSrc, setTargetSrc] = useState("https://ps-6onc.vercel.app/");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // 1. Activate print-kiosk-mode to restore normal cursor & prevent outer scroll
    document.body.classList.add("print-kiosk-mode");

    // 2. Forward any query parameters and hash from riseupsolutions.in/print to the target app
    // e.g. /print?code=849201 or /print?orderId=123&paymentStatus=SUCCESS#kiosk-demo
    if (typeof window !== "undefined") {
      const search = window.location.search || "";
      const hash = window.location.hash || "";
      const destination = `https://ps-6onc.vercel.app/${search}${hash}`;
      setTargetSrc(destination);
    }

    // 3. Fallback timeout to ensure loader doesn't hang if iframe onLoad doesn't fire immediately
    const fallbackTimer = setTimeout(() => {
      setIframeLoaded(true);
    }, 2800);

    return () => {
      document.body.classList.remove("print-kiosk-mode");
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-[100dvh] bg-[#020617] overflow-hidden z-[999999]">
      {/* High-Performance Smooth Loader */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-[#020617] z-20 transition-opacity duration-700 pointer-events-none ${
          iframeLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative flex items-center justify-center mb-5">
          {/* Outer glowing pulsing orbit */}
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-blue-600/30 to-indigo-500/20 animate-spin blur-md" />
          <div className="absolute w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-sky-500/50">
            <Printer className="w-8 h-8 text-white animate-pulse" />
          </div>
        </div>

        <div className="text-center space-y-1.5 px-4">
          <div className="flex items-center justify-center gap-1.5 text-xs font-black uppercase tracking-wider text-sky-400">
            <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin" />
            <span>Riseup Solutions Cloud Terminal</span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight">
            Print Bro — Scan. Pay. Print.
          </h2>
          <p className="text-xs text-slate-400 max-w-xs mx-auto">
            Initializing secure kiosk connection & cloud print engine...
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>SSL 256-bit Encrypted Tunnel</span>
        </div>
      </div>

      {/* Masked Fullscreen Iframe: Executes ps-6onc.vercel.app with full hardware, payment, and script permissions */}
      <iframe
        ref={iframeRef}
        src={targetSrc}
        title="Print Bro — Scan. Pay. Print."
        onLoad={() => setIframeLoaded(true)}
        className="w-full h-full border-0 block"
        allow="camera; microphone; payment; usb; geolocation; clipboard-read; clipboard-write; fullscreen; autoplay; display-capture"
        sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads allow-top-navigation-by-user-activation"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
