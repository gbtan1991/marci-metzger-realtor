export function TrustedPartners() {
  const partners = [
    { name: 'Sotheby\'s International Realty', abbr: 'SIR' },
    { name: 'Wells Fargo Private Bank', abbr: 'WF' },
    { name: 'Luxury Portfolio International', abbr: 'LPI' },
    { name: 'Christie\'s Real Estate', abbr: 'CRE' },
    { name: 'American Home Shield', abbr: 'AHS' },
    { name: 'First Republic Bank', abbr: 'FRB' },
  ];

  return (
    <section className="py-20 lg:py-24" style={{ backgroundColor: 'var(--color-charcoal-50)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
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
            Trusted Partners
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: '600',
              color: 'var(--color-charcoal-900)',
              lineHeight: '1.2',
            }}
          >
            Collaborating with Industry Leaders
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 lg:p-8 rounded-sm transition-all duration-300 hover:scale-105 cursor-pointer group"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-charcoal-200)',
              }}
            >
              <div className="text-center space-y-2">
                {/* Logo Representation */}
                <div
                  className="transition-colors duration-300"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--color-charcoal-800)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {partner.abbr}
                </div>
                {/* Partner Name on Hover */}
                <div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.625rem',
                    fontWeight: '400',
                    color: 'var(--color-charcoal-600)',
                    lineHeight: '1.3',
                    maxWidth: '120px',
                  }}
                >
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
