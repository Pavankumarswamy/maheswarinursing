import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Award, 
  Trophy, 
  Heart, 
  DollarSign, 
  CheckCircle, 
  FileText,
  Calendar,
  Users,
  Star,
  GraduationCap
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ScholarshipInfo = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);

  const scholarships = [
    {
      name: "SC/ST Government Scholarship",
      amount: "100% Fee Waiver",
      icon: <Users className="h-8 w-8" />,
      color: "bg-green-600",
      eligibility: [
        "Students belonging to Scheduled Caste (SC) category",
        "Students belonging to Scheduled Tribe (ST) category", 
        "Valid caste certificate required",
        "Annual family income below ₹2.5 lakhs"
      ],
      documents: [
        "Caste Certificate (SC/ST)",
        "Income Certificate", 
        "Domicile Certificate",
        "+2 Mark Sheet",
        "Bank Account Details"
      ],
      benefits: [
        "Complete tuition fee waiver",
        "Free hostel accommodation",
        "Free uniform and books",
        "Monthly stipend of ₹1,000"
      ]
    },
    {
      name: "Merit-Based Scholarship", 
      amount: "25% - 50% Fee Reduction",
      icon: <Trophy className="h-8 w-8" />,
      color: "bg-blue-600",
      eligibility: [
        "Students with 85%+ marks in +2",
        "Students with 90%+ marks get 50% scholarship",
        "Students with 85-89% marks get 25% scholarship",
        "Merit maintained throughout the course"
      ],
      documents: [
        "+2 Mark Sheet & Certificate",
        "School/College Character Certificate",
        "Academic transcripts",
        "Bank Account Details"
      ],
      benefits: [
        "Tuition fee reduction as per merit",
        "Priority in hostel allocation",
        "Access to advanced learning resources",
        "Certificate of academic excellence"
      ]
    },
    {
      name: "Sports Excellence Scholarship",
      amount: "20% - 40% Fee Reduction", 
      icon: <Award className="h-8 w-8" />,
      color: "bg-orange-600",
      eligibility: [
        "State level sports participation",
        "National level participants get 40% scholarship",
        "State level participants get 20% scholarship",
        "Continued sports participation required"
      ],
      documents: [
        "Sports Achievement Certificates",
        "Participation certificates from competitions",
        "Recommendation from sports authority",
        "Medical fitness certificate"
      ],
      benefits: [
        "Fee reduction as per achievement level",
        "Flexible academic schedule for tournaments",
        "Sports equipment and training support",
        "Sports coaching facility on campus"
      ]
    },
    {
      name: "Financial Need-Based Aid",
      amount: "Variable (Up to 75%)",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-purple-600", 
      eligibility: [
        "Annual family income below ₹1.5 lakhs",
        "Economically weaker sections",
        "Single parent/orphaned students",
        "Financial hardship cases"
      ],
      documents: [
        "Income Certificate (Family)",
        "BPL Certificate (if applicable)",
        "Bank statements (last 6 months)",
        "Affidavit of financial need"
      ],
      benefits: [
        "Fee reduction based on financial need",
        "Installment payment facility",
        "Emergency financial support",
        "Career counseling and guidance"
      ]
    },
    {
      name: "Girl Child Education Scholarship",
      amount: "15% Fee Reduction",
      icon: <Star className="h-8 w-8" />,
      color: "bg-pink-600",
      eligibility: [
        "Female students from rural areas", 
        "First generation college graduates in family",
        "Academic performance above 70%",
        "Commitment to complete the course"
      ],
      documents: [
        "Domicile Certificate (Rural area)",
        "Family education background affidavit",
        "Academic performance records",
        "Parent's occupation certificate"
      ],
      benefits: [
        "15% tuition fee reduction",
        "Priority in hostel accommodation",
        "Mentorship program support", 
        "Leadership development programs"
      ]
    },
    {
      name: "Alumni Referral Scholarship",
      amount: "10% Fee Reduction",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "bg-indigo-600",
      eligibility: [
        "Students referred by college alumni",
        "Alumni must be graduates from 2010 onwards",
        "Good academic standing required",
        "Minimum 75% marks in qualifying exam"
      ],
      documents: [
        "Alumni referral letter",
        "Alumni graduation certificate copy",
        "Academic transcripts", 
        "Character certificate from school"
      ],
      benefits: [
        "10% tuition fee reduction",
        "Alumni mentorship program",
        "Networking opportunities",
        "Career guidance from alumni"
      ]
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Check Eligibility", 
      description: "Review scholarship criteria and ensure you meet all requirements",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Collect Documents",
      description: "Gather all required documents and certificates",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Fill out scholarship application form with documents",
      icon: <Award className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Review Process",
      description: "Wait for scholarship committee to review your application",
      icon: <Calendar className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-navy via-primary to-healthcare overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div 
              ref={headerRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-1000 transform ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Badge variant="secondary" className="mb-4">
                Financial Support
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Scholarship Programs
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Making quality nursing education accessible through comprehensive scholarship programs. 
                Multiple financial aid options available for deserving students.
              </p>
            </div>
          </div>
        </section>

        {/* Scholarship Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Available Scholarships
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Financial Aid Opportunities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe education should be accessible to all. Our comprehensive scholarship 
                programs support students from various backgrounds and achievements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {scholarships.map((scholarship, index) => (
                <Card key={index} className="shadow-xl hover-scale">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`${scholarship.color} text-white p-3 rounded-lg`}>
                          {scholarship.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl text-navy">{scholarship.name}</CardTitle>
                          <Badge className="mt-1 bg-green-600 text-white">{scholarship.amount}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 space-y-6">
                    {/* Eligibility */}
                    <div>
                      <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        Eligibility Criteria
                      </h4>
                      <ul className="space-y-2">
                        {scholarship.eligibility.map((criteria, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                            <span className="text-sm text-muted-foreground">{criteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Required Documents */}
                    <div>
                      <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        Required Documents
                      </h4>
                      <ul className="space-y-2">
                        {scholarship.documents.map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                            <span className="text-sm text-muted-foreground">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-600" />
                        Benefits Included
                      </h4>
                      <ul className="space-y-2">
                        {scholarship.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full mt-4" asChild>
                      <Link to="/apply-online">Apply for This Scholarship</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-gradient-to-tr from-violet-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-healthcare border-healthcare">
                Application Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                How to Apply for Scholarships
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Simple 4-step process to apply for scholarships. Our dedicated team is here 
                to help you throughout the application process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {applicationProcess.map((process, index) => (
                <Card key={index} className="text-center hover-scale">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {process.step}
                    </div>
                    <div className="mb-3 text-primary">
                      {process.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-2">{process.title}</h3>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-medical-accent border-medical-accent">
                Important Dates
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Scholarship Timeline 2025-26
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                        <span className="font-semibold text-navy">Application Opens</span>
                        <Badge className="bg-blue-600 text-white">March 1, 2025</Badge>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                        <span className="font-semibold text-navy">Application Deadline</span>
                        <Badge className="bg-green-600 text-white">June 30, 2025</Badge>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                        <span className="font-semibold text-navy">Document Verification</span>
                        <Badge className="bg-yellow-600 text-white">July 1-15, 2025</Badge>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                        <span className="font-semibold text-navy">Results Announcement</span>
                        <Badge className="bg-purple-600 text-white">July 20, 2025</Badge>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-lg">
                        <span className="font-semibold text-navy">Scholarship Disbursement</span>
                        <Badge className="bg-indigo-600 text-white">August 1, 2025</Badge>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                        <span className="font-semibold text-navy">Course Commencement</span>
                        <Badge className="bg-red-600 text-white">August 15, 2025</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact for Scholarships */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl bg-gradient-to-r from-primary to-healthcare text-white">
                <CardContent className="p-12 text-center">
                  <Trophy className="h-16 w-16 mx-auto mb-6 opacity-90" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Need Help with Scholarships?
                  </h2>
                  <p className="text-xl text-white/90 mb-8">
                    Our scholarship counselors are here to guide you through the application process 
                    and help you find the best financial aid options.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="secondary" size="lg">
                      Contact Scholarship Office
                    </Button>
                    <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                      Schedule Counseling
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ScholarshipInfo;