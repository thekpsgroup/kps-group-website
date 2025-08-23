<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import RoadmapHorizontal from '$lib/components/RoadmapHorizontal.svelte';
	import SuiteGrid from '$lib/components/SuiteGrid.svelte';
	import Consolidation from '$lib/components/Consolidation.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { onMount } from 'svelte';

	// tiny filter controller
	function blocks(){ return Array.from(document.querySelectorAll<HTMLElement>('.solution-block')); }
	function showAll(){ 
		blocks().forEach(b=>b.classList.remove('is-hidden')); 
		// Hide back button
		const backBtn = document.querySelector('.back-to-all');
		if(backBtn) backBtn.classList.add('is-hidden');
	}
	function filter(key: string){ 
		let hit=false; 
		blocks().forEach(b=>{ 
			if(b.dataset.key===key){
				b.classList.remove('is-hidden'); 
				hit=true;
			} else {
				b.classList.add('is-hidden'); 
			}
		}); 
		if(!hit) showAll(); 
		
		// Show back button when filtering
		const backBtn = document.querySelector('.back-to-all');
		if(backBtn) backBtn.classList.remove('is-hidden');
	}

	onMount(() => {
		// initial state
		const initHash = (location.hash||'');
		if(initHash.startsWith('#solutions-')) filter(initHash.replace('#solutions-',''));

		// Handle hash changes
		const handleHashChange = () => {
			const key = (location.hash||'').replace('#solutions-','');
			if(['brand','ops','tech'].includes(key)) filter(key); else showAll();
		};

		// Handle roadmap branch events
		const handleRoadmapBranch = (e: CustomEvent) => {
			const key = e.detail?.key;
			if(key) filter(key);
		};

		// Add event listeners
		window.addEventListener('hashchange', handleHashChange);
		window.addEventListener('roadmap:branch', handleRoadmapBranch as EventListener);

		// Cleanup
		return () => {
			window.removeEventListener('hashchange', handleHashChange);
			window.removeEventListener('roadmap:branch', handleRoadmapBranch as EventListener);
		};
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

<!-- Back to All button (hidden by default) -->
<div class="back-to-all is-hidden" style="text-align:center; padding:20px 0;">
	<button 
		on:click={showAll}
		class="back-btn"
		style="background:var(--kps-gold); color:var(--bg-900); padding:8px 16px; border:none; border-radius:6px; font-weight:500; cursor:pointer; transition:opacity 0.2s ease;"
		on:mouseenter={(e)=>e.currentTarget.style.opacity='0.8'}
		on:mouseleave={(e)=>e.currentTarget.style.opacity='1'}
	>
		← Back to All Solutions
	</button>
</div>

<!-- Filterable solution blocks -->
<section id="solutions-brand" class="solution-block" data-key="brand">
	<div class="wrap">
		<div class="sol-header">
			<div class="sol-icon">🎨</div>
			<h3 class="sol-title">Modern Brands</h3>
		</div>
		<p class="sol-copy">Identity systems, website platforms, funnel design, and conversion optimization built for service businesses.</p>
		<div class="sol-benefits">
			<div class="benefit">• Brand identity that converts</div>
			<div class="benefit">• High-converting websites</div>
			<div class="benefit">• Sales funnel optimization</div>
		</div>
		<a href="/suite/modern-brands" class="sol-cta">Learn More →</a>
	</div>
</section>

<section id="solutions-ops" class="solution-block" data-key="ops">
	<div class="wrap">
		<div class="sol-header">
			<div class="sol-icon">📊</div>
			<h3 class="sol-title">Modern Ledger & Pay</h3>
		</div>
		<p class="sol-copy">Done-right books, payroll, and HR compliance. Clean monthly closes, audit-ready, and painless onboarding.</p>
		<div class="sol-benefits">
			<div class="benefit">• Clean monthly closes</div>
			<div class="benefit">• Audit-ready books</div>
			<div class="benefit">• Painless payroll & HR</div>
		</div>
		<a href="/suite/modern-ledger" class="sol-cta">Learn More →</a>
	</div>
</section>

<section id="solutions-tech" class="solution-block" data-key="tech">
	<div class="wrap">
		<div class="sol-header">
			<div class="sol-icon">⚡</div>
			<h3 class="sol-title">Modern Stack</h3>
		</div>
		<p class="sol-copy">Tech stack audits, integrations, and custom software that cut noise, automate work, and scale gracefully.</p>
		<div class="sol-benefits">
			<div class="benefit">• Stack optimization</div>
			<div class="benefit">• Custom integrations</div>
			<div class="benefit">• Scalable automation</div>
		</div>
		<a href="/suite/modern-stack" class="sol-cta">Learn More →</a>
	</div>
</section>

<SuiteGrid />
<Consolidation />
<ContactForm />

<style>
	.solution-block{ padding: clamp(28px,4vw,52px) 0; border-top:1px solid var(--ring); background: transparent; }
	.solution-block .wrap{ max-width:1100px; margin:0 auto; padding:0 20px; }
	
	.sol-header{ display:flex; align-items:center; gap:12px; margin-bottom:12px; }
	.sol-icon{ font-size:24px; }
	.sol-title{ margin:0; font-size: clamp(20px,2vw,26px); color: var(--ink-900); }
	.sol-copy{ margin:0 0 16px; color: var(--ink-700); line-height:1.6; }
	
	.sol-benefits{ margin-bottom:20px; }
	.benefit{ color: var(--ink-600); font-size:14px; margin-bottom:6px; }
	
	.sol-cta{ 
		display:inline-block; 
		color: var(--kps-gold); 
		text-decoration:none; 
		font-weight:500; 
		font-size:14px;
		transition: color 0.2s ease;
	}
	.sol-cta:hover{ color: var(--ink-900); }
	
	.is-hidden{ display:none; }
</style>
