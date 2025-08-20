import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { CaseStudy } from '@kps/ui';

export default async function InsulationContractorCaseStudy() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return (
    <CaseStudy
      title="From $9M Plateau to 3X Growth: A 20-Year Business Revitalized"
      subtitle="How Karson Lawrence and The KPS Group uncovered $200K in hidden savings and rebuilt a company's operating system in just 6 months."
      heroStats={[
        { value: "$200K", label: "savings in 60 days" },
        { value: "3X", label: "projected revenue in 12 months" },
        { value: "20 years", label: "revitalized" }
      ]}
      problem={
        <div className="space-y-4">
          <p>
            For nearly 20 years, a New Jersey–based insulation contractor had built a reputation and grown to $9M annually. But inside, books were messy, leadership cadence was absent, and culture had stalled. Despite hard work, growth was stuck.
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-800">
            <li>Unclear financials with no real-time visibility into profitability</li>
            <li>Bloated costs hidden across multiple vendors and systems</li>
            <li>Lack of leadership rhythm and accountability</li>
            <li>Stagnant culture with no clear path forward</li>
            <li>Revenue plateau despite market opportunities</li>
          </ul>
        </div>
      }
      solution={
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-kps-navy mb-3">Financial Clean-Up</h3>
            <p>Within 60 days, uncovered $200K in savings through systematic cost analysis and vendor consolidation.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-kps-navy mb-3">Consulting & Culture Shift</h3>
            <p>Weekly Zoom leadership meetings + monthly on-site sessions led by Karson Lawrence to rebuild operating rhythm.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-kps-navy mb-3">Strategic Alignment</h3>
            <p>Implemented scorecards, KPIs, and accountability systems to drive consistent performance and growth.</p>
          </div>
        </div>
      }
      results={
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-neutral-800">
            <li><strong>$200K in savings identified</strong> within 60 days</li>
            <li><strong>Cultural turnaround</strong> from complacency to energized and accountable</li>
            <li><strong>Record-breaking weekly revenue</strong> within 6 months</li>
            <li><strong>On track to triple annual revenue</strong> this year</li>
            <li>Clear financial visibility and decision-making framework</li>
            <li>Established leadership cadence and accountability systems</li>
          </ul>
        </div>
      }
      takeaway={
        <p>
          This wasn&apos;t about software or working harder. It was about clarity, cadence, and culture. With financial truth, leadership rhythm, and accountability, The KPS Group gave a 20-year-old business its second wind—and its path to scale.
        </p>
      }
      pullQuotes={[
        "Within six months, they were generating more weekly revenue than ever before.",
        "With $200K uncovered in 60 days, the business found its second wind."
      ]}
    />
  );
}

export async function generateMetadata() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return {
    title: `Case Study: Insulation Contractor Transformation | ${brand.name}`,
    description: "How Karson Lawrence and The KPS Group uncovered $200K in hidden savings and rebuilt a company's operating system in just 6 months.",
    openGraph: {
      title: `Case Study: Insulation Contractor Transformation | ${brand.name}`,
      description: "From $9M plateau to 3X growth: A 20-year business revitalized through financial clarity and leadership rhythm.",
      type: 'article',
    },
  };
}
