import { AnimatePresence, motion } from 'framer-motion';

export default function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#02040a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
        >
          <div className="relative text-center">
            <motion.div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.8rem] border border-blue-300/14 bg-blue-400/10 text-2xl font-semibold text-blue-100 shadow-[0_0_40px_rgba(86,136,255,0.18)]"
              animate={{ scale: [1, 1.06, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              M
            </motion.div>
            <p className="mt-6 text-[11px] uppercase tracking-[0.42em] text-blue-100/60">Initializing spatial intelligence</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
