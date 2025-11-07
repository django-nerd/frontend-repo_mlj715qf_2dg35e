import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceCerts from './components/ExperienceCerts';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-cyan-200">Karthickumar P</a>
          <nav className="hidden gap-6 sm:flex">
            <a href="#about" className="text-cyan-100/80 hover:text-white">About</a>
            <a href="#skills" className="text-cyan-100/80 hover:text-white">Skills</a>
            <a href="#experience" className="text-cyan-100/80 hover:text-white">Experience</a>
            <a href="#contact" className="text-cyan-100/80 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <About />
        <Skills />
        <ExperienceCerts />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-black/70 py-6 text-center text-cyan-100/60">
        © {new Date().getFullYear()} Karthickumar P • Built with love and flame-blue energy.
      </footer>
    </div>
  );
}
