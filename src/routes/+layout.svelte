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
<nav class="sticky top-0 z-50" style="background: rgba(255,255,255,0.25); backdrop-filter: blur(20px) saturate(180%); border-bottom: 1px solid rgba(198,166,100,0.2); transition: all 0.3s ease; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
	<div class="max-w-7xl mx-auto px-6" style="height: 160px; display: flex; align-items: center; justify-content: space-between;">
		<!-- Logo/Home Link -->
		<a href="/" style="display: flex; align-items: center; text-decoration: none; transition: opacity 0.3s ease;" 
		   on:mouseenter={handleLogoMouseEnter} on:mouseleave={handleLogoMouseLeave}>
			<img src="/modern-brands-typography.svg" alt="ModernBrands - Home" style="height: 120px; width: auto;" />
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
<footer style="background: rgba(255,255,255,0.25); backdrop-filter: blur(20px) saturate(180%); border-top: 1px solid rgba(198,166,100,0.2); margin-top: 6rem; box-shadow: 0 -8px 32px rgba(0,0,0,0.1);">
	<div class="max-w-7xl mx-auto" style="padding: 2rem 1.5rem;">
		<!-- Single Line Footer Navigation -->
		<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
			<!-- Brand -->
			<a href="/" style="text-decoration: none;">
				<div style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--ink); font-weight: 600;">ModernBrands</div>
			</a>
			
			<!-- Navigation Links -->
			<div style="display: flex; gap: 2rem; align-items: center;">
				<a href="/" style="color: var(--ink); text-decoration: none; transition: color 0.3s ease; font-size: 0.9rem;" 
				   on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
					Home
				</a>
				<a href="/services" style="color: var(--ink); text-decoration: none; transition: color 0.3s ease; font-size: 0.9rem;" 
				   on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
					Services
				</a>
				<a href="/get-started" style="color: var(--ink); text-decoration: none; transition: color 0.3s ease; font-size: 0.9rem;" 
				   on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
					Get Started
				</a>
			</div>
			
			<!-- Contact Info -->
			<div style="display: flex; gap: 2rem; align-items: center;">
				<a href="mailto:sales@thekpsgroup.com" style="color: var(--ink); text-decoration: none; transition: color 0.3s ease; font-size: 0.9rem;" 
				   on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
					sales@thekpsgroup.com
				</a>
				<a href="tel:+14694586966" style="color: var(--ink); text-decoration: none; transition: color 0.3s ease; font-size: 0.9rem;" 
				   on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
					469-458-6966
				</a>
			</div>
			
			<!-- Copyright -->
			<div style="font-size: 0.8rem; color: rgba(10,10,10,0.6);">
				© {new Date().getFullYear()} ModernBrands
			</div>
		</div>
		
		<!-- Legal Accordion (Collapsed by default) -->
		<div style="margin-top: 1.5rem; text-align: center;">
			<details style="display: inline-block; border: 1px solid rgba(198,166,100,0.2); border-radius: 0.75rem; padding: 0.75rem 1.5rem; background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);">
				<summary style="cursor: pointer; font-weight: 600; color: var(--ink); font-size: 0.9rem;">Legal Information</summary>
				<div style="margin-top: 1rem; display: grid; gap: 0.75rem; text-align: left;">
					<div style="font-size: 0.8rem; color: rgba(10,10,10,0.7);">
						<strong>NDA/MSA:</strong> We operate under mutual NDA by default; an MSA can be provided on request.
					</div>
					<div style="font-size: 0.8rem; color: rgba(10,10,10,0.7);">
						<strong>Payment Terms:</strong> Standard 50/50 terms: 50% to start, 50% on delivery.
					</div>
					<div style="font-size: 0.8rem; color: rgba(10,10,10,0.7);">
						<strong>SEO Disclaimer:</strong> SEO performance varies; results are illustrative and not guaranteed.
					</div>
					<div style="font-size: 0.8rem; color: rgba(10,10,10,0.7);">
						<strong>Privacy:</strong> We respect your privacy and only collect essential information.
					</div>
				</div>
			</details>
		</div>
	</div>
</footer>
