"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-27T19:00:00-04:00");

function compute() {
  const ms = Math.max(0, TARGET.getTime() - Date.now());
  return {
    days: Math.floor(ms / (1000 * 60 * 60 * 24)),
    hours: Math.floor((ms / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((ms / (1000 * 60)) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

const ZERO = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function Countdown() {
  const [t, setT] = useState(ZERO);

  useEffect(() => {
    setT(compute());
    const id = setInterval(() => setT(compute()), 1000);
    return () => clearInterval(id);
  }, []);

  const items: [string, number][] = [
    ["days", t.days],
    ["hours", t.hours],
    ["minutes", t.minutes],
    ["seconds", t.seconds],
  ];

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
      {items.map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <span className="font-display text-4xl md:text-5xl font-black text-white tabular-nums">
            {String(value).padStart(2, "0")}
          </span>
          <span className="font-body text-xs md:text-sm uppercase tracking-widest text-white/50 mt-1">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
