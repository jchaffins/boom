export default function Tradition() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          This Year&apos;s Highlights
        </h2>

        <ul className="font-body text-lg text-muted-foreground leading-relaxed space-y-3 list-disc pl-6 mb-8">
          <li>
            Fireworks choreographed with music and shot off over the lake.
          </li>
          <li>
            Show will feature an original American flag that flew over Congress
            in 1965, prominently featured during the Johnny Cash spoken word
            song Ragged Old Flag
          </li>
          <li>
            Live performance featuring first responders (police, fire, doctor,
            nurse, and military) from right here in our Meadowmoore community
          </li>
          <li>8ft x 12ft American flag made entirely out of fireworks</li>
          <li>
            Grand finale featuring bagpipes from the Columbus Police &amp; Fire
            Pipes and Drums (Yes, the same group that play in police/fire
            funerals, parades, etc)
          </li>
          <li>
            Margarita Man frozen margarita machine and lots of food and games
            (cornhole, volleyball, can jam, etc)
          </li>
          <li>
            Family friendly, although it can get a little wild after the show
          </li>
        </ul>

        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 text-center">
          <span className="font-bold text-primary">Dress Code:</span> Show your
          patriotic spirit in festive red, white, and blue. Show your love for
          America and go BIG and BOLD!
        </p>

        <div className="flex items-center justify-center gap-0 h-3 max-w-xs mx-auto rounded-full overflow-hidden">
          <div className="flex-1 h-full bg-secondary" />
          <div className="flex-1 h-full bg-white" />
          <div className="flex-1 h-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
