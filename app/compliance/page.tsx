import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { H1, H2, H3, Body } from '@kps/ui';

export const metadata = {
  title: 'Compliance & Legal',
  description: 'Information about our compliance with legal and regulatory requirements.',
  robots: { index: false, follow: false }
};

export default async function CompliancePage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <H1 className="mb-6">Compliance & Legal</H1>
            <p className="text-xl text-neutral-700 mb-12 leading-relaxed">
              Information about our compliance with legal and regulatory requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <H2 className="mb-6">Regulatory Compliance</H2>
              <p className="text-neutral-700 mb-4">
                The KPS Group is committed to maintaining the highest standards of legal and regulatory compliance across all 
                aspects of our business operations. We adhere to applicable federal, state, and local laws and regulations 
                governing our services and business practices.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Licensing and Certifications</h3>
              <p className="text-neutral-700 mb-4">
                Our team maintains appropriate professional licenses and certifications required for the services we provide:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Certified Public Accountant (CPA) licenses where applicable</li>
                <li>Professional certifications in relevant fields</li>
                <li>Business licenses and registrations</li>
                <li>Industry-specific certifications and memberships</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Data Protection and Privacy</h3>
              <p className="text-neutral-700 mb-4">
                We maintain compliance with data protection and privacy regulations including:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>General Data Protection Regulation (GDPR)</li>
                <li>California Consumer Privacy Act (CCPA)</li>
                <li>Health Insurance Portability and Accountability Act (HIPAA) where applicable</li>
                <li>Gramm-Leach-Bliley Act (GLBA) for financial services</li>
                <li>State-specific privacy laws and regulations</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <H2 className="mb-6">Financial Services Compliance</H2>
              <p className="text-neutral-700 mb-4">
                As providers of financial and business services, we maintain compliance with relevant financial regulations:
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Accounting and Bookkeeping</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Generally Accepted Accounting Principles (GAAP)</li>
                <li>Internal Revenue Service (IRS) regulations and requirements</li>
                <li>State tax laws and filing requirements</li>
                <li>Professional standards and ethics requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Payroll and HR Services</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Fair Labor Standards Act (FLSA) compliance</li>
                <li>Equal Employment Opportunity (EEO) regulations</li>
                <li>Family and Medical Leave Act (FMLA) requirements</li>
                <li>State-specific employment and labor laws</li>
                <li>Workers&apos; compensation and unemployment insurance requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Business Consulting</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Professional standards and ethics</li>
                <li>Industry-specific regulations and best practices</li>
                <li>Contract law and business formation requirements</li>
                <li>Intellectual property and trademark regulations</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <H2 className="mb-6">Security and Information Management</H2>
              <p className="text-neutral-700 mb-4">
                We implement comprehensive security measures to protect client information and maintain compliance with 
                security standards:
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Data Security</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure data centers and cloud infrastructure</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Incident response and disaster recovery procedures</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Information Management</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Document retention and disposal policies</li>
                <li>Confidentiality agreements and non-disclosure provisions</li>
                <li>Client data handling and processing procedures</li>
                <li>Regular compliance audits and reviews</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <H2 className="mb-6">Professional Standards and Ethics</H2>
              <p className="text-neutral-700 mb-4">
                We maintain the highest standards of professional conduct and ethical behavior:
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Code of Conduct</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Integrity and honesty in all business dealings</li>
                <li>Confidentiality and client privacy protection</li>
                <li>Conflict of interest avoidance and disclosure</li>
                <li>Professional competence and continuing education</li>
                <li>Fair and ethical treatment of all stakeholders</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Quality Assurance</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Regular internal quality reviews and audits</li>
                <li>Client feedback and satisfaction monitoring</li>
                <li>Continuous improvement processes</li>
                <li>Professional development and training programs</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <H2 className="mb-6">Insurance and Liability</H2>
              <p className="text-neutral-700 mb-4">
                We maintain appropriate insurance coverage to protect our clients and our business:
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Professional Liability Insurance</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Errors and omissions (E&O) coverage</li>
                <li>Professional liability protection</li>
                <li>Cyber liability and data breach coverage</li>
                <li>General liability insurance</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Bonding and Fidelity</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Employee dishonesty and fidelity bonds</li>
                <li>Client fund protection measures</li>
                <li>Secure payment processing and handling</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <H2 className="mb-6">Regulatory Updates and Changes</H2>
              <p className="text-neutral-700 mb-4">
                We actively monitor regulatory changes and updates that may affect our services or client obligations:
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Monitoring and Updates</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Regular review of applicable laws and regulations</li>
                <li>Industry association memberships and updates</li>
                <li>Professional development and continuing education</li>
                <li>Client communication about relevant changes</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Compliance Reporting</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Regular compliance assessments and reporting</li>
                <li>Internal audit procedures and documentation</li>
                <li>Regulatory filing and reporting requirements</li>
                <li>Client compliance support and guidance</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <H2 className="mb-6">Contact Information</H2>
              <p className="text-neutral-700 mb-4">
                For questions about our compliance practices or to request additional information, please contact us:
              </p>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <p className="text-neutral-700">
                  <strong>The KPS Group</strong><br />
                  5900 Balcones Drive, Suite 100<br />
                  Austin, Texas 78731<br />
                  <strong>Email:</strong> {brand.contact.email}<br />
                  <strong>Phone:</strong> {brand.contact.phone}
                </p>
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Compliance Officer</h3>
              <p className="text-neutral-700 mb-4">
                For specific compliance inquiries or concerns, please contact our compliance officer directly.
              </p>
            </div>
          </div>

          <div className="text-center bg-neutral-50 rounded-xl p-8">
                          <H2 className="mb-4">Questions About Compliance?</H2>
            <p className="text-lg text-neutral-700 mb-6">
              Our compliance team is here to help you understand our practices and address any concerns.
            </p>
            <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-xl bg-kps-navy text-white hover:bg-kps-navy/90 transition-colors font-medium">
              Contact Compliance Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}