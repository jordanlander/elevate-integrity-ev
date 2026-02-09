import ServicePageLayout from "@/components/ServicePageLayout";
import residentialEvImage from "@/assets/services/residential-ev-charging.jpg";

const ResidentialEvCharging = () => {
  return (
    <ServicePageLayout
      heroImage={residentialEvImage}
      title="Residential EV Charging"
      metaTitle="Home EV Charger Installation | Integrity EV Solutions"
      metaDescription="Professional Level 2 EV charger installation for homes in Atlanta and Georgia. Tesla Wall Connector certified. Rebate assistance included. Free estimates!"
      heroTitle="Home EV Charger Installation"
      heroSubtitle="Fast, safe Level 2 charging installed by certified electricians. Wake up to a full charge every morning."
      badge="Most Popular Service"
      description="Transform your home with a professional EV charger installation. Our certified electricians specialize in Level 2 home charging solutions that provide 25-30 miles of range per hour of charging. Whether you drive a Tesla, Ford, Rivian, or any other electric vehicle, we install the perfect charging solution for your needs. We handle everything from permits to final inspection, ensuring a code-compliant installation that maximizes your state and federal rebate eligibility."
      benefits={[
        "Level 2 charging: 25-30 miles of range per hour",
        "All EV brands: Tesla, Ford, Rivian, BMW, and more",
        "Panel upgrades included when needed",
        "Smart charger WiFi setup and app configuration",
        "Rebate and incentive paperwork assistance",
        "Code-compliant installation with permits",
        "Same-day service available",
        "5-year workmanship warranty",
      ]}
      certifications={[
        "Tesla Certified Installer",
        "Tesla Wall Connector Certified",
        "ChargePoint Certified",
        "Licensed Georgia Electrician",
        "Insured & Bonded",
      ]}
      process={[
        {
          step: "1",
          title: "Free Consultation",
          description:
            "We assess your electrical panel, discuss your vehicle and charging needs, and provide a detailed quote.",
        },
        {
          step: "2",
          title: "Professional Installation",
          description:
            "Our certified team installs your charger with clean wiring, proper mounting, and code-compliant connections.",
        },
        {
          step: "3",
          title: "Setup & Training",
          description:
            "We configure your smart charger, connect it to WiFi, and walk you through all features and scheduling.",
        },
      ]}
      faqs={[
        {
          question: "How long does a home EV charger installation take?",
          answer:
            "Most residential installations are completed in 1-3 hours. If a panel upgrade is needed, it may take an additional 2-3 hours.",
        },
        {
          question: "Do I need to upgrade my electrical panel?",
          answer:
            "Not always. During our free consultation, we assess your current panel capacity. Many homes can accommodate a Level 2 charger without upgrades. If needed, we include panel upgrades in our service.",
        },
        {
          question: "What rebates are available for EV charger installation?",
          answer:
            "Your local EMC offers rebates for qualified installations, and there are federal tax credits available. We help you identify and apply for all applicable incentives.",
        },
        {
          question: "Can you install a Tesla Wall Connector?",
          answer:
            "Absolutely! We are Tesla Certified Wall Connector Installers, trained and authorized by Tesla to install their home charging equipment.",
        },
        {
          question: "What if I have a detached garage?",
          answer:
            "We regularly install chargers in detached garages. We'll assess the best routing for electrical service and provide clean, weatherproof installation.",
        },
      ]}
      relatedServices={[
        {
          title: "Commercial EV Charging",
          href: "/services/commercial-ev-charging",
          description: "Multi-unit and business charging solutions",
        },
        {
          title: "Tesla Powerwall",
          href: "/services/tesla-powerwall",
          description: "Battery storage and backup power",
        },
        {
          title: "Panel Upgrades",
          href: "/services/electrical-panel-upgrades",
          description: "Modernize your electrical system",
        },
      ]}
    />
  );
};

export default ResidentialEvCharging;
