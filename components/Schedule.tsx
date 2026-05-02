import {
  Users,
  Music,
  UtensilsCrossed,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Item = { time: string; title: string; desc: string; icon: LucideIcon };

const items: Item[] = [
  {
    time: "7:00 PM",
    title: "Guests Arrive",
    desc: "Bring your lawn chair, grab a seat, say hello!",
    icon: Users,
  },
  {
    time: "7:00 PM",
    title: "Music & Games",
    desc: "Corn hole, volleyball, can jam, tunes, and more",
    icon: Music,
  },
  {
    time: "7:00 PM",
    title: "BBQ is Served",
    desc: "Pulled pork BBQ sandwiches & Margarita Man frozen cocktails",
    icon: UtensilsCrossed,
  },
  {
    time: "8:30 PM",
    title: "Bagpipes Performance",
    desc: "Live performance by the Columbus Police & Fire Bagpipes",
    icon: Shield,
  },
  {
    time: "9:45 PM",
    title: "The Big Show",
    desc: "The main event — sit back and enjoy!",
    icon: Sparkles,
  },
];

export default function Schedule() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-10">
          Schedule of Events
        </h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-8">
            {items.map((e) => {
              const Icon = e.icon;
              return (
                <div
                  key={e.title}
                  className="relative flex items-start gap-6 pl-2"
                >
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Icon className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div className="pt-1">
                    <p
                      className="font-body text-sm font-bold uppercase tracking-wider"
                      style={{ color: "hsl(var(--gold))" }}
                    >
                      {e.time}
                    </p>
                    <h3 className="font-display text-xl font-bold text-primary">
                      {e.title}
                    </h3>
                    <p className="font-body text-muted-foreground">{e.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
