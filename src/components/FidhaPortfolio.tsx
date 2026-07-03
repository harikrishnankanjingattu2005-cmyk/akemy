import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Quote, Sparkles, Code, Layout, Target, Compass, FileText, Globe, Smartphone, Cpu, BookOpen, Camera, Laptop, HelpCircle, Instagram } from 'lucide-react';
import { Page } from '../types';

interface FidhaPortfolioProps {
  setCurrentPage: (page: Page) => void;
}

export default function FidhaPortfolio({ setCurrentPage }: FidhaPortfolioProps) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const skillSet = [
    { title: "Graphic Design & Visual Branding", desc: "Crafting beautiful visual systems, high-end layouts, and brand identity using Figma, Photoshop, Lightroom, and Canva." },
    { title: "UI/UX Design & Prototyping", desc: "Constructing user-centered digital layouts, interactive wireframes, and smooth responsive prototypes with an eye for aesthetics and usability." },
    { title: "AI/ML Development & Prompt Engineering", desc: "Building intelligent digital interfaces, customizing LLMs, and crafting sophisticated prompt structures for modern AI-powered applications." },
    { title: "Front-End Development", desc: "Translating design visions into clean, performant, and fully interactive digital products using HTML, CSS, and modern JavaScript." },
    { title: "Photography & Visual Storytelling", desc: "Documenting spatial narratives, textures, and cinematic perspectives (captured under her photography portfolio @fidshots)." },
    { title: "Design Research & UX Problem Solving", desc: "Investigating user behavior and workflow friction points to build intuitive, accessible, and highly balanced digital platforms." },
    { title: "AI Product Design & Rapid Prototyping", desc: "Quickly converting complex theoretical AI models and algorithms into intuitive, human-centered client interfaces." },
    { title: "Cross-Disciplinary Collaboration", desc: "Bridging the gap between creative design sensibility and deep software engineering to ensure both beauty and technical feasibility." }
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
      <div className="absolute top-1/4 right-[-10%] w-[350px] h-[350px] bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[400px] h-[400px] bg-brand-navy/5 blur-[140px] rounded-full pointer-events-none" />

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
              <span className="font-display text-2xl font-bold tracking-widest text-brand-gold select-none">FF</span>
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="font-mono text-[9px] font-bold text-brand-gold uppercase tracking-widest bg-brand-navy px-2.5 py-1 rounded">
                  Graphic Designer
                </span>
                <span className="font-mono text-[9px] font-bold text-brand-navy/60 uppercase tracking-widest border border-brand-navy/20 px-2.5 py-1 rounded">
                  UI/UX Designer
                </span>
                <span className="font-mono text-[9px] font-bold text-brand-navy/60 uppercase tracking-widest border border-brand-navy/20 px-2.5 py-1 rounded">
                  AI/ML Enthusiast
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mt-2">
                Fidha Farook
              </h1>
              <p className="font-mono text-xs text-brand-gold tracking-wide font-bold">
                Graphic Designer | UI/UX Designer | AI/ML Enthusiast
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex space-x-3 mt-6 md:mt-0">
            <a 
              href="https://instagram.com/fidshots" 
              target="_blank" 
              rel="noreferrer" 
              title="Instagram Photography portfolio @fidshots"
              className="w-10 h-10 rounded-full bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-brand-navy hover:text-brand-gold hover:bg-brand-navy transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/918330858233" 
              target="_blank" 
              rel="noreferrer"
              title="WhatsApp Chat"
              className="w-10 h-10 rounded-full bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-brand-navy hover:text-brand-gold hover:bg-brand-navy transition-all duration-300"
            >
              <Smartphone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Narrative Biography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-mono text-[10px] font-extrabold text-brand-gold uppercase tracking-widest block">
              Professional Biography
            </span>
            <div className="font-sans text-sm sm:text-base text-brand-navy/85 leading-relaxed space-y-5 text-justify">
              <p>
                I am a final-year Computer Science and Engineering student and graphic designer with hands-on experience in visual design, AI-powered product development, and user-centered digital experiences. My work combines creative design sensibility with technical depth, helping ideas move from concept to functional, visually compelling products.
              </p>
              <p>
                My interest in visual communication began through photography (<span className="text-brand-gold font-bold">@fidshots</span>), which grew into a broader passion for graphic design and UI/UX. This foundation shapes how I approach every project — with an eye for aesthetics as much as usability.
              </p>
              <p>
                On the technical side, I build AI-powered tools and interfaces, including <span className="font-bold">ComponentAI</span>, an AI-driven UI component generator, and a <span className="font-bold">Secure Autonomous AI Behavior Monitoring Sandbox</span> for safe AI deployment. I've also worked on AI safety research, developing tools like a bias auditing system for Indian regional languages, reflecting my interest in building technology that is both innovative and responsible.
              </p>
              <p>
                As someone who works across both design and engineering, I understand how to balance visual appeal with technical feasibility. I focus on creating work that is not only aesthetically strong but also functional, thoughtful, and built to solve real problems.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            {/* Quick Stats / Side Panel */}
            <div className="bg-brand-navy text-brand-cream p-6 rounded-2xl border border-brand-gold/20 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold/5 blur-xl rounded-full" />
              <h3 className="font-display text-sm font-bold text-brand-gold uppercase tracking-widest border-b border-brand-cream/10 pb-3 mb-4">
                Key Projects
              </h3>
              <ul className="space-y-4 font-sans text-xs text-brand-cream/90">
                <li className="flex items-start space-x-2.5">
                  <Cpu className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-brand-cream">ComponentAI</span>
                    <span className="text-[11px] text-brand-cream/70">AI-driven UI component generator</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Laptop className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-brand-cream font-mono">AI Safety Sandbox</span>
                    <span className="text-[11px] text-brand-cream/70">Secure autonomous AI monitoring behavior environment</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <BookOpen className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-brand-cream">Bias Auditing</span>
                    <span className="text-[11px] text-brand-cream/70">AI safety for Indian regional languages</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quote block */}
            <div className="p-6 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl">
              <Quote className="w-6 h-6 text-brand-gold mb-3" />
              <p className="font-sans text-xs italic text-brand-navy/85 leading-relaxed">
                "Bridging the gap between software engineering and creative visual design to engineer aesthetic, responsible digital solutions."
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
              My Core Focus Areas
            </h2>
            <p className="font-sans text-xs md:text-sm text-brand-navy/70 mt-2 leading-relaxed">
              Combining a creative design eye with a Computer Science background to design and build highly compelling, functional products.
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
              Want to Collaborate on Design or Engineering?
            </h3>
            <p className="font-sans text-xs md:text-sm text-brand-navy/70 leading-relaxed">
              Let's create work that is not only aesthetically strong but also functional, thoughtful, and built to solve real-world problems.
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
