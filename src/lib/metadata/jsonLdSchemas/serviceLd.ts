import { SITE_INFORMATION } from "@/config/seo";

export function getServiceWithFaqJsonLd({
  slug,
  title,
  description,
  faqs,
}: {
  slug: string;
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    "@graph": [
      {
        '@type': 'Service',
        name: title,
        description,
        url: `https://smartlabglobal.com/capabilities/${slug}`,
        provider: {
          '@type': 'Organization',
          name: SITE_INFORMATION.siteName,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ]
  }
}
