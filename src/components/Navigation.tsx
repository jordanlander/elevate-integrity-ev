import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Zap, Phone } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/d923a6a4-f64f-4305-a496-04656c5a6bf2.png" 
              alt="Integrity EV Solutions Logo" 
              className="w-12 h-12"
            />
            <div>
              <div className="font-bold text-xl text-foreground">Integrity EV Solutions</div>
              <div className="text-xs text-muted-foreground">Licensed & Certified</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
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
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white backdrop-blur-md border-b border-border shadow-lg animate-in fade-in slide-in-from-top duration-300">
            <div className="p-4 space-y-4">
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
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  Get Free Estimate
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;