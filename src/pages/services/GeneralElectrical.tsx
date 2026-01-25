import ServicePageLayout from "@/components/ServicePageLayout";
import generalElectricalImage from "@/assets/services/general-electrical.jpg";

const GeneralElectrical = () => {
  return (
    <ServicePageLayout
      heroImage={generalElectricalImage}
      title="General Electrical Services"
      metaTitle="Electrical Services Atlanta | Licensed Electrician | Integrity EV Solutions"
      metaDescription="Licensed electrical services in Atlanta and Georgia. Outlets, lighting, repairs, surge protection, and safety inspections. 24/7 emergency service available."
      heroTitle="General Electrical Services"
      heroSubtitle="Full-service electrical work by licensed professionals. From outlets to lighting to safety upgrades, we do it all."
      badge="Licensed & Insured"
      description="Beyond EV charging, Integrity EV Solutions provides comprehensive electrical services for your home and business. Our licensed electricians handle everything from simple outlet installations to complex rewiring projects. We take pride in clean, code-compliant work that passes inspection the first time. Whether you need new lighting, surge protection, ceiling fan installation, or troubleshooting an electrical issue, we bring the same professionalism and expertise to every job. Plus, with 24/7 emergency service, we're here when you need us most."
      benefits={[
        "Outlet and switch installation",
        "Indoor and outdoor lighting",
        "Ceiling fan installation and repair",
        "Whole-house surge protection",
        "Electrical troubleshooting and repairs",
        "Safety inspections and code updates",
        "Dedicated circuits for appliances",
        "24/7 emergency electrical service",
      ]}
      certifications={[
        "Licensed Georgia Electrician",
        "Eaton Surge Certified",
        "Insured & Bonded",
        "Georgia License #EN217457",
      ]}
      process={[
        {
          step: "1",
          title: "Consultation",
          description:
            "Describe your electrical needs and we'll provide a clear quote with no hidden fees.",
        },
        {
          step: "2",
          title: "Scheduled Service",
          description:
            "We arrive on time with all necessary materials and complete the work efficiently.",
        },
        {
          step: "3",
          title: "Inspection & Walkthrough",
          description:
            "We test everything, clean up completely, and walk you through the completed work.",
        },
      ]}
      faqs={[
        {
          question: "Do you offer 24/7 emergency service?",
          answer:
            "Yes! Electrical emergencies don't wait, and neither do we. Call us anytime for urgent electrical issues like power outages, burning smells, or sparking outlets.",
        },
        {
          question: "How much does it cost to install an outlet?",
          answer:
            "Standard outlet installation typically ranges from $150-$300 depending on location and complexity. We provide upfront quotes before starting any work.",
        },
        {
          question: "Can you install outdoor lighting?",
          answer:
            "Absolutely! We install landscape lighting, security lights, pathway lighting, and decorative outdoor fixtures with weather-resistant connections.",
        },
        {
          question: "What is whole-house surge protection?",
          answer:
            "Whole-house surge protection is installed at your electrical panel and protects all devices and appliances from power surges caused by lightning, utility switching, or other events. It's essential for protecting modern electronics.",
        },
        {
          question: "Do you pull permits for electrical work?",
          answer:
            "Yes, we pull all required permits and ensure every job passes inspection. This protects you and maintains your home's compliance with electrical codes.",
        },
      ]}
      relatedServices={[
        {
          title: "Residential EV Charging",
          href: "/services/residential-ev-charging",
          description: "Add EV charging to your home",
        },
        {
          title: "Panel Upgrades",
          href: "/services/electrical-panel-upgrades",
          description: "Upgrade your electrical capacity",
        },
        {
          title: "Tesla Powerwall",
          href: "/services/tesla-powerwall",
          description: "Battery backup for your home",
        },
      ]}
    />
  );
};

export default GeneralElectrical;
