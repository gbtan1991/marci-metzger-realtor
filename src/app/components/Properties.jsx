import { Bed, Bath, Square, MapPin } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Properties() {
  const properties = [
    {
      id: 1,
      image: "/resources/listing/semifonte.png",
      title: "Mountain Falls Modern Escape",
      location: "5067 Semifonte Dr, Pahrump, NV 89061",
      price: "$313,000",
      beds: 2,
      baths: 2,
      sqft: "1,396",
      status: "For Sale",
    },
    {
      id: 2,
      image: "/resources/listing/ebeaconridge.png",
      title: "Ovation Golf & Mountain Vista",
      location: "4829 E Beacon Ridge Dr, Pahrump, NV 89061",
      price: "$479,000",
      beds: 3,
      baths: 3,
      sqft: "2,338",
      status: "For Sale",
    },
    {
      id: 3,
      image: "/resources/listing/ssantafiora.png",
      title: "Bella Sera Villa with Private Casita",
      location: "4725 S Santa Fiora St, Pahrump, NV 89061",
      price: "$475,000",
      beds: 5,
      baths: 4,
      sqft: "2,692",
      status: "For Sale",
    },
    {
      id: 4,
      image: "/resources/listing/moosest.png",
      title: "Serene High-Desert Acreage",
      location: "1640 Moose St, Pahrump, NV 89048",
      price: "$399,900",
      beds: 3,
      baths: 3,
      sqft: "1,910",
      status: "For Sale",
    },
    {
      id: 5,
      image: "/resources/listing/winchesterave.png",
      title: "Winchester Equestrian Estate",
      location: "2851 Winchester Ave, Pahrump, NV 89048",
      price: "$969,000",
      beds: 4,
      baths: 4,
      sqft: "2,877",
      status: "For Sale",
    },
    {
      id: 6,
      image: "/resources/listing/iroquois.png",
      title: "Winery District Grand Manor",
      location: "2061 Iroquois Ave, Pahrump, NV 89048",
      price: "$598,900",
      beds: 3,
      baths: 3,
      sqft: "2,802",
      status: "For Sale",
    },
  ];

  return (
    <section id="properties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-muted border border-border mb-6">
            <p className="text-sm tracking-wide uppercase text-muted-foreground">
              Featured Listings
            </p>
          </div>
          <h2
            className="font-[--font-serif] tracking-tight text-foreground mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "600" }}
          >
            Exclusive Property Portfolio
          </h2>
          <p className="text-lg text-muted-foreground">
            Curated selection of premium properties in the most sought-after
            locations
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <ImageWithFallback
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
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
                  style={{ fontSize: "1.5rem", fontWeight: "600" }}
                >
                  {property.title}
                </h3>

                <p
                  className="font-[--font-serif] text-primary"
                  style={{ fontSize: "1.75rem", fontWeight: "600" }}
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
          <a
            href="https://www.zillow.com/profile/marcimetzger"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
}
