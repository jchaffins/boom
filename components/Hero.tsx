import Fireworks from "./Fireworks";
import Countdown from "./Countdown";
import { Heart } from "lucide-react";

const GOFUNDME_URL = "https://www.gofundme.com/placeholder";

const STAR_BG = `radial-gradient(1px 1px at 20% 30%, white 50%, transparent 50%),
  radial-gradient(1px 1px at 40% 70%, white 50%, transparent 50%),
  radial-gradient(1px 1px at 60% 20%, white 50%, transparent 50%),
  radial-gradient(1.5px 1.5px at 80% 50%, white 50%, transparent 50%),
  radial-gradient(1px 1px at 10% 80%, white 50%, transparent 50%),
  radial-gradient(1.5px 1.5px at 75% 90%, white 50%, transparent 50%),
  radial-gradient(1px 1px at 35% 10%, white 50%, transparent 50%),
  radial-gradient(1px 1px at 90% 25%, white 50%, transparent 50%)`;

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy via-[hsl(220,50%,12%)] to-[hsl(220,60%,8%)]">
      <Fireworks />
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: STAR_BG, backgroundSize: "300px 300px" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-12 pb-16">
        <h1 className="font-display font-black text-white leading-[0.95] mb-6">
          <span className="block text-lg md:text-xl uppercase tracking-[0.4em] text-white/60 mb-4 font-body font-light">
            Meadowmoore Boom
          </span>
          <span className="block text-6xl md:text-8xl lg:text-9xl">
            Ragged Old Flag
          </span>
          <span className="block text-6xl md:text-8xl text-gold lg:text-8xl">
            The Pyromusical
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-body text-white/80 tracking-widest uppercase mb-2 font-light">
          Celebrating Our First Responders &amp; Military
        </p>

        <p className="text-base font-body text-white/60 mb-10">
          Saturday, June 27th, 2026
        </p>

        <Countdown />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#details">
            <button className="inline-flex items-center gap-2 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body text-lg px-8 h-12 uppercase tracking-wider transition-colors">
              Event Details
            </button>
          </a>
          <a href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold/90 text-navy font-body text-lg px-8 h-12 uppercase tracking-wider font-bold transition-colors">
              <Heart className="h-5 w-5" />
              Help Fund the Fireworks 🎆
            </button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
