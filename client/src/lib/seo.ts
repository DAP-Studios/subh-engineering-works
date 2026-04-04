/**
 * SEO Utilities - JSON-LD Structured Data
 * Provides functions to generate structured data for search engines
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Subh Engineering Works",
  url: "https://subh-engineering-works.manus.space",
  logo: "https://subh-engineering-works.manus.space/logo.png",
  description: "Leading manufacturer of premium industrial valves engineered for performance, reliability, and precision.",
  foundingDate: "1999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vapi",
    addressLocality: "Vapi",
    addressRegion: "Gujarat",
    postalCode: "396195",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-6464646464",
    contactType: "Customer Service",
    email: "info@subhengineering.com",
    areaServed: ["IN", "US", "EU"],
    availableLanguage: ["en"],
  },
  sameAs: [
    "https://www.linkedin.com/company/subh-engineering-works",
    "https://www.facebook.com/subhengineering",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Subh Engineering Works",
  image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
  description: "Industrial valve manufacturer with 25+ years of experience",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vapi",
    addressLocality: "Vapi",
    addressRegion: "Gujarat",
    postalCode: "396195",
    addressCountry: "IN",
  },
  telephone: "+91-6464646464",
  email: "info@subhengineering.com",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
};

export const productSchema = (name: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  description,
  brand: {
    "@type": "Brand",
    name: "Subh Engineering Works",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Subh Engineering Works",
  },
  ...(price && { offers: {
    "@type": "Offer",
    price,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  }}),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "85",
  },
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const articleSchema = (title: string, description: string, datePublished: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished,
  author: {
    "@type": "Organization",
    name: "Subh Engineering Works",
  },
  publisher: {
    "@type": "Organization",
    name: "Subh Engineering Works",
    logo: {
      "@type": "ImageObject",
      url: "https://subh-engineering-works.manus.space/logo.png",
    },
  },
});

// Helper function to inject JSON-LD into page
export const injectJsonLd = (schema: any) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};
