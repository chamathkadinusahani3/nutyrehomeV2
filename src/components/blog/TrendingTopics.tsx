import { motion } from 'framer-motion';
import { TrendingUpIcon } from 'lucide-react';
import { trendingTags } from '../../data/blogPosts';

type TrendingTopicsProps = {
  activeTag: string | null;
  onTagClick: (tag: string) => void;
};

export function TrendingTopics({ activeTag, onTagClick }: TrendingTopicsProps) {
  return (
    <section className="border-y border-gray-100 bg-brand-cream py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 sm:px-6">
        <span className="inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-black">
          <TrendingUpIcon size={17} className="text-brand-amber" />
          Trending:
        </span>
        {trendingTags.map((tag, index) =>
        <motion.button
          key={tag}
          type="button"
          onClick={() => onTagClick(tag)}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.04 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          aria-pressed={activeTag === tag}
          className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
          activeTag === tag ?
          'border-brand-black bg-brand-black text-white' :
          'border-gray-200 bg-white text-gray-600 hover:border-brand-yellow hover:text-brand-black'}`
          }>

            #{tag}
          </motion.button>
        )}
      </div>
    </section>);

}
