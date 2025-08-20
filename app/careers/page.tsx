export const metadata = {
  title: 'Careers',
  description: 'Join a team building pragmatic, modern back-office systems for small businesses.',
  robots: {
    index: false,
    follow: true
  }
};

import { H1, H2, H3, Body, Button } from '@kps/ui';

export default function Page() {
  return (
    <div className="container mx-auto pt-28 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <H1 className="mb-6">Join Our Team</H1>
        <p className="text-xl text-neutral-700 mb-12 leading-relaxed">
          We&apos;re building pragmatic, modern back-office systems that help small businesses thrive. 
          Join us in creating solutions that make a real difference.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
            <H2 className="mb-4">Our Mission</H2>
            <p className="text-neutral-700 mb-4">
              We believe every business deserves access to professional-grade back-office systems. 
              Our team works to democratize these essential tools and processes.
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>• Remote-first culture with flexible hours</li>
              <li>• Competitive compensation and benefits</li>
              <li>• Continuous learning and development</li>
              <li>• Impact-driven work environment</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
            <H2 className="mb-4">Current Openings</H2>
            <p className="text-neutral-700 mb-4">
              We&apos;re always looking for talented individuals who share our passion for helping businesses succeed.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-kps-gold pl-4">
                <h3 className="font-semibold text-neutral-900">Senior Accountant</h3>
                <p className="text-sm text-neutral-600">Full-time • Remote</p>
              </div>
              <div className="border-l-4 border-kps-gold pl-4">
                <h3 className="font-semibold text-neutral-900">Business Operations Specialist</h3>
                <p className="text-sm text-neutral-600">Full-time • Remote</p>
              </div>
              <div className="border-l-4 border-kps-gold pl-4">
                <h3 className="font-semibold text-neutral-900">Technology Consultant</h3>
                <p className="text-sm text-neutral-600">Contract • Remote</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center bg-neutral-50 rounded-xl p-8">
          <H2 className="mb-4">Interested in Joining Us?</H2>
          <p className="text-lg text-neutral-700 mb-6">
            Even if you don&apos;t see a specific role that fits, we&apos;d love to hear from you. 
            Send us your resume and let&apos;s discuss how you can contribute to our mission.
          </p>
          <Button asChild>
            <a href="/contact">
              Send Your Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
