import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Information about how we use cookies and similar technologies on our website.',
  robots: { index: false, follow: false }
};

export default async function CookiesPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Cookie Policy</h1>
            <p className="text-xl text-neutral-700 mb-12 leading-relaxed">
              Information about how we use cookies and similar technologies on our website.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">What Are Cookies?</h2>
              <p className="text-neutral-700 mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. 
                They help websites remember information about your visit, such as your preferred language and other settings, which can 
                make your next visit easier and the site more useful to you.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">How We Use Cookies</h2>
              <p className="text-neutral-700 mb-4">
                The KPS Group uses cookies and similar technologies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track marketing campaign performance</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Essential Cookies</h3>
              <p className="text-neutral-700 mb-4">
                These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually 
                only set in response to actions made by you which amount to a request for services, such as setting your privacy 
                preferences, logging in, or filling in forms.
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Session management and security</li>
                <li>Load balancing and performance optimization</li>
                <li>User authentication and authorization</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Analytics Cookies</h3>
              <p className="text-neutral-700 mb-4">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. 
                They help us know which pages are the most and least popular and see how visitors move around the site.
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Google Analytics (to understand website usage patterns)</li>
                <li>Performance monitoring and error tracking</li>
                <li>User behavior analysis and site optimization</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Functional Cookies</h3>
              <p className="text-neutral-700 mb-4">
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by 
                third-party providers whose services we have added to our pages.
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Language and region preferences</li>
                <li>Form data retention</li>
                <li>User interface customization</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Marketing Cookies</h3>
              <p className="text-neutral-700 mb-4">
                These cookies may be set through our site by our advertising partners. They may be used by those companies to build 
                a profile of your interests and show you relevant advertisements on other sites.
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Social media integration and sharing</li>
                <li>Advertising campaign tracking</li>
                <li>Retargeting and remarketing</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Third-Party Cookies</h2>
              <p className="text-neutral-700 mb-4">
                Our website may contain links to third-party websites and services that may set their own cookies. We do not control 
                these cookies and are not responsible for their content or privacy practices. We encourage you to review the privacy 
                policies of these third-party services.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Common Third-Party Services</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>Google Ads:</strong> Advertising and conversion tracking</li>
                <li><strong>LinkedIn:</strong> Social media integration and advertising</li>
                <li><strong>Facebook:</strong> Social media integration and advertising</li>
                <li><strong>HubSpot:</strong> Marketing automation and lead tracking</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">Cookie Duration</h2>
              <p className="text-neutral-700 mb-4">
                Cookies have different lifespans:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
                <li><strong>First-Party Cookies:</strong> Set by our website directly</li>
                <li><strong>Third-Party Cookies:</strong> Set by external services and websites</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Managing Your Cookie Preferences</h2>
              <p className="text-neutral-700 mb-4">
                You have several options for managing cookies:
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Browser Settings</h3>
              <p className="text-neutral-700 mb-4">
                Most web browsers allow you to control cookies through their settings preferences. You can:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Block all cookies</li>
                <li>Allow cookies only from specific websites</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for different types of cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Cookie Consent</h3>
              <p className="text-neutral-700 mb-4">
                When you first visit our website, you will see a cookie consent banner that allows you to:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
                <li>Learn more about our cookie usage</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Opt-Out Options</h3>
              <p className="text-neutral-700 mb-4">
                For specific third-party services, you can opt out directly:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-kps-gold hover:text-kps-navy">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong>Google Ads:</strong> <a href="https://adssettings.google.com/" className="text-kps-gold hover:text-kps-navy">Google Ads Settings</a></li>
                <li><strong>Facebook:</strong> <a href="https://www.facebook.com/settings?tab=ads" className="text-kps-gold hover:text-kps-navy">Facebook Ad Preferences</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/psettings/guest-controls" className="text-kps-gold hover:text-kps-navy">LinkedIn Ad Preferences</a></li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <div className="prose prose-neutral max-w-none">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Impact of Disabling Cookies</h2>
              <p className="text-neutral-700 mb-4">
                Please note that disabling certain cookies may affect the functionality of our website:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-6">
                <li>Some features may not work properly</li>
                <li>You may need to re-enter information more frequently</li>
                <li>Personalized content and recommendations may not be available</li>
                <li>Website performance and user experience may be affected</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">Updates to This Policy</h2>
              <p className="text-neutral-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. 
                We will notify you of any material changes by posting the updated policy on our website and updating the 
                &quot;Last updated&quot; date.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-12 mb-6">Contact Us</h2>
              <p className="text-neutral-700 mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
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

          <div className="text-center bg-neutral-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Need Help with Cookie Settings?</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Our team is here to help you understand and manage your cookie preferences.
            </p>
            <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-xl bg-kps-navy text-white hover:bg-kps-navy/90 transition-colors font-medium">
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
