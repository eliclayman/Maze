import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader.jsx';

const steps = [
  {
    title: 'Read the building',
    body: 'Convert floor plans, landmarks, and room metadata into a structured indoor graph that feels legible to humans.',
  },
  {
    title: 'Model the route',
    body: 'Blend spatial rules, access constraints, and intent signals into a tactical path layer for each destination.',
  },
  {
    title: 'Guide the user',
    body: 'Deliver calm, precise directions through a minimal interface built for motion, orientation, and trust.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative border-b border-white/8 px-5 py-24 sm:px-6 lg:px-8" id="how-it-works">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="How It Works"
          title="A spatial operating layer for buildings that refuse to be simple."
          body="Maze treats indoor navigation as a living architectural system, not a list of directions buried in a help page."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="glass-panel rounded-[1.8rem] p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.08 }}
              whileHover={{ y: -6, borderColor: 'rgba(130, 170, 255, 0.28)' }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/14 bg-blue-400/10 text-sm font-semibold text-blue-100">
                0{index + 1}
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{step.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
