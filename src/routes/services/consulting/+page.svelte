<script lang="ts">
	import { onMount } from 'svelte';
	
	onMount(() => {
		document.title = 'Modern Consulting - Build Systems. Drive Growth. Lead With Confidence. | The KPS Group';
	});
</script>

<svelte:head>
	<title>Modern Consulting - Build Systems. Drive Growth. Lead With Confidence. | The KPS Group</title>
	<meta name="description" content="We help service-based businesses transform chaos into clarity with proven strategies, operational frameworks, and leadership consulting." />
	<meta name="keywords" content="business consulting Dallas, operational consulting Texas, leadership coaching, SOP development, performance management, change management, business strategy, Dallas consulting services" />
	<link rel="canonical" href="https://thekpsgroup.com/services/consulting" />
	
	<!-- Performance Optimizations -->
	<link rel="preload" href="/brands/modern-consulting-header.png" as="image" />
	<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
	<link rel="dns-prefetch" href="https://fonts.gstatic.com" />
	
	<!-- Additional SEO Meta Tags -->
	<meta name="author" content="The KPS Group" />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Modern Consulting - Build Systems. Drive Growth. Lead With Confidence." />
	<meta name="twitter:description" content="We help service-based businesses transform chaos into clarity with proven strategies, operational frameworks, and leadership consulting." />
	<meta name="twitter:image" content="https://thekpsgroup.com/brands/modern-consulting-header.png" />
	
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Modern Consulting - Build Systems. Drive Growth. Lead With Confidence." />
	<meta property="og:description" content="We help service-based businesses transform chaos into clarity with proven strategies, operational frameworks, and leadership consulting." />
	<meta property="og:url" content="https://thekpsgroup.com/services/consulting" />
	<meta property="og:image" content="https://thekpsgroup.com/brands/modern-consulting-header.png" />
	
	<!-- JSON-LD Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"name": "Modern Consulting",
			"description": "Build Systems. Drive Growth. Lead With Confidence.",
			"provider": {
				"@type": "Organization",
				"name": "The KPS Group",
				"url": "https://thekpsgroup.com"
			},
			"url": "https://thekpsgroup.com",
			"category": "Business Consulting and Leadership Development",
			"serviceType": "Operational Consulting and Leadership Coaching",
			"areaServed": "United States",
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Modern Consulting Services",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Operational Audits",
							"description": "Deep dive into processes, workflows, and team structure"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Standard Operating Procedures",
							"description": "Documented, repeatable processes that drive consistency"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Leadership Coaching",
							"description": "1-on-1 consulting for owners and managers"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Change Management",
							"description": "Aligning teams around new systems and strategies"
						}
					}
				]
			}
		}
	</script>
</svelte:head>

<div class="min-h-screen">
	<!-- Hero Section -->
	<section class="pt-32 pb-20 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white relative overflow-hidden">
		<!-- Subtle connection to header -->
		<div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60"></div>
		
		<!-- Abstract blueprint background pattern -->
		<div class="absolute inset-0 opacity-10">
			<div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(251, 146, 60, 0.3) 0%, transparent 50%);"></div>
		</div>
		
		<div class="container mx-auto px-4 relative z-10">
			<!-- Breadcrumb Navigation -->
			<nav class="mb-8" aria-label="Breadcrumb">
				<ol class="flex items-center space-x-2 text-orange-200 text-sm">
					<li><a href="/" class="hover:text-white transition-colors">Home</a></li>
					<li class="text-orange-400">/</li>
					<li><a href="/suite" class="hover:text-white transition-colors">Modern Suite</a></li>
					<li class="text-orange-400">/</li>
					<li class="text-white font-medium">Modern Consulting</li>
				</ol>
			</nav>
			<div class="max-w-5xl mx-auto text-center">
				<h1 class="text-4xl md:text-6xl font-bold mb-6">
					📈 Build Systems. Drive Growth. Lead With Confidence.
				</h1>
				<p class="text-xl md:text-2xl text-orange-200 mb-8 max-w-4xl mx-auto">
					We help service-based businesses transform chaos into clarity with proven strategies, operational frameworks, and leadership consulting.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2" aria-label="Book a free strategy session with Modern Consulting">
						Book a Free Strategy Session
					</a>
					<button on:click={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})} class="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-orange-900 transition-colors focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2" aria-label="View our consulting framework and services">
						See Our Consulting Framework
					</button>
				</div>
			</div>
		</div>
		
		<!-- Transition element -->
		<div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
	</section>

	<!-- The Pain Section -->
	<section class="py-20 bg-gradient-to-b from-slate-50 to-white">
		<!-- Transition element from hero -->
		<div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50 to-transparent"></div>
		
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
					You Don't Have a Growth Problem. You Have a Systems Problem.
				</h2>
				
				<div class="space-y-8">
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Constant Firefighting</h3>
						<p class="text-slate-700">
							You're putting out daily issues instead of planning long-term.
						</p>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Inconsistent Results</h3>
						<p class="text-slate-700">
							Some jobs are profitable, others aren't — and you don't know why.
						</p>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Lack of Structure</h3>
						<p class="text-slate-700">
							No clear SOPs, processes, or accountability. Everyone does things "their own way."
						</p>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Team Burnout</h3>
						<p class="text-slate-700">
							Your people are overworked, misaligned, or unclear on expectations.
						</p>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Plateaued Growth</h3>
						<p class="text-slate-700">
							Revenue is flat because your operations can't scale further.
						</p>
					</div>
				</div>
				
				<div class="text-center mt-12">
					<a href="/contact" class="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
						Stop running in circles. Book your free strategy session.
					</a>
				</div>
			</div>
		</div>
		
		<!-- Transition element to features -->
		<div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
	</section>

	<!-- Features Section -->
	<section id="features" class="py-20">
		<div class="container mx-auto px-4">
			<div class="max-w-6xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
					We Bring Clarity, Structure, and Leadership to Your Business
				</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Operational Audits</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Deep dive into processes, workflows, and team structure</li>
							<li>• Identify bottlenecks, inefficiencies, and revenue leaks</li>
							<li>• Comprehensive analysis of your current operations</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Standard Operating Procedures</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Documented, repeatable processes that drive consistency</li>
							<li>• Training materials for new hires to hit the ground running</li>
							<li>• Clear guidelines for every role and responsibility</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Performance Management</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Clear KPIs for every role</li>
							<li>• Dashboards to track productivity, efficiency, and profitability</li>
							<li>• Data-driven insights for better decision making</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Leadership Coaching</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• 1-on-1 consulting for owners and managers</li>
							<li>• Conflict resolution, communication frameworks, and leadership development</li>
							<li>• Build confidence and decision-making skills</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Change Management</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Aligning teams around new systems and strategies</li>
							<li>• Employee buy-in strategies so adoption sticks</li>
							<li>• Smooth transitions that minimize disruption</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Scalable Growth Roadmaps</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Custom roadmaps for hitting growth targets without chaos</li>
							<li>• Built-in accountability check-ins to keep progress on track</li>
							<li>• Strategic planning that supports sustainable expansion</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Benefits Section -->
	<section class="py-20 bg-orange-900 text-white relative">
		<!-- Transition element from features -->
		<div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-orange-900 to-transparent"></div>
		
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
					Operations That Work. Teams That Win.
				</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Stop the Chaos</h3>
								<p class="text-orange-200">Predictable, repeatable operations that remove daily stress.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Stronger Leadership</h3>
								<p class="text-orange-200">Confident decisions backed by clear metrics.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Aligned Teams</h3>
								<p class="text-orange-200">Everyone on the same page, rowing in the same direction.</p>
							</div>
						</div>
					</div>
					
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Higher Profit Margins</h3>
								<p class="text-orange-200">Reduced inefficiencies = more dollars to the bottom line.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Scalable Growth</h3>
								<p class="text-orange-200">Systems and structure that support expansion, not collapse.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Sustainable Success</h3>
								<p class="text-orange-200">Build a business that works for you, not against you.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Process Section -->
	<section class="py-20 relative">
		<!-- Transition element from benefits -->
		<div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
		
		<div class="container mx-auto px-4">
			<div class="max-w-6xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
					Consulting That Doesn't Stay On a Shelf
				</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-5 gap-8">
					<div class="text-center">
						<div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">1</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Discovery Session</h3>
						<p class="text-slate-700">
							Understand your business challenges and goals.
						</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">2</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Operational Audit</h3>
						<p class="text-slate-700">
							Diagnose inefficiencies, gaps, and opportunities.
						</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">3</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Blueprint & Strategy</h3>
						<p class="text-slate-700">
							Deliver a custom plan with step-by-step recommendations.
						</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">4</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Implementation Support</h3>
						<p class="text-slate-700">
							Help you execute SOPs, leadership frameworks, and metrics.
						</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">5</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Ongoing Coaching</h3>
						<p class="text-slate-700">
							Regular check-ins to ensure strategies stick and evolve with growth.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Case Studies Section -->
	<section class="py-20 bg-slate-50 relative">
		<!-- Transition element from process -->
		<div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50 to-transparent"></div>
		
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
					Real Businesses. Real Transformations.
				</h2>
				
				<div class="space-y-8">
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">HVAC Company Improved Profitability by 22%</h3>
						<p class="text-slate-700 mb-4">
							After implementing SOPs and performance management systems, this HVAC company saw a 22% increase in profitability while reducing operational stress for the owner.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">SOP Implementation</span>
							<span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Profitability Boost</span>
							<span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Operational Efficiency</span>
						</div>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Plumbing Company Scaled from 5 to 18 Techs</h3>
						<p class="text-slate-700 mb-4">
							With new leadership frameworks and change management strategies, this plumbing company successfully scaled their team from 5 to 18 technicians while maintaining quality and profitability.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Leadership Development</span>
							<span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Team Scaling</span>
							<span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Change Management</span>
						</div>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Owner Testimonial</h3>
						<p class="text-slate-700 mb-4 italic">
							"Modern Consulting gave me clarity, confidence, and a business that runs without me. I finally have the systems and leadership skills to scale without the chaos."
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Owner Success</span>
							<span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Business Clarity</span>
							<span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Scalable Systems</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Final CTA Section -->
	<section class="py-20 bg-gradient-to-br from-navy via-navy-800 to-orange-900 text-white relative">
		<!-- Transition element from case studies -->
		<div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-navy to-transparent"></div>
		
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto text-center">
				<h2 class="text-3xl md:text-4xl font-bold mb-6">
					Strong Systems Create Strong Businesses
				</h2>
				<p class="text-xl text-slate-300 mb-8">
					Every business is unique. We provide tailored proposals after your consultation.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
						Book a Free Strategy Session
					</a>
					<a href="/contact" class="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-navy transition-colors">
						Request an Operations Audit
					</a>
				</div>
				<p class="text-sm text-slate-400 mt-4">
					Receive a short operational health check to identify improvement opportunities
				</p>
			</div>
		</div>
	</section>
</div>
