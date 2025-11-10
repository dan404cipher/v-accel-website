'use client';

import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    quote: "V-Accel transformed our patient data management with a seamless EHR integration. The system is intuitive, secure, and has significantly improved our clinical workflows.",
    author: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    company: "Metro Health System",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
  },
  {
    quote: "Their telehealth platform has been a game-changer for our practice. The implementation was smooth, and their deep understanding of HIPAA compliance gave us complete confidence.",
    author: "Michael Rodriguez",
    role: "Director of IT",
    company: "Regional Medical Group",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5,
  },
  {
    quote: "V-Accel delivered our patient portal on time and exceeded expectations. The solution handles thousands of daily appointments seamlessly and patients love the user experience.",
    author: "Priya Sharma",
    role: "VP of Digital Health",
    company: "Community Hospital Network",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-[#4CAF50]/10 rounded-full mb-4">
              <span className="text-[#4CAF50]">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-[#2C3E50] text-[32px]">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-[#6B7280]">
              Hear what our clients have to say about working with us
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-2 border-gray-200 hover:border-[#4CAF50]/50 transition-all hover:shadow-lg bg-white h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <Quote className="h-10 w-10 text-[#4CAF50]/20 mb-4" />
                    
                    <p className="text-[#6B7280] mb-6 flex-grow italic">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-sm text-[#2C3E50]">{testimonial.author}</div>
                        <div className="text-xs text-[#6B7280]">{testimonial.role}</div>
                        <div className="text-xs text-[#6B7280]">{testimonial.company}</div>
                      </div>
                    </div>

                    <div className="flex gap-1 mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 fill-[#4CAF50]"
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
          ))}
        </div>
      </div>
    </section>
  );
}
