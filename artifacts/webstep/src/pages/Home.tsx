import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { WhyChoose } from "@/components/WhyChoose";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ef4444] selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
