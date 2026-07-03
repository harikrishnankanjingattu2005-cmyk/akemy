import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, MessageSquare, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    'Social Media Management',
    'Brand Identity',
    'Website Development',
    'Systems & Automation',
    'Content Creation'
  ];

  const budgets = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$20,000+'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please state your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.service) newErrors.service = 'Please select a required service.';
    if (!formData.budget) newErrors.budget = 'Please select your approximate budget.';
    if (!formData.message.trim()) newErrors.message = 'Please provide a short brief of your goals.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const selectService = (serviceName: string) => {
    setFormData((prev) => ({ ...prev, service: serviceName }));
    if (errors.service) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.service;
        return copy;
      });
    }
  };

  const selectBudget = (budgetValue: string) => {
    setFormData((prev) => ({ ...prev, budget: budgetValue }));
    if (errors.budget) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.budget;
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate luxury API network request latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  // Generate pre-filled WhatsApp click-to-chat URL with structured submission data
  const getWhatsAppURL = () => {
    const text = `Hi AKEMY! I have submitted a brand inquiry on your portfolio website.
    
*Name:* ${formData.name}
*Company:* ${formData.company || 'N/A'}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'N/A'}
*Service:* ${formData.service}
*Budget:* ${formData.budget}
*Goals:* ${formData.message}`;

    return `https://wa.me/message/AKEMY?text=${encodeURIComponent(text)}`;
  };

  return (
    <section 
      id="contact-form-section"
      className="py-24 bg-brand-bg bg-grain relative overflow-hidden"
    >
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-[-10%] w-[45%] h-[45%] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-navy/5 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-left">
        
        {/* Form Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-[9px] font-extrabold tracking-widest text-brand-gold uppercase block mb-3">
            Interactive Briefing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
            Let's Elevate Your Brand.
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded-full mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-brand-navy/50 mt-4">
            Complete our brief questionnaire to initiate vision mapping. Complete submissions unlock a direct WhatsApp calendar route.
          </p>
        </div>

        {/* Dynamic Submission View Switcher */}
        <div className="bg-brand-white border border-brand-gray/60 p-8 sm:p-12 rounded-3xl shadow-2xl relative">
          
          {!isSuccess ? (
            // ACTIVE QUESTIONNAIRE FORM
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-display text-[10px] font-extrabold uppercase tracking-wider text-brand-navy mb-2">
                    Your Name <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Sterling Cooper"
                    className={`bg-brand-bg/40 border rounded-xl px-4 py-3 text-xs text-brand-navy font-semibold focus:outline-none focus:border-brand-gold focus:bg-brand-white transition-all duration-300 ${
                      errors.name ? 'border-red-400' : 'border-brand-gray'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="company" className="font-display text-[10px] font-extrabold uppercase tracking-wider text-brand-navy mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Sterling Luxury Group"
                    className="bg-brand-bg/40 border border-brand-gray rounded-xl px-4 py-3 text-xs text-brand-navy font-semibold focus:outline-none focus:border-brand-gold focus:bg-brand-white transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-display text-[10px] font-extrabold uppercase tracking-wider text-brand-navy mb-2">
                    Email Address <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="sterling@cooper.com"
                    className={`bg-brand-bg/40 border rounded-xl px-4 py-3 text-xs text-brand-navy font-semibold focus:outline-none focus:border-brand-gold focus:bg-brand-white transition-all duration-300 ${
                      errors.email ? 'border-red-400' : 'border-brand-gray'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="font-display text-[10px] font-extrabold uppercase tracking-wider text-brand-navy mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 019-2834"
                    className="bg-brand-bg/40 border border-brand-gray rounded-xl px-4 py-3 text-xs text-brand-navy font-semibold focus:outline-none focus:border-brand-gold focus:bg-brand-white transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 3: Required Service Selector */}
              <div className="flex flex-col">
                <span className="font-display text-[10px] font-extrabold uppercase tracking-wider text-brand-navy mb-3 block">
                  Service Required <span className="text-brand-gold">*</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => selectService(service)}
                      className={`px-4 py-2.5 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                        formData.service === service
                          ? 'bg-brand-navy text-brand-white shadow-md'
                          : 'bg-brand-bg/40 text-brand-navy border border-brand-gray hover:bg-brand-navy/5'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                {errors.service && (
                  <span className="text-[10px] text-red-500 font-semibold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.service}
                  </span>
                )}
              </div>

              {/* Row 4: Budget Bracket Selection */}
              <div className="flex flex-col">
                <span className="font-display text-[10px] font-extrabold uppercase tracking-wider text-brand-navy mb-3 block">
                  Approximate Budget <span className="text-brand-gold">*</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => selectBudget(budget)}
                      className={`px-4 py-2.5 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                        formData.budget === budget
                          ? 'bg-brand-navy text-brand-white shadow-md'
                          : 'bg-brand-bg/40 text-brand-navy border border-brand-gray hover:bg-brand-navy/5'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
                {errors.budget && (
                  <span className="text-[10px] text-red-500 font-semibold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.budget}
                  </span>
                )}
              </div>

              {/* Row 5: Message Brief box */}
              <div className="flex flex-col">
                <label htmlFor="message" className="font-display text-[10px] font-extrabold uppercase tracking-wider text-brand-navy mb-2">
                  Project Brief & Objectives <span className="text-brand-gold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Outline your target goals, brand positioning, and operational timeline."
                  className={`bg-brand-bg/40 border rounded-xl px-4 py-3 text-xs text-brand-navy font-semibold focus:outline-none focus:border-brand-gold focus:bg-brand-white transition-all duration-300 ${
                    errors.message ? 'border-red-400' : 'border-brand-gray'
                  }`}
                />
                {errors.message && (
                  <span className="text-[10px] text-red-500 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit CTA button */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-brand-navy hover:bg-brand-dark-navy disabled:bg-brand-navy/60 text-brand-white px-10 py-4.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md cursor-pointer select-none group"
                >
                  {isSubmitting ? (
                    <>
                      {/* Spinner */}
                      <svg className="animate-spin h-4 w-4 text-brand-gold" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Transmitting Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4 text-brand-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            // GORGEOUS SUCCESS PANEL & WHATSAPP REDIRECT CTA
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 20 }}
              className="text-center py-10 flex flex-col items-center justify-center space-y-6"
            >
              <div className="w-20 h-20 bg-brand-gold/15 rounded-full flex items-center justify-center text-brand-gold mb-2">
                <CheckCircle className="w-10 h-10" />
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
                Brief Received Flawlessly
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-brand-navy/60 max-w-md leading-relaxed">
                Thank you, <span className="font-bold text-brand-navy">{formData.name}</span>! Your corporate brief has been cataloged. Within 24 hours, our strategy partner will email you with our complete analysis proposal.
              </p>

              <div className="max-w-md w-full border-t border-brand-gray/50 pt-8 mt-4 space-y-4">
                <span className="block font-mono text-[9px] tracking-widest uppercase text-brand-navy/50">
                  Instant VIP Routing
                </span>
                <p className="font-sans text-xs text-brand-navy/70 leading-relaxed mb-4">
                  Reclaim time. Launch your structured submission on WhatsApp to instantly prompt our executive partner and claim our priority calendar booking link.
                </p>

                <a
                  href={getWhatsAppURL()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-md group"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Prompt on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
