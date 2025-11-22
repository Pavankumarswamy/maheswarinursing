import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useFirebaseData } from "@/hooks/useFirebaseData";
import { Phone, MapPin } from "lucide-react";

interface ContactFormProps {
  variant?: 'default' | 'compact';
  title?: string;
  subtitle?: string;
}

const ContactForm = ({ variant = 'default', title, subtitle }: ContactFormProps) => {
  const { toast } = useToast();
  const { submitContactForm } = useFirebaseData();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    courseInterest: '',
    preferredBranch: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          courseInterest: '',
          preferredBranch: '',
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'compact') {
    return (
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-healthcare/10">
          <CardTitle className="text-xl text-navy text-center">
            {title || "Quick Contact"}
          </CardTitle>
          {subtitle && (
            <p className="text-center text-muted-foreground text-sm">
              {subtitle}
            </p>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm">First Name *</Label>
                <Input 
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  placeholder="Your first name" 
                  required 
                  className="h-9"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm">Last Name *</Label>
                <Input 
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  placeholder="Your last name" 
                  required 
                  className="h-9"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-sm">Email *</Label>
              <Input 
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="your.email@example.com" 
                required 
                className="h-9"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm">Phone *</Label>
              <Input 
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+91 98765 43210" 
                required 
                className="h-9"
              />
            </div>

            <div>
              <Label htmlFor="subject" className="text-sm">Subject *</Label>
              <Input 
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                placeholder="What is this regarding?" 
                required 
                className="h-9"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-sm">Message *</Label>
              <Textarea 
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Your message..." 
                rows={3}
                required
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-xl">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-healthcare/10">
        <CardTitle className="text-2xl text-navy text-center">
          {title || "Send Us a Message"}
        </CardTitle>
        <p className="text-center text-muted-foreground">
          {subtitle || "We'll get back to you within 24 hours"}
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input 
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                placeholder="Enter your first name" 
                required 
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input 
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                placeholder="Enter your last name" 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input 
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Enter your email" 
                required 
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input 
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="Enter your phone number" 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="courseInterest">Course Interest</Label>
              <select 
                id="courseInterest"
                value={formData.courseInterest}
                onChange={(e) => setFormData({...formData, courseInterest: e.target.value})}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select course of interest</option>
                <option value="gnm">GNM (General Nursing & Midwifery)</option>
                <option value="bsc">B.Sc. Nursing</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div>
              <Label htmlFor="preferredBranch">Preferred Branch</Label>
              <select 
                id="preferredBranch"
                value={formData.preferredBranch}
                onChange={(e) => setFormData({...formData, preferredBranch: e.target.value})}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select preferred branch</option>
                <option value="sambalpur">Sambalpur Branch</option>
                <option value="boudh">Boudh Branch</option>
                <option value="either">Either Branch</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="subject">Subject *</Label>
            <Input 
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              placeholder="What is this regarding?" 
              required 
            />
          </div>

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea 
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Please provide details about your inquiry..." 
              rows={6}
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button type="submit" disabled={loading} variant="medical" className="flex-1 text-lg py-6">
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
            <Button type="button" variant="outline" className="flex-1">
              Request Call Back
            </Button>
          </div>
        </form>
      </CardContent>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 pt-0">
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-navy mb-2">Call Directly</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Speak with our admission counselors
            </p>
            <Button variant="outline" className="w-full">
              +91 9124846864
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <MapPin className="h-8 w-8 text-healthcare mx-auto mb-3" />
            <h4 className="font-semibold text-navy mb-2">Visit Campus</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Schedule a campus tour
            </p>
            <Button variant="outline" className="w-full">
              Book Visit
            </Button>
          </CardContent>
        </Card>
      </div>
    </Card>
  );
};

export default ContactForm;