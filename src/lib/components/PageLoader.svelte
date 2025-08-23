<script lang="ts">
	import { navigating } from '$app/stores';
	import LoadingSpinner from './LoadingSpinner.svelte';
</script>

{#if $navigating}
	<div class="fixed top-0 left-0 right-0 z-50 bg-gold/90 backdrop-blur-sm">
		<div class="flex items-center justify-center py-2">
			<LoadingSpinner size="sm" color="navy" />
			<span class="ml-2 text-navy text-sm font-medium">Loading...</span>
		</div>
	</div>
{/if}
