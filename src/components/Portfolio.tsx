import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ArrowRight, X, Sparkles, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';
import { projects } from '../data';
import { Project, Page } from '../types';

interface PortfolioProps {
  setCurrentPage?: (page: Page) => void;
}

export default function Portfolio({ setCurrentPage }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Brand Identity', 'Website Development', 'Automation', 'Social Media Management', 'Content Creation'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section 
      id="portfolio-section"
      className="py-24 bg-brand-bg bg-grain relative overflow-hidden"
    >
      {/* Dynamic background lights */}
      <div className="absolute top-1/4 left-[-10%] w-[45%] h-[45%] rounded-full bg-brand-navy/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-gold/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header of Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl text-left">
            <span className="font-mono text-[9px] font-extrabold tracking-widest text-brand-gold uppercase block mb-3">
              Selected Works
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
              Crafting Digital Products with Bespoke Precision.
            </h2>
            <div className="w-16 h-1 bg-brand-gold rounded-full mt-4" />
          </div>

          {/* Optional Direct Contact Link */}
          {setCurrentPage && (
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center space-x-2 bg-brand-navy text-brand-white text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-brand-dark-navy transition-all duration-300 shadow-md cursor-pointer shrink-0"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
            </button>
          )}
        </div>

        {/* Categories Horizontal Filter Rail */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-brand-gray/60 pb-6 overflow-x-auto no-scrollbar">
          <span className="font-mono text-[9px] tracking-widest uppercase text-brand-navy/40 mr-4 flex items-center gap-1.5 shrink-0">
            <Filter className="w-3 h-3 text-brand-gold" /> Filter Projects:
          </span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-brand-navy text-brand-white shadow-md'
                  : 'bg-brand-white text-brand-navy border border-brand-gray/60 hover:bg-brand-navy/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Dynamic Grid/List Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveProject(project)}
                data-cursor="text"
                data-cursor-text="VIEW"
                className="group relative bg-brand-white border border-brand-gray/50 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Product Image preview with zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-navy/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Category Accent Badge */}
                  <span className="absolute top-4 left-4 bg-brand-dark-navy/85 backdrop-blur-md text-brand-gold font-mono text-[8px] tracking-widest font-extrabold uppercase px-3 py-1.5 rounded-md border border-brand-white/10">
                    {project.category}
                  </span>
                  
                  {/* Subtle hover overlay tint */}
                  <div className="absolute inset-0 bg-brand-dark-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Card copy text */}
                <div className="p-6 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-brand-navy/40 font-mono text-[9px] mb-2 uppercase">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-display text-lg font-extrabold tracking-tight text-brand-navy mb-2 group-hover:text-brand-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-navy/60 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-gray/20 flex items-center justify-between">
                    <span className="font-mono text-[8px] tracking-widest uppercase font-bold text-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                      View Case Study
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-gold transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* CASE STUDY OVERLAY MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            id="case-study-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark-navy/90 backdrop-blur-md overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Scrollable Container Inside Modal */}
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-brand-bg bg-grain max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl relative border border-brand-gold/20 max-h-[90vh] overflow-y-auto text-brand-navy"
            >
              
              {/* Close Button sticky overlay */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-brand-navy text-brand-white hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 cursor-pointer shadow-lg border border-brand-white/10"
                aria-label="Close Case Study"
              >
                <X className="w-4 h-4" />
              </button>

              {/* 1. Large Hero Visual */}
              <div className="relative aspect-[16/9] w-full bg-brand-navy/10">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy via-brand-dark-navy/30 to-transparent" />
                
                {/* Meta details over picture */}
                <div className="absolute bottom-6 left-6 right-6 text-left text-brand-white">
                  <span className="font-mono text-[9px] font-extrabold tracking-widest text-brand-gold bg-brand-navy/80 px-2.5 py-1.5 rounded border border-brand-white/10 uppercase">
                    {activeProject.category}
                  </span>
                  <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-4">
                    {activeProject.title}
                  </h1>
                  <p className="font-mono text-[10px] text-brand-white/70 tracking-widest uppercase mt-1">
                    Client: {activeProject.client} • {activeProject.year}
                  </p>
                </div>
              </div>

              {/* 2. Detailed Grid Case Study Contents */}
              <div className="p-6 md:p-10 text-left grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Left column details (Description & Results) */}
                <div className="md:col-span-8 space-y-6">
                  <div>
                    <h4 className="font-display text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-gold" /> Project Overview
                    </h4>
                    <p className="font-sans text-sm text-brand-navy/80 leading-relaxed">
                      {activeProject.longDescription}
                    </p>
                  </div>

                  {/* Highlight Results Card */}
                  <div className="bg-brand-navy text-brand-white p-5 rounded-xl border border-brand-gold/30">
                    <h5 className="font-display text-[10px] font-extrabold uppercase tracking-widest text-brand-gold mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" /> Measured Business Outcomes
                    </h5>
                    <p className="font-sans text-sm font-semibold tracking-wide text-brand-white">
                      {activeProject.results}
                    </p>
                  </div>
                </div>

                {/* Right column details (Services used, Tech Stack) */}
                <div className="md:col-span-4 space-y-6 border-t md:border-t-0 md:border-l border-brand-gray/60 pt-6 md:pt-0 md:pl-6">
                  
                  {/* Services Utilized list */}
                  <div>
                    <h5 className="font-display text-[10px] font-extrabold uppercase tracking-widest text-brand-navy/50 mb-3">
                      Services Utilized
                    </h5>
                    <ul className="space-y-1.5">
                      {activeProject.servicesUsed.map((service, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-brand-navy font-semibold">
                          <ChevronRight className="w-3 h-3 text-brand-gold shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Used */}
                  <div>
                    <h5 className="font-display text-[10px] font-extrabold uppercase tracking-widest text-brand-navy/50 mb-3">
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.technology.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-brand-white text-brand-navy border border-brand-gray/60 px-2.5 py-1 rounded text-[10px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Quick Contact Prompt inside Case Study */}
              <div className="bg-brand-white/80 border-t border-brand-gray/60 px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] tracking-widest uppercase text-brand-navy/50">Want a similar solution?</span>
                    <span className="font-sans text-xs text-brand-navy font-bold">Inquire about this scope of work</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/message/AKEMY?text=Hi%20AKEMY%2C%20I%20am%20interested%20in%20a%20project%20similar%20to%20your%20case%20study%3A%20${encodeURIComponent(activeProject.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold px-5 py-2.5 rounded-full flex items-center space-x-2 transition-colors duration-300"
                >
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
