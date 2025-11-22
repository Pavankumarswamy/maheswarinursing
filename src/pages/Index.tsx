import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import QuickApplication from "@/components/QuickApplication";
import Admissions from "@/components/Admissions";
import Facilities from "@/components/Facilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RandomImageModal from "@/components/RandomImageModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <RandomImageModal />
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Facilities />
        <Contact />
        <QuickApplication />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
