<script lang="ts">
	import { SUITE } from '$lib/data/suite';
	import { smoothScrollTo } from '$lib/utils/observe';
	
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
		// Pre-fill contact form with selected service
		const contactForm = document.querySelector('#contact-form') as HTMLElement;
		if (contactForm) {
			// Set the service in the form
			const serviceInput = contactForm.querySelector(`[name="services"][value="${suiteKey}"]`) as HTMLInputElement;
			if (serviceInput) {
				serviceInput.checked = true;
			}
			smoothScrollTo(contactForm, 100);
		} else {
			// Navigate to contact page with service pre-filled
			window.location.href = `/contact?service=${suiteKey}`;
		}
	}
	
	// Get solutions that match selected pains for a specific suite
	function getMatchingSolutions(suite: any): string[] {
		if (selectedPains.length === 0) return [];
		
		const matchingSolutions: string[] = [];
		suite.painPoints.forEach((pain: string, index: number) => {
			if (selectedPains.includes(pain)) {
				matchingSolutions.push(suite.solutions[index]);
			}
		});
		
		return matchingSolutions;
	}
	
	// Get icon for each suite
	function getSuiteIcon(suiteKey: string) {
		const icons = {
			brands: `<svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
			</svg>`,
			ledger: `<svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
			</svg>`,
			pay: `<svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
			</svg>`,
			stack: `<svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
			</svg>`,
			consulting: `<svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
			</svg>`
		};
		return icons[suiteKey as keyof typeof icons] || icons.brands;
	}
</script>

<section class="py-20 bg-navy text-white">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-6">
				The Modern Suite
			</h2>
			<p class="text-lg text-slate max-w-2xl mx-auto">
				Five specialized services that work together to transform your business.
			</p>
		</div>
		
		<!-- Suite Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each SUITE as suite, index}
				{@const matchingSolutions = getMatchingSolutions(suite)}
				{@const isLastCard = index === SUITE.length - 1}
				<div 
					class="bg-navy-800 border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300 group relative overflow-hidden hover:transform hover:scale-[1.02] {isLastCard ? 'md:col-span-2 lg:col-span-2' : 'lg:col-span-2'}"
					data-suite={suite.key}
				>
					<!-- Decorative background -->
					<div class="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
					
					<!-- Subtle corner accent -->
					<div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-2xl"></div>
					
					<div class="relative z-10">
						<!-- Suite Header -->
						<div class="mb-6">
							<!-- Icon and Title Row -->
							<div class="flex items-center gap-3 mb-3">
								<div class="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
									<div class="group-hover:scale-110 transition-transform duration-300">
										{@html getSuiteIcon(suite.key)}
									</div>
								</div>
								<div>
									<h3 class="text-2xl font-bold text-gold">{suite.name}</h3>
									<p class="text-slate text-sm font-medium">{suite.tag}</p>
								</div>
							</div>
							<p class="text-slate/80 leading-relaxed">{suite.summary}</p>
						</div>
						
						<!-- Pain Points -->
						<div class="mb-6">
							<h4 class="text-sm font-semibold text-slate mb-3 flex items-center gap-2">
								<svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
								</svg>
								Pain Points
							</h4>
							<div class="space-y-2">
								{#each suite.painPoints as pain}
									<button
										on:click={() => togglePain(pain, suite.key)}
										class="w-full text-left p-3 rounded-lg text-sm transition-all duration-200 focus-ring group/pain {selectedPains.includes(pain) ? 'bg-gold/20 text-gold border border-gold/30 shadow-lg shadow-gold/10' : 'bg-navy/60 text-slate hover:bg-navy-800 border border-transparent hover:border-gold/20 hover:shadow-md'}"
									>
										<div class="flex items-center gap-2">
											<div class="w-1.5 h-1.5 rounded-full bg-red-400 opacity-60 group-hover/pain:opacity-100 transition-opacity"></div>
											<span>{pain}</span>
										</div>
									</button>
								{/each}
							</div>
						</div>
						
						<!-- Solutions -->
						<div class="mb-8">
							<h4 class="text-sm font-semibold text-slate mb-3 flex items-center gap-2">
								<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								Solutions
							</h4>
							<div class="space-y-2">
								{#each suite.solutions as solution}
									<div class="p-3 rounded-lg text-sm transition-all duration-200 {matchingSolutions.includes(solution) ? 'bg-gold/20 text-gold border border-gold/30 shadow-lg shadow-gold/10' : 'bg-navy/40 text-slate/70 border border-transparent'}">
										<div class="flex items-center gap-2">
											<div class="w-1.5 h-1.5 rounded-full {matchingSolutions.includes(solution) ? 'bg-gold' : 'bg-green-400'} opacity-60"></div>
											<span>{solution}</span>
										</div>
									</div>
								{/each}
							</div>
						</div>
						
						<!-- CTA Buttons -->
						<div class="space-y-3">
							<!-- Primary CTA - Contact Form -->
							<button
								on:click={() => handleCTAClick(suite.key)}
								class="w-full bg-gold text-navy py-3 px-6 rounded-lg font-semibold hover:bg-gold-600 transition-all duration-300 focus-ring group-hover:shadow-lg group-hover:shadow-gold/25 flex items-center justify-center gap-2 group/btn"
							>
								<span>{suite.cta.label}</span>
								<svg class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</button>
							
							<!-- Secondary CTA - Direct to Website -->
							{#if suite.website}
								<a
									href={suite.website}
									target="_blank"
									rel="noopener noreferrer"
									class="w-full border-2 border-gold/30 text-gold py-2 px-6 rounded-lg font-medium hover:bg-gold/10 transition-all duration-300 focus-ring group-hover:border-gold/50 flex items-center justify-center gap-2 group/website"
									aria-label="Visit {suite.name} website"
								>
									<span>Visit {suite.name}</span>
									<svg class="w-4 h-4 transition-transform group-hover/website:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</a>
							{/if}
						</div>
					</div>
					
					<!-- Animated border on hover -->
					<div class="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold/30 transition-colors duration-300"></div>
				</div>
			{/each}
		</div>
		
		<!-- Bottom CTA -->
		<div class="text-center mt-16">
			<p class="text-slate mb-6 max-w-2xl mx-auto">
				Ready to transform your business? Let's connect the dots and build your modern stack.
			</p>
			<a
				href="/contact"
				class="inline-block bg-gold text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors focus-ring shadow-lg hover:shadow-xl"
			>
				Get Started Today
			</a>
		</div>
	</div>
</section>
