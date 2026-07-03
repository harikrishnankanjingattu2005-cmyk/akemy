import { motion } from 'motion/react';
import { Compass, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface NotFoundProps {
  setCurrentPage: (page: Page) => void;
}

export default function NotFound({ setCurrentPage }: NotFoundProps) {
  const handleGoHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-brand-bg bg-grain flex flex-col items-center justify-center px-6 relative overflow-hidden text-center">
      
      {/* Decorative spotlights */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-brand-navy/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none" />

      {/* Grid of micro particles */}
      <div className="absolute inset-0 bg-repeat bg-center opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A243D 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10 max-w-md w-full">
        {/* Abstract floating icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="w-20 h-20 bg-brand-navy rounded-full border border-brand-gold flex items-center justify-center text-brand-gold mx-auto mb-8 shadow-xl"
        >
          <Compass className="w-8 h-8" />
        </motion.div>

        {/* Big error titles */}
        <h1 className="font-display text-8xl font-extrabold tracking-tighter text-brand-navy leading-none mb-4 select-none">
          404
        </h1>

        <span className="font-mono text-[9px] font-bold tracking-widest text-brand-gold uppercase block mb-6">
          Visibility Disrupted / Route Not Found
        </span>

        <p className="font-sans text-xs sm:text-sm text-brand-navy/60 leading-relaxed mb-10">
          This digital coordinates map to an unmapped visual territory. Let us redirect your cursor back to the primary brand system.
        </p>

        {/* Back home action button */}
        <button
          onClick={handleGoHome}
          className="inline-flex items-center space-x-3 bg-brand-navy hover:bg-brand-dark-navy text-brand-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg cursor-pointer group"
        >
          <span>Return to Dashboard</span>
          <ArrowRight className="w-4 h-4 text-brand-gold transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

    </section>
  );
}
