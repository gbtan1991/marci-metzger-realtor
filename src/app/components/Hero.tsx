import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
              <h1
                className="leading-tight"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '600',
                  color: 'var(--color-charcoal-900)',
                  lineHeight: '1.1',
                }}
              >
                Your Trusted Real Estate Advisor
              </h1>
              <p
                className="max-w-xl"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                  fontWeight: '300',
                  color: 'var(--color-charcoal-600)',
                  lineHeight: '1.75',
                  letterSpacing: '0.01em',
                }}
              >
                With over 15 years of experience in luxury real estate, I deliver exceptional results through personalized service, market expertise, and unwavering commitment to your goals.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="space-y-2">
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    fontWeight: '600',
                    color: 'var(--color-charcoal-900)',
                    lineHeight: '1',
                  }}
                >
                  500+
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    color: 'var(--color-charcoal-600)',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  Homes Sold
                </div>
              </div>
              <div className="space-y-2">
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    fontWeight: '600',
                    color: 'var(--color-charcoal-900)',
                    lineHeight: '1',
                  }}
                >
                  $250M+
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    color: 'var(--color-charcoal-600)',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  In Sales
                </div>
              </div>
              <div className="space-y-2">
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    fontWeight: '600',
                    color: 'var(--color-charcoal-900)',
                    lineHeight: '1',
                  }}
                >
                  98%
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    color: 'var(--color-charcoal-600)',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  Satisfaction
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#listings"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 transition-all duration-300 hover:scale-105 group"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: '500',
                  backgroundColor: 'var(--color-charcoal-900)',
                  color: '#ffffff',
                  borderRadius: '0.25rem',
                  letterSpacing: '0.01em',
                }}
              >
                View Listings
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: '500',
                  backgroundColor: 'transparent',
                  color: 'var(--color-charcoal-900)',
                  border: '1.5px solid var(--color-charcoal-900)',
                  borderRadius: '0.25rem',
                  letterSpacing: '0.01em',
                }}
              >
                Work With Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] lg:aspect-[2/3] overflow-hidden rounded-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MzUxNDg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Alexandra Hayes - Professional Realtor"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{
                  filter: 'grayscale(15%) contrast(1.05)',
                }}
              />
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(26, 26, 29, 0.1) 0%, transparent 50%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
