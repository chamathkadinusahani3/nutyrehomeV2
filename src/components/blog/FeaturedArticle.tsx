import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { blogCategories } from '../../data/blogPosts';
import type { BlogPost } from '../../data/blogPosts';

export function FeaturedArticle({ post }: {post: BlogPost;}) {
  const category = blogCategories.find((item) => item.slug === post.category);

  return (
    <section className="mx-auto -mt-14 max-w-7xl px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-2xl shadow-black/20">

        <div className="grid lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden lg:h-full">
            <img
              src={post.image}
              alt={post.title}
              loading="eager"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent lg:bg-gradient-to-r" />
            {category &&
            <span className="absolute left-5 top-5 rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-black shadow">
                {category.name}
              </span>
            }
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-black/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-black">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              Featured article
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight text-brand-black sm:text-3xl lg:text-4xl">
              {post.title}
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              {post.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) =>
              <span
                key={tag}
                className="rounded-full bg-brand-cream px-3 py-1.5 text-xs font-bold text-brand-black">

                  #{tag}
                </span>
              )}
            </div>

            <Link
              to={`/blog/${post.slug}`}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-brand-black px-7 py-4 font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-amber">

              Read Article
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>);

}
