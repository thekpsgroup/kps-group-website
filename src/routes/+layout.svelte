<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SuiteDrawer from '$lib/components/SuiteDrawer.svelte';
	import SkipLink from '$lib/components/SkipLink.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import PageLoader from '$lib/components/PageLoader.svelte';
	import { suiteDrawerOpen } from '$lib/stores/ui';
	import { page } from '$app/stores';
	import { trackPageView } from '$lib/utils/analytics';
	const SITE_URL = (import.meta.env?.PUBLIC_SITE_URL as string) || 'https://thekpsgroup.com';
	
	// Track page views
	$: if ($page.url.pathname) {
		trackPageView($page.url.pathname);
	}
</script>

<svelte:head>
	<title>The KPS Group | Modern Suite - Branding, Bookkeeping, Payroll, Consulting & Custom Software for Service Businesses</title>
	<meta name="description" content="The KPS Group provides enterprise-grade business solutions: Modern Brands (logos & websites), Modern Ledger (bookkeeping), Modern Pay (payroll), Modern Consulting (operations), and Modern Stack (custom software). Transform your service business today." />
	<meta name="keywords" content="service business tools, branding agency, bookkeeping services, payroll services, business consulting, custom software development, technology stack audit, business operations, small business solutions, enterprise tools, modern branding, automated bookkeeping, HR compliance, business process optimization, software development, Dallas business services, Texas business solutions" />
	<meta name="author" content="The KPS Group" />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<meta name="theme-color" content="#0A1B2E" />
	<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="geo.region" content="US-TX" />
	<meta name="geo.placename" content="Dallas" />
	<meta name="geo.position" content="32.7767;-96.7970" />
	<meta name="ICBM" content="32.7767, -96.7970" />
	<link rel="canonical" href={`${SITE_URL}${$page.url.pathname}${$page.url.search}`} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="The KPS Group | Modern Suite - Complete Business Solutions" />
	<meta property="og:description" content="Transform your service business with The KPS Group's Modern Suite: branding, bookkeeping, payroll, consulting & custom software. Enterprise-grade tools without the enterprise complexity." />
	<meta property="og:url" content={`${SITE_URL}${$page.url.pathname}${$page.url.search}`} />
	<meta property="og:image" content={`${SITE_URL}/brands/kps/photos/kps.png`} />
	<meta property="og:image:alt" content="The KPS Group - Modern Suite Business Solutions" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="The KPS Group" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The KPS Group | Modern Suite - Complete Business Solutions" />
	<meta name="twitter:description" content="Transform your service business with enterprise-grade branding, bookkeeping, payroll, consulting & custom software solutions." />
	<meta name="twitter:image" content={`${SITE_URL}/brands/kps/photos/kps.png`} />
	<meta name="twitter:site" content="@thekpsgroup" />
	<meta name="twitter:creator" content="@thekpsgroup" />

	<!-- JSON-LD Organization Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "The KPS Group",
			"alternateName": "KPS Group",
			"url": "https://thekpsgroup.com",
			"email": "sales@thekpsgroup.com",
			"telephone": "469-458-6966",
			"logo": "https://thekpsgroup.com/brands/kps/photos/kps.png",
			"description": "We give small, gritty service businesses the same tools the giants use—without the bloat or b.s.",
			"slogan": "Business, Refined. Clarity. Control. Growth.",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Dallas",
				"addressRegion": "TX",
				"addressCountry": "US"
			},
			"contactPoint": {
				"@type": "ContactPoint",
				"telephone": "469-458-6966",
				"contactType": "customer service",
				"availableLanguage": "English"
			},
			"sameAs": [
				"https://modernbrands.co",
				"https://modernledger.co", 
				"https://modernpay.co",
				"https://modernconsulting.co",
				"https://moderntechstack.co"
			],
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "The Modern Suite",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Modern Brands",
							"description": "Ultra-modern logos and websites. Quiet luxury, bold impact.",
							"url": "https://modernbrands.co",
							"category": "Branding and Web Design"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Modern Ledger",
							"description": "Done-for-you bookkeeping that kills busywork.",
							"url": "https://modernledger.co",
							"category": "Bookkeeping and Accounting"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Modern Pay",
							"description": "Payroll + HR compliance without the headaches.",
							"url": "https://modernpay.co",
							"category": "Payroll and HR Services"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Modern Consulting",
							"description": "Sales, ops, and leadership tuned for the trades.",
							"url": "https://modernconsulting.co",
							"category": "Business Consulting"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Modern Stack",
							"description": "We audit your tech, cut waste, and build custom software that actually fits.",
							"url": "https://moderntechstack.co",
							"category": "Custom Software Development"
						}
					}
				]
			},
			"brand": [
				{
					"@type": "Brand", 
					"name": "Modern Brands", 
					"description": "Ultra-modern logos and websites. Quiet luxury, bold impact.",
					"url": "https://modernbrands.co"
				},
				{
					"@type": "Brand", 
					"name": "Modern Ledger", 
					"description": "Done-for-you bookkeeping that kills busywork.",
					"url": "https://modernledger.co"
				},
				{
					"@type": "Brand", 
					"name": "Modern Pay", 
					"description": "Payroll + HR compliance without the headaches.",
					"url": "https://modernpay.co"
				},
				{
					"@type": "Brand", 
					"name": "Modern Consulting", 
					"description": "Sales, ops, and leadership tuned for the trades.",
					"url": "https://modernconsulting.co"
				},
				{
					"@type": "Brand", 
					"name": "Modern Stack", 
					"description": "We audit your tech, cut waste, and build custom software that actually fits.",
					"url": "https://moderntechstack.co"
				}
			]
		}
	</script>

	<!-- Preconnect to external domains -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link rel="preconnect" href="https://modernbrands.co" />
	<link rel="preconnect" href="https://modernledger.co" />
	<link rel="preconnect" href="https://modernpay.co" />
	<link rel="preconnect" href="https://modernconsulting.co" />
	<link rel="preconnect" href="https://moderntechstack.co" />
	
	<!-- Google Fonts -->
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
	
	<!-- Vercel Analytics -->
	<script defer src="/_vercel/insights/script.js"></script>
</svelte:head>

<div class="min-h-screen bg-bg-900 text-ink-900">
	<SkipLink targetId="main" />
	<PageLoader />
	<Header />
	
	<main id="main">
		<slot />
	</main>
	
	<Footer />
	
	<SuiteDrawer />
	<BackToTop />
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

	/* Light theme by default */
	:root {
		--kps-navy: #00438c;
		--kps-gold: #cab068;

		--bg-900: #ffffff;  /* white background */
		--bg-800: #f9fafb;
		--ink-900: #0b0f14;
		--ink-700: #374151;
		--ink-500: #6b7280;
		--line: #d1d5db;
		--ring: #e5e7eb;
		--surface: #ffffff; /* card bg */
	}

	:global(html), :global(body) {
		height: 100%;
		background: var(--bg-900);
		color: var(--ink-900);
		margin: 0;
	}

	/* Nix any "helpful" default gradients from old styles */
	:global(body::before) { content: none !important; }
</style>
