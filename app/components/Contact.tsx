"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Car,
  Accessibility,
  Map,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// --- MOCK DATA ---
const CONTACT_DETAILS = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    subtext: "Mon-Sat, 9am - 8pm",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "booking@lumieresalon.com",
    subtext: "Online support 24/7",
    href: "mailto:booking@lumieresalon.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "125 Luxury Avenue",
    subtext: "Beverly Hills, CA 90210",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 8:00 PM",
    subtext: "Sunday: Closed (VIP Only)",
    href: "#",
  },
];

const LOCATION_PERKS = [
  { icon: Car, text: "Free Valet Parking Available" },
  { icon: Accessibility, text: "Wheelchair Accessible" },
  { icon: Map, text: "Prime Downtown Location" },
];

// --- FRAMER MOTION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function LuxuryContact() {
  return (
    <section className="relative py-20 bg-[#0A0A0A] overflow-hidden selection:bg-[#C8A97E]/30">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#C8A97E]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* HEADER SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={itemVariants}
          className="flex flex-col items-center lg:items-start text-center lg:text-left mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] font-medium">
              Visit Our Salon
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            Let's Create Your <br className="hidden lg:block" /> Perfect Look
          </h2>
          <p className="text-stone-400 text-base md:text-lg leading-relaxed font-light max-w-2xl">
            Whether you're planning a complete transformation or a quick
            refresh, our team is ready to welcome you into our sanctuary of
            beauty and relaxation.
          </p>
        </motion.div>

        {/* MAIN SPLIT LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE: CONTACT INFO (60%) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Contact Grid */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {CONTACT_DETAILS.map((detail, idx) => (
                <motion.a
                  key={idx}
                  href={detail.href}
                  variants={itemVariants}
                  whileHover={{
                    y: -4,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  }}
                  className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C8A97E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A97E]/20 transition-colors duration-300">
                    <detail.icon
                      className="w-5 h-5 text-[#C8A97E]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-stone-500 mb-1.5 font-medium">
                      {detail.title}
                    </span>
                    <span className="text-white text-base font-medium mb-1 group-hover:text-[#C8A97E] transition-colors duration-300">
                      {detail.value}
                    </span>
                    <span className="text-sm text-stone-400 font-light">
                      {detail.subtext}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Floating Consultation Card */}
            <motion.div
              variants={itemVariants}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative p-6 sm:p-8 bg-gradient-to-br from-white/[0.05] to-transparent border border-[#C8A97E]/30 rounded-3xl shadow-[0_0_40px_rgba(200,169,126,0.05)] overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A97E]/10 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C8A97E] to-[#E3CBA8] flex items-center justify-center flex-shrink-0 shadow-[0_4px_20px_rgba(200,169,126,0.3)]">
                  <Sparkles className="w-6 h-6 text-stone-900" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl font-serif text-white mb-2">
                    Complimentary Consultation
                  </h4>
                  <p className="text-sm text-stone-400 font-light leading-relaxed">
                    Our beauty specialists will help you select services
                    tailored perfectly to your unique style and aesthetic goals.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              {/* Primary Call Action */}
              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C8A97E] to-[#E3CBA8] text-stone-900 rounded-full font-medium tracking-wide shadow-[0_4px_20px_rgba(200,169,126,0.25)] hover:shadow-[0_8px_30px_rgba(200,169,126,0.4)] transition-shadow"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.a>

              {/* Secondary WhatsApp Action */}
              <motion.a
                href="https://wa.me/15551234567"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-4 bg-white/[0.03] border border-white/[0.1] text-white rounded-full font-medium tracking-wide hover:border-[#C8A97E]/50 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C8A97E]" />
                WhatsApp Us
              </motion.a>

              {/* Secondary Directions Action */}
              <motion.a
                href="https://www.google.com/maps/dir/?api=1&destination=125+Rodeo+Drive,+Beverly+Hills,+CA+90210"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-4 bg-white/[0.03] border border-white/[0.1] text-white rounded-full font-medium tracking-wide hover:border-white/[0.2] transition-colors"
              >
                <MapPin className="w-4 h-4 text-stone-400" />
                Get Directions
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: MAP & PERKS (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="flex flex-col p-2 bg-white/[0.02] border border-white/[0.06] rounded-[2rem] h-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              {/* Map Placeholder Wrapper */}
              {/* Map Image Wrapper */}
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] bg-stone-900 rounded-[1.5rem] overflow-hidden group">
                {/* Replace this src with a real Google Maps screenshot of your salon */}
                <img
                  src="/maps.jpeg"
                  alt="Salon Location Map"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />

                {/* 
    Gradient Fade Overlays 
    1. Top-to-bottom fade (blends into the dark card below)
    2. Subtle edge vignettes (darkens the corners for a moody luxury feel)
  */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#0F0F0F_120%)] z-10" />

                {/* Animated Map Pin */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 w-12 h-12 bg-gradient-to-br from-[#C8A97E] to-[#E3CBA8] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(200,169,126,0.4)] cursor-pointer"
                  >
                    <MapPin className="w-6 h-6 text-stone-900 fill-stone-900" />
                  </motion.div>
                  {/* Pulse Shadow */}
                  <div className="absolute bottom-0 w-8 h-2 bg-black/80 rounded-[100%] blur-sm" />
                  {/* Radar Pulse */}
                  <div
                    className="absolute w-24 h-24 bg-[#C8A97E]/30 rounded-full animate-ping"
                    style={{ animationDuration: "3s" }}
                  />
                </div>

                {/* Open in maps overlay button */}
                <a
                  href="https://www.google.com/maps/search/125+Luxury+Avenue+Beverly+Hills,+CA+90210/@34.069816,-118.4170165,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-white/20 transition-colors z-30"
                >
                  Open in Maps <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Location Perks */}
              <div className="flex flex-col gap-4 p-6 sm:p-8 mt-2">
                {LOCATION_PERKS.map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                      <perk.icon className="w-4 h-4 text-[#C8A97E]" />
                    </div>
                    <span className="text-stone-300 text-sm font-light tracking-wide">
                      {perk.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
