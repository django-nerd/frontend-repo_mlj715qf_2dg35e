import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/60 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="font-display text-xl font-bold tracking-tight text-zinc-900" data-cursor="magnet">
          KP
        </a>
        <nav className="flex items-center gap-5 text-sm text-zinc-700">
          <a href="#about" className="hover:text-zinc-900 transition" data-cursor="magnet">About</a>
          <a href="#skills" className="hover:text-zinc-900 transition" data-cursor="magnet">Skills</a>
          <a href="#projects" className="hover:text-zinc-900 transition" data-cursor="magnet">Projects</a>
          <a href="#experience" className="hover:text-zinc-900 transition" data-cursor="magnet">Experience</a>
          <a href="#contact" className="hover:text-zinc-900 transition" data-cursor="magnet">Contact</a>
        </nav>
      </div>
    </header>
  );
}
