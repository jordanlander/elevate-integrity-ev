import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Award, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center text-white relative">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Indicators */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors">
              <Shield className="w-4 h-4 mr-2" />
              Licensed & Insured
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors">
              <Award className="w-4 h-4 mr-2" />
              Certified Installers
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors">
              <Clock className="w-4 h-4 mr-2" />
              Same-Day Service
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Professional EV Charger
            <span className="block text-gradient-electric">Installation</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Georgia homeowners trust us for <span className="font-semibold text-accent">rebate-ready</span> EV charger installations, 
            done right the first time by licensed electricians.
          </p>

          {/* Value Propositions */}
          <div className="flex justify-center gap-8 mb-10 flex-wrap text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span>Fast Installation</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Certified & Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span>Rebate Assistance</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up">
            <Button 
              size="lg" 
              className="bg-gradient-accent glow-accent cta-super text-white text-xl px-12 py-7 h-auto font-bold shadow-2xl border-2 border-accent/30"
            >
              🚗⚡ Get My Free Estimate
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm scale-on-hover text-lg px-8 py-6 h-auto font-semibold"
            >
              View Our Work
            </Button>
          </div>

          {/* Trust Statement */}
          <p className="mt-8 text-white/70 text-sm">
            ⭐⭐⭐⭐⭐ Rated 5.0/5 by 47+ satisfied customers across Georgia
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-electric-cyan/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;