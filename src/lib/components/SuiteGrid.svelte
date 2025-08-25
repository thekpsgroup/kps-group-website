<script lang="ts">
	import { SUITE, type Suite } from '$lib/data/suite';
	import { smoothScrollTo } from '$lib/utils/observe';
	import Button from './Button.svelte';
	import SuiteCard from './SuiteCard.svelte';
	import { trackServiceClick } from '$lib/utils/analytics';
	
	let selectedPains: string[] = [];
	
	function togglePain(pain: string, suiteKey: string) {
		const index = selectedPains.indexOf(pain);
		if (index > -1) {
			selectedPains.splice(index, 1);
		} else {
			selectedPains.push(pain);
		}
		selectedPains = [...selectedPains];
	}
	
	function handleCTAClick(suiteKey: string) {
		trackServiceClick(suiteKey);
		// Navigate to the dedicated landing page
		window.location.href = `/suite/${suiteKey}`;
	}
	
	// Get solutions that match selected pains for a specific suite
	function getMatchingSolutions(suite: Suite): string[] {
		if (selectedPains.length === 0) return [];
		
		const matchingSolutions: string[] = [];
		suite.painPoints.forEach((pain: string, index: number) => {
			if (selectedPains.includes(pain)) {
				matchingSolutions.push(suite.solutions[index]);
			}
		});
		
		return matchingSolutions;
	}
	
	// Get brand-specific header image
	function getBrandHeaderImage(suiteKey: string) {
		const images = {
			brands: '/brands/modern-brands-card-header.png',
			ledger: '/brands/modern-ledger-card-header.png',
			pay: '/brands/modern-pay-card-header.png',
			stack: '/brands/modern-stack-card-header.png',
			consulting: '/brands/modern-consulting-card-header.png'
		};
		return images[suiteKey as keyof typeof images] || images.brands;
	}
	
	// Get brand-specific colors that match the header images exactly
	function getBrandColors(suite: Suite) {
		const headerColors = {
			brands: {
				primary: '#C9A246',    // Gold (Text & Feather) from Modern Brands header
				secondary: '#0D0D0D',   // Black Background
				accent: '#C9A246'       // Gold accent
			},
			ledger: {
				primary: '#C9A246',     // Gold Book & Text from Modern Ledger header
				secondary: '#0E3A3D',   // Deep Teal Background
				accent: '#C9A246'       // Gold accent
			},
			pay: {
				primary: '#0B5C3C',     // Emerald Green ($ Icon / Background) from Modern Pay header
				secondary: '#D1A12F',   // Gold Text
				accent: '#0B5C3C'       // Emerald accent
			},
			stack: {
				primary: '#007BFF',     // Electric Blue (Icon Glow) from Modern Stack header
				secondary: '#CBA34A',   // Gold Text
				accent: '#0A0F1C'       // Navy Background
			},
			consulting: {
				primary: '#C45A1A',     // Orange Compass/Background from Modern Consulting header
				secondary: '#D3A84C',   // Gold Text
				accent: '#C45A1A'       // Orange accent
			}
		};
		
		return headerColors[suite.key as keyof typeof headerColors] || headerColors.brands;
	}
	
	// Get brand-specific CSS custom properties
	function getBrandCSSVars(suite: Suite) {
		const colors = getBrandColors(suite);
		return {
			'--brand-primary': colors.primary,
			'--brand-secondary': colors.secondary,
			'--brand-accent': colors.accent
		};
	}
</script>

<section class="py-20 bg-navy text-white relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 dot-grid opacity-10"></div>
	
	<!-- Animated gold particles -->
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-1/4 left-1/4 w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse-gold"></div>
		<div class="absolute top-1/3 right-1/3 w-0.5 h-12 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse-gold" style="animation-delay: 1s;"></div>
		<div class="absolute bottom-1/4 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse-gold" style="animation-delay: 2s;"></div>
	</div>
	
	<div class="container mx-auto px-4 relative z-10">
		<!-- Header -->
		<div class="text-center mb-16">
			<div class="w-16 h-px bg-gold mx-auto mb-8 opacity-60"></div>
			<!-- The Modern Suite Header Image -->
			<div class="mb-8">
				<img 
					src="/brands/the-modern-suite.png" 
					alt="The Modern Suite" 
					class="w-full max-w-2xl mx-auto h-auto object-contain"
				/>
			</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-6 text-balance">
				The Modern Suite
			</h2>
			<p class="text-xl text-slate/80 max-w-3xl mx-auto leading-relaxed">
				Five specialized services that work together to transform your business.
			</p>
		</div>
		
		<!-- Suite Grid with Glassy Cards -->
		<div class="grid gap-6 md:grid-cols-2">
			<SuiteCard
				title="Modern Brands"
				tagline="Brand identity & web design"
				headerSrc="/brands/modern-brands-card-header.png"
				bgHex="#0D0D0D"
				pains={[
					"You look smaller than you are.",
					"Website is leaking leads (slow, dated, confusing).",
					"Inconsistent identity across touchpoints.",
					"Google can't see you (poor SEO structure).",
					"DIY branding stalls growth."
				]}
				solutions={[
					"Custom logo & complete brand kit.",
					"High-performance website (Next/Astro).",
					"Consistent identity everywhere.",
					"Local SEO setup + schema.",
					"Hosting, updates, support."
				]}
				ctaHref="/suite/brands"
			/>

			<SuiteCard
				title="Modern Ledger"
				tagline="Books without drama"
				headerSrc="/brands/modern-ledger-card-header.png"
				bgHex="#0E3A3D"
				pains={[
					"Admin busywork is expensive.",
					"No real-time numbers.",
					"Month-end chaos."
				]}
				solutions={[
					"Automated reconciliations.",
					"Clean monthly closes.",
					"Decision-ready dashboards."
				]}
				ctaHref="/suite/ledger"
			/>

			<SuiteCard
				title="Modern Pay"
				tagline="Payroll that behaves"
				headerSrc="/brands/modern-pay-card-header.png"
				bgHex="#0B5C3C"
				pains={[
					"Manual payroll is risky.",
					"Overpaying current provider.",
					"Compliance anxiety."
				]}
				solutions={[
					"Fully managed payroll.",
					"On-time tax filings.",
					"HR compliance guardrails."
				]}
				ctaHref="/suite/pay"
			/>

			<SuiteCard
				title="Modern Stack"
				tagline="Audit. Fix. Build."
				headerSrc="/brands/modern-stack-card-header.png"
				bgHex="#0A0F1C"
				pains={[
					"Paying for too many tools.",
					"Off-the-shelf doesn't fit.",
					"Nothing talks to each other."
				]}
				solutions={[
					"Stack audit + cost reduction.",
					"Custom apps & integrations.",
					"Automations & AI copilots."
				]}
				ctaHref="/suite/stack"
			/>

			<SuiteCard
				title="Modern Consulting"
				tagline="Sell + operate smart"
				headerSrc="/brands/modern-consulting-card-header.png"
				bgHex="#C45A1A"
				pains={[
					"Sales team underperforming.",
					"Ops are a tire fire.",
					"No playbook, no KPIs."
				]}
				solutions={[
					"Training + playbooks.",
					"Process design.",
					"Accountability systems."
				]}
				ctaHref="/suite/consulting"
			/>
		</div>
		
		<!-- We Do That Button - Improved -->
		<div class="text-center mt-20 mb-12">
			<div class="w-12 h-px bg-gold mx-auto mb-8 opacity-40"></div>
			<Button
				href="/contact"
				variant="primary"
				size="md"
				class="bg-gradient-to-r from-gold to-gold-600 text-navy hover:from-gold-600 hover:to-gold shadow-xl hover:shadow-2xl hover:shadow-gold/30 transform hover:-translate-y-1 transition-all duration-300 font-bold px-8 py-4 rounded-xl text-lg"
			>
				We Do That
				<svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</Button>
		</div>
		
		<!-- Bottom CTA -->
		<div class="text-center mt-16">
			<p class="text-slate/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
				Ready to transform your business? Let's connect the dots and build your modern stack.
			</p>
			<Button
				href="/contact"
				variant="primary"
				size="lg"
				class="hover:scale-105 transition-transform duration-300"
			>
				Get Started Today
			</Button>
		</div>
	</div>
</section>

<style>
	/* Enhanced animations */
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	/* Apply staggered animation to cards */
	.suite-card {
		animation: fadeInUp 0.6s ease-out forwards;
		opacity: 0;
	}
	
	.suite-card:nth-child(1) { animation-delay: 0.1s; }
	.suite-card:nth-child(2) { animation-delay: 0.2s; }
	.suite-card:nth-child(3) { animation-delay: 0.3s; }
	.suite-card:nth-child(4) { animation-delay: 0.4s; }
	.suite-card:nth-child(5) { animation-delay: 0.5s; }
</style>
