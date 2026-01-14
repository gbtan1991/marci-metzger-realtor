import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1638369022547-1c763b1b9b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZXxlbnwxfHx8fDE3NjgzOTA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: '$2,850,000',
    address: 'Pacific Heights, San Francisco',
    beds: 4,
    baths: 3.5,
    sqft: '3,200',
    status: 'For Sale',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1677553512940-f79af72efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgyODY0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: '$4,250,000',
    address: 'Presidio Heights, San Francisco',
    beds: 5,
    baths: 4,
    sqft: '4,800',
    status: 'Just Listed',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1707648496492-38255a8f1877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2ODM0MjkzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    price: '$3,500,000',
    address: 'Seacliff, San Francisco',
    beds: 4,
    baths: 4,
    sqft: '3,900',
    status: 'For Sale',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1759150712537-0e32b6c6a373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG9tZSUyMGtpdGNoZW58ZW58MXx8fHwxNzY4Mzk5OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: '$2,200,000',
    address: 'Russian Hill, San Francisco',
    beds: 3,
    baths: 2.5,
    sqft: '2,400',
    status: 'Under Contract',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwbGl2aW5nfGVufDF8fHx8MTc2ODM5OTk5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    price: '$5,800,000',
    address: 'Pacific Avenue, San Francisco',
    beds: 6,
    baths: 5.5,
    sqft: '5,500',
    status: 'For Sale',
  },
];

export function PropertyGallery() {
  return (
    <section id="listings" className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-charcoal-50)' }}>
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
            Featured Properties
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
            Exceptional Homes, Expertly Curated
          </h2>
        </div>

        {/* Property Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group cursor-pointer"
            >
              <div className="space-y-5">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <ImageWithFallback
                    src={property.image}
                    alt={property.address}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      filter: 'grayscale(10%) contrast(1.05)',
                    }}
                  />
                  
                  {/* Status Badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 backdrop-blur-md"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      color: 'var(--color-charcoal-900)',
                      borderRadius: '0.25rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {property.status}
                  </div>

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(26, 26, 29, 0.3) 0%, transparent 50%)',
                    }}
                  />
                </div>

                {/* Property Details */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: 'var(--color-charcoal-900)',
                        lineHeight: '1.2',
                      }}
                    >
                      {property.price}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} style={{ color: 'var(--color-charcoal-500)' }} />
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9375rem',
                          fontWeight: '400',
                          color: 'var(--color-charcoal-600)',
                        }}
                      >
                        {property.address}
                      </span>
                    </div>
                  </div>

                  {/* Property Stats */}
                  <div className="flex items-center gap-5 pt-2">
                    <div className="flex items-center gap-2">
                      <Bed size={18} style={{ color: 'var(--color-charcoal-500)' }} />
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.875rem',
                          fontWeight: '400',
                          color: 'var(--color-charcoal-600)',
                        }}
                      >
                        {property.beds}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath size={18} style={{ color: 'var(--color-charcoal-500)' }} />
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.875rem',
                          fontWeight: '400',
                          color: 'var(--color-charcoal-600)',
                        }}
                      >
                        {property.baths}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize size={18} style={{ color: 'var(--color-charcoal-500)' }} />
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.875rem',
                          fontWeight: '400',
                          color: 'var(--color-charcoal-600)',
                        }}
                      >
                        {property.sqft} sqft
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <a
            href="#listings"
            className="inline-flex items-center justify-center px-8 py-4 transition-all duration-300 hover:scale-105"
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
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
}
