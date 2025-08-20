<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<link rel="stylesheet" href="/app.css" />

<nav class="sticky top-0 z-50 bg-white/90 border-b" style="backdrop-filter: blur(6px); border-color: rgba(198,166,100,0.2)">
	<div class="max-w-6xl mx-auto px-6" style="height:64px; display:flex; align-items:center; justify-content:space-between;">
		<a href="/" style="font-family: var(--font-serif); font-size: 1.5rem; letter-spacing: 0.02em; color: var(--ink);">ModernBrands</a>
		<div style="display:flex; gap: 1.5rem; align-items:center;">
			<a href="/services" style="color: var(--ink)">Services</a>
			<a href="/get-started" style="color: var(--ink)">Get Started</a>
			<a href="/get-started" class="btn">Get Started</a>
		</div>
	</div>
</nav>

{@render children?.()}

<footer style="border-top: 1px solid rgba(198,166,100,0.2); margin-top: 6rem;">
	<div class="max-w-6xl mx-auto" style="padding: 3rem 1.5rem; display:grid; gap:2rem; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
		<div>
			<div style="font-family: var(--font-serif); font-size: 1.25rem;">ModernBrands</div>
			<div style="margin-top:0.5rem"><a href="mailto:sales@thekpsgroup.com">sales@thekpsgroup.com</a></div>
			<div style="margin-top:0.25rem"><a href="tel:+14694586966">469-458-6966</a></div>
		</div>
		<div>
			<div class="eyebrow">Legal</div>
			<div style="margin-top:1rem; display:grid; gap:1rem;">
				<details style="border:1px solid rgba(198,166,100,0.2); border-radius:0.75rem; padding:1rem;">
					<summary style="cursor:pointer; font-weight:600;">NDA / MSA</summary>
					<p style="margin-top:0.5rem; color: rgba(10,10,10,0.7); font-size: 0.9rem;">We operate under mutual NDA by default; an MSA can be provided on request.</p>
				</details>
				<details style="border:1px solid rgba(198,166,100,0.2); border-radius:0.75rem; padding:1rem;">
					<summary style="cursor:pointer; font-weight:600;">Payment Terms</summary>
					<p style="margin-top:0.5rem; color: rgba(10,10,10,0.7); font-size: 0.9rem;">Standard 50/50 terms: 50% to start, 50% on delivery.</p>
				</details>
				<details style="border:1px solid rgba(198,166,100,0.2); border-radius:0.75rem; padding:1rem;">
					<summary style="cursor:pointer; font-weight:600;">SEO Disclaimer</summary>
					<p style="margin-top:0.5rem; color: rgba(10,10,10,0.7); font-size: 0.9rem;">SEO performance varies; results are illustrative and not guaranteed.</p>
				</details>
				<details style="border:1px solid rgba(198,166,100,0.2); border-radius:0.75rem; padding:1rem;">
					<summary style="cursor:pointer; font-weight:600;">Privacy</summary>
					<p style="margin-top:0.5rem; color: rgba(10,10,10,0.7); font-size: 0.9rem;">We respect your privacy and only collect essential information.</p>
				</details>
			</div>
		</div>
	</div>
	<div style="text-align:center; font-size:0.8rem; color: rgba(10,10,10,0.6); padding-bottom:2rem;">© {new Date().getFullYear()} ModernBrands</div>
</footer>
