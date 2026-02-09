import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkShowcase from "@/components/WorkShowcase";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import MobileCTA from "@/components/MobileCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Navigation />
      <main role="main">
        <SEO
          title="Electrician & EV Solutions Georgia | Integrity EV Solutions"
          description="Licensed electrician in Georgia offering EV charger installation, generators, panel upgrades, Tesla Powerwall, and full electrical services. Free estimates!"
        />
        <Hero />
        <WorkShowcase />
        <Services />
        <Testimonials />
        <ContactForm />
      </main>
      <MobileCTA />
      <Footer />
    </div>
  );
};

export default Index;
