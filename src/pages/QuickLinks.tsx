import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ExternalLink, Download, Phone, Mail, MapPin, Calendar, 
  FileText, GraduationCap, Users, BookOpen, Building, 
  Clock, CheckCircle, AlertCircle, Info
} from "lucide-react";
import { useEffect } from "react";

const QuickLinks = () => {
  useEffect(() => {
    document.title = "Quick Links - Maheshwari Nursing College | Easy Navigation & Resources";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 
      'Quick access to important links, resources, and information for students, parents, and stakeholders at Maheshwari Nursing College.'
    );
  }, []);

  const quickLinkCategories = [
    {
      title: "Admissions",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "bg-blue-500",
      links: [
        { title: "Apply Online", url: "/apply-online", icon: <ExternalLink className="h-4 w-4" />, external: false },
        { title: "Admission Requirements", url: "/admission-requirements", icon: <FileText className="h-4 w-4" />, external: false },
        { title: "Fee Structure", url: "/fee-structure", icon: <FileText className="h-4 w-4" />, external: false },
        { title: "Scholarship Information", url: "/scholarships", icon: <Info className="h-4 w-4" />, external: false },
        { title: "Important Dates", url: "#dates", icon: <Calendar className="h-4 w-4" />, external: false }
      ]
    },
    {
      title: "Academic Resources",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-green-500", 
      links: [
        { title: "Course Curriculum", url: "#curriculum", icon: <Download className="h-4 w-4" />, external: false },
        { title: "Academic Calendar", url: "#calendar", icon: <Calendar className="h-4 w-4" />, external: false },
        { title: "Student Handbook", url: "#handbook", icon: <Download className="h-4 w-4" />, external: false },
        { title: "Library Resources", url: "#library", icon: <BookOpen className="h-4 w-4" />, external: false },
        { title: "E-Learning Portal", url: "#elearning", icon: <ExternalLink className="h-4 w-4" />, external: true }
      ]
    },
    {
      title: "Student Services",
      icon: <Users className="h-6 w-6" />,
      color: "bg-purple-500",
      links: [
        { title: "Hostel Information", url: "/hostel-information", icon: <Building className="h-4 w-4" />, external: false },
        { title: "Student Support", url: "#support", icon: <Users className="h-4 w-4" />, external: false },
        { title: "Career Guidance", url: "#career", icon: <GraduationCap className="h-4 w-4" />, external: false },
        { title: "Alumni Network", url: "#alumni", icon: <Users className="h-4 w-4" />, external: false },
        { title: "Grievance Portal", url: "#grievance", icon: <AlertCircle className="h-4 w-4" />, external: false }
      ]
    },
    {
      title: "Downloads",
      icon: <Download className="h-6 w-6" />,
      color: "bg-orange-500",
      links: [
        { title: "College Brochure", url: "#brochure", icon: <Download className="h-4 w-4" />, external: false },
        { title: "Application Form", url: "#form", icon: <Download className="h-4 w-4" />, external: false },
        { title: "Prospectus 2025-26", url: "#prospectus", icon: <Download className="h-4 w-4" />, external: false },
        { title: "Fee Payment Guide", url: "#payment-guide", icon: <Download className="h-4 w-4" />, external: false },
        { title: "Document Checklist", url: "#checklist", icon: <CheckCircle className="h-4 w-4" />, external: false }
      ]
    }
  ];

  const importantLinks = [
    {
      title: "Government of Odisha - Health & Family Welfare",
      url: "https://health.odisha.gov.in/",
      description: "Official website of the Health & Family Welfare Department, Government of Odisha"
    },
    {
      title: "Odisha Nursing Council (ONC)",
      url: "#onc",
      description: "Regulatory body for nursing education and practice in Odisha"
    },
    {
      title: "Indian Nursing Council (INC)",
      url: "https://indiannursingcouncil.org/",
      description: "National regulatory body for nursing education in India"
    },
    {
      title: "DMET Odisha",
      url: "https://dmetodisha.gov.in/",
      description: "Directorate of Medical Education & Training, Government of Odisha"
    }
  ];

  const contactQuickLinks = [
    {
      title: "Call Admissions Office",
      subtitle: "+91 9124846864",
      icon: <Phone className="h-5 w-5" />,
      action: "tel:+919124846864",
      color: "bg-green-500"
    },
    {
      title: "WhatsApp Support", 
      subtitle: "+91 8328879558",
      icon: <Phone className="h-5 w-5" />,
      action: "https://wa.me/918328879558",
      color: "bg-green-600"
    },
    {
      title: "Send Email",
      subtitle: "nlcattabira@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      action: "mailto:nlcattabira@gmail.com",
      color: "bg-blue-500"
    },
    {
      title: "Campus Location",
      subtitle: "Sambalpur & Boudh",
      icon: <MapPin className="h-5 w-5" />,
      action: "#location",
      color: "bg-red-500"
    }
  ];

  const officeHours = {
    weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
    saturday: "Saturday: 8:00 AM - 2:00 PM", 
    sunday: "Sunday: Closed"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-navy via-primary to-healthcare">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">
              Quick Navigation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Quick Links - Maheshwari Nursing College
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Fast access to important resources, forms, and information for students, 
              parents, and stakeholders. Find everything you need in one place.
            </p>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Phone className="h-4 w-4 mr-2" />
                Quick Contact
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch Instantly</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactQuickLinks.map((contact, index) => (
                <Card key={index} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className={`${contact.color} text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {contact.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{contact.title}</h3>
                    <p className="text-sm text-muted-foreground">{contact.subtitle}</p>
                    <Button variant="ghost" className="mt-3 p-0 h-auto" asChild>
                      <a href={contact.action}>
                        Connect Now
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Hours */}
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weekdays:</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span className="font-medium">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span className="font-medium text-red-600">Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Links Categories */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Navigation Categories</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find What You Need</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Organized links to help you quickly access the information and resources you're looking for.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {quickLinkCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`${category.color} text-white p-2 rounded-lg`}>
                        {category.icon}
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group cursor-pointer">
                          <a href={link.url} className="flex items-center gap-3 flex-1">
                            <div className="text-muted-foreground group-hover:text-primary transition-colors">
                              {link.icon}
                            </div>
                            <span className="font-medium group-hover:text-primary transition-colors">
                              {link.title}
                            </span>
                          </a>
                          {link.external && (
                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important External Links */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">External Resources</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Important Government Links</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Official websites and resources from regulatory bodies and government departments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {importantLinks.map((link, index) => (
                <Card key={index} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-muted-foreground text-sm">{link.description}</p>
                    <Button variant="ghost" className="mt-3 p-0 h-auto" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <AlertCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Emergency Contact
              </h2>
              <p className="text-xl text-white/90 mb-8">
                For urgent matters or emergencies, contact us immediately through 
                our 24/7 helpline or emergency numbers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:+919124846864">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Emergency: +91 9124846864
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-red-600" asChild>
                  <a href="https://wa.me/918328879558">
                    WhatsApp: +91 8328879558
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuickLinks;