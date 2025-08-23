<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	
	let showButton = false;
	
	onMount(() => {
		const handleScroll = () => {
			showButton = window.scrollY > 300;
		};
		
		window.addEventListener('scroll', handleScroll);
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

{#if showButton}
	<div class="fixed bottom-6 right-6 z-40">
		<Button
			on:click={scrollToTop}
			variant="primary"
			size="sm"
			class="rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl"
			aria-label="Back to top"
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
			</svg>
		</Button>
	</div>
{/if}

<style>
	div {
		transition: opacity 0.3s ease-in-out;
	}
</style>
