import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Partners() {
  const partners = [
    {
      name: "The Ridge Realty Group",
      logo: "/resources/partners/ridge.png",
    },
    {
      name: "Pahrump Valley Chamber of Commerce",
      logo: "/resources/partners/pahrump.png",
    },
    {
      name: "REALTOR®",
      logo: "/resources/partners/realtor.png",
    },
    {
      name: "Equal Housing Opportunity",
      logo: "/resources/partners/equal.png",
    }
  ];

  return (
    <section className="py-16 bg-muted border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-wide uppercase text-muted-foreground">
            Trusted Partnerships & Memberships
          </p>
        </div>
        
        {/* Adjusted grid for your 4 partners */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center space-y-4 "
            >
              <div className="h-32 w-full relative flex items-center justify-center">
                <ImageWithFallback
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-[160px] object-contain"
                />
              </div>
              <p className="text-center font-medium text-foreground/80 text-xs tracking-tight uppercase">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}