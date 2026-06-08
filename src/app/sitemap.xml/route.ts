import api from '@/config/api/apiList';
import { get } from '@/lib/metadata/fetch';
import { NextResponse } from 'next/server';

const SITE_URL = process.env.SITE_URL || 'smartlabglobal.com';

// You can import this from a separate file if needed
const pageRoutes: Record<string, string> = {
  home: `${SITE_URL}/`,

  /* about */
  about: `${SITE_URL}/about`,
  sustainability: `${SITE_URL}/about/sustainability`,
  'our-brand': `${SITE_URL}/about/our-brand`,
  leadership: `${SITE_URL}/about/leadership`,
  'strategic-alliance': `${SITE_URL}/about/strategic-alliance`,
  'awards-recognition': `${SITE_URL}/about/awards-recognition`,
  'our-client-portfolio': `${SITE_URL}/about/our-client-portfolio`,

  capabilities: `${SITE_URL}/capabilities`,
  industries: `${SITE_URL}/industries`,

  /* Insights */
  insights: `${SITE_URL}/insights`,
  'case-study': `${SITE_URL}/insights/case-study`,
  events: `${SITE_URL}/insights/events`,
  news: `${SITE_URL}/insights/news`,
  views: `${SITE_URL}/insights/views`,

  /* career */
  career: `${SITE_URL}/career`,
  'why-smart-lab': `${SITE_URL}/career/why-smart-lab`,
  'the-smart-lab-way': `${SITE_URL}/career/the-smart-lab-way`,
  'join-us': `${SITE_URL}/career/join-us`,


  'contact-us': `${SITE_URL}/contact-us`,
  'terms-of-use': `${SITE_URL}/policy/terms-of-use`,
  'privacy-policy': `${SITE_URL}/policy/privacy-policy`,
  'cookie-policy': `${SITE_URL}/policy/cookie-policy`,
};

type PageEntry = {
  title: string;
  slug: string;
  updated: string;
};

type ApiResponse = {
  data: {
    pages: PageEntry[];
    capabilities: PageEntry[];
    industries: PageEntry[];
  };
  status: number;
  message: string;
};

export async function GET() {
  const res: ApiResponse = await get(api.page.siteMap);

  if (!res.status || res.status !== 200) {
    return new NextResponse('Failed to fetch sitemap data', { status: 500 });
  }

  const { pages, capabilities, industries } = res.data;

  const urls: string[] = [];

  // Pages from pageRoutes
  for (const page of pages) {
    const loc = pageRoutes[page.slug];
    if (loc) {
      urls.push(createUrlXml(loc, page.updated));
    }
  }

  // Capabilities
  for (const cap of capabilities) {
    const loc = `${SITE_URL}/capabilities/${cap.slug}`;
    urls.push(createUrlXml(loc, cap.updated));
  }

  // Industries
  for (const industry of industries) {
    const loc = `${SITE_URL}/industries/${industry.slug}`;
    urls.push(createUrlXml(loc, industry.updated));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n')}
      </urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

function createUrlXml(loc: string, updated: string): string {
  const lastmod = new Date(updated).toISOString().split('T')[0];
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`.trim();
}
