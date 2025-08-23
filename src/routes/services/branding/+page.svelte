<script lang="ts">
	import { onMount } from 'svelte';
	
	onMount(() => {
		document.title = 'Modern Brands - Logo Design & Website Development | The KPS Group';
	});
</script>

<svelte:head>
	<title>Modern Brands - Logo Design & Website Development | The KPS Group</title>
	<meta name="description" content="Modern Brands creates ultra-modern logos, websites, and brand systems for service businesses. Quiet luxury with bold impact. Transform your brand identity today." />
	<meta name="keywords" content="logo design Dallas, website development Texas, brand identity, modern branding, service business branding, professional logo design, custom website development, brand system design, Dallas branding agency" />
	<link rel="canonical" href="https://thekpsgroup.com/services/branding" />
	
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Modern Brands - Logo Design & Website Development" />
	<meta property="og:description" content="Ultra-modern logos and websites. Quiet luxury, bold impact. Transform your service business brand identity with Modern Brands." />
	<meta property="og:url" content="https://thekpsgroup.com/services/branding" />
	<meta property="og:image" content="https://thekpsgroup.com/brands/kps/photos/kps.png" />
	
	<!-- JSON-LD Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"name": "Modern Brands",
			"description": "Ultra-modern logos and websites. Quiet luxury, bold impact.",
			"provider": {
				"@type": "Organization",
				"name": "The KPS Group",
				"url": "https://thekpsgroup.com"
			},
			"url": "https://modernbrands.co",
			"category": "Branding and Web Design",
			"serviceType": "Logo Design and Website Development",
			"areaServed": "United States",
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Modern Brands Services",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Logo Design",
							"description": "Modern, professional logo design for service businesses"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Website Development",
							"description": "Conversion-focused website design and development"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Brand System Design",
							"description": "Complete brand identity and visual system design"
						}
					}
				]
			}
		}
	</script>
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Hero Section -->
	<section class="py-20 bg-gradient-to-br from-navy to-navy-800 text-white">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto text-center">
				<h1 class="text-4xl md:text-6xl font-bold mb-6">
					Modern Brands
				</h1>
				<p class="text-xl md:text-2xl text-gold mb-8">
					Ultra-modern logos and websites. Quiet luxury, bold impact.
				</p>
				<p class="text-lg text-slate-300 mb-12 max-w-3xl mx-auto">
					Transform your service business with professional logo design, custom website development, and complete brand systems that stand out in today's competitive market.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="https://modernbrands.co" target="_blank" rel="noopener noreferrer" class="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors">
						Visit Modern Brands
					</a>
					<a href="/contact" class="border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-colors">
						Get Started
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Services Section -->
	<section class="py-20">
		<div class="container mx-auto px-4">
			<div class="max-w-6xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
					Our Branding Services
				</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Logo Design</h3>
						<p class="text-slate-700">
							Modern, professional logo design that captures your brand essence and resonates with your target audience. We create logos that work across all platforms and scale beautifully.
						</p>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Website Development</h3>
						<p class="text-slate-700">
							Conversion-focused website design and development that drives results. Modern, responsive websites that look great on all devices and convert visitors into customers.
						</p>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Brand Systems</h3>
						<p class="text-slate-700">
							Complete brand identity and visual system design. From color palettes to typography, we create cohesive brand systems that ensure consistency across all touchpoints.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Why Choose Modern Brands -->
	<section class="py-20 bg-slate-50">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
					Why Choose Modern Brands?
				</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold text-navy mb-2">Service Business Focus</h3>
								<p class="text-slate-700">We specialize in branding for service businesses, understanding your unique challenges and opportunities.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold text-navy mb-2">Modern Design Approach</h3>
								<p class="text-slate-700">Contemporary, clean designs that stand out while maintaining professionalism and credibility.</p>
							</div>
						</div>
					</div>
					
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold text-navy mb-2">Conversion-Focused</h3>
								<p class="text-slate-700">Every design decision is made with your business goals in mind, driving results and growth.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold text-navy mb-2">Scalable Solutions</h3>
								<p class="text-slate-700">Brand systems that grow with your business, maintaining consistency as you expand.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20 bg-navy text-white">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto text-center">
				<h2 class="text-3xl md:text-4xl font-bold mb-6">
					Ready to Transform Your Brand?
				</h2>
				<p class="text-xl text-slate-300 mb-8">
					Let's create a brand identity that sets you apart and drives results.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="https://modernbrands.co" target="_blank" rel="noopener noreferrer" class="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors">
						Visit Modern Brands
					</a>
					<a href="/contact" class="border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-colors">
						Start Your Project
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
