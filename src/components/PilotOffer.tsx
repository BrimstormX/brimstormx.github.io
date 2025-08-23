import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { CheckCircle, Star } from "lucide-react";
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { toast } from "sonner@2.0.3";

export function PilotOffer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.interest) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-8b443622/pilot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        toast.success("🎉 Pilot reserved! We'll email you within 24 hours to schedule your audit.");
        setFormData({ name: '', email: '', company: '', interest: '', preferredTime: '' });
      } else {
        throw new Error(result.error || 'Failed to reserve pilot');
      }
    } catch (error) {
      console.error('Pilot reservation error:', error);
      toast.error("There was an error reserving your pilot. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pilot" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-va-gold text-white rounded-full mb-6">
              <Star className="w-4 h-4 mr-2" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>
            <h2 className="text-va-navy mb-6">Free 15-min Audit + 1-Week Paid Pilot</h2>
            <p className="text-xl text-va-dark">
              See how our VAs can transform your wholesale business. No long-term commitment required.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Benefits */}
            <div className="space-y-6">
              <h3 className="text-va-navy text-2xl mb-6">What You Get:</h3>
              
              <div className="space-y-4">
                {[
                  "Free 15-minute discovery call to assess your needs",
                  "Custom VA matching based on your specific requirements", 
                  "1-week paid pilot with your matched VA ($160-200 value)",
                  "Complete CRM and dialer setup included",
                  "Founder-led training session for you and your VA",
                  "No long-term contract during pilot period"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-va-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-va-dark">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-va-smoke p-6 rounded-lg">
                <h4 className="text-va-navy font-semibold mb-2">Pilot Success Rate</h4>
                <p className="text-va-dark text-sm">
                  87% of our pilots convert to full-time placements. Most clients see qualified leads within the first 3 days.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <Card className="border border-va-divider">
              <CardHeader>
                <CardTitle className="text-va-navy text-center">Reserve Your Pilot</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Label htmlFor="interest">Primary Interest *</Label>
                    <Select 
                      onValueChange={(value) => setFormData({...formData, interest: value})}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your main need" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cold-calling">Cold Calling</SelectItem>
                        <SelectItem value="skip-tracing">Skip Tracing</SelectItem>
                        <SelectItem value="crm-setup">CRM Setup</SelectItem>
                        <SelectItem value="buyer-outreach">Buyer Outreach</SelectItem>
                        <SelectItem value="full-service">Full Service Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Preferred Call Time</Label>
                    <Textarea
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                      placeholder="e.g., Weekdays 9-11 AM EST"
                      className="mt-1"
                      rows={3}
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Reserving...' : 'Reserve Pilot'}
                  </Button>
                </form>

                <div className="text-center mt-4">
                  <p className="text-xs text-va-dark">
                    Or schedule directly:
                  </p>
                  <Button 
                    variant="link" 
                    className="text-va-gold font-semibold p-0"
                    onClick={() => window.open('YOUR_CALENDLY_LINK', '_blank')}
                    disabled={isSubmitting}
                  >
                    Book 15-min Audit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}