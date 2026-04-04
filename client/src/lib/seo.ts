/**
 * SEO Utilities - JSON-LD Structured Data
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Subh Engineering Works",
  url: "https://subh-engineering-works.manus.space",
  description:
    "Industrial valve manufacturing, sales, and servicing company in Gujarat, India. Trusted since 2015.",
  foundingDate: "2015",
  founder: {
    "@type": "Person",
    name: "Hitech Bhai",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales and service",
    email: "info@subhengineeringworks.com",
    areaServed: ["IN"],
    availableLanguage: ["en", "hi", "gu"],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Subh Engineering Works",
  image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
  description: "Precision valves. Dependable service. Trusted since 2015.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  email: "info@subhengineeringworks.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1",
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
  ...(price && {
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  }),
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
  },
});
