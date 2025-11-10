import { Shield, Rocket, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FinancialBackground } from "./FinancialBackground";

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "End-to-end encryption, compliance with PCI DSS, SOC 2, and GDPR standards.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "Accelerated time-to-market with our proven agile methodologies and DevOps practices.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with deep expertise in financial technology and industry best practices.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Successfully delivered 200+ projects for leading financial institutions globally.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-32 bg-background overflow-hidden">
      <FinancialBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506399441630-774ef431470f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGF0YSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjI1ODAwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology and analytics"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-[#45647B]/10 rounded-full mb-4">
                <span className="text-[#45647B]">Why Choose Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
                Built for the Future of Finance
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine technical excellence with deep industry knowledge to deliver solutions that drive business value.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
