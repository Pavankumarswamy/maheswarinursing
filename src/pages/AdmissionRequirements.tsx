import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  CheckCircle, 
  FileText, 
  GraduationCap, 
  Users, 
  Calendar,
  AlertCircle,
  BookOpen,
  Award
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AdmissionRequirements = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);

  const gnmRequirements = {
    course: "GNM (General Nursing & Midwifery)",
    duration: "3 Years",
    eligibility: [
      "Passed +2 examination from any recognized board",
      "Minimum age: 17 years, Maximum age: 35 years",
      "Any stream (Science/Arts/Commerce) accepted",
      "Minimum 45% marks in +2 examination", 
      "English as a compulsory subject in +2"
    ],
    documents: [
      "+2 Mark Sheet and Passing Certificate",
      "10th Mark Sheet and Passing Certificate", 
      "Transfer Certificate from +2 institution",
      "Character Certificate from +2 institution",
      "Date of Birth Certificate (10th certificate acceptable)",
      "Caste Certificate (if applicable - SC/ST/OBC)",
      "Income Certificate (for scholarship purposes)",
      "Domicile Certificate",
      "Medical Fitness Certificate",
      "6 passport size photographs",
      "Aadhaar Card copy"
    ]
  };

  const bscRequirements = {
    course: "B.Sc. Nursing", 
    duration: "4 Years",
    eligibility: [
      "Passed +2 examination with Science stream (PCB)",
      "Minimum age: 17 years, Maximum age: 35 years", 
      "Physics, Chemistry, Biology as mandatory subjects",
      "Minimum 50% marks in +2 Science examination",
      "English as a compulsory subject with minimum 50% marks"
    ],
    documents: [
      "+2 Science Mark Sheet and Passing Certificate",
      "10th Mark Sheet and Passing Certificate",
      "Transfer Certificate from +2 institution", 
      "Character Certificate from +2 institution",
      "Date of Birth Certificate (10th certificate acceptable)",
      "Caste Certificate (if applicable - SC/ST/OBC)",
      "Income Certificate (for scholarship purposes)",
      "Domicile Certificate", 
      "Medical Fitness Certificate from registered medical practitioner",
      "6 passport size photographs",
      "Aadhaar Card copy"
    ]
  };

  const admissionProcess = [
    {
      step: 1,
      title: "Online Application",
      description: "Fill the online application form with all required details",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: 2, 
      title: "Document Submission",
      description: "Submit all original documents for verification",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Personal Interview", 
      description: "Appear for personal interview and counseling session",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Fee Payment & Confirmation",
      description: "Pay admission fee and confirm your seat",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const importantNotes = [
    "All documents must be original for verification purpose",
    "Photocopies will be retained by the college",
    "Age calculation will be done as on 1st August 2025", 
    "Medical fitness certificate should not be older than 3 months",
    "Reserved category candidates must produce valid caste certificate",
    "Admission is provisional and subject to verification of documents",
    "College reserves the right to cancel admission if documents are found fake",
    "Hostel accommodation is available on first-come-first-serve basis"
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
                Admission Guidelines
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Admission Requirements
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Complete eligibility criteria, required documents, and admission process 
                for all nursing programs at Maheshwari Nursing College.
              </p>
            </div>
          </div>
        </section>

        {/* Course Requirements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Eligibility Criteria
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Course-wise Requirements
              </h2>
            </div>

            {/* GNM Requirements */}
            <div className="max-w-5xl mx-auto mb-12">
              <Card className="shadow-2xl hover-scale">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                  <CardTitle className="flex items-center gap-3 text-2xl text-navy">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    {gnmRequirements.course}
                  </CardTitle>
                  <p className="text-muted-foreground">Duration: {gnmRequirements.duration}</p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-4 flex items-center gap-2">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                        Eligibility Criteria
                      </h3>
                      <ul className="space-y-3">
                        {gnmRequirements.eligibility.map((criteria, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                            <span className="text-muted-foreground">{criteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-4 flex items-center gap-2">
                        <FileText className="h-6 w-6 text-blue-600" />
                        Required Documents
                      </h3>
                      <ul className="space-y-2">
                        {gnmRequirements.documents.map((doc, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                            <span className="text-sm text-muted-foreground">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* B.Sc Requirements */}
            <div className="max-w-5xl mx-auto">
              <Card className="shadow-2xl hover-scale">
                <CardHeader className="bg-gradient-to-r from-healthcare/10 to-healthcare/5">
                  <CardTitle className="flex items-center gap-3 text-2xl text-navy">
                    <GraduationCap className="h-8 w-8 text-healthcare" />
                    {bscRequirements.course}
                  </CardTitle>
                  <p className="text-muted-foreground">Duration: {bscRequirements.duration}</p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-4 flex items-center gap-2">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                        Eligibility Criteria
                      </h3>
                      <ul className="space-y-3">
                        {bscRequirements.eligibility.map((criteria, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-healthcare rounded-full mt-2"></div>
                            <span className="text-muted-foreground">{criteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-4 flex items-center gap-2">
                        <FileText className="h-6 w-6 text-blue-600" />
                        Required Documents
                      </h3>
                      <ul className="space-y-2">
                        {bscRequirements.documents.map((doc, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                            <span className="text-sm text-muted-foreground">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-20 bg-gradient-to-tr from-violet-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-healthcare border-healthcare">
                Admission Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Step-by-Step Admission Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {admissionProcess.map((process, index) => (
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

        {/* Important Notes */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-xl border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-navy">
                    <AlertCircle className="h-8 w-8 text-yellow-600" />
                    Important Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {importantNotes.map((note, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        <span className="text-muted-foreground">{note}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact for Queries */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl bg-gradient-to-r from-primary to-healthcare text-white">
                <CardContent className="p-12 text-center">
                  <BookOpen className="h-16 w-16 mx-auto mb-6 opacity-90" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Have Questions About Admissions?
                  </h2>
                  <p className="text-xl text-white/90 mb-8">
                    Our admission counselors are available to help you understand the requirements 
                    and guide you through the admission process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="secondary" size="lg">
                      Contact Admission Office
                    </Button>
                    <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                      Schedule Campus Visit
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

export default AdmissionRequirements;