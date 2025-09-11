import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Zap,
  CheckCircle
} from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [service, setService] = useState("");
  const [timeline, setTimeline] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("_captcha", "false");

    try {
      const response = await fetch(
        "https://formsubmit.co/integrityevsolutions@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast({
          title: "Request Received!",
          description: "We'll contact you within 24 hours with your free estimate.",
        });
        e.currentTarget.reset();
        setService("");
        setTimeline("");
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description:
          "Please try again later. You can also call us directly at 470-262-2660.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call or Text",
      value: "470-262-2660",
      description: "Mon–Fri: 8 am–6 pm",
      action: "Call Now",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "integrityevsolutions@gmail.com",
      description: "We respond within 24 hours",
      action: "Send Email",
      gradient: "bg-gradient-accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Service Area",
      value: "All of Northern Georgia",
      description: "Licensed statewide",
      action: "Check Coverage",
      gradient: "bg-gradient-electric"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="contact">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">Get Your Free Estimate</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Get
            <span className="text-gradient-electric block">Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get a free, no-obligation estimate for your EV charger installation. Our certified electricians are standing by to help you go electric.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${method.gradient} text-white flex-shrink-0`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                      <p className="font-bold text-lg text-primary mb-1">{method.value}</p>
                      <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs"
                        onClick={() => {
                          if (method.title === "Call or Text") {
                            window.location.href = "tel:4702622660";
                          } else if (method.title === "Email") {
                            window.location.href = "mailto:integrityevsolutions@gmail.com";
                          } else if (method.title === "Service Area") {
                            // Show coverage info
                            alert("We proudly serve all of Northern Georgia including Atlanta, Alpharetta, Roswell, Marietta, Decatur, Duluth, Lawrenceville, Johns Creek, Sandy Springs, Brookhaven, and surrounding areas. Licensed for statewide service!");
                          }
                        }}
                      >
                        {method.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Notice */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-accent" />
                <h4 className="font-bold text-accent">24/7 Emergency Service</h4>
              </div>
              <p className="text-sm text-foreground mb-3">
                Electrical emergencies can't wait. We're available around the clock for urgent electrical issues.
              </p>
              <Button 
                className="w-full bg-gradient-accent glow-accent"
                onClick={() => window.location.href = "tel:4702622660"}
              >
                Call Emergency Line
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 glow-primary">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary" />
                  Request Your Free Estimate
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll contact you within 24 hours with a detailed estimate.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required className="mt-1" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required className="mt-1" />
                    </div>
                  </div>

                  {/* Service Info */}
                  <div>
                    <Label htmlFor="service">Service Needed *</Label>
                    <Select required onValueChange={setService}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select the service you need" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential-ev">Residential EV Charger Installation</SelectItem>
                        <SelectItem value="commercial-ev">Commercial EV Charging</SelectItem>
                        <SelectItem value="panel-upgrade">Electrical Panel Upgrade</SelectItem>
                        <SelectItem value="general-electrical">General Electrical Work</SelectItem>
                        <SelectItem value="emergency">Emergency Service</SelectItem>
                        <SelectItem value="consultation">Consultation Only</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="service" value={service} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" name="city" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="timeline">Preferred Timeline</Label>
                      <Select onValueChange={setTimeline}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="1-2-weeks">Within 1-2 weeks</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="timeline" value={timeline} />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <Label htmlFor="details">Project Details</Label>
                    <Textarea
                      id="details"
                      name="details"
                      placeholder="Tell us about your project, any specific requirements, questions, or concerns..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-accent glow-accent hover:scale-[1.02] transition-all duration-300 text-lg py-6 h-auto font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-foreground mr-2"></div>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Get My Free Estimate
                      </>
                    )}
                  </Button>

                  {/* Trust Indicators */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>No obligation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Free estimate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>24-hour response</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;