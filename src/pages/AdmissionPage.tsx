import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ref, push } from 'firebase/database';
import { db, uploadFileToStorage } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon, Upload, FileText, Users, Phone, GraduationCap } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const admissionSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  fatherName: z.string().min(2, 'Father name is required'),
  motherName: z.string().min(2, 'Mother name is required'),
  dateOfBirth: z.date({ message: 'Date of birth is required' }),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  gender: z.enum(['Male', 'Female', 'Other']),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  interestedCourse: z.string().min(1, 'Please select a course'),
  category: z.enum(['General', 'OBC', 'SC', 'ST']),
  aadharNumber: z.string().regex(/^\d{12}$/, 'Aadhar number must be 12 digits'),
  methodology: z.string().optional(),
  highestQualification: z.enum(['10th', '12th', 'Diploma', 'Graduate']),
  paymentReferenceNo: z.string().optional(),
});

const enquirySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const AdmissionPage = () => {
  const { toast } = useToast();
  const [qualificationFile, setQualificationFile] = useState<File | null>(null);
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const admissionForm = useForm<z.infer<typeof admissionSchema>>({
    resolver: zodResolver(admissionSchema),
  });

  const enquiryForm = useForm<z.infer<typeof enquirySchema>>({
    resolver: zodResolver(enquirySchema),
  });

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePic(file);
      const reader = new FileReader();
      reader.onloadend = () => setProfilePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const uploadFile = async (file: File, path: string): Promise<string> => {
    return await uploadFileToStorage(file, path);
  };

  const onAdmissionSubmit = async (data: z.infer<typeof admissionSchema>) => {
    setIsSubmitting(true);
    try {
      let qualificationUrl = '';
      let profilePicUrl = '';

      if (qualificationFile) {
        qualificationUrl = await uploadFile(qualificationFile, 'qualifications');
      }
      if (profilePic) {
        profilePicUrl = await uploadFile(profilePic, 'profiles');
      }

      const submissionData = {
        ...data,
        dateOfBirth: data.dateOfBirth.toISOString(),
        qualificationCertificate: qualificationUrl,
        profilePicture: profilePicUrl,
        submittedAt: new Date().toISOString(),
        status: 'pending'
      };

      await push(ref(db, 'admissions'), submissionData);
      
      toast({
        title: "Application Submitted",
        description: "Your admission application has been submitted successfully!",
      });
      
      admissionForm.reset();
      setQualificationFile(null);
      setProfilePic(null);
      setProfilePreview(null);
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onEnquirySubmit = async (data: z.infer<typeof enquirySchema>) => {
    try {
      const enquiryData = {
        ...data,
        submittedAt: new Date().toISOString(),
      };

      await push(ref(db, 'enquiries'), enquiryData);
      
      toast({
        title: "Enquiry Submitted",
        description: "Your enquiry has been submitted successfully!",
      });
      
      enquiryForm.reset();
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      toast({
        title: "Error",
        description: "Failed to submit enquiry. Please try again.",
        variant: "destructive",
      });
    }
  };

  const courses = [
    '+2 Arts & Science',
    'BSc Nursing',
    'ANM',
    'GNM',
    'DMLT',
    'D.Pharmacy',
    'Hotel Management',
    'Tourism Management'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero / CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-healthcare/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
            Get a call from us!
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards your healthcare career. Our expert counselors are ready to guide you through the admission process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/apply-online">Apply Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Download Prospectus
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-healthcare/5">
              <CardTitle className="text-3xl text-center text-navy flex items-center justify-center gap-3">
                <GraduationCap className="h-8 w-8" />
                Admission 2025-26
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={admissionForm.handleSubmit(onAdmissionSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name" 
                      {...admissionForm.register('name')}
                      className="mt-1"
                    />
                    {admissionForm.formState.errors.name && (
                      <p className="text-sm text-destructive mt-1">
                        {admissionForm.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="fatherName">Father's Name *</Label>
                    <Input 
                      id="fatherName" 
                      {...admissionForm.register('fatherName')}
                      className="mt-1"
                    />
                    {admissionForm.formState.errors.fatherName && (
                      <p className="text-sm text-destructive mt-1">
                        {admissionForm.formState.errors.fatherName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="motherName">Mother's Name *</Label>
                    <Input 
                      id="motherName" 
                      {...admissionForm.register('motherName')}
                      className="mt-1"
                    />
                    {admissionForm.formState.errors.motherName && (
                      <p className="text-sm text-destructive mt-1">
                        {admissionForm.formState.errors.motherName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label>Date of Birth *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full mt-1 justify-start text-left font-normal",
                            !admissionForm.watch('dateOfBirth') && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {admissionForm.watch('dateOfBirth') ? (
                            format(admissionForm.watch('dateOfBirth'), "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={admissionForm.watch('dateOfBirth')}
                          onSelect={(date) => admissionForm.setValue('dateOfBirth', date!)}
                          disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    {admissionForm.formState.errors.dateOfBirth && (
                      <p className="text-sm text-destructive mt-1">
                        {admissionForm.formState.errors.dateOfBirth.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      {...admissionForm.register('email')}
                      className="mt-1"
                    />
                    {admissionForm.formState.errors.email && (
                      <p className="text-sm text-destructive mt-1">
                        {admissionForm.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      {...admissionForm.register('phone')}
                      className="mt-1"
                    />
                    {admissionForm.formState.errors.phone && (
                      <p className="text-sm text-destructive mt-1">
                        {admissionForm.formState.errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="gender">Gender *</Label>
                    <select 
                      id="gender"
                      {...admissionForm.register('gender')}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background mt-1"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {admissionForm.formState.errors.gender && (
                      <p className="text-sm text-destructive mt-1">
                        {admissionForm.formState.errors.gender.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <select 
                      id="category"
                      {...admissionForm.register('category')}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background mt-1"
                    >
                      <option value="">Select Category</option>
                      <option value="General">General</option>
                      <option value="OBC">OBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                    </select>
                    {admissionForm.formState.errors.category && (
                      <p className="text-sm text-destructive mt-1">
                        {admissionForm.formState.errors.category.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Textarea 
                    id="address" 
                    {...admissionForm.register('address')}
                    className="mt-1"
                    rows={3}
                  />
                  {admissionForm.formState.errors.address && (
                    <p className="text-sm text-destructive mt-1">
                      {admissionForm.formState.errors.address.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="interestedCourse">Interested Course *</Label>
                    <select 
                      id="interestedCourse"
                      {...admissionForm.register('interestedCourse')}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background mt-1"
                    >
                      <option value="">Select Course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                    {admissionForm.formState.errors.interestedCourse && (
                      <p className="text-sm text-destructive mt-1">
                        {admissionForm.formState.errors.interestedCourse.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="highestQualification">Highest Qualification *</Label>
                    <select 
                      id="highestQualification"
                      {...admissionForm.register('highestQualification')}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background mt-1"
                    >
                      <option value="">Select Qualification</option>
                      <option value="10th">10th</option>
                      <option value="12th">12th</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                    {admissionForm.formState.errors.highestQualification && (
                      <p className="text-sm text-destructive mt-1">
                        {admissionForm.formState.errors.highestQualification.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="aadharNumber">Aadhar Number *</Label>
                    <Input 
                      id="aadharNumber" 
                      {...admissionForm.register('aadharNumber')}
                      className="mt-1"
                      placeholder="12-digit Aadhar number"
                    />
                    {admissionForm.formState.errors.aadharNumber && (
                      <p className="text-sm text-destructive mt-1">
                        {admissionForm.formState.errors.aadharNumber.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="methodology">Methodology</Label>
                    <Input 
                      id="methodology" 
                      {...admissionForm.register('methodology')}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="paymentReferenceNo">Payment Reference No.</Label>
                  <Input 
                    id="paymentReferenceNo" 
                    {...admissionForm.register('paymentReferenceNo')}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="qualification-file">Upload Highest Qualification Certificate</Label>
                    <div className="mt-1">
                      <Input
                        id="qualification-file"
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={(e) => setQualificationFile(e.target.files?.[0] || null)}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="profile-pic">Upload Profile Picture</Label>
                    <div className="mt-1">
                      <Input
                        id="profile-pic"
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePicChange}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                      />
                      {profilePreview && (
                        <div className="mt-2">
                          <img
                            src={profilePreview}
                            alt="Profile preview"
                            className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Send Application'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Documents & Instructions Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-navy flex items-center gap-3">
                <FileText className="h-6 w-6" />
                Documents required for admission
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Required Documents:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Application form (duly filled)</li>
                    <li>• SSC/10th Certificate & Mark sheet</li>
                    <li>• HSC/12th Certificate & Mark sheet</li>
                    <li>• Transfer Certificate</li>
                    <li>• Migration Certificate</li>
                    <li>• Conduct Certificate</li>
                    <li>• Registration Certificate</li>
                    <li>• Merit certificates (optional)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-green-700">Scholarship for SC/ST Students:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Caste Certificate</li>
                    <li>• Income Certificate</li>
                    <li>• Bank Account + Aadhar copy</li>
                    <li>• Residential proof</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-navy">
                Clear doubts with us! Your confidence awaits.
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={enquiryForm.handleSubmit(onEnquirySubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="enquiry-name">Name *</Label>
                  <Input 
                    id="enquiry-name"
                    {...enquiryForm.register('name')}
                    className="mt-1"
                  />
                  {enquiryForm.formState.errors.name && (
                    <p className="text-sm text-destructive mt-1">
                      {enquiryForm.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="enquiry-email">Email *</Label>
                  <Input 
                    id="enquiry-email"
                    type="email"
                    {...enquiryForm.register('email')}
                    className="mt-1"
                  />
                  {enquiryForm.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {enquiryForm.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="enquiry-phone">Phone No. *</Label>
                  <Input 
                    id="enquiry-phone"
                    type="tel"
                    {...enquiryForm.register('phone')}
                    className="mt-1"
                  />
                  {enquiryForm.formState.errors.phone && (
                    <p className="text-sm text-destructive mt-1">
                      {enquiryForm.formState.errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="enquiry-message">Message *</Label>
                  <Textarea 
                    id="enquiry-message"
                    {...enquiryForm.register('message')}
                    className="mt-1"
                    rows={4}
                  />
                  {enquiryForm.formState.errors.message && (
                    <p className="text-sm text-destructive mt-1">
                      {enquiryForm.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Send Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Promo / About Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-healthcare/5">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-xl md:text-2xl italic text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            "Explore boundless opportunities. Our commitment to academic excellence, experienced faculty, and state-of-the-art facilities make us a premier choice. Join us on your journey to success."
          </blockquote>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-navy">{course}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;