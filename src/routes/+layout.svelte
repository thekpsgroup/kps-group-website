<script lang="ts">
	import '../app.css';
	
	// Event handlers for hover effects
	function handleMouseEnter(event: MouseEvent) {
		const target = event.target as HTMLElement;
		target.style.color = 'var(--gold)';
	}
	
	function handleMouseLeave(event: MouseEvent) {
		const target = event.target as HTMLElement;
		target.style.color = 'var(--ink)';
	}
	
	function handleLogoMouseEnter(event: MouseEvent) {
		const target = event.target as HTMLElement;
		target.style.opacity = '0.8';
	}
	
	function handleLogoMouseLeave(event: MouseEvent) {
		const target = event.target as HTMLElement;
		target.style.opacity = '1';
	}
	
	function handleButtonMouseEnter(event: MouseEvent) {
		const target = event.target as HTMLElement;
		target.style.transform = 'translateY(-2px)';
	}
	
	function handleButtonMouseLeave(event: MouseEvent) {
		const target = event.target as HTMLElement;
		target.style.transform = 'translateY(0)';
	}
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<!-- LUXURY GLASSMORPHIC HEADER -->
<nav class="sticky top-0 z-50" style="background: rgba(255,255,255,0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(198,166,100,0.15); transition: all 0.3s ease;">
	<div class="max-w-7xl mx-auto px-6" style="height: 80px; display: flex; align-items: center; justify-content: space-between;">
		<!-- Logo/Home Link -->
		<a href="/" style="display: flex; align-items: center; text-decoration: none; transition: opacity 0.3s ease;" 
		   on:mouseenter={handleLogoMouseEnter} on:mouseleave={handleLogoMouseLeave}>
			<img src="/modern-brands-typography.svg" alt="ModernBrands - Home" style="height: 48px; width: auto;" />
		</a>
		
		<!-- Navigation Links -->
		<div style="display: flex; gap: 3rem; align-items: center;">
			<a href="/" style="color: var(--ink); font-size: 1rem; font-weight: 500; text-decoration: none; transition: color 0.3s ease; position: relative;" 
			   on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
				Home
			</a>
			<a href="/services" style="color: var(--ink); font-size: 1rem; font-weight: 500; text-decoration: none; transition: color 0.3s ease; position: relative;" 
			   on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
				Services
			</a>
			<a href="/get-started" style="color: var(--ink); font-size: 1rem; font-weight: 500; text-decoration: none; transition: color 0.3s ease; position: relative;" 
			   on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
				Get Started
			</a>
			<a href="/get-started" class="btn" style="font-size: 1rem; padding: 0.875rem 2rem; text-decoration: none; transition: all 0.3s ease;" 
			   on:mouseenter={handleButtonMouseEnter} on:mouseleave={handleButtonMouseLeave}>
				Get Started
			</a>
		</div>
	</div>
</nav>

<slot />

<!-- LUXURY GLASSMORPHIC FOOTER -->
<footer style="background: rgba(255,255,255,0.9); backdrop-filter: blur(12px); border-top: 1px solid rgba(198,166,100,0.15); margin-top: 6rem;">
	<div class="max-w-7xl mx-auto" style="padding: 4rem 1.5rem 2rem;">
		<!-- Main Footer Content -->
		<div style="display: grid; gap: 3rem; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); margin-bottom: 3rem;">
			<!-- Brand & Contact -->
			<div>
				<a href="/" style="display: inline-block; text-decoration: none; margin-bottom: 1.5rem;">
					<div style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--ink); font-weight: 600;">ModernBrands</div>
				</a>
				<div style="display: flex; flex-direction: column; gap: 0.75rem;">
					<a href="mailto:sales@thekpsgroup.com" style="color: var(--ink); text-decoration: none; transition: color 0.3s ease;" 
					   on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
						sales@thekpsgroup.com
					</a>
					<a href="tel:+14694586966" style="color: var(--ink); text-decoration: none; transition: color 0.3s ease;" 
					   on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
						469-458-6966
					</a>
				</div>
			</div>
			
			<!-- Navigation -->
			<div>
				<div class="eyebrow" style="margin-bottom: 1.5rem;">Navigation</div>
				<div style="display: flex; flex-direction: column; gap: 0.75rem;">
					<a href="/" style="color: var(--ink); text-decoration: none; transition: color 0.3s ease;" 
					   on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
						Home
					</a>
					<a href="/services" style="color: var(--ink); text-decoration: none; transition: color 0.3s ease;" 
					   on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
						Services
					</a>
					<a href="/get-started" style="color: var(--ink); text-decoration: none; transition: color 0.3s ease;" 
					   on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
						Get Started
					</a>
				</div>
			</div>
			
			<!-- Legal -->
			<div>
				<div class="eyebrow" style="margin-bottom: 1.5rem;">Legal</div>
				<div style="display: grid; gap: 1rem;">
					<details style="border: 1px solid rgba(198,166,100,0.2); border-radius: 0.75rem; padding: 1rem; background: rgba(255,255,255,0.5);">
						<summary style="cursor: pointer; font-weight: 600; color: var(--ink);">NDA / MSA</summary>
						<p style="margin-top: 0.75rem; color: rgba(10,10,10,0.7); font-size: 0.9rem; line-height: 1.5;">We operate under mutual NDA by default; an MSA can be provided on request.</p>
					</details>
					<details style="border: 1px solid rgba(198,166,100,0.2); border-radius: 0.75rem; padding: 1rem; background: rgba(255,255,255,0.5);">
						<summary style="cursor: pointer; font-weight: 600; color: var(--ink);">Payment Terms</summary>
						<p style="margin-top: 0.75rem; color: rgba(10,10,10,0.7); font-size: 0.9rem; line-height: 1.5;">Standard 50/50 terms: 50% to start, 50% on delivery.</p>
					</details>
					<details style="border: 1px solid rgba(198,166,100,0.2); border-radius: 0.75rem; padding: 1rem; background: rgba(255,255,255,0.5);">
						<summary style="cursor: pointer; font-weight: 600; color: var(--ink);">SEO Disclaimer</summary>
						<p style="margin-top: 0.75rem; color: rgba(10,10,10,0.7); font-size: 0.9rem; line-height: 1.5;">SEO performance varies; results are illustrative and not guaranteed.</p>
					</details>
					<details style="border: 1px solid rgba(198,166,100,0.2); border-radius: 0.75rem; padding: 1rem; background: rgba(255,255,255,0.5);">
						<summary style="cursor: pointer; font-weight: 600; color: var(--ink);">Privacy</summary>
						<p style="margin-top: 0.75rem; color: rgba(10,10,10,0.7); font-size: 0.9rem; line-height: 1.5;">We respect your privacy and only collect essential information.</p>
					</details>
				</div>
			</div>
		</div>
		
		<!-- Copyright -->
		<div style="text-align: center; font-size: 0.875rem; color: rgba(10,10,10,0.6); padding-top: 2rem; border-top: 1px solid rgba(198,166,100,0.1);">
			© {new Date().getFullYear()} ModernBrands. All rights reserved.
		</div>
	</div>
</footer>
