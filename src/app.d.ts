// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  	// Google Analytics
	declare function gtag(...args: any[]): void;
	declare const gtag: (...args: any[]) => void;
	declare const gtag: gtag.Gtag;

	// Global test utilities
	interface Window {
		gtag?: gtag.Gtag;
		dataLayer?: any[];
	}
}

export {};
