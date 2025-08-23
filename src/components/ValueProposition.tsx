import { Card, CardContent } from "./ui/card";
import { Zap, Users, Shield } from "lucide-react";

export function ValueProposition() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-va-gold" />,
      title: "Launch Fast",
      description: "CRM + dialer setup included. Your VA starts calling within 48 hours."
    },
    {
      icon: <Users className="w-8 h-8 text-va-gold" />,
      title: "Founder-Led Training",
      description: "2-day intensive training program led by our founder, not outsourced."
    },
    {
      icon: <Shield className="w-8 h-8 text-va-gold" />,
      title: "Replacement Guarantee",
      description: "Not satisfied? We'll replace your VA within 5 business days, guaranteed."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-8 border border-va-divider hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-va-navy mb-4">{benefit.title}</h3>
                <p className="text-va-dark">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}