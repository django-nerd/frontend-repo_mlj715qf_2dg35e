import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';

function TimelineItem({ title, period, points }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-1 top-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,200,255,0.8)]" />
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-sm text-cyan-100/70">{period}</p>
      <ul className="mt-3 list-disc space-y-1 pl-4 text-cyan-100/90">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function CertCard({ name, link }) {
  return (
    <motion.a
      whileHover={{ y: -6, boxShadow: '0 0 40px rgba(0,200,255,0.25)' }}
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-lg transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 opacity-60 blur-md" />
          <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-black/60 ring-1 ring-white/10">
            <Award className="h-5 w-5 text-white" />
          </div>
        </div>
        <div>
          <h5 className="font-semibold text-white">{name}</h5>
          <p className="text-xs text-cyan-100/70">View certificate</p>
        </div>
      </div>
      <div className="mt-4 h-0.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div initial={{ x: '-100%' }} whileHover={{ x: 0 }} className="h-full w-full bg-gradient-to-r from-white/0 via-white/60 to-white/0" />
      </div>
    </motion.a>
  );
}

export default function ExperienceCerts() {
  return (
    <section id="experience" className="relative w-full bg-gradient-to-b from-black via-slate-950 to-black py-24 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-2xl font-bold sm:text-3xl"
            >
              <Briefcase className="h-6 w-6 text-cyan-300" /> Experience
            </motion.h3>

            <div className="mt-6 border-l border-cyan-400/20 pl-6">
              <TimelineItem
                title="Meyi Cloud Solutions — Associate Software Engineer"
                period="Sept 2022 – Present"
                points={[
                  'Led a 5-member backend team',
                  'Improved API performance by 30%+',
                  'Built scraping automation with Playwright',
                  'Deployed serverless architecture on AWS',
                ]}
              />
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-2xl font-bold sm:text-3xl"
            >
              <Award className="h-6 w-6 text-cyan-300" /> Certifications
            </motion.h3>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <CertCard name="AWS Certified Developer – Associate" link="https://aws.amazon.com/certification/certified-developer-associate/" />
              <CertCard name="AWS Certified Cloud Practitioner" link="https://aws.amazon.com/certification/certified-cloud-practitioner/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
