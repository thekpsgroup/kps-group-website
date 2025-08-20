import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';

export const metadata = {
  title: 'GDPR Compliance',
  description: 'Information about our data protection practices and your rights under GDPR.',
  robots: { index: false, follow: false }
};

export default async function GDPRPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">GDPR Compliance</h1>
            <p className="text-xl text-neutral-700 mb-12 leading-relaxed">
              We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">GDPR Overview</h2>
              <p className="text-neutral-700 mb-4">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that applies to organizations 
                processing personal data of individuals in the European Union (EU) and European Economic Area (EEA). The KPS Group 
                is committed to ensuring compliance with GDPR requirements and protecting the privacy rights of all individuals.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">Legal Basis for Processing</h2>
              <p className="text-neutral-700 mb-4">
                We process personal data under the following legal bases as defined by GDPR:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li><strong>Consent:</strong> When you explicitly agree to the processing of your personal data</li>
                <li><strong>Contract Performance:</strong> When processing is necessary to fulfill our contractual obligations</li>
                <li><strong>Legitimate Interest:</strong> When processing is necessary for our legitimate business interests</li>
                <li><strong>Legal Obligation:</strong> When processing is required by applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">Your Rights Under GDPR</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-kps-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-kps-gold text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Right to Access</h3>
                      <p className="text-sm text-neutral-700">Request a copy of your personal data and information about how it&apos;s processed.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-kps-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-kps-gold text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Right to Rectification</h3>
                      <p className="text-sm text-neutral-700">Request correction of inaccurate or incomplete personal data.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-kps-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-kps-gold text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Right to Erasure</h3>
                      <p className="text-sm text-neutral-700">Request deletion of your personal data under certain circumstances.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-kps-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-kps-gold text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Right to Portability</h3>
                      <p className="text-sm text-neutral-700">Receive your personal data in a structured, machine-readable format.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-kps-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-kps-gold text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Right to Object</h3>
                      <p className="text-sm text-neutral-700">Object to processing of your personal data for specific purposes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-kps-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-kps-gold text-sm font-bold">6</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Right to Restriction</h3>
                      <p className="text-sm text-neutral-700">Request restriction of processing under certain conditions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Data Processing Activities</h2>
              <p className="text-neutral-700 mb-4">
                We process personal data for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Providing business consulting and professional services</li>
                <li>Managing client relationships and communications</li>
                <li>Processing payments and maintaining financial records</li>
                <li>Marketing and promotional activities (with consent)</li>
                <li>Compliance with legal and regulatory obligations</li>
                <li>Website analytics and improvement</li>
                <li>Security and fraud prevention</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">Data Retention</h2>
              <p className="text-neutral-700 mb-4">
                We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, 
                comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary based on 
                the type of data and purpose of processing.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">International Data Transfers</h2>
              <p className="text-neutral-700 mb-4">
                Your personal data may be transferred to and processed in countries outside the EU/EEA. We ensure appropriate 
                safeguards are in place, including:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Adequacy decisions by the European Commission</li>
                <li>Standard contractual clauses approved by the European Commission</li>
                <li>Binding corporate rules</li>
                <li>Other appropriate safeguards as required by GDPR</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">Data Security</h2>
              <p className="text-neutral-700 mb-4">
                We implement appropriate technical and organizational measures to protect personal data against unauthorized 
                access, alteration, disclosure, or destruction, including:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security assessments and audits</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">How to Exercise Your Rights</h2>
              <p className="text-neutral-700 mb-6">
                To exercise any of your GDPR rights, please contact us using the information below. We will respond to your 
                request within 30 days, unless additional time is required due to the complexity of the request.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neutral-50 rounded-lg p-6">
                  <h3 className="font-semibold text-neutral-900 mb-3">Email</h3>
                  <a href="mailto:sales@thekpsgroup.com" className="text-kps-gold hover:text-kps-navy">sales@thekpsgroup.com</a>
                  <p className="text-sm text-neutral-600 mt-2">Subject line: &quot;GDPR Rights Request&quot;</p>
                </div>
                
                <div className="bg-neutral-50 rounded-lg p-6">
                  <h3 className="font-semibold text-neutral-900 mb-3">Phone</h3>
                  <a href="tel:469-458-6966" className="text-kps-gold hover:text-kps-navy">469-458-6966</a>
                  <p className="text-sm text-neutral-600 mt-2">Ask for the Data Protection Officer</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Required Information</h3>
              <p className="text-neutral-700 mb-4">
                When submitting a request, please include:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Your full name and contact information</li>
                <li>Description of the right you wish to exercise</li>
                <li>Specific details about the data or processing in question</li>
                <li>Any relevant account or reference numbers</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Verification</h3>
              <p className="text-neutral-700 mb-4">
                We may need to verify your identity before processing your request. This helps ensure that personal data 
                is not disclosed to unauthorized individuals.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Data Protection Officer</h2>
              <p className="text-neutral-700 mb-4">
                We have designated a Data Protection Officer (DPO) to oversee our GDPR compliance efforts and handle 
                data protection inquiries. You can contact our DPO directly for any questions about our data processing 
                activities or to exercise your rights.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">Supervisory Authority</h2>
              <p className="text-neutral-700 mb-4">
                You have the right to lodge a complaint with a supervisory authority in the EU/EEA member state where 
                you reside, work, or where the alleged infringement occurred. However, we encourage you to contact us 
                first so we can address your concerns directly.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">Updates to This Policy</h2>
              <p className="text-neutral-700 mb-4">
                We may update this GDPR compliance information from time to time to reflect changes in our practices 
                or applicable laws. We will notify you of any material changes by posting the updated information on 
                our website.
              </p>
            </div>
          </div>

          <div className="text-center bg-neutral-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Questions About GDPR?</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Our privacy team is here to help you understand your rights and our data protection practices.
            </p>
            <div className="bg-white p-4 rounded-lg mb-6">
              <p className="text-neutral-700">
                <strong>The KPS Group</strong><br />
                5900 Balcones Drive, Suite 100<br />
                Austin, Texas 78731<br />
                <strong>Email:</strong> {brand.contact.email}<br />
                <strong>Phone:</strong> {brand.contact.phone}
              </p>
            </div>
            <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-xl bg-kps-navy text-white hover:bg-kps-navy/90 transition-colors font-medium">
              Contact Privacy Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
