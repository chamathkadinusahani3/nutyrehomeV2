import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon, HomeIcon } from 'lucide-react';
import { blogCategories, blogPosts } from '../data/blogPosts';
import { useSeo } from '../hooks/useSeo';
import { ArticleCard } from './blog/ArticleCard';
import { Newsletter } from './blog/Newsletter';
import { Footer } from './Footer';

export function BlogArticlePage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);
  const category = post ? blogCategories.find((item) => item.slug === post.category) : undefined;
  const relatedPosts = post ?
  blogPosts.filter((item) => item.category === post.category && item.slug !== post.slug).slice(0, 3) :
  [];

  useSeo({
    title: post ? `${post.title} — Nutyre Journal` : 'Article not found — Nutyre Journal',
    description: post?.excerpt ?? 'This article could not be found on the Nutyre Journal.',
    path: `/blog/${slug ?? ''}`,
    image: post?.image,
    type: 'article',
    jsonLd: post ?
    [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: `${window.location.origin}${post.image}`,
      publisher: { '@type': 'Organization', name: 'Nutyre' },
      url: `${window.location.origin}/blog/${post.slug}`
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${window.location.origin}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${window.location.origin}/blog/${post.slug}` }]

    }] :
    undefined
  });

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-extrabold text-brand-black">
          Article not found
        </h1>
        <p className="mt-4 text-gray-600">
          This article may have been moved or no longer exists.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-black px-6 py-3.5 font-bold text-white transition hover:bg-brand-amber">

          <ArrowLeftIcon size={16} />
          Back to the blog
        </Link>
      </section>);

  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-neutral-950">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-xs font-semibold text-neutral-400 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-1 transition hover:text-brand-yellow">
            <HomeIcon size={13} /> Home
          </Link>
          <ChevronRightIcon size={13} />
          <Link to="/blog" className="transition hover:text-brand-yellow">
            Blog
          </Link>
          <ChevronRightIcon size={13} />
          <span className="truncate text-brand-yellow">{post.title}</span>
        </div>
      </nav>

      <article>
        <header className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-stone-950 py-20 text-white">
          <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow/10 blur-[150px]" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-neutral-300 transition hover:text-brand-yellow">

              <ArrowLeftIcon size={16} />
              All articles
            </Link>

            {category &&
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 flex w-fit items-center gap-1.5 rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-black">

                {category.name}
              </motion.span>
            }

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">

              {post.title}
            </motion.h1>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={post.image}
            alt={post.title}
            loading="eager"
            className="w-full rounded-3xl object-cover shadow-lg" />


          <div className="mt-10">
            <p className="text-lg leading-relaxed text-gray-700">{post.excerpt}</p>
            <p className="mt-5 leading-relaxed text-gray-600">
              Our technicians see this come up again and again in the
              workshop, so we've put together this guide based on what
              actually makes a difference in day-to-day driving. If you'd
              like this checked on your own vehicle, our team can take a
              look during your next visit.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) =>
            <span
              key={tag}
              className="rounded-full bg-brand-cream px-3.5 py-1.5 text-xs font-bold text-brand-black">

                #{tag}
              </span>
            )}
          </div>

          <Link
            to="/services"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-brand-yellow px-7 py-4 font-extrabold uppercase tracking-wide text-brand-black transition hover:bg-brand-amber">

            Book a tyre check
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        {relatedPosts.length > 0 &&
        <section className="bg-brand-cream py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <h2 className="text-lg font-extrabold text-brand-black">Related articles</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((related, index) =>
              <ArticleCard key={related.id} post={related} index={index} />
              )}
              </div>
            </div>
          </section>
        }
      </article>

      <Newsletter />
      <Footer />
    </>);

}
