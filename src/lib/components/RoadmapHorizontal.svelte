<script context="module" lang="ts">
	export interface Branch {
		key: string;
		title: string;
		description: string;
		href?: string;
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	export let title = "From Pain to Growth";
	export let subtitle = "A clear path that starts where you are and builds momentum.";
	export let branches: Branch[] = [
		{ key: "brand", title: "Brand & Website", description: "Positioning, identity, site refresh.", href: "#solutions-brand" },
		{ key: "ops",   title: "Back Office",     description: "Books, payroll, HR compliance.",      href: "#solutions-ops" },
		{ key: "tech",  title: "Tech & Software", description: "Tooling, integrations, custom apps.", href: "#solutions-tech" },
	];
	export let minWidth = 1024;
	export let dense = true;

	let roadmapElement: HTMLElement;
	let activeBranch: string | null = null;

	onMount(() => {
		// Reveal animation
		const cards = roadmapElement.querySelectorAll('.card, .branch-card');
		const io = new IntersectionObserver((entries) => {
			entries.forEach(e => {
				if (e.isIntersecting) {
					e.target.animate(
						[{opacity:0, transform:'translateY(8px)'},{opacity:1, transform:'translateY(0)'}],
						{duration:280, easing:'ease-out', fill:'both'}
					);
					io.unobserve(e.target);
				}
			});
		}, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
		cards.forEach(el => io.observe(el));

		// Restore active branch if persisted
		try {
			const saved = sessionStorage.getItem('kps:roadmap-branch');
			if (saved) {
				activeBranch = saved;
			}
		} catch {}

		// Auto-activate if URL hash pre-selects
		const h = location.hash || '';
		if (h.startsWith('#solutions-')) {
			const key = h.replace('#solutions-','');
			activeBranch = key;
		}
	});

	function activateBranch(key: string, href: string) {
		activeBranch = key;

		// Persist
		try { 
			sessionStorage.setItem('kps:roadmap-branch', key); 
		} catch {}

		// Update hash (deep link)
		if (href.startsWith('#')) {
			history.replaceState(null, '', href);
		}

		// Dispatch event for downstream filtering
		window.dispatchEvent(new CustomEvent('roadmap:branch', { detail: { key, href } }));

		// Smooth scroll
		const anchor = document.querySelector(href) || document.querySelector('#solutions');
		if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	function handleBranchClick(branch: Branch) {
		activateBranch(branch.key, branch.href || '#solutions');
	}

	function handleBranchKeydown(event: KeyboardEvent, branch: Branch) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			activateBranch(branch.key, branch.href || '#solutions');
		}
	}
</script>

<section 
	class="roadmap" 
	data-testid="roadmap" 
	data-dense={dense ? "true" : "false"} 
	aria-label={title}
	bind:this={roadmapElement}
>
	<div class="band">
		<div class="wrap">
			<header class="hdr">
				<h2 class="ttl">{title}</h2>
				{#if subtitle}<p class="sub">{subtitle}</p>{/if}
			</header>

			<div class="scroller" style="--minw:{minWidth}px">
				<div class="row">

					<!-- STEP 1 -->
					<div class="col step" data-testid="step-1">
						<div class="card">
							<div class="badge">Step 1</div>
							<h3 class="card-title">Name the Pain</h3>
							<p class="card-text">You need help. Tell us what hurts most.</p>
						</div>
					</div>

					<!-- connector 1 -> 2 -->
					<div class="col connector" aria-hidden="true"><span></span></div>

					<!-- STEP 2 (hub) -->
					<div class="col step wide" data-testid="step-2">
						<div class="card hub">
							<div class="badge badge-gold">Step 2</div>
							<h3 class="card-title">We Analyze Your Needs</h3>
							<p class="card-text">Quick discovery to understand goals, constraints, and timeline.</p>
						</div>

						<!-- Branch fan-out -->
						<div class="branches">
							<svg class="nub" width="2" height="24" viewBox="0 0 2 24" aria-hidden="true">
								<rect width="2" height="24" />
							</svg>

							<div class="branch-grid">
								{#each branches as branch, i}
									<div
										class="branch-card"
										class:active={activeBranch === branch.key}
										data-testid="branch-{branch.key}"
										data-index={i}
										data-key={branch.key}
										data-href={branch.href ?? ""}
										tabindex="0"
										role="button"
										aria-pressed={activeBranch === branch.key ? "true" : "false"}
										on:click={() => handleBranchClick(branch)}
										on:keydown={(e) => handleBranchKeydown(e, branch)}
									>
										<svg class="branch-line" viewBox="0 0 120 40" width="120" height="40" aria-hidden="true">
											<path />
										</svg>
										<div class="branch-badge">Option</div>
										<h4 class="branch-title">{branch.title}</h4>
										<p class="branch-text">{branch.description}</p>
									</div>
								{/each}
							</div>

							<!-- Rejoin before Step 3 -->
							<svg class="rejoin" viewBox="0 0 1200 28" preserveAspectRatio="none" aria-hidden="true">
								<path d="M0,14 L400,14 C600,14 600,14 800,14 L1200,14" />
							</svg>
						</div>
					</div>

					<!-- spacer -->
					<div class="col spacer" aria-hidden="true"></div>

					<!-- STEP 3 -->
					<div class="col step" data-testid="step-3">
						<div class="card">
							<div class="badge">Step 3</div>
							<h3 class="card-title">Recommend the Plan</h3>
							<p class="card-text">Clear options, timelines, and a clean rollout path.</p>
						</div>
					</div>

					<!-- connector 3 -> 4 -->
					<div class="col connector" aria-hidden="true"><span></span></div>

					<!-- STEP 4 -->
					<div class="col step wide" data-testid="step-4">
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
	:root {
		--kps-navy: #00438c;
		--kps-gold: #cab068;
		--ink-900: rgba(0,0,0,.88);
		--ink-700: rgba(0,0,0,.66);
		--ink-500: rgba(0,0,0,.52);
		--line: rgba(0,0,0,.28);
		--ring: rgba(0,0,0,.12);
		--surface: #ffffff;
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--ink-900: rgba(255,255,255,.92);
			--ink-700: rgba(255,255,255,.78);
			--ink-500: rgba(255,255,255,.62);
			--line: rgba(255,255,255,.28);
			--ring: rgba(255,255,255,.16);
			--surface: #0d0f12;
		}
	}

	.band {
		position: relative;
		padding: clamp(24px, 3.8vw, 44px) 0;
		background:
			radial-gradient(100% 80% at 50% 0%, color-mix(in oklab, var(--kps-gold) 18%, transparent) 0%, transparent 55%),
			linear-gradient(180deg, color-mix(in oklab, var(--kps-navy) 12%, transparent), transparent 60%);
		border-block: 1px solid color-mix(in oklab, var(--kps-navy) 25%, transparent);
	}
	.wrap { max-width: 1240px; margin: 0 auto; padding: 0 20px; }

	.hdr { text-align: center; margin-bottom: 16px; }
	.ttl {
		margin: 0;
		font-size: clamp(22px, 2.4vw, 30px);
		line-height: 1.15;
		letter-spacing: -0.01em;
		color: var(--ink-900);
	}
	.sub { margin: 8px 0 0; color: var(--ink-500); font-size: 14px; }

	.scroller { overflow-x: auto; padding-bottom: 8px; }
	.row {
		min-width: var(--minw, 1024px);
		display: grid;
		grid-template-columns: 1fr 64px 1.7fr 16px 1fr 64px 1.3fr;
		gap: 12px;
		align-items: start;
	}
	.col { min-width: 0; }
	.spacer { min-height: 1px; }

	.roadmap { --p: 16px; }
	:where(.roadmap)[data-dense="false"] { --p: 22px; }

	.card {
		background: var(--surface);
		border: 1px solid var(--ring);
		border-radius: 16px;
		padding: var(--p);
		box-shadow: 0 2px 10px rgba(0,0,0,.05);
		transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease, background-color .18s ease;
		outline: none;
	}
	.card:hover, .card:focus-visible {
		transform: translateY(-3px);
		box-shadow: 0 6px 18px rgba(0,0,0,.10);
		border-color: color-mix(in oklab, var(--kps-navy) 30%, var(--ring));
	}
	.card-title { margin: 4px 0 6px; font-size: 18px; color: var(--ink-900); }
	.card-text { margin: 0; font-size: 14px; color: var(--ink-700); }

	.badge {
		display: inline-block;
		font-size: 11px;
		letter-spacing: .02em;
		background: var(--kps-navy);
		color: #fff;
		border-radius: 999px;
		padding: 4px 10px;
		margin-bottom: 6px;
		box-shadow: 0 0 0 1px #ffffff20 inset, 0 1px 0 #00000010 inset;
	}
	.badge-gold { background: var(--kps-gold); color: #1a1a1a; }

	.connector { position: relative; display: flex; align-items: center; }
	.connector > span {
		display: block; width: 100%; height: 2px; background: var(--line);
		transition: background-color .18s ease;
	}
	.connector:hover > span { background: color-mix(in oklab, var(--kps-gold) 60%, var(--line)); }

	.branches { position: relative; margin-top: 12px; }
	.nub rect { fill: var(--line); }

	.branch-grid {
		display: grid; gap: 10px;
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	.branch-card {
		position: relative;
		background: var(--surface);
		border: 1px solid var(--ring);
		border-radius: 14px;
		padding: 14px;
		transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease, background-color .18s ease;
		outline: none;
		cursor: pointer;
	}
	.branch-card:hover, .branch-card:focus-visible {
		transform: translateY(-3px);
		box-shadow: 0 6px 18px rgba(0,0,0,.10);
		border-color: color-mix(in oklab, var(--kps-gold) 45%, var(--ring));
	}
	.branch-badge {
		display: inline-block; font-size: 10px; color: var(--ink-500);
		background: #0000000a; padding: 2px 8px; border-radius: 999px; margin-bottom: 6px;
	}
	.branch-title { margin: 0 0 4px; font-size: 15px; color: var(--ink-900); }
	.branch-text { margin: 0; font-size: 13px; color: var(--ink-700); }

	.branch-line { position: absolute; left: 50%; transform: translateX(-50%); top: -28px; width: 120px; height: 40px; }
	.branch-line path { stroke: var(--line); stroke-width: 2; fill: none; transition: stroke .18s ease; }
	.branch-card:hover .branch-line path,
	.branch-card:focus-visible .branch-line path { stroke: color-mix(in oklab, var(--kps-navy) 60%, var(--line)); }

	.branch-card[data-index="0"] .branch-line path { d: path("M60,40 C60,26 42,20 20,10"); }
	.branch-card[data-index="1"] .branch-line path { d: path("M60,40 C60,26 60,20 60,10"); }
	.branch-card[data-index="2"] .branch-line path { d: path("M60,40 C60,26 78,20 100,10"); }

	.rejoin path { stroke: var(--line); stroke-width: 2; fill: none; }

	.branch-card.active {
		background: color-mix(in oklab, var(--kps-gold) 12%, var(--surface));
		border-color: color-mix(in oklab, var(--kps-gold) 58%, var(--ring));
		box-shadow: 0 8px 24px rgba(202,176,104,.18);
	}

	@media (max-width: 1100px) {
		.row { grid-template-columns: 1fr 48px 1.6fr 12px 1fr 48px 1.2fr; }
	}
	@media (max-width: 900px) {
		.row { grid-template-columns: 1fr 36px 1.4fr 12px 1fr 36px 1fr; }
	}
</style>
