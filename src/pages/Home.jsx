import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Services from "../sections/Services";
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default Home;