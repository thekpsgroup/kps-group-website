<script context="module" lang="ts">
	export type Branch = {
		key: string;
		title: string;
		description: string;
		href?: string; // e.g. "#solutions-tech"
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	export let title: string = 'From Pain to Growth';
	export let subtitle: string = 'Focused, fast, and built to scale with you.';
	export let branches: Branch[] = [
		{ key: 'brand', title: 'Modern Brands',       description: 'Identity, website, funnels.',                 href: '#solutions-brand' },
		{ key: 'ops',   title: 'Modern Ledger & Pay', description: 'Books, payroll, HR compliance.',              href: '#solutions-ops' },
		{ key: 'tech',  title: 'Modern Stack',        description: 'Stack audit, integrations, custom software.', href: '#solutions-tech' }
	];
	export let minWidth = 1080; // keeps the line straight on desktop
	export let dense = true;

	let rootEl: HTMLElement;

	function activate(el: HTMLElement) {
		const all = Array.from(rootEl.querySelectorAll<HTMLElement>('.branch-card'));
		all.forEach(b => b.classList.remove('active'));
		el.classList.add('active');
		el.setAttribute('aria-pressed', 'true');

		const key = el.dataset.key ?? '';
		const href = el.dataset.href || '#solutions';

		// persist
		try { sessionStorage.setItem('kps:roadmap-branch', key); } catch {}

		// update hash for deep-linking
		if (href.startsWith('#')) history.replaceState(null, '', href);

		// dispatch event for filtering below the fold
		window.dispatchEvent(new CustomEvent('roadmap:branch', { detail: { key, href } }));

		// smooth scroll
		const anchor = document.querySelector(href) || document.querySelector('#solutions');
		anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	onMount(() => {
		// subtle reveal
		const io = new IntersectionObserver((entries) => {
			entries.forEach(e => {
				if (e.isIntersecting) {
					(e.target as HTMLElement).animate(
						[{opacity:0, transform:'translateY(8px)'},{opacity:1, transform:'translateY(0)'}],
						{ duration: 260, easing: 'ease-out', fill: 'both' }
					);
					io.unobserve(e.target);
				}
			});
		}, { threshold: 0.14 });
		rootEl.querySelectorAll('.card, .branch-card').forEach(el => io.observe(el));

		// restore selection
		try {
			const saved = sessionStorage.getItem('kps:roadmap-branch');
			if (saved) {
				const el = rootEl.querySelector<HTMLElement>(`.branch-card[data-key="${saved}"]`);
				el?.classList.add('active');
			}
		} catch {}

		// auto-activate from hash
		const h = location.hash || '';
		if (h.startsWith('#solutions-')) {
			const key = h.replace('#solutions-','');
			const el = rootEl.querySelector<HTMLElement>(`.branch-card[data-key="${key}"]`);
			if (el) setTimeout(() => activate(el), 40);
		}
	});
</script>

<section class="roadmap" bind:this={rootEl} data-dense={dense ? 'true' : 'false'} aria-label={title}>
  <div class="container mx-auto px-4 py-20">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-navy mb-4">{title}</h2>
        {#if subtitle}<p class="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>{/if}
      </div>

      <!-- Roadmap -->
      <div class="relative">
        <!-- Main Timeline Line -->
        <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-navy to-transparent transform -translate-y-1/2 z-0"></div>
        
        <!-- Steps Container -->
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          <!-- Step 1 -->
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">Name the Pain</h3>
              <p class="step-description">You need help. Tell us what hurts most.</p>
            </div>
          </div>

          <!-- Step 2 (Hub) -->
          <div class="step-card hub">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">We Analyze Your Needs</h3>
              <p class="step-description">Quick discovery to understand goals, constraints, and timeline.</p>
              
              <!-- Branch Options -->
              <div class="branches-container">
                <div class="branches-grid">
                  {#each branches as b, i}
                    <div
                      class="branch-option"
                      data-index={i}
                      data-key={b.key}
                      data-href={b.href || ''}
                      role="button"
                      tabindex="0"
                      aria-pressed="false"
                      on:click={(e)=>activate(e.currentTarget)}
                      on:keydown={(e)=>{ if(e.key==='Enter'||e.key===' ') { e.preventDefault(); activate(e.currentTarget);} }}
                    >
                      <div class="branch-icon">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 class="branch-title">{b.title}</h4>
                      <p class="branch-description">{b.description}</p>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">Recommend the Plan</h3>
              <p class="step-description">Clear options, timelines, and a clean rollout path.</p>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3 class="step-title">Grow Together</h3>
              <p class="step-description">Ongoing support and optimization as your business scales.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .roadmap {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  }

  .step-card {
    @apply relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1;
    backdrop-filter: blur(10px);
  }

  .step-card.hub {
    @apply md:col-span-2 bg-gradient-to-br from-navy to-navy-800 text-white border-0;
    box-shadow: 0 20px 40px rgba(0, 67, 140, 0.15);
  }

  .step-card.hub:hover {
    box-shadow: 0 25px 50px rgba(0, 67, 140, 0.25);
  }

  .step-number {
    @apply absolute -top-4 left-6 w-8 h-8 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-sm;
    box-shadow: 0 4px 12px rgba(202, 176, 104, 0.3);
  }

  .step-card.hub .step-number {
    @apply bg-white text-navy;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
  }

  .step-content {
    @apply mt-4;
  }

  .step-title {
    @apply text-lg font-semibold text-navy mb-2;
  }

  .step-card.hub .step-title {
    @apply text-white;
  }

  .step-description {
    @apply text-sm text-gray-600 leading-relaxed;
  }

  .step-card.hub .step-description {
    @apply text-gray-200;
  }

  .branches-container {
    @apply mt-6;
  }

  .branches-grid {
    @apply grid grid-cols-1 sm:grid-cols-3 gap-4;
  }

  .branch-option {
    @apply relative bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:border-white hover:border-opacity-30 hover:scale-105;
  }

  .branch-option:hover {
    transform: translateY(-2px) scale(1.02);
  }

  .branch-option.active {
    @apply bg-gold bg-opacity-20 border-gold border-opacity-40;
    box-shadow: 0 8px 25px rgba(202, 176, 104, 0.3);
  }

  .branch-icon {
    @apply w-8 h-8 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-3;
  }

  .branch-option.active .branch-icon {
    @apply bg-gold text-navy;
  }

  .branch-title {
    @apply text-sm font-semibold text-white mb-1;
  }

  .branch-description {
    @apply text-xs text-gray-200 leading-relaxed;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .step-card.hub {
      @apply col-span-1;
    }
    
    .branches-grid {
      @apply grid-cols-1;
    }
  }

  /* Animation for step cards */
  .step-card {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
  }

  .step-card:nth-child(1) { animation-delay: 0.1s; }
  .step-card:nth-child(2) { animation-delay: 0.2s; }
  .step-card:nth-child(3) { animation-delay: 0.3s; }
  .step-card:nth-child(4) { animation-delay: 0.4s; }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Focus styles */
  .branch-option:focus-visible {
    @apply outline-none ring-2 ring-gold ring-offset-2 ring-offset-navy;
  }

  /* Smooth transitions */
  .step-card,
  .branch-option {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
