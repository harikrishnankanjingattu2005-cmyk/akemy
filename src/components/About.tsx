import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  fullBio: string;
  skills: string[];
}

const About: React.FC = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const team: TeamMember[] = [
    {
      name: 'Steve Vijay',
      role: 'Content Creator | Creative Strategist | Video Editor',
      bio: 'Creative strategist specializing in social media growth, short-form video editing, and visual storytelling that drives engagement.',
      fullBio:
        'Steve Vijay is a content creator and creative strategist with a passion for visual storytelling. With expertise in Instagram growth, Reel production, and audience retention, Steve crafts compelling narratives that resonate with audiences. His approach combines data-driven strategy with authentic creative vision, helping brands build loyal communities and achieve measurable results.',
      skills: [
        'Social Strategy',
        'Short-Form Editing',
        'Photography/Videography',
        'IG Growth',
        'Audience Retention',
        'Content Scheduling',
        'Visual Branding',
        'Storytelling',
      ],
    },
    {
      name: 'Fidha Farook',
      role: 'Graphic Designer | UI/UX Designer | AI/ML Enthusiast',
      bio: 'AI/ML enthusiast and designer who bridges creativity with technology, specializing in design systems and intelligent automation.',
      fullBio:
        'Fidha Farook is a multidisciplinary designer with deep expertise in UI/UX design, graphic design, and AI/ML development. With research background in AI safety and bias auditing, Fidha brings a thoughtful, human-centered approach to product design. As co-founder of ComponentAI, she explores the intersection of artificial intelligence and design thinking, creating solutions that are both beautiful and ethical.',
      skills: [
        'Graphic Design',
        'UI/UX Design',
        'AI/ML Development',
        'Front-End Dev',
        'Photography',
        'Design Research',
        'AI Product Design',
        'Cross-Disciplinary Collaboration',
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#1e2342] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f5ebd9] mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-[#f5ebd9]/80 max-w-2xl mx-auto">
            Creative expertise meets technical innovation. Two founders united by a vision to transform businesses.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="animate-slide-left"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Member Card */}
              <div className="bg-[#f5ebd9] rounded-xl overflow-hidden shadow-xl card-hover">
                {/* Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-[#c9a15d]/30 to-[#1e2342]/10 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-[#1e2342]/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-[#1e2342]/50">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1e2342] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#c9a15d] font-semibold mb-4 text-sm">
                    {member.role}
                  </p>

                  <p className="text-[#2c2f4a] text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Bio Expansion Button */}
                  <button
                    onClick={() =>
                      setExpandedMember(
                        expandedMember === member.name ? null : member.name
                      )
                    }
                    className="text-[#1e2342] font-semibold text-sm flex items-center gap-2 hover:text-[#c9a15d] transition-colors mb-6"
                  >
                    {expandedMember === member.name ? 'Show Less' : 'Read Full Bio'}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        expandedMember === member.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Full Bio */}
                  {expandedMember === member.name && (
                    <div className="mb-6 pb-6 border-b-2 border-[#1e2342]/10 animate-fade-in">
                      <p className="text-[#2c2f4a] text-sm leading-relaxed">
                        {member.fullBio}
                      </p>
                    </div>
                  )}

                  {/* Skills */}
                  <div>
                    <p className="text-xs font-bold text-[#1e2342] mb-3 uppercase tracking-wide">
                      Core Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-[#1e2342]/10 text-[#1e2342] rounded-full text-xs font-medium hover:bg-[#1e2342]/20 transition-colors animate-fade-in"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Akemy Section */}
        <div className="bg-gradient-to-r from-[#c9a15d]/10 to-[#f5ebd9]/10 rounded-xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#f5ebd9] mb-6">
            Why Akemy?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Dual Expertise',
                description:
                  'Creative excellence paired with technical innovation — the best of both worlds.',
              },
              {
                title: 'Data-Driven Strategy',
                description:
                  'Every decision backed by analytics, insights, and measurable results.',
              },
              {
                title: 'Full-Service Solutions',
                description:
                  'From brand strategy to automation, we handle it all under one roof.',
              },
            ].map((point) => (
              <div key={point.title} className="text-[#f5ebd9]">
                <h4 className="font-bold text-lg mb-2 text-[#c9a15d]">
                  {point.title}
                </h4>
                <p className="text-sm leading-relaxed opacity-90">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
