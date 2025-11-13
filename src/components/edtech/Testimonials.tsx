'use client';

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion } from "motion/react";

import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Dean of Technology, Lincoln University",
    image: "https://images.unsplash.com/photo-1613563696309-c2a4db7e1f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI2MDM2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "The platform has revolutionized how we deliver education. Student engagement has increased by 45% and our administrative tasks are now 60% more efficient.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "IT Director, Riverside School District",
    image: "https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBvbmxpbmV8ZW58MXx8fHwxNzYyNTc2NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "Outstanding technical support and seamless integration with our existing systems. The team truly understands educational technology needs.",
    rating: 5,
  },
  {
    name: "Prof. Emily Rodriguez",
    role: "Head of Digital Learning, Oakwood College",
    image: "https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhZG1pbmlzdHJhdG9yJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI2MDM2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "From implementation to ongoing support, the experience has been exceptional. Our faculty and students love the intuitive interface and powerful features.",
    rating: 5,
  },
];

export function Testimonials() {
  const extendedTestimonials = useMemo(
    () => [...testimonials, ...testimonials.slice(0, 4)],
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

  useEffect(() => {
    if (pageCount <= 1) return;

    const timer = window.setInterval(() => {
      goToPage(activePage + 1);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activePage, goToPage, pageCount]);

  const translatePercentage = 100 * activePage;

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Mild Interactive Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/5"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-[32px]">What Educators Say About Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading educational institutions worldwide
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div className="overflow-hidden py-6">
            <motion.div
              className="flex"
              animate={{ x: `-${translatePercentage}%` }}
              transition={{ type: "spring", stiffness: 110, damping: 22 }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  className="px-2 md:px-4 lg:px-6 flex-[0_0_calc(100%/1)] sm:flex-[0_0_calc(100%/1)] md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: (index % slidesPerView) * 0.2 }}
                >
                  <motion.div
                    className="relative h-full"
                    initial={{ opacity: 1 }}
                    whileHover={{ y: -18 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 blur-xl transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                    <motion.div
                      className="relative bg-white border border-primary/12 rounded-3xl p-8 lg:p-10 shadow-sm transition-all duration-300 h-full flex flex-col"
                      whileHover={{ boxShadow: "0 24px 55px rgba(115, 76, 186, 0.18)", borderColor: "rgba(98, 0, 234, 0.55)" }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: "visible", transformStyle: "preserve-3d" }}
                    >
                    <div className="mb-6">
                      <Quote className="h-10 w-10 text-primary/25" />
                    </div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground mb-8 leading-relaxed flex-1">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3 pt-6 border-t border-primary/10">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-foreground font-medium">{testimonial.name}</div>
                        <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="hidden md:flex absolute left-[-1.75rem] lg:left-[-3rem] top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-md hover:bg-primary/10 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonials"
            className="hidden md:flex absolute right-[-1.75rem] lg:right-[-3rem] top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-md hover:bg-primary/10 transition-colors"
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
                    ? "w-10 bg-primary"
                    : "w-6 bg-primary/20 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
