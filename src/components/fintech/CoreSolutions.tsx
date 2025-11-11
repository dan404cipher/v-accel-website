"use client";

import { motion } from "motion/react";
import { CreditCard, TrendingUp, PieChart, Shield } from "lucide-react";

const solutions = [
  {
    icon: CreditCard,
    title: "Digital Payments & Wallets",
    description: "PCI DSS–compliant platforms enabling secure, real-time payments.",
    gradient: "from-primary/5 via-primary/8 to-primary/5",
    iconColor: "text-primary",
    borderColor: "border-primary/15",
  },
  {
    icon: TrendingUp,
    title: "Lending Platforms",
    description: "Automate credit scoring, KYC/AML verification, and loan management.",
    gradient: "from-primary/5 via-primary/8 to-primary/5",
    iconColor: "text-primary",
    borderColor: "border-primary/15",
  },
  {
    icon: PieChart,
    title: "WealthTech & Investment Tools",
    description: "Build dashboards for portfolio analytics, advisor portals, and trading insights.",
    gradient: "from-primary/5 via-primary/8 to-primary/5",
    iconColor: "text-primary",
    borderColor: "border-primary/15",
  },
  {
    icon: Shield,
    title: "Compliance Automation",
    description: "SOC2- and ISO-ready frameworks for faster audits and transparent governance.",
    gradient: "from-primary/5 via-primary/8 to-primary/5",
    iconColor: "text-primary",
    borderColor: "border-primary/15",
  },
];

export function CoreSolutions() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-background via-white to-background relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-0 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 4) * 20}%`,
              willChange: 'transform, opacity',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,179,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,179,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="inline-block px-4 py-2 bg-[#45647B]/10 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#45647B]">Core FinTech Solutions</span>
            </motion.div>
            <h2 className="mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-[32px]">
              Solutions designed for next-generation financial ecosystems.
            </h2>
          </motion.div>
        </div>

        {/* Solution Cards - Modern Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="group"
              >
                <motion.div 
                  className={`relative h-full bg-gradient-to-br ${solution.gradient} backdrop-blur-sm border ${solution.borderColor} rounded-3xl p-8 overflow-hidden`}
                  whileHover={{ 
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Animated gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  </div>

                  {/* Icon container with floating effect */}
                  <motion.div 
                    className="mb-8 relative"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <div className="relative">
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center relative z-10`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className={`w-8 h-8 ${solution.iconColor}`} />
                      </motion.div>
                      {/* Icon glow */}
                      <motion.div 
                        className={`absolute inset-0 rounded-2xl ${solution.iconColor.replace('text-', 'bg-')}/20 blur-xl`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-xl group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {solution.description}
                    </p>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-xl"></div>
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${solution.iconColor.includes('primary') ? '#FFB300' : '#FFB300'}, transparent)`,
                      backgroundSize: '200% 2px',
                      backgroundPosition: 'top',
                      backgroundRepeat: 'no-repeat',
                    }}
                    animate={{
                      backgroundPosition: ['200% top', '-200% top'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
