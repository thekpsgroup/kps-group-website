<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Roadmap from '$lib/components/Roadmap.svelte';
	import SuiteGrid from '$lib/components/SuiteGrid.svelte';
	import Consolidation from '$lib/components/Consolidation.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>The Modern Suite by The KPS Group — Brand, Books, Payroll, Ops, Stack & Custom Software</title>
	<meta name="description" content="Enterprise-grade tools and ops for service businesses. Branding, bookkeeping, payroll, consulting, stack consolidation, and custom software builds." />
	<script type="application/ld+json">{JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Modern Brands',
		url: 'https://modernbrands.co',
		email: 'sales@thekpsgroup.com',
		telephone: '469-458-6966',
		logo: '/favicon.ico'
	})}</script>
</svelte:head>

<Hero />
<Roadmap />
<SuiteGrid />
<Consolidation />
<ContactForm />
