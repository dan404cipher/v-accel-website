"use client";

import { Shield, Wallet, AlertTriangle, Plug, BarChart3, FileCheck, ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function KeyFeatures() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="key-features" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-[#45647B]/10 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#45647B]">Key Features</span>
          </motion.div>
          <motion.h2 
            className="text-[32px] mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need in one place
          </motion.h2>
          <motion.p 
            className="text-base text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our platform delivers comprehensive functionality to power your financial services
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Large Card - Data Analytics Dashboard */}
          <motion.div 
            className="lg:row-span-2 bg-gradient-to-br from-card to-primary/5 border rounded-2xl p-5 hover:border-primary/50 transition-all group relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="h-full flex flex-col relative z-10">
              <div className="mb-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl mb-1.5">Data Analytics Dashboard</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Comprehensive analytics and reporting tools providing actionable insights into transactions, user behavior, and business metrics.
                </p>

                {/* Key Features List */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="h-1 w-1 rounded-full bg-primary mt-1.5" />
                    <span className="text-sm text-muted-foreground">Real-time transaction monitoring</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1 w-1 rounded-full bg-primary mt-1.5" />
                    <span className="text-sm text-muted-foreground">Customizable reporting dashboards</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1 w-1 rounded-full bg-primary mt-1.5" />
                    <span className="text-sm text-muted-foreground">Advanced data visualization tools</span>
                  </div>
                </div>
              </div>

              {/* Impact Metric Card */}
              <div className="mt-auto bg-white/80 backdrop-blur-sm rounded-xl border border-primary/10 p-4 shadow-sm">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 rounded-full mb-3">
                  <TrendingUp className="h-3 w-3 text-primary" />
                  <span className="text-sm text-primary">Impact Metric</span>
                </div>
                <div className="mb-2">
                  <div className="text-3xl text-primary mb-1">40%</div>
                  <p className="text-sm text-muted-foreground">
                    Reduction in manual reporting time
                  </p>
                </div>
                <div className="pt-3 border-t border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    Proven results across enterprise deployments
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium Card - Secure Payment Infrastructure */}
          <motion.div 
            className="bg-card border rounded-2xl p-5 hover:border-primary/50 transition-all group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl mb-1.5">Secure Payment Infrastructure</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Enterprise-grade payment processing with multi-layer security and real-time fraud prevention.
            </p>
            <button className="inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all">
              Learn more
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>

          {/* Medium Card - Digital Wallet Integration */}
          <motion.div 
            className="bg-card border rounded-2xl p-5 hover:border-primary/50 transition-all group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
              <Wallet className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl mb-1.5">Digital Wallet Integration</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Seamless integration with popular payment platforms.
            </p>
            <button className="inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all">
              Get started
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>

          {/* Wide Card - Banking API Integration */}
          <motion.div 
            className="lg:col-span-2 bg-card border rounded-2xl p-5 hover:border-primary/50 transition-all group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="grid md:grid-cols-2 gap-5 items-start">
              <div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
                  <Plug className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl mb-1.5">Banking API Integration</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Connect seamlessly with major banking systems and financial institutions through secure, compliant API infrastructure.
                </p>
              </div>
              <div className="bg-background rounded-lg border p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-1 w-1 rounded-full bg-primary" />
                    <span>REST API endpoints</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-1 w-1 rounded-full bg-primary" />
                    <span>Webhook notifications</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-1 w-1 rounded-full bg-primary" />
                    <span>Real-time data sync</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-1 w-1 rounded-full bg-primary" />
                    <span>Sandbox environment</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium Card - AI Fraud Detection */}
          <motion.div 
            className="bg-card border rounded-2xl p-5 hover:border-primary/50 transition-all group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
              <AlertTriangle className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl mb-1.5">AI-Powered Fraud Detection</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Machine learning algorithms that protect your business 24/7.
            </p>
            <div className="bg-background rounded-lg border p-3 mt-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-muted-foreground">Threat Level</span>
                <span className="text-sm text-primary">Low</span>
              </div>
              <div className="h-1.5 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-primary rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Medium Card - Compliance */}
          <motion.div 
            className="bg-card border rounded-2xl p-5 hover:border-primary/50 transition-all group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
              <FileCheck className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl mb-1.5">Compliance & Risk Management</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Automated monitoring and regulatory reporting.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-sm">PCI DSS</span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-sm">GDPR</span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-sm">SOC 2</span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-sm">ISO 27001</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
