<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	
	$: status = $page.status;
	$: message = $page.error?.message;
	
	$: errorTitle = status === 404 ? 'Page Not Found' : 'Something Went Wrong';
	$: errorDescription = status === 404 
		? 'The page you\'re looking for doesn\'t exist or has been moved.'
		: 'We\'re experiencing technical difficulties. Please try again.';
</script>

<svelte:head>
	<title>{errorTitle} | The KPS Group</title>
</svelte:head>

<div class="min-h-screen bg-sand flex items-center justify-center px-4">
	<div class="max-w-md w-full text-center">
		<!-- Error Code -->
		<div class="text-6xl font-bold text-navy mb-4">{status}</div>
		
		<!-- Error Icon -->
		<div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
			<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
			</svg>
		</div>
		
		<!-- Error Message -->
		<h1 class="text-2xl font-bold text-navy mb-4">{errorTitle}</h1>
		<p class="text-slate mb-8">{errorDescription}</p>
		
		<!-- Error Details (Development Only) -->
		{#if import.meta.env.DEV && message}
			<div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
				<pre class="text-sm text-red-700 overflow-auto">{message}</pre>
			</div>
		{/if}
		
		<!-- Action Buttons -->
		<div class="space-y-4">
			<Button href="/" variant="primary" fullWidth>
				Go Home
			</Button>
			
			<Button href="/contact" variant="outline" fullWidth>
				Contact Support
			</Button>
			
			<button 
				on:click={() => window.history.back()}
				class="text-slate hover:text-navy transition-colors focus-ring rounded px-2 py-1"
			>
				← Go Back
			</button>
		</div>
		
		<!-- Helpful Links -->
		<div class="mt-12 pt-8 border-t border-gray-200">
			<p class="text-sm text-slate mb-4">Looking for something specific?</p>
			<div class="flex flex-wrap justify-center gap-4 text-sm">
				<a href="/suite" class="text-gold hover:text-gold-600 transition-colors">Our Services</a>
				<a href="/outcomes" class="text-gold hover:text-gold-600 transition-colors">Case Studies</a>
				<a href="/founder" class="text-gold hover:text-gold-600 transition-colors">About Us</a>
			</div>
		</div>
	</div>
</div>
