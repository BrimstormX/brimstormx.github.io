import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Phone, Search, Settings, Users, Mail, BarChart3 } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Phone className="w-8 h-8 text-va-gold" />,
      title: "Cold Calling & Appointment Setting",
      description: "Professional cold callers trained in real estate wholesaling scripts and objection handling.",
      deliverables: [
        "Qualified lead conversations",
        "Appointment scheduling",
        "Follow-up sequences",
        "Call recording and notes",
        "Daily activity reports"
      ]
    },
    {
      icon: <Search className="w-8 h-8 text-va-gold" />,
      title: "List Pulling & Skip Tracing",
      description: "PropStream workflow specialists who pull targeted lists and find contact information.",
      deliverables: [
        "Targeted property lists",
        "Owner contact information",
        "Skip tracing services",
        "List segmentation",
        "Data quality assurance"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-va-gold" />,
      title: "CRM Setup & Automations",
      description: "Complete CRM setup with Pipedrive, Podio, or Airtable plus Zapier automations.",
      deliverables: [
        "CRM configuration",
        "Pipeline setup",
        "Automation workflows",
        "Integration setup",
        "Training documentation"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-va-gold" />,
      title: "Buyer Outreach & Comps",
      description: "Reach out to your buyer network and provide accurate comparable sales data.",
      deliverables: [
        "Buyer database management",
        "Property comp analysis",
        "Outreach campaigns",
        "Response tracking",
        "Market insights"
      ]
    },
    {
      icon: <Mail className="w-8 h-8 text-va-gold" />,
      title: "Email Management & Lead Nurture",
      description: "Professional email management and automated lead nurturing sequences.",
      deliverables: [
        "Email inbox management",
        "Lead nurture sequences",
        "Response templates",
        "Follow-up scheduling",
        "Email metrics tracking"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-va-gold" />,
      title: "Dedicated Account Ops",
      description: "Weekly reporting, quality assurance, and performance optimization.",
      deliverables: [
        "Weekly performance reports",
        "Quality assurance calls",
        "Performance optimization",
        "Strategic recommendations",
        "Account management"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-va-smoke">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-va-navy mb-6">Complete VA Services for Wholesalers</h2>
          <p className="text-xl text-va-dark max-w-3xl mx-auto">
            From cold calling to CRM setup, we provide trained VAs for every aspect of your wholesale operation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full border border-va-divider bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-va-navy text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-va-dark mb-4">{service.description}</p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-va-gold text-va-gold hover:bg-va-gold hover:text-white">
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-va-navy">{service.title}</DialogTitle>
                    </DialogHeader>
                    <div className="pt-4">
                      <p className="text-va-dark mb-4">{service.description}</p>
                      <h4 className="font-semibold text-va-navy mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-va-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-va-dark text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}