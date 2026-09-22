import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://interprete-lp-imersao.vercel.app').replace(/\/$/, '');
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/obrigado`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/privacidade`, changeFrequency: 'yearly', priority: 0.3 }
  ];
}
