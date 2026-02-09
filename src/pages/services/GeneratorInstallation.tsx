import ServicePageLayout from "@/components/ServicePageLayout";
import generalElectricalImage from "@/assets/services/general-electrical.jpg";

const GeneratorInstallation = () => {
  return (
    <ServicePageLayout
      heroImage={generalElectricalImage}
      title="Generator Installation"
      metaTitle="Generator Installation Georgia | Integrity EV Solutions"
      metaDescription="Generator installation in Georgia. Whole-home backup power, automatic transfer switches, and maintenance by licensed electricians. Free estimates!"
      heroTitle="Generator Installation"
      heroSubtitle="Keep your home powered during outages with professional whole-home generator installation."
      badge="Backup Power Experts"
      description="Don't let power outages disrupt your life. Our professional generator installation services provide reliable backup power for your home or business. We install whole-home standby generators that automatically activate when the power goes out, keeping your lights on, refrigerator running, and HVAC system operating. From initial consultation to final testing, our licensed electricians handle every aspect of your generator installation, including automatic transfer switches, fuel connections, and permit coordination with local authorities."
      benefits={[
        "Whole-home standby generators",
        "Portable generator hookups",
        "Automatic transfer switches",
        "Load management for critical circuits",
        "Propane and natural gas options",
        "Permit handling and inspections",
        "Maintenance and service plans",
        "24/7 emergency repairs",
      ]}
      certifications={[
        "Licensed Georgia Electrician",
        "Generac Authorized Service",
        "Insured & Bonded",
        "Georgia License #EN217457",
      ]}
      process={[
        {
          step: "1",
          title: "Free Consultation",
          description:
            "We assess your power needs, discuss fuel options (natural gas or propane), and determine the best placement for your generator.",
        },
        {
          step: "2",
          title: "Professional Installation",
          description:
            "Our team installs your generator, automatic transfer switch, and fuel connections with proper permitting and code compliance.",
        },
        {
          step: "3",
          title: "Testing & Training",
          description:
            "We test the complete system, simulate a power outage to verify automatic operation, and walk you through maintenance and operation.",
        },
      ]}
      faqs={[
        {
          question: "How long does generator installation take?",
          answer:
            "Most residential generator installations are completed in 1-2 days. This includes setting the generator pad, running gas lines, installing the transfer switch, and final testing.",
        },
        {
          question: "What size generator do I need?",
          answer:
            "Generator size depends on what you want to power during an outage. A 10-14kW generator handles essential circuits (lights, refrigerator, sump pump, select outlets). A 20kW+ generator can power your whole home including HVAC. We perform a load calculation during consultation.",
        },
        {
          question: "Do I need a permit for generator installation?",
          answer:
            "Yes, generator installations require electrical and sometimes gas permits. We handle all permit applications and schedule inspections as part of our service.",
        },
        {
          question: "How does an automatic transfer switch work?",
          answer:
            "The automatic transfer switch monitors your utility power 24/7. When it detects an outage, it signals the generator to start and safely transfers your home's electrical load to the generator within seconds. When utility power returns, it transfers back automatically.",
        },
        {
          question: "Should I choose natural gas or propane?",
          answer:
            "If you have natural gas service, it's typically the most convenient option since you never need fuel deliveries. Propane is ideal for homes without natural gas access and provides reliable fuel storage. We help you evaluate both options during consultation.",
        },
      ]}
      relatedServices={[
        {
          title: "Panel Upgrades",
          href: "/services/electrical-panel-upgrades",
          description: "Ensure your panel can handle generator integration",
        },
        {
          title: "Tesla Powerwall",
          href: "/services/tesla-powerwall",
          description: "Battery backup alternative for clean energy",
        },
        {
          title: "General Electrical",
          href: "/services/general-electrical",
          description: "Complete electrical services for your home",
        },
      ]}
    />
  );
};

export default GeneratorInstallation;
