<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import RoadmapHorizontal from '$lib/components/RoadmapHorizontal.svelte';
	import SuiteGrid from '$lib/components/SuiteGrid.svelte';
	import Consolidation from '$lib/components/Consolidation.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { onMount } from 'svelte';
	
	onMount(() => {
		const scrollBtn = document.getElementById('scroll-to-top');
		
		function toggleScrollButton() {
			if (window.scrollY > 300) {
				scrollBtn?.classList.remove('opacity-0', 'pointer-events-none');
				scrollBtn?.classList.add('opacity-100');
			} else {
				scrollBtn?.classList.add('opacity-0', 'pointer-events-none');
				scrollBtn?.classList.remove('opacity-100');
			}
		}
		
		window.addEventListener('scroll', toggleScrollButton);
		
		return () => {
			window.removeEventListener('scroll', toggleScrollButton);
		};
	});
</script>

<svelte:head>
	<title>The Modern Suite by The KPS Group — Brand, Books, Payroll, Ops, Stack & Custom Software</title>
	<meta name="description" content="Enterprise-grade tools and ops for service businesses. Branding, bookkeeping, payroll, consulting, stack consolidation, and custom software builds." />
	<script type="application/ld+json">{JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'The KPS Group',
		url: 'https://thekpsgroup.com',
		email: 'sales@thekpsgroup.com',
		telephone: '469-458-6966',
		logo: '/brands/kps/photos/kps.png'
	})}</script>
</svelte:head>

<Hero />

<!-- Trust Indicators -->
<section class="py-12 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
				<div class="trust-item">
					<div class="text-3xl font-bold text-navy mb-2">500+</div>
					<div class="text-slate-600">Businesses Served</div>
				</div>
				<div class="trust-item">
					<div class="text-3xl font-bold text-navy mb-2">15+</div>
					<div class="text-slate-600">Years Experience</div>
				</div>
				<div class="trust-item">
					<div class="text-3xl font-bold text-navy mb-2">98%</div>
					<div class="text-slate-600">Client Satisfaction</div>
				</div>
			</div>
		</div>
	</div>
</section>

<RoadmapHorizontal
	title="From Pain to Growth"
	subtitle="We fix friction fast—and keep everything working together."
	minWidth={1080}
	dense={true}
/>

<!-- Fallback anchor -->
<section id="solutions" style="padding:1rem 0;"></section>



<SuiteGrid />
<Consolidation />
<ContactForm />

<!-- Scroll to Top Button -->
<button
	id="scroll-to-top"
	class="fixed bottom-8 right-8 bg-gold text-navy p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 pointer-events-none z-50"
	aria-label="Scroll to top"
	on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
	<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
	</svg>
</button>


