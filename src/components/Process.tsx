import React from 'react';
import { Search, Lightbulb, Zap, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We dive deep into understanding your business, goals, and target audience.',
      icon: <Search size={32} />,
    },
    {
      number: '02',
      title: 'Strategy',
      description:
        'Craft a comprehensive plan that aligns with your vision and market opportunities.',
      icon: <Lightbulb size={32} />,
    },
    {
      number: '03',
      title: 'Create',
      description:
        'Execute with precision — from design to development to content production.',
      icon: <Zap size={32} />,
    },
    {
      number: '04',
      title: 'Launch & Automate',
      description:
        'Deploy, optimize, and automate for sustainable growth and ongoing success.',
      icon: <CheckCircle size={32} />,
    },
  ];

  return (
    <section className="py-20 bg-[#f5ebd9] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1e2342] mb-4">
            Our Process
          </h2>
          <p className="text-lg text-[#2c2f4a] max-w-2xl mx-auto">
            A proven methodology designed to deliver results at every stage.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-[#1e2342] to-[#c9a15d]"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Card */}
                <div className="bg-white rounded-xl p-8 shadow-lg card-hover h-full flex flex-col">
                  {/* Step Number & Icon Container */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex-1">
                      <p className="text-5xl font-bold text-[#1e2342]/20">
                        {step.number}
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#c9a15d]/20 to-[#1e2342]/10 flex items-center justify-center text-[#1e2342]">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#1e2342] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#2c2f4a] leading-relaxed text-sm flex-grow">
                    {step.description}
                  </p>

                  {/* Bottom Connector for Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/3 w-8 h-1 bg-[#c9a15d]"></div>
                  )}
                </div>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-[#1e2342] to-[#c9a15d]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-[#2c2f4a] mb-6">
            Ready to start your transformation journey?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#1e2342] text-[#f5ebd9] rounded-full font-semibold btn-hover"
          >
            Let's Begin
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
