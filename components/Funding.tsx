import { Sparkles, Music, UtensilsCrossed, Heart } from "lucide-react";
import {
  getDonationTotals,
  FUNDING_GOAL,
  type Donor,
} from "@/lib/donations";

const VENMO_USERNAME = "billbeck614";
const SCROLL_THRESHOLD = 8;

const venmoLink = (amount?: number) => {
  const base = `https://venmo.com/${VENMO_USERNAME}`;
  if (!amount) return base;
  return `${base}?txn=pay&amount=${amount}&note=${encodeURIComponent(
    "Meadowmoore Boom"
  )}`;
};

const costs = [
  { icon: Sparkles, label: "Fireworks" },
  { icon: Music, label: "Entertainment" },
  { icon: UtensilsCrossed, label: "Food and beverages" },
];

const amounts: { label: string; href: string }[] = [
  { label: "$50", href: venmoLink(50) },
  { label: "$100", href: venmoLink(100) },
  { label: "$150", href: venmoLink(150) },
  { label: "$200", href: venmoLink(200) },
];

const fmtMoney = (n: number) =>
  `$${Math.round(n).toLocaleString("en-US")}`;

function DonorList({ donors }: { donors: Donor[] }) {
  if (donors.length === 0) {
    return (
      <div className="h-80 flex items-center justify-center bg-white/5 rounded-lg border border-white/10">
        <p className="font-body text-white/50 text-sm">
          Be the first to donate!
        </p>
      </div>
    );
  }

  const isLong = donors.length > SCROLL_THRESHOLD;
  const items = isLong ? [...donors, ...donors] : donors;

  return (
    <div className="relative h-80 bg-white/5 rounded-lg border border-white/10 overflow-hidden group">
      <div
        className={
          isLong
            ? "animate-marquee-y group-hover:[animation-play-state:paused]"
            : ""
        }
        style={
          isLong
            ? { animationDuration: `${Math.max(20, donors.length * 2)}s` }
            : undefined
        }
      >
        {items.map((d, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-4 py-2.5 border-b border-white/5"
          >
            <span className="font-body text-primary-foreground truncate pr-3">
              {d.name}
            </span>
            <span className="font-body font-bold text-gold tabular-nums whitespace-nowrap">
              {fmtMoney(d.amount)}
            </span>
          </div>
        ))}
      </div>
      {isLong && (
        <>
          <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-primary to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
        </>
      )}
    </div>
  );
}

export default async function Funding() {
  const { raised, donors } = await getDonationTotals();
  const pct = Math.min(100, Math.round((raised / FUNDING_GOAL) * 100));

  return (
    <section
      id="funding"
      className="py-20 px-4 bg-primary text-primary-foreground"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Hi everyone! This is Juliet and Steph (Bill&rsquo;s sister and
            cousin). This event is a true labor of love, and we&rsquo;re so
            glad you&rsquo;re here to enjoy it. Putting this on takes a
            surprising amount of time, effort&hellip; and let&rsquo;s be
            honest, expensive explosives. If you&rsquo;d like to contribute
            toward the fireworks, food, and festivities, we&rsquo;d be
            incredibly grateful!
          </p>
          <p className="font-display font-bold text-[36px] mb-3">Our Goal</p>
          <p className="font-display font-black text-7xl md:text-8xl text-gold leading-none">
            $6,500
          </p>

          <div className="max-w-md mx-auto mt-10">
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-display text-2xl md:text-3xl font-bold text-gold">
                {fmtMoney(raised)} raised
              </span>
              <span className="font-body text-sm text-white/60">
                {pct}% of goal
              </span>
            </div>
            <div
              className="h-4 rounded-full bg-white/10 overflow-hidden"
              role="progressbar"
              aria-valuenow={pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${pct}% of $${FUNDING_GOAL} goal raised`}
            >
              <div
                className="h-full bg-gold rounded-full transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-5">
              Where your money goes
            </h3>
            <p className="font-body text-white/70 mb-5">
              We&rsquo;re raising $6,500 to help cover the costs of:
            </p>
            <ul className="space-y-3">
              {costs.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 font-body text-primary-foreground"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                    <Icon className="h-4 w-4 text-secondary" />
                  </span>
                  <span className="pt-1.5">{label}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-white/70 mt-5">
              Every dollar goes directly into making this event safe, memorable,
              and impactful for everyone attending.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold mb-5">
              Thank you to our donors!
            </h3>
            <DonorList donors={donors} />
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h3 className="font-display text-2xl font-bold mb-5">
            Why we need your help
          </h3>
          <p className="font-body text-white/70 mb-4">
            Events like this take a lot of coordination and resources, and we
            want to keep it accessible and enjoyable for the whole community.
            Your support helps us make this celebration truly special.
          </p>
          <p className="font-body text-white/70">
            Whether you can give $50, $100, $150 or more, every contribution
            makes a difference.
          </p>
        </div>

        <div className="text-center">
          <p className="font-body text-sm uppercase tracking-widest text-white/60 mb-4">
            Suggested amounts
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {amounts.map((a) => (
              <a
                key={a.label}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-w-[5rem] h-12 px-6 rounded-full border-2 border-gold text-gold font-display font-bold text-xl hover:bg-gold hover:text-navy transition-colors"
              >
                {a.label}
              </a>
            ))}
          </div>

          <a href={venmoLink()} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold/90 text-navy font-body text-lg px-10 h-12 uppercase tracking-wider font-bold transition-colors">
              <Heart className="h-5 w-5" />
              Donate on Venmo
            </button>
          </a>

          <p className="font-body text-sm text-white/70 mt-6 max-w-md mx-auto">
            Those who donate $150 or more will receive special video
            recognition on the 20ft big screen.
          </p>
        </div>
      </div>
    </section>
  );
}
