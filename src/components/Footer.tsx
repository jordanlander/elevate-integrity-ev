import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  const serviceAreas = [
    "Atlanta", "Alpharetta", "Roswell", "Marietta", "Decatur", 
    "Duluth", "Lawrenceville", "Johns Creek", "Sandy Springs", "Brookhaven"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-accent p-2 rounded-lg">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <div className="font-bold text-2xl">Integrity EV Solutions</div>
                <div className="text-primary-foreground/80">Professional EV & Electrical Services</div>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-lg">
              Georgia's trusted EV charger installation specialists. We provide professional, 
              certified installations with rebate assistance across Northern Georgia and the Greater Atlanta area.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-white/10 text-primary-foreground border-white/20">
                DC Certified
              </Badge>
              <Badge className="bg-white/10 text-primary-foreground border-white/20">
                AC Certified
              </Badge>
              <Badge className="bg-white/10 text-primary-foreground border-white/20">
                Licensed & Insured
              </Badge>
            </div>

            {/* Emergency Notice */}
            <div className="bg-accent/20 rounded-lg p-4 border border-accent/30">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="font-semibold text-accent">24/7 Emergency Service</span>
              </div>
              <p className="text-sm text-primary-foreground/90">
                Electrical emergencies don't wait. Call us anytime for urgent electrical issues.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-semibold">470-262-2660</div>
                  <div className="text-sm text-primary-foreground/80">Mon–Fri: 8 am–6 pm</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <div>integrityevsolutions@gmail.com</div>
                  <div className="text-sm text-primary-foreground/80">We respond within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <div>Northern Georgia & Greater Atlanta</div>
                  <div className="text-sm text-primary-foreground/80">Licensed in Georgia</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-white/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-xl mb-6">Service Areas</h3>
            <p className="text-primary-foreground/80 mb-4">
              Proudly serving communities across Northern Georgia:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-sm text-primary-foreground/90">
                  {area}
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="w-full bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20"
              >
                Check Service Availability
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <div>
              © 2024 Integrity EV Solutions. All rights reserved. | Licensed Electrical Contractor | Georgia License #12345
            </div>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#sitemap" className="hover:text-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;