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
</script>

<section class="py-20 bg-navy text-white">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-6">
				The Modern Suite
			</h2>
			<p class="text-lg text-slate max-w-2xl mx-auto">
				Six specialized services that work together to transform your business.
			</p>
		</div>
		
		<!-- Suite Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each SUITE as suite, index}
				{@const matchingSolutions = getMatchingSolutions(suite)}
				{@const isLastCard = index === SUITE.length - 1}
				<div 
					class="bg-navy-800 border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300 group relative overflow-hidden {isLastCard ? 'md:col-span-2 lg:col-span-2' : ''}"
					data-suite={suite.key}
				>
					<!-- Decorative background -->
					<div class="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
					
					<div class="relative z-10">
						<!-- Suite Header -->
						<div class="mb-6">
							<h3 class="text-2xl font-bold text-gold mb-2">{suite.name}</h3>
							<p class="text-slate text-sm font-medium mb-3">{suite.tag}</p>
							<p class="text-slate/80 leading-relaxed">{suite.summary}</p>
						</div>
						
						<!-- Pain Points -->
						<div class="mb-6">
							<h4 class="text-sm font-semibold text-slate mb-3">Pain Points</h4>
							<div class="space-y-2">
								{#each suite.painPoints as pain}
									<button
										on:click={() => togglePain(pain, suite.key)}
										class="w-full text-left p-2 rounded-lg text-sm transition-colors focus-ring {selectedPains.includes(pain) ? 'bg-gold/20 text-gold border border-gold/30' : 'bg-navy text-slate hover:bg-navy-800 border border-transparent hover:border-gold/20'}"
									>
										{pain}
									</button>
								{/each}
							</div>
						</div>
						
						<!-- Solutions -->
						<div class="mb-8">
							<h4 class="text-sm font-semibold text-slate mb-3">Solutions</h4>
							<div class="space-y-2">
								{#each suite.solutions as solution}
									<div class="p-2 rounded-lg text-sm {matchingSolutions.includes(solution) ? 'bg-gold/20 text-gold border border-gold/30' : 'bg-navy/50 text-slate/70 border border-transparent'}">
										{solution}
									</div>
								{/each}
							</div>
						</div>
						
						<!-- CTA Button -->
						<button
							on:click={() => handleCTAClick(suite.key)}
							class="w-full bg-gold text-navy py-3 px-6 rounded-lg font-semibold hover:bg-gold-600 transition-colors focus-ring group-hover:shadow-lg group-hover:shadow-gold/25"
						>
							{suite.cta.label}
						</button>
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
