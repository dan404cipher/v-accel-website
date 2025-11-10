'use client';

import { MessageSquare, Lightbulb, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    description: "We begin with a comprehensive discovery session to understand your business goals, technical requirements, and challenges.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Design",
    description: "Our experts create a detailed roadmap and architecture design aligned with your objectives and industry best practices.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Integration & Development",
    description: "Agile development sprints deliver your solution with continuous feedback loops and transparent progress tracking.",
  },
  {
    number: "04",
    icon: TestTube,
    title: "Testing & Compliance",
    description: "Rigorous quality assurance, security audits, and compliance validation ensure production-ready solutions.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Go-Live & Support",
    description: "Seamless deployment with comprehensive training, documentation, and 24/7 ongoing technical support.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            How We Bring Your Vision to Life
          </h2>
          <p className="text-lg text-muted-foreground">
            A transparent, collaborative approach that ensures success at every stage
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Desktop layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    {isEven ? (
                      <>
                        {/* Left content */}
                        <div className="text-right">
                          <div className="inline-block text-right">
                            <div className="inline-flex items-center gap-3 mb-3">
                              <span className="text-5xl text-primary/20">{step.number}</span>
                            </div>
                            <h3 className="text-2xl mb-3">{step.title}</h3>
                            <p className="text-muted-foreground max-w-md ml-auto">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Right icon */}
                        <div className="flex justify-start">
                          <div className="relative">
                            <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                              <Icon className="h-10 w-10 text-primary-foreground" />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Left icon */}
                        <div className="flex justify-end">
                          <div className="relative">
                            <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                              <Icon className="h-10 w-10 text-primary-foreground" />
                            </div>
                          </div>
                        </div>

                        {/* Right content */}
                        <div className="text-left">
                          <div className="inline-block">
                            <div className="inline-flex items-center gap-3 mb-3">
                              <span className="text-5xl text-primary/20">{step.number}</span>
                            </div>
                            <h3 className="text-2xl mb-3">{step.title}</h3>
                            <p className="text-muted-foreground max-w-md">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <div className="lg:hidden flex gap-6">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-primary/20 mt-4"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="text-3xl text-primary/20 mb-2">{step.number}</div>
                      <h3 className="text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
