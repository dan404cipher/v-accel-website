"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const [activeTab, setActiveTab] = useState("frontend");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Auto-rotate tabs
  useEffect(() => {
    const tabKeys = technologies.map(tech => tech.key);
    let currentIndex = tabKeys.indexOf(activeTab);
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabKeys.length;
      setActiveTab(tabKeys[currentIndex]);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="tech-stack" 
      className="relative w-full min-w-full py-20 lg:py-32 bg-[#F4F6F8] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Modern professional background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Interactive grid with fade effect */}
        <motion.div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #1A2332 1px, transparent 1px),
              linear-gradient(to bottom, #1A2332 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.02) 100%)`,
            WebkitMaskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.02) 100%)`,
          }}
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary grid layer with offset animation */}
        <motion.div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #00B8A9 1px, transparent 1px),
              linear-gradient(to bottom, #00B8A9 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '30px 30px',
            maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0) 100%)`,
            WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0) 100%)`,
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Animated gradient orb - subtle movement */}
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0, 184, 169, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(26, 35, 50, 0.12) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating minimal dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#00B8A9]"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Modern line accents with subtle animation */}
        <motion.div
          className="absolute top-1/3 left-0 right-0 h-px opacity-10"
          style={{
            background: 'linear-gradient(90deg, transparent, #00B8A9 50%, transparent)',
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Geometric modern shapes - very subtle */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-40 h-40 opacity-[0.04]"
          style={{
            background: 'linear-gradient(135deg, #00B8A9, transparent)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
          animate={{
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-32 h-32 opacity-[0.03]"
          style={{
            background: 'linear-gradient(135deg, #1A2332, transparent)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          }}
          animate={{
            rotate: [0, -360, 0],
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%'
            ],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
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
          className="max-w-6xl mx-auto"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent mb-12">
              {technologies.map((tech, index) => (
                <TabsTrigger
                  key={tech.key}
                  value={tech.key}
                  className="data-[state=active]:bg-[#1A2332] data-[state=active]:text-white bg-white border-2 border-[#1A2332]/10 hover:border-[#00B8A9]/50 transition-all duration-300 px-6 py-4 rounded-xl"
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
                >
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-4">
                      {tech.items.map((item, idx) => (
                        <CarouselItem key={idx} className="pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{ y: -18 }}
                            className="relative group h-full pt-3 pb-4"
                          >
                            <motion.div
                              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00B8A9]/12 via-transparent to-[#1A2332]/10 opacity-0 blur-xl transition-opacity duration-300"
                              whileHover={{ opacity: 1 }}
                            />
                            <motion.div
                              className="relative bg-white border-2 border-[#00B8A9]/20 rounded-2xl p-8 shadow-sm transition-all duration-300 h-full overflow-visible"
                              whileHover={{ borderColor: "#00B8A9", boxShadow: "0 36px 78px rgba(26,35,50,0.22)", zIndex: 30 }}
                              transition={{ duration: 0.25 }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent rounded-2xl"
                                initial={{ x: "-120%" }}
                                whileHover={{ x: "120%" }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                              />
                              <div className="relative flex flex-col items-center gap-4">
                                <motion.div
                                  className="h-20 w-20 flex items-center justify-center"
                                  animate={{ y: [0, -6, 0] }}
                                  transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.3, ease: "easeInOut" }}
                                >
                                  <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                                  />
                                </motion.div>
                                <div className="text-center min-h-[3rem] flex flex-col justify-center">
                                  <span className="text-sm text-[#2C3E50] group-hover:text-[#1A2332] transition-colors mb-1">
                                    {item.name}
                                  </span>
                                  <span className="text-xs text-[#00B8A9] opacity-0 max-h-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                                    {item.description}
                                  </span>
                                </div>
                              </div>
                              <div className="absolute top-3 right-3 w-2 h-2 bg-[#00B8A9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute bottom-3 left-3 w-2 h-2 bg-[#00B8A9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
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

