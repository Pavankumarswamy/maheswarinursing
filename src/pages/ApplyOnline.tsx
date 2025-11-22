import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, FileText, User, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ApplyOnline = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const [selectedCourse, setSelectedCourse] = useState("");

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
                Online Application
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Apply Online for Admission 2025-26
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Start your nursing career journey with our simple online application process. 
                Complete your application in minutes and join thousands of successful nursing professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Application Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Application Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Simple 4-Step Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center hover-scale">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">Fill Application</h3>
                  <p className="text-sm text-muted-foreground">Complete the online application form with your details</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-healthcare text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">Upload Documents</h3>
                  <p className="text-sm text-muted-foreground">Submit required documents digitally</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-medical-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">Review & Submit</h3>
                  <p className="text-sm text-muted-foreground">Review your application and submit online</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">Get Confirmation</h3>
                  <p className="text-sm text-muted-foreground">Receive instant application confirmation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-gradient-to-tr from-violet-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-healthcare/10 text-center">
                  <CardTitle className="text-3xl text-navy">Online Application Form</CardTitle>
                  <p className="text-muted-foreground">Academic Year 2025-26</p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form className="space-y-8">
                    {/* Course Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <Label className="text-lg font-semibold text-navy">Select Course *</Label>
                        <div className="space-y-3">
                          <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-primary/5">
                            <input 
                              type="radio" 
                              name="course" 
                              value="gnm" 
                              onChange={(e) => setSelectedCourse(e.target.value)}
                              className="text-primary"
                            />
                            <div>
                              <div className="font-semibold">GNM (General Nursing & Midwifery)</div>
                              <div className="text-sm text-muted-foreground">3 Years Duration</div>
                            </div>
                          </label>
                          <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-healthcare/5">
                            <input 
                              type="radio" 
                              name="course" 
                              value="bsc" 
                              onChange={(e) => setSelectedCourse(e.target.value)}
                              className="text-healthcare"
                            />
                            <div>
                              <div className="font-semibold">B.Sc. Nursing</div>
                              <div className="text-sm text-muted-foreground">4 Years Duration</div>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="branch">Preferred Branch *</Label>
                        <select className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                          <option value="">Select Branch</option>
                          <option value="sambalpur">Sambalpur Branch</option>
                          <option value="boudh">Boudh Branch</option>
                        </select>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-navy border-b pb-2">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="Enter first name" required />
                        </div>
                        <div>
                          <Label htmlFor="middleName">Middle Name</Label>
                          <Input id="middleName" placeholder="Enter middle name" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Enter last name" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                          <Input id="dateOfBirth" type="date" required />
                        </div>
                        <div>
                          <Label htmlFor="gender">Gender *</Label>
                          <select className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="Enter email address" required />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" type="tel" placeholder="Enter phone number" required />
                        </div>
                      </div>
                    </div>

                    {/* Educational Qualification */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-navy border-b pb-2">Educational Qualification</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="board">Board/University *</Label>
                          <Input id="board" placeholder="e.g., CHSE Odisha" required />
                        </div>
                        <div>
                          <Label htmlFor="passingYear">Year of Passing *</Label>
                          <Input id="passingYear" type="number" placeholder="e.g., 2024" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="percentage">Percentage/CGPA *</Label>
                          <Input id="percentage" placeholder="e.g., 85%" required />
                        </div>
                        <div>
                          <Label htmlFor="stream">Stream *</Label>
                          <select className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <option value="">Select Stream</option>
                            <option value="science">Science (PCB)</option>
                            <option value="arts">Arts</option>
                            <option value="commerce">Commerce</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Address Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-navy border-b pb-2">Address Information</h3>
                      
                      <div>
                        <Label htmlFor="address">Complete Address *</Label>
                        <Textarea id="address" placeholder="Enter complete address" rows={3} required />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input id="city" placeholder="Enter city" required />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input id="state" placeholder="Enter state" required />
                        </div>
                        <div>
                          <Label htmlFor="pincode">PIN Code *</Label>
                          <Input id="pincode" placeholder="Enter PIN code" required />
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-navy border-b pb-2">Additional Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <select className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <option value="">Select Category</option>
                            <option value="general">General</option>
                            <option value="obc">OBC</option>
                            <option value="sc">SC</option>
                            <option value="st">ST</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="hostelRequired">Hostel Accommodation</Label>
                          <select className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <option value="">Select Option</option>
                            <option value="yes">Required</option>
                            <option value="no">Not Required</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="additionalInfo">Additional Information</Label>
                        <Textarea id="additionalInfo" placeholder="Any additional information you'd like to share..." rows={3} />
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <input type="checkbox" id="terms" className="mt-1" required />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                          I agree to the terms and conditions and confirm that all information provided is accurate. 
                          I understand that providing false information may result in cancellation of admission.
                        </label>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <input type="checkbox" id="communication" className="mt-1" />
                        <label htmlFor="communication" className="text-sm text-muted-foreground">
                          I consent to receive communication regarding my application via email, phone, and SMS.
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-6">
                      <Button type="submit" variant="medical" size="lg" className="text-lg px-12 py-4">
                        Submit Application
                      </Button>
                      <p className="text-sm text-muted-foreground mt-4">
                        You will receive a confirmation email after successful submission
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Status */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-green-600 border-green-600">
                After Submission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                What Happens Next?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover-scale">
                <CardContent className="p-8">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-4">Instant Confirmation</h3>
                  <p className="text-muted-foreground">
                    Receive immediate confirmation email with application ID and next steps
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale">
                <CardContent className="p-8">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-4">Review Process</h3>
                  <p className="text-muted-foreground">
                    Our admission team reviews your application within 2-3 business days
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale">
                <CardContent className="p-8">
                  <User className="h-12 w-12 text-healthcare mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-4">Personal Interview</h3>
                  <p className="text-muted-foreground">
                    Schedule personal counseling session for final admission confirmation
                  </p>
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

export default ApplyOnline;