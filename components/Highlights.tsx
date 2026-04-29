const videos = [
  { id: "SraApjhUBBY", title: "Meadowmoore Boom Highlights" },
  { id: "k5J8khrZ-14", title: "Meadowmoore Boom Highlights" },
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
          {videos.map((v) => (
            <div
              key={v.id}
              className="rounded-lg overflow-hidden border-4 border-card shadow-md bg-card"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-3">
                <span className="font-body text-sm font-bold text-foreground">
                  {v.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
