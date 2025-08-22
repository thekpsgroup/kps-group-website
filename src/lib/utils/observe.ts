export function createIntersectionObserver(
	callback: (entries: IntersectionObserverEntry[]) => void,
	options: IntersectionObserverInit = {}
): IntersectionObserver {
	return new IntersectionObserver(callback, {
		threshold: 0.1,
		rootMargin: '0px 0px -10% 0px',
		...options
	});
}

export function smoothScrollTo(element: string | HTMLElement, offset = 0): void {
	const target = typeof element === 'string' ? document.querySelector(element) : element;
	if (!target) return;

	const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
	
	window.scrollTo({
		top: targetPosition,
		behavior: 'smooth'
	});
}

export function throttle<T extends (...args: any[]) => any>(
	func: T,
	limit: number
): (...args: Parameters<T>) => void {
	let inThrottle: boolean;
	return function(this: any, ...args: Parameters<T>) {
		if (!inThrottle) {
			func.apply(this, args);
			inThrottle = true;
			setTimeout(() => inThrottle = false, limit);
		}
	};
}
