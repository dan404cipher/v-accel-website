"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { OptimizedBackground } from "./OptimizedBackground";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Building2,
  Users,
  Calendar,
} from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import chennaiMapBg from "@assets/292b345ba7d201da1766c695823acf6877e18a7c.png";
import phoneMockup from "@assets/995e2841ce10ae46f2c330cc3619c2c8b2c2ee3a.png";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@v-accel.ai",
      link: "mailto:info@v-accel.ai",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "86102 62853",
      link: "tel:8610262853",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail:
        "V-Accel AI Dynamics Pvt Ltd, No:04, Ground Floor, Tidel Park, Rajiv Gandhi Salai, Taramani, Chennai - 113",
      link: "#",
      description: "Come say hello at our office",
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Mon-Fri: 9:00 AM - 6:00 PM",
      link: "#",
      description: "PST timezone",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F8]">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center pt-20">
        {/* Background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#F4F6F8] via-white to-[#E8F5F4]"
          style={{ zIndex: -20 }}
        />

        {/* Optimized Interactive background layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <OptimizedBackground variant="hero" />
        </div>

        <div
          className="max-w-7xl mx-auto text-center relative py-[0px] px-[16px]"
          style={{ zIndex: 10 }}
        >
          {/* Badge with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 md:mb-6 bg-gradient-to-r from-[#1A2332]/10 to-[#00B8A9]/10 text-[#1A2332] border-0 shadow-lg text-xs md:text-sm py-[8px] px-[16px] font-normal text-[16px] font-bold">
              <MessageSquare className="w-3 h-3 mr-1" />
              Get In Touch
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 md:mb-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
              <span className="inline bg-gradient-to-r from-[#1A2332] via-[#00B8A9] to-[#1A2332] bg-clip-text text-[rgb(44,62,80)]">
                Contact Us
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed px-[16px] py-[0px] text-center"
          >
            Ready to transform your ideas into reality? Let&apos;s build
            something amazing together.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-16 overflow-hidden">
        {/* Enhanced Interactive Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F4F8] via-[#E8F1F5] to-[#F0F4F8]" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 184, 169, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(74, 85, 104, 0.06) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px]"
          style={{
            background:
              "radial-gradient(circle, rgba(100, 116, 139, 0.05) 0%, transparent 70%)",
            filter: "blur(40px)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-1/4 w-24 h-24 border border-[#00B8A9]/10 rounded-2xl"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 border border-[#4A5568]/10 rounded-full"
          animate={{
            y: [0, 25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute top-1/3 left-10 w-20 h-20 border border-[#64748B]/8 rounded-xl"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1A2332 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Subtle line pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
            linear-gradient(to right, #64748B 1px, transparent 1px),
            linear-gradient(to bottom, #64748B 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Animated accent lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0, 184, 169, 0.1), transparent)",
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-full h-1"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(74, 85, 104, 0.1), transparent)",
          }}
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Bento Grid: Cards on left, Device on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Contact Cards in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="block"
                >
                  <Card className="relative p-8 h-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden group rounded-3xl">
                    <div className="relative z-10">
                      {/* Icon with soft background */}
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-[#4A5568] flex items-center justify-center mb-5 shadow-sm"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <info.icon
                          className="w-6 h-6 text-white"
                          strokeWidth={1.5}
                        />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-[#2C3E50] mb-3 text-lg">
                        {info.title}
                      </h3>

                      {/* Detail */}
                      <p className="text-[#1A2332] mb-2 transition-all text-base">
                        {info.detail}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-[#64748B]">
                        {info.description}
                      </p>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Right Side - Device Component */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="w-full max-w-md mx-auto">
                <ImageWithFallback
                  src={phoneMockup}
                  alt="Navigation Map on Phone"
                  className="w-full h-auto drop-shadow-m"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="relative py-20 bg-[#F4F6F8] overflow-hidden">
        {/* Interactive Background Effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <OptimizedBackground variant="hero" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative" style={{ zIndex: 10 }}>
          {/* Contact Form - Full Width */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="relative p-8 md:p-10 border-0 shadow-2xl bg-white overflow-hidden">
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00B8A9]/10 via-transparent to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#1A2332]/5 via-transparent to-transparent rounded-tr-full" />

              <div className="relative z-10">
                <div className="mb-8">
                  <Badge className="mb-[24px] bg-gradient-to-r from-[#00B8A9]/10 to-[#1A2332]/10 text-[#1A2332] border-0 text-[14px] py-[8px] px-[16px] mt-[0px] mr-[0px] ml-[0px] font-normal font-bold">
                    <MessageSquare className="w-3 h-3 mr-1" />
                    24h Response Time
                  </Badge>
                  <h2 className="text-[#1A2332] text-[32px] mb-3">
                    Send us a message
                  </h2>
                  <p className="text-[#2C3E50]/80">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm text-[#2C3E50] mb-2 group-focus-within:text-[#00B8A9] transition-colors"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="h-12 border-2 border-[#1A2332]/10 focus:border-[#00B8A9] focus:ring-2 focus:ring-[#00B8A9]/20 transition-all rounded-lg bg-[#F4F6F8]/30 hover:bg-white"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-sm text-[#2C3E50] mb-2 group-focus-within:text-[#00B8A9] transition-colors"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="h-12 border-2 border-[#1A2332]/10 focus:border-[#00B8A9] focus:ring-2 focus:ring-[#00B8A9]/20 transition-all rounded-lg bg-[#F4F6F8]/30 hover:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="company"
                        className="block text-sm text-[#2C3E50] mb-2 group-focus-within:text-[#00B8A9] transition-colors"
                      >
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="h-12 border-2 border-[#1A2332]/10 focus:border-[#00B8A9] focus:ring-2 focus:ring-[#00B8A9]/20 transition-all rounded-lg bg-[#F4F6F8]/30 hover:bg-white"
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="phone"
                        className="block text-sm text-[#2C3E50] mb-2 group-focus-within:text-[#00B8A9] transition-colors"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="h-12 border-2 border-[#1A2332]/10 focus:border-[#00B8A9] focus:ring-2 focus:ring-[#00B8A9]/20 transition-all rounded-lg bg-[#F4F6F8]/30 hover:bg-white"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="subject"
                      className="block text-sm text-[#2C3E50] mb-2 group-focus-within:text-[#00B8A9] transition-colors"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="h-12 border-2 border-[#1A2332]/10 focus:border-[#00B8A9] focus:ring-2 focus:ring-[#00B8A9]/20 transition-all rounded-lg bg-[#F4F6F8]/30 hover:bg-white"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm text-[#2C3E50] mb-2 group-focus-within:text-[#00B8A9] transition-colors"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your project..."
                      rows={6}
                      className="border-2 border-[#1A2332]/10 focus:border-[#00B8A9] focus:ring-2 focus:ring-[#00B8A9]/20 transition-all resize-none rounded-lg bg-[#F4F6F8]/30 hover:bg-white"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 bg-gradient-to-r from-[#1A2332] to-[#1A2332]/90 hover:from-[#2C3E50] hover:to-[#2C3E50]/90 text-white shadow-[0_4px_20px_rgba(26,35,50,0.3)] hover:shadow-[0_8px_30px_rgba(44,62,80,0.5)] transition-all duration-300 group rounded-lg"
                    >
                      <span className="flex items-center justify-center">
                        Send Message
                        <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 duration-300" />
                      </span>
                    </Button>
                  </motion.div>

                  <p className="text-xs text-[#2C3E50]/60 text-center">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </form>
              </div>
            </Card>
          </motion.div>

          {/* Why reach out section - Below form */}
          <div>
            {/* Centered Title */}
            <div className="text-center mb-12">
              <h3 className="text-[#1A2332] text-3xl mb-3">
                Why reach out to us?
              </h3>
              <p className="text-[#2C3E50]/70">
                Choose the topic that best fits your needs
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
              {/* New Project - Takes 1 column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <Card className="relative p-6 border-0 bg-[#3E5266] text-white shadow-lg overflow-hidden h-full group cursor-pointer hover:shadow-xl transition-all duration-300">
                  {/* Decorative circle */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white mb-1">New Project</h4>
                      <p className="text-sm text-white/70">
                        Start a new development project with us
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Partnership - Takes 1 column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="relative p-6 border-0 bg-[#3E5266] text-white shadow-lg overflow-hidden h-full group cursor-pointer hover:shadow-xl transition-all duration-300">
                  {/* Decorative circle */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white mb-1">Partnership</h4>
                      <p className="text-sm text-white/70">
                        Explore partnership opportunities
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Quick Response Promise - Takes 1 column but spans 2 rows */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:row-span-2"
              >
                <Card className="relative p-8 border-0 bg-[#3E5266] text-white shadow-lg overflow-hidden h-full">
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon and Title */}
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-white text-xl mb-3">
                        Quick Response Guarantee
                      </h4>
                      <p className="text-white/80 leading-relaxed">
                        We value your time. Our team commits to responding to
                        all inquiries within 24 hours during business days.
                      </p>
                    </div>

                    {/* Bottom Info - pushed to bottom */}
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-white/90">
                          <Clock className="w-4 h-4" />
                          <span>Average response: 4 hours</span>
                        </div>
                        <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm px-3 py-1">
                          Active Now
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Consultation - Takes 1 column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="relative p-6 border-0 bg-[#3E5266] text-white shadow-lg overflow-hidden h-full group cursor-pointer hover:shadow-xl transition-all duration-300">
                  {/* Decorative circle */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white mb-1">Consultation</h4>
                      <p className="text-sm text-white/70">
                        Schedule a free consultation call
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* General Inquiry - Takes 1 column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <Card className="relative p-6 border-0 bg-[#3E5266] text-white shadow-lg overflow-hidden h-full group cursor-pointer hover:shadow-xl transition-all duration-300">
                  {/* Decorative circle */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white mb-1">General Inquiry</h4>
                      <p className="text-sm text-white/70">
                        Ask us anything about our services
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section - Outside the map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1A2332] text-[32px] mb-4 tracking-[0.4px]">
              Our Location
            </h2>
            <p className="text-[#2C3E50]/70 tracking-[-0.3125px] max-w-2xl mx-auto">
              Visit us at our office in Chennai. We&apos;re located at Tidel
              Park, one of India&apos;s premier IT hubs. Our team is ready to
              welcome you for in-person consultations and project discussions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-0 shadow-xl relative p-0">
              {/* Map Background */}
              <div
                className="relative h-[500px] bg-cover bg-center rounded-[inherit] overflow-hidden"
                style={{
                  backgroundImage: `url('${chennaiMapBg.src}')`,
                }}
              >
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,35,50,0.4)] via-[rgba(26,35,50,0.56)] to-[rgba(26,35,50,0.4)]" />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center px-6 py-20">
                  {/* Location Card */}
                  <motion.div
                    className="text-center bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl w-full max-w-[260px]"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="mb-4"
                    >
                      <MapPin
                        className="w-12 h-12 text-[#2C3E50] mx-auto"
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    <h3 className="text-[#1A2332] text-lg mb-2 tracking-[-0.45px]">
                      Chennai, Tamil Nadu
                    </h3>
                    <p className="text-[#2C3E50]/60 tracking-[-0.3125px] mb-4">
                      Tidel Park
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        asChild
                        className="bg-gradient-to-r from-[#1A2332] to-[#1A2332]/90 hover:from-[#2C3E50] hover:to-[#2C3E50]/90 text-white px-6 h-11 shadow-[0_4px_20px_rgba(26,35,50,0.3)] hover:shadow-[0_8px_30px_rgba(44,62,80,0.5)] transition-all duration-300 tracking-[-0.15px] rounded-xl"
                      >
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=V-Accel+AI+Dynamics+Pvt+Ltd,+No:04,+Ground+Floor,+Tidel+Park,+Rajiv+Gandhi+Salai,+Taramani,+Chennai+113"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get Directions
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
