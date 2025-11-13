"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram, CheckCircle2 } from "lucide-react";
import vaccelLogo from "@assets/2f6818b63f91758834982350ffe7523437d669ba.png";

export function ParentFooter() {
  return (
    <footer className="relative z-[50] py-16 bg-white border-t border-gray-100 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4F6F8] via-white to-[#E8F5F4]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0, 184, 169, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(26, 35, 50, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#00B8A9]"
          style={{
            left: `${10 + i * 20}%`,
            top: `${30 + (i % 2) * 30}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 opacity-[0.04]"
        style={{
          background: 'linear-gradient(135deg, #00B8A9, transparent)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        }}
        animate={{
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 parent-footer-grid gap-12 lg:gap-16 mb-12">
          {/* Brand Section - Takes more space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={vaccelLogo} alt="V-Accel" width={150} height={64} className="h-16 w-auto" />
            </motion.div>
            
            {/* Social Icons */}
            <div className="flex gap-2 mb-8">
              <motion.a 
                href="#" 
                className="w-8 h-8 border border-[#FF6B6B] text-[#FF6B6B] rounded-lg flex items-center justify-center hover:bg-[#FF6B6B] hover:text-white transition-colors relative overflow-hidden group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Linkedin className="w-4 h-4 relative z-10" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 border border-[#FF6B6B] text-[#FF6B6B] rounded-lg flex items-center justify-center hover:bg-[#FF6B6B] hover:text-white transition-colors relative overflow-hidden group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Facebook className="w-4 h-4 relative z-10" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 border border-[#FF6B6B] text-[#FF6B6B] rounded-lg flex items-center justify-center hover:bg-[#FF6B6B] hover:text-white transition-colors relative overflow-hidden group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Instagram className="w-4 h-4 relative z-10" />
              </motion.a>
            </div>
            
            {/* Status Indicator */}
            <motion.div 
              className="flex items-center gap-2 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="w-5 h-5 rounded-full bg-[#00B8A9]/10 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(0, 184, 169, 0.4)',
                    '0 0 0 8px rgba(0, 184, 169, 0)',
                    '0 0 0 0 rgba(0, 184, 169, 0)'
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00B8A9]" />
              </motion.div>
              <span className="text-sm text-[#2C3E50]">All services are secure</span>
            </motion.div>
            
            {/* Copyright */}
            <motion.p 
              className="text-sm text-[#2C3E50]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Copyright © {new Date().getFullYear()} <span className="text-[rgb(255,107,107)]">V-Accel</span>. All rights reserved.
            </motion.p>
          </motion.div>
          
          {/* Product Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-[#1A2332] mb-5 font-medium">Product</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="#" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      LeadAccel CRM
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="#" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      Features
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="#" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      Pricing
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="#" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      Release Notes
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="#" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      API Guide
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>
          
          {/* Industries Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-[#1A2332] mb-5 font-medium">Industries</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="/services/edtech" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      EdTech
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="/services/fintech" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      FinTech
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="/services/healthcare" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      Healthcare
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="/case-studies" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      Case Studies
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>
          
          {/* Legal Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-[#1A2332] mb-5 font-medium">Legal</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="#" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      Privacy Policy
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="#" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      Terms of Service
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="#" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      Cookie Policy
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>
          
          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-[#1A2332] mb-5 font-medium">Company</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="/about" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      About
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="#" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      Careers
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="/insights" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      Blog
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href="#" 
                    className="text-[#2C3E50] hover:text-[#00B8A9] transition-colors inline-block relative group"
                  >
                    <span className="relative">
                      Contact
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B8A9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
