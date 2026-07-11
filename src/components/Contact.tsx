import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, send to backend:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#1e2342] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f5ebd9] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-[#f5ebd9]/80 max-w-2xl mx-auto">
            Ready to elevate your business? Reach out and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-[#f5ebd9] font-semibold mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-[#f5ebd9] text-[#1e2342] rounded-lg border-2 border-transparent focus:border-[#c9a15d] outline-none transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-[#f5ebd9] font-semibold mb-2 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-[#f5ebd9] text-[#1e2342] rounded-lg border-2 border-transparent focus:border-[#c9a15d] outline-none transition-colors"
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-[#f5ebd9] font-semibold mb-2 text-sm">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#f5ebd9] text-[#1e2342] rounded-lg border-2 border-transparent focus:border-[#c9a15d] outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="social">Social Media Management</option>
                  <option value="brand">Brand Identity</option>
                  <option value="website">Website Development</option>
                  <option value="automation">Automation Services</option>
                  <option value="content">Content Creation</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-[#f5ebd9] font-semibold mb-2 text-sm">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-[#f5ebd9] text-[#1e2342] rounded-lg border-2 border-transparent focus:border-[#c9a15d] outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[#c9a15d] text-[#1e2342] rounded-full font-semibold btn-hover disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 text-green-200 rounded-lg text-sm animate-fade-in">
                  ✓ Message sent! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 text-red-200 rounded-lg text-sm animate-fade-in">
                  ✗ Error sending message. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-8 animate-slide-right">
            {/* Info Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: <Mail size={24} />,
                  title: 'Email',
                  content: 'hello@akemy.services',
                },
                {
                  icon: <MessageSquare size={24} />,
                  title: 'WhatsApp',
                  content: 'Direct messaging available',
                },
                {
                  icon: <Phone size={24} />,
                  title: 'Book a Call',
                  content: 'Schedule a consultation',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start card-hover p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-[#c9a15d]/20 flex items-center justify-center text-[#c9a15d] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[#f5ebd9] font-bold mb-1">{item.title}</h4>
                    <p className="text-[#f5ebd9]/70 text-sm">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Proof Point */}
            <div className="bg-gradient-to-br from-[#c9a15d]/10 to-[#f5ebd9]/5 rounded-xl p-6 border border-[#c9a15d]/20">
              <div className="flex items-start gap-3 mb-3">
                <Zap size={20} className="text-[#c9a15d] flex-shrink-0 mt-1" />
                <h4 className="text-[#f5ebd9] font-bold">Powered by Akemy Automation</h4>
              </div>
              <p className="text-[#f5ebd9]/70 text-sm">
                This contact form demonstrates our automation expertise — your message will be automatically captured, categorized, and routed to the right team member.
              </p>
            </div>

            {/* Trust Badges */}
            <div>
              <p className="text-[#f5ebd9]/60 text-sm mb-3">Why work with us:</p>
              <div className="flex flex-wrap gap-2">
                {['Fast Response', 'Expert Team', 'Full Service', 'Results-Driven'].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1.5 bg-[#1e2342] border border-[#c9a15d]/30 text-[#f5ebd9] rounded-full text-xs font-medium"
                    >
                      ✓ {badge}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
