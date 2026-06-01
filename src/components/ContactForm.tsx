import { useEffect, useState } from "react";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Zap,
} from "lucide-react";
import { useTrackingPhone } from "@/hooks/use-tracking-phone";

const CONTACT_EMAIL = "integrityevsolutions@gmail.com";
const MAILTO_SUBJECT = "Free estimate request - Integrity EV Solutions";

const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number too long").regex(/^[\d\s\-()+.]+$/, "Enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  city: z.string().trim().min(1, "City is required").max(100, "City name too long"),
  timeline: z.string().optional(),
  details: z.string().max(2000, "Details must be less than 2000 characters").optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  city: "",
  timeline: "",
  details: "",
};

const serviceOptions = [
  { value: "Residential EV Charger Installation", label: "Residential EV Charger Installation" },
  { value: "Commercial EV Charging", label: "Commercial EV Charging" },
  { value: "Tesla Powerwall Installation", label: "Tesla Powerwall Installation" },
  { value: "Electrical Panel Upgrade", label: "Electrical Panel Upgrade" },
  { value: "General Electrical Work", label: "General Electrical Work" },
  { value: "Emergency Service", label: "Emergency Service" },
  { value: "Consultation Only", label: "Consultation Only" },
];

const timelineOptions = [
  { value: "As soon as possible", label: "As soon as possible" },
  { value: "Within 1-2 weeks", label: "Within 1-2 weeks" },
  { value: "Within 1 month", label: "Within 1 month" },
  { value: "Flexible", label: "I'm flexible" },
];

function buildEstimateSummary(data: ContactFormData, utmParams: Record<string, string>) {
  const fullName = `${data.firstName.trim()} ${data.lastName.trim()}`.trim();
  const bodyLines = [
    "New estimate request from integrityevsolutions.com",
    "",
    `Name: ${fullName}`,
    `Email: ${data.email.trim()}`,
    `Phone: ${data.phone.trim()}`,
    `Service needed: ${data.service}`,
    `City: ${data.city.trim()}`,
    `Preferred timeline: ${data.timeline || "Not specified"}`,
    "",
    "Project details:",
    data.details?.trim() || "Not provided",
    "",
    "Lead attribution:",
    `Source: ${utmParams.utm_source || "Not provided"}`,
    `Medium: ${utmParams.utm_medium || "Not provided"}`,
    `Campaign: ${utmParams.utm_campaign || "Not provided"}`,
  ];

  return bodyLines.join("\n");
}

function buildMailtoLink(data: ContactFormData, utmParams: Record<string, string>) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(MAILTO_SUBJECT)}&body=${encodeURIComponent(buildEstimateSummary(data, utmParams))}`;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [mailtoLink, setMailtoLink] = useState(`mailto:${CONTACT_EMAIL}`);
  const [hasValidated, setHasValidated] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });
  const phone = useTrackingPhone();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const captured = {
      utm_source: params.get("utm_source") || localStorage.getItem("utm_source") || "",
      utm_medium: params.get("utm_medium") || localStorage.getItem("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || localStorage.getItem("utm_campaign") || "",
    };

    if (params.get("utm_source")) {
      localStorage.setItem("utm_source", params.get("utm_source") || "");
      localStorage.setItem("utm_medium", params.get("utm_medium") || "");
      localStorage.setItem("utm_campaign", params.get("utm_campaign") || "");
    }

    setUtmParams(captured);
  }, []);

  useEffect(() => {
    setMailtoLink(buildMailtoLink(formData, utmParams));
  }, [formData, utmParams]);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const copyEstimateDetails = async () => {
    if (!validateForm()) {
      return;
    }

    const summary = buildEstimateSummary(formData, utmParams);
    try {
      await navigator.clipboard.writeText(summary);
      setCopyMessage("Estimate details copied. Paste them into a text or email to send them manually.");
    } catch {
      setCopyMessage("Copy did not work in this browser. Select the text below and copy it manually.");
    }
  };

  const validateForm = () => {
    const result = contactFormSchema.safeParse(formData);

    if (result.success) {
      setErrors({});
      setHasValidated(true);
      return true;
    }

    const fieldErrors: ContactFormErrors = {};
    result.error.errors.forEach((err) => {
      const fieldName = err.path[0] as keyof ContactFormData | undefined;
      if (fieldName) {
        fieldErrors[fieldName] = err.message;
      }
    });

    setErrors(fieldErrors);
    setHasValidated(false);
    setCopyMessage("");
    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    window.location.href = buildMailtoLink(formData, utmParams);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call or Text",
      value: phone.display,
      description: "Mon–Fri: 8 am–6 pm",
      action: "Call Now",
      gradient: "bg-gradient-primary",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: CONTACT_EMAIL,
      description: "We respond within 24 hours",
      action: "Send Email",
      gradient: "bg-gradient-accent",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Service Area",
      value: "All of Northern Georgia",
      description: "Licensed statewide",
      action: "Check Coverage",
      gradient: "bg-gradient-electric",
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="contact">
      <div className="container mx-auto px-4">
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

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${method.gradient} text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-1">{method.title}</h3>
                      <p className="text-primary font-medium mb-1">{method.value}</p>
                      <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => {
                          if (method.title === "Call or Text") {
                            window.location.href = phone.href;
                          } else if (method.title === "Email") {
                            window.location.href = `mailto:${CONTACT_EMAIL}`;
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

            <div className="bg-gradient-primary text-white p-6 rounded-xl glow-primary">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6" />
                <h3 className="font-bold text-lg">Emergency Service</h3>
              </div>
              <p className="mb-4 text-white/90">
                Need urgent electrical work? We offer emergency services for critical electrical issues.
              </p>
              <Button className="w-full bg-gradient-accent glow-accent" onClick={() => (window.location.href = phone.href)}>
                Call Emergency Line
              </Button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Card className="border border-border bg-card overflow-hidden glow-primary">
              <div className="h-1.5 w-full bg-gradient-electric" />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary" />
                  Request Your Free Estimate
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your project and our Tesla-certified team will get back to you within 24 hours.
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateField("firstName", e.target.value)}
                        required
                        className="mt-1"
                        autoComplete="given-name"
                      />
                      {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateField("lastName", e.target.value)}
                        required
                        className="mt-1"
                        autoComplete="family-name"
                      />
                      {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        required
                        className="mt-1"
                        autoComplete="email"
                      />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        required
                        className="mt-1"
                        autoComplete="tel"
                      />
                      {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Needed *</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => updateField("service", e.target.value)}
                      required
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select the service you need</option>
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="text-sm text-destructive mt-1">{errors.service}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={(e) => updateField("city", e.target.value)}
                        required
                        className="mt-1"
                        autoComplete="address-level2"
                      />
                      {errors.city && <p className="text-sm text-destructive mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <Label htmlFor="timeline">Preferred Timeline</Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={(e) => updateField("timeline", e.target.value)}
                        className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">When do you need this completed?</option>
                        {timelineOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="details">Project Details</Label>
                    <Textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={(e) => updateField("details", e.target.value)}
                      placeholder="Tell us about your project, any specific requirements, questions, or concerns..."
                      className="mt-1 min-h-[120px]"
                      maxLength={2000}
                    />
                    {errors.details && <p className="text-sm text-destructive mt-1">{errors.details}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary glow-primary hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 text-lg py-6 h-auto font-semibold gap-2"
                  >
                    Send Request
                    <ArrowRight className="w-5 h-5" />
                  </Button>

                  {hasValidated && (
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground">Your estimate request is ready to send.</p>
                      <p>
                        If your email app did not open, call or text <a className="font-medium text-primary underline" href={phone.href}>{phone.display}</a> or email <a className="font-medium text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                      </p>
                      <div className="mt-3 space-y-2">
                        <Button type="button" variant="outline" size="sm" onClick={copyEstimateDetails}>
                          Copy Request Details
                        </Button>
                        {copyMessage && <p>{copyMessage}</p>}
                        <Textarea
                          readOnly
                          value={buildEstimateSummary(formData, utmParams)}
                          className="min-h-[180px] bg-background text-xs"
                          aria-label="Estimate request details"
                        />
                      </div>
                    </div>
                  )}

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
