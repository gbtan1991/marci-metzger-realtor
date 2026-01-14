import { Calendar } from 'lucide-react';

export function CTAStrip() {
  return (
    <section
      className="py-16 lg:py-20"
      style={{
        backgroundColor: 'var(--color-charcoal-900)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left space-y-3">
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: '600',
                color: '#ffffff',
                lineHeight: '1.2',
              }}
            >
              Ready to Find Your Dream Home?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.125rem',
                fontWeight: '300',
                color: 'var(--color-charcoal-200)',
                lineHeight: '1.6',
              }}
            >
              Let's schedule a consultation and discuss your real estate goals.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 transition-all duration-300 hover:scale-105 group whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: '500',
              backgroundColor: '#ffffff',
              color: 'var(--color-charcoal-900)',
              borderRadius: '0.25rem',
              letterSpacing: '0.01em',
            }}
          >
            <Calendar size={20} />
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
