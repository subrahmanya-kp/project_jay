import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import Services from "@/components/Services";
import About from "@/components/About";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Dermatologist in Bangalore | Pranava Skin, Hair & Aesthetics Clinic",
  description:
    "Expert dermatology, hair care and aesthetic treatments in Bangalore. Board-certified dermatologist. Acne, pigmentation, hair loss, laser, anti-ageing. Book a consultation.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MarqueeTicker />
        <Services />
        <About />
        <Results />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
