import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkShowcase from "@/components/WorkShowcase";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main role="main">
        <SEO
          title="Professional EV Charger Installation | Integrity EV Solutions | Georgia"
          description="Professional EV charger installation in Georgia. Fast, certified, rebate-ready installations by licensed electricians. Serving Atlanta & Northern Georgia. Get your free estimate today!"
        />
        <Hero />
        <WorkShowcase />
        <Services />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
