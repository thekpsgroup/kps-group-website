<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SuiteDrawer from '$lib/components/SuiteDrawer.svelte';
	import { suiteDrawerOpen } from '$lib/stores/roadmap';
	import { page } from '$app/stores';
	const SITE_URL = (import.meta.env?.PUBLIC_SITE_URL as string) || 'https://thekpsgroup.com';
</script>

<svelte:head>
	<title>The Modern Suite by The KPS Group — Brand, Books, Payroll, Ops, Stack & Custom Software</title>
	<meta name="description" content="Enterprise-grade tools and ops for service businesses. Branding, bookkeeping, payroll, consulting, stack consolidation, and custom software builds." />
	<meta name="theme-color" content="#0A1B2E" />
	<link rel="canonical" href={`${SITE_URL}${$page.url.pathname}${$page.url.search}`} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="The Modern Suite by The KPS Group" />
	<meta property="og:description" content="Enterprise-grade tools and ops for service businesses. Branding, bookkeeping, payroll, consulting, stack consolidation, and custom software builds." />
	<meta property="og:url" content={`${SITE_URL}${$page.url.pathname}${$page.url.search}`} />
	<meta property="og:image" content="/brands/kps/logo-transparent.png" />
	<meta property="og:image:alt" content="The KPS Group logo" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The Modern Suite by The KPS Group" />
	<meta name="twitter:description" content="Enterprise-grade tools and ops for service businesses." />
	<meta name="twitter:image" content="/brands/kps/logo-transparent.png" />

	<!-- JSON-LD Organization Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "The KPS Group",
			"url": "https://thekpsgroup.com",
			"email": "sales@thekpsgroup.com",
			"telephone": "469-458-6966",
			"logo": "/kps-group-logo.svg",
			"description": "We give small, gritty service businesses the same tools the giants use—without the bloat or b.s.",
			"brand": [
				{"@type": "Brand", "name": "Modern Brands", "description": "Ultra-modern logos and websites. Quiet luxury, bold impact."},
				{"@type": "Brand", "name": "Modern Ledger", "description": "Done-for-you bookkeeping that kills busywork."},
				{"@type": "Brand", "name": "Modern Pay", "description": "Payroll + HR compliance without the headaches."},
				{"@type": "Brand", "name": "Modern Consulting", "description": "Sales, ops, and leadership tuned for the trades."},
				{"@type": "Brand", "name": "Modern Stack", "description": "We audit your tech, cut waste, and build custom software that actually fits."}
			]
		}
	</script>

	<!-- Preconnect to external domains -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	
	<!-- Google Fonts -->
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<!-- Skip link for keyboard users -->
<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-gold text-navy px-4 py-2 rounded focus-ring z-[100]">Skip to main content</a>

<div class="min-h-screen bg-sand text-ink">
	<Header />
	
	<main id="main">
		<slot />
	</main>
	
	<Footer />
	
	<SuiteDrawer />
</div>

<style>
	/* Global styles */
	:global(html) {
		scroll-behavior: smooth;
	}
	
	:global(body) {
		font-family: 'Inter', system-ui, sans-serif;
		line-height: 1.6;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	:global(h1, h2, h3, h4, h5, h6) {
		font-weight: 600;
		line-height: 1.2;
	}
	
	:global(a) {
		text-decoration: none;
	}
	
	:global(button) {
		font-family: inherit;
	}
	
	:global(input, textarea, select) {
		font-family: inherit;
	}
	
	/* Screen-reader-only utility */
	:global(.sr-only) {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
