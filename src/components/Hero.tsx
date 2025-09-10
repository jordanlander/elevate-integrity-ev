import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Award, Clock, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-glow to-primary-glow overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center text-white">
            
            {/* Trust Indicators */}
            <div className="flex justify-center gap-3 mb-8 flex-wrap fade-in-up">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all backdrop-blur-sm px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Licensed & Insured
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all backdrop-blur-sm px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Certified Installers  
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all backdrop-blur-sm px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Same-Day Service
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Professional EV Charger
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Installation
                </span>
              </h1>
            </div>
            
            {/* Subheading */}
            <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
              <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-4xl mx-auto leading-relaxed">
                Georgia homeowners trust us for{" "}
                <span className="font-semibold text-white bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
                  rebate-ready
                </span>{" "}
                EV charger installations, done right the first time by licensed electricians.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="fade-in-up mb-12" style={{animationDelay: '0.6s'}}>
              <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white/20 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2">Fast Installation</h3>
                    <p className="text-white/80 text-sm">Most installs completed in 2-4 hours</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white/20 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2">Certified & Safe</h3>
                    <p className="text-white/80 text-sm">Licensed electricians, code compliant</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white/20 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2">Rebate Assistance</h3>
                    <p className="text-white/80 text-sm">We handle paperwork and incentives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" style={{animationDelay: '0.8s'}}>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 cta-super text-xl px-12 py-7 h-auto font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-6 h-6 mr-3" />
                Get My Free Estimate
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm scale-on-hover text-lg px-8 py-7 h-auto font-semibold"
              >
                View Our Work
              </Button>
            </div>

            {/* Trust Statement */}
            <div className="fade-in-up" style={{animationDelay: '1s'}}>
              <p className="text-white/80 text-sm">
                ⭐⭐⭐⭐⭐ Rated 5.0/5 stars • 47+ satisfied customers across Georgia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Electrical Circuit Pattern - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60 L100 60 L120 40 L140 80 L160 60 L300 60 L320 40 L340 80 L360 60 L500 60 L520 40 L540 80 L560 60 L700 60 L720 40 L740 80 L760 60 L900 60 L920 40 L940 80 L960 60 L1200 60" 
                stroke="white" strokeWidth="2" fill="none"/>
          <circle cx="200" cy="60" r="4" fill="white"/>
          <circle cx="400" cy="60" r="4" fill="white"/>
          <circle cx="600" cy="60" r="4" fill="white"/>
          <circle cx="800" cy="60" r="4" fill="white"/>
          <circle cx="1000" cy="60" r="4" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;