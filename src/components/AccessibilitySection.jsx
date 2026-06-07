import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader.jsx';

const cards = [
  {
    title: 'Accessible path logic',
    body: 'Surface elevators, slopes, ramp access, and route certainty without forcing users to decode the building first.',
  },
  {
    title: 'Context-aware routing',
    body: 'Shift between fastest, simplest, and low-cognitive-load routes depending on intent, location, and campus conditions.',
  },
  {
    title: 'Campus-wide intelligence',
    body: 'Connect entrances, lobbies, departments, and transit edges into one routing layer that scales beyond a single building.',
  },
];

export default function AccessibilitySection() {
  return (
    <section className="relative border-b border-white/8 px-5 py-24 sm:px-6 lg:px-8" id="accessibility">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="Accessibility & Smart Routing"
          title="Indoor guidance that respects complexity without making the user feel it."
          body="Maze is built for real campuses where elevators fail, entrances change, and the simplest route is not always the shortest one."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="glass-panel rounded-[1.8rem] p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.08 }}
            >
              <div className="h-1 w-16 rounded-full bg-[linear-gradient(90deg,#7fb0ff,rgba(127,176,255,0.1))] shadow-[0_0_20px_rgba(127,176,255,0.45)]" />
              <h3 className="mt-8 font-display text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{card.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
