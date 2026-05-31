import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dermatologist in Bangalore | Pranava Skin, Hair & Aesthetics Clinic",
  description:
    "Expert dermatology, hair care and aesthetic treatments in Bangalore. Board-certified dermatologist. Acne, pigmentation, hair loss, laser, anti-ageing. Book a consultation.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
