import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Star } from "lucide-react";
import { useState } from "react";

export function Pricing() {
  const [isFullTime, setIsFullTime] = useState(true);

  const basePlans = [
    {
      name: "Junior VA",
      fullTimePrice: 640,
      hourly: "$4/hr",
      popular: false,
      features: [
        "Basic cold calling",
        "List pulling assistance",
        "CRM data entry",
        "Email management",
        "Weekly reports",
        "Drop, Change and Add VAs Anytime without any cost"
      ]
    },
    {
      name: "Senior VA",
      fullTimePrice: 800,
      hourly: "$5/hr", 
      popular: true,
      features: [
        "Advanced cold calling & scripts",
        "Skip tracing expertise",
        "CRM setup & automations",
        "Buyer outreach & comps",
        "Lead nurture sequences",
        "Dedicated account manager",
        "Priority support",
        "Drop, Change and Add VAs Anytime without any cost"
      ]
    },
    {
      name: "Add-Ons",
      fullTimePrice: null, // Custom pricing
      hourly: "One-time & monthly",
      popular: false,
      features: [
        "CRM & Dialer Setup - $150",
        "High Quality Lists - $100/month",
        "Additional training hours",
        "Custom integrations",
        "Priority placement"
      ]
    }
  ];

  const plans = basePlans.map(plan => ({
    ...plan,
    price: plan.fullTimePrice ? `$${isFullTime ? plan.fullTimePrice : plan.fullTimePrice / 2}` : "Custom",
    hours: plan.fullTimePrice ? `${isFullTime ? 160 : 80} hours/month` : "As needed"
  }));

  return (
    <section id="pricing" className="py-20 bg-va-smoke">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-va-navy mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-va-dark max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include training, support, and our replacement guarantee.
          </p>
          
          {/* Part-time / Full-time Toggle */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative inline-flex items-center bg-white rounded-full p-1 shadow-md border border-va-divider mb-3">
              <button
                onClick={() => setIsFullTime(false)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-semibold text-sm ${
                  !isFullTime 
                    ? 'bg-va-gold text-white shadow-md transform scale-105' 
                    : 'text-va-dark hover:text-va-navy'
                }`}
              >
                Part Time
                <span className="block text-xs mt-0.5 opacity-75">80 hrs/month</span>
              </button>
              <button
                onClick={() => setIsFullTime(true)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-semibold text-sm ${
                  isFullTime 
                    ? 'bg-va-gold text-white shadow-md transform scale-105' 
                    : 'text-va-dark hover:text-va-navy'
                }`}
              >
                Full Time
                <span className="block text-xs mt-0.5 opacity-75">160 hrs/month</span>
              </button>
            </div>
            
            {/* Savings indicator for part-time */}
            <div className={`transition-all duration-500 ease-in-out ${!isFullTime ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              {!isFullTime && (
                <div className="bg-va-navy text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  Perfect for testing the waters - 50% savings!
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border ${plan.popular ? 'border-va-gold shadow-lg scale-105' : 'border-va-divider'} bg-white hover:shadow-lg transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-va-gold text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-va-navy text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-va-navy transition-all duration-500 ease-in-out">
                    {plan.price}
                  </span>
                  <span className="text-va-dark text-lg">/month</span>
                </div>
                <div className="space-y-1">
                  <p className="text-va-gold font-semibold">{plan.hourly}</p>
                  <p className="text-sm text-va-dark transition-all duration-500 ease-in-out">
                    {plan.hours}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-va-gold mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-va-dark text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => window.open('YOUR_STRIPE_CHECKOUT_LINK', '_blank')}
                >
                  {plan.name === 'Add-Ons' ? 'Contact Us' : 'Get Started'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-va-dark mb-2">
            All plans include a non-solicit clause.
          </p>
          <p className="text-xs text-va-dark">
            First month + setup fee due upfront. Monthly billing thereafter.
          </p>
        </div>
      </div>
    </section>
  );
}