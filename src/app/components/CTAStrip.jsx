import { Phone, Mail, MapPin } from 'lucide-react';

export function CTAStrip() {
  return (
    <section className="bg-primary text-primary-foreground py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <a 
            href="tel:+1234567890"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-white/10 flex items-center justify-center">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wide">Call Us</p>
              <p className="font-medium">(206) 919-6886</p>
            </div>
          </a>

          <a 
            href="mailto:contact@luxeestates.com"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-white/10 flex items-center justify-center">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wide">Office Hours</p>
              <p className="font-medium">Open daily         8:00 am - 7:00 pm</p>
            </div>
          </a>

          <a 
            href="#contact"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-white/10 flex items-center justify-center">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wide">Location</p>
              <p className="font-medium">3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
