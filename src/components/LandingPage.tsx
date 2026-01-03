import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Certificates from './Certificates';
import Contact from './Contact';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certificates />
      <Contact />
      
      <footer className="bg-neutral-900 text-white py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-neutral-400 text-sm sm:text-base">© 2025 Amrath Prasad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}