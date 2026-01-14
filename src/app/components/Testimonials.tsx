import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Homebuyer',
    initials: 'SM',
    quote:
      'Alexandra made our home buying experience seamless and stress-free. Her attention to detail and market knowledge were invaluable throughout the entire process.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Property Investor',
    initials: 'DC',
    quote:
      'Working with Alexandra has been transformative for my investment portfolio. Her strategic insights and negotiation skills consistently deliver exceptional results.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Home Seller',
    initials: 'ER',
    quote:
      'Alexandra sold our home in just two weeks, well above asking price. Her marketing strategy and professionalism exceeded all our expectations.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20 text-center mx-auto">
          <div
            className="mb-4"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--color-charcoal-600)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Client Testimonials
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '600',
              color: 'var(--color-charcoal-900)',
              lineHeight: '1.2',
            }}
          >
            Trusted by Discerning Clients
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 lg:p-10 rounded-sm transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--color-charcoal-50)',
                border: '1px solid var(--color-charcoal-200)',
              }}
            >
              <div className="space-y-6">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="var(--color-charcoal-900)"
                      stroke="var(--color-charcoal-900)"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: '400',
                    color: 'var(--color-charcoal-700)',
                    lineHeight: '1.75',
                  }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'var(--color-charcoal-900)',
                      color: '#ffffff',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--color-charcoal-900)',
                        lineHeight: '1.4',
                      }}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        fontWeight: '400',
                        color: 'var(--color-charcoal-600)',
                        lineHeight: '1.4',
                      }}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
