import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "./ContactForm";
import { GraduationCap, Users, Award, ArrowRight, Stethoscope, Heart } from "lucide-react";

const QuickApplication = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-healthcare/20 to-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 left-24 w-32 h-32 bg-gradient-to-br from-medical-accent/15 to-healthcare/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-primary/20 to-medical-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Medical Icons Pattern */}
        <div className="absolute top-32 left-32 text-primary/10">
          <Stethoscope className="h-16 w-16 animate-[pulse_3s_ease-in-out_infinite]" />
        </div>
        <div className="absolute bottom-32 right-32 text-healthcare/10">
          <Heart className="h-20 w-20 animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute top-1/3 left-1/5 text-medical-accent/10">
          <GraduationCap className="h-12 w-12 animate-[pulse_2.5s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 animate-fade-in">
              <GraduationCap className="h-4 w-4 mr-2" />
              Quick Application
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 animate-fade-in">
              Start Your Healthcare Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Take the first step towards a rewarding career in nursing. Our quick application 
              process makes it easy to begin your journey to becoming a healthcare hero.
            </p>
          </div>


          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-primary via-healthcare to-medical-accent text-white shadow-xl animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
                <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                  Join thousands of successful nursing graduates who are making a real impact in healthcare. 
                  Your journey to becoming a healthcare hero starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center gap-2 text-white/90">
                    <Award className="h-5 w-5" />
                    <span className="text-sm">Government Approved</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Users className="h-5 w-5" />
                    <span className="text-sm">Expert Faculty</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <GraduationCap className="h-5 w-5" />
                    <span className="text-sm">Modern Curriculum</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickApplication;