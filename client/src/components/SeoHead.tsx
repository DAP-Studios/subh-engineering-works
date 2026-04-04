/**
 * SEO Head Component
 * Manages meta tags and structured data for each page
 */

import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  jsonLd?: any;
}

export default function SeoHead({
  title,
  description,
  keywords,
  ogImage = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=630&fit=crop",
  ogUrl = "https://subh-engineering-works.manus.space/",
  canonicalUrl,
  jsonLd,
}: SeoHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag("name", "description", description);
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "og:url", ogUrl);
    updateMetaTag("property", "twitter:title", title);
    updateMetaTag("property", "twitter:description", description);
    updateMetaTag("property", "twitter:image", ogImage);

    if (keywords) {
      updateMetaTag("name", "keywords", keywords);
    }

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector("link[rel='canonical']");
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);
    }

    // Inject JSON-LD structured data
    if (jsonLd) {
      let script = document.querySelector("script[type='application/ld+json']");
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, keywords, ogImage, ogUrl, canonicalUrl, jsonLd]);

  return null;
}

function updateMetaTag(type: "name" | "property", attribute: string, content: string) {
  let tag = document.querySelector(`meta[${type}='${attribute}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(type, attribute);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}
