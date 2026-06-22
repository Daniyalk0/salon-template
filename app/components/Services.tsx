"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

// --- Data Structure ---
const services = [
  {
    id: "hair-styling",
    title: "Hair Styling & Cuts",
    category: "Hair Care",
    description: "Precision cuts and bespoke styling tailored to enhance your natural features and personal aesthetic.",
    image: "/hairStyling.avif",
    classes: "md:col-span-2 lg:col-span-2 lg:row-span-2 h-[400px] lg:h-[624px]",
  },
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    category: "Makeup",
    description: "Flawless, long-lasting artistry to make you glow on your most important day.",
    image: "/bridalMakup.avif",
    classes: "col-span-1 h-[300px]",
  },
  {
    id: "luxury-facials",
    title: "Luxury Facials",
    category: "Skin Care",
    description: "Rejuvenating, custom treatments designed for a radiant, youthful complexion.",
    image: "/facials.avif",
    classes: "col-span-1 h-[300px]",
  },
  {
    id: "hair-coloring",
    title: "Coloring & Highlights",
    category: "Hair Care",
    description: "Expert color matching and advanced highlighting techniques for stunning dimension.",
    image: "/hairColoring.avif",
    classes: "col-span-1 h-[300px]",
  },
  {
    id: "nail-care",
    title: "Nail Care & Manicure",
    category: "Nails",
    description: "Sophisticated nail artistry and deeply relaxing hand & foot therapies.",
    image: "/manicure.avif",
    classes: "col-span-1 h-[300px]",
  },
  {
    id: "hair-spa",
    title: "Hair Spa Treatments",
    category: "Wellness",
    description: "Deep conditioning therapies formulated to restore your hair's vitality and natural shine.",
    image: "/hairSpa.avif",
    classes: "md:col-span-2 h-[300px]",
  },
  {
    id: "skin-care",
    title: "Skin Care Clinic",
    category: "Skin Care",
    description: "Advanced clinical skin care therapies delivering lasting, visible results.",
    image: "/skinCare.avif",
    classes: "col-span-1 h-[300px]",
  },
  {
    id: "grooming",
    title: "Expert Grooming",
    category: "Grooming",
    description: "Refined, classic grooming services designed for the modern individual.",
    image: "/grooming.avif",
    classes: "col-span-1 h-[300px]",
  },
];

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ServicesGallery() {
  return (
    <section className="relative md:py-20 bg-[#0A0A0A] text-white overflow-hidden">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        
        {/* Subtle glow matching the hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Premium Beauty Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-6 tracking-tight"
          >
            Exceptional Care, <br className="hidden sm:block" />
            <span className="font-serif italic text-[#D4AF37]">Tailored To You</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400 font-light leading-relaxed max-w-xl"
          >
            Experience a sanctuary of wellness and beauty. Our master stylists and estheticians use exclusive, high-performance products to deliver an unparalleled luxury experience.
          </motion.p>
        </div>

        {/* Asymmetrical Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 grid-flow-dense"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={itemVariants}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-[#0A0A0A] border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)] ${service.classes}`}
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              {/* Gradient Overlay (Darkened for text contrast) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content Container */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                <div className="flex justify-between items-end gap-4">
                  
                  {/* Text Content */}
                  <div className="flex-1 overflow-hidden">
                    <span className="inline-block px-3 py-1 mb-4 text-[10px] font-semibold text-white tracking-widest uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                      {service.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-light text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Animated Description Reveal */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                      <p className="text-zinc-300 text-sm overflow-hidden mt-0 group-hover:mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Elegant Arrow Interaction */}
                  <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500 transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                  </div>
                  
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA Area */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 lg:mt-28 flex flex-col items-center text-center px-4 relative z-20"
        >
          <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37]/50 to-transparent mb-8" />
          <h3 className="text-3xl font-light text-white mb-4">Ready For Your Transformation?</h3>
          <p className="text-zinc-400 font-light mb-8 max-w-md">
            Experience premium salon services delivered by beauty professionals who understand your unique style.
          </p>
          
          
          <motion.button 
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 hover:border-[#D4AF37] text-white rounded-full font-medium transition-all duration-500"
          >
            <div className="absolute inset-0 w-0 bg-[#D4AF37] transition-all duration-500 ease-out group-hover:w-full z-0" />
            <span className="relative z-10 tracking-wider text-sm uppercase transition-colors duration-500 group-hover:text-black">
              View All Services
            </span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-all duration-500 group-hover:text-black group-hover:translate-x-1 text-[#D4AF37]" />
          </motion.button>
        </motion.div> */}

      </div>
    </section>
  );
}