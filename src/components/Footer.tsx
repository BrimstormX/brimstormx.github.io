import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-va-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-va-gold rounded-full flex items-center justify-center">
                <div className="w-6 h-1 bg-white rounded-full"></div>
              </div>
              <div>
                <div className="text-xl font-bold">VA Horizon</div>
                <div className="text-sm text-gray-300">Your Wholesale Advantage, On Demand</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              We match U.S. residential real-estate wholesalers with trained virtual assistants 
              for cold calling, skip tracing, CRM setup, and lead management.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-va-gold rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-va-gold rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-va-gold rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="mailto:hello@vahorizon.com" className="w-10 h-10 bg-va-gold rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-va-gold">Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#services" className="hover:text-va-gold transition-colors">Cold Calling</a></li>
              <li><a href="#services" className="hover:text-va-gold transition-colors">Skip Tracing</a></li>
              <li><a href="#services" className="hover:text-va-gold transition-colors">CRM Setup</a></li>
              <li><a href="#services" className="hover:text-va-gold transition-colors">Buyer Outreach</a></li>
              <li><a href="#services" className="hover:text-va-gold transition-colors">Email Management</a></li>
              <li><a href="#services" className="hover:text-va-gold transition-colors">Account Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-va-gold">Company</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#how-it-works" className="hover:text-va-gold transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-va-gold transition-colors">Pricing</a></li>
              <li><a href="#pilot" className="hover:text-va-gold transition-colors">Free Pilot</a></li>
              <li><a href="#faq" className="hover:text-va-gold transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-va-gold transition-colors">Contact</a></li>
              <li><a href="/terms" className="hover:text-va-gold transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © {currentYear} VA Horizon. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <a href="/terms" className="hover:text-va-gold transition-colors">Terms of Service</a>
              <a href="/privacy" className="hover:text-va-gold transition-colors">Privacy Policy</a>
              <a href="/client-agreement" className="hover:text-va-gold transition-colors">Client Agreement</a>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-gray-400 text-center">
            VA Horizon provides virtual assistant services for real-estate wholesalers. 
            By contacting us you agree to our Terms.
          </div>
        </div>
      </div>
    </footer>
  );
}