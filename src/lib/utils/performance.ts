// Performance monitoring utilities for landing pages

export interface PerformanceMetrics {
	LCP: number; // Largest Contentful Paint
	FID: number; // First Input Delay
	CLS: number; // Cumulative Layout Shift
	FCP: number; // First Contentful Paint
	TTFB: number; // Time to First Byte
}

export class PerformanceMonitor {
	private static instance: PerformanceMonitor;
	private metrics: Partial<PerformanceMetrics> = {};

	private constructor() {
		this.initObservers();
	}

	public static getInstance(): PerformanceMonitor {
		if (!PerformanceMonitor.instance) {
			PerformanceMonitor.instance = new PerformanceMonitor();
		}
		return PerformanceMonitor.instance;
	}

	private initObservers(): void {
		// Core Web Vitals observer
		if ('PerformanceObserver' in window) {
			// LCP Observer
			const lcpObserver = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				const lastEntry = entries[entries.length - 1];
				this.metrics.LCP = lastEntry.startTime;
				this.logMetric('LCP', this.metrics.LCP);
			});
			lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

			// FID Observer
			const fidObserver = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				entries.forEach((entry) => {
					this.metrics.FID = entry.processingStart - entry.startTime;
					this.logMetric('FID', this.metrics.FID);
				});
			});
			fidObserver.observe({ entryTypes: ['first-input'] });

			// CLS Observer
			const clsObserver = new PerformanceObserver((list) => {
				let clsValue = 0;
				for (const entry of list.getEntries()) {
					if (!entry.hadRecentInput) {
						clsValue += (entry as any).value;
					}
				}
				this.metrics.CLS = clsValue;
				this.logMetric('CLS', this.metrics.CLS);
			});
			clsObserver.observe({ entryTypes: ['layout-shift'] });
		}

		// FCP measurement
		if ('PerformanceObserver' in window) {
			const fcpObserver = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				const fcpEntry = entries[0];
				this.metrics.FCP = fcpEntry.startTime;
				this.logMetric('FCP', this.metrics.FCP);
			});
			fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });
		}

		// TTFB measurement
		if ('PerformanceObserver' in window) {
			const navigationObserver = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				const navigationEntry = entries[0] as PerformanceNavigationTiming;
				this.metrics.TTFB = navigationEntry.responseStart - navigationEntry.requestStart;
				this.logMetric('TTFB', this.metrics.TTFB);
			});
			navigationObserver.observe({ entryTypes: ['navigation'] });
		}
	}

	private logMetric(name: string, value: number): void {
		console.log(`Performance Metric - ${name}: ${value.toFixed(2)}ms`);
		
		// Send to analytics if available
		if (typeof window !== 'undefined' && (window as any).gtag) {
			(window as any).gtag('event', 'performance_metric', {
				metric_name: name,
				metric_value: value,
				page_path: window.location.pathname
			});
		}
	}

	public getMetrics(): Partial<PerformanceMetrics> {
		return { ...this.metrics };
	}

	public reportMetrics(): void {
		const metrics = this.getMetrics();
		console.table(metrics);
		
		// Send comprehensive report
		if (typeof window !== 'undefined' && (window as any).gtag) {
			(window as any).gtag('event', 'performance_report', {
				page_path: window.location.pathname,
				metrics: metrics
			});
		}
	}
}

// Image loading optimization
export function optimizeImageLoading(): void {
	const images = document.querySelectorAll('img[data-src]');
	
	const imageObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target as HTMLImageElement;
				if (img.dataset.src) {
					img.src = img.dataset.src;
					img.removeAttribute('data-src');
					imageObserver.unobserve(img);
				}
			}
		});
	}, {
		rootMargin: '50px 0px',
		threshold: 0.1
	});

	images.forEach(img => imageObserver.observe(img));
}

// Preload critical resources
export function preloadCriticalResources(resources: string[]): void {
	resources.forEach(resource => {
		const link = document.createElement('link');
		link.rel = 'preload';
		link.href = resource;
		
		if (resource.match(/\.(css|js)$/)) {
			link.as = resource.endsWith('.css') ? 'style' : 'script';
		} else if (resource.match(/\.(png|jpg|jpeg|gif|webp|avif)$/)) {
			link.as = 'image';
		} else {
			link.as = 'fetch';
		}
		
		document.head.appendChild(link);
	});
}

// Initialize performance monitoring
export function initPerformanceMonitoring(): PerformanceMonitor {
	return PerformanceMonitor.getInstance();
}
