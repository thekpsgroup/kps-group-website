<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import RoadmapHorizontal from '$lib/components/RoadmapHorizontal.svelte';
	import SuiteGrid from '$lib/components/SuiteGrid.svelte';
	import Consolidation from '$lib/components/Consolidation.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { onMount } from 'svelte';

	let activeSolution: string | null = null;

	onMount(() => {
		// Filter logic: show only the selected solution block; default shows all.
		const blocks = Array.from(document.querySelectorAll('.solution-block'));
		const showAll = () => blocks.forEach(b => b.classList.remove('is-hidden'));
		const showOne = (key: string) => {
			let matched = false;
			blocks.forEach(b => {
				if (b.getAttribute('data-key') === key) { 
					b.classList.remove('is-hidden'); 
					matched = true; 
				} else { 
					b.classList.add('is-hidden'); 
				}
			});
			if (!matched) showAll();
		};

		// Initial load from hash (#solutions-[key]) or sessionStorage
		const boot = () => {
			const hash = location.hash || '';
			if (hash.startsWith('#solutions-')) {
				const key = hash.replace('#solutions-','');
				showOne(key);
				activeSolution = key;
				return;
			}
			try {
				const saved = sessionStorage.getItem('kps:roadmap-branch');
				if (saved) { 
					showOne(saved); 
					activeSolution = saved;
					return; 
				}
			} catch {}
			showAll();
			activeSolution = null;
		};

		window.addEventListener('roadmap:branch', (e: any) => {
			const key = e.detail?.key || '';
			if (key) {
				showOne(key);
				activeSolution = key;
			}
		});

		// Handle back/forward navigation updating the filter
		window.addEventListener('hashchange', boot);

		boot();
	});
</script>

<svelte:head>
	<title>The Modern Suite by The KPS Group — Brand, Books, Payroll, Ops, Stack & Custom Software</title>
	<meta name="description" content="Enterprise-grade tools and ops for service businesses. Branding, bookkeeping, payroll, consulting, stack consolidation, and custom software builds." />
	<script type="application/ld+json">{JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'The KPS Group',
		url: 'https://thekpsgroup.com',
		email: 'sales@thekpsgroup.com',
		telephone: '469-458-6966',
		logo: '/brands/kps/photos/kps.png'
	})}</script>
</svelte:head>

<Hero />

<RoadmapHorizontal
	title="From Pain to Growth"
	subtitle="Focused, fast, and built to scale with you."
	minWidth={1080}
	dense={true}
	branches={[
		{ key: "brand", title: "Modern Brands",       description: "Identity, website, funnels.",                 href: "#solutions-brand" },
		{ key: "ops",   title: "Modern Ledger & Pay", description: "Books, payroll, HR compliance.",              href: "#solutions-ops" },
		{ key: "tech",  title: "Modern Stack",        description: "Stack audit, integrations, custom software.", href: "#solutions-tech" },
	]}
/>

<!-- Anchor hub (fallback scroll target) -->
<section id="solutions" class="py-6"></section>

<!-- Filterable solution sections -->
<section id="solutions-brand" class="solution-block" data-key="brand">
	<div class="wrap">
		<h3 class="sol-title">Modern Brands</h3>
		<p class="sol-copy">Identity systems, website platforms, funnel design, and conversion optimization built for service businesses.</p>
		<!-- Add cards or CTAs as needed -->
	</div>
</section>

<section id="solutions-ops" class="solution-block" data-key="ops">
	<div class="wrap">
		<h3 class="sol-title">Modern Ledger & Pay</h3>
		<p class="sol-copy">Done-right books, payroll, and HR compliance. Clean monthly closes, audit-ready, and painless onboarding.</p>
	</div>
</section>

<section id="solutions-tech" class="solution-block" data-key="tech">
	<div class="wrap">
		<h3 class="sol-title">Modern Stack</h3>
		<p class="sol-copy">Tech stack audits, integrations, and custom software that cut noise, automate work, and scale gracefully.</p>
	</div>
</section>

<SuiteGrid />
<Consolidation />
<ContactForm />

<style>
	.solution-block { 
		padding: clamp(28px, 4vw, 52px) 0; 
		border-top: 1px solid rgba(0,0,0,.06); 
	}
	@media (prefers-color-scheme: dark) {
		.solution-block { border-top-color: rgba(255,255,255,.12); }
	}
	.solution-block .wrap { 
		max-width: 1100px; 
		margin: 0 auto; 
		padding: 0 20px; 
	}
	.sol-title { 
		margin: 0 0 8px; 
		font-size: clamp(20px, 2vw, 26px); 
		color: var(--kps-navy);
	}
	.sol-copy { 
		margin: 0; 
		color: rgba(0,0,0,.66); 
		font-size: 16px;
		line-height: 1.5;
	}
	@media (prefers-color-scheme: dark) {
		.sol-copy { color: rgba(255,255,255,.78); }
	}

	/* filtering states */
	.is-hidden { display: none; }
</style>
