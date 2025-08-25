<script lang="ts">
	export let title: string;
	export let description: string;
	export let icon?: string;
	export let action?: { label: string; href?: string; onClick?: () => void };
	export let variant: 'default' | 'minimal' = 'default';
</script>

<div class="empty-state empty-state-{variant}">
	{#if icon}
		<div class="empty-state-icon">
			<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="{icon}" />
			</svg>
		</div>
	{/if}
	
	<div class="empty-state-content">
		<h3 class="empty-state-title">{title}</h3>
		<p class="empty-state-description">{description}</p>
		
		{#if action}
			<div class="empty-state-action">
				{#if action.href}
					<a href={action.href} class="btn-primary">
						{action.label}
					</a>
				{:else if action.onClick}
					<button on:click={action.onClick} class="btn-primary">
						{action.label}
					</button>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.empty-state {
		@apply text-center py-12 px-6;
	}
	
	.empty-state-minimal {
		@apply py-8 px-4;
	}
	
	.empty-state-icon {
		@apply mx-auto mb-6 text-slate-400;
	}
	
	.empty-state-minimal .empty-state-icon {
		@apply mb-4;
	}
	
	.empty-state-content {
		@apply max-w-md mx-auto;
	}
	
	.empty-state-title {
		@apply text-lg font-semibold text-navy mb-2;
	}
	
	.empty-state-description {
		@apply text-slate-600 leading-relaxed;
	}
	
	.empty-state-action {
		@apply mt-6;
	}
	
	.empty-state-minimal .empty-state-action {
		@apply mt-4;
	}
	
	.btn-primary {
		@apply inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-xl transition-all duration-300 hover:bg-gold-600 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2;
	}
</style>
