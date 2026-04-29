export default function Tradition() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
          A Tradition Like No Other
        </h2>
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
          Every year, friends and family come together in Bill&apos;s backyard to
          celebrate the red, white, and blue. It&apos;s an evening of smoky
          barbeque, ice-cold drinks, kids running through sparklers, and a
          sky-filling fireworks finale you won&apos;t forget. Whether
          you&apos;re a first-timer or a seasoned veteran of the bash,
          you&apos;re family here.
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
