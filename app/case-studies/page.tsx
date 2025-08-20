import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { Card, H1, H2, Body, Button } from '@kps/ui';
import Link from 'next/link';

const CASE_STUDIES = [
  {
    id: 'insulation-contractor',
    title: 'From $9M Plateau to 3X Growth',
    subtitle: 'A 20-Year Business Revitalized',
    description: 'How Karson Lawrence and The KPS Group uncovered $200K in hidden savings and rebuilt a company\'s operating system in just 6 months.',
    stats: ['$200K savings', '3X growth', '6 months'],
    category: 'Business Transformation',
    image: '/images/case-studies/insulation-contractor.jpg'
  }
  // Add more case studies here as they become available
];

export default async function CaseStudiesPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Hero Section */}
      <div className="text-center mb-16 pt-28 md:pt-32">
        <H1 className="mb-6 text-4xl lg:text-5xl xl:text-6xl">
          Case Studies
        </H1>
        <Body className="text-xl lg:text-2xl text-neutral-700 max-w-4xl mx-auto">
          Real transformations. Real results. See how Karson Lawrence and The KPS Group have helped businesses achieve breakthrough growth through clarity, cadence, and culture.
        </Body>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {CASE_STUDIES.map((caseStudy) => (
          <Card key={caseStudy.id} className="p-8 hover:shadow-2xl transition-all duration-300">
            <div className="space-y-6">
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-kps-navy/20 text-kps-navy text-sm font-medium rounded-full">
                {caseStudy.category}
              </div>

              {/* Title */}
              <H2 className="text-2xl lg:text-3xl text-kps-navy">
                {caseStudy.title}
              </H2>
              
              {/* Subtitle */}
              <Body className="text-lg font-medium text-neutral-800">
                {caseStudy.subtitle}
              </Body>

              {/* Description */}
              <Body className="text-neutral-700">
                {caseStudy.description}
              </Body>

              {/* Stats */}
              <div className="flex flex-wrap gap-2">
                {caseStudy.stats.map((stat, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-neutral-100 text-neutral-800 text-sm rounded-full"
                  >
                    {stat}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <Link href={`/case-studies/${caseStudy.id}`}>
                <Button className="w-full min-h-[44px]">
                  Read Full Case Study
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <Card className="mt-16 p-8 lg:p-12 text-center">
        <H2 className="text-2xl lg:text-3xl mb-6 text-kps-navy">
          Ready for Your Transformation?
        </H2>
        <Body className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
          Join the growing list of businesses that have achieved breakthrough results with The KPS Group. One partner. One system. No chaos.
        </Body>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="min-h-[44px]">
              Start Your Journey
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="min-h-[44px]">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export async function generateMetadata() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return {
    title: `Case Studies | ${brand.name}`,
    description: "Real transformations. Real results. See how Karson Lawrence and The KPS Group have helped businesses achieve breakthrough growth.",
    openGraph: {
      title: `Case Studies | ${brand.name}`,
      description: "Real transformations. Real results. See how Karson Lawrence and The KPS Group have helped businesses achieve breakthrough growth.",
      type: 'website',
    },
  };
}
