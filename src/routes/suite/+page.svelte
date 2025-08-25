<script lang="ts">
	import { SUITE } from '$lib/data/suite';
	import { smoothScrollTo } from '$lib/utils/observe';
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Button from '$lib/components/Button.svelte';
	const SITE_URL = (import.meta.env?.PUBLIC_SITE_URL as string) || 'https://thekpsgroup.com';
	
	function scrollToContact() {
		const contactForm = document.querySelector('#contact-form') as HTMLElement;
		if (contactForm) {
			smoothScrollTo(contactForm, 100);
		} else {
			window.location.href = '/contact';
		}
	}
	
	// Get brand-specific header image
	function getBrandHeaderImage(suiteKey: string) {
		const images = {
			brands: '/brands/modern-brands-card-header.png',
			ledger: '/brands/modern-ledger-card-header.png',
			pay: '/brands/modern-pay-card-header.png',
			stack: '/brands/modern-stack-card-header.png',
			consulting: '/brands/modern-consulting-card-header.png'
		};
		return images[suiteKey as keyof typeof images] || images.brands;
	}
	
	// Get brand-specific colors that match the header images exactly
	function getBrandColors(suite: any) {
		const headerColors = {
			brands: {
				primary: '#C9A246',    // Gold (Text & Feather) from Modern Brands header
				secondary: '#0D0D0D',   // Black Background
				accent: '#C9A246'       // Gold accent
			},
			ledger: {
				primary: '#C9A246',     // Gold Book & Text from Modern Ledger header
				secondary: '#0E3A3D',   // Deep Teal Background
				accent: '#C9A246'       // Gold accent
			},
			pay: {
				primary: '#0B5C3C',     // Emerald Green ($ Icon / Background) from Modern Pay header
				secondary: '#D1A12F',   // Gold Text
				accent: '#0B5C3C'       // Emerald accent
			},
			stack: {
				primary: '#007BFF',     // Electric Blue (Icon Glow) from Modern Stack header
				secondary: '#CBA34A',   // Gold Text
				accent: '#0A0F1C'       // Navy Background
			},
			consulting: {
				primary: '#C45A1A',     // Orange Compass/Background from Modern Consulting header
				secondary: '#D3A84C',   // Gold Text
				accent: '#C45A1A'       // Orange accent
			}
		};
		
		return headerColors[suite.key as keyof typeof headerColors] || headerColors.brands;
	}
	
	// Get brand-specific CSS custom properties
	function getBrandCSSVars(suite: any) {
		const colors = getBrandColors(suite);
		return {
			'--brand-primary': colors.primary,
			'--brand-secondary': colors.secondary,
			'--brand-accent': colors.accent
		};
	}
</script>

<svelte:head>
	<title>The Modern Suite — Complete Business Solutions | The KPS Group</title>
	<meta name="description" content="Five integrated services that transform service businesses: Modern Brands, Modern Ledger, Modern Pay, Modern Consulting, and Modern Stack." />
	<link rel="canonical" href={`${SITE_URL}${$page.url.pathname}${$page.url.search}`} />
	<meta property="og:title" content="The Modern Suite — The KPS Group" />
	<meta property="og:description" content="Five integrated services that transform service businesses." />
	<meta property="og:url" content={`${SITE_URL}${$page.url.pathname}${$page.url.search}`} />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ItemList",
			"itemListElement": [
				{"@type": "Service", "name": "Modern Brands", "description": "Logos, websites, brand systems"},
				{"@type": "Service", "name": "Modern Ledger", "description": "Books without drama"},
				{"@type": "Service", "name": "Modern Pay", "description": "Payroll that behaves"},
				{"@type": "Service", "name": "Modern Consulting", "description": "Sell + operate smart"},
				{"@type": "Service", "name": "Modern Stack", "description": "Audit. Fix. Build."}
			]
		}
	</script>
</svelte:head>

<!-- Breadcrumbs -->
<div class="container mx-auto px-4 pt-8">
	<Breadcrumbs items={[
		{ label: 'Home', href: '/' },
		{ label: 'Suite' }
	]} />
</div>

<!-- Hero Section -->
<section class="bg-navy text-white py-20 lg:py-32">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<!-- The Modern Suite Header Image -->
			<div class="mb-8">
				<img 
					src="/brands/the-modern-suite.png" 
					alt="The Modern Suite" 
					class="w-full max-w-2xl mx-auto h-auto object-contain"
				/>
			</div>
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
				The Modern Suite
			</h1>
			<p class="text-xl md:text-2xl text-slate mb-8 max-w-3xl mx-auto">
				Five integrated services that give service businesses the tools they need to dominate their market.
			</p>
			<Button
				on:click={scrollToContact}
				variant="primary"
				size="lg"
			>
				Get Started Today
			</Button>
		</div>
	</div>
</section>

<!-- Suite Overview -->
<section class="py-20 bg-sand">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			{#each SUITE as suite}
				{@const brandColors = getBrandColors(suite)}
				{@const cssVars = getBrandCSSVars(suite)}
				<div class="bg-white rounded-2xl p-8 shadow-lg border transition-all duration-300 group hover:shadow-xl hover:scale-105" style="{Object.entries(cssVars).map(([key, value]) => `${key}: ${value}`).join('; ')}; border-color: var(--brand-primary);">
					<!-- Brand Header Image -->
					<div class="mb-6">
						<img 
							src={getBrandHeaderImage(suite.key)} 
							alt="{suite.name} header" 
							class="w-full h-32 object-cover rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300"
						/>
					</div>
					
					<div class="mb-6">
						<h2 class="text-3xl font-bold text-navy mb-2">{suite.name}</h2>
						<p class="font-semibold text-lg mb-4" style="color: var(--brand-primary);">{suite.tag}</p>
						<p class="text-slate leading-relaxed">{suite.summary}</p>
					</div>
					
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
						<div>
							<h3 class="font-semibold text-navy mb-3">Pain Points</h3>
							<ul class="space-y-2">
								{#each suite.painPoints as pain}
									<li class="flex items-start space-x-2">
										<div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
										<span class="text-slate text-sm">{pain}</span>
									</li>
								{/each}
							</ul>
						</div>
						
						<div>
							<h3 class="font-semibold text-navy mb-3">Solutions</h3>
							<ul class="space-y-2">
								{#each suite.solutions as solution}
									<li class="flex items-start space-x-2">
										<div class="w-2 h-2 rounded-full mt-2 flex-shrink-0" style="background-color: var(--brand-primary);"></div>
										<span class="text-slate text-sm">{solution}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
					
					<div class="flex flex-col sm:flex-row gap-4">
						<Button
							href="/suite/{suite.key}"
							variant="secondary"
							fullWidth
						>
							Learn More
						</Button>
						<Button
							on:click={() => {
								window.location.href = `/contact?service=${suite.key}`;
							}}
							variant="primary"
							fullWidth
							style="background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%);"
						>
							{suite.cta.label}
						</Button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Integration Benefits -->
<section class="py-20 bg-navy text-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold mb-8">
				Why Integration Matters
			</h2>
			<p class="text-lg text-slate mb-12 max-w-2xl mx-auto">
				When your tools work together, your business works better. The Modern Suite is designed to integrate seamlessly.
			</p>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="text-center">
					<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2">Faster Execution</h3>
					<p class="text-slate">Integrated systems eliminate manual workarounds and data entry.</p>
				</div>
				
				<div class="text-center">
					<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2">Better Insights</h3>
					<p class="text-slate">Unified data gives you a complete picture of your business performance.</p>
				</div>
				
				<div class="text-center">
					<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2">Cost Savings</h3>
					<p class="text-slate">Eliminate redundant tools and reduce administrative overhead.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-sand">
	<div class="container mx-auto px-4">
		<div class="max-w-2xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-navy mb-6">
				Ready to Transform Your Business?
			</h2>
			<p class="text-lg text-slate mb-8">
				Let's discuss how The Modern Suite can streamline your operations and drive growth.
			</p>
			<Button
				on:click={scrollToContact}
				variant="primary"
				size="lg"
			>
				Start the Conversation
			</Button>
		</div>
	</div>
</section>
