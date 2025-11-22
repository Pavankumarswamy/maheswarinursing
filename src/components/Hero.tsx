import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Award, MapPin } from "lucide-react";
import nursingHero from "@/assets/nursing-hero.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.3);
  const { ref: highlightsRef, isVisible: highlightsVisible } = useScrollAnimation(0.2);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={nursingHero}
          alt="Nursing Students in Professional Attire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-primary/80 to-healthcare/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div 
            ref={heroRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 transform ${
              heroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-accent to-yellow-300">
                Maheshwari Nursing College
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
              Excellence in Nursing Education
            </p>

            <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto">
              Approved by Odisha Nurses & Midwives Registration Council under DMET, Govt. of Odisha. 
              Affiliated with Sambalpur University & Indian Nursing Council.
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            ref={ctaRef as React.RefObject<HTMLDivElement>}
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 transform delay-300 ${
              ctaVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 hover-scale" asChild>
              <Link to="/apply-online">Apply for Admission 2025-26</Link>
            </Button>
          </div>

          {/* Key Highlights */}
          <div 
            ref={highlightsRef as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 transform delay-600 ${
              highlightsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6 hover-scale animate-fade-in">
              <GraduationCap className="h-12 w-12 mx-auto mb-4 text-medical-accent" />
              <h3 className="text-xl font-semibold mb-2 text-white">Expert Curriculum</h3>
              <p className="text-white/80">Comprehensive training with practical & clinical exposure</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6 hover-scale animate-fade-in">
              <Users className="h-12 w-12 mx-auto mb-4 text-medical-accent" />
              <h3 className="text-xl font-semibold mb-2 text-white">Modern Facilities</h3>
              <p className="text-white/80">State-of-the-art labs, hostel & clinical training centers</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6 hover-scale animate-fade-in">
              <Award className="h-12 w-12 mx-auto mb-4 text-medical-accent" />
              <h3 className="text-xl font-semibold mb-2 text-white">100% Job Guarantee</h3>
              <p className="text-white/80">Guaranteed placement with professional development</p>
            </Card>
          </div>

          {/* Location */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover-scale animate-scale-in">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-6 w-6 text-medical-accent" />
                <h4 className="text-lg font-semibold text-white">Campus Location</h4>
              </div>
              <p className="text-white/80">
                Maheshwari Nursing College, Bhatli Chowk, Bargarh, Odisha, PIN: 768028
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;