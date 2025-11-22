import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Heart, Shield, Star } from "lucide-react";
import chairmanImage from "@/assets/chairman-rakhi-tandia.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  const { ref: chairmanRef, isVisible: chairmanVisible } = useScrollAnimation(0.3);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-violet-50 via-blue-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-healthcare/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-healthcare/15 to-medical-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-medical-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 transition-all duration-1000 transform ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              About Our Institution
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Excellence in Nursing Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Maheshwari Nursing College is a premier institution for nursing education in Odisha, 
              committed to providing quality education and skilled healthcare professionals.
            </p>
          </div>

          {/* Main Content Grid */}
          <div 
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={`space-y-12 mb-16 transition-all duration-1000 transform delay-300 ${
              contentVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* First Row - Mission, Vision, Approvals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <Card className="shadow-lg hover-scale animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-8 w-8 text-medical-accent" />
                    <h3 className="text-2xl font-bold text-navy">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to provide quality education in nursing, preparing students to excel 
                    in healthcare and become compassionate, skilled professionals dedicated to patient care.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="shadow-lg hover-scale animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-navy">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become a leader in nursing education and provide skilled healthcare professionals 
                    who make a meaningful impact on healthcare outcomes locally and globally.
                  </p>
                </CardContent>
              </Card>

              {/* Approvals */}
              <Card className="shadow-lg border-primary/20 hover-scale animate-scale-in">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-8 w-8 text-healthcare" />
                    <h3 className="text-2xl font-bold text-navy">Official Approvals</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-muted-foreground">Odisha Nurses & Midwives Registration Council</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-muted-foreground">DMET, Govt. of Odisha</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-muted-foreground">Affiliated with Sambalpur University</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-muted-foreground">Indian Nursing Council</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Second Row - Why Choose Us */}
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-healthcare/5 hover-scale animate-scale-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-navy mb-4 text-center">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Expert faculty with industry experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Clinical training at leading hospitals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">100% placement assistance guarantee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Scholarship support for ST/SC candidates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Modern hostel facilities for outstation students</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Welcome Message */}
          <Card 
            ref={chairmanRef as React.RefObject<HTMLDivElement>}
            className={`shadow-xl bg-gradient-to-r from-navy/5 to-primary/5 hover-scale transition-all duration-1000 transform delay-600 ${
              chairmanVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <CardContent className="p-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-navy mb-6">Welcome to Maheshwari Nursing College</h3>
                <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed max-w-4xl mx-auto">
                  "At Maheshwari Nursing College, we are committed to providing excellence in nursing education. 
                  Our institution nurtures compassionate and skilled healthcare professionals who serve with 
                  dedication and expertise. With quality education, modern facilities, and strong industry connections, 
                  we prepare our students to excel in their nursing careers and make a positive impact on healthcare."
                </blockquote>
                <div className="text-center">
                  <p className="text-lg font-semibold text-navy">Maheshwari Nursing College</p>
                  <p className="text-muted-foreground">Approved by Odisha Nurses & Midwives Registration Council</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;