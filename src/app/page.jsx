import About from "./components/About";
import Hero from "./components/Hero";
import PortafolioComponent from "./components/Portafolio";
import Skills from "./components/Skills";

export default function Home() {

  return (
    <div>
      <Hero/>
      <About/>
      <PortafolioComponent/>
      <Skills/>
    </div>
  );
}
