import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 't1',
      quote: 'AKEMY completely revolutionized how we display our visual editorial assets. The cohesive branding system and foil stationery mockups elevated our publication into a true luxury icon. Our subscriber club signups surged immediately.',
      author: 'Evelyn Sterling',
      role: 'Creative Director',
      company: 'Vanguard Editorial',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 't2',
      quote: 'We requested a custom real-estate spatial catalog that would look like an immersive digital art museum. AKEMY delivered a React engine that operates with buttery-smooth 60fps parallax animations. Absolutely flawless craftsmanship.',
      author: 'Marcus Vance',
      role: 'Chief Development Officer',
      company: 'Aether Developments',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 't3',
      quote: 'The systems integration saved our executive team over 340 manual hours every single month. Our leads are routed instantly, custom proposals draft themselves in real-time, and clients are onboarded through a clean aesthetic portal.',
      author: 'Elena Rostova',
      role: 'Managing Partner',
      company: 'Continuum Systems',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  // Auto slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000); // Change review every 7s
    return () => clearInterval(timer);
  }, [currentIdx]);

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('next');
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIdx];

  const slideVariants = {
    initial: (dir: 'next' | 'prev') => ({
      x: dir === 'next' ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir: 'next' | 'prev') => ({
      x: dir === 'next' ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section 
      id="testimonials-carousel"
      className="py-24 bg-brand-bg bg-grain relative overflow-hidden"
    >
      {/* Background visual spheres */}
      <div className="absolute top-1/4 left-[-10%] w-[45%] h-[45%] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-navy/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-[9px] font-extrabold tracking-widest text-brand-gold uppercase block mb-3">
            Client Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
            Endorsements from Ambitious Partners.
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded-full mx-auto mt-4" />
        </div>

        {/* Carousel Slider Panel */}
        <div className="max-w-3xl mx-auto relative min-h-[360px] flex items-center">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full glass-panel border border-brand-gray/60 p-8 sm:p-12 rounded-3xl text-left relative shadow-2xl flex flex-col justify-between"
            >
              
              {/* Giant decorative quotation mark */}
              <div className="absolute top-6 right-8 text-brand-gold/15 pointer-events-none">
                <Quote className="w-20 h-20 rotate-180" />
              </div>

              <div>
                {/* 5-Star Indicator */}
                <div className="flex space-x-1 mb-6 text-brand-gold">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Main Quote Statement */}
                <blockquote className="font-sans text-sm sm:text-base md:text-lg italic text-brand-navy/90 leading-relaxed mb-8">
                  "{current.quote}"
                </blockquote>
              </div>

              {/* Author Details Grid */}
              <div className="flex items-center justify-between border-t border-brand-gray/50 pt-6 mt-4">
                <div className="flex items-center space-x-4">
                  {/* Avatar circle */}
                  <img
                    src={current.avatar}
                    alt={current.author}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-brand-gold"
                  />
                  <div>
                    <h4 className="font-display text-sm font-extrabold text-brand-navy">
                      {current.author}
                    </h4>
                    <p className="font-sans text-[11px] text-brand-navy/60">
                      {current.role} at <span className="font-bold text-brand-navy">{current.company}</span>
                    </p>
                  </div>
                </div>

                {/* Slide indicator dots */}
                <div className="flex space-x-1.5 hidden sm:flex">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentIdx ? 'next' : 'prev');
                        setCurrentIdx(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIdx === idx ? 'bg-brand-gold w-6' : 'bg-brand-navy/20'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Left / Right manual arrows (absolute positioning on sides) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-20px] md:left-[-60px] z-20">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-brand-white border border-brand-gray/60 hover:bg-brand-navy hover:text-brand-white text-brand-navy transition-all duration-300 cursor-pointer shadow-md"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-[-20px] md:right-[-60px] z-20">
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-brand-white border border-brand-gray/60 hover:bg-brand-navy hover:text-brand-white text-brand-navy transition-all duration-300 cursor-pointer shadow-md"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
