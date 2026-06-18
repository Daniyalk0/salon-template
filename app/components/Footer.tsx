"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const SOCIAL_LINKS = [
  { name: "Instagram", icon: BsInstagram, href: "https://instagram.com" },
  { name: "Facebook", icon: BsFacebook, href: "https://facebook.com" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/15551234567" },
];

export default function LuxuryFooter() {
  return (
    <footer className="relative bg-[#0A0A0A] pt-8 pb-2 overflow-hidden">
      
      {/* Subtle Gold Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/40 to-transparent" />

      {/* Gentle ambient glow behind the footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C8A97E]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          
          {/* LEFT: Salon Logo / Brand */}
          <Link href="/" className="flex items-center gap-1 group">
            <h2 className="font-serif text-2xl md:text-3xl tracking-widest text-stone-200 uppercase group-hover:text-white transition-colors duration-300">
              Lumière
            </h2>
            <span className="w-1.5 h-1.5 bg-[#C8A97E] rounded-full ml-1.5 mt-2 shadow-[0_0_8px_rgba(200,169,126,0.6)]" />
          </Link>

          {/* RIGHT: Social Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2.5 text-stone-400 hover:text-[#C8A97E] transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-[11px] font-medium tracking-[0.15em] uppercase hidden sm:block">
                  {social.name}
                </span>
                
                {/* Animated Underline */}
                <span className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-[#C8A97E] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </div>

        </div>

        {/* BOTTOM: Copyright */}
        <div className="mt-6 flex flex-col items-center justify-center pt-8 border-t border-white/[0.04]">
          <p className="text-[11px] sm:text-xs text-stone-500 font-light tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Lumière Salon. All rights reserved.
          </p>
        </div>

      </motion.div>
    </footer>
  );
}