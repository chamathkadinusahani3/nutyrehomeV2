import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { blogCategories, blogPosts } from '../../data/blogPosts';

type BlogCategoriesProps = {
  onCategorySelect: (slug: string) => void;
};

export function BlogCategories({ onCategorySelect }: BlogCategoriesProps) {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">

          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
          Browse by topic
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">

          Blog Categories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-3 leading-relaxed text-gray-600">

          Everything we publish, organised so you can jump straight to what
          you need.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blogCategories.map((category, index) => {
          const CategoryIcon = category.icon;
          const count = blogPosts.filter((post) => post.category === category.slug).length;
          return (
            <motion.button
              key={category.slug}
              type="button"
              onClick={() => onCategorySelect(category.slug)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              className="group relative flex flex-col items-start overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/50 hover:shadow-xl">

              <div className="absolute top-0 inset-x-0 h-[3px] scale-x-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 transition-transform duration-300 group-hover:scale-x-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-black text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-amber">
                <CategoryIcon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-brand-black">
                {category.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {category.description}
              </p>
              <div className="mt-5 flex w-full items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  {count} article{count === 1 ? '' : 's'}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-extrabold text-brand-black transition-colors group-hover:text-amber-700">
                  Browse <ArrowRightIcon size={13} />
                </span>
              </div>
            </motion.button>);

        })}
      </div>
    </section>);

}
