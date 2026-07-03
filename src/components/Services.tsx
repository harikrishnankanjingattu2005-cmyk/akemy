import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { services } from '../data';
import { Service, Page } from '../types';

interface ServicesProps {
  setCurrentPage?: (page: Page) => void;
}

export default function Services({ setCurrentPage }: ServicesProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Helper to dynamically render Lucide Icons by name
  const renderIcon = (name: string, className: string) => {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.HelpCircle className={className} />;
    return <IconComponent className={className} />;
  };

  return (
    <section 
      id="services-section"
      className="py-24 bg-brand-bg bg-grain relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title with animated subtitle */}
        <div className="max-w-xl mb-16 text-left">
          <span className="font-mono text-[9px] font-extrabold tracking-widest text-brand-gold uppercase block mb-3">
            Interactive Capabilities
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight mb-4">
            Bespoke Services tailored for Elite Impact.
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded-full mb-6" />
          <p className="font-sans text-xs md:text-sm text-brand-navy/60 leading-relaxed">
            Hover over each capability card to explore descriptions, core focus areas, and dynamic feature sets. Click any card to expand comprehensive project-level details.
          </p>
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {services.map((service, index) => {
            const isHovered = hoveredId === service.id;
            const isSelected = selectedId === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedId(isSelected ? null : service.id)}
                data-cursor="expand"
                className={`relative rounded-2xl p-6 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isHovered || isSelected
                    ? 'bg-brand-navy text-brand-white shadow-[0_20px_48px_rgba(26,36,61,0.2)] scale-[1.02] z-10'
                    : 'bg-brand-white border border-brand-gray/60 text-brand-navy shadow-[0_8px_30px_rgba(230,226,216,0.2)]'
                } lg:col-span-1 lg:hover:col-span-1`}
                layoutId={`service-card-${service.id}`}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              >
                {/* Background glow when hovered */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-brand-dark-navy to-brand-navy/60 opacity-50 z-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  {/* Service Number */}
                  <div className="font-mono text-[9px] tracking-widest text-brand-gold/60 uppercase mb-4 block">
                    0{index + 1}.
                  </div>

                  {/* Icon with rotation on hover */}
                  <div className="mb-6 flex justify-between items-start">
                    <motion.div
                      animate={{ rotate: isHovered || isSelected ? 360 : 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className={`p-3 rounded-xl inline-flex ${
                        isHovered || isSelected
                          ? 'bg-brand-white/10 text-brand-gold'
                          : 'bg-brand-navy/5 text-brand-navy'
                      }`}
                    >
                      {renderIcon(service.iconName, 'w-6 h-6')}
                    </motion.div>

                    {/* Expand indicator arrow */}
                    <motion.div
                      animate={{ rotate: isSelected ? 180 : 0 }}
                      className={`text-xs ${isHovered || isSelected ? 'text-brand-gold' : 'text-brand-navy/40'}`}
                    >
                      <Icons.Plus className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display text-lg font-extrabold tracking-tight mb-3">
                    {service.title}
                  </h3>

                  {/* Short description */}
                  <p className={`font-sans text-xs leading-relaxed mb-4 ${
                    isHovered || isSelected ? 'text-brand-white/70' : 'text-brand-navy/60'
                  }`}>
                    {service.description}
                  </p>

                  {/* Expanded features view */}
                  <AnimatePresence>
                    {(isHovered || isSelected) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="mt-4 pt-4 border-t border-brand-white/10 overflow-hidden"
                      >
                        <p className="font-sans text-[11px] text-brand-white/80 leading-relaxed mb-3">
                          {service.longDescription}
                        </p>
                        <span className="block font-mono text-[8px] tracking-widest text-brand-gold uppercase mb-2">
                          Deliverables:
                        </span>
                        <ul className="space-y-1.5">
                          {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center space-x-2 text-[10px] text-brand-white/60">
                              <Icons.Check className="w-3 h-3 text-brand-gold shrink-0" />
                              <span className="truncate">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer action */}
                <div className="mt-6 pt-3 border-t border-brand-gray/10 relative z-10 flex justify-between items-center">
                  <span className={`font-mono text-[8px] tracking-widest uppercase font-semibold ${
                    isHovered || isSelected ? 'text-brand-gold' : 'text-brand-navy/50'
                  }`}>
                    {isSelected ? 'Click to close' : 'Learn More'}
                  </span>
                  <Icons.ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isHovered || isSelected ? 'translate-x-1 text-brand-gold' : 'text-brand-navy/30'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic bottom CTA helper linking to Contact */}
        {setCurrentPage && (
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 border-b border-brand-gold pb-1 font-mono text-xs text-brand-navy hover:text-brand-gold transition-colors duration-300 cursor-pointer group"
            >
              <span>Request custom scope mapping</span>
              <Icons.ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
