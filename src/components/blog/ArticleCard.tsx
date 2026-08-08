import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, BookmarkIcon, Share2Icon } from 'lucide-react';
import type { BlogPost } from '../../data/blogPosts';
import { blogCategories } from '../../data/blogPosts';

export function ArticleCard({
  post,
  index = 0



}: {post: BlogPost;index?: number;}) {
  const [saved, setSaved] = useState(false);
  const category = blogCategories.find((item) => item.slug === post.category);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow/50 hover:shadow-xl">

      <Link to={`/blog/${post.slug}`} className="relative block h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
        {category &&
        <span className="absolute left-3 top-3 rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-brand-black shadow">
            {category.name}
          </span>
        }
        <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setSaved((value) => !value);
            }}
            aria-pressed={saved}
            aria-label={saved ? 'Remove bookmark' : 'Bookmark article'}
            className={`grid h-8 w-8 place-items-center rounded-full backdrop-blur transition ${
            saved ? 'bg-brand-yellow text-brand-black' : 'bg-white/85 text-brand-black hover:bg-white'}`
            }>

            <BookmarkIcon size={14} fill={saved ? 'currentColor' : 'none'} />
          </button>
          <button
            type="button"
            onClick={(event) => event.preventDefault()}
            aria-label="Share article"
            className="grid h-8 w-8 place-items-center rounded-full bg-white/85 text-brand-black backdrop-blur transition hover:bg-white">

            <Share2Icon size={14} />
          </button>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-extrabold leading-snug text-brand-black">
          <Link to={`/blog/${post.slug}`} className="line-clamp-2 transition-colors hover:text-brand-amber">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 2).map((tag) =>
          <span
            key={tag}
            className="rounded-full bg-brand-cream px-2.5 py-1 text-[11px] font-bold text-brand-black">

              #{tag}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-end border-t border-gray-100 pt-4">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-extrabold text-brand-black transition-colors hover:text-brand-amber">

            Read more
            <ArrowRightIcon size={13} />
          </Link>
        </div>
      </div>
    </motion.article>);

}
