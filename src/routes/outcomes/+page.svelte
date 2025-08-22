<script lang="ts">
	import { smoothScrollTo } from '$lib/utils/observe';
	import { page } from '$app/stores';
	const SITE_URL = (import.meta.env?.PUBLIC_SITE_URL as string) || 'https://thekpsgroup.com';
	
	function scrollToContact() {
		const contactForm = document.querySelector('#contact-form') as HTMLElement;
		if (contactForm) {
			smoothScrollTo(contactForm, 100);
		} else {
			window.location.href = '/contact';
		}
	}
</script>

<svelte:head>
	<title>Outcomes & Results — Service Business Transformations | The KPS Group</title>
	<meta name="description" content="Real results from service businesses using The Modern Suite. See how we've transformed operations, increased efficiency, and driven growth." />
	<link rel="canonical" href={`${SITE_URL}${$page.url.pathname}${$page.url.search}`} />
	<meta property="og:title" content="Outcomes & Results — The Modern Suite" />
	<meta property="og:description" content="Real results for service businesses using The Modern Suite." />
	<meta property="og:url" content={`${SITE_URL}${$page.url.pathname}${$page.url.search}`} />
	<script type="application/ld+json">
		{
			"@context":"https://schema.org",
			"@type":"BreadcrumbList",
			"itemListElement":[
				{"@type":"ListItem","position":1,"name":"Outcomes","item":"${SITE_URL}/outcomes"}
			]
		}
	</script>
</svelte:head>

<!-- Hero Section -->
<section class="bg-navy text-white py-20 lg:py-32">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
				Real Results for Real Businesses
			</h1>
			<p class="text-xl md:text-2xl text-slate mb-8 max-w-3xl mx-auto">
				See how service businesses are transforming their operations with The Modern Suite.
			</p>
		</div>
	</div>
</section>

<!-- Proof Points -->
<section class="py-20 bg-sand">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
				<!-- Lead Generation -->
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-slate/20 text-center">
					<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
						<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-navy mb-2">Lead Generation</h3>
					<div class="text-4xl font-bold text-gold mb-2">+247%</div>
					<p class="text-slate">Average increase in qualified leads for HVAC companies using Modern Brands + Consulting</p>
				</div>
				
				<!-- Payroll Cost Reduction -->
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-slate/20 text-center">
					<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
						<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-navy mb-2">Payroll Savings</h3>
					<div class="text-4xl font-bold text-gold mb-2">-60%</div>
					<p class="text-slate">Reduction in payroll processing time and costs with Modern Pay</p>
				</div>
				
				<!-- Operations Efficiency -->
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-slate/20 text-center">
					<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
						<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-navy mb-2">Ops Efficiency</h3>
					<div class="text-4xl font-bold text-gold mb-2">+85%</div>
					<p class="text-slate">Improvement in operational efficiency with Modern Stack integrations</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Case Studies -->
<section class="py-20 bg-navy text-white">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Case Studies</h2>
			
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<!-- HVAC Company -->
				<div class="bg-navy-800 rounded-2xl p-8 border border-gold/20">
					<div class="flex items-center mb-6">
						<div class="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold">HVAC Service Company</h3>
							<p class="text-slate text-sm">$2.5M annual revenue</p>
						</div>
					</div>
					
					<div class="space-y-4 mb-6">
						<div class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">Increased lead generation by 312%</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">Reduced payroll processing time by 70%</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">Streamlined dispatch operations</span>
						</div>
					</div>
					
					<p class="text-slate/80 italic">
						"The Modern Suite transformed our entire operation. We're now running like a much larger company."
					</p>
				</div>
				
				<!-- Electrical Contractor -->
				<div class="bg-navy-800 rounded-2xl p-8 border border-gold/20">
					<div class="flex items-center mb-6">
						<div class="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold">Electrical Contractor</h3>
							<p class="text-slate text-sm">$1.8M annual revenue</p>
						</div>
					</div>
					
					<div class="space-y-4 mb-6">
						<div class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">Cut software costs by 65%</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">Improved project tracking efficiency</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">Enhanced safety compliance reporting</span>
						</div>
					</div>
					
					<p class="text-slate/80 italic">
						"Modern Stack consolidated our tools and Modern Ledger gave us real-time financial visibility."
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Industry Results -->
<section class="py-20 bg-sand">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Industry-Specific Results</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<!-- HVAC -->
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-slate/20">
					<h3 class="text-2xl font-bold text-navy mb-4">HVAC Companies</h3>
					<ul class="space-y-3">
						<li class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">Average 40% increase in service call efficiency</span>
						</li>
						<li class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">25% reduction in no-show appointments</span>
						</li>
						<li class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">60% faster invoice processing</span>
						</li>
					</ul>
				</div>
				
				<!-- Electrical -->
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-slate/20">
					<h3 class="text-2xl font-bold text-navy mb-4">Electrical Contractors</h3>
					<ul class="space-y-3">
						<li class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">35% improvement in project profitability</span>
						</li>
						<li class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">50% faster material ordering</span>
						</li>
						<li class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">80% reduction in compliance paperwork</span>
						</li>
					</ul>
				</div>
				
				<!-- Plumbing -->
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-slate/20">
					<h3 class="text-2xl font-bold text-navy mb-4">Plumbing Companies</h3>
					<ul class="space-y-3">
						<li class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">45% increase in emergency call response</span>
						</li>
						<li class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">30% reduction in parts inventory costs</span>
						</li>
						<li class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">70% faster customer communication</span>
						</li>
					</ul>
				</div>
				
				<!-- General Service -->
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-slate/20">
					<h3 class="text-2xl font-bold text-navy mb-4">General Service Businesses</h3>
					<ul class="space-y-3">
						<li class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">Average 55% reduction in administrative overhead</span>
						</li>
						<li class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">40% improvement in customer satisfaction</span>
						</li>
						<li class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-gold rounded-full"></div>
							<span class="text-slate">25% increase in profit margins</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-navy text-white">
	<div class="container mx-auto px-4">
		<div class="max-w-2xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold mb-6">
				Ready to See These Results?
			</h2>
			<p class="text-lg text-slate mb-8">
				Let's discuss how The Modern Suite can transform your business and deliver similar results.
			</p>
			<button
				on:click={scrollToContact}
				class="bg-gold text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors focus-ring shadow-lg hover:shadow-xl"
			>
				Start Your Transformation
			</button>
		</div>
	</div>
</section>
