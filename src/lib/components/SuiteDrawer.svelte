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
				<h2 id="suite-drawer-title" class="text-navy text-2xl font-bold">The Modern Suite</h2>
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
					<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
						<div class="flex items-start justify-between mb-3">
							<div>
								<h3 class="text-navy font-semibold text-lg mb-1">{suite.name}</h3>
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
