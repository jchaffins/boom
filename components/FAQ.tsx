"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What should I bring?",
    a: "Lawn chairs, blankets, and your appetite! We provide the food, drinks, and entertainment.",
  },
  {
    q: "Can I bring my own fireworks?",
    a: "For everyone's safety, please leave personal fireworks at home. We've got the pyrotechnics covered!",
  },
  {
    q: "Is this event kid-friendly?",
    a: "Absolutely! There will be games and plenty of space for the little ones to run around.",
  },
  {
    q: "Where should I park?",
    a: "Street parking is available on Meadowmoore. We ask that you be respectful of our neighbors driveways.",
  },
  {
    q: "What if rain is forecasted?",
    a: "If rain is forecasted, the event may be moved to Friday, June 26 and will be communicated out on website and group text if needed.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-10">
          What to Bring &amp; FAQ
        </h2>
        <div className="space-y-2">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-card rounded-lg border px-4 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-4 font-body font-bold text-left"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-body text-muted-foreground pb-4">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
