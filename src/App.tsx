import React, { useEffect } from 'react';
import {
  Navbar,
  Hero,
  Services,
  About,
  Process,
  Contact,
  Footer,
} from './components';

function App() {
  useEffect(() => {
    // Add scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f5ebd9]">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
