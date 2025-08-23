import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How quickly can my VA start working?",
      answer: "After your discovery call and VA matching, we can have your VA trained and ready to start within 48-72 hours. This includes CRM setup, dialer configuration, and our 2-day founder-led training program."
    },
    {
      question: "What if my VA doesn't work out?",
      answer: "We offer a 5-business-day replacement guarantee. If you're not satisfied with your VA's performance, we'll find you a replacement at no additional cost. We also provide ongoing quality assurance and performance monitoring."
    },
    {
      question: "Do I need to provide my own CRM or dialer?",
      answer: "No, we handle the complete setup. We can work with your existing CRM (Pipedrive, Podio, Airtable) or set up a new one. We also provide dialer setup and configuration as part of our onboarding process."
    },
    {
      question: "What's included in the founder-led training?",
      answer: "Our 2-day training program covers your specific scripts, objection handling, lead qualification process, CRM usage, and your unique business requirements. The training is led by our founder, not outsourced to junior staff."
    },
    {
      question: "Can I scale up or add more VAs later?",
      answer: "Absolutely. We can scale your team as your business grows. Many clients start with one VA and expand to 2-3 VAs handling different aspects of their operation (calling, admin, buyer outreach)."
    },
    {
      question: "What are the payment terms?",
      answer: "First month + setup fee due upfront, then monthly billing thereafter. All plans include our non-solicit clause to protect both parties."
    },
    {
      question: "Do you provide VAs for other real estate niches?",
      answer: "We specialize exclusively in residential real estate wholesaling. This focus allows us to provide VAs with deep expertise in your specific business model and challenges."
    },
    {
      question: "What time zones do your VAs work in?",
      answer: "Our VAs are trained to work in U.S. time zones and can adjust their schedules to match your business hours and target markets. We ensure alignment with your operational requirements during the matching process."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-va-smoke">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-va-navy mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-va-dark">
              Everything you need to know about our VA services for wholesalers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-va-divider rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-va-navy hover:text-va-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-va-dark leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-va-dark mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@vahorizon.com" 
                className="text-va-gold font-semibold hover:underline"
              >
                Email us directly
              </a>
              <span className="hidden sm:inline text-va-dark">or</span>
              <button 
                onClick={() => window.open('YOUR_CALENDLY_LINK', '_blank')}
                className="text-va-gold font-semibold hover:underline"
              >
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}