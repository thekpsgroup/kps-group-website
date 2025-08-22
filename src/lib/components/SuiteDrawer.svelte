<script lang="ts">
	import { suiteDrawerOpen } from '$lib/stores/roadmap';
	import { SUITE } from '$lib/data/suite';
	import { smoothScrollTo } from '$lib/utils/observe';
	
	function handleSuiteClick(suiteKey: string) {
		suiteDrawerOpen.set(false);
		// Scroll to the suite section or navigate to suite page
		const suiteElement = document.querySelector(`[data-suite="${suiteKey}"]`) as HTMLElement;
		if (suiteElement) {
			smoothScrollTo(suiteElement, 100);
		} else {
			// Navigate to suite page if not on landing
			window.location.href = `/suite#${suiteKey}`;
		}
	}
	
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			suiteDrawerOpen.set(false);
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if $suiteDrawerOpen}
	<div class="fixed inset-0 z-40">
		<!-- Backdrop -->
		<div 
			class="absolute inset-0 bg-black/50 backdrop-blur-sm"
			on:click={() => suiteDrawerOpen.set(false)}
			on:keydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					suiteDrawerOpen.set(false);
				}
			}}
			role="button"
			tabindex="0"
			aria-label="Close suite drawer"
		></div>
		
		<!-- Drawer -->
		<div class="absolute top-0 left-0 right-0 bg-gold transform transition-transform duration-300 ease-out">
			<div class="container mx-auto px-4 py-6">
				<div class="flex items-center justify-between mb-6">
					<h2 class="text-navy text-xl font-semibold">The Modern Suite</h2>
					<button
						on:click={() => suiteDrawerOpen.set(false)}
						class="text-navy hover:text-navy-800 transition-colors focus-ring rounded p-2"
						aria-label="Close drawer"
					>
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				
				<!-- Suite Chips -->
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
					{#each SUITE as suite}
						<button
							on:click={() => handleSuiteClick(suite.key)}
							class="bg-navy text-white p-4 rounded-lg text-left hover:bg-navy-800 transition-colors focus-ring group"
							aria-label="View {suite.name} - {suite.tag}"
						>
							<h3 class="font-semibold text-gold mb-1 group-hover:text-gold-600 transition-colors">
								{suite.name}
							</h3>
							<p class="text-sm text-slate mb-2">{suite.tag}</p>
							<p class="text-xs text-slate/80 leading-relaxed">{suite.summary}</p>
						</button>
					{/each}
				</div>
				
				<!-- CTA -->
				<div class="mt-6 text-center">
					<a
						href="/suite"
						class="inline-block bg-navy text-gold px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors focus-ring"
					>
						View All Services
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Ensure drawer appears above other content */
	div[class*="fixed"] {
		z-index: 40;
	}
</style>
