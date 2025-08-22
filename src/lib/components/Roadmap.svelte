<script lang="ts">
	import { onMount } from 'svelte';
	import { selectedPains, industry, activePreset, focusedNode, getConnectedSolutions, getConnectedSuites } from '$lib/stores/roadmap';
	import { NODES, EDGES, PRESETS, INDUSTRY_OVERRIDES } from '$lib/data/roadmap';
	import { createIntersectionObserver } from '$lib/utils/observe';
	
	let container: HTMLElement;
	let isInView = false;
	let selectedSolutions: string[] = [];
	let selectedSuites: string[] = [];
	
	// Reactive statements to update connected nodes
	$: selectedSolutions = getConnectedSolutions($selectedPains);
	$: selectedSuites = getConnectedSuites(selectedSolutions);
	
	// SVG dimensions and layout
	const svgWidth = 1200;
	const svgHeight = 800;
	const colWidth = svgWidth / 3;
	const nodeRadius = 8;
	const nodeSpacing = 60;
	
	// Calculate node positions
	function getNodePosition(node: any) {
		const x = node.col * colWidth + colWidth / 2;
		const y = node.row * nodeSpacing + 100;
		return { x, y };
	}
	
	// Generate path for edges
	function generatePath(fromNode: any, toNode: any) {
		const from = getNodePosition(fromNode);
		const to = getNodePosition(toNode);
		
		// Create a curved path
		const midX = (from.x + to.x) / 2;
		return `M ${from.x} ${from.y} Q ${midX} ${from.y} ${to.x} ${to.y}`;
	}
	
	// Handle pain selection
	function togglePain(painLabel: string) {
		const currentPains = $selectedPains;
		const index = currentPains.indexOf(painLabel);
		
		if (index > -1) {
			currentPains.splice(index, 1);
		} else if (currentPains.length < 3) {
			currentPains.push(painLabel);
		}
		
		selectedPains.set([...currentPains]);
	}
	
	// Handle preset selection
	function selectPreset(preset: any) {
		selectedPains.set(preset.pains);
		activePreset.set(preset.id);
		industry.set(preset.industry);
	}
	
	// Handle industry change
	function changeIndustry(newIndustry: any) {
		industry.set(newIndustry);
	}
	
	// Get display text with industry overrides
	function getDisplayText(originalText: string): string {
		const overrides = INDUSTRY_OVERRIDES[$industry];
		return overrides[originalText] || originalText;
	}
	
	// Check if node should be highlighted
	function isNodeHighlighted(node: any): boolean {
		if (node.type === 'pain') {
			return $selectedPains.includes(node.label);
		} else if (node.type === 'solution') {
			return selectedSolutions.includes(node.id);
		} else if (node.type === 'suite') {
			return selectedSuites.includes(node.id);
		}
		return false;
	}
	
	// Check if edge should be visible
	function isEdgeVisible(edge: any): boolean {
		const fromNode = NODES.find(n => n.id === edge.from);
		const toNode = NODES.find(n => n.id === edge.to);
		
		if (!fromNode || !toNode) return false;
		
		if (fromNode.type === 'pain' && toNode.type === 'solution') {
			return $selectedPains.includes(fromNode.label);
		} else if (fromNode.type === 'solution' && toNode.type === 'suite') {
			return selectedSolutions.includes(fromNode.id);
		}
		
		return false;
	}
	
	onMount(() => {
		if (container) {
			const observer = createIntersectionObserver((entries) => {
				entries.forEach(entry => {
					isInView = entry.isIntersecting;
				});
			});
			observer.observe(container);
		}
	});
</script>

<section class="py-20 bg-sand relative" bind:this={container}>
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-navy mb-6">
				Connect Your Pains to Solutions
			</h2>
			<p class="text-lg text-slate max-w-2xl mx-auto">
				Select your biggest challenges and see how The Modern Suite solves them.
			</p>
		</div>
		
		<!-- Industry Selector -->
		<div class="flex justify-center mb-8">
			<div class="bg-white rounded-lg p-1 shadow-sm">
				{#each ['hvac', 'electrical', 'plumbing', 'other'] as ind}
					<button
						on:click={() => changeIndustry(ind)}
						class="px-4 py-2 rounded-md text-sm font-medium transition-colors focus-ring {ind === $industry ? 'bg-gold text-navy' : 'text-slate hover:text-navy'}"
					>
						{ind.charAt(0).toUpperCase() + ind.slice(1)}
					</button>
				{/each}
			</div>
		</div>
		
		<!-- Presets -->
		<div class="flex flex-wrap justify-center gap-3 mb-12">
			{#each PRESETS as preset}
				<button
					on:click={() => selectPreset(preset)}
					class="px-4 py-2 bg-white border border-gold/30 rounded-lg text-sm font-medium hover:bg-gold/10 transition-colors focus-ring {preset.id === $activePreset ? 'bg-gold text-navy' : 'text-navy'}"
				>
					{preset.label}
				</button>
			{/each}
		</div>
		
		<!-- SVG Roadmap -->
		<div class="relative overflow-hidden bg-white rounded-2xl shadow-xl p-8">
			<svg
				width={svgWidth}
				height={svgHeight}
				viewBox="0 0 {svgWidth} {svgHeight}"
				class="w-full h-auto"
				role="application"
				aria-label="Interactive roadmap connecting business pains to solutions and services"
			>
				<!-- Background grid -->
				<defs>
					<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
						<path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(212,175,55,0.1)" stroke-width="1"/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#grid)" />
				
				<!-- Edges -->
				{#each EDGES as edge}
					{#if isEdgeVisible(edge)}
						{@const fromNode = NODES.find(n => n.id === edge.from)}
						{@const toNode = NODES.find(n => n.id === edge.to)}
						{#if fromNode && toNode}
							<path
								d={generatePath(fromNode, toNode)}
								stroke="var(--kps-gold)"
								stroke-width="3"
								fill="none"
								stroke-dasharray="10,5"
								class="animate-pulse-gold"
							/>
						{/if}
					{/if}
				{/each}
				
				<!-- Nodes -->
				{#each NODES as node}
					{@const pos = getNodePosition(node)}
					{@const isHighlighted = isNodeHighlighted(node)}
					{@const displayText = getDisplayText(node.label)}
					
					<g transform="translate({pos.x}, {pos.y})">
						<!-- Node circle -->
						<circle
							r={nodeRadius}
							fill={isHighlighted ? 'var(--kps-gold)' : 'white'}
							stroke={isHighlighted ? 'var(--kps-gold)' : 'var(--kps-gold)'}
							stroke-width="2"
							class="cursor-pointer hover:scale-110 transition-transform"
							on:click={() => {
								if (node.type === 'pain') {
									togglePain(node.label);
								}
							}}
							on:keydown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									if (node.type === 'pain') {
										togglePain(node.label);
									}
								}
							}}
							on:mouseenter={() => focusedNode.set(node.id)}
							on:mouseleave={() => focusedNode.set(null)}
							role="button"
							tabindex="0"
							aria-label="{node.ariaDesc}"
						/>
						
						<!-- Node label -->
						<text
							x="0"
							y={nodeRadius + 20}
							text-anchor="middle"
							class="text-xs font-medium fill-current"
							style="color: {isHighlighted ? 'var(--kps-gold)' : 'var(--ink)'}"
						>
							{displayText}
						</text>
					</g>
				{/each}
			</svg>
			
			<!-- Legend -->
			<div class="absolute bottom-4 left-4 flex items-center space-x-6 text-sm">
				<div class="flex items-center space-x-2">
					<div class="w-3 h-3 bg-white border-2 border-gold rounded-full"></div>
					<span class="text-slate">Pain Points</span>
				</div>
				<div class="flex items-center space-x-2">
					<div class="w-3 h-3 bg-white border-2 border-gold rounded-full"></div>
					<span class="text-slate">Solutions</span>
				</div>
				<div class="flex items-center space-x-2">
					<div class="w-3 h-3 bg-white border-2 border-gold rounded-full"></div>
					<span class="text-slate">Services</span>
				</div>
			</div>
		</div>
		
		<!-- Mobile Fallback -->
		<div class="md:hidden mt-8">
			<div class="bg-white rounded-lg p-6 shadow-lg">
				<h3 class="text-lg font-semibold text-navy mb-4">Select Your Pains</h3>
				<div class="space-y-3">
					{#each NODES.filter(n => n.type === 'pain') as pain}
						<button
							on:click={() => togglePain(pain.label)}
							class="w-full text-left p-3 rounded-lg border transition-colors focus-ring {$selectedPains.includes(pain.label) ? 'bg-gold text-navy border-gold' : 'bg-sand text-navy border-slate/20 hover:border-gold'}"
						>
							{getDisplayText(pain.label)}
						</button>
					{/each}
				</div>
				
				{#if selectedSolutions.length > 0}
					<div class="mt-6">
						<h4 class="font-semibold text-navy mb-3">Recommended Solutions</h4>
						<div class="space-y-2">
							{#each selectedSolutions as solutionId}
								{@const solution = NODES.find(n => n.id === solutionId)}
								{#if solution}
									<div class="p-3 bg-gold/10 rounded-lg text-sm">
										{solution.label}
									</div>
								{/if}
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
