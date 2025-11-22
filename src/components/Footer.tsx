import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube,
  Twitter,
  GraduationCap,
  Heart
} from "lucide-react";
import maheshwariLogo from "@/assets/maheshwari-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={maheshwariLogo}
                alt="Maheshwari Nursing College Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Maheshwari College</h3>
                <p className="text-sm text-navy-foreground/80">of Nursing</p>
              </div>
            </div>
            <p className="text-navy-foreground/80 mb-6 leading-relaxed">
              Approved by Odisha Nurses & Midwives Registration Council under DMET, Govt. of Odisha. 
              Affiliated with Sambalpur University & Indian Nursing Council.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-4 w-4 text-medical-accent" />
              <span className="text-sm text-navy-foreground/90">
                "Excellence in Nursing Education"
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-medical-accent" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-navy-foreground/80 hover:text-medical-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-navy-foreground/80 hover:text-medical-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className="text-navy-foreground/80 hover:text-medical-accent transition-colors">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#admissions" className="text-navy-foreground/80 hover:text-medical-accent transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-navy-foreground/80 hover:text-medical-accent transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-navy-foreground/80 hover:text-medical-accent transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="/blog" className="text-navy-foreground/80 hover:text-medical-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-navy-foreground/80 hover:text-medical-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/quick-links" className="text-navy-foreground/80 hover:text-medical-accent transition-colors">
                  Quick Links
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              <li>
                <div className="text-navy-foreground/80">
                  <div className="font-medium">GNM</div>
                  <div className="text-sm text-navy-foreground/60">General Nursing & Midwifery (3 Years)</div>
                </div>
              </li>
              <li>
                <div className="text-navy-foreground/80">
                  <div className="font-medium">B.Sc. Nursing</div>
                  <div className="text-sm text-navy-foreground/60">Bachelor of Science in Nursing (4 Years)</div>
                </div>
              </li>
              <li>
                <div className="text-navy-foreground/80">
                  <div className="font-medium">ANM</div>
                  <div className="text-sm text-navy-foreground/60">Auxiliary Nurse Midwifery (2 Years)</div>
                </div>
              </li>
              <li>
                <div className="text-navy-foreground/80">
                  <div className="font-medium">P.B.B.Sc. (N)</div>
                  <div className="text-sm text-navy-foreground/60">Post Basic B.Sc. Nursing (2 Years)</div>
                </div>
              </li>
              <li>
                <div className="text-navy-foreground/80">
                  <div className="font-medium">M.Sc. Nursing</div>
                  <div className="text-sm text-navy-foreground/60">Master of Science in Nursing (2 Years)</div>
                </div>
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-medium mb-3 text-medical-accent">Special Benefits</h5>
              <ul className="space-y-2 text-sm">
                <li className="text-navy-foreground/80">✓ Quality Education</li>
                <li className="text-navy-foreground/80">✓ Expert Faculty</li>
                <li className="text-navy-foreground/80">✓ Clinical Training</li>
                <li className="text-navy-foreground/80">✓ Hostel Facilities</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            
            {/* Campus Location */}
            <div className="mb-6">
              <h5 className="font-medium mb-2 text-medical-accent">Campus Location</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-navy-foreground/60 mt-0.5" />
                  <span className="text-navy-foreground/80">
                    Bhatli Chowk, Bargarh<br />Odisha, PIN: 768028
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-navy-foreground/60" />
                  <span className="text-navy-foreground/80">+91 8249448498</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-navy-foreground/60" />
                  <span className="text-navy-foreground/80">+91 9437158472</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-4 w-4 text-navy-foreground/60" />
              <span className="text-sm text-navy-foreground/80">
                nlcattabira@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="border-t border-navy-foreground/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-semibold mb-2">Ready to Start Your Nursing Career?</h4>
              <p className="text-navy-foreground/80">Join us and become a healthcare hero!</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button variant="medical" size="lg" asChild>
                <Link to="/apply-online">Apply Now 2025-26</Link>
              </Button>
              <div className="flex items-center gap-3">
                <span className="text-sm text-navy-foreground/80">Follow us:</span>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" className="hover:bg-navy-foreground/20">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="hover:bg-navy-foreground/20">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="hover:bg-navy-foreground/20">
                    <Youtube className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="hover:bg-navy-foreground/20">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-navy/80 border-t border-navy-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-navy-foreground/80">
                © 2024 Maheshwari Nursing College. All rights reserved.
              </p>
              <p className="text-xs text-navy-foreground/60 mt-1">
                Approved by Odisha Nurses & Midwives Registration Council | Affiliated with Sambalpur University
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-navy-foreground/60">
              <a href="#" className="hover:text-medical-accent transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-medical-accent transition-colors">Terms & Conditions</a>
              <span>•</span>
              <a href="#" className="hover:text-medical-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;