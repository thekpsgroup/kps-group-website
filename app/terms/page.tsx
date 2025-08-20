import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';

export const metadata = {
  title: 'Terms of Service',
  description: 'The terms governing your use of our services, agreements, and limitations of liability.'
};

export default async function TermsPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-neutral-600">
              Last updated: December 2024
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
            <div className="prose prose-neutral max-w-none">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Agreement to Terms
              </h2>
              <p className="text-neutral-700 mb-4">
                By accessing and using the services provided by The KPS Group (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
                you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any 
                part of these terms, you may not access our services.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Services Description
              </h2>
              <p className="text-neutral-700 mb-4">
                The KPS Group provides professional business services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Business consulting and strategic advisory services</li>
                <li>Financial services including bookkeeping and accounting</li>
                <li>Payroll and human resources solutions</li>
                <li>Brand development and marketing services</li>
                <li>Technology services and IT consulting</li>
                <li>Business automation and process optimization</li>
                <li>Compliance and regulatory advisory services</li>
              </ul>
              <p className="text-neutral-700 mb-4">
                The specific services provided will be outlined in separate service agreements or statements of work.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                User Responsibilities
              </h2>
              <p className="text-neutral-700 mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Provide accurate, complete, and current information</li>
                <li>Maintain the security of your account information and credentials</li>
                <li>Use our services in compliance with applicable laws and regulations</li>
                <li>Not engage in any fraudulent, harmful, or illegal activities</li>
                <li>Respect intellectual property rights and proprietary information</li>
                <li>Cooperate with reasonable requests for information and documentation</li>
                <li>Maintain appropriate insurance coverage as required by law</li>
                <li>Notify us promptly of any material changes to your business or circumstances</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Payment Terms
              </h2>
              <p className="text-neutral-700 mb-4">
                Payment terms will be specified in individual service agreements. All fees are due according to the agreed-upon schedule. 
                Late payments may result in service suspension or termination. We reserve the right to charge interest on overdue amounts 
                at the rate of 1.5% per month or the maximum rate permitted by law.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Intellectual Property
              </h2>
              <p className="text-neutral-700 mb-4">
                All content, trademarks, service marks, trade names, logos, and intellectual property on our website and in our services 
                are owned by The KPS Group or our licensors. You may not use, reproduce, distribute, or create derivative works of this 
                content without our written permission.
              </p>
              <p className="text-neutral-700 mb-4">
                Work product created specifically for you under a service agreement will be subject to the terms of that agreement.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Confidentiality
              </h2>
              <p className="text-neutral-700 mb-4">
                Both parties agree to maintain the confidentiality of proprietary and sensitive information shared during the course of 
                our engagement. This obligation survives termination of these Terms and any service agreements.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Limitation of Liability
              </h2>
              <p className="text-neutral-700 mb-4">
                To the maximum extent permitted by law, The KPS Group shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising from your use of our services, including but not limited to lost profits, 
                lost data, business interruption, or any other commercial damages or losses.
              </p>
              <p className="text-neutral-700 mb-4">
                Our total liability to you for any claims arising from these Terms or our services shall not exceed the amount paid 
                by you to us in the twelve (12) months preceding the claim.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Indemnification
              </h2>
              <p className="text-neutral-700 mb-4">
                You agree to indemnify, defend, and hold harmless The KPS Group and its officers, directors, employees, and agents 
                from and against any claims, damages, losses, liabilities, costs, and expenses arising from your use of our services 
                or violation of these Terms.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Disclaimers
              </h2>
              <p className="text-neutral-700 mb-4">
                Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. 
                We disclaim all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, 
                and non-infringement.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Termination
              </h2>
              <p className="text-neutral-700 mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including 
                breach of these Terms. Upon termination, your right to use our services will cease immediately, and you must return 
                or destroy any confidential information in your possession.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Force Majeure
              </h2>
              <p className="text-neutral-700 mb-4">
                Neither party shall be liable for any failure or delay in performance under these Terms due to circumstances beyond 
                their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, government 
                actions, or other events of force majeure.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Governing Law and Jurisdiction
              </h2>
              <p className="text-neutral-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to 
                its conflict of law provisions. Any disputes arising from these Terms or our services shall be resolved in the state 
                or federal courts located in Travis County, Texas.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Severability
              </h2>
              <p className="text-neutral-700 mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated 
                to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Entire Agreement
              </h2>
              <p className="text-neutral-700 mb-4">
                These Terms constitute the entire agreement between you and The KPS Group regarding the subject matter hereof and 
                supersede all prior or contemporaneous communications, proposals, and agreements, whether oral or written.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Changes to Terms
              </h2>
              <p className="text-neutral-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the 
                new Terms on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after such 
                changes constitutes acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">
                Contact Information
              </h2>
              <p className="text-neutral-700 mb-4">
                If you have questions about these Terms of Service, please contact us:
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