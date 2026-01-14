import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Listings', href: '#listings' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <span
                className="tracking-tight transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: 'var(--color-charcoal-900)',
                }}
              >
                Alexandra Hayes
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-2 transition-colors duration-300 group"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  fontWeight: '400',
                  color: 'var(--color-charcoal-700)',
                  letterSpacing: '0.01em',
                }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'var(--color-charcoal-900)' }}
                />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                fontWeight: '500',
                backgroundColor: 'var(--color-charcoal-900)',
                color: '#ffffff',
                borderRadius: '0.25rem',
                letterSpacing: '0.01em',
              }}
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md transition-colors duration-300"
            style={{
              color: 'var(--color-charcoal-900)',
            }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: '#ffffff',
            borderColor: 'var(--color-charcoal-200)',
          }}
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: '400',
                  color: 'var(--color-charcoal-700)',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-6 py-3 mt-4 transition-all duration-300"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: '500',
                backgroundColor: 'var(--color-charcoal-900)',
                color: '#ffffff',
                borderRadius: '0.25rem',
              }}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
