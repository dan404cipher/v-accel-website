"use client";

import { motion } from "motion/react";
import { memo, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  index: number;
}

export const TestimonialCard = memo(function TestimonialCard({ quote, author, role, company, index }: TestimonialCardProps) {
  // Highlight V-Accel in quotes with teal color - memoized
  const formattedQuote = useMemo(() => {
    const parts = quote.split(/(V-Accel)/g);
    return parts.map((part, i) => 
      part === 'V-Accel' ? (
        <span key={i} className="text-[#00B8A9] font-semibold">{part}</span>
      ) : part
    );
  }, [quote]);

  const initials = useMemo(() => 
    author.split(' ').map(n => n[0]).join(''),
    [author]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="p-6 bg-white rounded-3xl border border-gray-100 hover:border-[#00B8A9]/30 transition-all duration-300 h-[320px] flex flex-col shadow-sm">
        {/* Star Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
          ))}
        </div>
        
        {/* Quote */}
        <p className="text-[#2C3E50] mb-6 flex-grow leading-relaxed text-sm">
          {"\u201C"}
          {formattedQuote}
          {"\u201D"}
        </p>
        
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00B8A9] to-[#1A2332] flex items-center justify-center text-white flex-shrink-0 text-sm">
            {initials}
          </div>
          <div>
            <div className="text-[#1A2332] text-sm">{author}</div>
            <div className="text-xs text-[#2C3E50]/70">
              {role}
              {company ? `, ${company}` : ""}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
});
