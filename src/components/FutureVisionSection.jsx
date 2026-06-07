import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader.jsx';

export default function FutureVisionSection() {
  return (
    <section className="relative px-5 py-24 sm:px-6 lg:px-8" id="future">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="Future Vision"
          title="The future of campuses is navigable, ambient, and spatially intelligent."
          body="Maze is a foundation for campuses that behave more like responsive systems than static collections of buildings."
          align="center"
        />

        <motion.div
          className="glass-panel mt-16 overflow-hidden rounded-[2.2rem] p-8 sm:p-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 opacity-30 blueprint-grid" />
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h3 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                When buildings become readable, campuses become radically more human.
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                The same platform that guides a student to a seminar room can eventually orchestrate visitor arrivals, accessibility support, emergency routing, and real-time spatial awareness across an entire university network.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                'Room-level navigation for every visitor',
                'Blueprint-aware route generation',
                'Accessibility-first campus logic',
                'Operational intelligence for facilities teams',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] px-5 py-4 text-sm text-slate-200"
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
                  whileHover={{ borderColor: 'rgba(127,176,255,0.28)', x: -4 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
