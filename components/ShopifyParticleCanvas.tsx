"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  originX: number;
  originY: number;
  originZ: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  vz: number;
}

export default function ShopifyParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Color palette inspired by Shopify Editions: ethereal emerald green, warm amber/coral, mystic violet, and radiant white
    const colors = [
      "rgba(34, 197, 94, ",   // Green
      "rgba(255, 87, 34, ",   // Orange / Coral
      "rgba(168, 85, 247, ",  // Violet
      "rgba(236, 72, 153, ",  // Pink
      "rgba(255, 255, 255, ", // Pure white starlight
    ];

    const particleCount = 450;
    const particles: Particle[] = [];

    // Create 3D spherical/torus cloud of particles
    for (let i = 0; i < particleCount; i++) {
      const radius = 250 + Math.random() * 450;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      const x = radius * Math.cos(theta) * Math.cos(phi);
      const y = radius * Math.sin(phi);
      const z = radius * Math.sin(theta) * Math.cos(phi);

      const colorBase = colors[Math.floor(Math.random() * colors.length)];

      particles.push({
        x,
        y,
        z,
        originX: x,
        originY: y,
        originZ: z,
        color: colorBase,
        size: Math.random() * 2 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
      });
    }

    let angleY = 0;
    let angleX = 0.2;
    let targetAngleY = 0;
    let targetAngleX = 0.2;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / width - 0.5) * 2;
      const normY = (e.clientY / height - 0.5) * 2;
      targetAngleY = normX * 0.6;
      targetAngleX = 0.2 + normY * 0.4;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const fov = 400;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation
      angleY += (targetAngleY - angleY) * 0.05 + 0.0018; // Constant subtle rotation
      angleX += (targetAngleX - angleX) * 0.05;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const cx = width / 2;
      const cy = height * 0.42;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Drift
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Soft pull to origin
        p.vx += (p.originX - p.x) * 0.0005;
        p.vy += (p.originY - p.y) * 0.0005;
        p.vz += (p.originZ - p.z) * 0.0005;

        // 3D rotation around Y and X
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX + 600;

        if (z2 <= 50) continue;

        const scale = fov / z2;
        const screenX = cx + x1 * scale;
        const screenY = cy + y2 * scale;

        // Depth alpha attenuation
        const alpha = Math.min(1, Math.max(0.08, (1 - (z2 - 300) / 900) * 0.85));

        ctx.beginPath();
        ctx.arc(screenX, screenY, Math.max(0.5, p.size * scale), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
