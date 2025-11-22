import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Home, 
  Wifi, 
  Utensils, 
  Shield, 
  BookOpen,
  Users,
  Clock,
  MapPin,
  CheckCircle,
  Star,
  Camera,
  Phone
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HostelInformation = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);

  const hostelFacilities = [
    {
      title: "Accommodation",
      icon: <Home className="h-8 w-8" />,
      color: "bg-blue-600",
      features: [
        "Separate hostels for boys and girls",
        "2-3 sharing rooms with study table",
        "Attached bathrooms with 24/7 water supply", 
        "Individual wardrobes and storage space",
        "Comfortable beds with mattresses and pillows"
      ]
    },
    {
      title: "Food & Dining",
      icon: <Utensils className="h-8 w-8" />,
      color: "bg-green-600", 
      features: [
        "Nutritious vegetarian meals 4 times daily",
        "Hygienic kitchen with modern equipment",
        "Special meals during festivals",
        "Diet food for medical requirements",
        "Clean and spacious dining hall"
      ]
    },
    {
      title: "Security & Safety",
      icon: <Shield className="h-8 w-8" />,
      color: "bg-red-600",
      features: [
        "24/7 security guards and CCTV surveillance",
        "Biometric entry/exit system", 
        "Lady wardens for girls hostel",
        "Emergency contact numbers displayed",
        "Fire safety equipment and emergency exits"
      ]
    },
    {
      title: "Study Environment",
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-purple-600",
      features: [
        "Dedicated study hours (6 PM - 10 PM)",
        "Common study room with reference books",
        "High-speed Wi-Fi connectivity",
        "Generator backup for uninterrupted power",
        "Quiet environment for focused study"
      ]
    },
    {
      title: "Recreation & Sports",
      icon: <Users className="h-8 w-8" />,
      color: "bg-orange-600",
      features: [
        "Indoor games room (Table tennis, Carrom)",
        "TV room with cable connection",
        "Outdoor playground for sports activities",
        "Cultural event space",
        "Festival celebrations and competitions"
      ]
    },
    {
      title: "Additional Services",
      icon: <Star className="h-8 w-8" />,
      color: "bg-indigo-600",
      features: [
        "Laundry facility with washing machines",
        "First aid facility and medical support",
        "Visitor's room for parents/guardians",
        "Postal and courier services",
        "Banking and ATM facility nearby"
      ]
    }
  ];

  const hostelRules = [
    "Students must maintain discipline and follow hostel timings",
    "Entry after 9:00 PM requires prior permission",
    "No smoking, alcohol, or drugs allowed in hostel premises",
    "Visitors allowed only during designated hours (10 AM - 6 PM)", 
    "Students responsible for any damage to hostel property",
    "Regular room cleaning and hygiene maintenance required",
    "Noise levels to be kept low during study hours",
    "Electronic appliances (except phone/laptop) require permission"
  ];

  const hostelTiming = {
    weekdays: {
      wakeUp: "5:30 AM",
      breakfast: "7:00 AM - 8:30 AM", 
      lunch: "12:30 PM - 2:00 PM",
      evening: "5:00 PM - 6:00 PM (Tea/Snacks)",
      dinner: "7:30 PM - 9:00 PM",
      studyTime: "6:00 PM - 10:00 PM",
      lightsOut: "10:30 PM"
    },
    sunday: {
      breakfast: "7:30 AM - 9:00 AM",
      lunch: "1:00 PM - 2:30 PM", 
      dinner: "8:00 PM - 9:30 PM",
      outingTime: "10:00 AM - 6:00 PM (with permission)"
    }
  };

  const feeStructure = [
    { item: "Room Rent (per year)", boys: "₹12,000", girls: "₹12,000" },
    { item: "Mess Charges (per year)", boys: "₹15,000", girls: "₹15,000" },
    { item: "Security Deposit (refundable)", boys: "₹3,000", girls: "₹3,000" },
    { item: "Electricity Charges (quarterly)", boys: "₹500", girls: "₹500" },
    { item: "Wi-Fi Charges (per year)", boys: "₹1,000", girls: "₹1,000" }
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
                Student Accommodation
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Hostel Information
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Safe, comfortable, and conducive living environment for outstation students. 
                Modern facilities with 24/7 security and nutritious meals.
              </p>
            </div>
          </div>
        </section>

        {/* Hostel Facilities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Modern Amenities
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Hostel Facilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive facilities designed to provide a home-away-from-home experience 
                for our students with all modern amenities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {hostelFacilities.map((facility, index) => (
                <Card key={index} className="shadow-xl hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl text-navy">
                      <div className={`${facility.color} text-white p-3 rounded-lg`}>
                        {facility.icon}
                      </div>
                      {facility.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-6 pt-0">
                    <ul className="space-y-3">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hostel Timings */}
        <section className="py-20 bg-gradient-to-tr from-violet-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-healthcare border-healthcare">
                Daily Schedule
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Hostel Timings & Routine
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="shadow-xl">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                  <CardTitle className="flex items-center gap-3 text-2xl text-navy">
                    <Clock className="h-8 w-8 text-primary" />
                    Weekday Schedule
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-navy">Wake Up Call</span>
                      <Badge variant="outline">{hostelTiming.weekdays.wakeUp}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-navy">Breakfast</span>
                      <Badge variant="outline">{hostelTiming.weekdays.breakfast}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-navy">Lunch</span>
                      <Badge variant="outline">{hostelTiming.weekdays.lunch}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-navy">Evening Snacks</span>
                      <Badge variant="outline">{hostelTiming.weekdays.evening}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-navy">Dinner</span>
                      <Badge variant="outline">{hostelTiming.weekdays.dinner}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                      <span className="font-medium text-navy">Study Time</span>
                      <Badge className="bg-primary text-white">{hostelTiming.weekdays.studyTime}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-navy">Lights Out</span>
                      <Badge variant="outline">{hostelTiming.weekdays.lightsOut}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardHeader className="bg-gradient-to-r from-healthcare/10 to-healthcare/5">
                  <CardTitle className="flex items-center gap-3 text-2xl text-navy">
                    <Clock className="h-8 w-8 text-healthcare" />
                    Sunday Schedule
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-navy">Breakfast</span>
                      <Badge variant="outline">{hostelTiming.sunday.breakfast}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-navy">Lunch</span>
                      <Badge variant="outline">{hostelTiming.sunday.lunch}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-navy">Dinner</span>
                      <Badge variant="outline">{hostelTiming.sunday.dinner}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-healthcare/10 rounded-lg">
                      <span className="font-medium text-navy">Outing Time</span>
                      <Badge className="bg-healthcare text-white">{hostelTiming.sunday.outingTime}</Badge>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-navy mb-2">Sunday Special</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Relaxed schedule for rest and recreation</li>
                        <li>• Cultural activities and group discussions</li>
                        <li>• Personal time for laundry and room cleaning</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-medical-accent border-medical-accent">
                Cost Details
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Hostel Fee Structure
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-primary/20">
                          <th className="text-left py-4 px-4 font-semibold text-navy">Fee Component</th>
                          <th className="text-center py-4 px-4 font-semibold text-navy">Boys Hostel</th>
                          <th className="text-center py-4 px-4 font-semibold text-navy">Girls Hostel</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feeStructure.map((fee, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium text-navy">{fee.item}</td>
                            <td className="text-center py-4 px-4 text-primary font-semibold">{fee.boys}</td>
                            <td className="text-center py-4 px-4 text-healthcare font-semibold">{fee.girls}</td>
                          </tr>
                        ))}
                        <tr className="border-t-2 border-primary/20 bg-primary/5">
                          <td className="py-4 px-4 font-bold text-lg text-navy">Total Annual Cost</td>
                          <td className="text-center py-4 px-4 font-bold text-lg text-primary">₹31,500</td>
                          <td className="text-center py-4 px-4 font-bold text-lg text-healthcare">₹31,500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Hostel fees are to be paid annually. Security deposit is refundable 
                      at the time of leaving hostel (after deducting any damages if applicable).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Rules & Regulations */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-green-600 border-green-600">
                Guidelines
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Hostel Rules & Regulations
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {hostelRules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl bg-gradient-to-r from-primary to-healthcare text-white">
                <CardContent className="p-12 text-center">
                  <Home className="h-16 w-16 mx-auto mb-6 opacity-90" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Book Your Hostel Room?
                  </h2>
                  <p className="text-xl text-white/90 mb-8">
                    Contact our hostel warden for room booking, queries, and campus visit to see 
                    the facilities. Limited seats available!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="secondary" size="lg">
                      Contact Hostel Warden
                    </Button>
                    <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                      Schedule Hostel Visit
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

export default HostelInformation;