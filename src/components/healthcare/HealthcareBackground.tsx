"use client";

import { Heart, Activity, Stethoscope, Cross } from "lucide-react";
import { useViewportAnimation } from "@/hooks/useViewportAnimation";

const floatingIcons = [
  { Icon: Heart, delay: 0, duration: 20, x: "10%", y: "20%" },
  { Icon: Activity, delay: 2, duration: 25, x: "80%", y: "10%" },
  { Icon: Stethoscope, delay: 4, duration: 22, x: "15%", y: "70%" },
  { Icon: Cross, delay: 1, duration: 24, x: "85%", y: "60%" },
];

export function HealthcareBackground() {
  const { ref } = useViewportAnimation({ rootMargin: "-100px" });
  
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none play-animations">
      {/* Gradient Orbs - soft blue/green healthcare tones */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#4DD0E1]/5 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-xl"></div>
      
      {/* Animated Grid Lines - representing data flow */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern
            id="healthcare-grid"
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
        <rect width="100%" height="100%" fill="url(#healthcare-grid)" />
      </svg>

      {/* Floating Healthcare Icons - CSS animations */}
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

      {/* Heartbeat Waveform Lines - CSS animations */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <path
          d="M 0 300 L 100 300 L 120 250 L 140 350 L 160 280 L 180 300 L 400 300 L 420 250 L 440 350 L 460 280 L 480 300 L 700 300 L 720 250 L 740 350 L 760 280 L 780 300 L 1000 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="0"
          className="animate-draw-path"
        />
        <path
          d="M 0 500 L 150 500 L 170 450 L 190 550 L 210 480 L 230 500 L 450 500 L 470 450 L 490 550 L 510 480 L 530 500 L 750 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="0"
          className="animate-draw-path-slow"
          style={{ animationDelay: '1s' }}
        />
      </svg>

      {/* Floating Circles representing network/connectivity - CSS animations */}
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

      {/* Pulse effect - representing heartbeat - CSS animations */}
      <div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/10 rounded-full animate-pulse-opacity gpu-accelerated"
        style={{ animationDuration: '2s' }}
      />
      
      <div
        className="absolute bottom-40 left-32 w-24 h-24 border-2 border-primary/10 rounded-full animate-pulse-opacity gpu-accelerated"
        style={{ 
          animationDuration: '2.5s',
          animationDelay: '0.5s'
        }}
      />
    </div>
  );
}
