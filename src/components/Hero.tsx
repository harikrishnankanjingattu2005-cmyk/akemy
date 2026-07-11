import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const words = ['Build', 'Brands', 'That', 'Move'];

  return (
    <section className="relative min-h-screen bg-[#f5ebd9] pt-20 flex items-center justify-center overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#1e2342] opacity-5 animate-float"></div>
      <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full bg-[#1e2342] opacity-5 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-[#c9a15d] opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1e2342] mb-6 leading-tight">
          {words.map((word, index) => (
            <span
              key={word}
              className="inline-block mr-3 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-[#2c2f4a] mb-12 max-w-2xl mx-auto animate-fade-in-up stagger-4">
          Social media management, brand identity, websites, automation, and content creation — all designed to elevate your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-5">
          <a
            href="#contact"
            className="px-8 py-4 bg-[#1e2342] text-[#f5ebd9] rounded-full font-semibold btn-hover flex items-center gap-2 group"
          >
            Get Started
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#work"
            className="px-8 py-4 border-2 border-[#1e2342] text-[#1e2342] rounded-full font-semibold btn-hover hover:bg-[#1e2342] hover:text-[#f5ebd9]"
          >
            See Our Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#1e2342] rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-[#1e2342] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
