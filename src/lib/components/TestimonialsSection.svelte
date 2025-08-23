<script lang="ts">
	import Testimonial from './Testimonial.svelte';
	
	const testimonials = [
		{
			quote: "KPS Group completely transformed our bookkeeping process. What used to take me hours every week now happens automatically. Their Modern Ledger service is exactly what our HVAC business needed.",
			author: "David Martinez",
			company: "Martinez HVAC Services",
			role: "Owner",
			rating: 5,
			service: "Modern Ledger"
		},
		{
			quote: "After struggling with multiple software systems that never talked to each other, KPS Group audited our entire tech stack and built us a custom solution. Our efficiency improved 40% in the first quarter.",
			author: "Jennifer Thompson",
			company: "Thompson Electrical",
			role: "Operations Director",
			rating: 5,
			service: "Modern Stack"
		},
		{
			quote: "The payroll headaches are finally over. Modern Pay handles everything from tax filings to employee onboarding. I can focus on growing my plumbing business instead of paperwork.",
			author: "Robert Chen",
			company: "Chen Plumbing Co.",
			role: "CEO",
			rating: 5,
			service: "Modern Pay"
		}
	];
</script>

<section class="py-20 bg-sand">
	<div class="container mx-auto px-4">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-navy mb-6">
				What Our Clients Say
			</h2>
			<p class="text-lg text-slate max-w-2xl mx-auto">
				Service businesses across the country trust The KPS Group to streamline their operations and drive growth.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each testimonials as testimonial}
				<Testimonial {...testimonial} />
			{/each}
		</div>
		
		<div class="text-center mt-12">
			<p class="text-slate mb-4">Ready to join them?</p>
			<a 
				href="/contact" 
				class="inline-block bg-gold text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors focus-ring shadow-lg hover:shadow-xl"
			>
				Get Started Today
			</a>
		</div>
	</div>
</section>
