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
	<title>The KPS Group | Modern Suite - Complete Business Solutions for Service Companies</title>
	<meta name="description" content="The KPS Group delivers enterprise-grade business solutions: Modern Brands (logos & websites), Modern Ledger (bookkeeping), Modern Pay (payroll), Modern Consulting (operations), and Modern Stack (custom software). Transform your service business with our comprehensive suite." />
	<meta name="keywords" content="service business solutions, branding agency Dallas, bookkeeping services Texas, payroll services, business consulting, custom software development, technology stack audit, business operations optimization, small business tools, enterprise solutions, modern branding, automated bookkeeping, HR compliance services" />
	
	<!-- Additional SEO Meta Tags -->
	<meta name="author" content="The KPS Group" />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href="https://thekpsgroup.com/" />
	
	<!-- Open Graph for Homepage -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="The KPS Group | Modern Suite - Complete Business Solutions" />
	<meta property="og:description" content="Transform your service business with enterprise-grade branding, bookkeeping, payroll, consulting & custom software solutions. The KPS Group's Modern Suite delivers results." />
	<meta property="og:url" content="https://thekpsgroup.com/" />
	<meta property="og:image" content="https://thekpsgroup.com/brands/kps/photos/kps.png" />
	<meta property="og:image:alt" content="The KPS Group - Modern Suite Business Solutions" />
	<meta property="og:site_name" content="The KPS Group" />
	
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The KPS Group | Modern Suite - Complete Business Solutions" />
	<meta name="twitter:description" content="Transform your service business with enterprise-grade solutions: branding, bookkeeping, payroll, consulting & custom software." />
	<meta name="twitter:image" content="https://thekpsgroup.com/brands/kps/photos/kps.png" />
	
	<!-- Enhanced JSON-LD Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "The KPS Group",
			"url": "https://thekpsgroup.com",
			"description": "Enterprise-grade business solutions for service companies",
			"potentialAction": {
				"@type": "SearchAction",
				"target": "https://thekpsgroup.com/search?q={search_term_string}",
				"query-input": "required name=search_term_string"
			}
		}
	</script>
	
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": [
				{
					"@type": "Question",
					"name": "What services does The KPS Group offer?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "The KPS Group offers five core services through The Modern Suite: Modern Brands (logos & websites), Modern Ledger (bookkeeping), Modern Pay (payroll), Modern Consulting (operations), and Modern Stack (custom software development)."
					}
				},
				{
					"@type": "Question",
					"name": "Where is The KPS Group located?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "The KPS Group is based in Dallas, Texas, serving service businesses across the United States with enterprise-grade tools and solutions."
					}
				},
				{
					"@type": "Question",
					"name": "How can I contact The KPS Group?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "You can contact The KPS Group by phone at 469-458-6966, email at sales@thekpsgroup.com, or through our contact form on the website."
					}
				}
			]
		}
	</script>
</svelte:head>

<Hero />

<!-- Founder Story -->
<section class="py-20 bg-slate-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<!-- Founder Photo -->
				<div class="relative">
					<div class="relative z-10">
						<img 
							src="/brands/kps/photos/kps.png" 
							alt="KPS Group Founder" 
							class="w-full h-auto rounded-2xl shadow-2xl"
						/>
					</div>
					<!-- Decorative background elements -->
					<div class="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full"></div>
					<div class="absolute -bottom-6 -left-6 w-32 h-32 bg-navy/10 rounded-full"></div>
				</div>
				
				<!-- Founder Story -->
				<div class="space-y-6">
					<div class="eyebrow text-gold font-semibold">THE FOUNDER'S STORY</div>
					<h2 class="text-3xl md:text-4xl font-bold text-navy leading-tight">
						Why I Started The KPS Group
					</h2>
					<div class="space-y-4 text-slate-700 leading-relaxed">
						<p>
							I didn't start The KPS Group because I wanted to run "just another consulting firm." I started it because I've lived both sides of business—big tech boardrooms and small business job sites—and I saw a painful gap no one was fixing.
						</p>
						<p>
							On one side, I spent years working inside some of the world's largest companies—<strong>IBM, Microsoft, PwC, Informatica</strong>—where billion-dollar organizations had access to powerful software, airtight financials, and entire teams dedicated to compliance and growth.
						</p>
						<p>
							On the other side, I worked shoulder-to-shoulder with service businesses in the trades—<strong>HVAC, plumbing, electrical, construction</strong>—where owners wore ten hats, ran payroll at midnight, guessed their books in QuickBooks, and got stuck paying overpriced IT or marketing vendors who barely moved the needle.
						</p>
						<p>
							That disconnect frustrated me. Why should the tools that drive the Fortune 500 be locked away from the very businesses that keep our homes running and our communities thriving?
						</p>
						<p class="text-lg font-semibold text-navy">
							That's when The KPS Group was born.
						</p>
					</div>
					
					<!-- Mission Statement -->
					<div class="bg-navy text-white p-6 rounded-xl">
						<p class="text-lg font-medium">
							"We exist to give small and mid-sized service businesses the same caliber of systems, financial clarity, and operational infrastructure that the 'big guys' hoard—but built in a way that's affordable, usable, and actually helps owners sleep at night."
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Trust Indicators -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
				<div class="trust-item">
					<div class="text-3xl font-bold text-navy mb-2">15+</div>
					<div class="text-slate-600">Years Experience</div>
				</div>
				<div class="trust-item">
					<div class="text-3xl font-bold text-navy mb-2">Enterprise</div>
					<div class="text-slate-600">Background</div>
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

<!-- Mission & Modern Suite -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<div class="eyebrow text-gold font-semibold mb-4">THE MISSION</div>
			<h2 class="text-3xl md:text-4xl font-bold text-navy mb-8">
				Bridging Enterprise Discipline & Small-Business Grit
			</h2>
			<div class="space-y-6 text-slate-700 leading-relaxed text-lg">
				<p>
					Through our family of companies, we give business owners the back-office they deserve: streamlined, compliant, and scalable.
				</p>
				<p>
					This isn't about selling software or services. It's about leveling the playing field for the trades and local businesses that fuel our economy. It's about making sure the electrician with five vans or the HVAC company doing $3M a year can compete with companies ten times their size—without losing control of their operations or their margins.
				</p>
				<p class="text-xl font-semibold text-navy">
					The KPS Group is my way of bridging the worlds I know best: enterprise discipline and small-business grit.
				</p>
				<p class="text-lg">
					Because when local businesses thrive, communities thrive. And that's the mission.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Fallback anchor -->
<section id="solutions" style="padding:1rem 0;"></section>



<SuiteGrid />
<Consolidation />

<!-- SEO-Optimized FAQ Section -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
				Frequently Asked Questions
			</h2>
			
			<div class="space-y-8">
				<div class="faq-item">
					<h3 class="text-xl font-semibold text-navy mb-3">
						What services does The KPS Group offer?
					</h3>
					<p class="text-slate-700 leading-relaxed">
						The KPS Group offers five core services through The Modern Suite: <strong>Modern Brands</strong> (logos & websites), <strong>Modern Ledger</strong> (bookkeeping), <strong>Modern Pay</strong> (payroll), <strong>Modern Consulting</strong> (operations), and <strong>Modern Stack</strong> (custom software development). Each service is designed to give service businesses enterprise-grade tools without the complexity.
					</p>
				</div>
				
				<div class="faq-item">
					<h3 class="text-xl font-semibold text-navy mb-3">
						Where is The KPS Group located?
					</h3>
					<p class="text-slate-700 leading-relaxed">
						The KPS Group is based in <strong>Dallas, Texas</strong>, serving service businesses across the United States with enterprise-grade tools and solutions. We work with clients nationwide, providing remote and on-site services as needed.
					</p>
				</div>
				
				<div class="faq-item">
					<h3 class="text-xl font-semibold text-navy mb-3">
						How can I contact The KPS Group?
					</h3>
					<p class="text-slate-700 leading-relaxed">
						You can contact The KPS Group by <strong>phone at 469-458-6966</strong>, <strong>email at sales@thekpsgroup.com</strong>, or through our contact form on the website. We typically respond within 24 hours and offer free consultations to discuss your business needs.
					</p>
				</div>
				
				<div class="faq-item">
					<h3 class="text-xl font-semibold text-navy mb-3">
						What makes The KPS Group different from other business service providers?
					</h3>
					<p class="text-slate-700 leading-relaxed">
						The KPS Group stands apart through our unique combination of enterprise experience and small-business understanding. Our founder has worked inside Fortune 500 companies like IBM, Microsoft, and PwC, as well as directly with service businesses in the trades. This dual perspective allows us to deliver enterprise-grade solutions that are actually practical and affordable for small and mid-sized businesses.
					</p>
				</div>
				
				<div class="faq-item">
					<h3 class="text-xl font-semibold text-navy mb-3">
						What is The KPS Group founder's background?
					</h3>
					<p class="text-slate-700 leading-relaxed">
						Our founder has lived both sides of business—from big tech boardrooms to small business job sites. With experience at IBM, Microsoft, PwC, and Informatica, they understand how billion-dollar organizations operate. But they've also worked shoulder-to-shoulder with HVAC, plumbing, electrical, and construction businesses, seeing firsthand the challenges these owners face. This unique perspective drives our mission to bridge enterprise discipline with small-business grit.
					</p>
				</div>
				
				<div class="faq-item">
					<h3 class="text-xl font-semibold text-navy mb-3">
						Do you work with small businesses?
					</h3>
					<p class="text-slate-700 leading-relaxed">
						Absolutely! The KPS Group specializes in helping <strong>small to medium-sized service businesses</strong> access enterprise-grade tools and solutions. We believe that great business tools shouldn't be limited to large corporations. Our services are designed to be accessible, affordable, and scalable for growing businesses.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

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


