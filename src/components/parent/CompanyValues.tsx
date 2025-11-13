"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield,
  Lightbulb,
  UserCheck,
  Trophy,
  Heart
} from "lucide-react";

export function CompanyValues() {
  return (
    <section className="relative px-6 py-20 bg-white overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          animate={{
            x: [0, 60],
            y: [0, 60],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear" 
          }}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(26, 35, 50, 0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(26, 35, 50, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            width: '120%',
            height: '120%',
            left: '-10%',
            top: '-10%'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#00B8A9]/10 rounded-full border border-[#00B8A9]/20 text-[#1A2332] shadow-lg text-[16px] py-[8px] px-[16px]">
            <Heart className="w-4 h-4 mr-2 text-[#00B8A9]" />
            Our Values
          </Badge>
          <h2 className="text-4xl md:text-4xl font-semibold mb-4 text-[32px] text-[rgb(26,35,50)]">
            What We <span className="bg-gradient-to-r from-[#1A2332] to-[#FF6B6B] bg-clip-text text-[rgb(26,35,50)] text-[32px]">Stand For</span>
          </h2>
          <p className="text-xl text-[#2C3E50] max-w-3xl mx-auto text-[16px]">
            The values that shape how we build and partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: Shield, 
              title: "Integrity in Delivery",
              description: "Every commitment we make is backed by transparent communication and measurable outcomes.",
              gradient: "from-[#FF6B6B] to-[#FF6B6B]/80",
              bgGradient: "from-[#FF6B6B]/5 to-[#FF6B6B]/10",
              borderColor: "#FF6B6B"
            },
            { 
              icon: Lightbulb, 
              title: "Technical Depth, Practical Focus",
              description: "We prioritize solutions that balance innovation with reliability.",
              gradient: "from-[#1A2332] to-[#1A2332]/80",
              bgGradient: "from-[#1A2332]/5 to-[#1A2332]/10",
              borderColor: "#1A2332"
            },
            { 
              icon: UserCheck, 
              title: "Partnership over Projects",
              description: "We view every engagement as a long-term collaboration, not a one-time contract.",
              gradient: "from-[#00B8A9] to-[#00B8A9]/80",
              bgGradient: "from-[#00B8A9]/5 to-[#00B8A9]/10",
              borderColor: "#00B8A9"
            },
            { 
              icon: Trophy, 
              title: "Continuous Learning",
              description: "We stay curious and adaptable to evolving technologies and industry standards.",
              gradient: "from-[#1A2332] to-[#00B8A9]",
              bgGradient: "from-[#1A2332]/5 to-[#00B8A9]/5",
              borderColor: "#1A2332"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card 
                className="p-8 text-center h-full bg-[#F4F6F8] border-2 hover:shadow-2xl transition-all relative overflow-hidden"
                style={{
                  borderColor: value.borderColor === "#FF6B6B" 
                    ? "rgba(255, 107, 107, 0.2)" 
                    : value.borderColor === "#00B8A9"
                    ? "rgba(0, 184, 169, 0.2)"
                    : "rgba(26, 35, 50, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = value.borderColor === "#FF6B6B" 
                    ? "rgba(255, 107, 107, 0.4)" 
                    : value.borderColor === "#00B8A9"
                    ? "rgba(0, 184, 169, 0.4)"
                    : "rgba(26, 35, 50, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = value.borderColor === "#FF6B6B" 
                    ? "rgba(255, 107, 107, 0.2)" 
                    : value.borderColor === "#00B8A9"
                    ? "rgba(0, 184, 169, 0.2)"
                    : "rgba(26, 35, 50, 0.2)";
                }}
              >
                {/* Animated background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className={`text-2xl mb-4 text-[#1A2332] relative text-center min-h-[64px] flex items-center justify-center`}>
                  {value.title}
                </h3>
                <p className="text-[#2C3E50] leading-relaxed relative text-left">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

