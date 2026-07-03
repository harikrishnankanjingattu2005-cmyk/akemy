import { motion } from 'motion/react';
import { ShieldCheck, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { timelineEvents } from '../data';

export default function About() {
  return (
    <section 
      id="about-section"
      className="py-24 bg-brand-bg bg-grain relative overflow-hidden"
    >
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-[-15%] w-80 h-80 rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-[-10%] w-72 h-72 rounded-full bg-brand-navy/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* Left Column: Custom Framed Photographic Artwork */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-brand-white/10 group"
              data-cursor="expand"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="AKEMY Creative Space"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Glass subtle card overlay */}
              <div className="absolute top-6 right-6 glass-panel px-4 py-2.5 rounded-full text-[10px] font-mono tracking-widest uppercase text-brand-navy border border-brand-white/20">
                CREATIVE ATELIER
              </div>

              {/* Decorative luxury gold frame borders */}
              <div className="absolute inset-0 border-[2px] border-brand-gold/10 m-4 rounded-xl pointer-events-none" />
            </motion.div>

            {/* Tiny absolute accent details */}
            <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-brand-gold/10 blur-xl pointer-events-none" />
          </div>

          {/* Right Column: Agency Story, Mission & Vision */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">
            <span className="font-mono text-[9px] font-extrabold tracking-widest text-brand-gold uppercase block mb-3">
              Who We Are
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight mb-6">
              Beyond Social.<br />Beyond Websites.
            </h2>
            <div className="w-16 h-1 bg-brand-gold rounded-full mb-8" />
            
            <p className="font-sans text-sm sm:text-base text-brand-navy/70 leading-relaxed mb-8 max-w-xl">
              We started with a singular conviction: that standard marketing templates and generic websites fail ambitious brands. At AKEMY, we build bespoke digital structures. We fuse extreme high-end creative visual direction with smart backend automation systems.
            </p>

            <p className="font-sans text-xs md:text-sm text-brand-navy/60 leading-relaxed mb-10 max-w-xl">
              We operate at the intersection of aesthetic authority and operational strength, converting views into lifelong trust, and clicks into automated pipelines.
            </p>

            {/* Mission & Vision split cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-brand-white p-6 rounded-2xl border border-brand-gray/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy mb-4">
                  <Compass className="w-5 h-5 text-brand-gold" />
                </div>
                <h4 className="font-display text-sm font-extrabold text-brand-navy uppercase tracking-widest mb-2">
                  Our Mission
                </h4>
                <p className="font-sans text-xs text-brand-navy/60 leading-relaxed">
                  To empower high-end brands with digital architectures that reflect their true value and process.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-brand-white p-6 rounded-2xl border border-brand-gray/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy mb-4">
                  <ShieldCheck className="w-5 h-5 text-brand-gold" />
                </div>
                <h4 className="font-display text-sm font-extrabold text-brand-navy uppercase tracking-widest mb-2">
                  Our Vision
                </h4>
                <p className="font-sans text-xs text-brand-navy/60 leading-relaxed">
                  To eliminate generic template clutter and define a new paradigm of bespoke, custom interactive systems.
                </p>
              </motion.div>
            </div>

          </div>

        </div>

        {/* Animated Timeline Section (Horizontal/Vertical) */}
        <div className="mt-28 border-t border-brand-gray/60 pt-16">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono text-[9px] font-extrabold tracking-widest text-brand-gold uppercase block mb-3">
              Corporate Chronology
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-brand-navy">
              The Journey of Innovation
            </h3>
            <p className="font-sans text-xs text-brand-navy/50 mt-2">
              From initial creative vision to full automation scaling.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            
            {/* Timeline center line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1.5px] bg-brand-gold/30 hidden md:block" />

            {/* Timeline items mapped */}
            <div className="space-y-12 relative z-10">
              {timelineEvents.map((event, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                    className={`flex flex-col md:flex-row items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Left/Right Text card */}
                    <div className="w-full md:w-1/2 px-4 md:px-8">
                      <div className={`p-6 bg-brand-white rounded-2xl border border-brand-gray/50 hover:shadow-lg transition-all duration-300 relative ${
                        isLeft ? 'md:text-right' : 'md:text-left'
                      }`}>
                        {/* Year Badge inside card */}
                        <span className="inline-block font-mono text-xs font-bold text-brand-gold bg-brand-navy/5 px-2.5 py-1 rounded-md mb-3">
                          {event.year}
                        </span>
                        
                        <h4 className="font-display text-base font-extrabold text-brand-navy mb-2">
                          {event.title}
                        </h4>
                        
                        <p className="font-sans text-xs text-brand-navy/60 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Chronological Indicator Dot */}
                    <div className="w-8 h-8 rounded-full bg-brand-navy border-[2.5px] border-brand-gold flex items-center justify-center relative z-20 my-4 md:my-0 shadow-md">
                      <Sparkles className="w-2.5 h-2.5 text-brand-gold" />
                    </div>

                    {/* Empty placeholder column for balancing */}
                    <div className="w-full md:w-1/2 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
