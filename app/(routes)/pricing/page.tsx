import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { getContent } from '@kps/content';
import { CTASection } from '@kps/ui';
import { PricingPage } from '@kps/ui';
import { generateSEO, seoConfigs } from '../../../lib/seo';

export const metadata = generateSEO(seoConfigs.pricing);

export default async function PricingPageRoute() {
	const headersList = await headers();
	const brandKey = headersList.get('x-brand') || 'kps-group';
	const brand = resolveBrand(undefined, brandKey as any);
	const content = getContent(brand.key);

	// For Modern Brands, use our enhanced pricing page
	if (brand.key === 'modern-brands') {
		return (
			<>
				<section id="main" className="section-padding pt-28 md:pt-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
					{/* Enhanced background decorative elements */}
					<div className="absolute top-0 left-0 w-64 h-64 bg-kps-navy/5 rounded-full blur-3xl -translate-x-32 -translate-y-32 float" aria-hidden="true"></div>
					<div className="absolute bottom-0 right-0 w-96 h-96 bg-kps-gold/5 rounded-full blur-3xl translate-x-32 translate-y-32 float-delayed" aria-hidden="true"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-kps-navy/3 rounded-full blur-3xl float-slow" aria-hidden="true"></div>
					
					<div className="relative z-10">
						<PricingPage brandKey="modern-brands" />
					</div>
				</section>

				<CTASection 
					brand={brand} 
					flavor={brand.flavor} 
				/>
			</>
		);
	}

	// For other brands, use the existing pricing page
	return (
		<>
			<section id="main" className="section-padding pt-28 md:pt-32 bg-gradient-secondary relative overflow-hidden">
				{/* Enhanced background decorative elements */}
				<div className="absolute top-0 left-0 w-64 h-64 bg-kps-navy/5 rounded-full blur-3xl -translate-x-32 -translate-y-32 float" aria-hidden="true"></div>
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-kps-gold/5 rounded-full blur-3xl translate-x-32 translate-y-32 float-delayed" aria-hidden="true"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-kps-navy/3 rounded-full blur-3xl float-slow" aria-hidden="true"></div>
				
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16">
						<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
							Pricing
						</h1>
						<p className="text-xl text-neutral-600 max-w-3xl mx-auto">
							Contact us to learn about our pricing. We&apos;ll tailor a plan based on your needs.
						</p>
					</div>

					<div className="max-w-3xl mx-auto">
						<div className="group relative animate-scale-in bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-md overflow-hidden transition-shadow">
							<div className="absolute inset-0 bg-gradient-to-br from-kps-navy/10 to-kps-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" aria-hidden="true"></div>
							<div className="relative z-10 text-center">
								<h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Custom Engagement</h3>
								<p className="text-neutral-700 text-lg mb-8">Every engagement is scoped to outcomes. Talk with our team for a precise quote.</p>
								<a href="/contact" className="inline-block text-center py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:scale-105 min-h-[44px] bg-gradient-to-r from-kps-navy to-kps-navy text-white hover:shadow-brand">
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<CTASection 
				brand={brand} 
				flavor={brand.flavor} 
			/>
		</>
	);
}