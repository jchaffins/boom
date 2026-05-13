import {
  Users,
  Music,
  UtensilsCrossed,
  Shield,
  Sparkles,
  Clock,
  type LucideIcon,
} from "lucide-react";

type SubItem = { title: string; desc: string; icon: LucideIcon };
type Node = {
  time: string;
  headline: string;
  icon: LucideIcon;
  subItems?: SubItem[];
  desc?: string;
};

const nodes: Node[] = [
  {
    time: "7:00 PM",
    headline: "Doors Open",
    icon: Clock,
    subItems: [
      {
        title: "Guests Arrive",
        desc: "Bring your lawn chair, grab a seat, say hello!",
        icon: Users,
      },
      {
        title: "Music & Games",
        desc: "Corn hole, volleyball, can jam, tunes, and more",
        icon: Music,
      },
      {
        title: "BBQ is Served",
        desc: "Pulled pork BBQ sandwiches & Margarita Man frozen cocktails",
        icon: UtensilsCrossed,
      },
    ],
  },
  {
    time: "8:30 PM",
    headline: "Bagpipes Performance",
    icon: Shield,
    desc: "Live performance by the Columbus Police & Fire Bagpipes",
  },
  {
    time: "9:45 PM",
    headline: "The Big Show",
    icon: Sparkles,
    desc: "The main event — sit back and enjoy!",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-10">
          Schedule of Events
        </h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-10">
            {nodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.headline}
                  className="relative flex items-start gap-6 pl-2"
                >
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center ring-4 ring-background">
                    <Icon className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div className="pt-1 flex-1">
                    <p
                      className="font-body text-sm font-bold uppercase tracking-wider"
                      style={{ color: "hsl(var(--gold))" }}
                    >
                      {node.time}
                    </p>
                    <h3 className="font-display text-xl font-bold text-primary">
                      {node.headline}
                    </h3>
                    {node.desc && (
                      <p className="font-body text-muted-foreground mt-1">
                        {node.desc}
                      </p>
                    )}
                    {node.subItems && (
                      <ul className="mt-4 space-y-3">
                        {node.subItems.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <li
                              key={sub.title}
                              className="flex items-start gap-3"
                            >
                              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary/15 flex items-center justify-center mt-0.5">
                                <SubIcon className="h-3.5 w-3.5 text-secondary" />
                              </span>
                              <div>
                                <p className="font-body font-bold text-primary leading-tight">
                                  {sub.title}
                                </p>
                                <p className="font-body text-muted-foreground text-sm">
                                  {sub.desc}
                                </p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
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
