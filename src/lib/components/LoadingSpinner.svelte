<script lang="ts">
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let color: 'gold' | 'white' | 'navy' = 'gold';
	
	const sizeClasses = {
		sm: 'w-4 h-4',
		md: 'w-6 h-6', 
		lg: 'w-8 h-8'
	};
	
	const colorClasses = {
		gold: 'border-gold',
		white: 'border-white',
		navy: 'border-navy'
	};
</script>

<div 
	class="spinner {sizeClasses[size]} {colorClasses[color]} border-2 border-transparent border-t-current rounded-full animate-spin"
	role="status"
	aria-label="Loading..."
>
	<span class="sr-only">Loading...</span>
</div>

<style>
	.spinner {
		animation: spin 1s linear infinite;
	}
	
	@keyframes spin {
		to { transform: rotate(360deg); }
	}
</style>
