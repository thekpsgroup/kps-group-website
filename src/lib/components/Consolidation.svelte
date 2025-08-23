<script lang="ts">
	import { smoothScrollTo } from '$lib/utils/observe';
	import Button from './Button.svelte';
	
	function scrollToContact() {
		const contactForm = document.querySelector('#contact-form') as HTMLElement;
		if (contactForm) {
			smoothScrollTo(contactForm, 100);
		} else {
			window.location.href = '/contact';
		}
	}
</script>

<section class="py-20 bg-sand">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<!-- Header -->
			<div class="text-center mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-navy mb-6">
					Too many tools. Too little progress.
				</h2>
				<p class="text-lg text-slate max-w-2xl mx-auto">
					We audit, consolidate, and connect your stack. Fewer logins, fewer fees, more output.
				</p>
			</div>
			
			<!-- Before/After Comparison -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<!-- Before -->
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-slate/20">
					<div class="flex items-center mb-6">
						<div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
							</svg>
						</div>
						<h3 class="text-2xl font-bold text-navy">Before</h3>
					</div>
					
					<div class="space-y-4">
						<div class="flex items-center space-x-3">
							<div class="w-3 h-3 bg-red-500 rounded-full"></div>
							<span class="text-slate">15+ different tools and platforms</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-3 h-3 bg-red-500 rounded-full"></div>
							<span class="text-slate">$2,500+ monthly in software fees</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-3 h-3 bg-red-500 rounded-full"></div>
							<span class="text-slate">Data scattered across systems</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-3 h-3 bg-red-500 rounded-full"></div>
							<span class="text-slate">Manual workarounds and integrations</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-3 h-3 bg-red-500 rounded-full"></div>
							<span class="text-slate">No single source of truth</span>
						</div>
					</div>
					
					<!-- Visual representation of scattered tools -->
					<div class="mt-8 p-6 bg-slate/10 rounded-lg">
						<div class="flex flex-wrap gap-2 justify-center">
							{#each ['QuickBooks', 'Gusto', 'HubSpot', 'Zapier', 'Slack', 'Trello', 'Stripe', 'Mailchimp', 'Calendly', 'Zoom', 'Dropbox', 'Asana'] as tool}
								<div class="px-3 py-1 bg-white border border-slate/20 rounded-full text-xs text-slate">
									{tool}
								</div>
							{/each}
						</div>
					</div>
				</div>
				
				<!-- After -->
				<div class="bg-navy rounded-2xl p-8 text-white shadow-lg border border-gold/20">
					<div class="flex items-center mb-6">
						<div class="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 class="text-2xl font-bold">After</h3>
					</div>
					
					<div class="space-y-4">
						<div class="flex items-center space-x-3">
							<div class="w-3 h-3 bg-gold rounded-full"></div>
							<span class="text-slate">5 integrated Modern Suite services</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-3 h-3 bg-gold rounded-full"></div>
							<span class="text-slate">60% reduction in software costs</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-3 h-3 bg-gold rounded-full"></div>
							<span class="text-slate">Unified data and reporting</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-3 h-3 bg-gold rounded-full"></div>
							<span class="text-slate">Automated workflows and sync</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-3 h-3 bg-gold rounded-full"></div>
							<span class="text-slate">Single dashboard for everything</span>
						</div>
					</div>
					
					<!-- Visual representation of Modern Suite -->
					<div class="mt-8 p-6 bg-navy-800 rounded-lg border border-gold/20">
						<div class="grid grid-cols-2 gap-3">
							{#each ['Modern Brands', 'Modern Ledger', 'Modern Pay', 'Modern Consulting', 'Modern Stack'] as service}
								<div class="px-3 py-2 bg-gold/10 border border-gold/30 rounded-lg text-xs text-gold text-center">
									{service}
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
			
			<!-- CTA Section -->
			<div class="text-center mt-16">
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gold/20 max-w-2xl mx-auto">
					<h3 class="text-2xl font-bold text-navy mb-4">
						Ready to consolidate your stack?
					</h3>
					<p class="text-slate mb-6">
						Let us audit your current tools, identify waste, and build a streamlined system that actually works together.
					</p>
					<Button
						on:click={scrollToContact}
						variant="primary"
						size="lg"
					>
						Audit My Stack
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>
