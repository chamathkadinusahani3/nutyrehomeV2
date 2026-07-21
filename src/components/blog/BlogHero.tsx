import { motion } from 'framer-motion';
import { SearchIcon } from 'lucide-react';
import { blogCategories, trendingTags } from '../../data/blogPosts';

type BlogHeroProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  onTagClick: (tag: string) => void;
};

const stats = [
{ value: '100+', label: 'Expert Articles' },
{ value: '20+', label: 'Categories' },
{ value: '50k+', label: 'Monthly Readers' },
{ value: '4.9★', label: 'Customer Rating' }];


export function BlogHero({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onTagClick
}: BlogHeroProps) {
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

        <motion.form
          role="search"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={(event) => event.preventDefault()}
          className="mx-auto mt-9 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white/95 p-2.5 shadow-2xl shadow-black/40 backdrop-blur sm:flex-row">

          <label className="relative flex flex-1 items-center">
            <SearchIcon size={18} className="pointer-events-none absolute left-4 text-gray-400" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="h-12 w-full rounded-xl border-none bg-transparent pl-11 pr-3 text-sm font-semibold text-brand-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40" />

          </label>
          <select
            value={selectedCategory}
            onChange={(event) => onCategoryChange(event.target.value)}
            aria-label="Filter by category"
            className="h-12 shrink-0 rounded-xl border-none bg-gray-100 px-4 text-sm font-bold text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-yellow/40 sm:w-56">

            <option value="all">All categories</option>
            {blogCategories.map((category) =>
            <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            )}
          </select>
          <button
            type="submit"
            className="h-12 shrink-0 rounded-xl bg-brand-yellow px-6 text-sm font-extrabold uppercase tracking-wide text-brand-black transition hover:bg-brand-amber">

            Search
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2">

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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">

          {stats.map((stat) =>
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur">

              <p className="font-display text-2xl font-extrabold text-brand-yellow sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-neutral-400 sm:text-xs">
                {stat.label}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>);

}
