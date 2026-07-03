import { motion } from 'motion/react';
import { Search, Compass, Palette, Code, Rocket, BarChart3, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover & Align',
      icon: Search,
      description: 'We deep dive into your business model, customer demographics, and brand positioning to establish clear, measurable objectives.',
      deliverable: 'Strategy Map & Moodboards'
    },
    {
      num: '02',
      title: 'Design Strategy',
      icon: Compass,
      description: 'We architect complete user flows, information hierarchies, copywriting tone parameters, and unique typography prototypes.',
      deliverable: 'High-fidelity Prototypes'
    },
    {
      num: '03',
      title: 'Bespoke Design',
      icon: Palette,
      description: 'We flesh out the visual concept, painting with fine typography, generous negative space, luxury colors, and smooth layout systems.',
      deliverable: 'Complete Design System'
    },
    {
      num: '04',
      title: 'High-End Development',
      icon: Code,
      description: 'We code custom React environments with Vite, integrating 60fps Framer Motion interactions and solid, modular state machines.',
      deliverable: 'Production-ready Engine'
    },
    {
      num: '05',
      title: 'System Launch',
      icon: Rocket,
      description: 'We test performance, run SEO audits, configure hosting parameters, and launch your pristine digital system safely.',
      deliverable: 'Flawless Digital Live Launch'
    },
    {
      num: '06',
      title: 'Automated Growth',
      icon: BarChart3,
      description: 'We wire up Zapier/Make automations to streamline CRM routing, and manage your monthly short-form Reels and grid strategy.',
      deliverable: 'Retainer Reporting & Scaled Leads'
    }
  ];

  return (
    <section 
      id="process-section"
      className="py-24 bg-brand-bg bg-grain relative overflow-hidden"
    >
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 right-[-10%] w-[45%] h-[45%] rounded-full bg-brand-navy/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-gold/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="font-mono text-[9px] font-extrabold tracking-widest text-brand-gold uppercase block mb-3">
            Chronological Workflow
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
            How We Translate Vision into Visibility.
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded-full mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-brand-navy/50 mt-4">
            Our step-by-step agency timeline combines aesthetic precision with extreme engineering discipline.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative">
          {/* Vertical Connecting Line (Hidden on Mobile, elegant on desktop) */}
          <div className="absolute left-[30px] lg:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1.5px] bg-brand-navy/10 z-0" />
          
          <div className="space-y-16 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const StepIcon = step.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-stretch lg:items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  {/* Left Column: Number and Title card */}
                  <div className="w-full lg:w-1/2 flex justify-start lg:justify-end px-4 lg:px-12 text-left lg:text-right">
                    <div className={`flex items-start lg:items-center space-x-4 lg:space-x-reverse ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}>
                      {/* Floating Circle step icon */}
                      <div className="w-16 h-16 rounded-full bg-brand-navy border border-brand-gold text-brand-gold flex items-center justify-center shrink-0 shadow-lg relative z-10">
                        <StepIcon className="w-6 h-6" />
                      </div>
                      
                      <div className={isEven ? 'text-left lg:text-right' : 'text-left'}>
                        <span className="font-mono text-xs font-bold text-brand-gold block mb-1">
                          PHASE {step.num}
                        </span>
                        <h3 className="font-display text-xl font-extrabold text-brand-navy tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Mid Dot Spacer on desktop */}
                  <div className="hidden lg:flex w-8 justify-center items-center">
                    <div className="w-3 h-3 rounded-full bg-brand-gold border-2 border-brand-bg relative z-20 shadow animate-pulse" />
                  </div>

                  {/* Right Column: Detailed description and deliverables card */}
                  <div className="w-full lg:w-1/2 px-4 lg:px-12 mt-4 lg:mt-0">
                    <div className="p-6 bg-brand-white border border-brand-gray/60 rounded-2xl hover:shadow-xl transition-all duration-300 text-left">
                      <p className="font-sans text-xs sm:text-sm text-brand-navy/70 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      {/* Deliberable badge */}
                      <div className="flex items-center space-x-2 bg-brand-navy/5 border border-brand-navy/10 px-3 py-1.5 rounded-lg inline-flex">
                        <span className="font-mono text-[8px] font-bold tracking-widest text-brand-gold uppercase">
                          Deliverable:
                        </span>
                        <span className="font-sans text-[10px] text-brand-navy/80 font-semibold truncate">
                          {step.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
