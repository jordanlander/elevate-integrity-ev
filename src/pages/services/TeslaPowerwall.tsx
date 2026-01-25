import ServicePageLayout from "@/components/ServicePageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Battery, Sun, Zap, Home, Shield, Clock } from "lucide-react";

const TeslaPowerwall = () => {
  return (
    <ServicePageLayout
      title="Tesla Powerwall"
      metaTitle="Tesla Powerwall Installation Georgia | Battery Storage | Integrity EV"
      metaDescription="Certified Tesla Powerwall installer in Georgia. Home battery backup, solar integration, and energy independence. Professional installation with warranty."
      heroTitle="Tesla Powerwall Installation"
      heroSubtitle="Energy independence and backup power with Tesla's revolutionary home battery system. Certified installers serving Georgia."
      badge="Tesla Certified"
      description="Take control of your energy with Tesla Powerwall, the world's leading home battery system. As Tesla Certified Installers, we provide expert Powerwall installation, configuration, and integration with your home's electrical system and solar panels. Powerwall stores energy from the grid or your solar system, providing seamless backup power during outages and helping you reduce electricity costs by using stored energy during peak rate hours. With 13.5 kWh of usable capacity and the ability to stack multiple units, Powerwall provides energy security for your entire home."
      benefits={[
        "13.5 kWh usable storage capacity per unit",
        "Seamless backup power during outages",
        "Solar integration for maximum savings",
        "Time-of-use optimization to reduce bills",
        "Stackable design for whole-home backup",
        "Tesla app for real-time monitoring",
        "Storm Watch automatic storm preparation",
        "10-year Tesla warranty",
      ]}
      certifications={[
        "Tesla Certified Installer",
        "Tesla Powerwall Certified",
        "Tesla Wall Connector Certified",
        "Licensed Georgia Electrician",
        "Insured & Bonded",
      ]}
      process={[
        {
          step: "1",
          title: "Energy Assessment",
          description:
            "We analyze your energy usage, backup needs, and solar potential to design the right Powerwall system for your home.",
        },
        {
          step: "2",
          title: "Permitting & Installation",
          description:
            "We handle all permits and utility coordination, then professionally install your Powerwall with clean, code-compliant work.",
        },
        {
          step: "3",
          title: "Activation & Training",
          description:
            "We activate your system, configure the Tesla app, and train you on all features including backup modes and monitoring.",
        },
      ]}
      faqs={[
        {
          question: "How long can Powerwall power my home during an outage?",
          answer:
            "Duration depends on your energy usage and number of Powerwall units. A single Powerwall (13.5 kWh) can power essential loads for 12-24 hours or longer. Multiple units can provide whole-home backup for extended periods.",
        },
        {
          question: "Do I need solar panels to use Powerwall?",
          answer:
            "No, Powerwall works without solar. It can charge from the grid during off-peak hours and discharge during peak hours to save money. However, pairing with solar maximizes your energy independence.",
        },
        {
          question: "How many Powerwalls do I need?",
          answer:
            "This depends on your backup needs and home size. Most homes benefit from 1-3 Powerwalls. During our assessment, we'll calculate your specific requirements based on your essential loads and desired backup duration.",
        },
        {
          question: "What is Storm Watch?",
          answer:
            "Storm Watch is a Tesla feature that monitors weather forecasts and automatically charges your Powerwall to 100% when severe weather is approaching, ensuring you have maximum backup power available.",
        },
        {
          question: "Can Powerwall work with my existing solar system?",
          answer:
            "Yes! We can integrate Powerwall with most existing solar installations. We'll assess your current system and ensure seamless integration for optimal performance.",
        },
      ]}
      relatedServices={[
        {
          title: "Residential EV Charging",
          href: "/services/residential-ev-charging",
          description: "Complete your Tesla ecosystem with home charging",
        },
        {
          title: "Panel Upgrades",
          href: "/services/electrical-panel-upgrades",
          description: "Ensure your panel can support Powerwall",
        },
        {
          title: "General Electrical",
          href: "/services/general-electrical",
          description: "Full electrical services for your home",
        },
      ]}
    >
      {/* Video Section - Ready for YouTube embed */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
          See Powerwall in Action
        </h2>
        <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border-2 border-dashed border-primary/30">
          <div className="text-center p-8">
            <Battery className="w-16 h-16 text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground mb-2">
              Powerwall Video Coming Soon
            </p>
            <p className="text-sm text-muted-foreground">
              Check back for our Tesla Powerwall showcase video
            </p>
          </div>
        </div>
      </section>

      {/* Powerwall Features Grid */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
          Why Choose Tesla Powerwall?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">
                Backup Protection
              </h3>
              <p className="text-muted-foreground text-sm">
                Keep your lights, fridge, and essentials running during outages
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">
                Solar Integration
              </h3>
              <p className="text-muted-foreground text-sm">
                Store solar energy to use day or night for maximum savings
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-electric p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">
                Peak Savings
              </h3>
              <p className="text-muted-foreground text-sm">
                Use stored energy during peak hours to reduce electricity bills
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">
                Whole Home Ready
              </h3>
              <p className="text-muted-foreground text-sm">
                Stack multiple units for complete home backup coverage
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">
                Storm Watch
              </h3>
              <p className="text-muted-foreground text-sm">
                Auto-prepares for storms by fully charging before severe weather
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-electric p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">
                13.5 kWh Capacity
              </h3>
              <p className="text-muted-foreground text-sm">
                Ample storage to power your home through extended outages
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default TeslaPowerwall;
