<script lang="ts">
	import { SUITE, type Suite } from '$lib/data/suite';
	import { smoothScrollTo } from '$lib/utils/observe';
	import Button from './Button.svelte';
	import { trackServiceClick } from '$lib/utils/analytics';
	
	let selectedPains: string[] = [];
	
	function togglePain(pain: string, suiteKey: string) {
		const index = selectedPains.indexOf(pain);
		if (index > -1) {
			selectedPains.splice(index, 1);
		} else {
			selectedPains.push(pain);
		}
		selectedPains = [...selectedPains];
	}
	
	function handleCTAClick(suiteKey: string) {
		trackServiceClick(suiteKey);
		// Navigate to the dedicated landing page
		window.location.href = `/suite/${suiteKey}`;
	}
	
	// Get solutions that match selected pains for a specific suite
	function getMatchingSolutions(suite: Suite): string[] {
		if (selectedPains.length === 0) return [];
		
		const matchingSolutions: string[] = [];
		suite.painPoints.forEach((pain: string, index: number) => {
			if (selectedPains.includes(pain)) {
				matchingSolutions.push(suite.solutions[index]);
			}
		});
		
		return matchingSolutions;
	}
	
	// Get brand-specific header image
	function getBrandHeaderImage(suiteKey: string) {
		const images = {
			brands: '/brands/modern-brands-card-header.png',
			ledger: '/brands/modern-ledger-card-header.png',
			pay: '/brands/modern-pay-card-header.png',
			stack: '/brands/modern-stack-card-header.png',
			consulting: '/brands/modern-consulting-card-header.png'
		};
		return images[suiteKey as keyof typeof images] || images.brands;
	}
	
	// Get brand-specific colors that match the header images exactly
	function getBrandColors(suite: Suite) {
		const headerColors = {
			brands: {
				primary: '#C9A246',    // Gold (Text & Feather) from Modern Brands header
				secondary: '#0D0D0D',   // Black Background
				accent: '#C9A246'       // Gold accent
			},
			ledger: {
				primary: '#C9A246',     // Gold Book & Text from Modern Ledger header
				secondary: '#0E3A3D',   // Deep Teal Background
				accent: '#C9A246'       // Gold accent
			},
			pay: {
				primary: '#0B5C3C',     // Emerald Green ($ Icon / Background) from Modern Pay header
				secondary: '#D1A12F',   // Gold Text
				accent: '#0B5C3C'       // Emerald accent
			},
			stack: {
				primary: '#007BFF',     // Electric Blue (Icon Glow) from Modern Stack header
				secondary: '#CBA34A',   // Gold Text
				accent: '#0A0F1C'       // Navy Background
			},
			consulting: {
				primary: '#C45A1A',     // Orange Compass/Background from Modern Consulting header
				secondary: '#D3A84C',   // Gold Text
				accent: '#C45A1A'       // Orange accent
			}
		};
		
		return headerColors[suite.key as keyof typeof headerColors] || headerColors.brands;
	}
	
	// Get brand-specific CSS custom properties
	function getBrandCSSVars(suite: Suite) {
		const colors = getBrandColors(suite);
		return {
			'--brand-primary': colors.primary,
			'--brand-secondary': colors.secondary,
			'--brand-accent': colors.accent
		};
	}
</script>

<section class="py-20 bg-navy text-white relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 dot-grid opacity-10"></div>
	
	<!-- Animated gold particles -->
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-1/4 left-1/4 w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse-gold"></div>
		<div class="absolute top-1/3 right-1/3 w-0.5 h-12 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse-gold" style="animation-delay: 1s;"></div>
		<div class="absolute bottom-1/4 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse-gold" style="animation-delay: 2s;"></div>
	</div>
	
	<div class="container mx-auto px-4 relative z-10">
		<!-- Header -->
		<div class="text-center mb-16">
			<div class="w-16 h-px bg-gold mx-auto mb-8 opacity-60"></div>
			<!-- The Modern Suite Header Image -->
			<div class="mb-8">
				<img 
					src="/brands/the-modern-suite.png" 
					alt="The Modern Suite" 
					class="w-full max-w-2xl mx-auto h-auto object-contain"
				/>
			</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-6 text-balance">
				The Modern Suite
			</h2>
			<p class="text-xl text-slate/80 max-w-3xl mx-auto leading-relaxed">
				Five specialized services that work together to transform your business.
			</p>
		</div>
		
		<!-- Suite Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each SUITE as suite, index}
				{@const matchingSolutions = getMatchingSolutions(suite)}
				{@const isConsulting = suite.key === 'consulting'}
				{@const brandColors = getBrandColors(suite)}
				{@const cssVars = getBrandCSSVars(suite)}
				<div 
					class="bg-gradient-to-br from-navy-800/80 to-navy-900/80 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-500 group relative overflow-hidden hover:transform hover:scale-[1.02] hover:shadow-2xl {isConsulting ? 'md:col-span-2 lg:col-span-4' : 'lg:col-span-2'}"
					data-suite={suite.key}
					style="animation-delay: {index * 0.1}s; {Object.entries(cssVars).map(([key, value]) => `${key}: ${value}`).join('; ')}; border-color: var(--brand-primary);"
				>
					<!-- Enhanced decorative background with brand colors -->
					<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="background: linear-gradient(135deg, var(--brand-primary) 0%, transparent 50%, var(--brand-secondary) 100%); opacity: 0.05;"></div>
					
					<!-- Animated corner accents with brand colors -->
					<div class="absolute top-0 right-0 w-20 h-20 rounded-bl-3xl group-hover:scale-110 transition-transform duration-500" style="background: linear-gradient(135deg, var(--brand-primary) 0%, transparent 100%); opacity: 0.15;"></div>
					<div class="absolute bottom-0 left-0 w-16 h-16 rounded-tr-3xl group-hover:scale-110 transition-transform duration-500" style="background: linear-gradient(135deg, var(--brand-secondary) 0%, transparent 100%); opacity: 0.1; animation-delay: 0.2s;"></div>
					
					<!-- Floating particles with brand colors -->
					<div class="absolute top-4 right-4 w-2 h-2 rounded-full group-hover:animate-pulse" style="background-color: var(--brand-primary); opacity: 0.3;"></div>
					<div class="absolute bottom-6 left-6 w-1 h-1 rounded-full group-hover:animate-pulse" style="background-color: var(--brand-accent); opacity: 0.4; animation-delay: 0.5s;"></div>
					
					<div class="relative z-10">
						<!-- Suite Header with Brand Image -->
						<div class="mb-8 text-center">
							<!-- Brand Header Image -->
							<div class="mb-6">
								<img 
									src={getBrandHeaderImage(suite.key)} 
									alt="{suite.name} header" 
									class="w-full h-24 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105"
								/>
							</div>
							
							<!-- Title and Tag -->
							<div class="text-center">
								<h3 class="text-2xl md:text-3xl font-bold mb-2 group-hover:scale-105 transition-all duration-300" style="color: var(--brand-primary);">{suite.name}</h3>
								<p class="text-slate/90 text-sm font-medium tracking-wide uppercase">{suite.tag}</p>
							</div>
							
							<p class="text-slate/80 leading-relaxed text-lg mt-4">{suite.summary}</p>
						</div>
						
						<!-- Pain Points -->
						<div class="mb-8">
							<h4 class="text-sm font-semibold text-slate/90 mb-4 flex items-center gap-2 uppercase tracking-wide">
								<svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
								</svg>
								Pain Points
							</h4>
							<div class="space-y-3">
								{#each suite.painPoints as pain}
									<button
										on:click={() => togglePain(pain, suite.key)}
										class="w-full text-center p-4 rounded-2xl text-sm font-medium transition-all duration-300 focus-ring group/pain border-2 backdrop-blur-sm {selectedPains.includes(pain) ? 'bg-red-500/20 text-red-300 border-red-400 shadow-lg shadow-red-500/20 hover:bg-red-500/30 hover:scale-105' : 'bg-navy/40 text-slate border-red-400/30 hover:bg-red-500/10 hover:border-red-400/50 hover:shadow-md hover:shadow-red-500/10 hover:scale-105'}"
									>
										<div class="flex items-center justify-center gap-2">
											<svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
											</svg>
											<span>{pain}</span>
										</div>
									</button>
								{/each}
							</div>
						</div>
						
						<!-- Solutions -->
						<div class="mb-8">
							<h4 class="text-sm font-semibold text-slate/90 mb-4 flex items-center gap-2 uppercase tracking-wide">
								<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								Solutions
							</h4>
							<div class="space-y-3">
								{#each suite.solutions as solution}
									<button
										class="w-full text-center p-4 rounded-2xl text-sm font-medium transition-all duration-300 border-2 backdrop-blur-sm {matchingSolutions.includes(solution) ? 'bg-green-500/20 text-green-300 border-green-400 shadow-lg shadow-green-500/20 hover:scale-105' : 'bg-navy/40 text-slate/70 border-green-400/30 hover:bg-green-500/10 hover:border-green-400/50 hover:shadow-md hover:shadow-green-500/10 hover:scale-105'}"
									>
										<div class="flex items-center justify-center gap-2">
											<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											<span>{solution}</span>
										</div>
									</button>
								{/each}
							</div>
						</div>
						
						<!-- CTA Buttons -->
						<div class="space-y-3">
							<!-- Primary CTA - Contact Form -->
							<Button
								on:click={() => handleCTAClick(suite.key)}
								variant="primary"
								fullWidth
								class="group-hover:shadow-lg hover:scale-105 transition-transform duration-300"
								style="background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%); box-shadow: 0 4px 14px 0 rgba(0,0,0,0.1);"
							>
								<span>{suite.cta.label}</span>
								<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</Button>
							
							<!-- Secondary CTA - Direct to Website -->
							{#if suite.website}
								<Button
									href={suite.website}
									variant="outline"
									fullWidth
									target="_blank"
									rel="noopener noreferrer"
									class="hover:scale-105 transition-transform duration-300"
									style="border-color: var(--brand-primary); color: var(--brand-primary);"
									aria-label="Visit {suite.name} website"
								>
									<span>Visit {suite.name}</span>
									<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</Button>
							{/if}
						</div>
					</div>
					
					<!-- Enhanced animated border on hover with brand colors -->
					<div class="absolute inset-0 rounded-3xl border border-transparent group-hover:border-opacity-40 transition-all duration-500" style="border-color: var(--brand-primary);"></div>
				</div>
			{/each}
		</div>
		
		<!-- We Do That Button - Improved -->
		<div class="text-center mt-20 mb-12">
			<div class="w-12 h-px bg-gold mx-auto mb-8 opacity-40"></div>
			<Button
				href="/contact"
				variant="primary"
				size="md"
				class="bg-gradient-to-r from-gold to-gold-600 text-navy hover:from-gold-600 hover:to-gold shadow-xl hover:shadow-2xl hover:shadow-gold/30 transform hover:-translate-y-1 transition-all duration-300 font-bold px-8 py-4 rounded-xl text-lg"
			>
				We Do That
				<svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</Button>
		</div>
		
		<!-- Bottom CTA -->
		<div class="text-center mt-16">
			<p class="text-slate/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
				Ready to transform your business? Let's connect the dots and build your modern stack.
			</p>
			<Button
				href="/contact"
				variant="primary"
				size="lg"
				class="hover:scale-105 transition-transform duration-300"
			>
				Get Started Today
			</Button>
		</div>
	</div>
</section>

<style>
	/* Enhanced animations */
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	/* Apply staggered animation to cards */
	div[data-suite] {
		animation: fadeInUp 0.6s ease-out forwards;
		opacity: 0;
	}
</style>
