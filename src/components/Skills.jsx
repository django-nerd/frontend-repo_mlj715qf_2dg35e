import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, GitBranch, Play, Code, Server, Boxes } from 'lucide-react';

const skills = [
  { name: 'Python', level: 90, icon: Code, color: 'from-yellow-300 to-orange-400' },
  { name: 'Node.js', level: 85, icon: Server, color: 'from-green-300 to-emerald-400' },
  { name: 'AWS', level: 88, icon: Cloud, color: 'from-cyan-300 to-blue-400' },
  { name: 'PostgreSQL', level: 80, icon: Database, color: 'from-sky-300 to-blue-500' },
  { name: 'DynamoDB', level: 78, icon: Boxes, color: 'from-indigo-300 to-purple-500' },
  { name: 'Git', level: 86, icon: GitBranch, color: 'from-zinc-300 to-slate-500' },
  { name: 'Playwright', level: 75, icon: Play, color: 'from-emerald-300 to-green-500' },
];

function SkillCard({ name, level, icon: Icon, color }) {
  return (
    <motion.div
      whileHover={{ y: -8, rotateX: 2 }}
      className="group rounded-2xl border border-cyan-400/20 bg-white/5 p-5 backdrop-blur-lg transition-all"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 shrink-0">
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${color} opacity-70 blur-md`} />
          <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-black/60 ring-1 ring-white/10">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-white">{name}</h4>
            <span className="text-sm text-cyan-100/70">{level}%</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`h-full rounded-full bg-gradient-to-r ${color}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl bg-gradient-to-br from-cyan-200 via-white to-blue-400 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>

        {/* Tech strip */}
        <div className="mt-14 overflow-hidden">
          <div className="animate-[scroll_25s_linear_infinite] whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {skills.concat(skills).map((s, i) => (
              <span key={i} className="mx-6 inline-flex items-center gap-2 text-cyan-100/80">
                <s.icon className="h-5 w-5" /> {s.name}
              </span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        `}</style>
      </div>
    </section>
  );
}
