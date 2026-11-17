import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ eyebrow, title, intro }) => (
  <div className="max-w-3xl">
    <Reveal>
      <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-4 flex items-center gap-3">
        <span className="w-2 h-2 bg-white rounded-full pulse-dot inline-block" />
        {eyebrow}
      </p>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.15] text-white">
        {title}
      </h2>
    </Reveal>
    {intro && (
      <Reveal delay={0.16}>
        <p className="mt-5 text-base text-zinc-400 leading-relaxed">{intro}</p>
      </Reveal>
    )}
  </div>
);
