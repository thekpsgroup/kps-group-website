// Analytics utility for tracking user interactions and conversions

interface AnalyticsEvent {
	action: string;
	category: string;
	label?: string;
	value?: number;
}

class Analytics {
	private isEnabled = false;
	
	constructor() {
		// Enable analytics in production
		this.isEnabled = import.meta.env.PROD;
	}
	
	trackEvent(event: AnalyticsEvent) {
		if (!this.isEnabled) {
			console.log('Analytics Event:', event);
			return;
		}
		
		// Google Analytics 4
		if (typeof gtag !== 'undefined') {
			gtag('event', event.action, {
				event_category: event.category,
				event_label: event.label,
				value: event.value
			});
		}
		
		// Custom tracking endpoint
		this.sendToCustomEndpoint(event);
	}
	
	trackPageView(path: string) {
		if (!this.isEnabled) return;
		
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-XXXXXXXXXX', {
				page_path: path
			});
		}
	}
	
	trackConversion(type: 'contact' | 'service_click' | 'suite_explore', data?: Record<string, any>) {
		this.trackEvent({
			action: 'conversion',
			category: type,
			label: data?.service || data?.page,
			value: 1
		});
	}
	
	trackFormSubmission(formType: string, success: boolean) {
		this.trackEvent({
			action: success ? 'form_success' : 'form_error',
			category: 'form',
			label: formType
		});
	}
	
	private async sendToCustomEndpoint(event: AnalyticsEvent) {
		try {
			await fetch('/api/analytics', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...event,
					timestamp: new Date().toISOString(),
					userAgent: navigator.userAgent,
					url: window.location.href
				})
			});
		} catch (error) {
			console.warn('Analytics endpoint error:', error);
		}
	}
}

export const analytics = new Analytics();

// Predefined tracking functions
export const trackServiceClick = (service: string) => {
	analytics.trackConversion('service_click', { service });
};

export const trackContactForm = (success: boolean) => {
	analytics.trackFormSubmission('contact', success);
};

export const trackSuiteExplore = () => {
	analytics.trackConversion('suite_explore');
};

export const trackPageView = (path: string) => {
	analytics.trackPageView(path);
};
