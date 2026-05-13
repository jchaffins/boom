"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const links = [
  { href: "#details", label: "Details" },
  { href: "#schedule", label: "Schedule" },
  { href: "#faq", label: "FAQ" },
];

export default function StickyNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const threshold = () => Math.max(400, window.innerHeight * 0.7);
    const onScroll = () => setShow(window.scrollY > threshold());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-primary/95 backdrop-blur border-b border-white/10 shadow-lg shadow-black/10">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
          <a
            href="#top"
            className="font-display font-bold text-white text-sm sm:text-base whitespace-nowrap hover:text-gold transition-colors"
          >
            Meadowmoore Boom
          </a>
          <div className="flex items-center gap-1 sm:gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hidden sm:inline-flex items-center text-white/70 hover:text-white text-sm font-body px-3 h-9 rounded-full transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#funding"
              className="inline-flex items-center gap-1.5 bg-gold hover:bg-gold/90 text-navy font-body font-bold rounded-full px-4 sm:px-5 h-9 text-xs uppercase tracking-wider transition-colors"
            >
              <Heart className="h-3.5 w-3.5" />
              Donate
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
