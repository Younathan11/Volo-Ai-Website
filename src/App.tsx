import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import DataProcessingPage from "./pages/DataProcessingPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import DemoModal from "./components/DemoModal";

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage onOpenDemo={() => setIsDemoModalOpen(true)} />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/data-processing" element={<DataProcessingPage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </Router>
  );
}
