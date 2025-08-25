<script lang="ts">
	import { onMount } from 'svelte';
	
	export let title: string;
	export let description: string;
	export let keywords: string;
	export let canonicalUrl: string;
	export let ogImage: string;
	export let serviceName: string;
	export let serviceDescription: string;
	export let serviceCategory: string;
	export let serviceType: string;
	export let offers: Array<{
		name: string;
		description: string;
	}>;
	
	onMount(() => {
		// Set document title
		document.title = title;
		
		// Preload critical images
		if (ogImage) {
			const link = document.createElement('link');
			link.rel = 'preload';
			link.href = ogImage;
			link.as = 'image';
			document.head.appendChild(link);
		}
		
		// Add intersection observer for lazy loading
		const observerOptions = {
			rootMargin: '50px 0px',
			threshold: 0.1
		};
		
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const img = entry.target as HTMLImageElement;
					if (img.dataset.src) {
						img.src = img.dataset.src;
						img.removeAttribute('data-src');
						observer.unobserve(img);
					}
				}
			});
		}, observerOptions);
		
		// Observe all images with data-src
		document.querySelectorAll('img[data-src]').forEach(img => {
			observer.observe(img);
		});
		
		return () => {
			observer.disconnect();
		};
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<link rel="canonical" href={canonicalUrl} />
	
	<!-- Performance Optimizations -->
	{#if ogImage}
		<link rel="preload" href={ogImage} as="image" />
	{/if}
	<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
	<link rel="dns-prefetch" href="https://fonts.gstatic.com" />
	
	<!-- Additional SEO Meta Tags -->
	<meta name="author" content="The KPS Group" />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#if ogImage}
		<meta name="twitter:image" content={ogImage} />
	{/if}
	
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	{#if ogImage}
		<meta property="og:image" content={ogImage} />
	{/if}
	
	<!-- JSON-LD Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"name": "{serviceName}",
			"description": "{serviceDescription}",
			"provider": {
				"@type": "Organization",
				"name": "The KPS Group",
				"url": "https://thekpsgroup.com"
			},
			"url": "https://thekpsgroup.com",
			"category": "{serviceCategory}",
			"serviceType": "{serviceType}",
			"areaServed": "United States",
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "{serviceName} Services",
				"itemListElement": [
					{#each offers as offer, index}
						{
							"@type": "Offer",
							"itemOffered": {
								"@type": "Service",
								"name": "{offer.name}",
								"description": "{offer.description}"
							}
						}{index < offers.length - 1 ? ',' : ''}
					{/each}
				]
			}
		}
	</script>
</svelte:head>

<slot />
