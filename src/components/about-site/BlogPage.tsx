"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Calendar, Clock, Search, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { OptimizedBackground } from "@/components/parent/OptimizedBackground";
import { ImageWithFallback } from "@/components/parent/ImageWithFallback";

const blogPosts = [
  {
    id: 1,
    title: "Building HIPAA-Compliant Healthcare Applications: A Complete Guide",
    excerpt:
      "Learn the essential requirements and best practices for developing healthcare software that meets HIPAA compliance standards.",
    category: "Healthcare",
    author: "V-Accel Team",
    date: "November 10, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "EdTech Trends 2025: AI-Powered Learning Platforms",
    excerpt:
      "Discover how artificial intelligence is transforming education technology and creating personalized learning experiences.",
    category: "EdTech",
    author: "V-Accel Team",
    date: "November 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "FinTech Security: Protecting Financial Data in 2025",
    excerpt:
      "Essential security measures and compliance frameworks for financial technology applications handling sensitive data.",
    category: "FinTech",
    author: "V-Accel Team",
    date: "October 28, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Project Management Best Practices for Tech Teams",
    excerpt:
      "How to streamline workflows, improve collaboration, and deliver projects on time with modern project management tools.",
    category: "Product",
    author: "V-Accel Team",
    date: "October 20, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "SOC 2 Compliance: A Step-by-Step Guide for Startups",
    excerpt:
      "Navigate the SOC 2 certification process with our comprehensive guide tailored for growing technology companies.",
    category: "Compliance",
    author: "V-Accel Team",
    date: "October 15, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "Scaling Your SaaS Application: Architecture & Infrastructure",
    excerpt:
      "Technical insights on building scalable cloud infrastructure that grows with your user base and business needs.",
    category: "Development",
    author: "V-Accel Team",
    date: "October 8, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    featured: false,
  },
];

const categories = ["All", "Healthcare", "EdTech", "FinTech", "Product", "Compliance", "Development"];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const categoryFiltered =
      selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);

    if (!searchQuery.trim()) {
      return categoryFiltered;
    }

    const lowerQuery = searchQuery.toLowerCase();
    return categoryFiltered.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.category.toLowerCase().includes(lowerQuery),
    );
  }, [selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => blogPosts.find((post) => post.featured), []);

  return (
    <div className="min-h-screen bg-[#F4F6F8]">
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4F6F8] via-white to-[#E8F5F4]" style={{ zIndex: -20 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <OptimizedBackground variant="hero" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <Badge className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1A2332]/10 to-[#00B8A9]/10 px-6 py-3 text-base font-semibold text-[#1A2332]">
              <BookOpen className="h-5 w-5" />
              Insights &amp; Resources
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
          >
            <span className="inline bg-gradient-to-r from-[#1A2332] via-[#00B8A9] to-[#1A2332] bg-clip-text text-[rgb(44,62,80)]">
              Blog
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-3xl text-base text-gray-600 sm:text-lg md:text-xl lg:text-2xl"
          >
            Expert insights on EdTech, FinTech, and Healthcare development, compliance, and industry best practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto max-w-2xl"
          >
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#2C3E50]/40" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="h-14 rounded-full border-2 border-[#1A2332]/20 bg-white/80 pl-12 pr-4 text-base shadow-lg transition-all placeholder:text-[#2C3E50]/40 focus:border-[#00B8A9] focus:ring-2 focus:ring-[#00B8A9]/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {featuredPost && selectedCategory === "All" && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00B8A9]/30 bg-gradient-to-r from-[#00B8A9]/10 to-[#00B8A9]/5 px-5 py-2.5">
                <span className="text-sm text-[rgb(26,35,50)]">Featured Article</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="group grid overflow-hidden rounded-2xl border-0 bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,184,169,0.15)] md:grid-cols-2">
                <div className="relative h-[320px] overflow-hidden md:h-auto">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332]/20 via-transparent to-[#00B8A9]/10" />

                  <div className="absolute left-6 top-6">
                    <Badge className="rounded-full border-0 bg-gradient-to-r from-[#00B8A9] to-[#00B8A9]/90 px-4 py-2 text-white shadow-lg">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col justify-center bg-gradient-to-br from-white to-[#F4F6F8]/30 p-8 md:p-12">
                  <h2 className="mb-5 text-2xl text-[#1A2332] transition-colors duration-300 group-hover:text-[#00B8A9] md:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-8 text-base leading-relaxed text-[#2C3E50]/80 md:text-lg">{featuredPost.excerpt}</p>

                  <div className="mb-8 flex flex-wrap items-center gap-5 border-b border-[#00B8A9]/10 pb-6 text-sm text-[#2C3E50]/60">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-[#00B8A9]" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#00B8A9]" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#00B8A9]" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Button className="group/button w-fit rounded-xl bg-[#1A2332] px-8 py-6 text-base text-white shadow-[0_4px_20px_rgba(26,35,50,0.3)] transition-all duration-300 hover:bg-[#00B8A9] hover:shadow-[0_8px_30px_rgba(0,184,169,0.4)]">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      <section className="bg-[#F4F6F8] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-wrap items-center justify-center gap-2"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <Button
                  key={category}
                  size="default"
                  variant={isActive ? "default" : "outline"}
                  className={
                    isActive
                      ? "rounded-full bg-[#1A2332] px-6 py-2.5 text-sm text-white shadow-[0_4px_14px_rgba(26,35,50,0.39)] hover:bg-[#1A2332]/90"
                      : "rounded-full border-2 border-[#1A2332]/20 bg-white px-6 py-2.5 text-sm text-[#2C3E50] transition-colors hover:border-[#1A2332]/40 hover:bg-gray-50"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-2 text-[32px] text-[#1A2332]">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-[#2C3E50]">
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group flex h-full cursor-pointer flex-col overflow-hidden border-0 bg-white transition-all duration-300 hover:shadow-2xl p-0">
                  <div className="relative h-[240px] overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute left-4 top-4">
                      <Badge className="rounded-full border-0 bg-[#00B8A9] px-3 py-1.5 text-xs text-white shadow-lg">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                    <div className="flex flex-grow flex-col p-7">
                      <h3 className="mb-4 line-clamp-2 text-xl leading-snug text-[#1A2332] transition-colors duration-300 group-hover:text-[#00B8A9]">
                        {post.title}
                      </h3>
                      <p className="mb-6 flex-grow line-clamp-3 leading-relaxed text-[#2C3E50]/80">{post.excerpt}</p>

                      <div className="mb-5 flex items-center gap-4 border-b border-[#F4F6F8] pb-5 text-xs text-[#2C3E50]/60">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-[#00B8A9]" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-[#00B8A9]" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[#1A2332] transition-colors duration-300 group-hover:text-[#00B8A9]">
                        <span className="text-sm">Read Article</span>
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="py-20 text-center"
            >
              <p className="text-lg text-[#2C3E50]">No articles found for this search.</p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00B8A9]/20 bg-[#00B8A9]/10 px-4 py-2">
              <span className="text-sm text-[rgb(26,35,50)]">Stay Updated</span>
            </div>
            <h2 className="mb-4 text-[32px] text-[#1A2332]">Subscribe to our newsletter</h2>
            <p className="mx-auto mb-8 max-w-2xl text-[#2C3E50]">
              Get the latest insights on EdTech, FinTech, and Healthcare development delivered straight to your inbox.
            </p>
            <div className="mx-auto flex max-w-2xl flex-col items-stretch justify-center gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="h-14 sm:h-12 md:h-14 flex-1 rounded-lg border-2 border-[#1A2332]/20 px-4 transition-all focus:border-[#00B8A9] focus:ring-2 focus:ring-[#00B8A9]/20"
              />
              <Button className="h-10 sm:h-12 md:h-14 rounded-lg bg-[#1A2332] px-3 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base text-white shadow-[0_4px_14px_rgba(26,35,50,0.39)] transition-all hover:bg-[#1A2332]/90 hover:shadow-[0_6px_20px_rgba(26,35,50,0.5)] w-full sm:w-auto">
                Subscribe Now
                <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


