import { Home, Key, FileText, HandshakeIcon, Search, Briefcase } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: HandshakeIcon,
      title: 'Real Estate Done Right',
      description: 'Nervous about your property adventure? Don’t be. Whether you’re getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!'
    },
    {
      icon: Home,
      title: 'Commercial & Residential',
      description: 'Large or small, condo or mansion, we can find it and get at the price that’s right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.'
    },
    {
      icon: Briefcase,
      title: 'Rely on Expertise',
      description: 'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.'
    },
    
  ];

  return (
    <section id="services" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white border border-border mb-6">
            <p className="text-sm tracking-wide uppercase text-muted-foreground">Our Services</p>
          </div>
          <h2 
            className="font-[--font-serif] tracking-tight text-foreground mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '600' }}
          >
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Full-service expertise to guide you through every aspect of your real estate journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-muted flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 
                className="font-[--font-serif] mb-4 text-foreground"
                style={{ fontSize: '1.5rem', fontWeight: '600' }}
              >
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
