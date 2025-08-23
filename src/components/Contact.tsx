import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
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
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-8b443622/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        toast.success("Thanks! We'll email you within 24 hours to schedule your audit.");
        setFormData({ name: '', email: '', company: '', interest: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error("There was an error submitting your form. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-va-smoke">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-va-navy mb-6">Get Your VA Started Today</h2>
          <p className="text-xl text-va-dark max-w-3xl mx-auto">
            Ready to scale your wholesale business? Contact us for a free consultation and custom VA matching.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-va-navy text-2xl mb-6">Let's Connect</h3>
              <p className="text-va-dark mb-8 leading-relaxed">
                We're here to help you find the perfect VA for your wholesale business. 
                Reach out today and let's discuss how we can help you close more deals and work less.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-va-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-va-navy mb-1">Email</h4>
                  <p className="text-va-dark">hello@vahorizon.com</p>
                  <p className="text-sm text-va-dark">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-va-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-va-navy mb-1">Schedule a Call</h4>
                  <p className="text-va-dark mb-2">Free 15-minute consultation</p>
                  <Button 
                    variant="link" 
                    className="text-va-gold font-semibold p-0 h-auto"
                    onClick={() => window.open('YOUR_CALENDLY_LINK', '_blank')}
                  >
                    Book Now →
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-va-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-va-navy mb-1">Service Area</h4>
                  <p className="text-va-dark">United States</p>
                  <p className="text-sm text-va-dark">All time zones supported</p>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="bg-white p-6 rounded-lg border border-va-divider">
              <h4 className="font-semibold text-va-navy mb-4">Why Choose VA Horizon?</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-va-gold">48hr</div>
                  <div className="text-va-dark">Quick Start</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-va-gold">5 Day</div>
                  <div className="text-va-dark">Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border border-va-divider">
            <CardHeader>
              <CardTitle className="text-va-navy">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Name *</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-company">Company Name</Label>
                  <Input
                    id="contact-company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="mt-1"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="contact-interest">How can we help? *</Label>
                  <Select 
                    onValueChange={(value) => setFormData({...formData, interest: value})}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your primary need" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cold-calling">Cold Calling VA</SelectItem>
                      <SelectItem value="skip-tracing">Skip Tracing & Lists</SelectItem>
                      <SelectItem value="crm-setup">CRM Setup & Automation</SelectItem>
                      <SelectItem value="buyer-outreach">Buyer Outreach</SelectItem>
                      <SelectItem value="full-package">Complete VA Package</SelectItem>
                      <SelectItem value="consultation">Just have questions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="contact-message">Tell us about your business</Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="What's your biggest challenge? How many deals per month? What's your current process?"
                    className="mt-1"
                    rows={4}
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              <div className="text-center mt-6 pt-6 border-t border-va-divider">
                <p className="text-sm text-va-dark mb-4">
                  Prefer to schedule a call directly?
                </p>
                <Button 
                  onClick={() => window.open('YOUR_CALENDLY_LINK', '_blank')}
                  className="btn-secondary"
                  disabled={isSubmitting}
                >
                  Book 15-min Audit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}