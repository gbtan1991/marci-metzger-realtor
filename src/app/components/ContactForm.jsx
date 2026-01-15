import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "buying",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "buying",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-muted border border-border mb-6">
            <p className="text-sm tracking-wide uppercase text-muted-foreground">
              Get In Touch
            </p>
          </div>
          <h2
            className="font-[--font-serif] tracking-tight text-foreground mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "600" }}
          >
            Let's Start Your Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to find your dream property? Reach out today for a
            personalized consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3
                className="font-[--font-serif] text-foreground mb-6"
                style={{ fontSize: "1.75rem", fontWeight: "600" }}
              >
                Contact Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're buying, selling, or investing, I'm here to
                provide expert guidance every step of the way.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Phone</p>
                  <a
                    href="tel:+12069196886"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (206) 919-6886
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
            
                <div className="w-12 h-12 bg-muted flex items-center justify-center flex-shrink-0">
                  <img
                    src="/resources/icons/whatsapp-logo-variant-svgrepo-com.svg"
                    alt="WhatsApp"
                    className="w-5 h- object-contain"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/14259412560"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    14259412560
                  </a>
                </div>
              </div>

              {/* No email is provided in the design. Will uncomment this if needed in the future. 
              
              /* <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <a href="mailto:contact@luxeestates.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@luxeestates.com
                  </a>
                </div>
              </div> */}

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Office</p>
                  <p className="text-muted-foreground">
                    3190 HW-160, Suite F<br />
                    Pahrump, NV 89048
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="font-medium text-foreground mb-4">Office Hours</p>
              <div className="space-y-2 text-muted-foreground">
                <p>Open Daily: 8:00 AM - 7:00 PM</p>
                <p>
                  Appointments outside office hours available upon request. Just
                  call!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted p-8 border border-border">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} />
                </div>
                <h3
                  className="font-[--font-serif] text-foreground mb-2"
                  style={{ fontSize: "1.5rem", fontWeight: "600" }}
                >
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  Your message has been sent. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-foreground mb-2"
                  >
                    I'm Interested In *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="investing">Investment Opportunities</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-foreground mb-2"
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
                    className="w-full px-4 py-3 bg-white border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your real estate goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
