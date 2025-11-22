import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import maheshwariLogo from "@/assets/maheshwari-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-navy text-navy-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 8249448498 / 9437158472</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>nlcattabira@gmail.com</span>
              </div>
            </div>
            <div className="text-xs">
              <span className="bg-medical-accent text-medical-accent-foreground px-3 py-1 rounded-full font-semibold">
                Admission Open 2025-26
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and College Name */}
          <div className="flex items-center gap-4">
            <img
              src={maheshwariLogo}
              alt="Maheshwari Nursing College Logo"
              className="h-16 w-16 object-contain"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-navy">
                Maheshwari Nursing College
              </h1>
              <p className="text-sm text-muted-foreground">
                Approved by Odisha Nurses & Midwives Registration Council
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/courses" className="text-foreground hover:text-primary transition-colors">
              Our Courses
            </a>
            <a href="/gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="/quick-links" className="text-foreground hover:text-primary transition-colors">
              Quick Links
            </a>
            <Button variant="medical" size="lg" asChild>
              <Link to="/apply-online">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/courses" className="text-foreground hover:text-primary transition-colors">
                Our Courses
              </a>
              <a href="/gallery" className="text-foreground hover:text-primary transition-colors">
                Gallery
              </a>
              <a href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="/quick-links" className="text-foreground hover:text-primary transition-colors">
                Quick Links
              </a>
              <Button variant="medical" className="w-full mt-2" asChild>
                <Link to="/apply-online">Apply Now</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;