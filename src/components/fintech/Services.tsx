import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Cloud, Code, Database, Lock, Zap, LineChart } from "lucide-react";
import { FinancialBackground } from "./FinancialBackground";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions tailored for financial institutions with multi-region deployment and disaster recovery.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Bespoke software solutions built with modern frameworks to meet your unique business requirements and compliance needs.",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Advanced data architecture, migration, and management services ensuring data integrity and optimal performance.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Comprehensive security audits, penetration testing, and compliance solutions for regulatory requirements.",
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Seamless integration services connecting your systems with third-party platforms and payment gateways.",
  },
  {
    icon: LineChart,
    title: "Analytics & AI",
    description: "Data analytics and machine learning solutions to derive actionable insights and automate decision-making.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-card overflow-hidden">
      <FinancialBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#45647B]/10 rounded-full mb-4">
            <span className="text-[#45647B]">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Comprehensive Technical Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide end-to-end technology services designed specifically for the financial industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
