import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-white via-va-smoke to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:pr-8">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-va-divider mb-8">
              <CheckCircle className="w-4 h-4 text-va-gold mr-2" />
              <span className="text-sm font-medium text-va-dark">Get started in 2 days</span>
            </div>
            
            <h1 className="text-va-navy mb-6 leading-tight">
              Trained Virtual Assistants for Real-Estate Wholesalers
            </h1>
            
            <p className="text-xl text-va-dark mb-8 leading-relaxed">
              VA Horizon matches U.S. wholesalers with vetted cold-callers, skip tracers, 
              and lead managers — so you close more deals and work less.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => window.open('YOUR_CALENDLY_LINK', '_blank')}
                className="btn-primary flex items-center justify-center space-x-2 px-8 py-4 text-lg"
              >
                <span>Book 15-min Audit</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('pricing')}
                variant="outline"
                className="btn-secondary px-8 py-4 text-lg"
              >
                View Pricing
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-va-dark">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-va-gold mr-2" />
                <span>2-day founder-led training</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-va-gold mr-2" />
                <span>Add, drop, or change VAs at any time</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="lg:pl-8">
            <div className="relative">
              {/* Dashboard Mockup */}
              <div className="bg-white rounded-lg shadow-2xl border border-va-divider p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-xs text-va-dark font-medium">VA Dashboard</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-va-smoke rounded">
                    <span className="font-medium text-va-dark">Cold Calls Today</span>
                    <span className="text-2xl font-bold text-va-navy">47</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-va-smoke rounded">
                    <span className="font-medium text-va-dark">Appointments Set</span>
                    <span className="text-2xl font-bold text-va-gold">8</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-va-smoke rounded">
                    <span className="font-medium text-va-dark">Lists Processed</span>
                    <span className="text-2xl font-bold text-va-navy">3</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-va-gold text-white px-3 py-2 rounded-lg shadow-lg">
                <span className="font-semibold text-sm">Live Now</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white border border-va-divider rounded-lg px-4 py-2 shadow-lg">
                <span className="text-xs text-va-dark">Your VA: Sarah M.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}