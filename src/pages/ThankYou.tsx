import { Link } from "react-router-dom";
import { CheckCircle, Phone, Home } from "lucide-react";
import Navigation from "@/components/Navigation";
import MobileCTA from "@/components/MobileCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useTrackingPhone } from "@/hooks/use-tracking-phone";

const ThankYou = () => {
  const phone = useTrackingPhone();

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Navigation />
      <main className="container mx-auto px-4 pt-28 md:pt-32 pb-12" role="main">
        <SEO
          title="Thank You | Integrity EV Solutions"
          description="Your request has been received. Our certified electricians will contact you within 24 hours with your free estimate."
        />
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Request Received!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thanks for reaching out. One of our certified electricians will contact you
            within 24 hours with your free, no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-accent glow-accent"
              onClick={() => (window.location.href = phone.href)}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call or Text {phone.display}
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <MobileCTA />
      <Footer />
    </div>
  );
};

export default ThankYou;