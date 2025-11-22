import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Clock, Users, BookOpen, Award, Download, CheckCircle, 
  GraduationCap, Stethoscope, Heart, Brain 
} from "lucide-react";
import { useEffect } from "react";

const OurCourses = () => {
  useEffect(() => {
    document.title = "Our Courses - Maheshwari Nursing College | Comprehensive Nursing Programs";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 
      'Explore comprehensive nursing programs at Maheshwari Nursing College including GNM, B.Sc., ANM, P.B.B.Sc., and M.Sc. Nursing with quality education.'
    );
  }, []);

  const courses = [
    {
      id: 1,
      title: "General Nursing & Midwifery (GNM)",
      duration: "3 Years",
      eligibility: "+2 Pass (Any Stream)",
      type: "Diploma",
      popularity: "Most Popular",
      highlights: [
        "100% Job Guarantee",
        "Open to Girls & Boys",
        "Practical & Clinical Training",
        "Government Approved",
        "Modern Curriculum",
        "Expert Faculty"
      ],
      clinicalPartners: [
        "D.H.H. Sambalpur",
        "CHC-Themra", 
        "UPHC Maneswar"
      ],
      careerOpportunities: [
        "Staff Nurse in Hospitals",
        "Community Health Nurse",
        "School Health Nurse",
        "Industrial Nurse",
        "Private Practice",
        "Healthcare Management"
      ],
      subjects: [
        "Anatomy & Physiology",
        "Nursing Foundation",
        "Medical-Surgical Nursing",
        "Community Health Nursing",
        "Mental Health Nursing",
        "Midwifery & Obstetric Nursing",
        "Pediatric Nursing",
        "Nursing Administration"
      ],
      fees: "Contact for Details",
      icon: <Stethoscope className="h-8 w-8" />
    },
    {
      id: 2,
      title: "Bachelor of Science in Nursing (B.Sc.)",
      duration: "4 Years",
      eligibility: "+2 with Science (PCB)",
      type: "Degree",
      popularity: "Professional Choice",
      highlights: [
        "100% Job Guarantee",
        "Higher Education Pathway",
        "Research Opportunities",
        "Leadership Training",
        "International Standards",
        "Advanced Clinical Skills"
      ],
      clinicalPartners: [
        "Multi-Specialty Hospitals",
        "Medical Colleges",
        "Community Health Centers"
      ],
      careerOpportunities: [
        "Registered Nurse (RN)",
        "Nurse Educator",
        "Nursing Supervisor",
        "Research Nurse",
        "Public Health Nurse",
        "Nursing Administrator",
        "Clinical Specialist",
        "International Opportunities"
      ],
      subjects: [
        "Nursing Foundation",
        "Medical-Surgical Nursing",
        "Maternal & Child Health Nursing",
        "Mental Health Nursing",
        "Community Health Nursing",
        "Nursing Research & Statistics",
        "Nursing Administration & Management",
        "Nursing Education"
      ],
      fees: "Contact for Details",
      icon: <GraduationCap className="h-8 w-8" />
    }
  ];

  const additionalPrograms = [
    {
      title: "Post Basic B.Sc. Nursing",
      duration: "2 Years",
      eligibility: "GNM + 1 Year Experience",
      description: "Upgrade your GNM qualification to a Bachelor's degree",
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "Auxiliary Nurse Midwife (ANM)",
      duration: "18 Months",
      eligibility: "+2 Pass (Any Stream)",
      description: "Entry-level nursing program for rural healthcare",
      icon: <Heart className="h-6 w-6" />
    }
  ];

  const courseFeatures = [
    {
      title: "Expert Faculty",
      description: "Highly qualified and experienced nursing professionals",
      icon: <Users className="h-12 w-12" />
    },
    {
      title: "Modern Curriculum",
      description: "Updated syllabus aligned with industry standards",
      icon: <BookOpen className="h-12 w-12" />
    },
    {
      title: "Clinical Excellence",
      description: "Extensive hands-on training in leading hospitals",
      icon: <Stethoscope className="h-12 w-12" />
    },
    {
      title: "100% Placement",
      description: "Guaranteed job placement upon successful completion",
      icon: <Award className="h-12 w-12" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-navy via-primary to-healthcare">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">
              Academic Programs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Our Nursing Courses
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Choose from our comprehensive range of nursing programs designed to build 
              compassionate healthcare professionals with modern skills and ethical values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/apply-online">Apply for Admission 2025-26</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-navy">
                <Download className="h-5 w-5 mr-2" />
                Download Prospectus
              </Button>
            </div>
          </div>
        </section>

        {/* Course Features */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Why Choose Our Courses</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Excellence in Nursing Education</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courseFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Courses */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Main Programs</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Nursing Career Path</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our flagship nursing programs designed to meet the evolving needs of the healthcare industry 
                while ensuring 100% job placement for our graduates.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {courses.map((course) => (
                <Card key={course.id} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="absolute top-4 right-4">
                    <Badge variant="default" className="bg-medical-accent">
                      {course.popularity}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-primary">
                        {course.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <p className="text-muted-foreground">{course.type} Program</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{course.eligibility}</span>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        100% Job Guarantee
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Program Highlights */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        Program Highlights
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {course.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Clinical Training Partners */}
                    <div>
                      <h4 className="font-semibold mb-3">Clinical Training Partners</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.clinicalPartners.map((partner, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {partner}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Career Opportunities */}
                    <div>
                      <h4 className="font-semibold mb-3">Career Opportunities</h4>
                      <div className="grid grid-cols-1 gap-1 text-sm">
                        {course.careerOpportunities.slice(0, 4).map((opportunity, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Award className="h-3 w-3 text-primary flex-shrink-0" />
                            <span>{opportunity}</span>
                          </div>
                        ))}
                        {course.careerOpportunities.length > 4 && (
                          <span className="text-muted-foreground text-xs">
                            +{course.careerOpportunities.length - 4} more opportunities
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t">
                      <Button className="flex-1" asChild>
                        <Link to="/apply-online">Apply Now</Link>
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Syllabus
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Programs */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Additional Programs</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">More Learning Opportunities</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized nursing programs for different career paths and advancement opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {additionalPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-primary">
                        {program.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{program.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{program.duration}</span>
                          <span>•</span>
                          <span>{program.eligibility}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary to-healthcare text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Nursing Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful nursing professionals who started their career 
              at Maheshwari Nursing College. Admissions are open for 2025-26.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/apply-online">Apply for Admission</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurCourses;