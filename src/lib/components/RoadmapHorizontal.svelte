<script lang="ts">
	import { onMount } from 'svelte';

	export type Branch = {
		key: string;
		title: string;
		description: string;
		href?: string; // e.g. "#solutions-tech"
	};

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
  <div class="band">
    <div class="wrap">
      <header class="hdr">
        <h2 class="ttl">{title}</h2>
        {#if subtitle}<p class="sub">{subtitle}</p>{/if}
      </header>

      <div class="scroller" style={`--minw:${minWidth}px`}>
        <div class="row">
                     <!-- Step 1 -->
           <div class="col step">
             <div class="card">
               <div class="badge">Step 1</div>
               <h3 class="card-title">Name the Pain</h3>
               <p class="card-text">You need help. Tell us what hurts most.</p>
             </div>
           </div>

          <div class="col connector" aria-hidden="true"><span></span></div>

                     <!-- Step 2 (hub + branches) -->
           <div class="col step wide">
             <div class="card hub">
               <div class="badge badge-gold">Step 2</div>
               <h3 class="card-title">We Analyze Your Needs</h3>
               <p class="card-text">Quick discovery to understand goals, constraints, and timeline.</p>
             </div>

            <div class="branches">
              <svg class="nub" width="2" height="24" viewBox="0 0 2 24" aria-hidden="true">
                <rect width="2" height="24" />
              </svg>

              <div class="branch-grid">
                {#each branches as b, i}
                  <div
                    class="branch-card"
                    data-index={i}
                    data-key={b.key}
                    data-href={b.href || ''}
                    role="button"
                    tabindex="0"
                    aria-pressed="false"
                    on:click={(e)=>activate(e.currentTarget)}
                    on:keydown={(e)=>{ if(e.key==='Enter'||e.key===' ') { e.preventDefault(); activate(e.currentTarget);} }}
                  >
                    <svg class="branch-line" viewBox="0 0 120 40" width="120" height="40" aria-hidden="true">
                      <path />
                    </svg>
                    <div class="branch-badge">Option</div>
                    <h4 class="branch-title">{b.title}</h4>
                    <p class="branch-text">{b.description}</p>
                  </div>
                {/each}
              </div>

              <svg class="rejoin" viewBox="0 0 1200 28" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,14 L400,14 C600,14 600,14 800,14 L1200,14" />
              </svg>
            </div>
          </div>

          <div class="col spacer" aria-hidden="true"></div>

                     <!-- Step 3 -->
           <div class="col step">
             <div class="card">
               <div class="badge">Step 3</div>
               <h3 class="card-title">Recommend the Plan</h3>
               <p class="card-text">Clear options, timelines, and a clean rollout path.</p>
             </div>
           </div>

          <div class="col connector" aria-hidden="true"><span></span></div>

                     <!-- Step 4 -->
           <div class="col step wide">
             <div class="card">
               <div class="badge">Step 4</div>
               <h3 class="card-title">Grow Together</h3>
               <p class="card-text">Ongoing support and optimization as your business scales.</p>
             </div>
           </div>

        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .band{
    position:relative;
    padding: clamp(22px,3.6vw,40px) 0;
    background:
      radial-gradient(100% 80% at 50% 0%, color-mix(in oklab, var(--kps-gold) 14%, transparent) 0%, transparent 55%),
      linear-gradient(180deg, color-mix(in oklab, var(--kps-navy) 12%, transparent), transparent 60%);
    border-block: 1px solid color-mix(in oklab, var(--kps-navy) 28%, transparent);
  }
  .wrap{ max-width:1240px; margin:0 auto; padding:0 20px; }

  .hdr{ text-align:center; margin-bottom:14px; }
  .ttl{ margin:0; font-size:clamp(22px,2.3vw,30px); color:var(--ink-900); letter-spacing:-.01em; }
  .sub{ margin:8px 0 0; color:var(--ink-500); font-size:14px; }

  .scroller{ overflow-x:auto; padding-bottom:8px; }
  .row{
    min-width: var(--minw, 1080px);
    display:grid;
    grid-template-columns: 1fr 64px 1.7fr 16px 1fr 64px 1.3fr;
    gap:12px; align-items:start;
  }
  .col{ min-width:0; }
  .spacer{ min-height:1px; }

  .roadmap{ --p:16px; }
  .roadmap[data-dense="false"]{ --p:22px; }

  .card{
    background: var(--surface);
    border:1px solid var(--ring);
    border-radius:16px;
    padding:var(--p);
    box-shadow: 0 2px 10px rgba(0,0,0,.25);
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease, background-color .18s ease;
    outline:none;
  }
  .card:hover,.card:focus-visible{
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,.35);
    border-color: color-mix(in oklab, var(--kps-navy) 36%, var(--ring));
  }
  .card-title{ margin:4px 0 6px; font-size:18px; color:var(--ink-900); }
  .card-text{ margin:0; font-size:14px; color:var(--ink-700); }

  .badge{
    display:inline-block; font-size:11px; letter-spacing:.02em;
    background: var(--kps-navy); color:#fff;
    border-radius:999px; padding:4px 10px; margin-bottom:6px;
  }
  .badge-gold{ background:var(--kps-gold); color:#181818; }

  .connector{ position:relative; display:flex; align-items:center; }
  .connector>span{ width:100%; height:2px; background:var(--line); transition: background-color .18s ease; }
  .connector:hover>span{ background: color-mix(in oklab, var(--kps-gold) 60%, var(--line)); }

  .branches{ position:relative; margin-top:12px; }
  .nub rect{ fill:var(--line); }

  .branch-grid{ display:grid; gap:10px; grid-template-columns: repeat(3, minmax(0,1fr)); }
  .branch-card{
    position:relative; cursor:pointer;
    background: var(--surface); border:1px solid var(--ring);
    border-radius:14px; padding:14px;
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease, background-color .18s ease;
    outline:none;
  }
  .branch-card:hover,.branch-card:focus-visible{
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,.35);
    border-color: color-mix(in oklab, var(--kps-gold) 46%, var(--ring));
  }
  .branch-badge{ display:inline-block; font-size:10px; color:var(--ink-500); background:#ffffff10; padding:2px 8px; border-radius:999px; margin-bottom:6px; }
  .branch-title{ margin:0 0 4px; font-size:15px; color:var(--ink-900); }
  .branch-text{ margin:0; font-size:13px; color:var(--ink-700); }

  .branch-line{ position:absolute; left:50%; transform:translateX(-50%); top:-28px; width:120px; height:40px; }
  .branch-line path{ stroke:var(--line); stroke-width:2; fill:none; transition:stroke .18s ease; }
  .branch-card:hover .branch-line path,
  .branch-card:focus-visible .branch-line path{ stroke: color-mix(in oklab, var(--kps-navy) 60%, var(--line)); }

  .branch-card[data-index="0"] .branch-line path{ d:path("M60,40 C60,26 42,20 20,10"); }
  .branch-card[data-index="1"] .branch-line path{ d:path("M60,40 C60,26 60,20 60,10"); }
  .branch-card[data-index="2"] .branch-line path{ d:path("M60,40 C60,26 78,20 100,10"); }

  .rejoin path{ stroke:var(--line); stroke-width:2; fill:none; }

  .branch-card.active{
    background: color-mix(in oklab, var(--kps-gold) 12%, var(--surface));
    border-color: color-mix(in oklab, var(--kps-gold) 58%, var(--ring));
    box-shadow: 0 10px 30px rgba(202,176,104,.25);
  }

  @media (max-width:1100px){
    .row{ grid-template-columns: 1fr 48px 1.6fr 12px 1fr 48px 1.2fr; }
  }
  @media (max-width:900px){
    .row{ grid-template-columns: 1fr 36px 1.4fr 12px 1fr 36px 1fr; }
  }
</style>
