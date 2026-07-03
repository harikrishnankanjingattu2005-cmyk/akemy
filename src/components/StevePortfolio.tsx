import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Quote, Sparkles, Video, Instagram, Zap, Award, Target, Calendar, User, Compass, Film, FileText } from 'lucide-react';
import { Page } from '../types';

interface StevePortfolioProps {
  setCurrentPage: (page: Page) => void;
}

export default function StevePortfolio({ setCurrentPage }: StevePortfolioProps) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const skillSet = [
    { title: "Social Media Strategy", desc: "Tailored content planning and algorithmic optimization for high organic reach." },
    { title: "Short-Form Video Editing", desc: "Highly engaging cut-downs and visual hooks for Reels, Shorts, and TikToks." },
    { title: "Photography & Videography", desc: "Production-grade physical shooting capturing raw spatial aesthetics." },
    { title: "Instagram Growth & Audits", desc: "Metric-driven optimization to scale presence and community engagement." },
    { title: "Audience Retention & Hooks", desc: "Psychology-backed editing techniques to keep viewer interest high." },
    { title: "Content Scheduling & Flow", desc: "Multichannel asset distribution and strategic timing control." },
    { title: "Visual Branding", desc: "Bespoke color palettes, motion titles, and cohesive social feed grids." },
    { title: "Creative Storytelling", desc: "Transforming brand concepts into narratives that capture and convert." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-brand-cream text-brand-navy pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-grain"
    >
      {/* Golden ambient background blobs */}
      <div className="absolute top-1/4 left-[-10%] w-[350px] h-[350px] bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[400px] h-[400px] bg-brand-navy/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation & Header Actions */}
        <button
          onClick={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center space-x-2.5 text-xs font-bold tracking-widest uppercase text-brand-navy/60 hover:text-brand-gold transition-colors duration-300 group mb-12 focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </button>

        {/* Profile Card Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between border-b border-brand-navy/10 pb-12 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
            
            {/* Elegant Custom Avatar Profile Representation with Clean Initials */}
            <div className="w-24 h-24 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center shadow-xl shrink-0 border border-brand-gold/30">
              <span className="font-display text-2xl font-bold tracking-widest text-brand-gold select-none">SV</span>
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="font-mono text-[9px] font-bold text-brand-gold uppercase tracking-widest bg-brand-navy px-2.5 py-1 rounded">
                  Creative Strategist
                </span>
                <span className="font-mono text-[9px] font-bold text-brand-navy/60 uppercase tracking-widest border border-brand-navy/20 px-2.5 py-1 rounded">
                  Lead Video Editor
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mt-2">
                Steve Vijay
              </h1>
              <p className="font-mono text-xs text-brand-gold tracking-wide font-bold">
                Content Creator | Creative Strategist | Video Editor
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex space-x-3 mt-6 md:mt-0">
            <a href="#" className="w-10 h-10 rounded-full bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-brand-navy hover:text-brand-gold hover:bg-brand-navy transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-brand-navy hover:text-brand-gold hover:bg-brand-navy transition-all duration-300">
              <Film className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-brand-navy hover:text-brand-gold hover:bg-brand-navy transition-all duration-300">
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Narrative Biography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-mono text-[10px] font-extrabold text-brand-gold uppercase tracking-widest block">
              Professional Brief
            </span>
            <div className="font-sans text-sm sm:text-base text-brand-navy/85 leading-relaxed space-y-5 text-justify">
              <p>
                I am a content creator and creative strategist with hands-on experience in social media marketing, content production, and brand storytelling. My work combines creativity with an understanding of audience behavior, helping brands build a strong and engaging online presence.
              </p>
              <p>
                I have worked as a Lead Video Editor for a social media marketing agency, where I managed content production and created high-performing short-form videos for clients across different industries. Through this role, I contributed to content created for established architectural creators and brands, gaining valuable experience in presenting architecture and design through engaging visual storytelling.
              </p>
              <p>
                In addition, I have worked as a video editor for a cryptocurrency company, producing digital content tailored for online audiences and fast-paced social media platforms.
              </p>
              <p>
                As a content creator myself, I understand both the creator's perspective and the brand's objectives. I focus on producing visually appealing content that not only captures attention but also strengthens brand identity and drives meaningful engagement.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            {/* Quick Stats / Side Panel */}
            <div className="bg-brand-navy text-brand-cream p-6 rounded-2xl border border-brand-gold/20 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold/5 blur-xl rounded-full" />
              <h3 className="font-display text-sm font-bold text-brand-gold uppercase tracking-widest border-b border-brand-cream/10 pb-3 mb-4">
                Core Focus
              </h3>
              <ul className="space-y-4 font-sans text-xs text-brand-cream/90">
                <li className="flex items-start space-x-2.5">
                  <Target className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-brand-cream">Audience Retention</span>
                    <span className="text-[11px] text-brand-cream/70">Psychological hook optimization</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Video className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-brand-cream">High-End Post Production</span>
                    <span className="text-[11px] text-brand-cream/70">Modern short-form dynamics</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Compass className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-brand-cream">Aesthetic Direction</span>
                    <span className="text-[11px] text-brand-cream/70">Cohesive brand style curation</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quote block */}
            <div className="p-6 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl">
              <Quote className="w-6 h-6 text-brand-gold mb-3" />
              <p className="font-sans text-xs italic text-brand-navy/85 leading-relaxed">
                "Led video production campaigns reaching multi-million views for top-tier architecture creators, capturing spatial aesthetics seamlessly."
              </p>
            </div>
          </div>
        </div>

        {/* Full Interactive Skills Breakdown */}
        <div className="border-t border-brand-navy/10 pt-16 mb-16">
          <div className="max-w-xl mb-10">
            <span className="font-mono text-[10px] font-extrabold text-brand-gold uppercase tracking-widest block mb-2">
              Capabilities
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-brand-navy tracking-tight">
              My Skill Set Includes
            </h2>
            <p className="font-sans text-xs md:text-sm text-brand-navy/70 mt-2 leading-relaxed">
              Combining creative storytelling with data-driven social tactics to deliver visual content that retains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillSet.map((skill, index) => (
              <div 
                key={index} 
                className="p-5 rounded-xl border border-brand-navy/5 bg-brand-navy/[0.02] hover:bg-brand-navy/[0.04] hover:border-brand-gold/30 transition-all duration-300 group flex items-start space-x-3.5"
              >
                <div className="w-7 h-7 rounded-lg bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold flex items-center justify-center transition-all duration-300 text-xs shrink-0 font-mono">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-gold">
                    {skill.title}
                  </h4>
                  <p className="font-sans text-xs text-brand-navy/70 mt-1.5 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Contact Call To Action */}
        <div className="border-t border-brand-navy/10 pt-16 text-center">
          <div className="max-w-md mx-auto space-y-6">
            <h3 className="font-display text-xl md:text-2xl font-extrabold text-brand-navy">
              Want to Elevate Your Content Strategy?
            </h3>
            <p className="font-sans text-xs md:text-sm text-brand-navy/70 leading-relaxed">
              Let's craft visual storytelling that aligns your authentic brand identity with high-end audience engagement.
            </p>
            <a
              href="https://wa.me/918330858233"
              target="_blank"
              rel="noreferrer"
              className="card-btn inline-block"
            >
              Start Collaboration
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
