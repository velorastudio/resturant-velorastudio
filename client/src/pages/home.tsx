import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Chef } from "@/components/sections/Chef";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reservation } from "@/components/sections/Reservation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Chef />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
