<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import RoadmapHorizontal from '$lib/components/RoadmapHorizontal.svelte';
	import SuiteGrid from '$lib/components/SuiteGrid.svelte';
	import Consolidation from '$lib/components/Consolidation.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { onMount } from 'svelte';

	// tiny filter controller
	function blocks(){ return Array.from(document.querySelectorAll<HTMLElement>('.solution-block')); }
	function showAll(){ blocks().forEach(b=>b.classList.remove('is-hidden')); }
	function filter(key){ let hit=false; blocks().forEach(b=>{ if(b.dataset.key===key){b.classList.remove('is-hidden'); hit=true;} else b.classList.add('is-hidden'); }); if(!hit) showAll(); }

	onMount(() => {
		// initial state
		const initHash = (location.hash||'');
		if(initHash.startsWith('#solutions-')) filter(initHash.replace('#solutions-',''));
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
	subtitle="We fix friction fast—and keep everything working together."
	minWidth={1080}
	dense={true}
/>

<!-- Fallback anchor -->
<section id="solutions" style="padding:1rem 0;"></section>

<!-- Filterable solution blocks -->
<section id="solutions-brand" class="solution-block" data-key="brand">
	<div class="wrap">
		<h3 class="sol-title">Modern Brands</h3>
		<p class="sol-copy">Identity systems, website platforms, funnel design, and conversion optimization built for service businesses.</p>
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
	.solution-block{ padding: clamp(28px,4vw,52px) 0; border-top:1px solid var(--ring); background: transparent; }
	.solution-block .wrap{ max-width:1100px; margin:0 auto; padding:0 20px; }
	.sol-title{ margin:0 0 8px; font-size: clamp(20px,2vw,26px); color: var(--ink-900); }
	.sol-copy{ margin:0; color: var(--ink-700); }
	.is-hidden{ display:none; }
</style>

<svelte:window
	on:hashchange={()=>{
		const key = (location.hash||'').replace('#solutions-','');
		if(['brand','ops','tech'].includes(key)) filter(key); else showAll();
	}}
	on:roadmap:branch={(e)=>{ const key = e.detail?.key; if(key) filter(key); }}
/>
