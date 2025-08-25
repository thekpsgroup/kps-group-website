<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import { trackServiceClick } from '$lib/utils/analytics';
	import type { PageData } from './$types';
	import type { Suite } from '$lib/data/suite';
	
	export let data: PageData;
	
	// Get the suite data from server-side load
	$: suite = data.suite as Suite;
	$: suiteKey = suite.key;
	$: colors = suite.brandColors;
	
	function handleCTAClick() {
		trackServiceClick(suiteKey);
		// Pre-fill contact form with selected service
		const contactForm = document.querySelector('#contact-form') as HTMLElement;
		if (contactForm) {
			// Set the service in the form
			const serviceInput = contactForm.querySelector(`[name="services"][value="${suiteKey}"]`) as HTMLInputElement;
			if (serviceInput) {
				serviceInput.checked = true;
			}
			// Scroll to contact form
			contactForm.scrollIntoView({ behavior: 'smooth' });
		} else {
			// Navigate to contact page with service pre-filled
			window.location.href = `/contact?service=${suiteKey}`;
		}
	}
	
	function visitWebsite() {
		if (suite.website) {
			window.open(suite.website, '_blank', 'noopener,noreferrer');
		}
	}
	
	// Get icon for the suite
	function getSuiteIcon(suiteKey: string) {
		const icons = {
			brands: `<svg class="w-8 h-8 text-${colors.primary}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
			</svg>`,
			ledger: `<svg class="w-8 h-8 text-${colors.primary}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
			</svg>`,
			pay: `<svg class="w-8 h-8 text-${colors.primary}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
			</svg>`,
			stack: `<svg class="w-8 h-8 text-${colors.primary}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
			</svg>`,
			consulting: `<svg class="w-8 h-8 text-${colors.primary}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
			</svg>`
		};
		return icons[suiteKey as keyof typeof icons] || icons.brands;
	}
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:title" content={data.meta.ogTitle} />
	<meta property="og:description" content={data.meta.ogDescription} />
	<meta property="og:url" content={data.meta.ogUrl} />
	<meta property="og:type" content="website" />
	<link rel="canonical" href={data.meta.canonical} />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-screen bg-gradient-to-br from-gold-50 via-white to-navy-50 flex items-center justify-center overflow-hidden">
	<!-- Enhanced animated background particles -->
	<div class="absolute inset-0 overflow-hidden">
		<!-- Floating brand elements -->
		<div class="absolute top-20 left-20 w-3 h-3 bg-gold rounded-full animate-pulse opacity-60"></div>
		<div class="absolute top-40 right-32 w-2 h-2 bg-gold-600 rounded-full animate-pulse opacity-80" style="animation-delay: 1s;"></div>
		<div class="absolute bottom-32 left-32 w-4 h-4 bg-gold rounded-full animate-pulse opacity-70" style="animation-delay: 2s;"></div>
		<div class="absolute bottom-20 right-20 w-1 h-1 bg-gold-600 rounded-full animate-pulse opacity-90" style="animation-delay: 3s;"></div>
		
		<!-- Geometric shapes -->
		<div class="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-gold/20 rounded-full animate-spin" style="animation-duration: 20s;"></div>
		<div class="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-gold/30 rounded-lg animate-pulse" style="animation-delay: 1s;"></div>
		
		<!-- Subtle grid pattern -->
		<div class="absolute inset-0 opacity-5">
			<div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, gold 1px, transparent 0); background-size: 40px 40px;"></div>
		</div>
	</div>
	
	<div class="container mx-auto px-6 py-20 relative z-10">
		<!-- Enhanced Breadcrumbs -->
		<nav class="mb-12">
			<a href="/suite" class="inline-flex items-center space-x-2 text-navy hover:text-gold transition-all duration-300 group">
				<svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
				</svg>
				<span class="font-medium">Back to The Modern Suite</span>
			</a>
		</nav>
		
		<!-- FULL-WIDTH BRAND HEADER -->
		{#if suiteKey === 'brands'}
			<div class="mb-20 -mx-6">
				<div class="relative group">
					<!-- Enhanced glow effect -->
					<div class="absolute inset-0 bg-gradient-to-r from-gold via-gold-600 to-gold rounded-2xl blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
					
					<!-- Header image container with enhanced styling -->
					<div class="relative overflow-hidden rounded-2xl shadow-2xl border border-gold/30 transform group-hover:scale-[1.02] transition-all duration-700 hover:shadow-gold/20">
						<img 
							src="/brands/modern-brands-header.png" 
							alt="Modern Brands - Build a Brand That Wins Trust & Closes Deals"
							class="w-full h-auto"
							loading="eager"
						/>
						
						<!-- Subtle overlay for depth -->
						<div class="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
					</div>
				</div>
			</div>
		{/if}
		
		<!-- FULL-WIDTH PAY HEADER (emerald theme) -->
		{#if suiteKey === 'pay'}
			<div class="mb-20 -mx-6">
				<div class="relative group">
					<!-- Emerald glow effect -->
					<div class="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 rounded-2xl blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
					
					<!-- Header container with centered logo -->
					<div class="relative overflow-hidden rounded-2xl shadow-2xl border border-emerald-300/60 transform group-hover:scale-[1.02] transition-all duration-700 hover:shadow-emerald-300/30 bg-gradient-to-br from-emerald-50 to-white">
						<div class="py-10 flex items-center justify-center">
							<img 
								src="/brands/modern/pay/logo-transparent.png" 
								alt="Modern Pay Logo"
								class="w-56 md:w-72 h-auto drop-shadow-sm"
								loading="eager"
							/>
						</div>
						<!-- Subtle top overlay for depth -->
						<div class="absolute inset-0 bg-gradient-to-t from-emerald-900/5 to-transparent pointer-events-none"></div>
					</div>
				</div>
			</div>
		{/if}
		
		<!-- FULL-WIDTH STACK HEADER (electric blue theme) -->
		{#if suiteKey === 'stack'}
			<div class="mb-20 -mx-6">
				<div class="relative group">
					<!-- Electric blue glow effect -->
					<div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-2xl blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
					
					<!-- Header container with centered logo -->
					<div class="relative overflow-hidden rounded-2xl shadow-2xl border border-blue-400/60 transform group-hover:scale-[1.02] transition-all duration-700 hover:shadow-blue-400/30 bg-gradient-to-br from-blue-50 via-white to-blue-100">
						<div class="py-10 flex items-center justify-center">
							<img 
								src="/brands/modern/stack/logo-transparent.png" 
								alt="Modern Stack Logo"
								class="w-56 md:w-72 h-auto drop-shadow-sm"
								loading="eager"
							/>
						</div>
						<!-- Subtle top overlay for depth -->
						<div class="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-transparent pointer-events-none"></div>
					</div>
				</div>
			</div>
		{/if}
		
		<div class="text-center max-w-5xl mx-auto">
			<!-- Enhanced Service Icon with Animation (for non-brands pages) -->
			{#if suiteKey !== 'brands'}
				<div class="mb-12 flex justify-center">
					<div class="relative group">
						<div class="absolute inset-0 bg-gradient-to-r from-{colors.primary} to-{colors.accent} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
						<div class="relative p-6 bg-white rounded-3xl shadow-2xl border border-{colors.primary}/20 transform group-hover:scale-105 transition-all duration-500">
							{@html getSuiteIcon(suiteKey)}
						</div>
					</div>
				</div>
			{/if}
			
			<!-- Enhanced Headline with Typography - Optimized for Brands -->
			{#if suiteKey === 'brands'}
				<div class="mb-12">
					<!-- Subtle decorative element -->
					<div class="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8 opacity-60"></div>
					
					<h1 class="text-4xl md:text-6xl font-bold text-navy mb-8 leading-tight tracking-tight">
						<span class="block">Professional Branding That</span>
						<span class="block bg-gradient-to-r from-gold via-gold-600 to-gold bg-clip-text text-transparent">
							Converts Visitors to Customers
						</span>
					</h1>
				</div>
			{:else if suiteKey === 'pay'}
				<div class="mb-8">
					<h1 class="text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight tracking-tight">
						<span class="block">Payroll & HR, Simplified</span>
						<span class="block bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 bg-clip-text text-transparent">
							So You Can Focus on Growing Your Business
						</span>
					</h1>
				</div>
			{:else if suiteKey === 'stack'}
				<div class="mb-8">
					<h1 class="text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight tracking-tight">
						<span class="block">⚡ The Tech Stack That</span>
						<span class="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-clip-text text-transparent">
							Actually Works For Your Business
						</span>
					</h1>
				</div>
			{:else}
				<div class="mb-8">
					<h1 class="text-5xl md:text-7xl font-bold text-navy mb-6 leading-tight tracking-tight">
						<span class="block">{suite.heroHeadline || 'Build a Brand That'}</span>
						<span class="block bg-gradient-to-r from-{colors.primary} via-{colors.accent} to-{colors.primary} bg-clip-text text-transparent">
							{suite.heroSubheadline || 'Wins Trust & Closes Deals'}
						</span>
					</h1>
				</div>
			{/if}
			
			<!-- Enhanced Subheadline - Optimized for Brands -->
			{#if suiteKey === 'brands'}
				<div class="mb-20">
					<p class="text-xl md:text-2xl text-navy-600 leading-relaxed max-w-4xl mx-auto font-light">
						Your logo and website are the first things prospects see. We make sure they say 
						<span class="font-semibold text-navy">professional, reliable, and here to stay.</span>
					</p>
					
					<!-- Additional value proposition -->
					<div class="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-navy-500">
						<div class="flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full">
							<svg class="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
							<span>Custom Design Only</span>
						</div>
						<div class="flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full">
							<svg class="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
							<span>90+ Lighthouse Scores</span>
						</div>
						<div class="flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full">
							<svg class="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
							<span>SEO Optimized</span>
						</div>
					</div>
				</div>
			{:else if suiteKey === 'pay'}
				<div class="mb-16">
					<p class="text-xl md:text-2xl text-navy-600 leading-relaxed max-w-4xl mx-auto font-light">
						From payroll to compliance, Modern Pay takes the stress out of managing people. We handle the headaches, so you don't have to.
					</p>
				</div>
			{:else if suiteKey === 'stack'}
				<div class="mb-16">
					<p class="text-xl md:text-2xl text-navy-600 leading-relaxed max-w-4xl mx-auto font-light">
						From IT support to ERP systems and custom software, Modern Stack optimizes, integrates, and builds the technology backbone your business deserves.
					</p>
				</div>
			{:else}
				<div class="mb-16">
					<p class="text-xl md:text-2xl text-navy-600 leading-relaxed max-w-4xl mx-auto font-light">
						{suite.description}
					</p>
				</div>
			{/if}
			
			<!-- Enhanced CTAs with Better Design - Optimized for Brands -->
			{#if suiteKey === 'brands'}
				<div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
					<Button 
						variant="primary" 
						size="lg" 
						on:click={handleCTAClick}
						class="group relative overflow-hidden bg-gradient-to-r from-gold to-gold-600 text-navy hover:from-gold-600 hover:to-gold transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 px-10 py-5 text-xl font-bold rounded-2xl"
					>
						<span class="relative z-10 flex items-center space-x-3">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
							</svg>
							<span>Book Your Free Brand Strategy Call</span>
						</span>
						<div class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
					</Button>
					
					{#if suite.website}
						<Button 
							variant="secondary" 
							size="lg" 
							on:click={visitWebsite}
							class="group border-2 border-gold text-gold hover:bg-gold hover:text-navy transform hover:-translate-y-2 transition-all duration-300 px-10 py-5 text-xl font-bold rounded-2xl"
						>
							<span class="flex items-center space-x-3">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
								<span>Visit Modern Brands Website</span>
							</span>
						</Button>
					{/if}
				</div>
			{:else if suiteKey === 'pay'}
				<div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
					<Button 
						variant="primary" 
						size="lg" 
						on:click={handleCTAClick}
						class="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-300/30 transition-all duration-300 px-10 py-5 text-xl font-bold rounded-2xl"
					>
						<span class="relative z-10">Schedule Your Free Payroll & HR Consultation</span>
						<div class="absolute inset-0 bg-white/15 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
					</Button>
					<Button 
						href="#features"
						variant="secondary" 
						size="lg" 
						class="group border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white transform hover:-translate-y-2 transition-all duration-300 px-10 py-5 text-xl font-bold rounded-2xl"
					>
						See How We Compare
					</Button>
				</div>
			{:else if suiteKey === 'stack'}
				<div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
					<Button 
						variant="primary" 
						size="lg" 
						on:click={handleCTAClick}
						class="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/30 transition-all duration-300 px-10 py-5 text-xl font-bold rounded-2xl"
					>
						<span class="relative z-10">Book a Free Tech Audit</span>
						<div class="absolute inset-0 bg-white/15 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
					</Button>
					<Button 
						href="#features"
						variant="secondary" 
						size="lg" 
						class="group border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transform hover:-translate-y-2 transition-all duration-300 px-10 py-5 text-xl font-bold rounded-2xl"
					>
						See How We Build
					</Button>
				</div>
			{:else}
				<div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
					<Button 
						variant="primary" 
						size="lg" 
						on:click={handleCTAClick}
						class="group relative overflow-hidden bg-gradient-to-r from-gold to-gold-600 text-navy hover:from-gold-600 hover:to-gold transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-2xl"
					>
						<span class="relative z-10">Book Your Free {suite.name} Strategy Call</span>
						<div class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
					</Button>
					
					{#if suite.website}
						<Button 
							variant="secondary" 
							size="lg" 
							on:click={visitWebsite}
							class="group border-2 border-gold text-gold hover:bg-gold hover:text-navy transform hover:-translate-y-1 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-2xl"
						>
							<span class="flex items-center space-x-2">
								<span>Visit {suite.name} Website</span>
								<svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</span>
						</Button>
					{/if}
				</div>
			{/if}
			
			<!-- Trust Indicators - Only for non-brands pages -->
			{#if suiteKey !== 'brands'}
				<div class="mt-16 pt-8 border-t border-gold/20">
					<div class="flex flex-wrap justify-center items-center gap-8 text-sm text-navy-500">
						<div class="flex items-center space-x-2">
							<svg class="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
							<span>90+ Lighthouse Scores</span>
						</div>
						<div class="flex items-center space-x-2">
							<svg class="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
							<span>Custom Design Only</span>
						</div>
						<div class="flex items-center space-x-2">
							<svg class="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
							<span>SEO Optimized</span>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

{#if suiteKey === 'pay'}
<!-- Pain Points Section (Modern Pay - Emerald) -->
<section class="py-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 relative overflow-hidden">
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0); background-size: 60px 60px;"></div>
	</div>
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-20">
			<div class="inline-flex items-center space-x-3 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
				</svg>
				<span>Payroll & HR Challenges</span>
			</div>
			<h2 class="text-4xl md:text-6xl font-bold text-emerald-900 mb-6 leading-tight">
				Payroll & HR Are 
				<span class="block bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">Silent Killers of Small Businesses</span>
			</h2>
			<p class="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
				Don't let hidden compliance risks and manual payroll steal your time and profit.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
			<div class="group relative">
				<div class="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-emerald-500">
					<p class="text-gray-800 leading-relaxed text-lg font-medium">Payroll takes hours every week. You didn't start your business to be a bookkeeper — but that's what it feels like every payday.</p>
				</div>
			</div>
			<div class="group relative">
				<div class="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-emerald-500">
					<p class="text-gray-800 leading-relaxed text-lg font-medium">HR compliance is a minefield. One mistake can lead to thousands in fines.</p>
				</div>
			</div>
			<div class="group relative">
				<div class="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-emerald-500">
					<p class="text-gray-800 leading-relaxed text-lg font-medium">Employee satisfaction suffers. Errors and delays damage trust in leadership.</p>
				</div>
			</div>
			<div class="group relative">
				<div class="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-emerald-500">
					<p class="text-gray-800 leading-relaxed text-lg font-medium">Benefits are confusing. Health, PTO, and retirement get neglected until crisis.</p>
				</div>
			</div>
			<div class="group relative">
				<div class="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-emerald-500">
					<p class="text-gray-800 leading-relaxed text-lg font-medium">The cost of mistakes is high. IRS penalties for payroll missteps average $850+/yr.</p>
				</div>
			</div>
		</div>

		<div class="text-center mt-16">
			<div class="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-6 shadow-xl border border-emerald-200">
				<div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</div>
				<div class="text-left">
					<p class="text-emerald-800 font-semibold">Don't risk your growth on payroll mistakes.</p>
					<p class="text-emerald-700 text-sm">Schedule your consultation.</p>
				</div>
				<Button variant="primary" size="md" on:click={handleCTAClick} class="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700">Book Consultation</Button>
			</div>
		</div>
	</div>
</section>
{/if}
{#if suiteKey === 'pay'}
<!-- Features Section (Modern Pay - Emerald) -->
<section id="features" class="py-24 bg-white relative overflow-hidden">
	<div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-50 to-transparent rounded-full blur-3xl opacity-40"></div>
	<div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-50 to-transparent rounded-full blur-3xl opacity-40"></div>
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-20">
			<div class="inline-flex items-center space-x-3 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
				</svg>
				<span>All-in-One Payroll + HR, Without the Bloat</span>
			</div>
			<h2 class="text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight">
				What You Actually Get with 
				<span class="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">Modern Pay</span>
			</h2>
			<p class="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
				Everything you need to pay your team, stay compliant, and keep employees happy — without extra software clutter.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
			<div class="group relative">
				<div class="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-3xl p-8 border border-emerald-200 hover:border-emerald-300 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl">
					<div class="flex items-start space-x-4 mb-6">
						<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
							<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-emerald-900 mb-2">Automated Payroll Processing</h3>
							<ul class="text-navy-700 space-y-2 list-disc list-inside">
								<li>Unlimited payroll runs for W-2 and 1099 workers</li>
								<li>Direct deposit, printable checks, and digital pay stubs</li>
								<li>Automatic tax withholdings and filings</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="group relative">
				<div class="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-3xl p-8 border border-emerald-200 hover:border-emerald-300 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl">
					<div class="flex items-start space-x-4 mb-6">
						<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
							<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6M9 7h6m-6 4h6" />
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-emerald-900 mb-2">Compliance & HR Support</h3>
							<ul class="text-navy-700 space-y-2 list-disc list-inside">
								<li>Digital onboarding (W-4, I-9, direct deposit)</li>
								<li>Compliance reminders: posters, OSHA, ACA, state rules</li>
								<li>Employee handbook creation and policy templates</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="group relative">
				<div class="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-3xl p-8 border border-emerald-200 hover:border-emerald-300 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl">
					<div class="flex items-start space-x-4 mb-6">
						<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
							<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-emerald-900 mb-2">Employee Self-Service</h3>
							<ul class="text-navy-700 space-y-2 list-disc list-inside">
								<li>Online portal for pay stubs, tax forms, PTO</li>
								<li>Mobile access so employees aren't texting for W-2s</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="group relative">
				<div class="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-3xl p-8 border border-emerald-200 hover:border-emerald-300 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl">
					<div class="flex items-start space-x-4 mb-6">
						<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
							<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-emerald-900 mb-2">Benefits Administration</h3>
							<ul class="text-navy-700 space-y-2 list-disc list-inside">
								<li>Health, dental, and vision setup and management</li>
								<li>401(k) integrations and retirement plan support</li>
								<li>PTO tracking and accrual automation</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="group relative">
				<div class="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-3xl p-8 border border-emerald-200 hover:border-emerald-300 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl">
					<div class="flex items-start space-x-4 mb-6">
						<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
							<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-emerald-900 mb-2">HR Consulting & Advisory</h3>
							<ul class="text-navy-700 space-y-2 list-disc list-inside">
								<li>Dedicated HR support for sticky situations</li>
								<li>Job descriptions, reviews, and policy guidance</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="group relative">
				<div class="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-3xl p-8 border border-emerald-200 hover:border-emerald-300 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl">
					<div class="flex items-start space-x-4 mb-6">
						<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
							<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 11V7a4 4 0 118 0v4m-1 4h-6a2 2 0 01-2-2V9h10v4a2 2 0 01-2 2z" />
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-emerald-900 mb-2">Scalable Integrations</h3>
							<ul class="text-navy-700 space-y-2 list-disc list-inside">
								<li>Syncs with QuickBooks, Xero, and your accounting</li>
								<li>Integrates with Modern Ledger and Modern Stack</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/if}
<!-- Pain Points Section -->
<section class="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-red-100 relative overflow-hidden">
	<!-- Background pattern -->
	<div class="absolute inset-0 opacity-5">
		<div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #dc2626 1px, transparent 0); background-size: 60px 60px;"></div>
	</div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-20">
			<div class="inline-flex items-center space-x-3 bg-red-100 text-red-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
				</svg>
				<span>Common Brand Problems</span>
			</div>
			
			<h2 class="text-4xl md:text-6xl font-bold text-red-800 mb-6 leading-tight">
				The Truth: Your Brand Might Be 
				<span class="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Costing You Customers</span>
			</h2>
			
			<p class="text-xl text-red-600 max-w-3xl mx-auto leading-relaxed">
				Stop losing business because of your image. 
				<span class="font-semibold">Book your free call.</span>
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
			{#each suite.painPoints as pain, index}
				<div class="group relative">
					<!-- Card with enhanced design -->
					<div class="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-red-500 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl" style="animation-delay: {index * 0.1}s;">
						<!-- Icon with animation -->
						<div class="flex items-start space-x-4 mb-6">
							<div class="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
								<svg class="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
								</svg>
							</div>
							
							<!-- Content -->
							<div class="flex-1">
								<p class="text-gray-800 leading-relaxed text-lg font-medium">{pain}</p>
							</div>
						</div>
						
						<!-- Impact indicator -->
						<div class="flex items-center justify-between pt-4 border-t border-red-100">
							<span class="text-sm text-red-600 font-medium">High Impact</span>
							<div class="flex space-x-1">
								<div class="w-2 h-2 bg-red-500 rounded-full"></div>
								<div class="w-2 h-2 bg-red-500 rounded-full"></div>
								<div class="w-2 h-2 bg-red-500 rounded-full"></div>
							</div>
						</div>
					</div>
					
					<!-- Hover effect background -->
					<div class="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-3xl transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 -z-10"></div>
				</div>
			{/each}
		</div>
		
		<!-- Call to action within pain section -->
		<div class="text-center mt-16">
			<div class="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-6 shadow-xl border border-red-200">
				<div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</div>
				<div class="text-left">
					<p class="text-red-800 font-semibold">Ready to fix these problems?</p>
					<p class="text-red-600 text-sm">Get your free brand strategy call today</p>
				</div>
				<Button 
					variant="primary" 
					size="md" 
					on:click={handleCTAClick}
					class="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transform hover:-translate-y-1 transition-all duration-300"
				>
					Book Free Call
				</Button>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section id="features" class="py-24 bg-white relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gold-50 to-transparent rounded-full blur-3xl opacity-30"></div>
	<div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-navy-50 to-transparent rounded-full blur-3xl opacity-30"></div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-20">
			<div class="inline-flex items-center space-x-3 bg-gold-100 text-gold-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
				</svg>
				<span>What You Actually Get</span>
			</div>
			
			<h2 class="text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight">
				Everything You Need To 
				<span class="block bg-gradient-to-r from-gold to-gold-600 bg-clip-text text-transparent">Compete With the Big Guys</span>
			</h2>
			
			<p class="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
				No templates. No shortcuts. Just professional results that make you look bigger than you are.
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
			{#each suite.features as feature, index}
				<div class="group relative">
					<!-- Enhanced card design -->
					<div class="bg-gradient-to-br from-gold-50 via-white to-navy-50 rounded-3xl p-8 border border-gold-200 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:border-gold-300" style="animation-delay: {index * 0.1}s;">
						<!-- Icon with enhanced animation -->
						<div class="flex items-start space-x-4 mb-6">
							<div class="relative">
								<div class="w-16 h-16 bg-gradient-to-br from-gold to-gold-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
									<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<!-- Glow effect -->
								<div class="absolute inset-0 bg-gold rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
							</div>
							
							<!-- Content with better typography -->
							<div class="flex-1">
								<p class="text-navy leading-relaxed text-lg font-medium">{feature}</p>
							</div>
						</div>
						
						<!-- Feature category indicator -->
						<div class="flex items-center justify-between pt-4 border-t border-gold-100">
							<span class="text-sm text-gold-600 font-medium">Premium Feature</span>
							<div class="flex items-center space-x-1">
								<svg class="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								<svg class="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								<svg class="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							</div>
						</div>
					</div>
					
					<!-- Hover effect background -->
					<div class="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-gold-600/5 rounded-3xl transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 -z-10"></div>
				</div>
			{/each}
		</div>
		
		<!-- Features summary -->
		<div class="text-center mt-20">
			<div class="inline-flex items-center space-x-6 bg-gradient-to-r from-gold-50 to-navy-50 rounded-3xl px-10 py-8 shadow-xl border border-gold-200">
				<div class="text-center">
					<div class="text-3xl font-bold text-gold mb-2">6</div>
					<div class="text-sm text-navy-600">Premium Features</div>
				</div>
				<div class="w-px h-12 bg-gold-200"></div>
				<div class="text-center">
					<div class="text-3xl font-bold text-navy mb-2">100%</div>
					<div class="text-sm text-navy-600">Custom Design</div>
				</div>
				<div class="w-px h-12 bg-gold-200"></div>
				<div class="text-center">
					<div class="text-3xl font-bold text-gold mb-2">90+</div>
					<div class="text-sm text-navy-600">Lighthouse Score</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Benefits Section -->
<section class="py-24 bg-gradient-to-br from-navy-50 via-white to-gold-50 relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-navy-100 to-transparent rounded-full blur-3xl opacity-20"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gold-100 to-transparent rounded-full blur-3xl opacity-20"></div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-20">
			<div class="inline-flex items-center space-x-3 bg-navy-100 text-navy-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
				</svg>
				<span>The Outcomes You'll See</span>
			</div>
			
			<h2 class="text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight">
				Your Brand, Finally 
				<span class="block bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">Working For You</span>
			</h2>
			
			<p class="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
				Transform your business image and start winning more customers with professional branding.
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
			{#each suite.benefits as benefit, index}
				<div class="group relative">
					<!-- Enhanced card design -->
					<div class="bg-white rounded-3xl p-8 shadow-xl transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl border border-navy-100 hover:border-navy-200" style="animation-delay: {index * 0.1}s;">
						<!-- Icon with enhanced animation -->
						<div class="flex items-start space-x-4 mb-6">
							<div class="relative">
								<div class="w-16 h-16 bg-gradient-to-br from-navy to-gold rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
									<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<!-- Glow effect -->
								<div class="absolute inset-0 bg-gradient-to-br from-navy to-gold rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
							</div>
							
							<!-- Content with better typography -->
							<div class="flex-1">
								<p class="text-navy leading-relaxed text-lg font-medium">{benefit}</p>
							</div>
						</div>
						
						<!-- Benefit impact indicator -->
						<div class="flex items-center justify-between pt-4 border-t border-navy-100">
							<span class="text-sm text-navy-600 font-medium">Proven Result</span>
							<div class="flex items-center space-x-2">
								<div class="w-2 h-2 bg-navy rounded-full"></div>
								<div class="w-2 h-2 bg-navy rounded-full"></div>
								<div class="w-2 h-2 bg-navy rounded-full"></div>
								<div class="w-2 h-2 bg-navy rounded-full"></div>
								<div class="w-2 h-2 bg-navy rounded-full"></div>
							</div>
						</div>
					</div>
					
					<!-- Hover effect background -->
					<div class="absolute inset-0 bg-gradient-to-br from-navy-500/5 to-gold-500/5 rounded-3xl transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 -z-10"></div>
				</div>
			{/each}
		</div>
		
		<!-- Benefits summary with stats -->
		<div class="text-center mt-20">
			<div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
				<div class="bg-white rounded-3xl p-8 shadow-xl border border-navy-100">
					<div class="text-4xl font-bold text-navy mb-2">3x</div>
					<div class="text-sm text-navy-600">Higher Conversion Rates</div>
				</div>
				<div class="bg-white rounded-3xl p-8 shadow-xl border border-navy-100">
					<div class="text-4xl font-bold text-gold mb-2">50%</div>
					<div class="text-sm text-navy-600">More Professional Appearance</div>
				</div>
				<div class="bg-white rounded-3xl p-8 shadow-xl border border-navy-100">
					<div class="text-4xl font-bold text-navy mb-2">90%</div>
					<div class="text-sm text-navy-600">Customer Trust Increase</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Process Section (if available) -->
{#if suite.process && suite.process.length > 0}
	<section class="py-24 bg-white relative overflow-hidden">
		<!-- Background decoration -->
		<div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-gold-50 to-transparent rounded-full blur-3xl opacity-30"></div>
		
		<div class="container mx-auto px-6 relative z-10">
			<div class="text-center mb-20">
				<div class="inline-flex items-center space-x-3 bg-gold-100 text-gold-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
					</svg>
					<span>Our Proven Process</span>
				</div>
				
				<h2 class="text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight">
					From Idea to Launch in 
					<span class="block bg-gradient-to-r from-gold to-gold-600 bg-clip-text text-transparent">Weeks, Not Months</span>
				</h2>
				
				<p class="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
					Simple, proven, no fluff. We get you from concept to professional brand in record time.
				</p>
			</div>
			
			<div class="max-w-5xl mx-auto">
				<div class="relative">
					<!-- Enhanced process line -->
					<div class="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold-600 to-gold rounded-full"></div>
					
					{#each suite.process as step, index}
						<div class="relative flex items-start mb-16 last:mb-0">
							<!-- Enhanced step number -->
							<div class="relative">
								<div class="w-16 h-16 bg-gradient-to-br from-gold to-gold-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 relative shadow-lg">
									{index + 1}
								</div>
								<!-- Glow effect -->
								<div class="absolute inset-0 bg-gold rounded-full blur-xl opacity-30"></div>
							</div>
							
							<!-- Enhanced step content -->
							<div class="ml-8 flex-1">
								<div class="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gold-100 hover:border-gold-200 transition-all duration-300 transform hover:-translate-y-1">
									<div class="flex items-start space-x-4">
										<!-- Step icon -->
										<div class="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
											{#if index === 0}
												<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
												</svg>
											{:else if index === 1}
												<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
												</svg>
											{:else if index === 2}
												<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
												</svg>
											{:else if index === 3}
												<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
												</svg>
											{:else}
												<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
												</svg>
											{/if}
										</div>
										
										<!-- Step content -->
										<div class="flex-1">
											<p class="text-navy leading-relaxed text-lg font-medium">{step}</p>
										</div>
									</div>
									
									<!-- Step duration indicator -->
									<div class="flex items-center justify-between pt-4 mt-4 border-t border-gold-100">
										<span class="text-sm text-gold-600 font-medium">
											{#if index === 0}
												Week 1
											{:else if index === 1}
												Week 2-3
											{:else if index === 2}
												Week 4-6
											{:else if index === 3}
												Week 7
											{:else}
												Ongoing
											{/if}
										</span>
										<div class="flex items-center space-x-1">
											<div class="w-2 h-2 bg-gold rounded-full"></div>
											<div class="w-2 h-2 bg-gold rounded-full"></div>
											<div class="w-2 h-2 bg-gold rounded-full"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
			
			<!-- Process summary -->
			<div class="text-center mt-20">
				<div class="inline-flex items-center space-x-6 bg-gradient-to-r from-gold-50 to-navy-50 rounded-3xl px-10 py-8 shadow-xl border border-gold-200">
					<div class="text-center">
						<div class="text-3xl font-bold text-gold mb-2">5</div>
						<div class="text-sm text-navy-600">Simple Steps</div>
					</div>
					<div class="w-px h-12 bg-gold-200"></div>
					<div class="text-center">
						<div class="text-3xl font-bold text-navy mb-2">6-8</div>
						<div class="text-sm text-navy-600">Weeks Total</div>
					</div>
					<div class="w-px h-12 bg-gold-200"></div>
					<div class="text-center">
						<div class="text-3xl font-bold text-gold mb-2">100%</div>
						<div class="text-sm text-navy-600">Satisfaction</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}

<!-- Testimonials Section (if available) -->
{#if suite.testimonials && suite.testimonials.length > 0}
	<section class="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
		<!-- Background decoration -->
		<div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gold-100 to-transparent rounded-full blur-3xl opacity-20"></div>
		<div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-navy-100 to-transparent rounded-full blur-3xl opacity-20"></div>
		
		<div class="container mx-auto px-6 relative z-10">
			<div class="text-center mb-20">
				<div class="inline-flex items-center space-x-3 bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
					</svg>
					<span>Client Success Stories</span>
				</div>
				
				<h2 class="text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight">
					See What Happens When 
					<span class="block bg-gradient-to-r from-gold to-navy bg-clip-text text-transparent">Small Businesses Look Big</span>
				</h2>
				
				<p class="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
					Real results from real service businesses who transformed their brand with Modern Brands.
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
				{#each suite.testimonials as testimonial, index}
					<div class="group relative">
						<!-- Enhanced testimonial card -->
						<div class="bg-white rounded-3xl p-8 shadow-xl transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-gold-200" style="animation-delay: {index * 0.1}s;">
							<!-- Quote icon with animation -->
							<div class="flex items-start space-x-4 mb-6">
								<div class="relative">
									<div class="w-16 h-16 bg-gradient-to-br from-gold to-gold-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
										<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
											<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
										</svg>
									</div>
									<!-- Glow effect -->
									<div class="absolute inset-0 bg-gold rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
								</div>
								
								<!-- Testimonial content -->
								<div class="flex-1">
									<p class="text-navy leading-relaxed text-lg italic font-medium">"{testimonial}"</p>
								</div>
							</div>
							
							<!-- Client info -->
							<div class="flex items-center justify-between pt-4 border-t border-gray-100">
								<div class="flex items-center space-x-3">
									<div class="w-10 h-10 bg-gradient-to-br from-navy to-gold rounded-full flex items-center justify-center">
										<span class="text-white font-semibold text-sm">
											{#if index === 0}
												JD
											{:else if index === 1}
												SM
											{:else}
												RK
											{/if}
										</span>
									</div>
									<div>
										<div class="text-sm font-semibold text-navy">
											{#if index === 0}
												John Davis
											{:else if index === 1}
												Sarah Miller
											{:else}
												Robert Kim
											{/if}
										</div>
										<div class="text-xs text-gray-500">
											{#if index === 0}
												HVAC Contractor
											{:else if index === 1}
												Plumbing Services
											{:else}
												Landscaping Co.
											{/if}
										</div>
									</div>
								</div>
								
								<!-- Rating -->
								<div class="flex items-center space-x-1">
									<svg class="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg class="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg class="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg class="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg class="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
							</div>
							
							<!-- Hover effect background -->
							<div class="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-navy-500/5 rounded-3xl transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 -z-10"></div>
						</div>
					</div>
				{/each}
			</div>
			
			<!-- Testimonials summary -->
			<div class="text-center mt-20">
				<div class="inline-flex items-center space-x-6 bg-white rounded-3xl px-10 py-8 shadow-xl border border-gray-200">
					<div class="text-center">
						<div class="text-3xl font-bold text-gold mb-2">100+</div>
						<div class="text-sm text-navy-600">Happy Clients</div>
					</div>
					<div class="w-px h-12 bg-gray-200"></div>
					<div class="text-center">
						<div class="text-3xl font-bold text-navy mb-2">5.0</div>
						<div class="text-sm text-navy-600">Average Rating</div>
					</div>
					<div class="w-px h-12 bg-gray-200"></div>
					<div class="text-center">
						<div class="text-3xl font-bold text-gold mb-2">98%</div>
						<div class="text-sm text-navy-600">Satisfaction Rate</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}

<!-- Final CTA Section -->
<section class="py-24 bg-gradient-to-br from-gold via-gold-600 to-gold-700 relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
	<div class="absolute bottom-0 right-0 w-96 h-96 bg-navy/10 rounded-full blur-3xl"></div>
	
	<!-- Floating elements -->
	<div class="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
	<div class="absolute top-40 right-32 w-2 h-2 bg-white/30 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
	<div class="absolute bottom-32 left-32 w-3 h-3 bg-white/25 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center max-w-5xl mx-auto">
			<!-- Enhanced headline -->
			<div class="mb-12">
				<h2 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
					The Best Time To Elevate Your Brand 
					<span class="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Was Yesterday.</span>
					<span class="block text-3xl md:text-5xl mt-4">The Next Best Time Is Now.</span>
				</h2>
			</div>
			
			<!-- Enhanced subtext -->
			{#if suite.ctaSubtext}
				<div class="mb-16">
					<p class="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
						{suite.ctaSubtext}
					</p>
				</div>
			{/if}
			
			<!-- Enhanced CTAs -->
			<div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
				<Button 
					variant="primary" 
					size="lg" 
					on:click={handleCTAClick}
					class="group relative overflow-hidden bg-white text-navy hover:bg-gray-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 px-10 py-5 text-xl font-bold rounded-3xl shadow-xl"
				>
					<span class="relative z-10 flex items-center space-x-3">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
						</svg>
						<span>Book Your Free {suite.name} Strategy Call</span>
					</span>
					<div class="absolute inset-0 bg-gradient-to-r from-gold-100 to-gold-200 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
				</Button>
				
				<Button 
					variant="secondary" 
					size="lg" 
					on:click={() => window.location.href = '/contact'}
					class="group border-2 border-white text-white hover:bg-white hover:text-navy transform hover:-translate-y-2 transition-all duration-300 px-10 py-5 text-xl font-bold rounded-3xl"
				>
					<span class="flex items-center space-x-3">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
						</svg>
						<span>Request a Brand Review</span>
					</span>
				</Button>
			</div>
			
			<!-- Trust indicators -->
			<div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
				<div class="text-center">
					<div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<div class="text-white font-semibold mb-2">Free Strategy Call</div>
					<div class="text-white/70 text-sm">No obligation, just insights</div>
				</div>
				
				<div class="text-center">
					<div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
						</svg>
					</div>
					<div class="text-white font-semibold mb-2">Custom Proposal</div>
					<div class="text-white/70 text-sm">Tailored to your business</div>
				</div>
				
				<div class="text-center">
					<div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<div class="text-white font-semibold mb-2">Fast Results</div>
					<div class="text-white/70 text-sm">From concept to launch in weeks</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Back to Suite Link -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-6 text-center">
		<a 
			href="/suite" 
			class="inline-flex items-center space-x-3 text-navy hover:text-gold transition-all duration-300 font-medium group"
		>
			<svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
			</svg>
			<span class="text-lg">Back to The Modern Suite</span>
		</a>
	</div>
</section>

{#if suiteKey === 'pay'}
<!-- Benefits Section (Modern Pay - Emerald) -->
<section class="py-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 relative overflow-hidden">
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0); background-size: 60px 60px;"></div>
	</div>
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-20">
			<div class="inline-flex items-center space-x-3 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
				</svg>
				<span>Why Growing Businesses Trust Modern Pay</span>
			</div>
			<h2 class="text-4xl md:text-6xl font-bold text-emerald-900 mb-6 leading-tight">
				The Outcomes You'll 
				<span class="block bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">Actually See</span>
			</h2>
			<p class="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
				Transform your payroll from a time-suck into a competitive advantage.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
			<div class="group relative">
				<div class="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-emerald-500 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl">
					<div class="flex items-start space-x-4 mb-6">
						<div class="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0">
							<svg class="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-emerald-900 mb-2">Save Time Every Pay Cycle</h3>
							<p class="text-gray-700 leading-relaxed">Payroll that used to take hours now takes minutes.</p>
						</div>
					</div>
				</div>
			</div>

			<div class="group relative">
				<div class="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-emerald-500 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl">
					<div class="flex items-start space-x-4 mb-6">
						<div class="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0">
							<svg class="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-emerald-900 mb-2">Stay Compliant Without Stress</h3>
							<p class="text-gray-700 leading-relaxed">Never wonder if you're missing a law, poster, or form.</p>
						</div>
					</div>
				</div>
			</div>

			<div class="group relative">
				<div class="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-emerald-500 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl">
					<div class="flex items-start space-x-4 mb-6">
						<div class="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0">
							<svg class="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-emerald-900 mb-2">Happy Employees, Retained Employees</h3>
							<p class="text-gray-700 leading-relaxed">Paychecks on time, every time, with transparent access.</p>
						</div>
					</div>
				</div>
			</div>

			<div class="group relative">
				<div class="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-emerald-500 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl">
					<div class="flex items-start space-x-4 mb-6">
						<div class="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0">
							<svg class="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-emerald-900 mb-2">Unlock Better Benefits</h3>
							<p class="text-gray-700 leading-relaxed">Offer benefits that make you competitive, without being overwhelmed.</p>
						</div>
					</div>
				</div>
			</div>

			<div class="group relative">
				<div class="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-emerald-500 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl">
					<div class="flex items-start space-x-4 mb-6">
						<div class="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0">
							<svg class="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-emerald-900 mb-2">Expert Guidance on Demand</h3>
							<p class="text-gray-700 leading-relaxed">HR pros at your side to prevent costly mistakes.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/if}

{#if suiteKey === 'pay'}
<!-- Process Section (Modern Pay - Emerald) -->
<section class="py-24 bg-white relative overflow-hidden">
	<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-50 to-transparent rounded-full blur-3xl opacity-40"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-50 to-transparent rounded-full blur-3xl opacity-40"></div>
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-20">
			<div class="inline-flex items-center space-x-3 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
				</svg>
				<span>From Setup to Paycheck, We Make It Easy</span>
			</div>
			<h2 class="text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight">
				Streamlined & 
				<span class="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">Simple Process</span>
			</h2>
			<p class="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
				Get from zero to running payroll in days, not weeks.
			</p>
		</div>

		<div class="max-w-6xl mx-auto">
			<div class="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
				<div class="text-center">
					<div class="relative mb-6">
						<div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
							<span class="text-2xl font-bold text-white">1</span>
						</div>
						<div class="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-8 bg-emerald-200"></div>
					</div>
					<h3 class="text-lg font-semibold text-emerald-900 mb-2">Discovery Call</h3>
					<p class="text-navy-600 text-sm">We review your payroll, employee setup, and compliance needs.</p>
				</div>

				<div class="text-center">
					<div class="relative mb-6">
						<div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
							<span class="text-2xl font-bold text-white">2</span>
						</div>
						<div class="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-8 bg-emerald-200"></div>
					</div>
					<h3 class="text-lg font-semibold text-emerald-900 mb-2">Onboarding & Setup</h3>
					<p class="text-navy-600 text-sm">Import employees, connect your bank, and configure pay schedules.</p>
				</div>

				<div class="text-center">
					<div class="relative mb-6">
						<div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
							<span class="text-2xl font-bold text-white">3</span>
						</div>
						<div class="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-8 bg-emerald-200"></div>
					</div>
					<h3 class="text-lg font-semibold text-emerald-900 mb-2">Run Payroll</h3>
					<p class="text-navy-600 text-sm">Review and approve payroll in just a few clicks.</p>
				</div>

				<div class="text-center">
					<div class="relative mb-6">
						<div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
							<span class="text-2xl font-bold text-white">4</span>
						</div>
						<div class="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-8 bg-emerald-200"></div>
					</div>
					<h3 class="text-lg font-semibold text-emerald-900 mb-2">Employee Access</h3>
					<p class="text-navy-600 text-sm">Staff get their own portal for pay stubs, W-2s, PTO.</p>
				</div>

				<div class="text-center">
					<div class="relative mb-6">
						<div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
							<span class="text-2xl font-bold text-white">5</span>
						</div>
					</div>
					<h3 class="text-lg font-semibold text-emerald-900 mb-2">Ongoing Support</h3>
					<p class="text-navy-600 text-sm">We handle tax filings, compliance alerts, and HR guidance.</p>
				</div>
			</div>
		</div>
	</div>
</section>
{/if}

{#if suiteKey === 'pay'}
<!-- Testimonials Section (Modern Pay - Emerald) -->
<section class="py-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 relative overflow-hidden">
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0); background-size: 60px 60px;"></div>
	</div>
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-20">
			<div class="inline-flex items-center space-x-3 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
				</svg>
				<span>See How Businesses Like Yours Simplified Payroll</span>
			</div>
			<h2 class="text-4xl md:text-6xl font-bold text-emerald-900 mb-6 leading-tight">
				Real Results from 
				<span class="block bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">Real Businesses</span>
			</h2>
			<p class="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
				Don't just take our word for it — hear from business owners who've transformed their payroll.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
			<div class="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200">
				<div class="flex items-start space-x-4 mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
						<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
						</svg>
					</div>
					<div class="flex-1">
						<blockquote class="text-lg text-navy-700 leading-relaxed mb-4">
							"We used to spend 6+ hours a week on payroll. With Modern Pay, it's 15 minutes. The time savings alone paid for the service in the first month."
						</blockquote>
						<div class="flex items-center space-x-3">
							<div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
								<span class="text-emerald-600 font-semibold">S</span>
							</div>
							<div>
								<p class="font-semibold text-emerald-900">Sarah Chen</p>
								<p class="text-sm text-emerald-600">Owner, Chen Consulting</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200">
				<div class="flex items-start space-x-4 mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
						<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
						</svg>
					</div>
					<div class="flex-1">
						<blockquote class="text-lg text-navy-700 leading-relaxed mb-4">
							"A local HVAC company avoided a $10,000 IRS penalty by switching to compliant payroll and HR through Modern Pay. The peace of mind is priceless."
						</blockquote>
						<div class="flex items-center space-x-3">
							<div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
								<span class="text-emerald-600 font-semibold">M</span>
							</div>
							<div>
								<p class="font-semibold text-emerald-900">Mike Rodriguez</p>
								<p class="text-sm text-emerald-600">CEO, Cool Air Pro</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/if}

{#if suiteKey === 'pay'}
<!-- Final CTA Section (Modern Pay - Emerald) -->
<section class="py-24 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 relative overflow-hidden">
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0); background-size: 60px 60px;"></div>
	</div>
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-16">
			<div class="inline-flex items-center space-x-3 bg-emerald-500/20 text-emerald-100 px-6 py-3 rounded-full text-sm font-semibold mb-8">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
				</svg>
				<span>Ready to Transform Your Payroll?</span>
			</div>
			<h2 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
				Payroll & HR Don't Have to Be a 
				<span class="block bg-gradient-to-r from-emerald-200 to-emerald-100 bg-clip-text text-transparent">Headache Anymore</span>
			</h2>
			<p class="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-12">
				Every team is different. We'll create a tailored proposal based on your headcount and needs.
			</p>
		</div>

		<div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
			<Button 
				variant="primary" 
				size="lg" 
				on:click={handleCTAClick}
				class="group relative overflow-hidden bg-white text-emerald-700 hover:bg-emerald-50 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 px-10 py-5 text-xl font-bold rounded-2xl"
			>
				<span class="relative z-10 flex items-center space-x-3">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
					</svg>
					<span>Schedule Your Free Payroll & HR Consultation</span>
				</span>
				<div class="absolute inset-0 bg-emerald-100/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
			</Button>
			
			<Button 
				variant="secondary" 
				size="lg" 
				on:click={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
				class="group border-2 border-emerald-300 text-emerald-200 hover:bg-emerald-300 hover:text-emerald-800 transform hover:-translate-y-2 transition-all duration-300 px-10 py-5 text-xl font-bold rounded-2xl"
			>
				<span class="flex items-center space-x-3">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
					</svg>
					<span>Request a Payroll Audit</span>
				</span>
			</Button>
		</div>

		<div class="text-center">
			<div class="inline-flex items-center space-x-4 bg-emerald-500/20 rounded-2xl px-8 py-6 border border-emerald-400/30">
				<div class="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center">
					<svg class="w-6 h-6 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<div class="text-left">
					<p class="text-emerald-100 font-semibold">Free Compliance Check</p>
					<p class="text-emerald-200 text-sm">We'll provide a free compliance audit to identify potential risks.</p>
				</div>
			</div>
		</div>
	</div>
</section>
{/if}