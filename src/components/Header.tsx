import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-va-navy shadow-sm border-b border-va-divider">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-1 bg-va-gold rounded-full"></div>
              </div>
              <div>
                <div className="text-white font-bold text-xl">VA Horizon</div>
                <div className="text-xs text-gray-200 font-medium">Your Wholesale Advantage, On Demand</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-va-gold font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-white hover:text-va-gold font-medium transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-va-gold font-medium transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('pilot')}
              className="text-white hover:text-va-gold font-medium transition-colors"
            >
              Pilot
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-va-gold font-medium transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-va-gold font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex ml-8 mr-8">
            <Button 
              onClick={() => window.open('YOUR_CALENDLY_LINK', '_blank')}
              className="btn-primary"
            >
              Book 15-min Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-va-gold"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-600 bg-va-navy">
            <nav className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-white hover:text-va-gold font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-4 py-2 text-white hover:text-va-gold font-medium"
              >
                How it Works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-4 py-2 text-white hover:text-va-gold font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('pilot')}
                className="block w-full text-left px-4 py-2 text-white hover:text-va-gold font-medium"
              >
                Pilot
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-4 py-2 text-white hover:text-va-gold font-medium"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-white hover:text-va-gold font-medium"
              >
                Contact
              </button>
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => window.open('YOUR_CALENDLY_LINK', '_blank')}
                  className="btn-primary w-full"
                >
                  Book 15-min Audit
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}