import React from 'react';

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = 80; // account for sticky header
  const rect = el.getBoundingClientRect();
  const targetY = rect.top + window.pageYOffset - headerOffset;
  window.scrollTo({ top: Math.max(targetY, 0), behavior: 'smooth' });
}

export default function Header() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/60 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" onClick={(e)=>handleNavClick(e,'home')} className="font-display text-xl font-bold tracking-tight text-zinc-900" data-cursor="magnet">
          KP
        </a>
        <nav className="flex items-center gap-5 text-sm text-zinc-700">
          <a href="#about" onClick={(e)=>handleNavClick(e,'about')} className="hover:text-zinc-900 transition" data-cursor="magnet">About</a>
          <a href="#skills" onClick={(e)=>handleNavClick(e,'skills')} className="hover:text-zinc-900 transition" data-cursor="magnet">Skills</a>
          <a href="#projects" onClick={(e)=>handleNavClick(e,'projects')} className="hover:text-zinc-900 transition" data-cursor="magnet">Projects</a>
          <a href="#experience" onClick={(e)=>handleNavClick(e,'experience')} className="hover:text-zinc-900 transition" data-cursor="magnet">Experience</a>
          <a href="#contact" onClick={(e)=>handleNavClick(e,'contact')} className="hover:text-zinc-900 transition" data-cursor="magnet">Contact</a>
        </nav>
      </div>
    </header>
  );
}
