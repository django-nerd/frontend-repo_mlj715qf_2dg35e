import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = 80;
  const rect = el.getBoundingClientRect();
  const targetY = rect.top + window.pageYOffset - headerOffset;
  window.scrollTo({ top: Math.max(targetY, 0), behavior: 'smooth' });
}

export default function Hero() {
  const onClick = (e, id) => { e.preventDefault(); smoothScrollTo(id); };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-orange-500/10">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/rwKT-aWtlkdY-8UV/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignette overlay - non-blocking for pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(255,255,255,0.18),transparent),radial-gradient(800px_400px_at_90%_100%,rgba(255,255,255,0.1),transparent)]" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-5xl font-extrabold tracking-tight text-zinc-900 md:text-6xl lg:text-7xl"
        >
          Karthickumar P
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-zinc-700 md:text-xl"
        >
          Backend-first Developer • Cloud & Database enthusiast • Building playful, interactive web experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e)=>onClick(e,'projects')}
            className="group rounded-full bg-zinc-900 px-6 py-3 text-white shadow-lg shadow-orange-500/20 transition hover:bg-zinc-800"
          >
            See Projects
          </a>
          <a
            href="#contact"
            onClick={(e)=>onClick(e,'contact')}
            className="group rounded-full border border-zinc-300 bg-white/90 px-6 py-3 text-zinc-900 backdrop-blur transition hover:border-zinc-400"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
