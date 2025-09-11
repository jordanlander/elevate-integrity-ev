import Navigation from "@/components/Navigation";
import MobileCTA from "@/components/MobileCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Navigation />
      <main
        className="container mx-auto px-4 pt-28 md:pt-32 pb-12"
        role="main"
      >
        <SEO
          title="Sitemap | Integrity EV Solutions"
          description="Browse the Integrity EV Solutions sitemap for quick access to all pages."
        />
        <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
        <nav aria-label="Sitemap">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <Link className="underline hover:text-accent" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="underline hover:text-accent" to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="underline hover:text-accent" to="/terms-of-service">
                Terms of Service
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <MobileCTA />
      <Footer />
    </div>
  );
};

export default Sitemap;
