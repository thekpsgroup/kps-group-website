<script lang="ts">
	import { suiteDrawerOpen } from '$lib/stores/ui';
	import { SUITE } from '$lib/data/suite';
	import { createEventDispatcher } from 'svelte';
	import { trackSuiteExplore, trackServiceClick } from '$lib/utils/analytics';
	
	const dispatch = createEventDispatcher();
	
	function closeDrawer() {
		suiteDrawerOpen.set(false);
	}
	
	function openDrawer() {
		trackSuiteExplore();
		suiteDrawerOpen.set(true);
	}
	
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeDrawer();
		}
	}
	
	function scrollToSection(suiteKey: string) {
		closeDrawer();
		// Dispatch event to scroll to section
		dispatch('scrollToSection', { suiteKey });
	}
	
	function visitBrandWebsite(url: string, brandName: string) {
		trackServiceClick(brandName.toLowerCase().replace(' ', '_'));
		window.open(url, '_blank', 'noopener,noreferrer');
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

<svelte:window on:keydown={handleKeydown} />

{#if $suiteDrawerOpen}
	<!-- Backdrop -->
	<div 
		class="fixed inset-0 bg-black/50 z-40"
		on:click={closeDrawer}
		on:keydown={(e) => e.key === 'Enter' && closeDrawer()}
		role="button"
		tabindex="0"
		aria-label="Close suite drawer"
	></div>
	
	<!-- Drawer -->
	<div 
		class="fixed top-0 left-0 right-0 bg-gold z-50 transform transition-transform duration-300 ease-out"
		class:translate-y-0={$suiteDrawerOpen}
		class:-translate-y-full={!$suiteDrawerOpen}
		role="dialog"
		aria-modal="true"
		aria-labelledby="suite-drawer-title"
	>
		<div class="container mx-auto px-4 py-6">
			<div class="flex items-center justify-between mb-6">
				<!-- The Modern Suite Header Image -->
				<div class="flex items-center gap-4">
					<img 
						src="/brands/the-modern-suite.png" 
						alt="The Modern Suite" 
						class="h-8 w-auto object-contain"
					/>
					<h2 id="suite-drawer-title" class="text-navy text-2xl font-bold">The Modern Suite</h2>
				</div>
				<button
					on:click={closeDrawer}
					class="text-navy hover:text-navy-800 transition-colors focus-ring rounded p-2"
					aria-label="Close suite drawer"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each SUITE as suite}
					{@const brandColors = getBrandColors(suite)}
					{@const cssVars = getBrandCSSVars(suite)}
					<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border transition-all duration-300 group hover:scale-105" style="{Object.entries(cssVars).map(([key, value]) => `${key}: ${value}`).join('; ')}; border-color: var(--brand-primary);">
						<!-- Brand Header Image -->
						<div class="mb-4">
							<img 
								src={getBrandHeaderImage(suite.key)} 
								alt="{suite.name} header" 
								class="w-full h-16 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
							/>
						</div>
						
						<div class="flex items-start justify-between mb-3">
							<div>
								<h3 class="text-navy font-semibold text-lg mb-1" style="color: var(--brand-primary);">{suite.name}</h3>
								<p class="text-navy/80 text-sm mb-2">{suite.tag}</p>
							</div>
							{#if suite.website}
								<button
									on:click={() => suite.website && visitBrandWebsite(suite.website, suite.name)}
									class="text-navy/60 hover:text-navy transition-colors focus-ring rounded p-1"
									aria-label={`Visit ${suite.name} website`}
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</button>
							{/if}
						</div>
						
						<p class="text-navy/90 text-sm mb-4">{suite.summary}</p>
						
						<div class="flex flex-col space-y-2">
							<button
								on:click={() => scrollToSection(suite.key)}
								class="bg-navy text-gold px-4 py-2 rounded font-medium hover:bg-navy-800 transition-colors focus-ring text-sm"
							>
								Learn More
							</button>
							
							{#if suite.website}
								<a
									href={suite.website}
									target="_blank"
									rel="noopener noreferrer"
									class="text-navy/80 hover:text-navy text-sm underline focus-ring rounded px-1 py-1"
									on:click={() => suite.website && visitBrandWebsite(suite.website, suite.name)}
								>
									Visit {suite.name} →
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>
			
			<div class="mt-6 pt-6 border-t border-navy/20">
				<div class="text-center">
					<p class="text-navy/80 text-sm mb-3">
						Ready to get started? Let's find the right solution for your business.
					</p>
					<button
						on:click={() => { closeDrawer(); window.location.href = '/contact'; }}
						class="bg-navy text-gold px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors focus-ring"
					>
						Get Started
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Ensure drawer appears above other content */
	div[role="dialog"] {
		z-index: 50;
	}
</style>
