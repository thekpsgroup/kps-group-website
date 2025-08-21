<svelte:head>
	<title>ModernBrands — Quiet luxury, bold impact</title>
	<meta name="description" content="Ultra-modern logos and websites for brands that dominate. Quiet luxury, bold impact." />
	<script type="application/ld+json">{JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Modern Brands',
		url: 'https://modernbrands.co',
		email: 'sales@thekpsgroup.com',
		telephone: '469-458-6966',
		logo: '/favicon.ico'
	})}</script>
</svelte:head>

<!-- LUXURY HERO SECTION -->
<section style="position:relative; overflow:hidden; min-height: 100vh; display: flex; align-items: center; background: linear-gradient(135deg, #FFF8F0 0%, #FCEFE3 25%, #FFF8F0 50%, #FCEFE3 75%, #FFF8F0 100%);">
	<!-- Animated gold particles -->
	<div style="position:absolute; inset:0; pointer-events:none;">
		<div style="position:absolute; top: 15%; left: 10%; width: 1px; height: 60px; background: linear-gradient(to bottom, transparent, var(--gold), transparent); animation: float 6s ease-in-out infinite;"></div>
		<div style="position:absolute; top: 25%; right: 20%; width: 2px; height: 40px; background: linear-gradient(to bottom, transparent, var(--gold), transparent); animation: float 8s ease-in-out infinite reverse;"></div>
		<div style="position:absolute; bottom: 30%; left: 15%; width: 1px; height: 50px; background: linear-gradient(to bottom, transparent, var(--gold), transparent); animation: float 7s ease-in-out infinite;"></div>
		<div style="position:absolute; top: 60%; right: 10%; width: 1px; height: 30px; background: linear-gradient(to bottom, transparent, var(--gold), transparent); animation: float 9s ease-in-out infinite reverse;"></div>
	</div>
	
	<!-- Subtle grid pattern -->
	<div style="position:absolute; inset:0; pointer-events:none; background-image: linear-gradient(90deg, rgba(198,166,100,0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(198,166,100,0.05) 1px, transparent 1px); background-size: 100px 100px;"></div>
	
	<!-- Main content -->
	<div style="position:relative; max-width:80rem; margin:0 auto; padding:8rem 1.5rem; text-align: center;">
		<!-- Decorative line above eyebrow -->
		<div style="width: 60px; height: 1px; background: var(--gold); margin: 0 auto 2rem; opacity: 0.6;"></div>
		
		<div class="eyebrow" style="margin-bottom: 2rem; letter-spacing: 0.3em; font-size: 0.9rem; color: var(--gold); font-weight: 500;">MODERN LUXURY BRANDING</div>
		
		<h1 style="font-family: var(--font-serif); font-size: clamp(3.5rem, 7vw, 6rem); line-height: 0.95; margin: 0 0 2rem; color: var(--ink); font-weight: 600; letter-spacing: -0.02em;">
			We build brands <span style="color: var(--gold); font-weight: 700;">that dominate.</span>
		</h1>
		
		<p style="font-size: 1.375rem; color: rgba(10,10,10,0.7); max-width: 52rem; margin: 0 auto 4rem; line-height: 1.5; font-weight: 300; letter-spacing: 0.01em;">
			Ultra-modern logos and websites. Quiet luxury, bold impact.
		</p>
		
		<!-- Enhanced CTA button -->
		<div style="display: flex; gap: 1.5rem; justify-content: center; align-items: center; flex-wrap: wrap;">
					<a href="/get-started" class="btn" style="font-size: 1.1rem; padding: 1.5rem 3.5rem; background: var(--gold); color: var(--ink); font-weight: 600; letter-spacing: 0.05em; box-shadow: 0 8px 32px rgba(198,166,100,0.3); transition: all 0.3s ease;">
				Get Started
			</a>
					<a href="/services" style="font-size: 1rem; padding: 1.5rem 3rem; color: var(--ink); text-decoration: none; border: 1px solid rgba(198,166,100,0.3); border-radius: 0.75rem; font-weight: 500; letter-spacing: 0.05em; transition: all 0.3s ease;">
				Explore Services
			</a>
		</div>
		
		<!-- Decorative line below CTA -->
		<div style="width: 40px; height: 1px; background: var(--gold); margin: 4rem auto 0; opacity: 0.4;"></div>
	</div>
	
	<!-- CSS Animation -->
	<style>
		@keyframes float {
			0%, 100% { transform: translateY(0px); opacity: 0.6; }
			50% { transform: translateY(-20px); opacity: 1; }
		}
	</style>
</section>
