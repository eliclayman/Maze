import { motion } from 'framer-motion';

export default function TopNav() {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/48 backdrop-blur-2xl"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-sm font-semibold text-blue-100 shadow-[0_0_30px_rgba(80,133,255,0.18)]">
            M
          </div>
          <div>
            <p className="font-display text-lg font-semibold tracking-tight text-white">Maze</p>
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Indoor Navigation Platform</p>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
          <a className="transition hover:text-white" href="#how-it-works">How It Works</a>
          <a className="transition hover:text-white" href="#preview">Preview</a>
          <a className="transition hover:text-white" href="#routing">Routing</a>
          <a className="transition hover:text-white" href="#future">Future Vision</a>
        </nav>

        <div className="rounded-full border border-blue-300/14 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-blue-100">
          Closed Network
        </div>
      </div>
    </motion.header>
  );
}
