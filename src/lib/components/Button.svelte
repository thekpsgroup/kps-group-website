<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let disabled = false;
	export let loading = false;
	export let fullWidth = false;
	export let href: string | undefined = undefined;
	export let text: string | undefined = undefined;
	
	const variantClasses = {
		primary: 'bg-gradient-to-r from-gold to-gold-600 text-navy hover:from-gold-600 hover:to-gold shadow-xl hover:shadow-2xl hover:shadow-gold/25 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
		secondary: 'bg-gradient-to-r from-navy to-navy-800 text-white hover:from-navy-800 hover:to-navy shadow-xl hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
		outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
		ghost: 'text-navy hover:bg-navy/10 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2'
	};
	
	const sizeClasses = {
		sm: 'px-4 py-2 text-sm rounded-lg',
		md: 'px-6 py-3 text-base rounded-xl',
		lg: 'px-8 py-4 text-lg rounded-xl'
	};
	
	$: classes = [
		'inline-flex items-center justify-center font-semibold transition-all duration-300 touch-manipulation',
		variantClasses[variant],
		sizeClasses[size],
		fullWidth ? 'w-full' : '',
		disabled || loading ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1 active:scale-98'
	].filter(Boolean).join(' ');
</script>

{#if href}
	<a 
		{href}
		class={classes}
		aria-disabled={disabled || loading}
		tabindex={disabled || loading ? -1 : 0}
	>
		{#if text}{text}{:else}<slot />{/if}
	</a>
{:else}
	<button 
		class={classes}
		{disabled}
		on:click
		on:keydown
		{...$$restProps}
	>
		{#if loading}
			<div class="w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin mr-2"></div>
		{/if}
		{#if text}{text}{:else}<slot />{/if}
	</button>
{/if}
