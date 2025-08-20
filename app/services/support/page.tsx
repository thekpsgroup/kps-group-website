export const metadata = {
  title: 'Support',
  description: 'Ongoing support to keep your systems running smoothly and your team productive.'
};

export default function Page() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="heading-2 text-neutral-900 mb-4">Ongoing Support</h1>
          <p className="text-neutral-700 text-lg leading-relaxed mb-8">
            Dedicated support for your brand, finance, payroll, and technology—one partner, accountable for outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">What We Cover</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>Site/content updates and QA</li>
              <li>Payroll and accounting support</li>
              <li>Helpdesk and device management</li>
              <li>Vendor and app administration</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">Response & SLAs</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>Business-hours response, priority channels</li>
              <li>Change windows and rollback plans</li>
              <li>Status page and incident reports</li>
              <li>Quarterly reviews and roadmap</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-xl bg-kps-navy text-white hover:bg-kps-navy/90 focus:ring-2 focus:ring-kps-navy focus:ring-offset-2">
            Talk to Support
          </a>
        </div>
      </div>
    </section>
  );
}
