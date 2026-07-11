import React from 'react';
import { Instagram, Linkedin, Facebook, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, label: 'Instagram', href: '#' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: '#' },
    { icon: <Facebook size={20} />, label: 'Facebook', href: '#' },
  ];

  return (
    <footer className="bg-[#1e2342] text-[#f5ebd9] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#c9a15d]/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-[#c9a15d] flex items-center justify-center font-bold text-[#1e2342]">
                A
              </div>
              <span className="font-bold text-lg">Akemy</span>
            </div>
            <p className="text-[#f5ebd9]/70 text-sm leading-relaxed max-w-sm">
              Akemy Services — transforming brands through strategic creativity, cutting-edge technology, and data-driven automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#f5ebd9] mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#f5ebd9]/70 hover:text-[#c9a15d] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-[#f5ebd9] mb-4 text-sm uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-lg bg-[#c9a15d]/20 text-[#c9a15d] flex items-center justify-center hover:bg-[#c9a15d]/30 transition-colors"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#c9a15d]/20 py-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#f5ebd9]/60 text-sm">
            © {currentYear} Akemy Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[#f5ebd9]/60 hover:text-[#c9a15d] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#f5ebd9]/60 hover:text-[#c9a15d] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Automation Proof Point */}
        <div className="mt-8 text-center text-xs text-[#f5ebd9]/50">
          <p className="flex items-center justify-center gap-2">
            <Zap size={14} className="text-[#c9a15d]" />
            Website built with automation & optimization
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
