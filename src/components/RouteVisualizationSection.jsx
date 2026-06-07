import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader.jsx';

const routeStops = [
  'Campus perimeter',
  'Security threshold',
  'Atrium spine',
  'Vertical core',
  'Target room',
];

export default function RouteVisualizationSection() {
  return (
    <section className="relative border-b border-white/8 px-5 py-24 sm:px-6 lg:px-8" id="routing">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="Route Visualization"
          title="Paths that feel alive, directional, and impossible to misread."
          body="The interface doesn’t just tell you where to go. It reveals how the building unfolds around the route in real time."
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            className="glass-panel relative overflow-hidden rounded-[2rem] p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 opacity-35 blueprint-grid" />
            <div className="relative rounded-[1.6rem] border border-white/8 bg-slate-950/62 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Live route demo</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">Adaptive path surface</h3>
                </div>
                <div className="rounded-full border border-blue-300/16 bg-blue-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-blue-100">
                  14 nodes mapped
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {routeStops.map((stop, index) => (
                  <motion.div
                    key={stop}
                    className="relative overflow-hidden rounded-[1.15rem] border border-white/7 bg-white/[0.03] px-4 py-4"
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.34 }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
                  >
                    <motion.div
                      className="absolute inset-y-0 left-0 w-1 bg-blue-300/90 shadow-[0_0_18px_rgba(127,176,255,0.7)]"
                      animate={{ opacity: [0.35, 1, 0.35] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.1 }}
                    />
                    <div className="flex items-center justify-between gap-4 pl-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Node {index + 1}</p>
                        <p className="mt-2 text-sm font-medium text-slate-200">{stop}</p>
                      </div>
                      <div className="text-blue-200">→</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel rounded-[2rem] p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.08 }}
          >
            <div className="rounded-[1.6rem] border border-white/8 bg-slate-950/62 p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Signal profile</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">Wayfinding confidence layer</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Use visual pulses, lighting cues, and node emphasis to signal certainty, route priority, and building transitions.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  ['Route certainty', '94%'],
                  ['Accessibility readiness', 'Enabled'],
                  ['Decision points mapped', '18'],
                  ['Campus graph sync', 'Online'],
                ].map(([label, value], index) => (
                  <div key={label} className="border-b border-white/7 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">{label}</p>
                    <motion.p
                      className="mt-2 text-lg font-semibold text-white"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                    >
                      {value}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
