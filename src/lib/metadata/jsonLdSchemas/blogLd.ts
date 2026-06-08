import { SITE_INFORMATION } from "@/config/seo";

export function getBlogJsonLd({
  slug,
  title,
  description,
  datePublished,
  dateModified,
  authorName,
}: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_INFORMATION.url}/insights/views/${slug}`,
    },
    headline: title,
    description,
    datePublished: new Date(datePublished).toISOString(),
    dateModified: dateModified ? new Date(dateModified).toISOString() : new Date(datePublished).toISOString(),
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_INFORMATION.siteName,
      logo: {
        '@type': 'ImageObject',
        url: SITE_INFORMATION.logo,
      },
    },
  };
}