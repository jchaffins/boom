import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground py-12 px-4">
      <div className="absolute top-0 left-0 right-0 flex h-2">
        <div className="flex-1 bg-secondary" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-secondary" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-secondary" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <p className="font-body text-white/50 text-sm flex items-center justify-center gap-1">
          Made with <Heart className="h-4 w-4 text-secondary fill-current" />{" "}
          in the USA
        </p>
      </div>
    </footer>
  );
}
