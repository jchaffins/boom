export default function NeedToKnow() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          What You Need to Know
        </h2>

        <div className="font-body text-lg text-muted-foreground leading-relaxed space-y-5 mb-8">
          <p>
            Bring lawn chairs! And dress as your favorite first responder,
            military member, or in patriotic attire. Go{" "}
            <strong className="text-primary">BIG</strong> and go{" "}
            <strong className="text-primary">BOLD</strong>! It&rsquo;s
            America&rsquo;s 250th birthday!
          </p>
          <p>
            Arrive at 7pm for pulled pork BBQ sandwiches, Margarita Man frozen
            cocktails, sodas, water, and kid drinks. BYOB beer.
          </p>
          <p>
            There will be a special performance by the Columbus Police &amp;
            Fire Bagpipes prior to the fireworks. So get there early to enjoy.
          </p>
        </div>

        <div className="flex items-center justify-center gap-0 h-3 max-w-xs mx-auto rounded-full overflow-hidden">
          <div className="flex-1 h-full bg-secondary" />
          <div className="flex-1 h-full bg-white" />
          <div className="flex-1 h-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
