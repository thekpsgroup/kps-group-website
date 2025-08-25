<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	
	let uiMode = $page.url.searchParams.get('ui') || '';
	let showGrid = uiMode === 'grid';
	let showBaseline = uiMode === 'baseline';
	let showBounds = uiMode === 'bounds';
	let showContrast = uiMode === 'contrast';
	
	// Toggle UI modes
	function toggleMode(mode: string) {
		const url = new URL(window.location.href);
		if (uiMode === mode) {
			url.searchParams.delete('ui');
			uiMode = '';
		} else {
			url.searchParams.set('ui', mode);
			uiMode = mode;
		}
		window.history.replaceState({}, '', url.toString());
		
		// Update visibility
		showGrid = uiMode === 'grid';
		showBaseline = uiMode === 'baseline';
		showBounds = uiMode === 'bounds';
		showContrast = uiMode === 'contrast';
	}
	
	// Update responsive info
	function updateResponsiveInfo() {
		const width = window.innerWidth;
		const widthEl = document.getElementById('current-width');
		const breakpointEl = document.getElementById('breakpoint');
		
		if (widthEl) widthEl.textContent = `${width}px`;
		
		let breakpoint = 'xs';
		if (width >= 640) breakpoint = 'sm';
		if (width >= 768) breakpoint = 'md';
		if (width >= 1024) breakpoint = 'lg';
		if (width >= 1280) breakpoint = 'xl';
		if (width >= 1536) breakpoint = '2xl';
		
		if (breakpointEl) breakpointEl.textContent = breakpoint;
	}
	
	onMount(() => {
		// Only show in dev mode
		if (import.meta.env.PROD) {
			window.location.href = '/';
		}
		
		updateResponsiveInfo();
		window.addEventListener('resize', updateResponsiveInfo);
		
		return () => {
			window.removeEventListener('resize', updateResponsiveInfo);
		};
	});
</script>

<svelte:head>
	<title>UI QA Tools - Dev Only</title>
</svelte:head>

<!-- UI Debug Overlays -->
{#if showGrid}
	<div class="fixed inset-0 pointer-events-none z-50">
		<div class="grid-overlay"></div>
	</div>
{/if}

{#if showBaseline}
	<div class="fixed inset-0 pointer-events-none z-50">
		<div class="baseline-overlay"></div>
	</div>
{/if}

{#if showBounds}
	<div class="fixed inset-0 pointer-events-none z-50">
		<div class="bounds-overlay"></div>
	</div>
{/if}

{#if showContrast}
	<div class="fixed inset-0 pointer-events-none z-50">
		<div class="contrast-overlay"></div>
	</div>
{/if}

<!-- Floating Debug Widget -->
<div class="fixed bottom-4 right-4 z-50">
	<div class="bg-white rounded-lg shadow-xl border border-gray-200 p-4">
		<h3 class="text-sm font-semibold text-gray-900 mb-3">UI Debug Tools</h3>
		<div class="space-y-2">
			<button 
				class="block w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 {showGrid ? 'bg-blue-100 text-blue-700' : 'text-gray-700'}"
				on:click={() => toggleMode('grid')}
			>
				{showGrid ? '✓' : '○'} Grid Overlay
			</button>
			<button 
				class="block w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 {showBaseline ? 'bg-blue-100 text-blue-700' : 'text-gray-700'}"
				on:click={() => toggleMode('baseline')}
			>
				{showBaseline ? '✓' : '○'} Baseline Grid
			</button>
			<button 
				class="block w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 {showBounds ? 'bg-blue-100 text-blue-700' : 'text-gray-700'}"
				on:click={() => toggleMode('bounds')}
			>
				{showBounds ? '✓' : '○'} Element Bounds
			</button>
			<button 
				class="block w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 {showContrast ? 'bg-blue-100 text-blue-700' : 'text-gray-700'}"
				on:click={() => toggleMode('contrast')}
			>
				{showContrast ? '✓' : '○'} High Contrast
			</button>
		</div>
	</div>
</div>

<!-- QA Dashboard -->
<div class="min-h-screen bg-gray-50 py-8">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<h1 class="text-3xl font-bold text-gray-900 mb-8">UI QA Dashboard</h1>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<!-- Spacing Audit -->
				<div class="bg-white rounded-lg shadow p-6">
					<h2 class="text-xl font-semibold mb-4">Spacing Contract</h2>
					<div class="space-y-2">
						<div class="flex justify-between">
							<span class="text-sm text-gray-600">Section Padding:</span>
							<span class="text-sm font-mono">py-16 md:py-20 lg:py-24</span>
						</div>
						<div class="flex justify-between">
							<span class="text-sm text-gray-600">Container Width:</span>
							<span class="text-sm font-mono">max-w-6xl</span>
						</div>
						<div class="flex justify-between">
							<span class="text-sm text-gray-600">Grid Gap:</span>
							<span class="text-sm font-mono">gap-8</span>
						</div>
					</div>
				</div>
				
				<!-- Typography Audit -->
				<div class="bg-white rounded-lg shadow p-6">
					<h2 class="text-xl font-semibold mb-4">Typography</h2>
					<div class="space-y-2">
						<div class="flex justify-between">
							<span class="text-sm text-gray-600">Text Balance:</span>
							<span class="text-sm font-mono">text-wrap: balance</span>
						</div>
						<div class="flex justify-between">
							<span class="text-sm text-gray-600">Line Length:</span>
							<span class="text-sm font-mono">max-w-prose</span>
						</div>
						<div class="flex justify-between">
							<span class="text-sm text-gray-600">Line Height:</span>
							<span class="text-sm font-mono">leading-relaxed</span>
						</div>
					</div>
				</div>
				
				<!-- Component States -->
				<div class="bg-white rounded-lg shadow p-6">
					<h2 class="text-xl font-semibold mb-4">Component States</h2>
					<div class="space-y-3">
						<button class="btn-primary">Primary Button</button>
						<button class="btn-secondary">Secondary Button</button>
						<button class="btn-outline">Outline Button</button>
						<button class="btn-primary" disabled>Disabled Button</button>
					</div>
				</div>
				
				<!-- Responsive Test -->
				<div class="bg-white rounded-lg shadow p-6">
					<h2 class="text-xl font-semibold mb-4">Responsive Test</h2>
					<div class="space-y-2 text-sm">
						<div class="flex justify-between">
							<span class="text-gray-600">Current Width:</span>
							<span class="font-mono" id="current-width">-</span>
						</div>
						<div class="flex justify-between">
							<span class="text-gray-600">Breakpoint:</span>
							<span class="font-mono" id="breakpoint">-</span>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Quick Links -->
			<div class="mt-8 bg-white rounded-lg shadow p-6">
				<h2 class="text-xl font-semibold mb-4">Quick Test Links</h2>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
					<a href="/" class="text-blue-600 hover:text-blue-800">Homepage</a>
					<a href="/contact" class="text-blue-600 hover:text-blue-800">Contact Form</a>
					<a href="/?ui=grid" class="text-blue-600 hover:text-blue-800">Grid Overlay</a>
					<a href="/?ui=baseline" class="text-blue-600 hover:text-blue-800">Baseline Grid</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* Grid Overlay */
	.grid-overlay {
		background-image: 
			linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
		background-size: 64px 64px;
	}
	
	/* Baseline Grid */
	.baseline-overlay {
		background-image: linear-gradient(to bottom, rgba(239, 68, 68, 0.1) 1px, transparent 1px);
		background-size: 100% 24px;
	}
	
	/* Element Bounds */
	.bounds-overlay * {
		outline: 1px solid rgba(16, 185, 129, 0.3) !important;
	}
	
	/* High Contrast */
	.contrast-overlay {
		filter: contrast(200%) brightness(150%);
	}
	
	/* Button styles */
	.btn-primary {
		@apply bg-gradient-to-r from-gold to-gold-600 text-navy px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:from-gold-600 hover:to-gold shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2;
	}
	
	.btn-secondary {
		@apply bg-gradient-to-r from-navy to-navy-800 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:from-navy-800 hover:to-navy shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2;
	}
	
	.btn-outline {
		@apply border-2 border-navy text-navy px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-navy hover:text-white shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2;
	}
</style>
