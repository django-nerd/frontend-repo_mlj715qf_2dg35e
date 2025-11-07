import React, { useEffect, useRef, useState } from 'react';

// Lightweight custom cursor with graceful disabling on touch/reduced-motion
export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isCoarse || reduced || window.innerWidth < 768) {
      setEnabled(false);
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    let ticking = false;
    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          if (dot) {
            dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
          }
          ticking = false;
        });
      }
    };

    let raf;
    const tick = () => {
      cursorX += (mouseX - cursorX) * 0.18; // slightly snappier follow
      cursorY += (mouseY - cursorY) * 0.18;
      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove, { passive: true });

    // Magnetic hover on elements with data-cursor="magnet"
    const targets = Array.from(document.querySelectorAll('[data-cursor="magnet"]'));
    const onEnter = () => cursor?.classList.add('scale-125', 'bg-orange-500/20');
    const onLeave = () => cursor?.classList.remove('scale-125', 'bg-orange-500/20');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* trailing dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-50 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/90 will-change-transform"
      />
      {/* main ring */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-50 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/70 backdrop-blur-sm transition-transform duration-150 will-change-transform"
      />
    </>
  );
}
