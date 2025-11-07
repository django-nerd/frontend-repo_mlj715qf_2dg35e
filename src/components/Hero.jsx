import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ChevronDown, Rocket, Volume2, VolumeX } from 'lucide-react';

// Simple particles background using canvas
function TechParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.6,
      a: Math.random() * 0.5 + 0.3,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // subtle grid glow
      const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grd.addColorStop(0, 'rgba(0, 145, 255, 0.04)');
      grd.addColorStop(1, 'rgba(0, 255, 255, 0.02)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        // draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 200, 255, ${p.a})`;
        ctx.shadowColor = 'rgba(0, 180, 255, 0.6)';
        ctx.shadowBlur = 8;
        ctx.fill();

        // connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0, 200, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}

export default function Hero() {
  const [audioOn, setAudioOn] = useState(false);
  const audioCtxRef = useRef(null);
  const gainRef = useRef(null);

  const toggleAudio = async () => {
    if (!audioOn) {
      // Create subtle ambient pad with WebAudio (no external files)
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const master = ctx.createGain();
      master.gain.value = 0.03; // very subtle
      master.connect(ctx.destination);

      // two detuned oscillators for a lush pad
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.value = 220; // A3
      const o1g = ctx.createGain();
      o1g.gain.value = 0.2;
      osc1.connect(o1g).connect(master);

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.value = 277; // C#4
      osc2.detune.value = 7;
      const o2g = ctx.createGain();
      o2g.gain.value = 0.15;
      osc2.connect(o2g).connect(master);

      // slow filter sweep for movement
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1200;
      master.disconnect();
      master.connect(filter).connect(ctx.destination);

      osc1.start();
      osc2.start();

      audioCtxRef.current = ctx;
      gainRef.current = master;
      setAudioOn(true);
    } else {
      audioCtxRef.current?.close();
      audioCtxRef.current = null;
      gainRef.current = null;
      setAudioOn(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Particles overlay */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <TechParticles />
      </div>

      {/* Gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      <div className="pointer-events-none absolute -inset-x-20 -top-40 h-80 blur-3xl" style={{
        background: 'radial-gradient(60% 60% at 50% 40%, rgba(0,153,255,0.35) 0%, rgba(0,0,0,0) 70%)'
      }} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-32 sm:pt-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(0,200,255,0.25)]"
        >
          <Rocket className="h-4 w-4 text-cyan-300" />
          <span className="text-sm tracking-wide text-cyan-200">Associate Software Engineer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-8 bg-gradient-to-br from-cyan-200 via-white to-blue-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          Karthickumar P
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-3 text-lg sm:text-xl text-cyan-100/90"
        >
          Backend Developer | Cloud Specialist | AWS Certified
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex items-center gap-4"
        >
          <a href="#about" className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-6 py-3 text-cyan-200 backdrop-blur-md ring-1 ring-cyan-400/40 hover:bg-cyan-400/30 hover:text-white transition shadow-[0_0_30px_rgba(0,200,255,0.25)]">
            <span>View My Work</span>
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <button onClick={toggleAudio} className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-3 text-cyan-200 backdrop-blur-md ring-1 ring-white/10 hover:bg-white/10 transition">
            {audioOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}<span>{audioOn ? 'Sound On' : 'Sound Off'}</span>
          </button>
        </motion.div>
      </div>

      {/* bottom cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cyan-300/70">
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
}
