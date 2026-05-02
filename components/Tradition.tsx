export default function Tradition() {
  return (
    <section className="pt-6 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          What to Expect in This Year&rsquo;s Show!
        </h2>

        <ul className="font-body text-lg text-muted-foreground leading-relaxed space-y-3 list-disc pl-6 mb-8">
          <li>
            20ft outdoor movie screen paying a special tribute to our first
            responders and military. As well as a memoriam to friends and
            family who have passed.
          </li>
          <li>
            We will feature an American flag that flew over Congress in 1965,
            during Johnny Cash&apos;s spoken word song &ldquo;Ragged Old
            Flag&rdquo;
          </li>
          <li>
            A spectacular fireworks show set to music...aka a Pyromusical!!
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
          <li>
            If you or any of your guests are current or former first responders
            or military veterans, please let Bill know ASAP at{" "}
            <a
              href="tel:+16148677437"
              className="text-primary font-bold underline underline-offset-2 hover:text-secondary transition-colors"
            >
              614-867-7437
            </a>{" "}
            so we can recognize and thank them during the show.
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
