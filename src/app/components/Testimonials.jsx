import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      role: 'CEO, Tech Innovations',
      content: 'Working with this realtor was an absolute pleasure. Their deep market knowledge and professionalism made finding our dream home effortless. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'David Thompson',
      role: 'Investment Banker',
      content: 'Exceptional service from start to finish. They negotiated a fantastic deal and handled every detail with precision. A true real estate expert.',
      rating: 5
    },
    {
      id: 3,
      name: 'Sarah Chen',
      role: 'Entrepreneur',
      content: 'I\'ve worked with many realtors, but none compare to this level of dedication and expertise. They went above and beyond to ensure a smooth transaction.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-muted border border-border mb-6">
            <p className="text-sm tracking-wide uppercase text-muted-foreground">Testimonials</p>
          </div>
          <h2 
            className="font-[--font-serif] tracking-tight text-foreground mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '600' }}
          >
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by discerning clients who value excellence and results
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-muted p-8 border border-border hover:border-primary transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote size={40} className="text-primary opacity-20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
