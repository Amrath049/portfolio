import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import ProjectsBrief from "./ProjectsBrief";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <ProjectsBrief />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
