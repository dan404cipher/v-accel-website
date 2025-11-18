"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import vaccelLogo from "@assets/2f6818b63f91758834982350ffe7523437d669ba.png";

export function ParentFooter() {
  return (
    <footer className="relative py-16 bg-white border-t border-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4F6F8] via-white to-[#E8F5F4]" />

      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(0, 184, 169, 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
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
          background: "radial-gradient(circle, rgba(26, 35, 50, 0.12) 0%, transparent 70%)",
          filter: "blur(70px)",
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="mb-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Image
                src={vaccelLogo}
                alt="V-Accel Healthcare"
                width={160}
                height={64}
                className="h-16 w-auto"
              />
            </motion.div>

            <p className="text-sm text-[#2C3E50]/70 font-medium mb-6 leading-relaxed">
              Empowering healthcare organizations with cutting-edge technology solutions.
            </p>

            <div className="flex gap-2">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  className="w-9 h-9 bg-[#00B8A9] rounded-lg flex items-center justify-center hover:bg-[#1A2332] transition-colors text-white shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-[#1A2332] mb-5">Services</h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: "EdTech", href: "/services/edtech" },
                { label: "FinTech", href: "/services/fintech" },
                { label: "Healthcare", href: "/services/healthcare" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="block">
                    <motion.span
                      className="text-[#2C3E50]/70 font-medium hover:text-[#00B8A9] transition-colors inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-[#1A2332] mb-5">Company</h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "#" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-[#2C3E50]/70 font-medium hover:text-[#00B8A9] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-[#1A2332] mb-5">Contact</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <motion.a
                  href="mailto:info@v-accel.ai"
                className="text-[#2C3E50]/70 font-medium hover:text-[#00B8A9] transition-colors block"
                  whileHover={{ x: 5 }}
                >
                  info@v-accel.ai
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="tel:8610262853"
                className="text-[#2C3E50]/70 font-medium hover:text-[#00B8A9] transition-colors block"
                  whileHover={{ x: 5 }}
                >
                  86102 62853
                </motion.a>
              </li>
              <li>
                <p className="text-[#2C3E50]/70 font-medium leading-relaxed">
                  V-Accel AI Dynamics Pvt Ltd
                  <br />
                  No:04, Ground Floor, Tidel Park,
                  <br />
                  Rajiv Gandhi Salai, Taramani,
                  <br />
                  Chennai - 113
                </p>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-sm font-medium text-[#2C3E50]/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              © {new Date().getFullYear()} V-Accel Healthcare. All rights reserved.
            </motion.p>

            <motion.div
              className="flex gap-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link className="text-[#2C3E50]/60 font-medium hover:text-[#00B8A9] transition-colors" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="text-[#2C3E50]/60 font-medium hover:text-[#00B8A9] transition-colors" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-[#2C3E50]/60 font-medium hover:text-[#00B8A9] transition-colors" href="/dpa">
                Data Processing Agreement (DPA)
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
