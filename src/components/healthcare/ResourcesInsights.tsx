'use client';

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    date: "Nov 5, 2025",
    readTime: "8 min read",
    title: "Building Secure Patient Portals at Scale",
    description: "Learn the key principles for designing healthcare systems that can handle millions of patients.",
    link: "#"
  },
  {
    date: "Nov 1, 2025",
    readTime: "6 min read",
    title: "Data Privacy Compliance in Modern HealthTech",
    description: "Navigate the complex landscape of healthcare data regulations with confidence and...",
    link: "#"
  },
  {
    date: "Oct 28, 2025",
    readTime: "10 min read",
    title: "AI-Powered Personalized Care",
    description: "How advanced algorithms are revolutionizing personalized healthcare experiences.",
    link: "#"
  }
];

export function ResourcesInsights() {
  return (
    <section id="resources" className="py-20 lg:py-28 bg-[#F4F6F8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary">Resources & Insights</span>
            </div>
            <h2 className="mb-6 text-[#2C3E50] text-[32px]">
              Stay Ahead with HealthTech Knowledge
            </h2>
            <p className="text-lg text-[#2C3E50]/70">
              Expert insights, guides, and research to help you navigate the future of healthcare technology
            </p>
          </motion.div>
        </div>

        {/* Blog Posts Section */}
        <div className="max-w-7xl mx-auto">
          {/* Section Header with View All Link */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[#2C3E50]">Latest from Our Blog</h3>
            <motion.a
              href="#"
              className="text-[#2C3E50] hover:text-[#4CAF50] transition-colors flex items-center gap-2 group"
              whileHover={{ x: 5 }}
            >
              View All Posts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-lg p-6 hover:shadow-xl transition-all cursor-pointer border border-transparent hover:border-primary/20"
              >
                {/* Date and Read Time */}
                <div className="flex items-center gap-2 text-sm text-[#2C3E50]/60 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h4 className="text-[#2C3E50] mb-3">
                  {post.title}
                </h4>

                {/* Description */}
                <p className="text-[#2C3E50]/70 mb-4 leading-relaxed">
                  {post.description}
                </p>

                {/* Read More Link */}
                <motion.a
                  href={post.link}
                  className="inline-flex items-center gap-2 text-[#4CAF50] hover:text-[#4CAF50]/80 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
