import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Server } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -6, boxShadow: '0 0 40px rgba(0,200,255,0.25)' }}
    className="group rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-lg transition-all"
  >
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 ring-1 ring-cyan-400/30">
      <Icon className="h-6 w-6 text-cyan-300" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-cyan-100/80">{desc}</p>
  </motion.div>
);

export default function About() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black via-slate-950 to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 blur-3xl" style={{
        background: 'radial-gradient(60% 60% at 50% 40%, rgba(0,153,255,0.25) 0%, rgba(0,0,0,0) 70%)'
      }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl bg-gradient-to-br from-cyan-200 via-white to-blue-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-6 max-w-3xl text-center text-cyan-100/90"
        >
          I’m a passionate backend developer with 3+ years of experience building scalable, cloud-based web applications using Python, Node.js, and AWS.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature icon={Server} title="Backend" desc="APIs, microservices, and performance optimization using Python & Node.js." />
          <Feature icon={Cloud} title="Cloud" desc="Designing resilient serverless architectures with AWS best practices." />
          <Feature icon={Database} title="Databases" desc="Relational & NoSQL expertise: PostgreSQL, DynamoDB, and data modeling." />
        </div>
      </div>
    </section>
  );
}
