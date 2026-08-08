import { useEffect } from 'react';

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
  return tag;
}

export function useSeo({ title, description, path, image, type = 'website', jsonLd }: SeoOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const canonicalUrl = `${window.location.origin}${path}`;
    const managedTags: Element[] = [];

    managedTags.push(setMeta('name', 'description', description));
    managedTags.push(setMeta('property', 'og:title', title));
    managedTags.push(setMeta('property', 'og:description', description));
    managedTags.push(setMeta('property', 'og:type', type));
    managedTags.push(setMeta('property', 'og:url', canonicalUrl));
    managedTags.push(setMeta('name', 'twitter:card', 'summary_large_image'));
    managedTags.push(setMeta('name', 'twitter:title', title));
    managedTags.push(setMeta('name', 'twitter:description', description));
    if (image) {
      const absoluteImage = `${window.location.origin}${image}`;
      managedTags.push(setMeta('property', 'og:image', absoluteImage));
      managedTags.push(setMeta('name', 'twitter:image', absoluteImage));
    }

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    let jsonLdScript: HTMLScriptElement | null = null;
    if (jsonLd) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.text = JSON.stringify(jsonLd);
      document.head.appendChild(jsonLdScript);
    }

    return () => {
      document.title = previousTitle;
      if (jsonLdScript) document.head.removeChild(jsonLdScript);
    };
  }, [title, description, path, image, type, jsonLd]);
}
