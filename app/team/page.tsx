import { headers } from 'next/headers';
import Image from 'next/image';
import { resolveBrand } from '@kps/config';
import { getContent } from '@kps/content';
import { CTASection } from '@kps/ui';
import { sendLead } from '../actions/sendLead';
import { generateSEO } from '../../lib/seo';

export const metadata = generateSEO({
  title: 'Our Team',
  description: "Meet the team behind The KPS Group. Experienced professionals dedicated to transforming your business operations."
});

// Team member data with real photos and information
const TEAM_MEMBERS = [
  {
    name: "Karson Lawrence",
    role: "Chief Executive Officer (CEO)",
    bio: "Karson is the Founder & CEO of The KPS Group, where he leads strategy, innovation, and growth across all business lines. With a background in enterprise sales at companies like IBM, Microsoft, and PwC, he brings a unique blend of big-tech expertise and entrepreneurial vision. Karson specializes in transforming operational chaos into scalable systems, helping service-based businesses unlock efficiency and profitability. His leadership centers on pragmatic problem-solving and building future-ready organizations.",
    image: "/assets/team/karson.jpg",
    specialties: ["Business Strategy", "Revenue Systems", "Team Building"],
    experience: "15+ years in enterprise sales and business consulting"
  },
  {
    name: "Brandon Gibson",
    role: "Chief Revenue Officer (CRO)",
    bio: "Brandon serves as CRO of The KPS Group, driving revenue strategy, partnerships, and client success. With a proven track record of scaling sales operations, he brings a data-driven approach to building repeatable revenue engines. Brandon focuses on aligning sales execution with operational delivery, ensuring every client engagement translates into measurable results. His work emphasizes sustainable growth models, turning process discipline into competitive advantage.",
    image: "/assets/team/brandon.jpg",
    specialties: ["Revenue Operations", "Client Success", "Team Coordination"],
    experience: "12+ years in operations and client management"
  },
  {
    name: "Allie Banks",
    role: "Chief Administrative Officer (CAO)",
    bio: "Allie is the CAO of The KPS Group, where she oversees backend operations and marketing. She brings nearly a decade of experience from ADP, the world’s largest PEO, where she developed deep expertise in HR compliance, payroll, and organizational infrastructure. At KPS, Allie drives operational excellence and brand positioning, ensuring the company’s internal systems and external presence operate with precision. Her leadership bridges strategy and execution, making growth both sustainable and scalable.",
    image: "/assets/team/CAO-Allie.jpg",
    specialties: ["System Integration", "Administration", "Infrastructure"],
    experience: "10+ years in administrative management and operations"
  }
];

export default async function TeamPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);



  return (
    <>
      <section className="section-padding bg-gradient-secondary relative overflow-hidden">
        {/* Enhanced background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-kps-navy/5 rounded-full blur-3xl -translate-x-32 -translate-y-32 float" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-kps-gold/5 rounded-full blur-3xl translate-x-32 translate-y-32 float-delayed" aria-hidden="true"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-kps-navy/3 rounded-full blur-3xl float-slow" aria-hidden="true"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our Team
            </h1>
                         <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
               The people behind The KPS Group. We&apos;re not just consultants—we&apos;re operators who&apos;ve lived the problems we solve.
             </p>
          </div>

          {/* Team Story Section */}
          <div className="max-w-4xl mx-auto mb-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-200">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
                Why We Built This Team
              </h2>
              <div className="text-neutral-700 leading-relaxed text-lg space-y-6">
                                 <p>
                   We didn&apos;t hire consultants who read about business problems in books. We hired people who&apos;ve lived them. Every member of our team has been in the trenches—either running their own businesses or working with hundreds of small business owners.
                 </p>
                                 <p>
                   That&apos;s why our solutions work. We&apos;ve been where you are. We know what it feels like to have five different vendors pointing fingers at each other. We know the frustration of tools that don&apos;t talk to each other. And we know the relief of finally having one team that owns everything.
                 </p>
                <p>
                  Our team is small by design. We believe in deep expertise over broad coverage. Each person on our team is a specialist in their domain, but they work together like a well-oiled machine. When you call us, you get the person who knows your problem best—not a junior consultant reading from a script.
                </p>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={member.name}
                className="group card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Enhanced hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-kps-navy/5 to-kps-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" aria-hidden="true"></div>
                
                <div className="relative z-10">
                  {/* Team member photo */}
                  <div className="mb-6">
                    <div className="relative mx-auto rounded-full overflow-hidden bg-gradient-to-br from-kps-navy to-kps-gold p-1 group-hover:scale-105 transition-transform duration-300 shadow-xl w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 8rem, (max-width: 768px) 9rem, (max-width: 1024px) 10rem, (max-width: 1280px) 12rem, 14rem"
                          className="object-cover object-center rounded-full"
                          priority={false}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Team member info */}
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2 group-hover:text-kps-navy transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-lg text-kps-navy font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    
                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neutral-700 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-kps-gold/20 text-kps-navy text-sm rounded-full font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Experience */}
                    <p className="text-sm text-neutral-500 italic">
                      {member.experience}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="max-w-4xl mx-auto mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-200">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Numbers Over Narratives</h3>
                                     <p className="text-neutral-700">
                     We show the math: pipeline, conversion, margin, cash. No fluff, no buzzwords—just the truth about what&apos;s working and what isn&apos;t.
                   </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Pragmatism Always</h3>
                  <p className="text-neutral-700">
                    Fewer tools, clearer process, disciplined execution. We believe in simple solutions that work in the real world.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">One Accountable Partner</h3>
                  <p className="text-neutral-700">
                    If it touches the back office, we own it. No finger-pointing between vendors. When something breaks, you call us.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Compounding Value</h3>
                                     <p className="text-neutral-700">
                     Every piece makes the others stronger—by design. The Modern Suite isn&apos;t just a collection of services; it&apos;s an integrated system.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        brand={brand} 
        flavor={brand.flavor} 

      />
    </>
  );
}
