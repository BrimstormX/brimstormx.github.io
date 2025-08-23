import { Card, CardContent } from "./ui/card";
import { Search, GraduationCap, Rocket } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-12 h-12 text-va-gold" />,
      title: "Discovery & Match",
      description: "15-minute audit to understand your needs and match you with the perfect VA from our vetted talent pool."
    },
    {
      number: "02",
      icon: <GraduationCap className="w-12 h-12 text-va-gold" />,
      title: "Founder-Led Training",
      description: "2-day intensive training program to ensure your VA understands your process perfectly and is ready to deliver results."
    },
    {
      number: "03",
      icon: <Rocket className="w-12 h-12 text-va-gold" />,
      title: "Full Deployment",
      description: "Full deployment with weekly reports, quality assurance, and ongoing support to maximize your results."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-va-navy mb-6">How It Works</h2>
          <p className="text-xl text-va-dark max-w-3xl mx-auto">
            Get your trained VA in just 3 simple steps. From discovery to deployment, we handle everything.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-va-divider"></div>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-va-gold"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center p-8 border border-va-divider hover:shadow-lg transition-shadow bg-white relative z-10">
                  <CardContent className="pt-6">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-va-navy text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="flex justify-center mb-6 mt-4">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-va-navy mb-4">{step.title}</h3>
                    <p className="text-va-dark leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-0.5 h-8 bg-va-gold"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}