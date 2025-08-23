<script lang="ts">
	import { page } from '$app/stores';
	import { SUITE } from '$lib/data/suite';
	import { smoothScrollTo } from '$lib/utils/observe';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Button from '$lib/components/Button.svelte';
	const SITE_URL = (import.meta.env?.PUBLIC_SITE_URL as string) || 'https://thekpsgroup.com';
	
	// Get the suite data based on the URL parameter
	$: suiteKey = $page.params.key;
	$: suite = SUITE.find(s => s.key === suiteKey);
	
	function scrollToContact() {
		const contactForm = document.querySelector('#contact-form') as HTMLElement;
		if (contactForm) {
			smoothScrollTo(contactForm, 100);
		} else {
			window.location.href = '/contact';
		}
	}
	
	// Redirect if suite not found
	$: if (!suite) {
		window.location.href = '/suite';
	}
</script>

<svelte:head>
	<title>{suite?.name || 'Suite'} — {suite?.tag || 'Service'} | The KPS Group</title>
	<meta name="description" content="{suite?.summary || 'Modern Suite service details'}" />
	{#if suite}
		<link rel="canonical" href={`${SITE_URL}/suite/${suite.key}`} />
		<meta property="og:title" content={`${suite.name} — ${suite.tag}`} />
		<meta property="og:description" content={suite.summary} />
		<meta property="og:url" content={`${SITE_URL}/suite/${suite.key}`} />
		<script type="application/ld+json">
			{JSON.stringify({
				"@context":"https://schema.org",
				"@type":"Service",
				"name": suite.name,
				"description": suite.summary,
				"provider": {"@type":"Organization","name":"The KPS Group"}
			})}
		</script>
		<script type="application/ld+json">
			{JSON.stringify({
				"@context":"https://schema.org",
				"@type":"BreadcrumbList",
				"itemListElement":[
					{"@type":"ListItem","position":1,"name":"Suite","item":`${SITE_URL}/suite`},
					{"@type":"ListItem","position":2,"name":suite.name,"item":`${SITE_URL}/suite/${suite.key}`}
				]
			})}
		</script>
	{/if}
</svelte:head>

{#if suite}
	
	<!-- Breadcrumbs -->
	<div class="container mx-auto px-4 pt-8">
		<Breadcrumbs items={[
			{ label: 'Home', href: '/' },
			{ label: 'Suite', href: '/suite' },
			{ label: suite.name }
		]} />
	</div>
	
	<!-- Hero Section -->
	<section class="bg-navy text-white py-20 lg:py-32">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<nav class="mb-8">
					<a href="/suite" class="text-gold hover:text-gold-600 transition-colors">
						← Back to The Modern Suite
					</a>
				</nav>
				
				<div class="text-center">
					<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
						{suite.name}
					</h1>
					<p class="text-xl md:text-2xl text-gold font-semibold mb-6">
						{suite.tag}
					</p>
					<p class="text-lg text-slate max-w-2xl mx-auto mb-8">
						{suite.summary}
					</p>
					<Button
						on:click={scrollToContact}
						variant="primary"
						size="lg"
					>
						{suite.cta.label}
					</Button>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Pain Points & Solutions -->
	<section class="py-20 bg-sand">
		<div class="container mx-auto px-4">
			<div class="max-w-6xl mx-auto">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<!-- Pain Points -->
					<div class="bg-white rounded-2xl p-8 shadow-lg border border-slate/20">
						<h2 class="text-2xl font-bold text-navy mb-6">The Problems We Solve</h2>
						<div class="space-y-4">
							{#each suite.painPoints as pain}
								<div class="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
									<div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
										<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
										</svg>
									</div>
									<div>
										<h3 class="font-semibold text-navy mb-1">Pain Point</h3>
										<p class="text-slate">{pain}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
					
					<!-- Solutions -->
					<div class="bg-white rounded-2xl p-8 shadow-lg border border-slate/20">
						<h2 class="text-2xl font-bold text-navy mb-6">Our Solutions</h2>
						<div class="space-y-4">
							{#each suite.solutions as solution}
								<div class="flex items-start space-x-4 p-4 bg-gold/10 rounded-lg border border-gold/20">
									<div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
										<svg class="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<div>
										<h3 class="font-semibold text-navy mb-1">Solution</h3>
										<p class="text-slate">{solution}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Process Section -->
	<section class="py-20 bg-navy text-white">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto text-center">
				<h2 class="text-3xl md:text-4xl font-bold mb-8">How We Work</h2>
				<p class="text-lg text-slate mb-12 max-w-2xl mx-auto">
					A proven three-phase approach that transforms your business and drives measurable results.
				</p>
				
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div class="text-center">
						<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
							<span class="text-2xl font-bold text-gold">1</span>
						</div>
						<h3 class="text-xl font-semibold mb-2">Strategic Foundation</h3>
						<p class="text-slate">We analyze your current situation, identify opportunities, and create a strategic roadmap.</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
							<span class="text-2xl font-bold text-gold">2</span>
						</div>
						<h3 class="text-xl font-semibold mb-2">Design & Build</h3>
						<p class="text-slate">We create and implement solutions with ruthless speed, ensuring every element serves your goals.</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
							<span class="text-2xl font-bold text-gold">3</span>
						</div>
						<h3 class="text-xl font-semibold mb-2">Launch & Optimize</h3>
						<p class="text-slate">We ship, measure, and iterate. Continuous optimization ensures your competitive edge.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<!-- CTA Section -->
	<section class="py-20 bg-sand">
		<div class="container mx-auto px-4">
			<div class="max-w-2xl mx-auto text-center">
				<h2 class="text-3xl md:text-4xl font-bold text-navy mb-6">
					Ready to Get Started?
				</h2>
				<p class="text-lg text-slate mb-8">
					Let's discuss how {suite.name} can transform your business and drive real results.
				</p>
				<Button
					on:click={scrollToContact}
					variant="primary"
					size="lg"
				>
					{suite.cta.label}
				</Button>
			</div>
		</div>
	</section>
{/if}
