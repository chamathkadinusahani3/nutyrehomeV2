import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarCheckIcon, SearchIcon } from 'lucide-react';

export function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-black py-20 text-white">
      <div className="pointer-events-none absolute right-[-60px] top-[-80px] h-72 w-72 rounded-full bg-brand-yellow/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-[-60px] bottom-[-80px] h-72 w-72 rounded-full bg-brand-yellow/5 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">

        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Need New Tyres?
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-neutral-300">
          Search thousands of tyres, compare prices, and book professional
          fitting in minutes with Nutyre.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/#find-tyres"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-yellow px-7 py-4 font-extrabold uppercase tracking-wide text-brand-black transition hover:bg-brand-amber">

            <SearchIcon size={17} />
            Search Tyres
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-7 py-4 font-extrabold uppercase tracking-wide text-white transition hover:border-brand-yellow hover:text-brand-yellow">

            <CalendarCheckIcon size={17} />
            Book Fitting
            <ArrowRightIcon size={15} />
          </a>
        </div>
      </motion.div>
    </section>);

}
