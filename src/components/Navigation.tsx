import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const serviceItems = [
    { name: "Tesla Powerwall", href: "/services/tesla-powerwall" },
    { name: "Residential EV Charging", href: "/services/residential-ev-charging" },
    { name: "Commercial EV Charging", href: "/services/commercial-ev-charging" },
    { name: "Panel Upgrades", href: "/services/electrical-panel-upgrades" },
    { name: "General Electrical", href: "/services/general-electrical" },
  ];

  const navItems = [
    { name: "Our Work", href: "/#work" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/lovable-uploads/d923a6a4-f64f-4305-a496-04656c5a6bf2.png"
              alt="Integrity EV Solutions Logo"
              className="w-12 h-12"
            />
            <div>
              <div className="font-bold text-xl text-foreground">Integrity EV Solutions</div>
              <div className="text-xs text-muted-foreground">Licensed & Certified</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white rounded-lg shadow-xl border border-border py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:4702622660" className="hover:text-primary transition-colors">
                  (470) 262-2660
                </a>
              </div>
              <Badge variant="secondary" className="text-xs">24/7 Emergency Service</Badge>
            </div>
            <Button
              className="bg-gradient-accent glow-accent hover:scale-105 transition-all duration-300 font-semibold"
              onClick={() => {
                if (window.location.pathname !== "/") {
                  window.location.href = "/#contact";
                } else {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white backdrop-blur-md border-b border-border shadow-lg animate-in fade-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 p-4 space-y-4">
            {/* Services Section */}
            <div className="border-b border-border pb-4">
              <p className="text-sm font-semibold text-muted-foreground mb-2">Services</p>
              {serviceItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="pt-4 border-t border-border space-y-3">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Phone className="w-4 h-4" />
                <a href="tel:4702622660" className="hover:text-primary transition-colors">
                  (470) 262-2660
                </a>
              </div>
              <Button
                className="w-full bg-gradient-accent glow-accent font-semibold"
                onClick={() => {
                  if (window.location.pathname !== "/") {
                    window.location.href = "/#contact";
                  } else {
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
              >
                Get Free Estimate
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
