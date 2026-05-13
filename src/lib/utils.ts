export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatPrice(min: number, max: number): string {
  if (min === max) return `NT$ ${min.toLocaleString()}`;
  return `NT$ ${min.toLocaleString()} - ${max.toLocaleString()}`;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getRatingLabel(rating: number): string {
  if (rating >= 4.5) return '極力推薦';
  if (rating >= 4.0) return '推薦';
  if (rating >= 3.5) return '值得考慮';
  if (rating >= 3.0) return '普通';
  return '不推薦';
}

export function getRatingColor(rating: number): string {
  if (rating >= 4.5) return 'text-green-600';
  if (rating >= 4.0) return 'text-blue-600';
  if (rating >= 3.5) return 'text-yellow-600';
  return 'text-gray-600';
}

export function generateProductSchema(product: {
  name: string; description: string; main_image: string;
  price_min: number; price_max: number; rating_overall: number;
  brand: string; slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.main_image,
    brand: { '@type': 'Brand', name: product.brand },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: product.price_min,
      highPrice: product.price_max,
      priceCurrency: 'TWD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating_overall,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function generateArticleSchema(post: {
  title: string; excerpt: string; cover_image: string;
  published_at: string | null; updated_at: string;
  author?: { name: string };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.cover_image,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: { '@type': 'Person', name: post.author?.name || 'AI 玩具研究員' },
    publisher: {
      '@type': 'Organization',
      name: 'AI 智能玩具指南',
    },
  };
}

export function generateFAQSchema(faq: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
