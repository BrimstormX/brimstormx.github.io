import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check, Clock } from "lucide-react";

interface PackageCardProps {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  badge: string;
  badgeColor: string;
  borderColor: string;
  discount: string;
  features: string[];
  terms: string;
  buttonText: string;
}

export function PackageCard({
  title,
  subtitle,
  price,
  originalPrice,
  badge,
  badgeColor,
  borderColor,
  discount,
  features,
  terms,
  buttonText
}: PackageCardProps) {
  return (
    <Card className={`border-2 ${borderColor} shadow-xl relative overflow-hidden h-full flex flex-col`}>
      <div className={`absolute top-0 right-0 ${borderColor === 'border-va-gold' ? 'bg-va-gold' : 'bg-va-navy'} text-white px-4 py-1 rounded-bl-lg`}>
        <span className="text-sm font-bold">{discount}</span>
      </div>
      <CardHeader className="pb-6">
        <div className="flex items-center justify-between">
          <div>
            <Badge className={badgeColor + " mb-2"}>{badge}</Badge>
            <CardTitle className="text-2xl text-va-navy">{title}</CardTitle>
            <p className="text-va-dark mt-1">{subtitle}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-va-navy">{price}</div>
            <p className="text-sm text-gray-500 line-through">{originalPrice}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h4 className="font-semibold text-va-navy mb-3">What's included:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-va-gold mt-0.5 flex-shrink-0" />
                <span className="text-va-dark text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t pt-4 mt-auto">
          <p className="text-xs text-va-dark mb-3">
            <Clock className="h-4 w-4 inline mr-1" />
            Quick terms: {terms}
          </p>
          <Button 
            onClick={() => window.open('YOUR_CALENDLY_LINK', '_blank')}
            className="btn-primary w-full"
          >
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}