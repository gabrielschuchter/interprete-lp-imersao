/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/src/config/site';

const metadataBase = process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined;

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: 'Interprete.',
  authors: [{ name: 'Interprete.' }],
  creator: 'Interprete.',
  publisher: 'Interprete.',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Interprete.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Do artigo à prática — Imersão Interprete.' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-image.png']
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: '#f1ebe8',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
