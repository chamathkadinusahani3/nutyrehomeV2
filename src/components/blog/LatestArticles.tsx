import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon } from 'lucide-react';
import { blogCategories, blogPosts } from '../../data/blogPosts';
import { ArticleCard } from './ArticleCard';
import { PopularArticles } from './PopularArticles';

type LatestArticlesProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
};

export function LatestArticles({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange
}: LatestArticlesProps) {
  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesQuery =
      query.length === 0 ||
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="latest-articles" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">

            Latest Articles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 leading-relaxed text-gray-600">

            Fresh guides and expert advice, updated regularly by our
            technicians and editorial team.
          </motion.p>
        </div>

        <div className="sticky top-20 z-30 mt-10 rounded-2xl border border-gray-100 bg-white/90 p-3 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="relative flex flex-1 items-center">
              <SearchIcon size={17} className="pointer-events-none absolute left-3.5 text-gray-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-3 text-sm font-semibold text-brand-black placeholder:text-gray-400 focus:border-brand-lemon focus:outline-none focus:ring-4 focus:ring-brand-yellow/15" />

            </label>
            <select
              value={selectedCategory}
              onChange={(event) => onCategoryChange(event.target.value)}
              aria-label="Filter by category"
              className="h-11 rounded-xl border border-gray-200 bg-white px-3.5 text-sm font-bold text-brand-black focus:border-brand-lemon focus:outline-none sm:w-52">

              <option value="all">All categories</option>
              {blogCategories.map((category) =>
              <option key={category.slug} value={category.slug}>
                  {category.name}
                </option>
              )}
            </select>
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="mb-5 text-sm font-semibold text-gray-500">
              {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'} found
            </p>
            {filteredPosts.length > 0 ?
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredPosts.map((post, index) =>
              <ArticleCard key={post.id} post={post} index={index} />
              )}
              </div> :

            <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 py-16 text-center">
                <p className="font-bold text-brand-black">No articles found</p>
                <p className="mt-1 text-sm text-gray-500">
                  Try a different search term or category.
                </p>
              </div>
            }
          </div>

          <PopularArticles />
        </div>
      </div>
    </section>);

}
