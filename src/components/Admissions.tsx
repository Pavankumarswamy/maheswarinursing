import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, FileText, Phone, Users, Star, Clock } from "lucide-react";

const Admissions = () => {
  return (
    <section id="admissions" className="py-20 bg-gradient-to-tr from-red-50 via-white to-blue-50 relative overflow-hidden">
      {/* Interactive floating elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-24 left-24 w-32 h-32 bg-gradient-to-br from-medical-accent/25 to-primary/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 right-32 w-24 h-24 bg-gradient-to-br from-healthcare/20 to-medical-accent/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-16 w-28 h-28 bg-gradient-to-br from-primary/18 to-healthcare/18 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Dynamic pattern overlay */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
            <defs>
              <radialGradient id="dotPattern" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary) / 0.1)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="url(#dotPattern)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Admission Information */}
            <div className="space-y-8">
              {/* Current Status */}
              <Card className="border-medical-accent/30 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-medical-accent/10 to-medical-accent/5">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-8 w-8 text-medical-accent" />
                    <div>
                      <CardTitle className="text-2xl text-navy">Admission Status</CardTitle>
                      <p className="text-muted-foreground">Academic Year 2025-26</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-green-600 text-white">OPEN</Badge>
                    <span className="text-lg font-semibold text-navy">Applications Now Open</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Limited seats available. Early admission recommended for best hostel accommodation.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">60</div>
                      <div className="text-sm text-muted-foreground">GNM Seats</div>
                    </div>
                    <div className="text-center p-3 bg-healthcare/10 rounded-lg">
                      <div className="text-2xl font-bold text-healthcare">40</div>
                      <div className="text-sm text-muted-foreground">B.Sc Seats</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Admission Process */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-navy">
                    <FileText className="h-8 w-8 text-primary" />
                    Admission Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy">Submit Application</h4>
                        <p className="text-sm text-muted-foreground">Fill online application form with required documents</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy">Document Verification</h4>
                        <p className="text-sm text-muted-foreground">Submit original documents for verification</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy">Counseling & Admission</h4>
                        <p className="text-sm text-muted-foreground">Personal counseling session and seat confirmation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Special Benefits */}
              <Card className="shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-navy">
                    <Star className="h-8 w-8 text-medical-accent" />
                    Special Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Badge className="bg-green-600 text-white">FREE</Badge>
                      <span className="text-muted-foreground">Free admission for ST/SC candidates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Badge className="bg-primary text-white">100%</Badge>
                      <span className="text-muted-foreground">Job placement guarantee</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Badge className="bg-healthcare text-white">24/7</Badge>
                      <span className="text-muted-foreground">Hostel accommodation available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Quick Application Form */}
            <div className="space-y-8">
              <Card className="shadow-xl border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-healthcare/10">
                  <CardTitle className="text-2xl text-navy text-center">
                    Quick Application Form
                  </CardTitle>
                  <p className="text-center text-muted-foreground">
                    Get started with your admission process today
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter last name" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter email address" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter phone number" />
                    </div>

                    <div>
                      <Label htmlFor="course">Preferred Course</Label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Select course</option>
                        <option value="gnm">GNM (General Nursing & Midwifery)</option>
                        <option value="bsc">B.Sc. Nursing</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="branch">Campus Visit Preference</Label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Select preference</option>
                        <option value="bargarh">Bargarh Campus</option>
                        <option value="virtual">Virtual Tour</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Any specific questions or requirements..." 
                        rows={3}
                      />
                    </div>

                    <Button type="submit" variant="medical" className="w-full text-lg py-6">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-navy">
                    <Phone className="h-8 w-8 text-primary" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Call Us Direct</h4>
                      <p className="text-muted-foreground">+91 8249448498 / 9437158472</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Email Support</h4>
                      <p className="text-muted-foreground">nlcattabira@gmail.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Visit Our Website</h4>
                      <p className="text-muted-foreground">www.maheswarigroups.in</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Office Hours</h4>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">8:00 AM - 8:00 PM (Mon-Sat)</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Request Call Back
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;