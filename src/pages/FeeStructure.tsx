import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  CreditCard, 
  Receipt, 
  DollarSign, 
  GraduationCap, 
  CheckCircle,
  Info,
  Calculator,
  Download
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FeeStructure = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);

  const feeStructureGNM = {
    courseName: "GNM (General Nursing & Midwifery)",
    duration: "3 Years",
    fees: [
      { year: "1st Year", tuitionFee: 35000, hostelFee: 12000, examFee: 3000, total: 50000 },
      { year: "2nd Year", tuitionFee: 35000, hostelFee: 12000, examFee: 3000, total: 50000 },
      { year: "3rd Year", tuitionFee: 35000, hostelFee: 12000, examFee: 3000, total: 50000 }
    ],
    grandTotal: 150000
  };

  const feeStructureBSc = {
    courseName: "B.Sc. Nursing",
    duration: "4 Years",
    fees: [
      { year: "1st Year", tuitionFee: 45000, hostelFee: 15000, examFee: 4000, total: 64000 },
      { year: "2nd Year", tuitionFee: 45000, hostelFee: 15000, examFee: 4000, total: 64000 },
      { year: "3rd Year", tuitionFee: 45000, hostelFee: 15000, examFee: 4000, total: 64000 },
      { year: "4th Year", tuitionFee: 45000, hostelFee: 15000, examFee: 4000, total: 64000 }
    ],
    grandTotal: 256000
  };

  const additionalFees = [
    { item: "Admission Fee", amount: 5000, note: "One-time payment" },
    { item: "Caution Deposit", amount: 3000, note: "Refundable" },
    { item: "Library Security", amount: 1000, note: "Refundable" },
    { item: "Laboratory Fee", amount: 2000, note: "Per semester" },
    { item: "Uniform & Books", amount: 8000, note: "Approximate cost" },
    { item: "Medical Checkup", amount: 500, note: "Annual" }
  ];

  const paymentMethods = [
    { method: "Online Payment", description: "Credit/Debit Card, Net Banking, UPI", preferred: true },
    { method: "Demand Draft", description: "In favor of 'Maheshwari Nursing College'", preferred: false },
    { method: "Bank Transfer", description: "Direct bank transfer to college account", preferred: false },
    { method: "Cash Payment", description: "At college office during working hours", preferred: false }
  ];

  const scholarships = [
    { name: "SC/ST Scholarship", discount: "100%", eligibility: "Students from SC/ST category" },
    { name: "Merit Scholarship", discount: "25%", eligibility: "Students with 90%+ marks" },
    { name: "Sports Scholarship", discount: "20%", eligibility: "State/National level sports achievers" },
    { name: "Financial Aid", discount: "Variable", eligibility: "Students from economically weaker sections" }
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
                Fee Information
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Fee Structure 2025-26
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Transparent and affordable fee structure for all nursing programs. 
                Multiple payment options and scholarships available.
              </p>
            </div>
          </div>
        </section>

        {/* Fee Structure Tables */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Course Fees
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Detailed Fee Breakdown
              </h2>
            </div>

            {/* GNM Fee Structure */}
            <div className="max-w-5xl mx-auto mb-12">
              <Card className="shadow-2xl hover-scale">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                  <CardTitle className="flex items-center gap-3 text-2xl text-navy">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    {feeStructureGNM.courseName}
                  </CardTitle>
                  <p className="text-muted-foreground">Duration: {feeStructureGNM.duration}</p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-primary/20">
                          <th className="text-left py-3 px-4 font-semibold text-navy">Year</th>
                          <th className="text-right py-3 px-4 font-semibold text-navy">Tuition Fee</th>
                          <th className="text-right py-3 px-4 font-semibold text-navy">Hostel Fee</th>
                          <th className="text-right py-3 px-4 font-semibold text-navy">Exam Fee</th>
                          <th className="text-right py-3 px-4 font-semibold text-navy">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feeStructureGNM.fees.map((fee, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">{fee.year}</td>
                            <td className="text-right py-4 px-4">₹{fee.tuitionFee.toLocaleString()}</td>
                            <td className="text-right py-4 px-4">₹{fee.hostelFee.toLocaleString()}</td>
                            <td className="text-right py-4 px-4">₹{fee.examFee.toLocaleString()}</td>
                            <td className="text-right py-4 px-4 font-semibold text-primary">₹{fee.total.toLocaleString()}</td>
                          </tr>
                        ))}
                        <tr className="border-t-2 border-primary/20 bg-primary/5">
                          <td className="py-4 px-4 font-bold text-lg text-navy" colSpan={4}>Total Course Fee</td>
                          <td className="text-right py-4 px-4 font-bold text-lg text-primary">₹{feeStructureGNM.grandTotal.toLocaleString()}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* B.Sc Fee Structure */}
            <div className="max-w-5xl mx-auto">
              <Card className="shadow-2xl hover-scale">
                <CardHeader className="bg-gradient-to-r from-healthcare/10 to-healthcare/5">
                  <CardTitle className="flex items-center gap-3 text-2xl text-navy">
                    <GraduationCap className="h-8 w-8 text-healthcare" />
                    {feeStructureBSc.courseName}
                  </CardTitle>
                  <p className="text-muted-foreground">Duration: {feeStructureBSc.duration}</p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-healthcare/20">
                          <th className="text-left py-3 px-4 font-semibold text-navy">Year</th>
                          <th className="text-right py-3 px-4 font-semibold text-navy">Tuition Fee</th>
                          <th className="text-right py-3 px-4 font-semibold text-navy">Hostel Fee</th>
                          <th className="text-right py-3 px-4 font-semibold text-navy">Exam Fee</th>
                          <th className="text-right py-3 px-4 font-semibold text-navy">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feeStructureBSc.fees.map((fee, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">{fee.year}</td>
                            <td className="text-right py-4 px-4">₹{fee.tuitionFee.toLocaleString()}</td>
                            <td className="text-right py-4 px-4">₹{fee.hostelFee.toLocaleString()}</td>
                            <td className="text-right py-4 px-4">₹{fee.examFee.toLocaleString()}</td>
                            <td className="text-right py-4 px-4 font-semibold text-healthcare">₹{fee.total.toLocaleString()}</td>
                          </tr>
                        ))}
                        <tr className="border-t-2 border-healthcare/20 bg-healthcare/5">
                          <td className="py-4 px-4 font-bold text-lg text-navy" colSpan={4}>Total Course Fee</td>
                          <td className="text-right py-4 px-4 font-bold text-lg text-healthcare">₹{feeStructureBSc.grandTotal.toLocaleString()}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Fees */}
        <section className="py-20 bg-gradient-to-tr from-violet-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-medical-accent border-medical-accent">
                Additional Charges
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Other Fees & Charges
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {additionalFees.map((fee, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-navy">{fee.item}</h4>
                          <p className="text-sm text-muted-foreground">{fee.note}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-primary">₹{fee.amount.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Payment Options
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Convenient Payment Methods
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {paymentMethods.map((payment, index) => (
                <Card key={index} className={`hover-scale ${payment.preferred ? 'border-primary shadow-lg' : ''}`}>
                  <CardContent className="p-6 text-center">
                    <CreditCard className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold text-navy mb-2">{payment.method}</h3>
                    <p className="text-sm text-muted-foreground">{payment.description}</p>
                    {payment.preferred && (
                      <Badge className="mt-3 bg-green-600 text-white">Recommended</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-green-600 border-green-600">
                Financial Aid
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Scholarships Available
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe in making quality education accessible. Various scholarship programs 
                available to support deserving students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {scholarships.map((scholarship, index) => (
                <Card key={index} className="hover-scale shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-navy">{scholarship.name}</h3>
                      <Badge className="bg-green-600 text-white">{scholarship.discount}</Badge>
                    </div>
                    <p className="text-muted-foreground">{scholarship.eligibility}</p>
                    <div className="flex items-center gap-2 mt-3 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">Available for new admissions</span>
                    </div>
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
                    <Info className="h-8 w-8 text-yellow-600" />
                    Important Notes
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Fee once paid will not be refunded under any circumstances</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Hostel fee is optional and only for students requiring accommodation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Annual fee increase of 5-10% may be applicable from second year onwards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>All fees must be paid before the commencement of each academic year</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Late payment charges of ₹100 per day will be applicable after due date</span>
                    </li>
                  </ul>
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

export default FeeStructure;