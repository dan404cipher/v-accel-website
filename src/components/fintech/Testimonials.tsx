'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    quote: "The team's expertise in financial technology is unmatched. They transformed our legacy systems into a modern, cloud-native platform that has dramatically improved our operational efficiency.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Global Banking Corp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
  },
  {
    quote: "Working with them was a game-changer for our digital transformation. Their deep understanding of regulatory compliance and security gave us confidence throughout the entire process.",
    author: "Michael Rodriguez",
    role: "VP of Technology",
    company: "FinTech Innovations",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5,
  },
  {
    quote: "They delivered our payment platform on time and under budget. The solution they built handles millions of transactions daily with zero downtime. Truly impressive technical capability.",
    author: "Priya Sharma",
    role: "Head of Digital",
    company: "National Payment Services",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    rating: 5,
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");

export function Testimonials() {
  const extendedTestimonials = useMemo(
    () => [...testimonials, ...testimonials.slice(0, 3)],
    [],
  );

  const [slidesPerView, setSlidesPerView] = useState(() => {
    if (typeof window === "undefined") return 3;
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesPerView(1);
      } else if (width < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageCount = Math.max(
    Math.ceil(extendedTestimonials.length / slidesPerView),
    1,
  );

  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    setActivePage((prev) => Math.min(prev, pageCount - 1));
  }, [pageCount]);

  const goToPage = useCallback(
    (nextPage: number) => {
      if (nextPage < 0) {
        setActivePage(pageCount - 1);
      } else if (nextPage >= pageCount) {
        setActivePage(0);
      } else {
        setActivePage(nextPage);
      }
    },
    [pageCount],
  );

  const handlePrev = useCallback(() => {
    goToPage(activePage - 1);
  }, [activePage, goToPage]);

  const handleNext = useCallback(() => {
    goToPage(activePage + 1);
  }, [activePage, goToPage]);

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      touchStartX.current = event.touches[0]?.clientX ?? null;
    },
    [],
  );

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (touchStartX.current === null) return;
      const touchEndX = event.changedTouches[0]?.clientX ?? 0;
      const deltaX = touchStartX.current - touchEndX;
      if (Math.abs(deltaX) > 40) {
        if (deltaX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
      touchStartX.current = null;
    },
    [handleNext, handlePrev],
  );

  useEffect(() => {
    if (pageCount <= 1) return;

    const timer = window.setInterval(() => {
      goToPage(activePage + 1);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activePage, goToPage, pageCount]);

  const translatePercentage = 100 * activePage;

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Mild Interactive Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#45647B]/5 via-transparent to-[#45647B]/5"></div>
        
        {/* Decorative elements */}
        {/* Top-left: half bubble at corner on mobile, full bubble on larger screens */}
        <div className="absolute top-0 left-0 w-20 h-20 md:top-10 md:left-10 rounded-br-full md:rounded-full bg-[#45647B]/5"></div>
        {/* Bottom-right: half bubble at corner on mobile, full bubble on larger screens */}
        <div className="absolute bottom-0 right-0 w-32 h-32 md:bottom-10 md:right-10 rounded-tl-full md:rounded-full bg-[#45647B]/5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-[#45647B]/10 rounded-full mb-4">
            <span className="text-[#1A2332] font-[470]">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-[32px]">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear what our clients have to say about working with us
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div className="overflow-hidden py-6">
            <motion.div
              className="flex"
              animate={{ x: `-${translatePercentage}%` }}
              transition={{ type: "spring", stiffness: 110, damping: 22 }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.author}-${index}`}
                  className="px-2 md:px-4 lg:px-6 flex-[0_0_calc(100%/1)] sm:flex-[0_0_calc(100%/1)] md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: (index % slidesPerView) * 0.2 }}
                >
                  <motion.div
                    className="relative h-full"
                    initial={{ opacity: 1 }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#45647B]/10 via-[#45647B]/5 to-transparent opacity-0 blur-xl transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                    <Card className="relative border-2 border-[#45647B]/20 hover:border-[#45647B]/50 transition-all hover:shadow-lg h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                          <Quote className="h-10 w-10 text-[#45647B]/20 mb-4" />
                  
                  <p className="text-muted-foreground mb-6 flex-grow italic">
                    "{testimonial.quote}"
                  </p>

                          <div className="flex items-center gap-4 pt-4 border-t border-[#45647B]/10">
                    <div className="h-12 w-12 rounded-full bg-[#45647B]/10 text-[#45647B] font-semibold flex items-center justify-center text-sm">
                      {getInitials(testimonial.author)}
                    </div>
                    <div className="flex-1">
                              <div className="text-sm font-medium">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>

                  <div className="flex gap-1 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                                className="h-4 w-4 fill-[#45647B]"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="hidden md:flex absolute left-[-1.75rem] lg:left-[-3rem] top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-[#45647B]/20 bg-white text-[#45647B] shadow-md hover:bg-[#45647B]/10 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonials"
            className="hidden md:flex absolute right-[-1.75rem] lg:right-[-3rem] top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-[#45647B]/20 bg-white text-[#45647B] shadow-md hover:bg-[#45647B]/10 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-16 flex items-center justify-center gap-3">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                aria-label={`Go to testimonial group ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activePage
                    ? "w-10 bg-[#45647B]"
                    : "w-6 bg-[#45647B]/20 hover:bg-[#45647B]/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
