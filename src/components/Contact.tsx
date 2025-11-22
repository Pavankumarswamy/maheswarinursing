import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube,
  Twitter
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-violet-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-healthcare/20 to-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 left-24 w-32 h-32 bg-gradient-to-br from-medical-accent/15 to-healthcare/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-primary/20 to-medical-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Subtle wave pattern */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="hsl(var(--primary) / 0.1)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our nursing programs? We're here to help you start 
              your healthcare career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Campus Location */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-navy">
                    <MapPin className="h-6 w-6 text-primary" />
                    Campus Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-muted-foreground mb-4">
                    Maheshwari Nursing College<br />
                    Bhatli Chowk, Bargarh<br />
                    Odisha, PIN: 768028
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">+91 8249448498</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">+91 9437158472</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">nlcattabira@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-navy">
                    <Clock className="h-6 w-6 text-medical-accent" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-navy">Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="flex gap-4">
                    <Button size="icon" variant="outline" className="hover:bg-blue-600 hover:text-white">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-pink-600 hover:text-white">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-red-600 hover:text-white">
                      <Youtube className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-blue-400 hover:text-white">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Stay updated with our latest news, events, and student achievements.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;