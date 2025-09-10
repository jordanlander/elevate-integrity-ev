import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Award, Clock, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-600 via-green-700 to-emerald-800 overflow-hidden">
      {/* Animated Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute inset-0 animate-pulse" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20zM40 40h20v20H40zM60 60h20v20H60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-r from-green-400/30 to-emerald-500/30 rounded-full blur-lg animate-bounce" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-green-400/25 to-emerald-500/25 rounded-full blur-xl animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center text-white">
            
            {/* Trust Indicators */}
            <div className="flex justify-center gap-3 mb-8 flex-wrap fade-in-up">
              <Badge className="bg-gradient-to-r from-yellow-400/90 to-orange-500/90 text-gray-900 border-2 border-yellow-300/50 hover:from-yellow-300 hover:to-orange-400 transition-all backdrop-blur-sm px-4 py-2 font-semibold shadow-lg">
                <Shield className="w-4 h-4 mr-2" />
                Licensed & Insured
              </Badge>
              <Badge className="bg-gradient-to-r from-cyan-400/90 to-blue-500/90 text-white border-2 border-cyan-300/50 hover:from-cyan-300 hover:to-blue-400 transition-all backdrop-blur-sm px-4 py-2 font-semibold shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                Certified Installers  
              </Badge>
              <Badge className="bg-gradient-to-r from-green-400/90 to-emerald-500/90 text-white border-2 border-green-300/50 hover:from-green-300 hover:to-emerald-400 transition-all backdrop-blur-sm px-4 py-2 font-semibold shadow-lg">
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
              <p className="text-xl md:text-2xl mb-10 text-white max-w-4xl mx-auto leading-relaxed">
                Georgia homeowners trust us for{" "}
                <span className="inline-flex items-center font-semibold text-gray-900 bg-gradient-to-r from-yellow-300 to-orange-400 px-2 py-1 rounded-lg text-base border border-yellow-200/50 shadow-md">
                  💡 rebate-ready
                </span>{" "}
                EV charger installations, done right the first time by licensed electricians.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="fade-in-up mb-12" style={{animationDelay: '0.6s'}}>
              <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-300/30 hover:border-yellow-300/60 hover:from-white/30 hover:to-white/20 transition-all group shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Zap className="w-8 h-8 text-gray-900" />
                    </div>
                    <h3 className="font-bold text-xl text-white mb-2">⚡ Fast Installation</h3>
                    <p className="text-white/90 text-base">Most installs completed in 2-4 hours</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-300/30 hover:border-cyan-300/60 hover:from-white/30 hover:to-white/20 transition-all group shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-white mb-2">🛡️ Certified & Safe</h3>
                    <p className="text-white/90 text-base">Licensed electricians, code compliant</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-green-300/30 hover:border-green-300/60 hover:from-white/30 hover:to-white/20 transition-all group shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-white mb-2">💰 Rebate Assistance</h3>
                    <p className="text-white/90 text-base">We handle paperwork and incentives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" style={{animationDelay: '0.8s'}}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-gray-900 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 cta-super text-xl px-12 py-7 h-auto font-bold shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 border-2 border-yellow-300/50"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="w-6 h-6 mr-3" />
                🚀 Get My Free Estimate
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/90 border-2 border-white text-gray-900 hover:bg-white hover:text-gray-800 backdrop-blur-sm scale-on-hover text-lg px-8 py-7 h-auto font-semibold shadow-lg transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                📸 View Our Work
              </Button>
            </div>

            {/* Trust Statement */}
            <div className="fade-in-up" style={{animationDelay: '1s'}}>
              <p className="text-white/90 text-base mb-2">
                ⭐⭐⭐⭐⭐ Rated 5.0/5 stars • 47+ satisfied customers across Georgia
              </p>
              <p className="text-white/80 text-sm">
                🏛️ Georgia Licensed Electrical Contractor #EN217457
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Electrical Circuit Pattern - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-25">
        <svg className="w-full h-full" viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60 L100 60 L120 40 L140 80 L160 60 L300 60 L320 40 L340 80 L360 60 L500 60 L520 40 L540 80 L560 60 L700 60 L720 40 L740 80 L760 60 L900 60 L920 40 L940 80 L960 60 L1200 60" 
                stroke="white" strokeWidth="3" fill="none"/>
          <circle cx="200" cy="60" r="5" fill="white"/>
          <circle cx="400" cy="60" r="5" fill="white"/>
          <circle cx="600" cy="60" r="5" fill="white"/>
          <circle cx="800" cy="60" r="5" fill="white"/>
          <circle cx="1000" cy="60" r="5" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;