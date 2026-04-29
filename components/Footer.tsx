import { Heart } from "lucide-react";

const GOFUNDME_URL = "https://www.gofundme.com/placeholder";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground py-16 px-4">
      <div className="absolute top-0 left-0 right-0 flex h-2">
        <div className="flex-1 bg-secondary" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-secondary" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-secondary" />
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="font-display text-3xl font-bold">Help Make It Happen</h2>
        <p className="font-body text-white/70 text-lg">
          This show is funded entirely by generous folks like you. Every dollar
          goes toward bigger, brighter, and louder fireworks. Let&apos;s make
          2026 the best year yet!
        </p>
        <a href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">
          <button className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold/90 text-navy font-body text-lg px-10 h-12 uppercase tracking-wider font-bold mt-4 transition-colors">
            <Heart className="mr-1 h-5 w-5" />
            Donate on GoFundMe
          </button>
        </a>

        <div className="pt-8 border-t border-white/20 mt-8">
          <p className="font-body text-white/50 text-sm flex items-center justify-center gap-1">
            Made with{" "}
            <Heart className="h-4 w-4 text-secondary fill-current" /> in the
            USA
          </p>
          <p className="font-body text-white/40 mt-2 text-base">
            Questions?
            <br />
            Bill: xxx-xxx-xxxx
            <br />
            Jen: xxx-xxx-xxxx
          </p>
        </div>
      </div>
    </footer>
  );
}
