import * as Sentry from '@sentry/svelte';

// Initialize Sentry
export function initSentry() {
  if (typeof window !== 'undefined') {
    Sentry.init({
      dsn: process.env.SENTRY_DSN || '',
      environment: process.env.NODE_ENV || 'development',
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
      ],
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });
  }
}

// Capture errors
export function captureError(error: Error, context?: any) {
  if (typeof window !== 'undefined') {
    Sentry.captureException(error, {
      extra: context,
    });
  }
}

// Capture messages
export function captureMessage(message: string, level: Sentry.SeverityLevel = 'info') {
  if (typeof window !== 'undefined') {
    Sentry.captureMessage(message, level);
  }
}

// Set user context
export function setUser(user: { id: string; email?: string; name?: string }) {
  if (typeof window !== 'undefined') {
    Sentry.setUser(user);
  }
}

// Set tags
export function setTag(key: string, value: string) {
  if (typeof window !== 'undefined') {
    Sentry.setTag(key, value);
  }
}
