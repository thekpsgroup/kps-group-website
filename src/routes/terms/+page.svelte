<script lang="ts">
	import { onMount } from 'svelte';
	
	onMount(() => {
		// Update page title
		document.title = 'Terms of Service - The KPS Group';
	});
</script>

<svelte:head>
	<title>Terms of Service - The KPS Group</title>
	<meta name="description" content="Terms of Service for The KPS Group. Read our terms and conditions for using our services." />
</svelte:head>

<div class="min-h-screen bg-white">
	<div class="container mx-auto px-4 py-16 max-w-4xl">
		<!-- Header -->
		<div class="text-center mb-12">
			<h1 class="text-4xl md:text-5xl font-bold text-navy mb-4">Terms of Service</h1>
			<p class="text-lg text-slate-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
		</div>

		<!-- Content -->
		<div class="prose prose-lg max-w-none">
			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">1. Agreement to Terms</h2>
				<p class="text-slate-700 mb-4">
					By accessing and using the services provided by The KPS Group ("we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our services.
				</p>
				<p class="text-slate-700">
					These Terms apply to all visitors, users, and others who access or use our services.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">2. Description of Services</h2>
				<p class="text-slate-700 mb-4">
					The KPS Group provides business services including but not limited to:
				</p>
				<ul class="list-disc pl-6 text-slate-700 mb-4">
					<li>Brand development and identity design</li>
					<li>Website development and design</li>
					<li>Bookkeeping and accounting services</li>
					<li>Payroll and HR compliance services</li>
					<li>Business consulting and operations optimization</li>
					<li>Technology stack audits and custom software development</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">3. User Accounts and Registration</h2>
				<p class="text-slate-700 mb-4">
					When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your account credentials and for all activities that occur under your account.
				</p>
				<p class="text-slate-700">
					You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">4. Payment Terms</h2>
				<p class="text-slate-700 mb-4">
					Payment terms for our services are as follows:
				</p>
				<ul class="list-disc pl-6 text-slate-700 mb-4">
					<li>Payment is due upon receipt of invoice unless otherwise agreed in writing</li>
					<li>We accept payment by credit card, bank transfer, or other methods as specified</li>
					<li>Late payments may result in suspension of services</li>
					<li>All fees are non-refundable unless otherwise specified in a written agreement</li>
					<li>Prices are subject to change with 30 days written notice</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">5. Intellectual Property Rights</h2>
				<p class="text-slate-700 mb-4">
					The content, features, and functionality of our services are owned by The KPS Group and are protected by copyright, trademark, and other intellectual property laws.
				</p>
				<p class="text-slate-700 mb-4">
					For custom work created for clients:
				</p>
				<ul class="list-disc pl-6 text-slate-700 mb-4">
					<li>Final deliverables become client property upon full payment</li>
					<li>We retain the right to use work for portfolio and marketing purposes</li>
					<li>Source files and working materials remain our property unless specified in writing</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">6. Prohibited Uses</h2>
				<p class="text-slate-700 mb-4">You may not use our services:</p>
				<ul class="list-disc pl-6 text-slate-700 mb-4">
					<li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
					<li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
					<li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
					<li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
					<li>To submit false or misleading information</li>
					<li>To upload or transmit viruses or any other type of malicious code</li>
					<li>To collect or track the personal information of others</li>
					<li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">7. Limitation of Liability</h2>
				<p class="text-slate-700 mb-4">
					In no event shall The KPS Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
				</p>
				<ul class="list-disc pl-6 text-slate-700 mb-4">
					<li>Your use or inability to use our services</li>
					<li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
					<li>Any interruption or cessation of transmission to or from our services</li>
					<li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">8. Disclaimer of Warranties</h2>
				<p class="text-slate-700 mb-4">
					Our services are provided on an "AS IS" and "AS AVAILABLE" basis. The KPS Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">9. Indemnification</h2>
				<p class="text-slate-700 mb-4">
					You agree to defend, indemnify, and hold harmless The KPS Group and its licensees and service providers from any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of our services.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">10. Termination</h2>
				<p class="text-slate-700 mb-4">
					We may terminate or suspend your account and bar access to our services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
				</p>
				<p class="text-slate-700">
					If you wish to terminate your account, you may simply discontinue using our services.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">11. Governing Law</h2>
				<p class="text-slate-700 mb-4">
					These Terms shall be interpreted and governed by the laws of the State of Texas, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">12. Changes to Terms</h2>
				<p class="text-slate-700 mb-4">
					We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">13. Severability</h2>
				<p class="text-slate-700 mb-4">
					If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-navy mb-4">14. Contact Information</h2>
				<p class="text-slate-700 mb-4">
					If you have any questions about these Terms of Service, please contact us:
				</p>
				<div class="bg-slate-50 p-6 rounded-lg">
					<p class="text-slate-700 mb-2"><strong>The KPS Group</strong></p>
					<p class="text-slate-700 mb-2">Email: <a href="mailto:legal@thekpsgroup.com" class="text-gold hover:text-gold-600">legal@thekpsgroup.com</a></p>
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
	
	.prose ul {
		margin-bottom: 1rem;
	}
	
	.prose li {
		margin-bottom: 0.5rem;
	}
</style>
