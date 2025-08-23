import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Phone, Settings, Zap, Check } from "lucide-react";
import { systemFeatures } from "./promoData";

const iconMap = {
  Phone,
  Settings
};

export function SystemFeatures() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-16">
      {systemFeatures.map((feature, index) => {
        const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
        
        return (
          <Card key={index} className="border-va-divider shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-va-navy rounded-lg flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-va-navy">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-va-dark mb-4">
                {feature.description.split('200-300 people per hour').map((part, i) => 
                  i === 0 ? part : [<span key={i} className="font-bold text-va-navy">200-300 people per hour</span>, part.slice(0)]
                )}
              </p>
              <div className="flex items-center space-x-2 text-sm text-va-dark">
                {feature.icon === 'Phone' ? (
                  <Zap className="h-4 w-4 text-va-gold" />
                ) : (
                  <Check className="h-4 w-4 text-va-gold" />
                )}
                <span>{feature.highlight}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}