"use client";

import { motion } from "motion/react";
import { TrendingUp, PieChart, BarChart3, LineChart, IndianRupee } from "lucide-react";

const floatingIcons = [
  { Icon: TrendingUp, delay: 0, duration: 20, x: "10%", y: "20%" },
  { Icon: IndianRupee, delay: 2, duration: 25, x: "80%", y: "10%" },
  { Icon: PieChart, delay: 4, duration: 22, x: "15%", y: "70%" },
  { Icon: BarChart3, delay: 1, duration: 24, x: "85%", y: "60%" },
  { Icon: LineChart, delay: 3, duration: 23, x: "50%", y: "80%" },
  { Icon: TrendingUp, delay: 5, duration: 21, x: "70%", y: "30%" },
  { Icon: IndianRupee, delay: 2.5, duration: 26, x: "25%", y: "45%" },
  { Icon: PieChart, delay: 4.5, duration: 20, x: "90%", y: "85%" },
];

export function FinancialBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl"></div>
      
      {/* Animated Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating Financial Icons */}
      {floatingIcons.map((item, index) => {
        const IconComponent = item.Icon;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.03, 0.08, 0.03],
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <IconComponent className="w-12 h-12 text-primary" />
          </motion.div>
        );
      })}

      {/* Animated Chart Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <motion.path
          d="M 0 300 Q 200 250, 400 280 T 800 260 T 1200 290 T 1600 270"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M 0 500 Q 250 450, 500 480 T 1000 460 T 1500 490"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Floating Circles representing data points */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/10 rounded-lg"
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-32 w-24 h-24 border-2 border-primary/10"
        style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        animate={{
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
