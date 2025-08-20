"use client";

import { Suspense } from 'react';
import { resolveBrand } from '@kps/config';
import { Skeleton, Header } from '@kps/ui';

// Header and Footer imported directly to guarantee SSR markup without delay

interface PageWrapperProps {
  children: React.ReactNode;
  host?: string;
}

export function PageWrapper({ children, host }: PageWrapperProps) {
  const brand = resolveBrand(host);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring-color)] focus:ring-offset-[var(--focus-ring-offset)] focus:absolute focus:top-4 focus:left-4 focus:z-[1000]"
        onClick={() => {
          const el = document.getElementById('main');
          if (el) {
            el.setAttribute('tabindex', '-1');
            (el as HTMLElement).focus();
            // Keep tabindex for a bit longer to allow tests to verify focus
            setTimeout(() => {
              el.removeAttribute('tabindex');
            }, 100);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Tab' && !e.shiftKey) {
            const firstNav = document.querySelector<HTMLElement>('nav a, nav button');
            if (firstNav) {
              e.preventDefault();
              firstNav.focus();
            }
          }
        }}
      >
        Skip to content
      </a>
      
      <Header brand={brand.key} />
      
      <main id="main" className="animate-fade-in">
        {children}
      </main>
      
      {/* Footer moved to root layout to guarantee presence across routes */}
    </>
  );
}
