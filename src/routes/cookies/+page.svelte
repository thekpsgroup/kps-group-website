<script lang="ts">
	import { onMount } from 'svelte';
	
	onMount(() => {
		// Update page title
		document.title = 'Cookie Policy - The KPS Group';
	});
</script>

<svelte:head>
	<title>Cookie Policy - The KPS Group</title>
	<meta name="description" content="Cookie Policy for The KPS Group. Learn about how we use cookies and similar technologies on our website." />
</svelte:head>

<div class="min-h-screen bg-white">
	<div class="container mx-auto px-4 py-16 max-w-4xl">
		<!-- Header -->
		<div class="text-center mb-12">
			<h1 class="text-4xl md:text-5xl font-bold text-navy mb-4">Cookie Policy</h1>
			<p class="text-lg text-slate-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
		</div>

		<!-- Content -->
		<div class="prose prose-lg max-w-none">
			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">1. What Are Cookies</h2>
				<p class="text-slate-700 mb-4">
					Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
				</p>
				<p class="text-slate-700">
					Cookies can be "session" cookies (temporary and deleted when you close your browser) or "persistent" cookies (stored on your device for a longer period).
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">2. How We Use Cookies</h2>
				<p class="text-slate-700 mb-4">We use cookies for the following purposes:</p>
				
				<h3 class="text-xl font-semibold text-navy mb-3">2.1 Essential Cookies</h3>
				<p class="text-slate-700 mb-4">These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</p>
				
				<h3 class="text-xl font-semibold text-navy mb-3">2.2 Performance Cookies</h3>
				<p class="text-slate-700 mb-4">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
				
				<h3 class="text-xl font-semibold text-navy mb-3">2.3 Functionality Cookies</h3>
				<p class="text-slate-700 mb-4">These cookies allow the website to remember choices you make and provide enhanced, more personal features.</p>
				
				<h3 class="text-xl font-semibold text-navy mb-3">2.4 Marketing Cookies</h3>
				<p class="text-slate-700 mb-4">These cookies are used to track visitors across websites to display relevant and engaging advertisements.</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">3. Types of Cookies We Use</h2>
				
				<div class="bg-slate-50 p-6 rounded-lg mb-6">
					<h4 class="text-lg font-semibold text-navy mb-3">First-Party Cookies</h4>
					<p class="text-slate-700 mb-3">These are cookies that we set directly on our website:</p>
					<ul class="list-disc pl-6 text-slate-700">
						<li><strong>Session cookies:</strong> Help maintain your session while browsing</li>
						<li><strong>Preference cookies:</strong> Remember your language and region preferences</li>
						<li><strong>Security cookies:</strong> Help protect against fraud and ensure secure browsing</li>
					</ul>
				</div>

				<div class="bg-slate-50 p-6 rounded-lg mb-6">
					<h4 class="text-lg font-semibold text-navy mb-3">Third-Party Cookies</h4>
					<p class="text-slate-700 mb-3">These are cookies set by third-party services we use:</p>
					<ul class="list-disc pl-6 text-slate-700">
						<li><strong>Analytics cookies:</strong> Google Analytics to understand website usage</li>
						<li><strong>Marketing cookies:</strong> Social media platforms for advertising</li>
						<li><strong>Payment cookies:</strong> Payment processors for secure transactions</li>
					</ul>
				</div>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">4. Managing Your Cookie Preferences</h2>
				<p class="text-slate-700 mb-4">You can control and manage cookies in several ways:</p>
				
				<h3 class="text-xl font-semibold text-navy mb-3">4.1 Browser Settings</h3>
				<p class="text-slate-700 mb-4">Most web browsers allow you to control cookies through their settings preferences. You can:</p>
				<ul class="list-disc pl-6 text-slate-700 mb-4">
					<li>Delete existing cookies</li>
					<li>Block cookies from being set</li>
					<li>Set your browser to notify you when cookies are being set</li>
					<li>Choose which cookies to accept or reject</li>
				</ul>

				<h3 class="text-xl font-semibold text-navy mb-3">4.2 Cookie Consent</h3>
				<p class="text-slate-700 mb-4">When you first visit our website, you'll see a cookie consent banner. You can:</p>
				<ul class="list-disc pl-6 text-slate-700 mb-4">
					<li>Accept all cookies</li>
					<li>Reject non-essential cookies</li>
					<li>Customize your preferences</li>
					<li>Change your preferences at any time</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">5. Specific Cookies We Use</h2>
				
				<div class="overflow-x-auto">
					<table class="w-full border-collapse border border-slate-300">
						<thead>
							<tr class="bg-slate-100">
								<th class="border border-slate-300 px-4 py-2 text-left font-semibold">Cookie Name</th>
								<th class="border border-slate-300 px-4 py-2 text-left font-semibold">Purpose</th>
								<th class="border border-slate-300 px-4 py-2 text-left font-semibold">Duration</th>
								<th class="border border-slate-300 px-4 py-2 text-left font-semibold">Type</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="border border-slate-300 px-4 py-2">session_id</td>
								<td class="border border-slate-300 px-4 py-2">Maintains user session</td>
								<td class="border border-slate-300 px-4 py-2">Session</td>
								<td class="border border-slate-300 px-4 py-2">Essential</td>
							</tr>
							<tr>
								<td class="border border-slate-300 px-4 py-2">_ga</td>
								<td class="border border-slate-300 px-4 py-2">Google Analytics tracking</td>
								<td class="border border-slate-300 px-4 py-2">2 years</td>
								<td class="border border-slate-300 px-4 py-2">Analytics</td>
							</tr>
							<tr>
								<td class="border border-slate-300 px-4 py-2">_gid</td>
								<td class="border border-slate-300 px-4 py-2">Google Analytics session tracking</td>
								<td class="border border-slate-300 px-4 py-2">24 hours</td>
								<td class="border border-slate-300 px-4 py-2">Analytics</td>
							</tr>
							<tr>
								<td class="border border-slate-300 px-4 py-2">cookie_consent</td>
								<td class="border border-slate-300 px-4 py-2">Remembers cookie preferences</td>
								<td class="border border-slate-300 px-4 py-2">1 year</td>
								<td class="border border-slate-300 px-4 py-2">Functional</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">6. Third-Party Services</h2>
				<p class="text-slate-700 mb-4">We use the following third-party services that may set cookies:</p>
				
				<div class="bg-slate-50 p-6 rounded-lg mb-4">
					<h4 class="text-lg font-semibold text-navy mb-2">Google Analytics</h4>
					<p class="text-slate-700 mb-2">We use Google Analytics to understand how visitors use our website. Google Analytics uses cookies to collect information about your use of our website.</p>
					<p class="text-slate-700">For more information, see <a href="https://policies.google.com/privacy" class="text-gold hover:text-gold-600" target="_blank" rel="noopener">Google's Privacy Policy</a>.</p>
				</div>

				<div class="bg-slate-50 p-6 rounded-lg mb-4">
					<h4 class="text-lg font-semibold text-navy mb-2">Vercel Analytics</h4>
					<p class="text-slate-700 mb-2">We use Vercel Analytics to monitor website performance and user experience.</p>
					<p class="text-slate-700">For more information, see <a href="https://vercel.com/legal/privacy-policy" class="text-gold hover:text-gold-600" target="_blank" rel="noopener">Vercel's Privacy Policy</a>.</p>
				</div>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">7. Your Rights</h2>
				<p class="text-slate-700 mb-4">You have the following rights regarding cookies:</p>
				<ul class="list-disc pl-6 text-slate-700 mb-4">
					<li><strong>Right to be informed:</strong> You have the right to know what cookies we use and why</li>
					<li><strong>Right to consent:</strong> You can choose which cookies to accept</li>
					<li><strong>Right to withdraw consent:</strong> You can change your cookie preferences at any time</li>
					<li><strong>Right to delete:</strong> You can delete cookies through your browser settings</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">8. Updates to This Policy</h2>
				<p class="text-slate-700 mb-4">
					We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">9. Contact Us</h2>
				<p class="text-slate-700 mb-4">
					If you have any questions about our use of cookies, please contact us:
				</p>
				<div class="bg-slate-50 p-6 rounded-lg">
					<p class="text-slate-700 mb-2"><strong>The KPS Group</strong></p>
					<p class="text-slate-700 mb-2">Email: <a href="mailto:privacy@thekpsgroup.com" class="text-gold hover:text-gold-600">privacy@thekpsgroup.com</a></p>
					<p class="text-slate-700 mb-2">Phone: <a href="tel:469-458-6966" class="text-gold hover:text-gold-600">469-458-6966</a></p>
					<p class="text-slate-700">Address: Dallas, Texas, United States</p>
				</div>
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
	
	.prose h4 {
		color: #00438c;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}
	
	.prose ul {
		margin-bottom: 1rem;
	}
	
	.prose li {
		margin-bottom: 0.5rem;
	}
	
	table {
		font-size: 0.875rem;
	}
</style>
