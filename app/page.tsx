import Image from "next/image";
import HeroSection from "./components/Hero";
import DarkHeroSection from "./components/Hero";
import LuxuryNavbar from "./components/Navbar";
import ServicesGallery from "./components/Services";
import TransformationsSection from "./components/Gallary";
import LuxuryContact from "./components/Contact";
import TestimonialsSection from "./components/Testimonials";
import LuxuryFooter from "./components/Footer";

export default function Home() {
  return (
    //  <HeroSection/>
    <>
      <LuxuryNavbar />
      <section id="home">
        <DarkHeroSection />
      </section>
      <section id="services">
        <ServicesGallery />
      </section>
      <section id="gallery">
        <TransformationsSection />
      </section>
      <section id="testimonials">

      <TestimonialsSection />
      </section>
      <section id="contact">

      <LuxuryContact />
      </section>
      <LuxuryFooter/>``
    </>
  );
}
