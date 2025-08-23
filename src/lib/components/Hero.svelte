<script lang="ts">
	import { suiteDrawerOpen } from '$lib/stores/ui';
	
	function openSuiteDrawer() {
		suiteDrawerOpen.set(true);
	}
</script>

<section class="bg-white text-navy py-20 lg:py-32 relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 dot-grid opacity-20"></div>
	
	<!-- Animated gold particles -->
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-1/4 left-1/4 w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse-gold"></div>
		<div class="absolute top-1/3 right-1/3 w-0.5 h-12 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse-gold" style="animation-delay: 1s;"></div>
		<div class="absolute bottom-1/4 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse-gold" style="animation-delay: 2s;"></div>
	</div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="max-w-4xl mx-auto text-center">
			<!-- Decorative line -->
			<div class="w-16 h-px bg-gold mx-auto mb-8 opacity-60"></div>
			
			<!-- Main Headline -->
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-navy">
				Business, Refined
				<br />
				<span class="text-gold">Clarity. Control. Growth.</span>
			</h1>
			
			<!-- Subhead -->
			<p class="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
				We equip service businesses with brand, books, payroll, ops, and tech that actually work together.
			</p>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<button
					on:click={openSuiteDrawer}
					class="bg-gold text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-all duration-300 focus-ring shadow-lg hover:shadow-xl transform hover:-translate-y-1"
					aria-label="Explore The Modern Suite"
				>
					Explore The Modern Suite
				</button>
				<a
					href="/contact"
					class="border-2 border-navy text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-navy hover:text-white transition-all duration-300 focus-ring"
					aria-label="Get Started"
				>
					Get Started
				</a>
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
