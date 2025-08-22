<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { suiteDrawerOpen } from '$lib/stores/ui';
	
	const dispatch = createEventDispatcher();
	
	let mobileMenuOpen = false;
	
	function toggleSuiteDrawer() {
		suiteDrawerOpen.set(!$suiteDrawerOpen);
	}
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		dispatch('toggleMobileMenu', { open: mobileMenuOpen });
	}
	
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			suiteDrawerOpen.set(false);
			mobileMenuOpen = false;
		}
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<header class="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
	<div class="container mx-auto px-4 py-4">
		<div class="flex items-center justify-between">
			<!-- KPS Logo -->
			<a href="/" class="flex items-center space-x-2 focus-ring rounded" aria-label="The KPS Group - Home">
				<img src="/brands/kps/photos/kps.png" alt="The KPS Group" class="h-8 w-auto" />
				<span class="text-white font-semibold text-lg">The KPS Group</span>
			</a>
			
			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center space-x-8" aria-label="Main navigation">
				<a href="/suite" class="text-slate hover:text-gold transition-colors focus-ring rounded px-2 py-1">
					Suite
				</a>
				<a href="/outcomes" class="text-slate hover:text-gold transition-colors focus-ring rounded px-2 py-1">
					Outcomes
				</a>
				<a href="/contact" class="text-slate hover:text-gold transition-colors focus-ring rounded px-2 py-1">
					Contact
				</a>
			</nav>
			
			<!-- Suite Drawer Button -->
			<button
				on:click={toggleSuiteDrawer}
				class="hidden md:block bg-gold text-navy px-6 py-2 rounded-lg font-semibold hover:bg-gold-600 transition-colors focus-ring"
				aria-label="Explore The Modern Suite"
				aria-expanded={$suiteDrawerOpen}
			>
				Explore The Modern Suite
			</button>
			
			<!-- Mobile Menu Button -->
			<button
				class="md:hidden text-white hover:text-gold transition-colors focus-ring rounded p-2"
				aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
				aria-expanded={mobileMenuOpen}
				on:click={toggleMobileMenu}
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					{#if mobileMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>
		
		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<nav class="md:hidden mt-4 pb-4 border-t border-gold/20" aria-label="Mobile navigation">
				<div class="flex flex-col space-y-4 pt-4">
					<a 
						href="/suite" 
						class="text-slate hover:text-gold transition-colors focus-ring rounded px-2 py-1"
						on:click={closeMobileMenu}
					>
						Suite
					</a>
					<a 
						href="/outcomes" 
						class="text-slate hover:text-gold transition-colors focus-ring rounded px-2 py-1"
						on:click={closeMobileMenu}
					>
						Outcomes
					</a>
					<a 
						href="/contact" 
						class="text-slate hover:text-gold transition-colors focus-ring rounded px-2 py-1"
						on:click={closeMobileMenu}
					>
						Contact
					</a>
					<button
						on:click={() => { toggleSuiteDrawer(); closeMobileMenu(); }}
						class="bg-gold text-navy px-6 py-2 rounded-lg font-semibold hover:bg-gold-600 transition-colors focus-ring text-left"
						aria-label="Explore The Modern Suite"
					>
						Explore The Modern Suite
					</button>
				</div>
			</nav>
		{/if}
	</div>
</header>

<style>
	/* Ensure header stays on top */
	header {
		position: sticky;
		top: 0;
		z-index: 50;
	}
</style>
