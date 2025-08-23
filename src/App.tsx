import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ValueProposition } from "./components/ValueProposition";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { PromoPackages } from "./components/PromoPackages";

import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";
import { useEffect, useState } from "react";

export default function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);

  useEffect(() => {
    // Check if admin mode is requested via URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
      setIsAdminMode(true);
    }
  }, []);

  // Render admin dashboard if in admin mode
  if (isAdminMode) {
    return (
      <div className="min-h-screen bg-white font-montserrat">
        <div className="bg-va-navy text-white p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-va-gold rounded-full flex items-center justify-center">
                <div className="w-4 h-0.5 bg-white rounded-full"></div>
              </div>
              <span className="font-bold">VA Horizon Admin</span>
            </div>
            <button 
              onClick={() => {
                window.history.replaceState({}, document.title, window.location.pathname);
                setIsAdminMode(false);
              }}
              className="text-va-gold hover:underline"
            >
              Back to Website
            </button>
          </div>
        </div>
        <AdminDashboard />
      </div>
    );
  }

  // Render main website
  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Header with Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Value Proposition */}
        <ValueProposition />
        
        {/* Services Section */}
        <Services />
        
        {/* How It Works */}
        <HowItWorks />
        
        {/* Pricing */}
        <Pricing />
        
        {/* Promotional Packages */}
        <PromoPackages />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* FAQ */}
        <FAQ />
        
        {/* Contact */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Toast Notifications */}
    </div>
  );
}
