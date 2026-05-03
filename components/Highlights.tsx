const videos = [
  "SraApjhUBBY",
  "pn3_aGSvFdI",
  "rWq_y8lOF84",
  "vNAGfxLgSw0",
  "ku3kBz9N-Bo",
  "k5J8khrZ-14",
  "093PgcAf3rc",
  "YQZgu28Z2Lo",
];

export default function Highlights() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-3">
          Past Years&apos; Highlights
        </h2>
        <p className="font-body text-muted-foreground text-center mb-10">
          Great memories from celebrations past
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((id) => (
            <div
              key={id}
              className="rounded-lg overflow-hidden border-4 border-card shadow-md bg-card"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Meadowmoore Boom Highlights"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
