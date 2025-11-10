'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const caseStudies = [
  {
    clientLogo: "Global Bank",
    industry: "Banking",
    challenge: "Legacy core banking system causing delays in transaction processing and preventing digital innovation",
    solution: "Implemented modern microservices architecture with cloud-native infrastructure and real-time processing capabilities",
    results: [
      { icon: TrendingUp, metric: "40%", label: "Faster transaction processing" },
      { icon: Clock, metric: "99.9%", label: "System uptime achieved" },
      { icon: Users, metric: "2M+", label: "Active digital users" },
    ],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI1ODAwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    clientLogo: "FinTech Innovator",
    industry: "Digital Payments",
    challenge: "Needed to scale payment infrastructure to handle 10x traffic growth while maintaining security and compliance",
    solution: "Built distributed payment processing system with AI-powered fraud detection and automated compliance monitoring",
    results: [
      { icon: TrendingUp, metric: "10,000+", label: "Transactions per second" },
      { icon: Clock, metric: "85%", label: "Reduction in fraud attempts" },
      { icon: Users, metric: "$5B+", label: "Annual transaction volume" },
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI1ODAwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    clientLogo: "Investment Platform",
    industry: "Wealth Management",
    challenge: "Manual portfolio management and reporting creating operational bottlenecks and poor customer experience",
    solution: "Delivered automated portfolio management platform with real-time analytics, robo-advisory, and client portals",
    results: [
      { icon: TrendingUp, metric: "$12B", label: "Assets under management" },
      { icon: Clock, metric: "70%", label: "Reduction in operational costs" },
      { icon: Users, metric: "50K+", label: "Active investor accounts" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI1ODAwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary">Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped financial institutions transform their operations and achieve measurable success
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden border-2">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={study.image}
                    alt={`${study.clientLogo} case study`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:bg-gradient-to-t"></div>
                  <div className="absolute top-6 left-6">
                    <div className="px-4 py-2 bg-white/90 backdrop-blur rounded-lg">
                      <div className="text-lg">{study.clientLogo}</div>
                      <div className="text-xs text-muted-foreground">{study.industry}</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl mb-2 text-primary">Challenge</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xl mb-2 text-primary">Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-xl mb-4 text-primary">Results</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result, idx) => {
                          const Icon = result.icon;
                          return (
                            <div key={idx} className="text-center p-4 bg-primary/5 rounded-lg">
                              <Icon className="h-5 w-5 text-primary mx-auto mb-2" />
                              <div className="text-2xl mb-1">{result.metric}</div>
                              <div className="text-xs text-muted-foreground leading-tight">{result.label}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2">
            View More Case Studies
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
