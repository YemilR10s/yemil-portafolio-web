import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PortafolioComponent from "./components/Portafolio";
import Services from "./components/Services";

export default function Home() {

  return (
    <div>
      <Hero/>
      <About/>
      <PortafolioComponent/>
      <Services/>
      <Contact/>
    </div>
  );
}
