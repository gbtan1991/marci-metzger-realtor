import { ArrowRight, Award, Home, Users } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Use flex with column on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* IMAGE - First on mobile, right side on desktop */}
          <div className="relative w-full lg:w-1/2 order-first lg:order-last">
            <div className="relative aspect-[4/5] overflow-hidden  max-w-lg mx-auto lg:max-w-none">
              <ImageWithFallback
                src="resources/nano-banana.png"
                alt="Professional Realtor"
                className="w-full h-full object-cover"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary -z-10 hidden lg:block"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-muted -z-10 hidden lg:block"></div>
            </div>
          </div>

          {/* CONTENT - Second on mobile, left side on desktop */}
          <div className="w-full lg:w-1/2 space-y-8 flex flex-col">
            <div className="inline-block px-4 py-2 w-full lg:w-fit bg-muted border border-border text-center lg:text-left">
              <p className="text-sm tracking-wide uppercase text-muted-foreground">Pahrump Realtor</p>
            </div>
            
            <h1 
              className="font-[--font-serif] tracking-tight leading-tight text-foreground"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '600' }}
            >
              MARCI METZGER
            </h1>
            <h2
              className="font-[--font-serif] tracking-tight leading-tight text-foreground "
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '400' }}
            >
              THE RIDGE REALTY GROUP
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              <strong>Don't just list your home… Get it SOLD!</strong> We market your property to every buyer, securing top dollar fast.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              <strong>For buyers:</strong> Nobody knows the market better. From analysis to upgrades and trusted contractors — you'll have a pro at your side.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#properties"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 group"
              >
                View Properties
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Home size={20} />
                </div>
                <p className="font-[--font-serif]" style={{ fontSize: '1.75rem', fontWeight: '600' }}>500+</p>
                <p className="text-sm text-muted-foreground">Properties Sold</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Users size={20} />
                </div>
                <p className="font-[--font-serif]" style={{ fontSize: '1.75rem', fontWeight: '600' }}>350+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Award size={20} />
                </div>
                <p className="font-[--font-serif]" style={{ fontSize: '1.75rem', fontWeight: '600' }}>30+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}