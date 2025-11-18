"use client";

import { useState, useEffect, useMemo, memo } from "react";
import { useViewportAnimation } from "@/hooks/useViewportAnimation";

interface OptimizedBackgroundProps {
  variant?: 'hero' | 'cta';
}

// Floating dot component using CSS animations
const FloatingDot = memo(({ dot }: { dot: any }) => (
  <div
    className="absolute rounded-full animate-float-dot gpu-accelerated"
    style={{
      left: dot.x,
      top: dot.y,
      width: dot.size,
      height: dot.size,
      backgroundColor: dot.color,
      animationDuration: `${dot.duration}s`,
      animationDelay: `${dot.delay}s`,
    }}
  />
));

FloatingDot.displayName = 'FloatingDot';

export const OptimizedBackground = memo(({ variant = 'hero' }: OptimizedBackgroundProps) => {
  const { ref } = useViewportAnimation({ rootMargin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 500, y: 500 });

  useEffect(() => {
    let rafId: number;
    let lastTime = 0;
    const throttleMs = 50; // Throttle mouse updates to 20fps for better performance

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastTime < throttleMs) return;
      
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
        lastTime = currentTime;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Memoize dots configuration to prevent recreation on every render
  const dots = useMemo(() => {
    const baseConfig = variant === 'hero' ? [
      { id: 1, x: '10%', y: '20%', size: 4, color: '#00B8A9', delay: 0, duration: 4 },
      { id: 2, x: '85%', y: '15%', size: 3, color: '#00B8A9', delay: 0.5, duration: 5 },
      { id: 3, x: '20%', y: '70%', size: 5, color: '#FF6B6B', delay: 1, duration: 4.5 },
      { id: 4, x: '75%', y: '60%', size: 3, color: '#00B8A9', delay: 1.5, duration: 5.5 },
      { id: 5, x: '45%', y: '25%', size: 4, color: '#1A2332', delay: 2, duration: 4 },
      { id: 6, x: '60%', y: '80%', size: 3, color: '#FF6B6B', delay: 2.5, duration: 5 },
    ] : [
      { id: 1, x: '15%', y: '25%', size: 4, color: '#00B8A9', delay: 0, duration: 4.5 },
      { id: 2, x: '80%', y: '20%', size: 3, color: '#00B8A9', delay: 0.7, duration: 5.2 },
      { id: 3, x: '25%', y: '75%', size: 4, color: '#FF6B6B', delay: 1.2, duration: 4.8 },
      { id: 4, x: '70%', y: '65%', size: 3, color: '#00B8A9', delay: 1.8, duration: 5.5 },
    ];
    return baseConfig;
  }, [variant]);

  // Memoize inline styles for mouse spotlight (kept as JS since it's interactive)
  const spotlightStyle = useMemo(() => ({
    left: mousePosition.x - 400,
    top: mousePosition.y - 400,
    width: 800,
    height: 800,
    background: 'radial-gradient(circle, rgba(0, 184, 169, 0.08), rgba(0, 184, 169, 0.03) 40%, transparent 70%)',
    borderRadius: '50%',
    willChange: 'transform',
    transition: 'left 0.1s ease-out, top 0.1s ease-out',
  }), [mousePosition.x, mousePosition.y]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden play-animations">
      {/* Subtle mouse spotlight - kept as JS for interactivity */}
      <div
        className="absolute pointer-events-none"
        style={spotlightStyle}
      />

      {/* Animated Wave Lines - Smooth flowing animation */}
      <svg className="absolute top-[15%] left-0 w-full h-[200px] animate-wave-flow gpu-accelerated" style={{ opacity: 0.4 }}>
        <path
          d="M0,100 Q500,50 1000,100 T2000,100"
          fill="none"
          stroke="rgba(0, 184, 169, 0.18)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      {/* Animated Wave Line 2 - Starts subtle, increases */}
      <svg className="absolute top-[50%] left-0 w-full h-[150px] animate-wave-flow-2 gpu-accelerated" style={{ opacity: 0.25 }}>
        <path
          d="M0,75 Q600,100 1200,75 T2400,75"
          fill="none"
          stroke="rgba(255, 107, 107, 0.25)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Minimal floating dots with CSS animations */}
      {dots.map((dot) => (
        <FloatingDot key={dot.id} dot={dot} />
      ))}

      {/* Optimized gradient orbs with CSS animations */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full animate-breathe gpu-accelerated"
        style={{
          background: 'radial-gradient(circle, rgba(0, 184, 169, 0.06), transparent 70%)',
        }}
      />

      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full animate-breathe-large gpu-accelerated"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 107, 0.04), transparent 70%)',
          animationDelay: '1s',
        }}
      />
    </div>
  );
});

OptimizedBackground.displayName = 'OptimizedBackground';
