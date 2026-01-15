import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Listing", href: "#properties" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/MarciHomes/",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/marciandlauren_nvrealtors/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/marci-metzger-30642496/",
      label: "LinkedIn",
    },
    {
      icon: "/resources/icons/yelp-svgrepo-com.svg",
      href: "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump",
      label: "Yelp",
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3
              className="font-[--font-serif] tracking-tight"
              style={{ fontSize: "1.75rem", fontWeight: "600" }}
            >
              <img
                src="/resources/logo-white.png"
                alt="Luxe Estates Logo"
                className="h-20 w-auto"
              />
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Mastery you can trust. Three decades of local real estate
              leadership in the community she calls home."
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  {/* Logic to handle Component vs String Path */}
                  {typeof social.icon === "string" ? (
                    <img
                      src={social.icon}
                      alt={social.label}
                      className="w-[18px] h-[18px] brightness-0 invert"
                    />
                  ) : (
                    <social.icon size={20} />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-6 text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-6 text-primary-foreground">
              Services
            </h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Buyer Representation</li>
              <li>Seller Services</li>
              <li>Property Search</li>
              <li>Market Analysis</li>
              <li>Investment Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-6 text-primary-foreground">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  3190 HW-160, Suite F
                  <br />
                  Pahrump, NV 89048
                </span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone size={18} className="flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary-foreground transition-colors"
                >
                 (206) 919-6886
                </a>
              </li>
              {/* <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:contact@luxeestates.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  contact@luxeestates.com
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Marci Metzger Homes. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
