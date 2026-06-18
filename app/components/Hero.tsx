"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star, Trophy, Calendar } from "lucide-react";

export default function DarkHeroSection() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex items-start lg:items-center overflow-hidden bg-[#050505]">
      {/* Background Image & Faded Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 md:ml-28">
        <Image
          src="/heroImage4.jpg"
          alt="Luxury salon experience"
          fill
          priority
          className="object-cover object-center lg:object-[70%_center]"
          sizes="100vw"
        />
        {/* 
          Gradient Overlay: 
          Mobile: Fades from Dark (Top) to Transparent (Bottom)
          Desktop: Fades from Dark (Left) to Transparent (Right)
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-transparent lg:bg-gradient-to-r lg:from-[#050505] lg:via-[#050505]/80 lg:to-black/0" />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 h-full pt-32 sm:mt-10  pb-20 lg:py-0">
        <motion.div
          className="flex flex-col items-start max-w-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtle Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Premium Beauty Experience
            </span>
          </motion.div>

          {/* Minimalist Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6 tracking-tight"
          >
            <span className="font-serif italic">Artistry</span> in <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">
              Every Detail.
            </span>
          </motion.h1>

          {/* Minimal Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-zinc-400 mb-12 leading-relaxed font-light max-w-md"
          >
            Elevate your personal style with bespoke luxury services. Precision
            haircuts, flawless coloring, and elevated treatments tailored
            uniquely to you.
          </motion.p>

          {/* Single CTA Button */}
          <motion.a
          href="https://wa.me/15551234567"
            variants={itemVariants}
            className="flex flex-col sm:flex-row  gap-4 w-full sm:w-auto mb-10"
          >
            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative overflow-hidden inline-flex cursor-pointer items-center justify-center gap-2 px-8 py-4 bg-[#232323] hover:bg-black text-white rounded-xl font-medium transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)] group"
            >
              {/* Shine effect that sweeps across on hover */}
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out z-0" />

              <Calendar className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
              <span className="relative z-10">Book Appointment</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
            </motion.button>

            {/* Secondary Button */}
            <motion.a
            href="#services"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative cursor-pointer overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 hover:border-[#D4AF37] text-white rounded-xl font-medium transition-all duration-500"
            >
              <div className="absolute inset-0 w-0 bg-[#D4AF37] transition-all duration-500 ease-out group-hover:w-full z-0" />
              <span className="relative z-10 tracking-wider text-sm uppercase transition-colors duration-500 group-hover:text-black">
                View All Services
              </span>
              {/* <ArrowRight className="w-4 h-4 relative z-10 transition-all duration-500 group-hover:text-black group-hover:translate-x-1 text-[#D4AF37]" /> */}
            </motion.a>
          </motion.a>
        </motion.div>
      </div>

      {/* Floating Info Elements - Hidden on very small mobile, visible on tablet/desktop */}
      <div className="hidden sm:block absolute bottom-12 right-8 lg:right-16 z-20">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Glassmorphic Rating Card */}
          <motion.div
            className="bg-black/40 backdrop-blur-md p-5 border border-white/10 flex items-center gap-4 w-64"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>
              <p className="text-white text-sm font-medium">
                4.9/5 Average Rating
              </p>
              <p className="text-zinc-400 text-xs mt-0.5">
                From 5,000+ Reviews
              </p>
            </div>
          </motion.div>

          {/* Glassmorphic Award Card */}
          <motion.div
            className="bg-black/40 backdrop-blur-md p-5 border border-white/10 flex items-center gap-4 w-64"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex flex-col">
              <p className="text-white text-sm font-medium">
                Salon of the Year
              </p>
              <p className="text-zinc-400 text-xs mt-0.5">
                Luxury Beauty Awards
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
