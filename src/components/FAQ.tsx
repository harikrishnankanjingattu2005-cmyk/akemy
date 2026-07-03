import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqs } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="faq-accordions"
      className="py-24 bg-brand-bg bg-grain relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-[-15%] w-80 h-80 rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-[-10%] w-72 h-72 rounded-full bg-brand-navy/5 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-[9px] font-extrabold tracking-widest text-brand-gold uppercase block mb-3">
            Fidelity FAQ Directory
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy">
            Curated Enquiries
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded-full mx-auto mt-4" />
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-brand-navy text-brand-white border-brand-gold shadow-lg'
                    : 'bg-brand-white text-brand-navy border-brand-gray/60 hover:bg-brand-navy/5'
                }`}
              >
                {/* Accordion Trigger Panel */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-4 pr-4">
                    {/* Index or icon */}
                    <span className={`font-mono text-xs font-bold ${isOpen ? 'text-brand-gold' : 'text-brand-navy/40'}`}>
                      0{idx + 1}.
                    </span>
                    <span className="font-display text-sm sm:text-base font-extrabold tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  {/* Morphing plus/minus indicator */}
                  <div className={`p-1.5 rounded-full ${isOpen ? 'bg-brand-white/10 text-brand-gold' : 'bg-brand-navy/5 text-brand-navy/60'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated expand panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 font-sans text-xs sm:text-sm leading-relaxed border-t border-brand-white/10 text-brand-white/70">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
