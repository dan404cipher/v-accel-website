'use client';

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-primary">About Our Service</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
                Empowering Financial Innovation Through Technology
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground">
              In today's rapidly evolving financial landscape, institutions face unprecedented challenges in digital transformation, security, and regulatory compliance. We bridge the gap between cutting-edge technology and financial services expertise.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Our comprehensive technical solutions enable banks, fintech companies, and financial institutions to innovate faster, operate more securely, and deliver exceptional customer experiences in the digital age.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="mb-1">Industry-Leading Expertise</h3>
                  <p className="text-muted-foreground">Deep domain knowledge in financial services and emerging technologies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="mb-1">End-to-End Solutions</h3>
                  <p className="text-muted-foreground">From strategy to deployment, we handle every aspect of your digital transformation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="mb-1">Proven Results</h3>
                  <p className="text-muted-foreground">Track record of successful implementations across global financial institutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYyNTgwMDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Financial technology dashboard"
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
