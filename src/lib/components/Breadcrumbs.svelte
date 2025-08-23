<script lang="ts">
	import { page } from '$app/stores';
	
	export let items: Array<{ label: string; href?: string }> = [];
	
	$: if (items.length === 0) {
		// Auto-generate breadcrumbs from current page
		const pathSegments = $page.url.pathname.split('/').filter(Boolean);
		items = [
			{ label: 'Home', href: '/' },
			...pathSegments.map((segment, index) => ({
				label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
				href: index === pathSegments.length - 1 ? undefined : '/' + pathSegments.slice(0, index + 1).join('/')
			}))
		];
	}
</script>

<nav aria-label="Breadcrumb" class="py-4">
	<ol class="flex items-center space-x-2 text-sm">
		{#each items as item, index}
			<li class="flex items-center">
				{#if index > 0}
					<svg class="w-4 h-4 text-slate mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				{/if}
				
				{#if item.href && index < items.length - 1}
					<a 
						href={item.href}
						class="text-slate hover:text-gold transition-colors focus-ring rounded px-1 py-0.5"
					>
						{item.label}
					</a>
				{:else}
					<span class="text-navy font-medium" aria-current="page">
						{item.label}
					</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
