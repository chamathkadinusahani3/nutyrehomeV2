import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useSeo } from '../hooks/useSeo';
import { BlogHero } from './blog/BlogHero';
import { FeaturedArticle } from './blog/FeaturedArticle';
import { BlogCategories } from './blog/BlogCategories';
import { TrendingTopics } from './blog/TrendingTopics';
import { LatestArticles } from './blog/LatestArticles';
import { Newsletter } from './blog/Newsletter';
import { BlogFAQ } from './blog/BlogFAQ';
import { BlogCTA } from './blog/BlogCTA';
import { Footer } from './Footer';

function scrollToLatest() {
  document.getElementById('latest-articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const featuredPost = useMemo(() => blogPosts.find((post) => post.featured) ?? blogPosts[0], []);

  useSeo({
    title: 'Nutyre Journal — Expert Tyre Advice & Automotive Insights',
    description: 'Expert tyre guides, maintenance tips, safety advice, buying recommendations, and the latest automotive insights from Nutyre.',
    path: '/blog',
    image: featuredPost.image,
    type: 'website',
    jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Nutyre Journal',
      description: 'Expert tyre guides, maintenance tips, safety advice, and automotive insights from Nutyre.',
      url: `${window.location.origin}/blog`,
      blogPost: blogPosts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: `${window.location.origin}${post.image}`,
        publisher: { '@type': 'Organization', name: 'Nutyre' },
        url: `${window.location.origin}/blog/${post.slug}`
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${window.location.origin}/blog` }]

    }]

  });

  function handleTagClick(tag: string) {
    setSearchQuery(tag);
    setSelectedCategory('all');
    scrollToLatest();
  }

  function handleCategorySelect(slug: string) {
    setSelectedCategory(slug);
    setSearchQuery('');
    scrollToLatest();
  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-neutral-950">
        <div className="mx-auto flex max-w-7xl items-center gap-1.5 px-4 py-3 text-xs font-semibold text-neutral-400 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-1 transition hover:text-brand-yellow">
            <HomeIcon size={13} /> Home
          </Link>
          <ChevronRightIcon size={13} />
          <span className="text-brand-yellow">Blog</span>
        </div>
      </nav>

      <BlogHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onTagClick={handleTagClick} />


      <FeaturedArticle post={featuredPost} />

      <BlogCategories onCategorySelect={handleCategorySelect} />

      <TrendingTopics activeTag={searchQuery || null} onTagClick={handleTagClick} />

      <LatestArticles
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory} />


      <Newsletter />

      <BlogFAQ />

      <BlogCTA />

      <Footer />
    </>);

}
