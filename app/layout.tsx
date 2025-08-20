import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { resolveBrand } from '@kps/config';
import { headers } from 'next/headers';
import { PageWrapper } from './components/PageWrapper';
import { Footer } from '@kps/ui';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const brand = resolveBrand(host);
  
  return {
    title: {
      default: brand.name,
      template: `%s | ${brand.name}`,
    },
    description: brand.description,
    keywords: [brand.specialty, brand.name, 'business solutions', 'consulting'],
    authors: [{ name: brand.name }],
    creator: brand.name,
    publisher: brand.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(`https://${brand.domain}`),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: brand.name,
      description: brand.description,
      url: `https://${brand.domain}`,
      siteName: brand.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: brand.name,
      description: brand.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const brand = resolveBrand(host);
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Preload brand-specific assets based on host */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Preload brand-specific chunks based on host
              const host = window.location.hostname;
              const brandChunks = {
                'modernbrands.co': ['modern-brands'],
                'modernconsulting.co': ['modern-consulting'],
                'modernledger.co': ['modern-ledger'],
                'modernpayroll.co': ['modern-pay'],
                'moderntechstack.co': ['modern-stack'],
                'modernos.app': ['modern-os'],
                'thekpsgroup.com': ['kps-group']
              };
              
              const chunks = brandChunks[host] || ['kps-group'];
              chunks.forEach(chunk => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = '/_next/static/chunks/' + chunk + '-*.js';
                document.head.appendChild(link);
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <PageWrapper host={host}>{children}</PageWrapper>
        {/* Footer rendered globally once per page */}
        <Footer brand={brand.key} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}