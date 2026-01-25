import ServicePageLayout from "@/components/ServicePageLayout";
import commercialEvImage from "@/assets/services/commercial-ev-charging.jpg";

const CommercialEvCharging = () => {
  return (
    <ServicePageLayout
      heroImage={commercialEvImage}
      title="Commercial EV Charging"
      metaTitle="Commercial EV Charging Installation Georgia | Business Charging | Integrity EV"
      metaDescription="Professional commercial EV charging installation for businesses, apartments, and fleets in Georgia. DC fast chargers, load management, and scalable solutions."
      heroTitle="Commercial EV Charging Solutions"
      heroSubtitle="Scalable charging infrastructure for businesses, apartments, hotels, and fleet operations across Georgia."
      badge="Enterprise Ready"
      description="Attract customers, retain tenants, and future-proof your business with professional commercial EV charging infrastructure. We design and install scalable charging solutions for apartments, condos, hotels, retail locations, office buildings, and fleet operations. Our commercial installations include load management systems that optimize energy usage and prevent demand charges. From single-unit installations to multi-station networks, we provide turnkey solutions including site assessment, permitting, installation, and ongoing support."
      benefits={[
        "Level 2 and DC fast charger installations",
        "Multi-unit charging systems for apartments and condos",
        "Load management to prevent demand charge spikes",
        "Network integration and monitoring dashboards",
        "Payment system setup (pay-per-use options)",
        "ADA-compliant installations",
        "Commercial rebate and incentive assistance",
        "Maintenance and support plans available",
      ]}
      certifications={[
        "Tesla Certified Installer",
        "ChargePoint Certified Partner",
        "Licensed Commercial Electrician",
        "OSHA Safety Certified",
        "Insured & Bonded",
      ]}
      process={[
        {
          step: "1",
          title: "Site Assessment",
          description:
            "We evaluate your electrical infrastructure, parking layout, and usage requirements to design the optimal solution.",
        },
        {
          step: "2",
          title: "Design & Permitting",
          description:
            "Our team handles engineering drawings, utility coordination, and all necessary permits for your commercial project.",
        },
        {
          step: "3",
          title: "Installation & Commissioning",
          description:
            "Professional installation with minimal disruption, followed by testing, network setup, and staff training.",
        },
      ]}
      faqs={[
        {
          question: "What types of commercial properties do you serve?",
          answer:
            "We install EV charging for apartments, condos, hotels, retail centers, office buildings, restaurants, fleet depots, and more. Any commercial property can benefit from EV charging infrastructure.",
        },
        {
          question: "How do load management systems work?",
          answer:
            "Load management systems intelligently distribute power among multiple chargers to prevent demand charge spikes. This optimizes your energy costs while ensuring all vehicles get charged.",
        },
        {
          question: "Can tenants or customers pay for charging?",
          answer:
            "Yes! We can set up networked chargers with payment systems, allowing you to offer free, subsidized, or pay-per-use charging to your tenants or customers.",
        },
        {
          question: "What about commercial rebates and incentives?",
          answer:
            "Georgia Power and federal programs offer significant incentives for commercial EV charging. We help identify and apply for all available rebates to reduce your investment.",
        },
        {
          question: "Do you offer maintenance contracts?",
          answer:
            "Yes, we offer ongoing maintenance and support plans to keep your charging infrastructure running smoothly. This includes regular inspections, software updates, and priority repair service.",
        },
      ]}
      relatedServices={[
        {
          title: "Residential EV Charging",
          href: "/services/residential-ev-charging",
          description: "Home charging solutions for individuals",
        },
        {
          title: "Tesla Powerwall",
          href: "/services/tesla-powerwall",
          description: "Commercial battery storage solutions",
        },
        {
          title: "Panel Upgrades",
          href: "/services/electrical-panel-upgrades",
          description: "Commercial electrical infrastructure",
        },
      ]}
    />
  );
};

export default CommercialEvCharging;
