import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Alpharetta, GA",
      service: "Tesla Charger Installation",
      rating: 5,
      text: "Incredible service from start to finish! The team was professional, punctual, and explained every step of the installation process. My Tesla charger works perfectly and the installation looks clean and professional.",
      avatar: "SJ"
    },
    {
      name: "Mike Chen", 
      location: "Atlanta, GA",
      service: "Commercial EV Charging",
      rating: 5,
      text: "We needed EV charging for our office building and Integrity EV Solutions delivered beyond expectations. They handled all permits, rebates, and the installation was seamless. Our tenants love the new amenity!",
      avatar: "MC"
    },
    {
      name: "Jennifer Williams",
      location: "Roswell, GA", 
      service: "Panel Upgrade + EV Charger",
      rating: 5,
      text: "Our old electrical panel couldn't handle an EV charger, but they upgraded everything and installed our Ford charger in one day. The rebate assistance saved us hundreds of dollars. Highly recommend!",
      avatar: "JW"
    },
    {
      name: "David Rodriguez",
      location: "Marietta, GA",
      service: "Electrical Troubleshooting",
      rating: 5,
      text: "Had an electrical emergency late at night and they actually answered! Fixed our power issue quickly and professionally. It's rare to find such reliable service these days. Will definitely use them again.",
      avatar: "DR"
    }
  ];

  const stats = [
    { number: "500+", label: "Installations Completed", icon: "⚡" },
    { number: "5.0", label: "Average Rating", icon: "⭐" },
    { number: "24/7", label: "Emergency Service", icon: "🚨" },
    { number: "100%", label: "Code Compliance", icon: "✅" }
  ];

  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">Customer Reviews</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our Customers
            <span className="text-gradient-electric block">Are Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See why Georgia homeowners and businesses trust us with their electrical needs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-xl glow-primary">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 glow-primary relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {testimonial.service}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Satisfied Customers</h3>
          <div className="flex justify-center items-center gap-8 mb-6 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-white/90 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5+ Years</div>
              <div className="text-white/90 text-sm">In Business</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">A+</div>
              <div className="text-white/90 text-sm">BBB Rating</div>
            </div>
          </div>
          
          <p className="text-white/90 mb-6">
            Ready to experience the Integrity EV Solutions difference? Get your free estimate today!
          </p>
          
          {/* Google Reviews Link */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Badge className="bg-white text-primary px-4 py-2">
              ⭐⭐⭐⭐⭐ 5.0 Google Rating
            </Badge>
            <span className="text-white/80">•</span>
            <Badge className="bg-white text-primary px-4 py-2">
              Licensed & Insured #12345
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;