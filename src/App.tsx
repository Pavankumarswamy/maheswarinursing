import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppChat from "@/components/WhatsAppChat";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import OurCourses from "./pages/OurCourses";
import QuickLinks from "./pages/QuickLinks";
import ApplyOnline from "./pages/ApplyOnline";
import FeeStructure from "./pages/FeeStructure";
import ScholarshipInfo from "./pages/ScholarshipInfo";
import AdmissionRequirements from "./pages/AdmissionRequirements";
import HostelInformation from "./pages/HostelInformation";
import AdmissionPage from "./pages/AdmissionPage";
import AdminPanel from "./pages/AdminPanel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<OurCourses />} />
          <Route path="/quick-links" element={<QuickLinks />} />
          <Route path="/apply-online" element={<ApplyOnline />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/scholarships" element={<ScholarshipInfo />} />
          <Route path="/admission-requirements" element={<AdmissionRequirements />} />
          <Route path="/hostel-information" element={<HostelInformation />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/scn-admin" element={<AdminPanel />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppChat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
