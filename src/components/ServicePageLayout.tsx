import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import MobileCTA from "@/components/MobileCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Phone, ArrowRight, Shield, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  badge: string;
  description: string;
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  faqs: FAQ[];
  relatedServices: { title: string; href: string; description: string }[];
  certifications?: string[];
  children?: ReactNode;
}

const ServicePageLayout = ({
  title,
  metaTitle,
  metaDescription,
  heroTitle,
  heroSubtitle,
  heroImage,
  badge,
  description,
  benefits,
  process,
  faqs,
  relatedServices,
  certifications = [],
  children,
}: ServicePageLayoutProps) => {
  // Create FAQ structured data for rich search results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SEO 
        title={metaTitle} 
        description={metaDescription}
        canonicalUrl={`https://www.integrityevsolutions.com${typeof window !== 'undefined' ? window.location.pathname : ''}`}
        structuredData={faqSchema}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-emerald-600 via-green-700 to-emerald-800 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20zM40 40h20v20H40zM60 60h20v20H60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 pt-12 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-white/80">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column: Text content */}
            <div className="max-w-xl">
              <Badge className="mb-4 bg-gradient-to-r from-yellow-400/90 to-orange-500/90 text-gray-900 border-0">
                {badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
                {heroSubtitle}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="bg-white/20 text-white border border-white/30 px-3 py-1.5">
                  <Shield className="w-4 h-4 mr-2" />
                  Licensed & Insured
                </Badge>
                <Badge className="bg-white/20 text-white border border-white/30 px-3 py-1.5">
                  <Award className="w-4 h-4 mr-2" />
                  Tesla Certified
                </Badge>
                <Badge className="bg-white/20 text-white border border-white/30 px-3 py-1.5">
                  <Clock className="w-4 h-4 mr-2" />
                  Same-Day Service
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-gray-900 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 text-lg px-8 py-6 h-auto font-bold shadow-2xl"
                  asChild
                >
                  <Link to="/#contact">
                    Get Free Estimate
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/90 border-2 border-white text-gray-900 hover:bg-white text-lg px-8 py-6 h-auto font-semibold"
                  asChild
                >
                  <a href="tel:4702622660">
                    <Phone className="w-5 h-5 mr-2" />
                    (470) 262-2660
                  </a>
                </Button>
              </div>
            </div>

            {/* Right column: Hero image (desktop) */}
            {heroImage && (
              <div className="hidden lg:block">
                <img 
                  src={heroImage} 
                  alt={title}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            )}
          </div>

          {/* Mobile hero image - below content for clean layout */}
          {heroImage && (
            <div className="lg:hidden mt-8">
              <img 
                src={heroImage} 
                alt={title}
                className="rounded-xl shadow-xl w-full h-48 sm:h-56 object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Description Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            About This Service
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {description}
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        {certifications.length > 0 && (
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
              Our Certifications
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-base px-4 py-2"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Custom Content Slot */}
        {children}

        {/* Process Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            Our Installation Process
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <Card
                key={index}
                className="relative overflow-hidden group hover:shadow-lg transition-all"
              >
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related Services */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <Link key={index} to={service.href}>
                <Card className="h-full hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-cta" className="max-w-4xl mx-auto">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-6 text-white/90">
              Get a free, no-obligation estimate for your {title.toLowerCase()}{" "}
              project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-accent glow-accent hover:scale-105 transition-all duration-300 text-lg px-8 py-6 h-auto font-semibold"
                onClick={() => (window.location.href = "/#contact")}
              >
                Get My Free Estimate
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6 h-auto font-semibold"
                asChild
              >
                <a href="tel:4702622660">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <MobileCTA />
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
