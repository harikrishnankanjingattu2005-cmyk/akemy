import React, { useState } from 'react';
import {
  Instagram,
  Palette,
  Globe,
  Zap,
  Video,
  ChevronDown,
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
}

const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'social',
      title: 'Social Media Management',
      icon: <Instagram size={32} />,
      description: 'Comprehensive social media strategy and execution across all platforms',
      items: [
        'Instagram, Pinterest, LinkedIn, Facebook Management',
        'Content Strategy & Planning',
        'Reels Production',
        'Professional Photography & Videography',
        'Carousel & Post Design',
        'Caption Writing',
        'Hashtag Research',
        'Monthly Analytics Reports',
      ],
    },
    {
      id: 'brand',
      title: 'Brand Identity',
      icon: <Palette size={32} />,
      description: 'Create a distinctive visual identity that resonates with your audience',
      items: [
        'Logo Design',
        'Brand Guidelines',
        'Color Palette Development',
        'Typography Selection',
        'Portfolio Design',
        'Company Profile Design',
        'Brand Assets & Visual Identity',
      ],
    },
    {
      id: 'website',
      title: 'Website Development',
      icon: <Globe size={32} />,
      description: 'Modern, responsive websites built for performance and conversion',
      items: [
        'Modern Portfolio Websites',
        'Landing Pages',
        'Contact Forms',
        'Mobile-Responsive Design',
        'Speed Optimization',
        'Blog Setup',
      ],
    },
    {
      id: 'automation',
      title: 'Automation Services',
      icon: <Zap size={32} />,
      description: 'Streamline your business with intelligent automation solutions',
      items: [
        'Automatic Lead Capture',
        'WhatsApp Automation',
        'AI Chatbot for Website',
        'Appointment Booking Automation',
        'Email Automation',
        'Client Follow-up Automation',
        'Proposal Automation',
        'CRM Setup',
      ],
    },
    {
      id: 'content',
      title: 'Content Creation',
      icon: <Video size={32} />,
      description: 'Compelling visual content that tells your story and engages your audience',
      items: [
        'Architectural Photography',
        'Cinematic Project Videos',
        'Site Progress Documentation',
        'Before & After Transformation Videos',
        'Client Testimonial Videos',
        'Project Showcase Content',
        'Social Media Content Production',
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-[#f5ebd9] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1e2342] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-[#2c2f4a] max-w-2xl mx-auto">
            Five core offerings designed to transform your business and maximize your growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === service.id ? null : service.id)
                }
                className={`w-full p-6 rounded-xl transition-all duration-300 card-hover text-left ${
                  expandedId === service.id
                    ? 'bg-[#1e2342] text-[#f5ebd9] shadow-xl'
                    : 'bg-white text-[#1e2342] shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      expandedId === service.id
                        ? 'bg-[#c9a15d]/20'
                        : 'bg-[#1e2342]/10'
                    }`}
                  >
                    {service.icon}
                  </div>
                  <ChevronDown
                    size={24}
                    className={`transition-transform duration-300 ${
                      expandedId === service.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p
                  className={`text-sm ${
                    expandedId === service.id
                      ? 'text-[#f5ebd9]/80'
                      : 'text-[#2c2f4a]'
                  }`}
                >
                  {service.description}
                </p>
              </button>

              {/* Expandable Content */}
              {expandedId === service.id && (
                <div className="mt-4 bg-white rounded-xl p-6 shadow-lg animate-fade-in">
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[#1e2342]"
                      >
                        <span className="text-[#c9a15d] font-bold mt-1">✓</span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-block px-6 py-2 bg-[#1e2342] text-[#f5ebd9] rounded-full font-semibold btn-hover text-sm"
                  >
                    Interested? Get in Touch
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Platforms Badge */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#1e2342] mb-4">Platforms We Work With</h3>
          <div className="flex flex-wrap gap-3">
            {['Instagram', 'Pinterest', 'LinkedIn', 'Facebook', 'WhatsApp', 'Email'].map(
              (platform) => (
                <span
                  key={platform}
                  className="px-4 py-2 bg-[#1e2342]/5 text-[#1e2342] rounded-full font-medium text-sm hover:bg-[#1e2342]/10 transition-colors"
                >
                  {platform}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
