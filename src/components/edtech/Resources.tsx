'use client';

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Resources() {
  const blogPosts = [
    {
      date: "Nov 5, 2025",
      readTime: "8 min read",
      title: "Building Secure Learning Platforms at Scale",
      description: "Learn the key principles for designing learning systems that can handle millions of students.",
      highlight: false,
    },
    {
      date: "Nov 1, 2025",
      readTime: "6 min read",
      title: "Data Privacy Compliance in Modern EdTech",
      description: "Navigate the complex landscape of educational data regulations with confidence and efficiency.",
      highlight: true,
    },
    {
      date: "Oct 28, 2025",
      readTime: "10 min read",
      title: "AI-Powered Personalized Learning",
      description: "How advanced algorithms are revolutionizing personalized education experiences.",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full inline-block">Resources & Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground text-[32px]">
            Stay Ahead with EdTech Knowledge
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Expert insights, guides, and research to help you navigate the future of educational technology
          </p>
        </motion.div>

        {/* Blog Section */}
        <div className="mb-8">
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl text-foreground">Latest from Our Blog</h3>
            <motion.button 
              className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Posts</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h4
                  className={`text-xl mb-3 ${
                    post.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  {post.title}
                </h4>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {post.description}
                </p>
                <motion.button
                  className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
