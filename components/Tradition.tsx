export default function Tradition() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          What to Expect
        </h2>

        <ul className="font-body text-lg text-muted-foreground leading-relaxed space-y-3 list-disc pl-6 mb-8">
          <li>A spectacular fireworks show set to music</li>
          <li>
            An original American flag that flew over Congress in 1965, featured
            during Johnny Cash&apos;s spoken word song &ldquo;Ragged Old
            Flag&rdquo;
          </li>
          <li>
            Live performance featuring first responders (police, fire, doctors,
            nurses, and military) from our Meadowmoore community
          </li>
          <li>An 8ft x 12ft American flag made entirely of fireworks</li>
          <li>
            Grand finale with bagpipes from the Columbus Police &amp; Fire
            Pipes and Drums (the same group that performs at police and fire
            funerals, parades, etc.)
          </li>
          <li>
            Margarita Man frozen margarita machine, plus food and games
            (cornhole, volleyball, can jam, and more)
          </li>
          <li>
            Family-friendly, though things can get a little wild after the show
          </li>
        </ul>

        <div className="flex items-center justify-center gap-0 h-3 max-w-xs mx-auto rounded-full overflow-hidden">
          <div className="flex-1 h-full bg-secondary" />
          <div className="flex-1 h-full bg-white" />
          <div className="flex-1 h-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
