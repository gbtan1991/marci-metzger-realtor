import { useEffect } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { CTAStrip } from '@/app/components/CTAStrip';
import { Services } from '@/app/components/Services';
import { Properties } from '@/app/components/Properties';
import { Testimonials } from '@/app/components/Testimonials';
import { Partners } from '@/app/components/Partners';
import { ContactForm } from '@/app/components/ContactForm';
import { Footer } from '@/app/components/Footer';
import { ScrollToTop } from '@/app/components/ScrollToTop';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            const offset = 80; // Account for fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <CTAStrip />
      <Services />
      <Properties />
      <Testimonials />
      <Partners />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
}