import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Properties() {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob21lfGVufDF8fHx8MTc2ODQwNDM5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      price: '$4,850,000',
      beds: 5,
      baths: 4,
      sqft: '4,200',
      status: 'For Sale'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgzOTI3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Downtown Penthouse',
      location: 'Manhattan, NY',
      price: '$6,200,000',
      beds: 4,
      baths: 3,
      sqft: '3,500',
      status: 'For Sale'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjgzODM4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Executive Office Suite',
      location: 'Downtown, LA',
      price: '$2,900,000',
      beds: 0,
      baths: 2,
      sqft: '2,800',
      status: 'Sold'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2ODMxOTM0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Waterfront Estate',
      location: 'Malibu, CA',
      price: '$8,500,000',
      beds: 6,
      baths: 5,
      sqft: '6,800',
      status: 'For Sale'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1606723325559-ad1bffa19bde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwZW50aG91c2V8ZW58MXx8fHwxNzY4MzM3NDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Sky-High Penthouse',
      location: 'Chicago, IL',
      price: '$5,750,000',
      beds: 4,
      baths: 4,
      sqft: '4,100',
      status: 'For Sale'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob21lfGVufDF8fHx8MTc2ODQwNDM5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Contemporary Residence',
      location: 'Miami Beach, FL',
      price: '$3,400,000',
      beds: 4,
      baths: 3,
      sqft: '3,200',
      status: 'For Sale'
    }
  ];

  return (
    <section id="properties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-muted border border-border mb-6">
            <p className="text-sm tracking-wide uppercase text-muted-foreground">Featured Listings</p>
          </div>
          <h2 
            className="font-[--font-serif] tracking-tight text-foreground mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '600' }}
          >
            Exclusive Property Portfolio
          </h2>
          <p className="text-lg text-muted-foreground">
            Curated selection of premium properties in the most sought-after locations
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <ImageWithFallback
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white text-foreground text-sm font-medium">
                  {property.status}
                </div>
              </div>

              {/* Property Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin size={16} />
                  <span>{property.location}</span>
                </div>
                
                <h3 
                  className="font-[--font-serif] text-foreground"
                  style={{ fontSize: '1.5rem', fontWeight: '600' }}
                >
                  {property.title}
                </h3>

                <p 
                  className="font-[--font-serif] text-primary"
                  style={{ fontSize: '1.75rem', fontWeight: '600' }}
                >
                  {property.price}
                </p>

                {/* Property Features */}
                <div className="flex items-center gap-6 pt-4 border-t border-border text-muted-foreground">
                  {property.beds > 0 && (
                    <div className="flex items-center gap-2">
                      <Bed size={18} />
                      <span className="text-sm">{property.beds} Beds</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Bath size={18} />
                    <span className="text-sm">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square size={18} />
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
