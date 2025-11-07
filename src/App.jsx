import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Header from './components/Header';
import CustomCursor from './components/CustomCursor';

// Note: Other sections (About, Skills, Experience, Contact) were created earlier per context.
// We import them if present. If not, the app will still run with these core sections.
import About from './components/About';
import Skills from './components/Skills';
import ExperienceCerts from './components/ExperienceCerts';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-orange-50 to-white text-zinc-900">
      <CustomCursor />
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section id="experience">
          <ExperienceCerts />
        </section>
        <Contact />
      </main>
      <footer className="border-t border-zinc-200/60 py-6 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Karthickumar P — Crafted with care.
      </footer>
    </div>
  );
}
