import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Products from "../components/Products";
import Delivery from "../components/Delivery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Whatsapp from "../components/Whatsapp";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Minerals from "../components/Minerals";
import Map from "../components/Map";
import ScrollTop from "../components/ScrollTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Stats />
      <Products />
      <Minerals />
      <Delivery />
      <Map />
      <Testimonials />
      <Contact />
      <FAQ />
      <Whatsapp />
      <ScrollTop />
      <Footer />
    </>
  );
}