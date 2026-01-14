import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Contact Info */}
          <div className="space-y-10">
            <div className="space-y-6">
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
                Get in Touch
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
                Let's Start Your Real Estate Journey
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.125rem',
                  fontWeight: '400',
                  color: 'var(--color-charcoal-600)',
                  lineHeight: '1.75',
                }}
              >
                Whether you're buying, selling, or investing, I'm here to guide you every step of the way. Reach out to schedule a personalized consultation.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0"
                  style={{
                    backgroundColor: 'var(--color-charcoal-100)',
                    color: 'var(--color-charcoal-900)',
                  }}
                >
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'var(--color-charcoal-600)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Phone
                  </div>
                  <a
                    href="tel:+14155551234"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.125rem',
                      fontWeight: '400',
                      color: 'var(--color-charcoal-900)',
                    }}
                    className="hover:underline"
                  >
                    (415) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0"
                  style={{
                    backgroundColor: 'var(--color-charcoal-100)',
                    color: 'var(--color-charcoal-900)',
                  }}
                >
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'var(--color-charcoal-600)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Email
                  </div>
                  <a
                    href="mailto:alexandra@luxuryrealestate.com"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.125rem',
                      fontWeight: '400',
                      color: 'var(--color-charcoal-900)',
                    }}
                    className="hover:underline"
                  >
                    alexandra@luxuryrealestate.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0"
                  style={{
                    backgroundColor: 'var(--color-charcoal-100)',
                    color: 'var(--color-charcoal-900)',
                  }}
                >
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'var(--color-charcoal-600)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Office
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.125rem',
                      fontWeight: '400',
                      color: 'var(--color-charcoal-900)',
                      lineHeight: '1.6',
                    }}
                  >
                    2550 Pacific Avenue<br />
                    San Francisco, CA 94115
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className="p-8 lg:p-10 rounded-sm"
            style={{
              backgroundColor: 'var(--color-charcoal-50)',
              border: '1px solid var(--color-charcoal-200)',
            }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 py-12">
                <CheckCircle size={64} style={{ color: 'var(--color-charcoal-900)' }} />
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--color-charcoal-900)',
                    textAlign: 'center',
                  }}
                >
                  Message Sent Successfully!
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: '400',
                    color: 'var(--color-charcoal-600)',
                    textAlign: 'center',
                  }}
                >
                  I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'var(--color-charcoal-900)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-sm transition-all duration-300 focus:outline-none"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      backgroundColor: '#ffffff',
                      color: 'var(--color-charcoal-900)',
                      border: '1px solid var(--color-charcoal-300)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-charcoal-900)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--color-charcoal-300)';
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'var(--color-charcoal-900)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-sm transition-all duration-300 focus:outline-none"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      backgroundColor: '#ffffff',
                      color: 'var(--color-charcoal-900)',
                      border: '1px solid var(--color-charcoal-300)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-charcoal-900)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--color-charcoal-300)';
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'var(--color-charcoal-900)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm transition-all duration-300 focus:outline-none"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      backgroundColor: '#ffffff',
                      color: 'var(--color-charcoal-900)',
                      border: '1px solid var(--color-charcoal-300)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-charcoal-900)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--color-charcoal-300)';
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'var(--color-charcoal-900)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-sm transition-all duration-300 focus:outline-none resize-none"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      backgroundColor: '#ffffff',
                      color: 'var(--color-charcoal-900)',
                      border: '1px solid var(--color-charcoal-300)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-charcoal-900)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--color-charcoal-300)';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 transition-all duration-300 hover:scale-105"
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
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
        <div
          className="pt-8 text-center"
          style={{
            borderTop: '1px solid var(--color-charcoal-200)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: '400',
              color: 'var(--color-charcoal-600)',
            }}
          >
            © {new Date().getFullYear()} Alexandra Hayes. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
