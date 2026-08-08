import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AwardIcon } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

export function PopularArticles() {
  const editorsPicks = blogPosts.filter((post) => post.editorsPick).slice(0, 5);

  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-label="Editor's picks"
      className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:sticky lg:top-24">

      <h3 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-black">
        <AwardIcon size={16} className="text-brand-amber" />
        Editor's Picks
      </h3>
      <ul className="space-y-4">
        {editorsPicks.map((post) =>
        <li key={post.id}>
            <Link to={`/blog/${post.slug}`} className="group flex items-start gap-3">
              <img
              src={post.image}
              alt=""
              loading="lazy"
              className="h-14 w-14 shrink-0 rounded-xl object-cover transition group-hover:opacity-90" />

              <p className="line-clamp-3 text-sm font-bold leading-snug text-brand-black transition-colors group-hover:text-brand-amber">
                {post.title}
              </p>
            </Link>
          </li>
        )}
      </ul>
    </motion.aside>);

}
