<script lang="ts">
	export let message: string;
	export let field: string | undefined = undefined;
	export let className = '';
</script>

<div 
	class="inline-error {className}"
	role="alert"
	aria-live="polite"
	{...$$restProps}
>
	<div class="inline-error-content">
		<svg class="inline-error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
		</svg>
		<span class="inline-error-message">
			{#if field}
				<strong>{field}:</strong> {message}
			{:else}
				{message}
			{/if}
		</span>
	</div>
</div>

<style>
	.inline-error {
		@apply mt-2 text-sm;
	}
	
	.inline-error-content {
		@apply flex items-start space-x-2;
	}
	
	.inline-error-icon {
		@apply w-4 h-4 text-red-500 flex-shrink-0 mt-0.5;
	}
	
	.inline-error-message {
		@apply text-red-700 leading-relaxed;
	}
	
	/* High contrast mode support */
	@media (prefers-contrast: high) {
		.inline-error-icon {
			@apply text-red-600;
		}
		
		.inline-error-message {
			@apply text-red-800;
		}
	}
</style>
