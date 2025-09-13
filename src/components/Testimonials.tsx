import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Andrew Cotton",
      location: "Flowery Branch, GA",
      service: "Vehicle Charger Installation",
      rating: 5,
      text: "They did awesome work installing a few banks of vehicle chargers not to mention breaker boxes for our apartment remodels. Highly Recommend.",
      avatar: "AC",
      date: "Aug 9"
    },
    {
      name: "Sergio Facyson", 
      location: "Lithonia, GA",
      service: "Electrical Service",
      rating: 5,
      text: "Staff is friendly, price was great, and on time.",
      avatar: "SF",
      date: "May 5"
    },
    {
      name: "Mike Joseph",
      location: "Gainesville, GA", 
      service: "Electrical Work",
      rating: 5,
      text: "Excellent work. Friendly. Affordable. Professional.",
      avatar: "MJ",
      date: "May 3"
    },
    {
      name: "Cody's Customer",
      location: "North Georgia",
      service: "Complete Electrical Service",
      rating: 5,
      text: "Cody was amazing to work with and it didn't feel like I was hiring some big corporation that didn't care about you. He took the time to do proper estimates, explained what he was gonna do, and completed all the work excellently. I felt like I was working with a neighbor as he was very personable. Highly recommend!",
      avatar: "CC",
      date: "Recent"
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
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-emerald-600 to-green-700 text-white px-6 py-3 text-base font-semibold">Customer Reviews</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground leading-tight">
            What Our Customers{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See why Georgia homeowners and businesses trust us with their electrical needs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/20 dark:to-green-800/20 rounded-xl border-2 border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 glow-primary relative overflow-hidden scale-on-hover fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">{testimonial.date}</span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground leading-relaxed mb-6 text-base line-clamp-4">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-foreground truncate">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground truncate">{testimonial.location}</div>
                    <Badge variant="secondary" className="text-xs mt-1 inline-block">
                      {testimonial.service}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-emerald-600 via-green-700 to-emerald-800 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Join Our Satisfied Customers</h3>
          <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-white/90 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5+ Years</div>
              <div className="text-white/90 text-sm">In Business</div>
            </div>
          </div>
          
          <p className="text-white/90 mb-8 text-lg">
            Ready to experience the Integrity EV Solutions difference? Get your free estimate today!
          </p>
          
          {/* Reviews Link */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://nextdoor.com/pages/integrity-ev-solutions-llc-flowery-branch-ga/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="scale-on-hover"
            >
              <Badge className="bg-white text-emerald-700 px-6 py-3 cursor-pointer hover:bg-white/90 transition-colors text-base font-semibold">
                ⭐⭐⭐⭐⭐ 5.0 Google Rating
              </Badge>
            </a>
            <span className="text-white/80">•</span>
            <Badge className="bg-white text-emerald-700 px-6 py-3 text-base font-semibold">
              Licensed & Insured
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;