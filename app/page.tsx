import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BrandBanner } from "@/components/sections/BrandBanner";
import { Trust } from "@/components/sections/Trust";
import { Services } from "@/components/sections/Services";
import { FeaturedOffer } from "@/components/sections/FeaturedOffer";
import { Benefits } from "@/components/sections/Benefits";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandBanner />
      <Trust />
      <Services />
      <FeaturedOffer />
      <Benefits />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
