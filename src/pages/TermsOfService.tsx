import Navigation from "@/components/Navigation";
import MobileCTA from "@/components/MobileCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Navigation />
      <main
        className="container mx-auto px-4 pt-28 md:pt-32 pb-12"
        role="main"
      >
        <SEO
          title="Terms of Service | Integrity EV Solutions"
          description="Review the terms and conditions for using Integrity EV Solutions services."
        />
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">
          By accessing our website or using our services, you agree to the following terms and
          conditions. Please read them carefully before proceeding.
        </p>
        <p className="mb-4">
          These terms ensure a clear understanding of our responsibilities and your rights as a
          customer of Integrity EV Solutions.
        </p>
      </main>
      <MobileCTA />
      <Footer />
    </div>
  );
};

export default TermsOfService;
