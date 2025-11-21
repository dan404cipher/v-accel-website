"use client";

import { motion } from "motion/react";
import { useState, useMemo, useEffect, useRef } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { SectionBadge } from "./SectionBadge";
import { OptimizedBackground } from "./OptimizedBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useViewportAnimation } from "@/hooks/useViewportAnimation";
import Autoplay from "embla-carousel-autoplay";

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
  const AUTOPLAY_DELAY = 2000;
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const tabKeys = useMemo(() => technologies.map((tech) => tech.key), []);
  const [activeTab, setActiveTab] = useState(tabKeys[0]);
  const [isTabAutoplayPaused, setIsTabAutoplayPaused] = useState(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { ref: viewportRef } = useViewportAnimation({ rootMargin: "-100px" });
  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: AUTOPLAY_DELAY,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [],
  );

  useEffect(() => {
    if (typeof autoplayPlugin?.reset === "function") {
      autoplayPlugin.reset();
    }
  }, [activeTab, autoplayPlugin]);

  useEffect(() => {
    if (isTabAutoplayPaused) return;
    const activeTech = technologies.find((tech) => tech.key === activeTab);
    const slidesCount = activeTech?.items.length ?? 1;
    const timeout = setTimeout(() => {
      setActiveTab((prev) => {
        const currentIndex = tabKeys.indexOf(prev);
        const nextIndex = (currentIndex + 1) % tabKeys.length;
        return tabKeys[nextIndex];
      });
    }, slidesCount * AUTOPLAY_DELAY);
    return () => clearTimeout(timeout);
  }, [activeTab, tabKeys, isTabAutoplayPaused, AUTOPLAY_DELAY]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIsTabAutoplayPaused(true);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsTabAutoplayPaused(false);
    }, 4000);
  };

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);
  // Removed auto-tab switching to reduce timers and improve performance

  return (
    <section
      ref={viewportRef}
      id="tech-stack"
      className="relative py-20 lg:py-32 bg-[#FAFBFC] overflow-hidden play-animations"
    >
      <OptimizedBackground variant="hero" />
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            <SectionBadge
              label="Technology Stack"
              className="mb-4 mx-auto justify-center"
            />
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
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full"
            onMouseEnter={() => setIsTabAutoplayPaused(true)}
            onMouseLeave={() => setIsTabAutoplayPaused(false)}
          >
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
                    plugins={[autoplayPlugin]}
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
                                  data-animate-on-visible
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

