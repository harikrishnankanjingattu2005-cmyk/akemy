import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Statistics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const stats = [
    { target: 50, suffix: '+', label: 'Projects Completed' },
    { target: 100, suffix: '%', label: 'Client Satisfaction' },
    { target: 20, suffix: '+', label: 'Premium Brands' },
    { target: 24, suffix: '/7', label: 'Bespoke Support' }
  ];

  return (
    <section 
      ref={containerRef}
      id="statistics-section"
      className="py-20 bg-brand-navy text-brand-white bg-grain relative overflow-hidden"
    >
      {/* Visual glowing spotlights */}
      <div className="absolute top-1/2 left-[-10%] w-[35%] h-[35%] rounded-full bg-brand-gold/10 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/4 right-[-10%] w-[30%] h-[30%] rounded-full bg-brand-white/5 blur-[100px] pointer-events-none" />

      {/* Grid of subtle glowing nodes */}
      <div className="absolute inset-0 bg-repeat bg-center opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FAF7F1 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Dynamic Metric Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              {/* Animated Glowing Accent Dot */}
              <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100" />
              
              {/* Counter Indicator */}
              <div className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-brand-gold mb-3 flex items-baseline justify-center select-none">
                <AnimatedCounter target={stat.target} active={isInView} />
                <span className="text-brand-white ml-0.5">{stat.suffix}</span>
              </div>

              {/* Stat Label */}
              <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase text-brand-white/50 group-hover:text-brand-white transition-colors duration-300">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Sub-component to trigger a ticking increment from 0 to target
interface CounterProps {
  target: number;
  active: boolean;
}

function AnimatedCounter({ target, active }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const end = target;
    const duration = 1500; // 1.5 seconds animation
    const incrementTime = Math.max(Math.floor(duration / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, active]);

  return <>{count}</>;
}
