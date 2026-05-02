import Hero from "@/components/Hero";
import NeedToKnow from "@/components/NeedToKnow";
import Tradition from "@/components/Tradition";
import EventDetails from "@/components/EventDetails";
import Schedule from "@/components/Schedule";
import Funding from "@/components/Funding";
import FAQ from "@/components/FAQ";
import Highlights from "@/components/Highlights";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <NeedToKnow />
      <Tradition />
      <EventDetails />
      <Schedule />
      <Funding />
      <FAQ />
      <Highlights />
      <Footer />
    </main>
  );
}
