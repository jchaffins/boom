import Image from "next/image";
import Fireworks from "./Fireworks";
import Countdown from "./Countdown";
import LightOneOff from "./LightOneOff";
import { Heart } from "lucide-react";

const STAR_BG = `radial-gradient(2px 2px at 8% 12%, white 50%, transparent 50%),
  radial-gradient(2.5px 2.5px at 22% 33%, white 50%, transparent 50%),
  radial-gradient(1.5px 1.5px at 36% 8%, white 50%, transparent 50%),
  radial-gradient(2px 2px at 48% 24%, white 50%, transparent 50%),
  radial-gradient(2.5px 2.5px at 62% 44%, white 50%, transparent 50%),
  radial-gradient(1.5px 1.5px at 74% 14%, white 50%, transparent 50%),
  radial-gradient(2px 2px at 88% 28%, white 50%, transparent 50%),
  radial-gradient(2.5px 2.5px at 14% 58%, white 50%, transparent 50%),
  radial-gradient(1.5px 1.5px at 30% 76%, white 50%, transparent 50%),
  radial-gradient(2px 2px at 44% 64%, white 50%, transparent 50%),
  radial-gradient(2.5px 2.5px at 58% 82%, white 50%, transparent 50%),
  radial-gradient(1.5px 1.5px at 70% 70%, white 50%, transparent 50%),
  radial-gradient(2px 2px at 82% 88%, white 50%, transparent 50%),
  radial-gradient(2.5px 2.5px at 92% 56%, white 50%, transparent 50%),
  radial-gradient(1.5px 1.5px at 4% 92%, white 50%, transparent 50%),
  radial-gradient(2px 2px at 26% 96%, white 50%, transparent 50%)`;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy via-[hsl(220,50%,12%)] to-[hsl(220,60%,8%)]"
    >
      <Fireworks />
      <div
        className="absolute inset-0 animate-twinkle motion-reduce:animate-none motion-reduce:opacity-60"
        style={{ backgroundImage: STAR_BG, backgroundSize: "260px 260px" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-4 pb-16">
        <div className="flex justify-center mb-2 md:mb-3">
          <Image
            src="/ragged-old-flag.png"
            alt="Ragged Old Flag with fireworks"
            width={1024}
            height={1024}
            priority
            className="w-40 sm:w-44 md:w-56 lg:w-64 h-auto mix-blend-screen"
          />
        </div>
        <h1 className="font-display font-black text-white leading-[0.95] mb-6">
          <span className="block font-display text-4xl sm:text-5xl md:text-[60px] leading-none text-[#C91D1D] mb-4">
            Meadowmoore Boom
          </span>
          <span className="block text-6xl md:text-8xl lg:text-9xl">
            Ragged Old Flag
          </span>
          <span className="block text-4xl sm:text-6xl md:text-7xl text-gold mt-4 md:mt-6">
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

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <a href="#funding">
            <button className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold/90 text-navy font-body text-lg px-8 h-12 uppercase tracking-wider font-bold transition-colors">
              <Heart className="h-5 w-5" />
              Help Fund the Fireworks
            </button>
          </a>
          <LightOneOff />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
