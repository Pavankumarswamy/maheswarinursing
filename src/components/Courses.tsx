import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Users, BookOpen, Award, CheckCircle } from "lucide-react";

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-tr from-blue-50 via-white to-violet-50 relative overflow-hidden">
      {/* Interactive background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-primary/30"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-40 right-32 w-28 h-28 bg-gradient-to-r from-healthcare/20 to-primary/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 left-24 w-36 h-36 bg-gradient-to-r from-medical-accent/15 to-healthcare/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-healthcare border-healthcare">
              Academic Programs
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Choose Your Nursing Career Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive nursing programs designed to build skilled healthcare professionals 
              with quality education and practical training.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* B.Sc. Nursing Course */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-healthcare/10 pb-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary text-primary-foreground">Bachelor's Degree</Badge>
                  <Badge variant="outline" className="text-medical-accent border-medical-accent">
                    4 Years
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-navy">
                  B.Sc. Nursing
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Bachelor of Science in Nursing - Professional degree program
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">4 Years Duration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Boys & Girls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">+2 Science (PCB)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Government Approved</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">Eligibility:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">Passed +2 Science with PCB & English</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">45% for General category</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">40% for SC & ST category</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="medical" className="flex-1" asChild>
                    <Link to="/apply-online">Apply for B.Sc.</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* GNM Course */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-healthcare/20">
              <CardHeader className="bg-gradient-to-r from-healthcare/10 to-primary/10 pb-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-healthcare text-healthcare-foreground">Diploma</Badge>
                  <Badge variant="outline" className="text-medical-accent border-medical-accent">
                    3 Years
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-navy">
                  GNM (General Nursing & Midwifery)
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Comprehensive 3-year diploma program
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-healthcare" />
                    <span className="text-sm text-muted-foreground">3 Years Duration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-healthcare" />
                    <span className="text-sm text-muted-foreground">Boys & Girls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-healthcare" />
                    <span className="text-sm text-muted-foreground">+2 Any Stream</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-healthcare" />
                    <span className="text-sm text-muted-foreground">Council Approved</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">Eligibility:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">Passed 10+2 (Science/Arts/Commerce)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">40% for General category</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">35% for SC & ST category</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="healthcare" className="flex-1" asChild>
                    <Link to="/apply-online">Apply for GNM</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* ANM Course */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-medical-accent/20">
              <CardHeader className="bg-gradient-to-r from-medical-accent/10 to-primary/10 pb-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-medical-accent text-medical-accent-foreground">Certificate</Badge>
                  <Badge variant="outline" className="text-medical-accent border-medical-accent">
                    2 Years
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-navy">
                  ANM (Auxiliary Nurse Midwifery)
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  2-year certificate program for primary healthcare
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-medical-accent" />
                    <span className="text-sm text-muted-foreground">2 Years Duration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-medical-accent" />
                    <span className="text-sm text-muted-foreground">Girls Only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-medical-accent" />
                    <span className="text-sm text-muted-foreground">+2 Any Stream</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-medical-accent" />
                    <span className="text-sm text-muted-foreground">Government Approved</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">Eligibility:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">Passed 10+2 (Science/Arts/Commerce)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">Age: 17-35 years</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to="/apply-online">Apply for ANM</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* P.B.B.Sc. (N) Course */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-healthcare/10 pb-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary text-primary-foreground">Post Basic</Badge>
                  <Badge variant="outline" className="text-medical-accent border-medical-accent">
                    2 Years
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-navy">
                  P.B.B.Sc. (N)
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Post Basic Bachelor of Science in Nursing
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">2 Years Duration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Boys & Girls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">GNM Required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Degree Program</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">Eligibility:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">Passed GNM with registration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">Upgrade to bachelor's degree</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="medical" className="flex-1" asChild>
                    <Link to="/apply-online">Apply for P.B.B.Sc.</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* M.Sc. Nursing Course */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-healthcare/20 lg:col-span-2">
              <CardHeader className="bg-gradient-to-r from-healthcare/10 to-primary/10 pb-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-healthcare text-healthcare-foreground">Master's Degree</Badge>
                  <Badge variant="outline" className="text-medical-accent border-medical-accent">
                    2 Years
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-navy">
                  M.Sc. Nursing
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Master of Science in Nursing - Advanced professional practice
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-healthcare" />
                    <span className="text-sm text-muted-foreground">2 Years Duration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-healthcare" />
                    <span className="text-sm text-muted-foreground">Boys & Girls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-healthcare" />
                    <span className="text-sm text-muted-foreground">B.Sc. Nursing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-healthcare" />
                    <span className="text-sm text-muted-foreground">Postgraduate</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">Eligibility:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">Passed B.Sc. Nursing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">Minimum 1 year registration as nurse</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">Advanced clinical practice and research focus</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <Button variant="healthcare" className="flex-1" asChild>
                    <Link to="/apply-online">Apply for M.Sc.</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary to-healthcare text-white shadow-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Nursing Journey?</h3>
              <p className="text-lg mb-6 text-white/90">
                Join Maheshwari Nursing College and build a rewarding career in healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link to="/apply-online">Apply Now</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  Schedule Campus Visit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Courses;
