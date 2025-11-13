"use client";

import { Shield, TrendingUp, FileText } from "lucide-react";
import { motion } from "motion/react";

const problems = [
  {
    icon: Shield,
    title: "Regulatory audits delay product launches",
    description: "Regulatory audits delay product launches and feature rollouts.",
    gradient: "from-primary/5 via-primary/8 to-primary/5",
    iconColor: "text-primary",
    borderColor: "border-primary/15",
  },
  {
    icon: TrendingUp,
    title: "Legacy architecture limits innovation",
    description: "Legacy architecture limits innovation and integration speed.",
    gradient: "from-primary/5 via-primary/8 to-primary/5",
    iconColor: "text-primary",
    borderColor: "border-primary/15",
  },
  {
    icon: FileText,
    title: "Managing data security is complex",
    description: "Managing data security across distributed systems is increasingly complex.",
    gradient: "from-primary/5 via-primary/8 to-primary/5",
    iconColor: "text-primary",
    borderColor: "border-primary/15",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-[#45647B]/10 rounded-full mb-6">
              <span className="text-[#1A2332] font-[470]">The Challenges in FinTech</span>
            </div>
            <h2 className="mb-6 text-[32px]">
              Scaling fast shouldn't mean compromising <br />security or compliance.
            </h2>
          </motion.div>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className={`relative h-full bg-gradient-to-br ${problem.gradient} border ${problem.borderColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}>
                  {/* Icon container */}
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${problem.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Solution Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg lg:text-xl leading-relaxed">
            At <span className="inline-block px-4 py-2 bg-[#45647B]/10 text-[#45647B] rounded-full">V-Accel</span>, we help FinTech firms overcome compliance and scalability challenges — delivering secure, efficient systems that meet the pace of modern finance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
