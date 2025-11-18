"use client";

import { TrendingUp, PieChart, BarChart3, IndianRupee } from "lucide-react";
import { useViewportAnimation } from "@/hooks/useViewportAnimation";

const floatingIcons = [
  { Icon: TrendingUp, delay: 0, duration: 20, x: "10%", y: "20%" },
  { Icon: IndianRupee, delay: 2, duration: 25, x: "80%", y: "10%" },
  { Icon: PieChart, delay: 4, duration: 22, x: "15%", y: "70%" },
  { Icon: BarChart3, delay: 1, duration: 24, x: "85%", y: "60%" },
];

export function FinancialBackground() {
  const { ref } = useViewportAnimation({ rootMargin: "-100px" });
  
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none play-animations">
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

      {/* Floating Financial Icons - Now using CSS animations */}
      {floatingIcons.map((item, index) => {
        const IconComponent = item.Icon;
        return (
          <div
            key={index}
            className="absolute animate-float-up-down gpu-accelerated"
            style={{
              left: item.x,
              top: item.y,
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
            }}
          >
            <IconComponent className="w-12 h-12 text-primary" />
          </div>
        );
      })}

      {/* Animated Chart Lines - Using CSS stroke-dasharray for drawing effect */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <path
          d="M 0 300 Q 200 250, 400 280 T 800 260 T 1200 290 T 1600 270"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          className="animate-draw-path gpu-accelerated"
          style={{ willChange: 'stroke-dashoffset' }}
        />
        <path
          d="M 0 500 Q 250 450, 500 480 T 1000 460 T 1500 490"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          className="animate-draw-path-slow gpu-accelerated"
          style={{ 
            animationDelay: '1s',
            willChange: 'stroke-dashoffset'
          }}
        />
      </svg>

      {/* Floating Circles representing data points - CSS animations */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`circle-${i}`}
          className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse-opacity gpu-accelerated"
          style={{
            left: `${10 + i * 25}%`,
            top: `${30 + (i % 3) * 20}%`,
            animationDuration: `${3 + i * 0.5}s`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Geometric Shapes - CSS rotation animations */}
      <div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/10 rounded-lg animate-rotate-slow gpu-accelerated"
      />
      
      <div
        className="absolute bottom-40 left-32 w-24 h-24 border-2 border-primary/10 animate-rotate-reverse gpu-accelerated"
        style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
      />
    </div>
  );
}
