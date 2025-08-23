<script lang="ts">
	export let quote: string;
	export let author: string;
	export let company: string;
	export let role: string | undefined = undefined;
	export let rating: number | undefined = undefined;
	export let service: string | undefined = undefined;
	
	$: stars = rating ? Array.from({ length: 5 }, (_, i) => i < rating) : [];
</script>

<div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
	{#if rating}
		<div class="flex items-center mb-4">
			{#each stars as isFilled}
				<svg 
					class="w-5 h-5 {isFilled ? 'text-gold' : 'text-gray-300'}" 
					fill="currentColor" 
					viewBox="0 0 20 20"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
			{/each}
		</div>
	{/if}
	
	{#if service}
		<div class="text-xs font-semibold text-gold uppercase tracking-wide mb-3">
			{service}
		</div>
	{/if}
	
	<blockquote class="text-gray-700 mb-4 italic">
		"{quote}"
	</blockquote>
	
	<div class="flex items-center">
		<div class="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-3">
			<span class="text-gold font-semibold text-sm">
				{author.split(' ').map(n => n[0]).join('')}
			</span>
		</div>
		<div>
			<div class="font-semibold text-gray-900">{author}</div>
			<div class="text-sm text-gray-600">
				{role && `${role}, `}{company}
			</div>
		</div>
	</div>
</div>
