import { Instagram, Facebook, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#instagram' },
  { icon: Facebook, label: 'Facebook', href: '#facebook' },
  { icon: Linkedin, label: 'LinkedIn', href: '#linkedin' },
];

export function SocialMedia() {
  return (
    <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-3">
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '600',
                color: 'var(--color-charcoal-900)',
                lineHeight: '1.2',
              }}
            >
              Connect With Me
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: '400',
                color: 'var(--color-charcoal-600)',
                lineHeight: '1.6',
              }}
            >
              Follow my journey and stay updated on the latest listings and real estate insights.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: 'var(--color-charcoal-900)',
                    color: '#ffffff',
                  }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
