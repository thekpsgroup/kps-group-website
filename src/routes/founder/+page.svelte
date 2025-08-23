<script lang="ts">
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
	<title>Founder's Story | The KPS Group - Meet Our Founder</title>
	<meta name="description" content="Meet the founder of The KPS Group. Learn about the journey from Fortune 500 boardrooms to serving small businesses with enterprise-grade solutions." />
	<meta name="keywords" content="KPS Group founder, business consulting founder, Dallas business leader, enterprise experience, small business solutions" />
	
	<!-- Open Graph -->
	<meta property="og:type" content="profile" />
	<meta property="og:title" content="Founder's Story | The KPS Group" />
	<meta property="og:description" content="Meet the founder of The KPS Group. From Fortune 500 boardrooms to serving small businesses with enterprise-grade solutions." />
	<meta property="og:url" content="https://thekpsgroup.com/founder" />
	<meta property="og:image" content="https://thekpsgroup.com/6809dcf7a0a6774fd70f6395-HeadshotPro.png" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Founder's Story | The KPS Group" />
	<meta name="twitter:description" content="Meet the founder of The KPS Group. From Fortune 500 boardrooms to serving small businesses." />
	<meta name="twitter:image" content="https://thekpsgroup.com/6809dcf7a0a6774fd70f6395-HeadshotPro.png" />
</svelte:head>

<!-- Hero Section -->
<section class="py-20 bg-gradient-to-br from-navy to-slate-900 text-white">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<!-- Founder Photo -->
				<div class="relative order-2 lg:order-1">
					<div class="relative z-10">
						<img 
							src="/6809dcf7a0a6774fd70f6395-HeadshotPro.png" 
							alt="KPS Group Founder" 
							class="w-full h-auto rounded-2xl shadow-2xl"
						/>
					</div>
					<!-- Decorative background elements -->
					<div class="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full"></div>
					<div class="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full"></div>
				</div>
				
				<!-- Hero Content -->
				<div class="space-y-6 order-1 lg:order-2">
					<div class="eyebrow text-gold font-semibold">THE FOUNDER'S STORY</div>
					<h1 class="text-4xl md:text-5xl font-bold leading-tight">
						Why I Started The KPS Group
					</h1>
					<p class="text-xl text-slate-200 leading-relaxed">
						I didn't start this company to run "just another consulting firm." I started it because I've lived both sides of business—and I saw a painful gap no one was fixing.
					</p>
					
					<!-- Direct Contact -->
					<div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
						<h3 class="text-lg font-semibold mb-3">Get In Touch Directly</h3>
						<div class="space-y-2 text-slate-200">
							<p>Email: <a href="mailto:founder@thekpsgroup.com" class="text-gold hover:text-gold-300 transition-colors font-medium">founder@thekpsgroup.com</a></p>
							<p>Phone: <a href="tel:469-458-6966" class="text-gold hover:text-gold-300 transition-colors font-medium">469-458-6966</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- The Story -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<div class="space-y-8 text-navy">
				<h2 class="text-3xl md:text-4xl font-bold text-center mb-12">The Journey That Led Here</h2>
				
				<div class="space-y-6 text-lg leading-relaxed">
					<p>
						I spent years working inside some of the world's largest companies—<strong>IBM, Microsoft, PwC, Informatica</strong>—where billion-dollar organizations had access to powerful software, airtight financials, and entire teams dedicated to compliance and growth.
					</p>
					
					<p>
						But I also worked shoulder-to-shoulder with service businesses in the trades—<strong>HVAC, plumbing, electrical, construction</strong>—where owners wore ten hats, ran payroll at midnight, guessed their books in QuickBooks, and got stuck paying overpriced IT or marketing vendors who barely moved the needle.
					</p>
					
					<p>
						That disconnect frustrated me. Why should the tools that drive the Fortune 500 be locked away from the very businesses that keep our homes running and our communities thriving?
					</p>
					
					<div class="bg-navy text-white p-8 rounded-xl my-8">
						<p class="text-xl font-medium italic">
							"That's when I realized: The gap wasn't about money or sophistication. It was about access to the right tools, built the right way, for the right people."
						</p>
					</div>
					
					<p>
						So I started The KPS Group with a simple mission: <strong>Give small and mid-sized service businesses the same caliber of systems, financial clarity, and operational infrastructure that the 'big guys' hoard—but built in a way that's affordable, usable, and actually helps owners sleep at night.</strong>
					</p>
					
					<p>
						Today, we're not just another consulting firm. We're a bridge between enterprise discipline and small-business grit. We understand both worlds because we've lived in both worlds.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Experience & Background -->
<section class="py-20 bg-slate-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-navy text-center mb-12">The Experience That Shapes Our Approach</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
				<!-- Enterprise Experience -->
				<div class="bg-white p-8 rounded-xl shadow-lg">
					<h3 class="text-2xl font-bold text-navy mb-6">Enterprise Experience</h3>
					<div class="space-y-4">
						<div class="flex items-start space-x-4">
							<div class="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
							<div>
								<h4 class="font-semibold text-navy">IBM</h4>
								<p class="text-slate-600">Global technology solutions and consulting</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
							<div>
								<h4 class="font-semibold text-navy">Microsoft</h4>
								<p class="text-slate-600">Enterprise software and cloud solutions</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
							<div>
								<h4 class="font-semibold text-navy">PwC</h4>
								<p class="text-slate-600">Professional services and consulting</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
							<div>
								<h4 class="font-semibold text-navy">Informatica</h4>
								<p class="text-slate-600">Data integration and management</p>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Small Business Experience -->
				<div class="bg-white p-8 rounded-xl shadow-lg">
					<h3 class="text-2xl font-bold text-navy mb-6">Small Business Experience</h3>
					<div class="space-y-4">
						<div class="flex items-start space-x-4">
							<div class="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
							<div>
								<h4 class="font-semibold text-navy">HVAC Services</h4>
								<p class="text-slate-600">Operations and growth consulting</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
							<div>
								<h4 class="font-semibold text-navy">Plumbing Companies</h4>
								<p class="text-slate-600">Financial systems and compliance</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
							<div>
								<h4 class="font-semibold text-navy">Electrical Contractors</h4>
								<p class="text-slate-600">Technology stack optimization</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
							<div>
								<h4 class="font-semibold text-navy">Construction Firms</h4>
								<p class="text-slate-600">Project management and scaling</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Mission Statement -->
<section class="py-20 bg-navy text-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
			<div class="bg-gold/20 backdrop-blur-sm p-8 rounded-xl border border-gold/30">
				<p class="text-xl leading-relaxed">
					"We exist to give small and mid-sized service businesses the same caliber of systems, financial clarity, and operational infrastructure that the 'big guys' hoard—but built in a way that's affordable, usable, and actually helps owners sleep at night."
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Contact CTA -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-navy mb-6">Ready to Transform Your Business?</h2>
			<p class="text-xl text-slate-600 mb-8">
				Let's discuss how we can bring enterprise-grade solutions to your service business.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a 
					href="mailto:founder@thekpsgroup.com" 
					class="bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-700 transition-colors"
				>
					Email Me Directly
				</a>
				<a 
					href="tel:469-458-6966" 
					class="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
				>
					Call Now
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Scroll to top button -->
<button
	id="scroll-to-top"
	class="fixed bottom-8 right-8 bg-navy text-white p-3 rounded-full shadow-lg hover:bg-navy-700 transition-all duration-300 opacity-0 pointer-events-none z-50"
	on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
	aria-label="Scroll to top"
>
	<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
	</svg>
</button>

<style>
	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 0.875rem;
	}
</style>
