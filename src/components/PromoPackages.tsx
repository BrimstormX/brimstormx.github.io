import { Button } from "./ui/button";
import { SystemFeatures } from "./promo/SystemFeatures";
import { PackageCard } from "./promo/PackageCard";
import { promoPackages, valueProposition } from "./promo/promoData";

export function PromoPackages() {
  return (
    <section id="promo-packages" className="py-20 bg-gradient-to-b from-va-smoke to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Value Proposition */}
        <div className="text-center mb-16">
          <h2 className="text-va-navy mb-8">Limited Time: Accelerator Packages</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-va-divider max-w-4xl mx-auto">
            <p className="text-lg text-va-dark leading-relaxed">
              {valueProposition.split('238% return').map((part, i) => 
                i === 0 ? part : [<span key={i} className="font-bold text-va-navy">238% return</span>, part.slice(0)]
              )}
            </p>
          </div>
        </div>

        {/* System Features */}
        <SystemFeatures />

        {/* Promotional Packages */}
        <div className="grid lg:grid-cols-2 gap-8">
          {promoPackages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-va-dark mb-6">
            Ready to accelerate your wholesale business? These packages won't last long.
          </p>
          <Button 
            onClick={() => window.open('YOUR_CALENDLY_LINK', '_blank')}
            size="lg"
            className="btn-primary px-8"
          >
            Book Your Strategy Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}