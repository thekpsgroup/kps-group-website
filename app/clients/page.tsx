import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { ClientShowcase, H1, Body, Card, Button } from '@kps/ui';
import Link from 'next/link';

const CLIENTS = [
  {
    name: "Urban Designs",
    logo: "/assets/clients/urban-designs.png",
    industry: "Interior Design & Construction",
    testimonial: "The KPS Group was incredibly helpful! Karson took the time to understand our needs and helped modernize our tools, marketing, and accounting systems. Super knowledgeable, easy to work with, and genuinely cares about helping businesses grow."
  },
  {
    name: "LCC",
    logo: "/assets/clients/lcc.png",
    industry: "Legal Services",
    testimonial: "Karson helped modernize our systems and processes. The transformation has been remarkable for our practice."
  },
  {
    name: "RCJ Removal",
    logo: "/assets/clients/rcj-removal.png",
    industry: "Junk Removal & Hauling",
    testimonial: "The KPS Group transformed our operations and helped us scale efficiently. Their integrated approach made all the difference."
  },
  {
    name: "Proactive",
    logo: "/assets/clients/proactive.png",
    industry: "Technology Solutions",
    testimonial: "Working with Karson and The KPS Group has been a game-changer for our business. Their strategic insights and operational improvements have driven real results."
  },
  {
    name: "Ironclad",
    logo: "/assets/clients/ironclad.png",
    industry: "Manufacturing & Industrial",
    testimonial: "The KPS Group helped us build a modern back office that supports our growth. Their expertise in operations and finance has been invaluable."
  },
  {
    name: "TND",
    logo: "/assets/clients/tnd.png",
    industry: "Professional Services",
    testimonial: "Karson's approach to business transformation is both strategic and practical. We've seen measurable improvements across all areas of our business."
  },
  {
    name: "Ornate A & Trackline",
    logo: "/assets/clients/ornate-trackline.png",
    industry: "Transportation & Logistics",
    testimonial: "The KPS Group's integrated solutions have streamlined our operations and improved our bottom line significantly."
  },
  {
    name: "Skyline & Moonlight",
    logo: "/assets/clients/skyline-moonlight.png",
    industry: "Real Estate & Development",
    testimonial: "Working with The KPS Group has been transformative. Their expertise in business systems and growth strategies has helped us scale effectively."
  }
];

export default async function ClientsPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-12 lg:pb-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <H1 className="mb-6 text-4xl lg:text-5xl xl:text-6xl">
          Our Clients
        </H1>
        <Body className="text-xl lg:text-2xl text-neutral-700 max-w-4xl mx-auto">
          Trusted by businesses across industries to transform their operations and achieve breakthrough growth.
        </Body>
      </div>

      {/* Client Showcase with Testimonials */}
      <ClientShowcase
        title="Success Stories"
        subtitle="Real results from real businesses. See how we've helped companies across industries achieve their goals."
        clients={CLIENTS}
        showTestimonials={true}
      />

      {/* Industry Focus */}
      <Card className="mt-16 p-8 lg:p-12">
        <div className="text-center mb-12">
          <H1 className="text-3xl lg:text-4xl mb-6 text-kps-navy">
            Industries We Serve
          </H1>
          <Body className="text-lg text-neutral-700 max-w-3xl mx-auto">
            From construction to technology, we&apos;ve helped businesses across diverse industries build modern, scalable operations.
          </Body>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Construction & Trades", count: "25+ clients", description: "HVAC, electrical, plumbing, and specialty contractors" },
            { name: "Professional Services", count: "20+ clients", description: "Legal, accounting, consulting, and advisory firms" },
            { name: "Manufacturing", count: "15+ clients", description: "Industrial, consumer goods, and specialty manufacturing" },
            { name: "Technology", count: "12+ clients", description: "Software, services, and technology solutions" },
            { name: "Real Estate", count: "10+ clients", description: "Development, property management, and real estate services" },
            { name: "Transportation", count: "8+ clients", description: "Logistics, hauling, and transportation services" }
          ].map((industry) => (
            <div key={industry.name} className="text-center p-6 bg-neutral-100 rounded-lg">
              <Body className="text-xl font-semibold text-kps-navy mb-2">
                {industry.name}
              </Body>
              <Body className="text-2xl font-bold text-kps-navy mb-2">
                {industry.count}
              </Body>
              <Body className="text-neutral-700 text-sm">
                {industry.description}
              </Body>
            </div>
          ))}
        </div>
      </Card>

      {/* CTA Section */}
      <Card className="mt-16 p-8 lg:p-12 text-center">
        <H1 className="text-2xl lg:text-3xl mb-6 text-kps-navy">
          Ready to Join Our Success Stories?
        </H1>
        <Body className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
          Join the growing list of businesses that have achieved breakthrough results with The KPS Group. One partner. One system. No chaos.
        </Body>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg">
              Start Your Transformation
            </Button>
          </Link>
          <Link href="/case-studies">
            <Button variant="outline" size="lg">
              View Case Studies
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
    title: `Our Clients | ${brand.name}`,
    description: "Trusted by businesses across industries to transform their operations and achieve breakthrough growth. See our success stories.",
    openGraph: {
      title: `Our Clients | ${brand.name}`,
      description: "Trusted by businesses across industries to transform their operations and achieve breakthrough growth.",
      type: 'website',
    },
  };
}
