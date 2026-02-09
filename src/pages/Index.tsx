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
          description="Professional EV charger installation in Georgia. Fast, certified, rebate-ready installations by licensed electricians. Serving Atlanta & Northern Georgia. Get your free estimate today!"
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
