import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, body, align = 'left' }) {
  return (
    <motion.div
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-blue-200/70">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-8 text-slate-400">{body}</p> : null}
    </motion.div>
  );
}
