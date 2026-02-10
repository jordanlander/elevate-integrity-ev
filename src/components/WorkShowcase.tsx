import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Home, Building, Lightbulb } from "lucide-react";

const WorkShowcase = () => {
  const projects = [
    {
      title: "Ford EV Charger Installation",
      description: "Professional Level 2 charger installation with electrical panel upgrade. Clean, code-compliant wiring with weather-resistant housing.",
      image: "/lovable-uploads/250446b6-fe9c-44f0-935c-6ab12494fb2b.png",
      category: "Residential EV Charging",
      icon: <Home className="w-5 h-5" />,
      features: ["Level 2 Charging", "Panel Upgrade", "Code Compliant"]
    },
    {
      title: "Tesla Wall Connector Installation",
      description: "Tesla Wall Connector installed by Tesla Certified Installers. Smart connectivity, LED status indicators, and mobile app integration for optimal charging control.",
      image: "/lovable-uploads/4becbc1f-423c-40ba-b00d-848a5e28a7f8.png",
      category: "Tesla Certified",
      icon: <Zap className="w-5 h-5" />,
      features: ["Tesla Certified", "Smart Controls", "App Integration"]
    },
    {
      title: "Pathway Lighting Installation",
      description: "Professional outdoor lighting installation for enhanced safety and aesthetics. Energy-efficient LED fixtures with automated controls.",
      image: "/lovable-uploads/9ee923c5-7e1c-425b-ad9b-93b7bf794fab.png",
      category: "Outdoor Lighting",
      icon: <Lightbulb className="w-5 h-5" />,
      features: ["LED Fixtures", "Auto Controls", "Safety First"]
    },
    {
      title: "Electrical Panel Upgrades",
      description: "Complete electrical panel modernization with smart breakers and surge protection. Upgraded capacity for future EV charging needs.",
      image: "/lovable-uploads/90fa79b5-de62-4546-8c15-402d2042c1eb.png",
      category: "Panel Upgrades",
      icon: <Building className="w-5 h-5" />,
      features: ["Smart Breakers", "Surge Protection", "Future Ready"]
    }
  ];

  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">Our Professional Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            See Our Expert 
            <span className="text-gradient-primary block">Installations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From EV chargers to complete electrical systems, see why Georgia homeowners choose our certified team for their electrical needs.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 glow-primary">
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg h-64 md:h-80">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-gradient-accent text-accent-foreground">
                    {project.icon}
                    <span className="ml-2">{project.category}</span>
                  </Badge>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Your Professional Installation?
            </h3>
            <p className="text-xl mb-6 text-white/90">
              Join our satisfied customers with a free, no-obligation estimate
            </p>
            <Button
              size="lg"
              className="bg-gradient-accent glow-accent hover:scale-105 transition-all duration-300 text-lg px-8 py-6 h-auto font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get My Free Estimate Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
