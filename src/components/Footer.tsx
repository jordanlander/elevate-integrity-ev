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
import { Link } from "react-router-dom";

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
              <img 
                src="/lovable-uploads/d923a6a4-f64f-4305-a496-04656c5a6bf2.png" 
                alt="Integrity EV Solutions Logo" 
                className="w-12 h-12"
              />
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
                🔋 ChargePoint Certified
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
                  <a href="tel:4702622660" className="font-semibold hover:text-accent transition-colors">470-262-2660</a>
                  <div className="text-sm text-primary-foreground/80">Mon–Fri: 8 am–6 pm</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <a href="mailto:integrityevsolutions@gmail.com" className="hover:text-accent transition-colors">integrityevsolutions@gmail.com</a>
                  <div className="text-sm text-primary-foreground/80">We respond within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <div>All of Northern Georgia</div>
                  <div className="text-sm text-primary-foreground/80">Licensed statewide</div>
                </div>
              </div>
            </div>

          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-xl mb-6">Service Areas</h3>
            <p className="text-primary-foreground/80 mb-4">
              Proudly serving all communities across Northern Georgia:
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
                onClick={() => alert("We proudly serve all of Northern Georgia including Atlanta, Alpharetta, Roswell, Marietta, Decatur, Duluth, Lawrenceville, Johns Creek, Sandy Springs, Brookhaven, and surrounding areas. Licensed for statewide service! Call (470) 262-2660 to confirm service in your area.")}
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
              © 2025 Integrity EV Solutions. All rights reserved. | Licensed Electrical Contractor | Georgia License #EN217457
            </div>
            <div className="flex gap-6">
              <Link
                to="/privacy-policy"
                className="hover:text-accent transition-colors"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="hover:text-accent transition-colors"
                aria-label="Terms of Service"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="hover:text-accent transition-colors"
                aria-label="Sitemap"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
