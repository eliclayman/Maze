import { motion } from 'framer-motion';

const floatingNodes = [
  { top: '16%', left: '10%', delay: 0.2 },
  { top: '26%', left: '80%', delay: 0.6 },
  { top: '56%', left: '18%', delay: 0.9 },
  { top: '64%', left: '72%', delay: 0.4 },
  { top: '34%', left: '58%', delay: 1.1 },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/8" id="top">
      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(7,12,22,0.94),rgba(2,6,14,0.88)),radial-gradient(circle_at_50%_45%,rgba(82,127,255,0.16),transparent_30%)]" />
      <div className="absolute inset-0 opacity-45 blueprint-grid" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-[10%] top-[18%] h-[2px] w-[62%] bg-[linear-gradient(90deg,transparent,rgba(121,151,255,0.9),transparent)] shadow-[0_0_30px_rgba(101,136,255,0.45)]"
          animate={{ x: ['0%', '6%', '0%'], opacity: [0.35, 0.95, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'rotate(-22deg)' }}
        />
        <motion.div
          className="absolute right-[-16%] top-[14%] h-[2px] w-[55%] bg-[linear-gradient(90deg,transparent,rgba(105,140,255,0.8),transparent)] shadow-[0_0_24px_rgba(89,120,255,0.4)]"
          animate={{ x: ['0%', '-8%', '0%'], opacity: [0.3, 0.85, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
          style={{ transform: 'rotate(118deg)' }}
        />
        <motion.div
          className="absolute left-[12%] top-[62%] h-[2px] w-[76%] bg-[linear-gradient(90deg,transparent,rgba(132,171,255,0.95),transparent)] shadow-[0_0_26px_rgba(88,120,255,0.42)]"
          animate={{ x: ['0%', '4%', '0%'], opacity: [0.25, 0.9, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          style={{ transform: 'rotate(-28deg)' }}
        />

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 960" fill="none" preserveAspectRatio="none">
          <motion.path
            d="M180 760C320 690 366 570 508 540C630 512 702 596 820 566C950 533 996 410 1128 366C1214 337 1296 340 1360 320"
            stroke="url(#routeGlow)"
            strokeWidth="2.4"
            strokeLinecap="round"
            initial={{ pathLength: 0.08, opacity: 0.15 }}
            animate={{ pathLength: [0.08, 1, 0.08], opacity: [0.15, 1, 0.15] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id="routeGlow" x1="180" y1="760" x2="1360" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(255,255,255,0)" />
              <stop offset="0.32" stopColor="#6aa0ff" />
              <stop offset="0.7" stopColor="#a9c6ff" />
              <stop offset="1" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
        </svg>

        {floatingNodes.map((node, index) => (
          <motion.div
            key={index}
            className="absolute h-3 w-3 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(123,164,255,0.85)]"
            style={{ top: node.top, left: node.left }}
            animate={{ scale: [0.9, 1.45, 0.9], opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: node.delay }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[88vh] w-full max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.42em] text-blue-100/70"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Classified Spatial Intelligence
          </motion.p>

          <motion.h1
            className="mt-6 max-w-4xl font-display text-6xl font-semibold tracking-[-0.07em] text-white sm:text-7xl md:text-8xl lg:text-[8.8rem]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
          >
            MAZE
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.16 }}
          >
            Indoor navigation for complex spaces.
          </motion.p>

          <motion.div
            className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,540px)_220px]"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.24 }}
          >
            <div className="glass-panel group rounded-[1.9rem] p-4 sm:p-5">
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-3 rounded-[1.35rem] border border-white/8 bg-slate-950/55 px-4 py-4 transition group-hover:border-blue-300/20">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-blue-300/14 bg-blue-400/10 text-blue-100">⌘</div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Search Target</p>
                    <p className="mt-1 text-sm text-slate-200">Faculty room, seminar hall, accessibility route</p>
                  </div>
                </div>
                <a
                  href="#preview"
                  className="inline-flex items-center justify-center rounded-full border border-blue-300/14 bg-blue-400/12 px-5 py-3 text-sm font-semibold text-blue-50 shadow-[0_0_24px_rgba(75,118,255,0.14)] transition hover:border-blue-200/30 hover:bg-blue-400/18"
                >
                  Enter System
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-[1.9rem] p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Live state</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-blue-300 shadow-[0_0_16px_rgba(110,154,255,0.85)]" />
                <p className="text-sm text-slate-200">Route fabric active</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Blueprint layers, dynamic paths, and room intelligence converge into one spatial interface.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
