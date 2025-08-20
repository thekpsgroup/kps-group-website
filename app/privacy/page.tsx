import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How we collect, use, and protect your information, including SMS communication terms.'
};

export default async function PrivacyPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-neutral-600">
              Last updated: December 2024
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
            <div className="prose prose-neutral max-w-none">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Introduction
              </h2>
              <p className="text-neutral-700 mb-4">
                The KPS Group (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Information We Collect
              </h2>
              <p className="text-neutral-700 mb-4">
                We collect information you provide directly to us, such as when you fill out contact forms, request information, or communicate with us.
              </p>
              
              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
                Personal Information
              </h3>
              <p className="text-neutral-700 mb-4">
                We may collect personal information including:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Name and contact information (email, phone number, mailing address)</li>
                <li>Company information and business details</li>
                <li>Service interests and requirements</li>
                <li>Communication preferences</li>
                <li>Payment and billing information</li>
                <li>Professional credentials and experience</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
                Automatically Collected Information
              </h3>
              <p className="text-neutral-700 mb-4">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                How We Use Your Information
              </h2>
              <p className="text-neutral-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Process payments and maintain financial records</li>
                <li>Comply with legal obligations</li>
                <li>Protect our rights and prevent fraud</li>
                <li>Analyze website usage and improve user experience</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                SMS Communications
              </h2>
              <p className="text-neutral-700 mb-4">
                By providing your phone number and consenting to SMS communications, you agree to receive 
                informational and promotional messages from The KPS Group. You can opt out at any time by 
                replying &quot;STOP&quot; to any message. Message and data rates may apply. SMS consent is not shared with third parties.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Information Sharing
              </h2>
              <p className="text-neutral-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                except as described in this policy or with your consent. We may share information with:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Service providers who assist in our operations (payment processors, hosting providers, analytics services)</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>Business partners with your explicit consent</li>
                <li>Professional advisors and consultants under confidentiality agreements</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Data Security
              </h2>
              <p className="text-neutral-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, 
                access controls, and regular security assessments.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Data Retention
              </h2>
              <p className="text-neutral-700 mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, 
                we will securely delete or anonymize it.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Your Rights
              </h2>
              <p className="text-neutral-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Opt out of marketing communications</li>
                <li>File a complaint with relevant authorities</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-neutral-700 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, 
                and provide personalized content. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Children&apos;s Privacy
              </h2>
              <p className="text-neutral-700 mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information 
                from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                International Data Transfers
              </h2>
              <p className="text-neutral-700 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards 
                are in place to protect your information in accordance with this Privacy Policy and applicable laws.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Changes to This Privacy Policy
              </h2>
              <p className="text-neutral-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new 
                Privacy Policy on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after such 
                changes constitutes acceptance of the updated Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Contact Us
              </h2>
              <p className="text-neutral-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}