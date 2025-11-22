import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Microscope, 
  Bed, 
  BookOpen, 
  Utensils, 
  Wifi, 
  Users,
  Hospital,
  GraduationCap
} from "lucide-react";
import facilitiesLab from "@/assets/facilities-lab.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Facilities = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: facilitiesRef, isVisible: facilitiesVisible } = useScrollAnimation(0.2);
  const { ref: partnersRef, isVisible: partnersVisible } = useScrollAnimation(0.3);

  const facilities = [
    {
      icon: Microscope,
      title: "Modern Laboratories",
      description: "Well-equipped pathology, microbiology, and anatomy labs with latest equipment",
      color: "text-primary"
    },
    {
      icon: Hospital,
      title: "Clinical Training Centers",
      description: "Partnerships with D.H.H. Sambalpur, CHC-Themra, and UPHC Maneswar",
      color: "text-healthcare"
    },
    {
      icon: Bed,
      title: "Hostel Accommodation",
      description: "Comfortable, secure hostel facilities for boys and girls with 24/7 security",
      color: "text-medical-accent"
    },
    {
      icon: BookOpen,
      title: "Digital Library",
      description: "Extensive collection of nursing books, journals, and online resources",
      color: "text-primary"
    },
    {
      icon: GraduationCap,
      title: "Simulation Center",
      description: "High-fidelity mannequins and simulation equipment for practical training",
      color: "text-healthcare"
    },
    {
      icon: Utensils,
      title: "Cafeteria & Mess",
      description: "Hygienic dining facilities with nutritious meals for students",
      color: "text-medical-accent"
    },
    {
      icon: Wifi,
      title: "Wi-Fi Campus",
      description: "High-speed internet connectivity throughout the campus",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Common Areas",
      description: "Student lounges, recreation areas, and study spaces",
      color: "text-healthcare"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-bl from-violet-50 via-white to-blue-50 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-br from-primary/25 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-24 w-32 h-32 bg-gradient-to-br from-healthcare/20 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-24 left-32 w-24 h-24 bg-gradient-to-br from-medical-accent/15 to-transparent rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-16 right-16 w-28 h-28 bg-gradient-to-br from-healthcare/18 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
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
              World-Class Facilities
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Modern Infrastructure for Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art facilities designed to provide the best learning environment 
              for nursing education and practical training.
            </p>
          </div>

          {/* Featured Facility Image */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-2xl hover-scale animate-scale-in">
              <div className="relative">
                <img
                  src={facilitiesLab}
                  alt="Modern Nursing Laboratory"
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-primary/60 to-healthcare/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      State-of-the-Art Learning Environment
                    </h3>
                    <p className="text-lg md:text-xl text-white/90">
                      Modern laboratories and clinical training centers equipped with latest technology
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Facilities Grid */}
          <div 
            ref={facilitiesRef as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 transform delay-300 ${
              facilitiesVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {facilities.map((facility, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 group hover-scale">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <facility.icon className={`h-8 w-8 ${facility.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Clinical Partners */}
          <Card 
            ref={partnersRef as React.RefObject<HTMLDivElement>}
            className={`shadow-xl bg-gradient-to-r from-secondary/50 to-secondary/30 hover-scale transition-all duration-1000 transform delay-600 ${
              partnersVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-navy mb-4">Clinical Training Partners</h3>
                <p className="text-lg text-muted-foreground">
                  Hands-on training at premier healthcare institutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-primary/20 shadow-md">
                  <CardContent className="p-6 text-center">
                    <Hospital className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-navy mb-2">
                      D.H.H. Sambalpur
                    </h4>
                    <p className="text-muted-foreground">
                      District Hospital with comprehensive medical facilities
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-healthcare/20 shadow-md">
                  <CardContent className="p-6 text-center">
                    <Hospital className="h-12 w-12 text-healthcare mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-navy mb-2">
                      CHC-Themra
                    </h4>
                    <p className="text-muted-foreground">
                      Community Health Center for primary care training
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-medical-accent/20 shadow-md">
                  <CardContent className="p-6 text-center">
                    <Hospital className="h-12 w-12 text-medical-accent mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-navy mb-2">
                      UPHC Maneswar
                    </h4>
                    <p className="text-muted-foreground">
                      Urban Primary Health Center for community health practice
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Campus Amenities */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-navy text-center mb-8">Campus Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold text-navy mb-4">Student Support Services</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Academic counseling and mentorship</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Career guidance and placement support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Health and wellness programs</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Financial aid and scholarship assistance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold text-navy mb-4">Safety & Security</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-healthcare rounded-full"></div>
                      <span className="text-muted-foreground">24/7 campus security with CCTV surveillance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-healthcare rounded-full"></div>
                      <span className="text-muted-foreground">Separate hostel facilities for boys and girls</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-healthcare rounded-full"></div>
                      <span className="text-muted-foreground">Medical emergency response system</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-healthcare rounded-full"></div>
                      <span className="text-muted-foreground">Fire safety and disaster management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;