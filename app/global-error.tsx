'use client';

import { useEffect } from 'react';
import { Button, H1, Body } from '@kps/ui';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 p-4">
          <div className="max-w-md w-full mx-auto">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <H1 className="text-2xl">
                  Application Error
                </H1>
                <p className="text-neutral-600">
                  We&apos;re experiencing technical difficulties. Please try refreshing the page or contact support.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={reset}
                  className="w-full"
                >
                  Try again
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = '/'}
                  className="w-full"
                >
                  Go to homepage
                </Button>
              </div>
              
              {process.env.NODE_ENV === 'development' && (
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-sm text-neutral-500 hover:text-neutral-700">
                    Error details (development only)
                  </summary>
                  <pre className="mt-2 p-4 bg-neutral-100 rounded-lg text-xs text-neutral-700 overflow-auto">
                    {error.message}
                    {error.stack && `\n\n${error.stack}`}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
