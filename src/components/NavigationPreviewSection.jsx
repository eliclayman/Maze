import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader.jsx';

const destinations = ['B201 Seminar Hall', 'Library Spine', 'North Elevator Core', 'Accessible Entry'];
const nodes = [
  { x: '14%', y: '68%' },
  { x: '31%', y: '50%' },
  { x: '54%', y: '41%' },
  { x: '74%', y: '24%' },
  { x: '86%', y: '18%' },
];

export default function NavigationPreviewSection() {
  return (
    <section className="relative border-b border-white/8 px-5 py-24 sm:px-6 lg:px-8" id="preview">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[460px_minmax(0,1fr)] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Interactive Preview"
            title="Search like you are querying a building's nervous system."
            body="Every layer is built to feel tactical, spatial, and impossible to confuse with a generic map widget."
          />

          <motion.div
            className="glass-panel mt-10 rounded-[1.9rem] p-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="rounded-[1.5rem] border border-white/8 bg-slate-950/58 p-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Search Console</p>
              <div className="mt-4 rounded-[1.2rem] border border-blue-300/14 bg-white/[0.03] px-4 py-4 text-sm text-slate-200 shadow-[0_0_30px_rgba(80,120,255,0.08)]">
                Search a building, room cluster, access path, or live route intent...
              </div>
              <div className="mt-5 grid gap-3">
                {destinations.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center justify-between rounded-[1rem] border border-white/7 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 * index }}
                    whileHover={{ borderColor: 'rgba(123,164,255,0.28)', x: 6 }}
                  >
                    <span>{item}</span>
                    <span className="text-blue-200">→</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="glass-panel relative overflow-hidden rounded-[2rem] p-5"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 opacity-35 blueprint-grid" />
          <div className="relative rounded-[1.5rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(68,100,255,0.18),transparent_24%),linear-gradient(180deg,rgba(8,12,23,0.92),rgba(7,11,20,0.96))] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Building 201</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">Indoor navigation preview</h3>
              </div>
              <div className="rounded-full border border-blue-300/16 bg-blue-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-blue-100">
                Mount Scopus
              </div>
            </div>

            <div className="relative mt-8 aspect-[1.25/1] rounded-[1.5rem] border border-white/8 bg-slate-950/62 p-4">
              <div className="absolute inset-4 rounded-[1.2rem] border border-white/6 bg-[linear-gradient(180deg,rgba(9,15,28,0.85),rgba(6,10,18,0.95))]" />
              <div className="absolute inset-4 opacity-40 blueprint-grid" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 480" fill="none">
                <motion.path
                  d="M76 390C122 352 146 306 192 288C240 268 286 284 330 255C383 220 404 170 454 145C484 130 516 119 536 98"
                  stroke="url(#previewPath)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0.08, opacity: 0.15 }}
                  whileInView={{ pathLength: [0.08, 1, 0.08], opacity: [0.15, 1, 0.15] }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                />
                <defs>
                  <linearGradient id="previewPath" x1="76" y1="390" x2="536" y2="98" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgba(255,255,255,0)" />
                    <stop offset="0.42" stopColor="#7fb0ff" />
                    <stop offset="0.78" stopColor="#dbe8ff" />
                    <stop offset="1" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>
              </svg>

              {nodes.map((node, index) => (
                <motion.div
                  key={index}
                  className="absolute h-3.5 w-3.5 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(127,176,255,0.92)]"
                  style={{ left: node.x, top: node.y }}
                  animate={{ scale: [0.85, 1.45, 0.85], opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.22 }}
                />
              ))}

              <motion.div
                className="absolute bottom-5 left-5 rounded-2xl border border-white/8 bg-slate-950/70 px-4 py-3 text-xs uppercase tracking-[0.24em] text-slate-400"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                Spatial graph ready
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
