<script lang="ts">
	import { onMount } from 'svelte';
	import { SUITE } from '$lib/data/suite';
	import LoadingSpinner from './LoadingSpinner.svelte';
	import Button from './Button.svelte';
	import { trackContactForm } from '$lib/utils/analytics';
	
	let form: HTMLFormElement;
	let isSubmitting = false;
	let isSubmitted = false;
	let errorMessage = '';
	
	// Form data
	let formData = {
		name: '',
		email: '',
		phone: '',
		services: [] as string[],
		notes: ''
	};
	
	// URL parameters for pre-filling
	let urlParams: URLSearchParams;
	
	onMount(() => {
		urlParams = new URLSearchParams(window.location.search);
		const service = urlParams.get('service');
		if (service) {
			formData.services = [service];
		}
	});
	
	function toggleService(serviceKey: string) {
		const index = formData.services.indexOf(serviceKey);
		if (index > -1) {
			formData.services.splice(index, 1);
		} else {
			formData.services.push(serviceKey);
		}
		formData.services = [...formData.services];
	}
	
	async function handleSubmit(event: Event) {
		event.preventDefault();
		
		if (isSubmitting) return;
		
		// Basic validation
		if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
			errorMessage = 'Please fill in all required fields.';
			return;
		}
		
		if (formData.services.length === 0) {
			errorMessage = 'Please select at least one service.';
			return;
		}
		
		isSubmitting = true;
		errorMessage = '';
		
		try {
			const response = await fetch('/api/lead', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});
			
			if (response.ok) {
				isSubmitted = true;
				trackContactForm(true);
				// Reset form
				formData = {
					name: '',
					email: '',
					phone: '',
					services: [],
					notes: ''
				};
			} else {
				errorMessage = 'Something went wrong. Please try again or contact us directly.';
				trackContactForm(false);
			}
		} catch (error) {
			errorMessage = 'Network error. Please check your connection and try again.';
			trackContactForm(false);
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section id="contact-form" class="section bg-navy text-white">
	<div class="container-narrow">
			<!-- Header -->
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold mb-6">
					Tell us what's broken. We'll fix it.
				</h2>
				<p class="text-lg text-slate mb-8">
					Ready to transform your business? Let's start the conversation.
				</p>
				<div class="flex justify-center items-center space-x-6 text-sm text-slate">
					<div class="flex items-center">
						<svg class="w-4 h-4 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						</svg>
						Response within 24 hours
					</div>
					<div class="flex items-center">
						<svg class="w-4 h-4 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						</svg>
						No commitment required
					</div>
				</div>
			</div>
			
			{#if isSubmitted}
				<!-- Success State -->
				<div class="bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center">
					<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
						<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-gold mb-4">Message Sent!</h3>
					<p class="text-slate mb-6">
						We've received your message and will get back to you within 24 hours.
					</p>
					<Button
						on:click={() => isSubmitted = false}
						variant="primary"
					>
						Send Another Message
					</Button>
				</div>
			{:else}
				<!-- Contact Form -->
				<form bind:this={form} on:submit={handleSubmit} class="space-y-8">
					<!-- Error Message -->
					{#if errorMessage}
						<div class="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400">
							{errorMessage}
						</div>
					{/if}
					
					<!-- Personal Information -->
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label for="name" class="block text-sm font-semibold text-slate mb-2">
								Name *
							</label>
							<input
								id="name"
								type="text"
								bind:value={formData.name}
								required
								class="w-full px-4 py-3 bg-navy-800 border border-slate/30 rounded-lg text-white placeholder-slate/50 focus:border-gold focus:outline-none focus-ring transition-colors"
								placeholder="Your full name"
							/>
						</div>
						
						<div>
							<label for="email" class="block text-sm font-semibold text-slate mb-2">
								Email *
							</label>
							<input
								id="email"
								type="email"
								bind:value={formData.email}
								required
								class="w-full px-4 py-3 bg-navy-800 border border-slate/30 rounded-lg text-white placeholder-slate/50 focus:border-gold focus:outline-none focus-ring transition-colors"
								placeholder="your@email.com"
							/>
						</div>
					</div>
					
					<div>
						<label for="phone" class="block text-sm font-semibold text-slate mb-2">
							Phone *
						</label>
						<input
							id="phone"
							type="tel"
							bind:value={formData.phone}
							required
							class="w-full px-4 py-3 bg-navy-800 border border-slate/30 rounded-lg text-white placeholder-slate/50 focus:border-gold focus:outline-none focus-ring transition-colors"
							placeholder="(555) 123-4567"
						/>
					</div>
					
					<!-- Services Selection -->
					<div>
						<div class="block text-sm font-semibold text-slate mb-4">
							Which help do you need? *
						</div>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
							{#each SUITE as suite}
								<label class="flex items-center space-x-3 p-3 bg-navy-800 border border-slate/30 rounded-lg cursor-pointer hover:border-gold/50 transition-colors">
									<input
										type="checkbox"
										name="services"
										value={suite.key}
										bind:group={formData.services}
										class="w-4 h-4 text-gold bg-navy-800 border-slate/30 rounded focus:ring-gold focus:ring-2"
									/>
									<div>
										<div class="font-medium text-white">{suite.name}</div>
										<div class="text-sm text-slate">{suite.tag}</div>
									</div>
								</label>
							{/each}
						</div>
					</div>
					
					<!-- Notes -->
					<div>
						<label for="notes" class="block text-sm font-semibold text-slate mb-2">
							Tell us more
						</label>
						<textarea
							id="notes"
							bind:value={formData.notes}
							rows="4"
							class="w-full px-4 py-3 bg-navy-800 border border-slate/30 rounded-lg text-white placeholder-slate/50 focus:border-gold focus:outline-none focus-ring transition-colors resize-none"
							placeholder="Describe your current situation, challenges, or specific needs..."
						></textarea>
					</div>
					
					<!-- Submit Button -->
					<Button
						type="submit"
						disabled={isSubmitting}
						loading={isSubmitting}
						fullWidth
						variant="primary"
						size="lg"
					>
						{#if isSubmitting}
							Sending...
						{:else}
							Send it
						{/if}
					</Button>
				</form>
				
				<!-- Contact Info -->
				<div class="mt-12 text-center">
					<p class="text-slate mb-4">Or contact us directly:</p>
					<div class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
						<a href="mailto:sales@thekpsgroup.com" class="text-gold hover:text-gold-600 transition-colors">
							sales@thekpsgroup.com
						</a>
						<a href="tel:469-458-6966" class="text-gold hover:text-gold-600 transition-colors">
							469-458-6966
						</a>
					</div>
				</div>
			{/if}
	</div>
</section>
