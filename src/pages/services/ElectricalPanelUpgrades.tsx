import ServicePageLayout from "@/components/ServicePageLayout";
import panelUpgradeImage from "@/assets/services/electrical-panel-upgrades.jpg";

const ElectricalPanelUpgrades = () => {
  return (
    <ServicePageLayout
      heroImage={panelUpgradeImage}
      title="Electrical Panel Upgrades"
      metaTitle="Electrical Panel Upgrade Atlanta | EV Ready Panels | Integrity EV"
      metaDescription="Professional electrical panel upgrades in Atlanta and Georgia. EV-ready panels, 200A upgrades, smart breakers. Licensed electricians. Free estimates!"
      heroTitle="Electrical Panel Upgrades"
      heroSubtitle="Modernize your electrical system for EV charging, home additions, and future-ready capacity."
      badge="EV-Ready Upgrades"
      description="Your electrical panel is the heart of your home's power system. Many older homes have 100A or 150A panels that struggle to support modern demands like EV chargers, heat pumps, and smart home systems. Our panel upgrade services bring your electrical infrastructure into the 21st century with increased capacity, modern safety features, and EV-ready circuits. Whether you're preparing for an EV charger, adding square footage, or simply upgrading an outdated panel, our licensed electricians deliver safe, code-compliant installations that pass inspection the first time."
      benefits={[
        "100A to 200A+ panel upgrades",
        "EV-ready circuit pre-installation",
        "Smart breaker compatibility",
        "Whole-house surge protection",
        "Arc-fault (AFCI) and ground-fault (GFCI) protection",
        "Code-compliant installation with permits",
        "Same-day service for urgent needs",
        "Clean, labeled panel organization",
      ]}
      certifications={[
        "Licensed Georgia Electrician",
        "Tesla Certified Installer",
        "Eaton Surge Certified",
        "Insured & Bonded",
      ]}
      process={[
        {
          step: "1",
          title: "Load Assessment",
          description:
            "We evaluate your current panel, calculate your electrical load, and determine the right upgrade for your needs.",
        },
        {
          step: "2",
          title: "Permitting & Utility Coordination",
          description:
            "We handle permits and coordinate with your local EMC for any required service upgrades or meter changes.",
        },
        {
          step: "3",
          title: "Professional Installation",
          description:
            "Our team installs your new panel with clean wiring, proper labeling, and surge protection. We pass inspection guaranteed.",
        },
      ]}
      faqs={[
        {
          question: "How do I know if I need a panel upgrade?",
          answer:
            "Signs you need an upgrade include: frequently tripping breakers, a panel with fuses instead of breakers, planning to add an EV charger, adding major appliances, or a panel rated under 200A in a modern home.",
        },
        {
          question: "How long does a panel upgrade take?",
          answer:
            "Most panel upgrades are completed in 4-8 hours. If a service upgrade from your local EMC is required, there may be additional coordination time, but we handle all of that for you.",
        },
        {
          question: "Will I lose power during the upgrade?",
          answer:
            "Yes, power will be off for several hours during the upgrade. We recommend scheduling for a time when the temporary outage is convenient for your household.",
        },
        {
          question: "What's the difference between 100A and 200A panels?",
          answer:
            "A 200A panel provides twice the electrical capacity, essential for modern homes with EV chargers, heat pumps, electric ranges, and other high-demand appliances. It also provides headroom for future additions.",
        },
        {
          question: "Do you install whole-house surge protection?",
          answer:
            "Yes! We recommend and install whole-house surge protection with every panel upgrade. This protects all your electronics and appliances from power surges and lightning strikes.",
        },
      ]}
      relatedServices={[
        {
          title: "Residential EV Charging",
          href: "/services/residential-ev-charging",
          description: "EV charger installation after your panel upgrade",
        },
        {
          title: "Tesla Powerwall",
          href: "/services/tesla-powerwall",
          description: "Battery backup integration with your panel",
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

export default ElectricalPanelUpgrades;
