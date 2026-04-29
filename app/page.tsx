import Hero from "@/components/Hero";
import Tradition from "@/components/Tradition";
import EventDetails from "@/components/EventDetails";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";
import Highlights from "@/components/Highlights";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <Tradition />
      <EventDetails />
      <Schedule />
      <FAQ />
      <Highlights />
      <Footer />
    </main>
  );
}
