import { useEffect } from 'react';
import { SITE_URL } from '../../data/constants';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  author?: string;
  schemaJson?: object | object[];
}

export function SEOHead({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage = 'https://i.ibb.co/RkWvc5JV/Chat-GPT-Image-15-12-2025-11-43-25.png',
  publishedTime,
  author = 'Márcia MLee',
  schemaJson
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Atualizar Title
    const formattedTitle = title.includes('MLee Digital') ? title : `${title} | MLee Digital`;
    document.title = formattedTitle;

    // Helper para atualizar ou criar meta tags
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Metas Principais
    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:url', `${SITE_URL}${canonicalPath}`);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    if (publishedTime) {
      setMetaTag('property', 'article:published_time', publishedTime);
    }
    if (author) {
      setMetaTag('property', 'article:author', author);
    }

    // 3. Link Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', `${SITE_URL}${canonicalPath}`);

    // 4. Schema.org JSON-LD Script
    const scriptId = 'mlee-json-ld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schemaJson) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.text = JSON.stringify(schemaJson);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    return () => {
      // Limpeza opcional se necessário
    };
  }, [title, description, canonicalPath, ogType, ogImage, publishedTime, author, schemaJson]);

  return null;
}
