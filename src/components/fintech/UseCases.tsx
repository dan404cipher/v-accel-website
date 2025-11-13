"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Building2, Briefcase, Shield as ShieldIcon, TrendingUp, CreditCard, IndianRupee, CheckCircle2 } from "lucide-react";

const useCases = [
  {
    id: "banking",
    label: "Banking",
    icon: Building2,
    title: "Core Banking Modernization",
    description: "Transform legacy systems into modern, cloud-native platforms that enable digital-first experiences and real-time operations.",
    features: [
      "Digital account opening and KYC automation",
      "Real-time payment processing and settlement",
      "Mobile and internet banking platforms",
      "Automated compliance and regulatory reporting",
    ],
    metric: "40%",
    metricLabel: "Reduction in transaction processing time",
    gradient: "from-blue-100/40 via-slate-100/40 to-blue-100/40",
  },
  {
    id: "nbfc",
    label: "NBFCs",
    icon: Briefcase,
    title: "Non-Banking Financial Solutions",
    description: "Streamlined lending and financial services platforms designed for agility and scale in the modern financial ecosystem.",
    features: [
      "Automated loan origination and underwriting",
      "Credit scoring and risk assessment tools",
      "Collection and recovery management systems",
      "Portfolio management and analytics",
    ],
    metric: "60%",
    metricLabel: "Faster loan approval process",
    gradient: "from-purple-100/40 via-lavender-100/40 to-purple-100/40",
  },
  {
    id: "insurance",
    label: "Insurance",
    icon: ShieldIcon,
    title: "Insurance Technology Solutions",
    description: "End-to-end insurance technology platforms that streamline operations and enhance customer experience across the policy lifecycle.",
    features: [
      "Policy administration systems",
      "Claims processing automation",
      "Agent and broker portals",
      "Customer self-service platforms",
    ],
    metric: "50%",
    metricLabel: "Reduction in claims processing time",
    gradient: "from-emerald-100/40 via-teal-100/40 to-emerald-100/40",
  },
  {
    id: "investment",
    label: "Investment",
    icon: TrendingUp,
    title: "Wealth & Investment Management",
    description: "Sophisticated tools for wealth management firms to deliver exceptional investment services with real-time insights and analytics.",
    features: [
      "Portfolio management systems",
      "Trading platforms with real-time data",
      "Robo-advisory solutions",
      "Client reporting and analytics",
    ],
    metric: "99.99%",
    metricLabel: "Platform uptime guarantee",
    gradient: "from-orange-100/40 via-amber-100/40 to-orange-100/40",
  },
  {
    id: "payments",
    label: "Payments",
    icon: CreditCard,
    title: "Payment Processing Solutions",
    description: "Secure, scalable payment gateway infrastructure that handles high-volume transactions with enterprise-grade reliability.",
    features: [
      "Multi-currency and multi-channel support",
      "Tokenization and secure card vaults",
      "Fraud detection and prevention",
      "Settlement and reconciliation automation",
    ],
    metric: "10,000+",
    metricLabel: "Transactions processed per second",
    gradient: "from-rose-100/40 via-pink-100/40 to-rose-100/40",
  },
  {
    id: "lending",
    label: "Lending",
    icon: IndianRupee,
    title: "Digital Lending Platforms",
    description: "Modern lending solutions for the digital age with instant decisioning and seamless borrower experiences.",
    features: [
      "Instant credit decisioning engines",
      "Alternative credit scoring models",
      "Borrower portals and mobile apps",
      "Integration with credit bureaus and data providers",
    ],
    metric: "30 min",
    metricLabel: "Average loan approval time",
    gradient: "from-indigo-100/40 via-violet-100/40 to-indigo-100/40",
  },
];

export function UseCases() {
  const [activeTab, setActiveTab] = useState("banking");

  return (
    <section id="use-cases" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#45647B]/10 rounded-full mb-6">
            <span className="text-[#1A2332] font-[470]">Use Cases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-[32px]">
            Solutions Across Financial Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Versatile technology tailored for every segment of the financial industry
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Modern Tab Triggers */}
          <TabsList className="inline-flex w-auto h-auto p-1.5 bg-background/50 backdrop-blur-sm border rounded-full mb-12 mx-auto grid grid-cols-3 md:grid-cols-6 gap-1">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="relative flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg hover:bg-primary/5"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{useCase.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Modern Tab Content */}
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <TabsContent 
                key={useCase.id} 
                value={useCase.id} 
                className="mt-0 animate-in fade-in-50 duration-500"
              >
                <div className="relative overflow-hidden rounded-3xl border-2 bg-background">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-50`} />
                  
                  <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                    {/* Left Column - Content */}
                    <div className="space-y-6">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border-2 border-primary/20">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-3xl lg:text-4xl">
                          {useCase.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-primary">
                          <div className="h-px w-8 bg-primary" />
                          Key Features
                        </div>
                        <ul className="space-y-3">
                          {useCase.features.map((feature, idx) => (
                            <li 
                              key={idx} 
                              className="flex items-start gap-3 group"
                              style={{ animationDelay: `${idx * 100}ms` }}
                            >
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <span className="text-muted-foreground leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column - Metric Card */}
                    <div className="flex items-center justify-center">
                      <div className="w-full max-w-md">
                        <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-background/80 backdrop-blur-sm p-8 lg:p-10 shadow-xl">
                          {/* Decorative gradient */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                          
                          <div className="relative space-y-6 text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                              <TrendingUp className="h-4 w-4 text-primary" />
                              <span className="text-sm text-primary">Impact Metric</span>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="text-6xl lg:text-7xl text-primary">
                                {useCase.metric}
                              </div>
                              <div className="text-lg text-muted-foreground">
                                {useCase.metricLabel}
                              </div>
                            </div>

                            {/* Visual separator */}
                            <div className="pt-6 border-t">
                              <p className="text-sm text-muted-foreground">
                                Proven results across enterprise deployments
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
