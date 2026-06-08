export function getServiceWithFaqJsonLd({
  url,
  name,
  description,
  faqs,
}: {
  url: string;
  name: string;
  description: string;
  faqs: { question: string; answer: string }[];
}) {
  return [
    {
      '@context': 'https://schema.org',
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
  ];
}
