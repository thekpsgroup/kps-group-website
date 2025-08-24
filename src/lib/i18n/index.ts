import { init, register, getLocaleFromNavigator } from 'svelte-i18n';

// Register locales
register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));

// Initialize i18n
init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});

// Export locale utilities
export { _ } from 'svelte-i18n';
import { locale } from 'svelte-i18n';

// Locale switching function
export function switchLocale(newLocale: string) {
  locale.set(newLocale);
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', newLocale);
  }
}

// Get current locale
export function getCurrentLocale() {
  return getLocaleFromNavigator();
}
