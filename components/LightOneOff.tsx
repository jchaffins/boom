"use client";

import { Sparkles } from "lucide-react";
import { playSizzle } from "@/lib/sounds";

export default function LightOneOff() {
  return (
    <button
      type="button"
      onClick={() => {
        playSizzle();
        window.dispatchEvent(new CustomEvent("fireworks:launch"));
      }}
      aria-label="Launch a firework"
      className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 hover:border-gold hover:text-gold text-white font-body text-lg px-8 h-12 uppercase tracking-wider font-bold transition-colors"
    >
      <Sparkles className="h-5 w-5" />
      Light One Off
    </button>
  );
}
