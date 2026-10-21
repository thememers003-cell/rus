"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RealtimeBackground() {
  const pathname = usePathname();
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Masked route isolation: Do not render background canvas/effects on /print route
  if (pathname?.startsWith("/print")) {
    return null;
  }

  useEffect(() => {
    let animationFrameId: number;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    const updatePosition = () => {
      // Smooth interpolation for silky 60fps tracking
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setMousePos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Real-time scroll progress bar at the very top */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[999] pointer-events-none bg-transparent">
        <div 
          className="h-full bg-gradient-to-r from-[#FF8A65] via-[#FF5722] to-[#FF3D00] shadow-[0_0_12px_rgba(255,87,34,0.8)] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Real-time interactive cursor ambient glow */}
      <div
        className="pointer-events-none fixed z-30 transition-opacity duration-500 hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255, 87, 34, 0.08) 0%, rgba(255, 87, 34, 0.02) 45%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
    </>
  );
}
