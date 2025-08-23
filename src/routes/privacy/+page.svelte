<script lang="ts">
	import { onMount } from 'svelte';
	
	onMount(() => {
		// Update page title
		document.title = 'Privacy Policy - The KPS Group';
	});
</script>

<svelte:head>
	<title>Privacy Policy - The KPS Group</title>
	<meta name="description" content="Privacy Policy for The KPS Group. Learn how we collect, use, and protect your personal information." />
</svelte:head>

<div class="min-h-screen bg-white">
	<div class="container mx-auto px-4 py-16 max-w-4xl">
		<!-- Header -->
		<div class="text-center mb-12">
			<h1 class="text-4xl md:text-5xl font-bold text-navy mb-4">Privacy Policy</h1>
			<p class="text-lg text-slate-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
		</div>

		<!-- Content -->
		<div class="prose prose-lg max-w-none">
			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">1. Introduction</h2>
				<p class="text-slate-700 mb-4">
					The KPS Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
				</p>
				<p class="text-slate-700">
					By using our services, you agree to the collection and use of information in accordance with this policy.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">2. Information We Collect</h2>
				
				<h3 class="text-xl font-semibold text-navy mb-3">2.1 Personal Information</h3>
				<p class="text-slate-700 mb-4">We may collect the following personal information:</p>
				<ul class="list-disc pl-6 text-slate-700 mb-4">
					<li>Name and contact information (email, phone number, address)</li>
					<li>Business information (company name, industry, size)</li>
					<li>Service preferences and requirements</li>
					<li>Communication history and correspondence</li>
					<li>Payment and billing information</li>
				</ul>

				<h3 class="text-xl font-semibold text-navy mb-3">2.2 Automatically Collected Information</h3>
				<p class="text-slate-700 mb-4">When you visit our website, we automatically collect:</p>
				<ul class="list-disc pl-6 text-slate-700 mb-4">
					<li>IP address and device information</li>
					<li>Browser type and version</li>
					<li>Pages visited and time spent</li>
					<li>Referring website</li>
					<li>Cookies and similar tracking technologies</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">3. How We Use Your Information</h2>
				<p class="text-slate-700 mb-4">We use the collected information for the following purposes:</p>
				<ul class="list-disc pl-6 text-slate-700 mb-4">
					<li>Provide and maintain our services</li>
					<li>Communicate with you about our services</li>
					<li>Process payments and transactions</li>
					<li>Improve our website and services</li>
					<li>Comply with legal obligations</li>
					<li>Protect against fraud and security threats</li>
					<li>Send marketing communications (with your consent)</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">4. Information Sharing and Disclosure</h2>
				<p class="text-slate-700 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
				<ul class="list-disc pl-6 text-slate-700 mb-4">
					<li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business</li>
					<li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
					<li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
					<li><strong>Consent:</strong> With your explicit consent</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">5. Data Security</h2>
				<p class="text-slate-700 mb-4">
					We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">6. Cookies and Tracking Technologies</h2>
				<p class="text-slate-700 mb-4">
					We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">7. Your Rights and Choices</h2>
				<p class="text-slate-700 mb-4">You have the following rights regarding your personal information:</p>
				<ul class="list-disc pl-6 text-slate-700 mb-4">
					<li><strong>Access:</strong> Request access to your personal information</li>
					<li><strong>Correction:</strong> Request correction of inaccurate information</li>
					<li><strong>Deletion:</strong> Request deletion of your personal information</li>
					<li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
					<li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">8. Children's Privacy</h2>
				<p class="text-slate-700 mb-4">
					Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">9. Third-Party Links</h2>
				<p class="text-slate-700 mb-4">
					Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">10. Changes to This Policy</h2>
				<p class="text-slate-700 mb-4">
					We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">11. Contact Us</h2>
				<p class="text-slate-700 mb-4">
					If you have any questions about this Privacy Policy or our privacy practices, please contact us:
				</p>
				<div class="bg-slate-50 p-6 rounded-lg">
					<p class="text-slate-700 mb-2"><strong>The KPS Group</strong></p>
					<p class="text-slate-700 mb-2">Email: <a href="mailto:privacy@thekpsgroup.com" class="text-gold hover:text-gold-600">privacy@thekpsgroup.com</a></p>
					<p class="text-slate-700 mb-2">Phone: <a href="tel:469-458-6966" class="text-gold hover:text-gold-600">469-458-6966</a></p>
					<p class="text-slate-700">Address: Dallas, Texas, United States</p>
				</div>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">12. California Privacy Rights</h2>
				<p class="text-slate-700 mb-4">
					California residents have additional rights under the California Consumer Privacy Act (CCPA). Please contact us for more information about your California privacy rights.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">13. International Data Transfers</h2>
				<p class="text-slate-700 mb-4">
					Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information.
				</p>
			</section>
		</div>

		<!-- Back to Home -->
		<div class="text-center mt-12">
			<a href="/" class="inline-block bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-600 transition-colors">
				Back to Home
			</a>
		</div>
	</div>
</div>

<style>
	.prose h2 {
		color: #00438c;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	
	.prose h3 {
		color: #00438c;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}
	
	.prose ul {
		margin-bottom: 1rem;
	}
	
	.prose li {
		margin-bottom: 0.5rem;
	}
</style>
