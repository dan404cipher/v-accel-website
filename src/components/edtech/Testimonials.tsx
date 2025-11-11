'use client';

import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-10 w-10 text-primary/20 group-hover:text-primary/40 transition-colors" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
