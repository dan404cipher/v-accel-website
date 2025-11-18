"use client";

import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import type { MouseEvent } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useViewportAnimation } from "@/hooks/useViewportAnimation";

const technologies = [
  {
    category: "Cloud & Infrastructure",
    key: "cloud",
    items: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", description: "Scalable cloud infrastructure" },
      { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", description: "Enterprise cloud solutions" },
      { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", description: "Modern cloud platform" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "Container orchestration" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", description: "Container management" },
    ],
  },
  {
    category: "Backend & Databases",
    key: "backend",
    items: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "JavaScript runtime" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "Versatile programming" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", description: "Enterprise applications" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", description: "Relational database" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", description: "NoSQL database" },
    ],
  },
  {
    category: "Frontend & Mobile",
    key: "frontend",
    items: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "UI library" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", description: "Type-safe JavaScript" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", description: "React framework" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", description: "Cross-platform apps" },
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Mobile development" },
    ],
  },
  {
    category: "AI & Analytics",
    key: "ai",
    items: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", description: "Machine learning" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", description: "Deep learning framework" },
      { name: "Apache Spark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg", description: "Big data processing" },
    ],
  },
];

export function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("cloud");
  const [mousePosition, setMousePosition] = useState({ x: 400, y: 300 });
  const throttleRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const { ref: viewportRef } = useViewportAnimation({ rootMargin: "-100px" });

  // Removed auto-tab switching to reduce timers and improve performance

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const now = Date.now();
    if (now - throttleRef.current < 80) return;
    throttleRef.current = now;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    rafRef.current = requestAnimationFrame(() => {
      setMousePosition({ x, y });
      rafRef.current = null;
    });
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={viewportRef}
      id="tech-stack"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-[#F4F6F8] via-white to-[#EDF4F6] overflow-hidden sm:overflow-visible play-animations"
      onMouseMove={handleMouseMove}
    >
      {/* Section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00B8A9]/30 to-transparent opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1A2332]/25 to-transparent opacity-50" />

      {/* Ambient interactive background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/40" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[90%] h-[70%] bg-white/45 rounded-[999px] blur-[180px]" />
        {/* Cursor-responsive spotlight - CSS animation */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 blur-2xl animate-spotlight-pulse gpu-accelerated"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle, rgba(0,184,169,0.22), rgba(0,184,169,0.08) 45%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Primary grid - CSS animation */}
        <div
          className="absolute inset-0 animate-grid-opacity gpu-accelerated"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(26,35,50,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(26,35,50,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: `radial-gradient(circle 420px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 55%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 420px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 55%, transparent 100%)`,
          }}
        />

        {/* Secondary grid - CSS animation */}
        <div
          className="absolute inset-0 animate-grid-opacity-secondary gpu-accelerated"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,184,169,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,184,169,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            backgroundPosition: "30px 30px",
            maskImage: `radial-gradient(circle 320px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 60%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 320px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 60%, transparent 100%)`,
          }}
        />

        {/* Gradient orbs - CSS animations */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] opacity-30 animate-orb-scale gpu-accelerated"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 184, 169, 0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[520px] h-[520px] opacity-25 animate-orb-scale-large gpu-accelerated"
          style={{
            background:
              "radial-gradient(circle, rgba(26, 35, 50, 0.16) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* Floating dots - CSS animations */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`tech-dot-${i}`}
            className="absolute w-2 h-2 rounded-full bg-[#00B8A9]/60 animate-tech-dot-float gpu-accelerated"
            style={{
              left: `${12 + i * 14}%`,
              top: `${25 + (i % 3) * 25}%`,
              animationDuration: `${4.5 + i * 0.3}s`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* Mid-line accent - CSS animation */}
        <div
          className="absolute top-1/3 left-0 right-0 h-px opacity-70 animate-line-accent gpu-accelerated"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0,184,169,0.45), transparent)",
          }}
        />

        {/* Animated wave lines - Simplified to static for performance (path morphing is expensive) */}
        <svg className="absolute top-[18%] left-0 w-full h-[180px]" style={{ opacity: 0.08 }}>
          <path
            d="M0,100 Q500,60 1000,100 T2000,100"
            fill="none"
            stroke="#00B8A9"
            strokeWidth="2"
          />
        </svg>

        <svg className="absolute bottom-[22%] left-0 w-full h-[150px]" style={{ opacity: 0.07 }}>
          <path
            d="M0,75 Q600,110 1200,75 T2400,75"
            fill="none"
            stroke="#1A2332"
            strokeWidth="2"
          />
        </svg>

        {/* Geometric accents - CSS animations */}
        <div
          className="absolute top-1/4 right-1/5 w-40 h-40 opacity-[0.05] animate-tech-shape-rotate gpu-accelerated"
          style={{
            background: "linear-gradient(135deg, rgba(0,184,169,0.4), transparent)",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-32 h-32 opacity-[0.04] animate-tech-blob-morph gpu-accelerated"
          style={{
            background: "linear-gradient(135deg, rgba(26,35,50,0.5), transparent)",
          }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-[#00B8A9]/10 rounded-full mb-4">
              <span className="text-[rgb(26,35,50)]">Technology Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-[#1A2332] text-[32px]">
              Built on Trusted, Modern Technology
            </h2>
            <p className="text-lg text-[#2C3E50]">
              We leverage cutting-edge tools and frameworks to deliver robust, scalable solutions
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto overflow-visible"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent mb-12">
              {technologies.map((tech, index) => (
                <TabsTrigger
                  key={tech.key}
                  value={tech.key}
                  className="data-[state=active]:bg-[#1A2332] data-[state=active]:text-white bg-white border-2 border-[#1A2332]/10 hover:border-[#00B8A9]/30 transition-all duration-300 px-6 py-4 rounded-xl"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech.category}
                  </motion.span>
                </TabsTrigger>
              ))}
            </TabsList>

            {technologies.map((tech) => (
              <TabsContent key={tech.key} value={tech.key} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-visible"
                >
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {tech.items.map((item, idx) => (
                        <CarouselItem key={idx} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            onMouseEnter={() => setHoveredTech(item.name)}
                            onMouseLeave={() => setHoveredTech(null)}
                            className="relative group h-full pb-1"
                          >
                            <div className="relative bg-white border-2 border-[#00B8A9]/20 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full overflow-hidden">
                              {/* Glow effect on hover */}
                              <div className="absolute inset-[2px] bg-gradient-to-br from-[#00B8A9]/10 via-transparent to-[#1A2332]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              
                              {/* Shine effect */}
                              <motion.div
                                className="absolute inset-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                              />

                              <div className="relative flex flex-col items-center gap-4">
                                <div 
                                  className="h-20 w-20 flex items-center justify-center animate-tech-logo-float gpu-accelerated"
                                  style={{
                                    animationDelay: `${idx * 0.3}s`,
                                  }}
                                >
                                  <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                    className="max-h-full max-w-full"
                                  >
                                    <ImageWithFallback
                                      src={item.logo}
                                      alt={item.name}
                                      width={80}
                                      height={80}
                                      className="max-h-full max-w-full object-contain"
                                  />
                                  </motion.div>
                                </div>
                                <div className="text-center min-h-[3rem] flex flex-col justify-center">
                                  <span className="text-sm text-[#2C3E50] group-hover:text-[#1A2332] transition-colors mb-1">
                                    {item.name}
                                  </span>
                                  <motion.span
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ 
                                      opacity: hoveredTech === item.name ? 1 : 0,
                                      height: hoveredTech === item.name ? "auto" : 0
                                    }}
                                    className="text-xs text-[#00B8A9] overflow-hidden"
                                  >
                                    {item.description}
                                  </motion.span>
                                </div>
                              </div>

                              {/* Corner accent */}
                              <div className="absolute top-3 right-3 w-2 h-2 bg-[#00B8A9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute bottom-3 left-3 w-2 h-2 bg-[#00B8A9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          </motion.div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex -left-12 bg-white border-2 border-[#00B8A9]/20 hover:bg-[#1A2332] hover:text-white hover:border-[#1A2332]" />
                    <CarouselNext className="hidden sm:flex -right-12 bg-white border-2 border-[#00B8A9]/20 hover:bg-[#1A2332] hover:text-white hover:border-[#1A2332]" />
                  </Carousel>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

