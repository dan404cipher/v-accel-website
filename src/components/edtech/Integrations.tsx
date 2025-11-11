"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";

// Logo Components
const GoogleClassroomLogo = () => (
  <svg viewBox="0 0 80 80" className="w-20 h-20">
    <rect width="80" height="80" rx="18" fill="url(#google-gradient)" />
    <defs>
      <linearGradient id="google-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0F9D58" />
        <stop offset="100%" stopColor="#0B8043" />
      </linearGradient>
    </defs>
    <path
      d="M40 25L28 35V45L40 55L52 45V35L40 25Z"
      fill="white"
      opacity="0.9"
    />
    <circle cx="40" cy="40" r="8" fill="white" />
  </svg>
);

const MicrosoftTeamsLogo = () => (
  <svg viewBox="0 0 80 80" className="w-20 h-20">
    <rect width="80" height="80" rx="18" fill="url(#teams-gradient)" />
    <defs>
      <linearGradient id="teams-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5B5FC7" />
        <stop offset="100%" stopColor="#464EB8" />
      </linearGradient>
    </defs>
    <rect
      x="25"
      y="30"
      width="30"
      height="30"
      rx="4"
      fill="white"
      opacity="0.9"
    />
    <circle cx="50" cy="35" r="8" fill="white" />
  </svg>
);

const ZoomLogo = () => (
  <svg viewBox="0 0 80 80" className="w-20 h-20">
    <rect width="80" height="80" rx="18" fill="url(#zoom-gradient)" />
    <defs>
      <linearGradient id="zoom-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2D8CFF" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    <path
      d="M28 32C28 30.3431 29.3431 29 31 29H45C46.6569 29 48 30.3431 48 32V37L55 32V48L48 43V48C48 49.6569 46.6569 51 45 51H31C29.3431 51 28 49.6569 28 48V32Z"
      fill="white"
    />
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 80 80" className="w-20 h-20">
    <rect width="80" height="80" rx="18" fill="#fff" />
    <g transform="translate(18, 18)">
      {/* Top Yellow */}
      <rect x="16" y="0" width="12" height="12" rx="3" fill="#ECB22E" />
      {/* Left Red */}
      <rect x="0" y="16" width="12" height="12" rx="3" fill="#E01E5A" />
      {/* Center - intersection bars */}
      <rect
        x="16"
        y="16"
        width="12"
        height="12"
        rx="3"
        fill="none"
        stroke="#36C5F0"
        strokeWidth="3"
      />
      {/* Right Green */}
      <rect x="32" y="16" width="12" height="12" rx="3" fill="#2EB67D" />
      {/* Bottom Cyan */}
      <rect x="16" y="32" width="12" height="12" rx="3" fill="#36C5F0" />
    </g>
  </svg>
);

const GoogleDriveLogo = () => (
  <svg viewBox="0 0 80 80" className="w-20 h-20">
    <rect width="80" height="80" rx="18" fill="#fff" />
    <g transform="translate(16, 20)">
      {/* Yellow triangle (top) */}
      <path d="M24 8L40 36H8L24 8Z" fill="#FFCF3F" />
      {/* Green triangle (bottom left) */}
      <path d="M8 36L0 50L16 50L24 36H8Z" fill="#0F9D58" />
      {/* Blue triangle (bottom right) */}
      <path d="M24 36L32 50L48 50L40 36H24Z" fill="#4285F4" />
    </g>
  </svg>
);

const CanvasLogo = () => (
  <svg viewBox="0 0 80 80" className="w-20 h-20">
    <rect width="80" height="80" rx="18" fill="url(#canvas-gradient)" />
    <defs>
      <linearGradient id="canvas-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E74536" />
        <stop offset="100%" stopColor="#C72E1F" />
      </linearGradient>
    </defs>
    <path
      d="M35 25H45V55H35V25Z M25 35H55V45H25V35Z"
      fill="white"
      opacity="0.9"
    />
  </svg>
);

const MoodleLogo = () => (
  <svg viewBox="0 0 80 80" className="w-20 h-20">
    <rect width="80" height="80" rx="18" fill="url(#moodle-gradient)" />
    <defs>
      <linearGradient id="moodle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F98012" />
        <stop offset="100%" stopColor="#F76707" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="35" r="6" fill="white" />
    <circle cx="48" cy="35" r="6" fill="white" />
    <path
      d="M28 48Q40 55 52 48"
      stroke="white"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const BlackboardLogo = () => (
  <svg viewBox="0 0 80 80" className="w-20 h-20">
    <rect width="80" height="80" rx="18" fill="url(#blackboard-gradient)" />
    <defs>
      <linearGradient
        id="blackboard-gradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#000000" />
        <stop offset="100%" stopColor="#1F1F1F" />
      </linearGradient>
    </defs>
    <rect
      x="25"
      y="25"
      width="30"
      height="30"
      rx="4"
      fill="white"
      opacity="0.15"
    />
    <path
      d="M30 35H50M30 40H50M30 45H45"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const integrations = [
  { name: "Google Classroom", logo: GoogleClassroomLogo },
  { name: "Microsoft Teams", logo: MicrosoftTeamsLogo },
  { name: "Zoom", logo: ZoomLogo },
  { name: "Slack", logo: SlackLogo },
  { name: "Google Drive", logo: GoogleDriveLogo },
  { name: "Canvas LMS", logo: CanvasLogo },
  { name: "Moodle", logo: MoodleLogo },
  { name: "Blackboard", logo: BlackboardLogo },
];

export function Integrations() {
  const [api, setApi] = useState<{ scrollNext: () => void } | undefined>();

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-scroll every 3 seconds
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">
                Integrations
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4 text-[32px]">
              Connect With Your Favorite Tools
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform integrates seamlessly with the tools you already use
            </p>
          </motion.div>
        </div>

        {/* Integration Platforms Carousel - Auto-scrolling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {integrations.map((integration, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex flex-col items-center justify-center py-8"
                  >
                    {/* Logo */}
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      <integration.logo />
                    </div>

                    {/* Platform Name */}
                    <p className="text-sm text-center text-muted-foreground">
                      {integration.name}
                    </p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Don&apos;t see your tool? We can integrate with custom platforms
            too.
          </p>
          <Button
            variant="outline"
            className="group border-primary text-primary hover:bg-primary hover:text-white rounded-full"
          >
            Request an Integration
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
