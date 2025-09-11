import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Home, 
  Building, 
  Shield, 
  Wrench, 
  Award,
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential EV Charging",
      description: "Complete home EV charger installation with Level 2 charging capabilities. We handle everything from permits to final inspection.",
      features: [
        "Level 2 home charger installation",
        "Electrical panel upgrades when needed",
        "Smart charger setup & WiFi configuration",
        "Rebate & incentive assistance",
        "Code-compliant installation"
      ],
      badge: "Most Popular",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Commercial EV Solutions", 
      description: "Professional commercial EV charging infrastructure for businesses, apartments, and public spaces with scalable solutions.",
      features: [
        "DC fast charger installation",
        "Multi-unit charging systems",
        "Load management solutions",
        "Network integration & monitoring",
        "Maintenance & support plans"
      ],
      badge: "Enterprise Ready",
      gradient: "bg-gradient-electric"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "General Electrical Services",
      description: "Full-service electrical work to support your EV installation and enhance your home's electrical infrastructure.",
      features: [
        "Whole-house surge protection",
        "Outlet & lighting installation", 
        "Electrical panel modernization",
        "Circuit troubleshooting & repairs",
        "Safety inspections & upgrades"
      ],
      badge: "Licensed & Insured",
      gradient: "bg-gradient-accent"
    }
  ];

  const certifications = [
    { name: "DC Certified", icon: "⚡" },
    { name: "AC Certified", icon: "🔌" },
    { name: "Eaton Surge Certified", icon: "🛡️" },
    { name: "Licensed Electrician", icon: "📜" },
    { name: "Insured & Bonded", icon: "✅" }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">Professional Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete EV & Electrical
            <span className="text-gradient-electric block">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From residential EV chargers to commercial installations, we provide comprehensive electrical services across Northern Georgia and Greater Atlanta.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 overflow-hidden">
              {/* Gradient Background */}
              <div className={`absolute inset-0 ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${service.gradient} text-white`}>
                    {service.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant="outline"
                  className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-2xl p-8 glow-primary">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Certified & Trusted Professionals</h3>
            <p className="text-muted-foreground">Our team holds industry-leading certifications and maintains the highest safety standards</p>
          </div>
          
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3">
                <span className="text-2xl">{cert.icon}</span>
                <span className="font-semibold text-foreground">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Service CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-accent rounded-2xl p-8 text-accent-foreground">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8" />
              <h3 className="text-2xl font-bold">24/7 Emergency Service Available</h3>
            </div>
            <p className="text-lg mb-6">Electrical emergencies don't wait. Neither do we.</p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-glow transition-all duration-300"
            >
              Call Now: (470) 555-2660
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
