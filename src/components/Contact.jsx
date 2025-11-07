import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl bg-gradient-to-br from-cyan-200 via-white to-blue-400 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => { e.preventDefault(); alert('Thanks! Your message was not actually sent in this demo.'); }}
            className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-lg"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-cyan-100/80">Name</label>
                <input required className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:ring-cyan-400/40" />
              </div>
              <div>
                <label className="text-sm text-cyan-100/80">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:ring-cyan-400/40" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-cyan-100/80">Message</label>
              <textarea rows={5} required className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:ring-cyan-400/40" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-xl bg-cyan-500/20 px-5 py-2.5 text-cyan-200 ring-1 ring-cyan-400/40 transition hover:bg-cyan-400/30 hover:text-white shadow-[0_0_30px_rgba(0,200,255,0.25)]">Send Message</button>
          </motion.form>

          {/* details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-4"
          >
            <a href="mailto:karthickumar1810@gmail.com" className="group inline-flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-white/5 px-5 py-4 backdrop-blur-lg hover:bg-white/10">
              <Mail className="h-5 w-5 text-cyan-300" />
              <span className="text-cyan-100">karthickumar1810@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/karthic-kumar-0116bb220" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-white/5 px-5 py-4 backdrop-blur-lg hover:bg-white/10">
              <Linkedin className="h-5 w-5 text-cyan-300" />
              <span className="text-cyan-100">linkedin.com/in/karthic-kumar-0116bb220</span>
            </a>
            <div className="inline-flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-white/5 px-5 py-4 backdrop-blur-lg">
              <Phone className="h-5 w-5 text-cyan-300" />
              <span className="text-cyan-100">+91 •••• ••••</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
