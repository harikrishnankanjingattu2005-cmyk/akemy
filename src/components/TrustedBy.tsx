import { motion } from 'motion/react';

export default function TrustedBy() {
  const brands = [
    { name: 'VANGUARD EDITORIAL' },
    { name: 'AETHER LIVING' },
    { name: 'ZEPHYR MAISON' },
    { name: 'SOLAS STUDIO' },
    { name: 'CONTINUUM TECH' },
    { name: 'L\'ATELIER ORGANIC' },
  ];

  // Double the array for seamless infinite loop effect
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <section 
      id="trusted-by-marquee"
      className="py-10 bg-brand-white/40 border-y border-brand-gray/50 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-4">
        <h2 className="font-mono text-[9px] font-extrabold tracking-widest text-brand-navy/40 uppercase text-center md:text-left">
          Trusted By Ambitious Innovators
        </h2>
      </div>

      <div className="relative w-full flex items-center overflow-hidden">
        {/* Shadow gradients to fade the edge of marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

        {/* Outer scroll container */}
        <div className="flex w-full overflow-hidden select-none">
          
          {/* Inner scrolling track */}
          <div className="flex space-x-12 md:space-x-16 py-3 shrink-0 animate-marquee hover:[animation-play-state:paused]">
            {marqueeItems.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center shrink-0 group cursor-pointer"
              >
                <span className="font-display text-xs sm:text-sm font-bold tracking-[0.25em] text-brand-navy/60 group-hover:text-brand-navy transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
