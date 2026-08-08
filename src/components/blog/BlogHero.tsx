import { motion } from 'framer-motion';

type BlogHeroProps = {
  onTagClick: (tag: string) => void;
};

export function BlogHero({ onTagClick }: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-stone-950 pb-24 pt-20 text-white sm:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-yellow/10 blur-[140px]" />
        <motion.div
          animate={{ y: [0, -18, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[8%] top-24 h-24 w-24 rounded-full border border-brand-yellow/20 bg-brand-yellow/5" />

        <motion.div
          animate={{ y: [0, 22, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute right-[10%] top-40 h-16 w-16 rounded-full border border-white/10 bg-white/5" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-24 bottom-[-140px] h-[420px] w-[420px] rounded-full border-[36px] border-brand-yellow/[0.06]" />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-32 bottom-[-160px] h-[360px] w-[360px] rounded-full border-[28px] border-white/[0.04]" />

      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow backdrop-blur">

          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
          Nutyre Journal
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

          Expert Tyre Advice & Automotive Insights
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">

          Stay informed with expert tyre guides, maintenance tips, safety
          advice, buying recommendations, and the latest automotive insights
          from Nutyre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-2">

          <span className="text-xs font-bold uppercase tracking-wide text-neutral-400">
            Popular:
          </span>
          {[
          { label: 'Tyre Safety', value: 'Safety' },
          { label: 'Run Flat', value: 'RunFlat' },
          { label: 'EV Tyres', value: 'EV' },
          { label: 'Maintenance', value: 'Maintenance' },
          { label: 'Buying Guide', value: 'Buying Guide' }].
          map((tag) =>
          <button
            key={tag.value}
            type="button"
            onClick={() => onTagClick(tag.value)}
            className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-bold text-neutral-200 transition hover:border-brand-yellow/60 hover:text-brand-yellow">

              {tag.label}
            </button>
          )}
        </motion.div>
      </div>
    </section>);

}
