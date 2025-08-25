<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
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

<!-- Breadcrumbs -->
<div class="container mx-auto px-4 pt-8">
	<Breadcrumbs items={[
		{ label: 'Home', href: '/' },
		{ label: 'Founder' }
	]} />
</div>

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
							<p>Email: <a href="mailto:Karson@thekpsgroup.com" class="text-gold hover:text-gold-300 transition-colors font-medium">Karson@thekpsgroup.com</a></p>
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

<!-- The Problem We Solve -->
<section class="py-20 bg-navy text-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-center mb-12">The Problem We Solve</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
				<div class="text-center">
					<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2">The Cost Gap</h3>
					<p class="text-slate-300">Enterprise tools cost millions. Small businesses need the same power at a fraction of the cost.</p>
				</div>
				
				<div class="text-center">
					<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2">The Complexity Gap</h3>
					<p class="text-slate-300">Enterprise systems are over-engineered. Small businesses need simplicity without sacrificing power.</p>
				</div>
				
				<div class="text-center">
					<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2">The Support Gap</h3>
					<p class="text-slate-300">Enterprise vendors don't understand small business needs. We speak your language.</p>
				</div>
			</div>
			
			<div class="bg-gold/20 backdrop-blur-sm p-8 rounded-xl border border-gold/30">
				<p class="text-xl leading-relaxed text-center">
					<strong>The KPS Group bridges these gaps</strong> by bringing enterprise-grade solutions to small and mid-sized service businesses—without the enterprise price tag, complexity, or indifference.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Mission Statement -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-navy mb-8">Our Mission</h2>
			<div class="bg-navy text-white p-8 rounded-xl">
				<p class="text-xl leading-relaxed">
					"We exist to give small and mid-sized service businesses the same caliber of systems, financial clarity, and operational infrastructure that the 'big guys' hoard—but built in a way that's affordable, usable, and actually helps owners sleep at night."
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Contact CTA -->
<section class="py-20 bg-slate-50">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-navy mb-6">Ready to Transform Your Business?</h2>
			<p class="text-xl text-slate-600 mb-8">
				Let's discuss how we can bring enterprise-grade solutions to your service business.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button
					href="mailto:Karson@thekpsgroup.com"
					variant="primary"
					size="lg"
				>
					Email Me Directly
				</Button>
				<Button
					href="tel:469-458-6966"
					variant="outline"
					size="lg"
				>
					Call Now
				</Button>
			</div>
		</div>
	</div>
</section>

<style>
	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 0.875rem;
	}
</style>
