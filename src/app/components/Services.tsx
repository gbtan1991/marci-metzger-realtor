import { Home, TrendingUp, MapPin, Building2 } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Buy',
    description: 'Find your perfect home with expert guidance through every step of the buying process.',
  },
  {
    icon: TrendingUp,
    title: 'Sell',
    description: 'Maximize your property value with strategic marketing and proven negotiation tactics.',
  },
  {
    icon: MapPin,
    title: 'Relocate',
    description: 'Seamless relocation services to help you transition smoothly to your new community.',
  },
  {
    icon: Building2,
    title: 'Invest',
    description: 'Build your portfolio with carefully curated investment opportunities and market insights.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
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
            Our Services
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
            How We Can Help You
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-sm transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: 'var(--color-charcoal-900)',
                      color: '#ffffff',
                    }}
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: 'var(--color-charcoal-900)',
                        lineHeight: '1.3',
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        fontWeight: '400',
                        color: 'var(--color-charcoal-600)',
                        lineHeight: '1.7',
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
