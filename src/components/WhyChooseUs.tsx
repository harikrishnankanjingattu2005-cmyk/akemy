import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { whyCards } from '../data';

export default function WhyChooseUs() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const renderIcon = (name: string, className: string) => {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.HelpCircle className={className} />;
    return <IconComponent className={className} />;
  };

  return (
    <section 
      id="why-choose-us"
      className="py-24 bg-brand-bg bg-grain relative overflow-hidden"
    >
      {/* Visual lighting blobs */}
      <div className="absolute top-1/4 right-[-10%] w-72 h-72 rounded-full bg-brand-gold/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-80 h-80 rounded-full bg-brand-navy/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-[9px] font-extrabold tracking-widest text-brand-gold uppercase block mb-3">
            Why Partner With AKEMY
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy">
            Aesthetic Authority.<br />Operational Strength.
          </h2>
          <p className="font-sans text-xs md:text-sm text-brand-navy/60 mt-4 leading-relaxed">
            We operate at a higher standard. We strip away the fluff to build clean design, blazing-fast web engines, and scalable automated pipelines.
          </p>
        </div>

        {/* Five Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyCards.map((card, idx) => {
            const isHovered = hoveredId === card.id;

            return (
              <TiltCard
                key={card.id}
                card={card}
                idx={idx}
                isHovered={isHovered}
                setHoveredId={setHoveredId}
                renderIcon={renderIcon}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Sub-component to isolate mouse tilt calculations for perfect 60fps performance
interface TiltCardProps {
  key?: string;
  card: any;
  idx: number;
  isHovered: boolean;
  setHoveredId: (id: string | null) => void;
  renderIcon: (name: string, className: string) => React.ReactNode;
}

function TiltCard({ card, idx, isHovered, setHoveredId, renderIcon }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Position of cursor relative to card element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Map coordinate to rotation values (-10 to 10 deg)
    const factorX = 12; // tilt depth factor
    const rX = -((y - rect.height / 2) / (rect.height / 2)) * factorX;
    const rY = ((x - rect.width / 2) / (rect.width / 2)) * factorX;
    
    setRotateX(rX);
    setRotateY(rY);
    setSpotlightPos({ x, y });
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHoveredId(card.id)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'none' : 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
      className={`relative rounded-2xl p-6 overflow-hidden flex flex-col justify-between cursor-pointer select-none border transition-all duration-300 min-h-[250px] ${
        isHovered
          ? 'bg-brand-navy border-brand-gold shadow-[0_20px_40px_rgba(26,36,61,0.2)] text-brand-white scale-[1.03] z-10'
          : 'bg-brand-white border-brand-gray/60 text-brand-navy shadow-[0_10px_30px_rgba(230,226,216,0.15)]'
      }`}
    >
      {/* Spotlight Radial Gradient Glow on Hover */}
      {isHovered && (
        <div
          className="absolute pointer-events-none inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 100px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(214, 180, 106, 0.15), transparent 80%)`,
          }}
        />
      )}

      {/* Card Content wrapper to give subtle 3D depth pop */}
      <div style={{ transform: 'translateZ(30px)' }} className="flex flex-col justify-between h-full relative z-10">
        <div>
          {/* Card Icon */}
          <div className="mb-6 flex justify-between items-start">
            <div className={`p-2.5 rounded-xl inline-flex ${
              isHovered ? 'bg-brand-white/10 text-brand-gold' : 'bg-brand-navy/5 text-brand-navy'
            }`}>
              {renderIcon(card.iconName, 'w-5 h-5')}
            </div>
            
            {/* Card Index Indicator */}
            <span className={`font-mono text-[9px] ${isHovered ? 'text-brand-gold/60' : 'text-brand-navy/30'}`}>
              0{idx + 1}.
            </span>
          </div>

          {/* Card Title */}
          <h3 className="font-display text-sm font-extrabold uppercase tracking-widest mb-3">
            {card.title}
          </h3>

          {/* Card Description */}
          <p className={`font-sans text-[11px] leading-relaxed ${
            isHovered ? 'text-brand-white/70' : 'text-brand-navy/60'
          }`}>
            {card.description}
          </p>
        </div>

        {/* Card subtle gold decorative strip */}
        <div className={`h-[1px] w-8 mt-6 transition-all duration-500 ${
          isHovered ? 'bg-brand-gold w-16' : 'bg-brand-navy/10'
        }`} />
      </div>
    </motion.div>
  );
}
