import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shivshubhtourtravels.com';
  const currentDate = new Date();

  const routes = [
    '',
    '/about',
    '/services',
    '/packages',
    '/packages/char-dham-yatra',
    '/packages/dehradun-to-delhi-taxi',
    '/packages/dehradun-to-mussoorie-taxi',
    '/packages/dehradun-to-rishikesh-taxi',
    '/pricing',
    '/testimonials',
    '/faq',
    '/contact',
    '/terms-conditions',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/packages') ? 0.9 : route === '/terms-conditions' ? 0.5 : 0.8,
  }));
}
