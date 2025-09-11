import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12" role="main">
        <SEO
          title="Privacy Policy | Integrity EV Solutions"
          description="Learn how Integrity EV Solutions collects, uses, and protects your information."
        />
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Integrity EV Solutions respects your privacy. This policy outlines how we handle your
          personal information when you use our services or website.
        </p>
        <p className="mb-4">
          We collect only the data necessary to provide our services and never sell or share your
          information without consent. For questions about this policy, please contact us.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
