<script lang="ts">
  export let title: string;
  export let tagline: string;
  export let headerSrc: string;         // skinny transparent PNG/SVG
  export let bgHex: string;             // card & header color (same)
  export let pains: string[] = [];
  export let solutions: string[] = [];
  export let ctaLabel: string = "We do that →";
  export let ctaHref: string = "#";
</script>

<!-- Set the per-card background via CSS var -->
<div class="suite-card suite-card-glass" style={`--suite-bg: ${bgHex};`}>
  <div class="suite-header">
    <img src={headerSrc} alt={title} loading="lazy" decoding="async" />
  </div>

  <div class="suite-body">
    <h3 class="text-xl font-semibold text-center mb-1">{title}</h3>
    <p class="suite-subtle text-xs uppercase tracking-widest text-center mb-4">{tagline}</p>

    {#if pains?.length}
      <p class="suite-subtle text-[11px] mb-2">PAIN POINTS</p>
      <div class="grid gap-2 mb-4">
        {#each pains as p}
          <div class="suite-chip flex items-start gap-2">
            <span class="mt-0.5 text-red-300">▲</span>
            <span>{p}</span>
          </div>
        {/each}
      </div>
    {/if}

    {#if solutions?.length}
      <p class="suite-subtle text-[11px] mb-2">SOLUTIONS</p>
      <div class="grid gap-2">
        {#each solutions as s}
          <div class="suite-chip flex items-start gap-2">
            <span class="mt-0.5 text-emerald-300">●</span>
            <span>{s}</span>
          </div>
        {/each}
      </div>
    {/if}

    <div class="mt-4 flex justify-center">
      <a class="suite-cta" href={ctaHref} rel="noopener">
        {ctaLabel}
      </a>
    </div>
  </div>
</div>
