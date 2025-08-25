<script lang="ts">
	import { onMount } from 'svelte';
	import { initPerformanceMonitoring } from '$lib/utils/performance';
	
	onMount(() => {
		document.title = 'Modern Ledger - Clean Books. Clear Decisions. Confident Growth. | The KPS Group';
		
		// Initialize performance monitoring
		initPerformanceMonitoring();
	});
</script>

<svelte:head>
	<title>Modern Ledger - Clean Books. Clear Decisions. Confident Growth. | The KPS Group</title>
	<meta name="description" content="Modern Ledger takes the mess out of bookkeeping so you can finally see your numbers, trust them, and use them to grow." />
	<meta name="keywords" content="bookkeeping services Dallas, QuickBooks cleanup Texas, financial reporting, tax preparation, cash flow management, business accounting, Dallas bookkeeping, financial dashboard, QuickBooks optimization" />
	<link rel="canonical" href="https://thekpsgroup.com/services/ledger" />
	
	<!-- Performance Optimizations -->
	<link rel="preload" href="/brands/modern-ledger-header.png" as="image" />
	<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
	<link rel="dns-prefetch" href="https://fonts.gstatic.com" />
	
	<!-- Additional SEO Meta Tags -->
	<meta name="author" content="The KPS Group" />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Modern Ledger - Clean Books. Clear Decisions. Confident Growth." />
	<meta name="twitter:description" content="Modern Ledger takes the mess out of bookkeeping so you can finally see your numbers, trust them, and use them to grow." />
	<meta name="twitter:image" content="https://thekpsgroup.com/brands/modern-ledger-header.png" />
	
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Modern Ledger - Clean Books. Clear Decisions. Confident Growth." />
	<meta property="og:description" content="Modern Ledger takes the mess out of bookkeeping so you can finally see your numbers, trust them, and use them to grow." />
	<meta property="og:url" content="https://thekpsgroup.com/services/ledger" />
	<meta property="og:image" content="https://thekpsgroup.com/brands/modern-ledger-header.png" />
	
	<!-- JSON-LD Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"name": "Modern Ledger",
			"description": "Clean Books. Clear Decisions. Confident Growth.",
			"provider": {
				"@type": "Organization",
				"name": "The KPS Group",
				"url": "https://thekpsgroup.com"
			},
			"url": "https://thekpsgroup.com",
			"category": "Bookkeeping and Financial Services",
			"serviceType": "Professional Bookkeeping and Financial Reporting",
			"areaServed": "United States",
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Modern Ledger Services",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Bookkeeping Cleanup",
							"description": "Untangle years of neglected QuickBooks or Xero files"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Monthly Bookkeeping",
							"description": "Timely transaction recording and reconciliation"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Custom Financial Dashboards",
							"description": "Real-time KPIs and visual insights"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Tax-Ready Financials",
							"description": "Accurate records that make tax season painless"
						}
					}
				]
			}
		}
	</script>
</svelte:head>

<div class="min-h-screen">
	<!-- Hero Section -->
	<section class="pt-32 pb-20 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white relative overflow-hidden">
		<!-- Subtle connection to header -->
		<div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60"></div>
		
		<!-- Financial documents background pattern -->
		<div class="absolute inset-0 opacity-10">
			<div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, rgba(20, 184, 166, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.3) 0%, transparent 50%);"></div>
		</div>
		
		<div class="container mx-auto px-4 relative z-10">
			<!-- Breadcrumb Navigation -->
			<nav class="mb-8" aria-label="Breadcrumb">
				<ol class="flex items-center space-x-2 text-teal-200 text-sm">
					<li><a href="/" class="hover:text-white transition-colors">Home</a></li>
					<li class="text-teal-400">/</li>
					<li><a href="/suite" class="hover:text-white transition-colors">Modern Suite</a></li>
					<li class="text-teal-400">/</li>
					<li class="text-white font-medium">Modern Ledger</li>
				</ol>
			</nav>
			<div class="max-w-5xl mx-auto text-center">
				<h1 class="text-4xl md:text-6xl font-bold mb-6">
					📊 Clean Books. Clear Decisions. Confident Growth.
				</h1>
				<p class="text-xl md:text-2xl text-teal-200 mb-8 max-w-4xl mx-auto">
					Modern Ledger takes the mess out of bookkeeping so you can finally see your numbers, trust them, and use them to grow.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-offset-2" aria-label="Book a free financial review with Modern Ledger">
						Book a Free Financial Review
					</a>
					<button on:click={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})} class="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-teal-900 transition-colors focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-offset-2" aria-label="See how we fix books and improve financial processes">
						See How We Fix Books
					</button>
				</div>
			</div>
		</div>
		
		<!-- Transition element -->
		<div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
	</section>

	<!-- The Pain Section -->
	<section class="py-20 bg-gradient-to-b from-slate-50 to-white relative">
		<!-- Transition element from hero -->
		<div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50 to-transparent"></div>
		
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
					Your Books Aren't Just Messy — They're Costing You
				</h2>
				
				<div class="space-y-8">
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Lost Visibility</h3>
						<p class="text-slate-700">
							You don't actually know if you're making money month to month.
						</p>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">DIY Bookkeeping Gone Wrong</h3>
						<p class="text-slate-700">
							QuickBooks Online looks fine… until tax season exposes the errors.
						</p>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Tax-Time Panic</h3>
						<p class="text-slate-700">
							Scrambling every April, overpaying because of disorganized books.
						</p>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">No Decision-Making Data</h3>
						<p class="text-slate-700">
							You're flying blind without accurate reports.
						</p>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Cash Flow Confusion</h3>
						<p class="text-slate-700">
							You can't predict payroll, expenses, or profits with bad records.
						</p>
					</div>
				</div>
				
				<div class="text-center mt-12">
					<a href="/contact" class="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-offset-2">
						Stop stressing about your numbers. Book your free review.
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
					Accurate Books, Delivered Monthly
				</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Bookkeeping Cleanup</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Untangle years of neglected QuickBooks or Xero files</li>
							<li>• Fix miscategorized expenses, reconcile bank accounts</li>
							<li>• Remove duplicates and correct errors</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Monthly Bookkeeping</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Timely transaction recording</li>
							<li>• Bank and credit card reconciliation</li>
							<li>• Monthly financial reporting (P&L, Balance Sheet, Cash Flow)</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Custom Financial Dashboards</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Real-time KPIs in a clean dashboard view</li>
							<li>• Visual insights into profitability and cash flow</li>
							<li>• Revenue trends and performance metrics</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">QuickBooks Optimization</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Chart of Accounts cleanup</li>
							<li>• Automations for recurring transactions</li>
							<li>• Integration with payroll and CRM/ERP systems</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Tax-Ready Financials</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Accurate records that make tax season painless</li>
							<li>• Work directly with your CPA or ours</li>
							<li>• Organized documentation for tax filing</li>
						</ul>
					</div>
					
					<div class="bg-slate-50 p-8 rounded-2xl">
						<div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Advisory Add-Ons</h3>
						<ul class="text-slate-700 space-y-2">
							<li>• Cash flow forecasting</li>
							<li>• Budget vs. actual variance reporting</li>
							<li>• Growth strategy insights based on real numbers</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Benefits Section -->
	<section class="py-20 bg-teal-900 text-white relative">
		<!-- Transition element from features -->
		<div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-teal-900 to-transparent"></div>
		
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
					From Chaos to Clarity
				</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Know Your Numbers</h3>
								<p class="text-teal-200">Stop guessing; start making decisions based on facts.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Save Time & Stress</h3>
								<p class="text-teal-200">No more late nights trying to reconcile accounts yourself.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Avoid IRS Headaches</h3>
								<p class="text-teal-200">Clean, compliant books mean no surprises.</p>
							</div>
						</div>
					</div>
					
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Plan With Confidence</h3>
								<p class="text-teal-200">Forecast cash flow and expenses with real accuracy.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Growth-Ready Finances</h3>
								<p class="text-teal-200">Investors and banks trust clean, professional financials.</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Financial Peace of Mind</h3>
								<p class="text-teal-200">Finally feel in control of your business finances.</p>
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
					Simple, Transparent, Proven
				</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-5 gap-8">
					<div class="text-center">
						<div class="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">1</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Financial Review</h3>
						<p class="text-slate-700">
							We look at your current books and identify issues.
						</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">2</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Cleanup Phase</h3>
						<p class="text-slate-700">
							Fix errors, reconcile accounts, and optimize systems.
						</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">3</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Monthly Bookkeeping</h3>
						<p class="text-slate-700">
							Ongoing accurate records, delivered every month.
						</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">4</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Reporting & Insights</h3>
						<p class="text-slate-700">
							Monthly financial statements and dashboards.
						</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<span class="text-white text-xl font-bold">5</span>
						</div>
						<h3 class="text-xl font-semibold text-navy mb-4">Advisory Support</h3>
						<p class="text-slate-700">
							Optional add-ons for growth planning and CFO-style insights.
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
					See the Difference Clean Books Make
				</h2>
				
				<div class="space-y-8">
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Client Saved $18,000 in Taxes</h3>
						<p class="text-slate-700 mb-4">
							After a full cleanup exposed hidden deductions and corrected misclassified expenses, this client saved $18,000 in taxes while gaining complete financial clarity.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Tax Savings</span>
							<span class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Bookkeeping Cleanup</span>
							<span class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Financial Clarity</span>
						</div>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Company Scaled from $500k → $2.1M</h3>
						<p class="text-slate-700 mb-4">
							With real numbers and accurate financial reporting, this company was able to make informed decisions that drove growth from $500k to $2.1M in revenue.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Revenue Growth</span>
							<span class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Data-Driven Decisions</span>
							<span class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Strategic Planning</span>
						</div>
					</div>
					
					<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-navy mb-4">Owner Testimonial</h3>
						<p class="text-slate-700 mb-4 italic">
							"We finally feel in control of our business — no more financial black hole. Modern Ledger gave us the clarity and confidence to make bold decisions."
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Owner Success</span>
							<span class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Financial Control</span>
							<span class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Business Confidence</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Final CTA Section -->
	<section class="py-20 bg-gradient-to-br from-navy via-navy-800 to-teal-900 text-white relative">
		<!-- Transition element from case studies -->
		<div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-navy to-transparent"></div>
		
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto text-center">
				<h2 class="text-3xl md:text-4xl font-bold mb-6">
					Your Books Should Work For You, Not Against You
				</h2>
				<p class="text-xl text-slate-300 mb-8">
					Every business has unique needs. We create tailored proposals after your review.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-offset-2">
						Book a Free Financial Review
					</a>
					<a href="/contact" class="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-navy transition-colors focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-offset-2">
						Request a Bookkeeping Audit
					</a>
				</div>
				<p class="text-sm text-slate-400 mt-4">
					We provide a short summary of errors and opportunities to improve your financial processes
				</p>
			</div>
		</div>
	</section>
</div>
