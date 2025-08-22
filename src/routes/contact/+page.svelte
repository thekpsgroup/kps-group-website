<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { page } from '$app/stores';
	const SITE_URL = (import.meta.env?.PUBLIC_SITE_URL as string) || 'https://thekpsgroup.com';
</script>

<svelte:head>
	<title>Contact Us — Get Started with The Modern Suite | The KPS Group</title>
	<meta name="description" content="Ready to transform your business? Contact The KPS Group to discuss how The Modern Suite can streamline your operations and drive growth." />
	<link rel="canonical" href={`${SITE_URL}${$page.url.pathname}${$page.url.search}`} />
	<meta property="og:title" content="Contact The KPS Group" />
	<meta property="og:description" content="Tell us what's broken. We'll fix it." />
	<meta property="og:url" content={`${SITE_URL}${$page.url.pathname}${$page.url.search}`} />
	<script type="application/ld+json">
		{
			"@context":"https://schema.org",
			"@type":"BreadcrumbList",
			"itemListElement":[
				{"@type":"ListItem","position":1,"name":"Contact","item":"${SITE_URL}/contact"}
			]
		}
	</script>
</svelte:head>

<ContactForm />
