<script lang="ts">
	import { suiteDrawerOpen } from '$lib/stores/ui';
	import Button from './Button.svelte';
	import { trackSuiteExplore } from '$lib/utils/analytics';
	
	function openSuiteDrawer() {
		trackSuiteExplore();
		suiteDrawerOpen.set(true);
	}
</script>

<section class="bg-white text-navy section-lg relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 dot-grid opacity-20"></div>
	
	<!-- Animated gold particles -->
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-1/4 left-1/4 w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse-gold"></div>
		<div class="absolute top-1/3 right-1/3 w-0.5 h-12 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse-gold" style="animation-delay: 1s;"></div>
		<div class="absolute bottom-1/4 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse-gold" style="animation-delay: 2s;"></div>
	</div>
	
	<div class="container-standard relative z-10">
		<div class="max-w-4xl mx-auto text-center">
			<!-- Decorative line -->
			<div class="w-16 h-px bg-gold mx-auto mb-8 opacity-60"></div>
			
			<!-- Main Headline -->
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-navy text-balance">
				Business, Refined
				<br />
				<span class="text-gold animate-slide-up bg-gradient-to-r from-gold to-gold-600 bg-clip-text text-transparent" style="animation-delay: 0.2s;">Clarity. Control. Growth.</span>
			</h1>
			
			<!-- Subhead -->
			<p class="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed lead">
				We equip service businesses with brand, books, payroll, ops, and tech that actually work together.
			</p>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<Button
					on:click={openSuiteDrawer}
					variant="primary"
					size="lg"
					aria-label="Explore The Modern Suite"
				>
					Explore The Modern Suite
				</Button>
				<Button
					href="/contact"
					variant="outline"
					size="lg"
					aria-label="Get Started"
				>
					Get Started
				</Button>
			</div>
			
			<!-- Decorative line -->
			<div class="w-12 h-px bg-gold mx-auto mt-12 opacity-40"></div>
		</div>
	</div>
</section>

<style>
	/* Ensure proper z-index layering */
	section {
		position: relative;
		z-index: 1;
	}
</style>
