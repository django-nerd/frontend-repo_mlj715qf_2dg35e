import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collab Notes',
    description:
      'A collaborative notes app with live cursors, presence, and CRDT syncing. Built with WebSockets and a robust backend.',
    tags: ['React', 'FastAPI', 'WebSockets', 'Tailwind'],
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Cloud Cost Dashboard',
    description:
      'Visualize and optimize multi-cloud spend with custom alerts and rich charts. Focused on actionable insights.',
    tags: ['React', 'Python', 'MongoDB', 'Charts'],
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'API Performance Lab',
    description:
      'Benchmark, profile, and visualize API latency across regions with automated test scenarios.',
    tags: ['FastAPI', 'k6', 'Docker', 'Grafana'],
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
    link: 'https://example.com',
    github: 'https://github.com',
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-zinc-900">{project.title}</h3>
        <p className="mt-2 text-sm text-zinc-600">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 px-3 py-1.5 text-sm text-zinc-800 transition hover:bg-zinc-50"
          >
            <ExternalLink size={16} /> Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 px-3 py-1.5 text-sm text-zinc-800 transition hover:bg-zinc-50"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-zinc-900 md:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-zinc-600">A selection of work showcasing backend craft and playful UIs.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
