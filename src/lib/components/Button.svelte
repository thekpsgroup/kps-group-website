<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let disabled = false;
	export let loading = false;
	export let fullWidth = false;
	export let href: string | undefined = undefined;
	export let text: string | undefined = undefined;
	
	const variantClasses = {
		primary: 'bg-gold text-navy hover:bg-gold-600 shadow-lg hover:shadow-xl',
		secondary: 'bg-navy text-white hover:bg-navy-800 shadow-lg hover:shadow-xl',
		outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
		ghost: 'text-navy hover:bg-navy/10'
	};
	
	const sizeClasses = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg'
	};
	
	$: classes = [
		'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus-ring',
		variantClasses[variant],
		sizeClasses[size],
		fullWidth ? 'w-full' : '',
		disabled || loading ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5'
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
