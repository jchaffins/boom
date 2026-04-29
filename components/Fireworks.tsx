"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "hsl(0, 85%, 60%)",
  "hsl(0, 0%, 95%)",
  "hsl(220, 70%, 55%)",
  "hsl(43, 80%, 65%)",
  "hsl(0, 85%, 70%)",
  "hsl(220, 60%, 75%)",
];

type Rocket = {
  x: number;
  y: number;
  vy: number;
  targetY: number;
  color: string;
  exploded: boolean;
  particles: Particle[];
  trail: { x: number; y: number; alpha: number }[];
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  color: string;
  size: number;
};

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef(0);
  const rocketsRef = useRef<Rocket[]>([]);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const launch = () => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      rocketsRef.current.push({
        x: w() * (0.15 + Math.random() * 0.7),
        y: h(),
        vy: -(3 + Math.random() * 3),
        targetY: h() * (0.1 + Math.random() * 0.35),
        color,
        exploded: false,
        particles: [],
        trail: [],
      });
    };

    const explode = (r: Rocket) => {
      r.exploded = true;
      const count = 40 + Math.floor(Math.random() * 30);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3;
        const speed = 1.5 + Math.random() * 3;
        r.particles.push({
          x: r.x,
          y: r.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          decay: 0.008 + Math.random() * 0.012,
          color:
            Math.random() > 0.3
              ? r.color
              : COLORS[Math.floor(Math.random() * COLORS.length)],
          size: 1 + Math.random() * 1.5,
        });
      }
    };

    const tick = (t: number) => {
      ctx.resetTransform();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(2, 2);

      if (t - lastSpawnRef.current > 600 + Math.random() * 1200) {
        launch();
        if (Math.random() > 0.5) launch();
        lastSpawnRef.current = t;
      }

      const rockets = rocketsRef.current;
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        if (r.exploded) {
          let alive = false;
          for (const p of r.particles) {
            if (p.alpha <= 0.01) continue;
            alive = true;
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.03;
            p.vx *= 0.99;
            p.alpha -= p.decay;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color.replace(")", ` / ${p.alpha})`);
            ctx.fill();
          }
          if (!alive) rockets.splice(i, 1);
        } else {
          r.trail.push({ x: r.x, y: r.y, alpha: 0.6 });
          if (r.trail.length > 8) r.trail.shift();
          r.y += r.vy;
          r.x += (Math.random() - 0.5) * 0.3;
          for (const t of r.trail) {
            ctx.beginPath();
            ctx.arc(t.x, t.y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = r.color.replace(")", ` / ${t.alpha})`);
            ctx.fill();
            t.alpha *= 0.9;
          }
          ctx.beginPath();
          ctx.arc(r.x, r.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = r.color;
          ctx.fill();
          if (r.y <= r.targetY) explode(r);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
