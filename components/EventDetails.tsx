import { Calendar, Clock, MapPin } from "lucide-react";

const ADDRESS = "8423 Meadowmoore Place, Pickerington, OH 43147";
const ENC = encodeURIComponent(ADDRESS);
const MAP_LINKS = {
  google: `https://www.google.com/maps/search/?api=1&query=${ENC}`,
  apple: `https://maps.apple.com/?q=${ENC}`,
};

const items = [
  {
    icon: Calendar,
    label: "Date",
    value: "Saturday, June 27th\n(Raindate: Friday, June 26th)",
  },
  {
    icon: Clock,
    label: "GUESTS ARRIVE",
    value: "7 PM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "8423 Meadowmoore Place\nPickerington, OH  43147",
    isAddress: true,
  },
];

export default function EventDetails() {
  return (
    <section
      id="details"
      className="py-16 px-4 bg-primary text-primary-foreground"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">
          Event Details
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="bg-white/10 border border-white/20 rounded-lg text-primary-foreground"
              >
                <div className="pt-6 px-6 pb-6 flex flex-col items-center text-center">
                  <Icon className="h-8 w-8 text-gold mb-3" />
                  <p className="font-display text-sm uppercase tracking-widest text-white/70 mb-2">
                    {item.label}
                  </p>
                  {item.isAddress ? (
                    <div className="space-y-2">
                      <p className="font-body text-lg font-bold whitespace-pre-line">
                        {item.value}
                      </p>
                      <div className="flex flex-col items-center gap-1 pt-2">
                        <a
                          href={MAP_LINKS.google}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm underline underline-offset-4 hover:text-gold transition-colors"
                        >
                          Open in Google Maps
                        </a>
                        <a
                          href={MAP_LINKS.apple}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm underline underline-offset-4 hover:text-gold transition-colors"
                        >
                          Open in Apple Maps
                        </a>
                      </div>
                    </div>
                  ) : (
                    <p className="font-body text-lg font-bold whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
