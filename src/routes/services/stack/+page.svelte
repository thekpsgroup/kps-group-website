<script lang="ts">
	import { onMount } from 'svelte';
	
	onMount(() => {
		document.title = 'Modern Stack - The Tech Stack That Actually Works For Your Business | The KPS Group';
	});
</script>

<svelte:head>
	<title>Modern Stack - The Tech Stack That Actually Works For Your Business | The KPS Group</title>
	<meta name="description" content="From IT support to ERP systems and custom software, Modern Stack optimizes, integrates, and builds the technology backbone your business deserves." />
	<meta name="keywords" content="tech stack optimization Dallas, custom software development Texas, ERP implementation, CRM systems, IT support, business automation, API integration, Dallas technology consulting" />
	<link rel="canonical" href="https://thekpsgroup.com/services/stack" />
	
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Modern Stack - The Tech Stack That Actually Works For Your Business" />
	<meta property="og:description" content="From IT support to ERP systems and custom software, Modern Stack optimizes, integrates, and builds the technology backbone your business deserves." />
	<meta property="og:url" content="https://thekpsgroup.com/services/stack" />
	<meta property="og:image" content="https://thekpsgroup.com/brands/modern-stack-header.png" />
	
	<!-- JSON-LD Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"name": "Modern Stack",
			"description": "The Tech Stack That Actually Works For Your Business",
			"provider": {
				"@type": "Organization",
				"name": "The KPS Group",
				"url": "https://thekpsgroup.com"
			},
			"url": "https://thekpsgroup.com",
			"category": "Technology Consulting and Custom Software Development",
			"serviceType": "Tech Stack Optimization and Business Technology Solutions",
			"areaServed": "United States",
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Modern Stack Services",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Tech Stack Optimization",
							"description": "Audit and optimize your current technology infrastructure"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Custom Software Development",
							"description": "Build applications tailored to your exact business processes"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "ERP/CRM Implementation",
							"description": "Deploy enterprise-grade tools for business management"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Ongoing IT Support",
							"description": "Remote monitoring, security, and helpdesk support"
						}
					}
				]
			}
		}
	</script>
</svelte:head>

<div class="min-h-screen">
	<!-- Hero Section -->
	<section class="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
		<!-- Subtle connection to header -->
		<div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"></div>
		
		<!-- Circuit board background pattern -->
		<div class="absolute inset-0 opacity-10">
			<div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%);"></div>
		</div>
		
		<div class="container mx-auto px-4 relative z-10">
			<!-- Breadcrumb Navigation -->
			<nav class="mb-8" aria-label="Breadcrumb">
				<ol class="flex items-center space-x-2 text-blue-200 text-sm">
					<li><a href="/" class="hover:text-white transition-colors">Home</a></li>
					<li class="text-blue-400">/</li>
					<li><a href="/suite" class="hover:text-white transition-colors">Modern Suite</a></li>
					<li class="text-blue-400">/</li>
					<li class="text-white font-medium">Modern Stack</li>
				</ol>
			</nav>
			<div class="max-w-5xl mx-auto text-center">
				<h1 class="text-4xl md:text-6xl font-bold mb-6">
					⚡ The Tech Stack That Actually Works For Your Business
				</h1>
				<p class="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
					From IT support to ERP systems and custom software, Modern Stack optimizes, integrates, and builds the technology backbone your business deserves.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
						Book a Free Tech Audit
					</a>
					<button on:click={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})} class="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-blue-900 transition-colors">
						See How We Build
					</button>
				</div>
			</div>
		</div>
		
		<!-- Transition element -->
		<div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
	</section>

	<!-- The Pain Section -->
	<section class="py-20 bg-gradient-to-b from-slate-50 to-white">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
					Your Technology Is Holding You Back
				</h2>
				
				<div class="space-y-8">
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Disjointed Tools</h3>
						<p class="text-slate-700">
							One system for payroll, another for accounting, another for scheduling — none of them talk to each other.
						</p>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Expensive MSPs</h3>
						<p class="text-slate-700">
							You're paying thousands a month for outsourced IT with no strategy — just break-fix.
						</p>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Slow Adoption</h3>
						<p class="text-slate-700">
							Employees avoid your software because it's clunky or doesn't fit your workflow.
						</p>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Data Silos</h3>
						<p class="text-slate-700">
							Customer data, invoices, and communication are scattered across platforms.
						</p>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Lost Opportunities</h3>
						<p class="text-slate-700">
							Without automation and integrations, your competitors are moving faster and serving clients better.
						</p>
					</div>
				</div>
				
				<div class="text-center mt-12">
					<a href="/contact" class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
						Get out of tech chaos. Book your free audit.
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section id="features" class="py-20">
		<div class="container mx-auto px-4">
			<div class="max-w-6xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
					One Partner for Your Entire Tech Ecosystem
				</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Tech Stack Optimization</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Audit of current software, licenses, and IT infrastructure</li>
							<li>• Eliminate redundancies, reduce costs, and streamline workflows</li>
							<li>• Vendor management: we negotiate with your SaaS providers</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Custom Software Development</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Build applications tailored to your exact process</li>
							<li>• Frontend: Next.js/React; Backend: Node.js, Django, or your preferred stack</li>
							<li>• APIs, automations, and mobile apps that scale with your business</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">QuickBooks Online Optimization</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Custom integrations and automations with QBO</li>
							<li>• Reporting dashboards for real-time financial visibility</li>
							<li>• Streamlined accounting workflows</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">ERP / CRM Implementation</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Deploy enterprise-grade tools for job scheduling, invoicing, proposals, and customer management</li>
							<li>• Tailored ERP workflows for service businesses (HVAC, plumbing, electrical)</li>
							<li>• Complete customer lifecycle management</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">VOIP & Communications Systems</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• VOIP phone setup with Dialpad, Zoom, or Twilio</li>
							<li>• Call routing, call recording, and CRM integration</li>
							<li>• Eliminate clunky desk phones and outdated PBX systems</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Ongoing IT Support</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Remote monitoring, patch management, and device security</li>
							<li>• Helpdesk for your employees</li>
							<li>• Cybersecurity strategy and backups</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Benefits Section -->
	<section class="py-20 bg-blue-900 text-white">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
					Turn Technology Into a Growth Engine
				</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Lower IT Costs</h3>
								<p class="text-blue-200">Pay for systems that work, not overpriced MSP retainers.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Better Employee Adoption</h3>
								<p class="text-blue-200">Tools that actually fit how your team works.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Full Visibility</h3>
								<p class="text-blue-200">One source of truth for projects, jobs, and finances.</p>
							</div>
						</div>
					</div>
					
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Automation & Speed</h3>
								<p class="text-blue-200">No more double entry; tasks that took hours now take minutes.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Scalable Infrastructure</h3>
								<p class="text-blue-200">Tech stack grows as you grow, not against you.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Competitive Advantage</h3>
								<p class="text-blue-200">Move faster and serve clients better than your competitors.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Process Section -->
	<section class="py-20">
		<div class="container mx-auto px-4">
			<div class="max-w-6xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
					From Audit to Integration — How We Deliver
				</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-5 gap-8">
					<div class="text-center">
						<div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">1</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Discovery Audit</h3>
						<p class="text-slate-700">
							We map out your current tech stack, licenses, and bottlenecks.
						</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">2</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Blueprint</h3>
						<p class="text-slate-700">
							Deliver a roadmap of recommended fixes, integrations, or builds.
						</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">3</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Implementation</h3>
						<p class="text-slate-700">
							Deploy new systems, integrate APIs, and train your team.
						</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">4</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Optimization</h3>
						<p class="text-slate-700">
							Fine-tune workflows, reporting, and user adoption.
						</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">5</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Ongoing Support</h3>
						<p class="text-slate-700">
							Proactive monitoring, updates, and IT helpdesk as needed.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Case Studies Section -->
	<section class="py-20 bg-slate-50">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
					How Businesses Transformed With Modern Stack
				</h2>
				
				<div class="space-y-8">
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Construction Firm Saved $25k Annually</h3>
						<p class="text-slate-700 mb-4">
							By consolidating tools and eliminating unused licenses, this construction company reduced their technology overhead by 40% while improving team productivity.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tool Consolidation</span>
							<span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Cost Reduction</span>
							<span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Productivity Boost</span>
						</div>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">HVAC Company Scaled to 50+ Techs</h3>
						<p class="text-slate-700 mb-4">
							A custom FSM + CRM system built on Modern Stack enabled this HVAC company to manage 50+ field technicians efficiently, with real-time scheduling and customer communication.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Custom FSM System</span>
							<span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Field Service Management</span>
							<span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Scalable Growth</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Final CTA Section -->
	<section class="py-20 bg-gradient-to-br from-navy via-navy-800 to-blue-900 text-white">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto text-center">
				<h2 class="text-3xl md:text-4xl font-bold mb-6">
					Stop Letting Tech Slow You Down
				</h2>
				<p class="text-xl text-slate-300 mb-8">
					Every business is unique. We build solutions around your processes, not cookie-cutter pricing.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
						Book a Free Tech Audit
					</a>
					<a href="/contact" class="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-navy transition-colors">
						Request a Systems Map
					</a>
				</div>
				<p class="text-sm text-slate-400 mt-4">
					We'll deliver a snapshot of your current vs. recommended tech stack
				</p>
			</div>
		</div>
	</section>
</div>
