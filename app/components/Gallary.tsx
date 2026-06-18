"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Clock, User, Award, Heart, ShieldCheck, Star } from 'lucide-react';

// --- Data Structure ---
const transformations = [
  {
    id: "hero-transformation",
    category: "Signature Balayage & Styling",
    title: "The Ultimate Brunette to Lived-In Blonde",
    story: "A complete color correction and structural repair session. We safely lifted the client's hair over multiple hours, incorporating a custom bonding treatment to maintain hair integrity, finishing with a seamless blended balayage.",
    time: "4.5 Hours",
    stylist: "Elena V. (Master Colorist)",
    beforeImg: "https://images.unsplash.com/photo-1554519880-ffe46861d570?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    afterImg: "https://images.unsplash.com/photo-1629397685944-7073f5589754?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isHero: true,
  },
  {
    id: "trans-2",
    category: "Bridal Makeover",
    title: "Ethereal Wedding Day Glamour",
    story: "Transitioned from a natural, everyday look to a breathtaking bridal glow. We focused on skin prep, airbrush foundation for longevity, and a soft romantic updo to complement her gown's neckline.",
    time: "2.5 Hours",
    stylist: "Sophia M. (Bridal Specialist)",
    // beforeImg: "https://images.unsplash.com/photo-15素... wait, let's use reliable URLs",
    // beforeImg: "https://images.unsplash.com/photo-15素95476108010-b4d1f10d5e43?q=80&w=1000&auto=format&fit=crop", // placeholder adaptation
    beforeImg: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1000&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1549236177-77e8271c34b6?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isHero: false,
  },
  {
    id: "trans-3",
    category: "Hair Restoration",
    title: "From Damaged to Liquid Silk",
    story: "Revived severely heat-damaged hair using our luxury keratin smoothing therapy and a precision blunt cut to remove split ends while preserving maximum length.",
    time: "3 Hours",
    stylist: "David K. (Texture Expert)",
    beforeImg: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop",
    isHero: false,
  }
];

// --- Stats Data ---
const stats = [
  { icon: Heart, value: "5,000+", label: "Happy Clients" },
  { icon: Star, value: "98%", label: "Satisfaction Rate" },
  { icon: Clock, value: "10+ Yrs", label: "Luxury Experience" },
  { icon: Award, value: "15+", label: "Industry Awards" },
];

export default function TransformationsSection() {
  return (
    <section className="relative py-24 bg-[#0A0A0A] text-white overflow-hidden">
      
      {/* Subtle Background Textures */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Real Client Results
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-6 tracking-tight"
          >
            Transformations That <br className="hidden sm:block" />
            <span className="font-serif italic text-[#D4AF37]">Speak For Themselves</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400 font-light leading-relaxed max-w-xl"
          >
            Every transformation is crafted with precision, creativity, and unwavering attention to detail. Witness the artistry behind our luxury makeovers.
          </motion.p>
        </div>

        {/* Transformations Gallery */}
        <div className="flex flex-col gap-32 lg:gap-48">
          {transformations.map((item, index) => {
            
            // Layout Logic
            const isHero = item.isHero;
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col gap-12 lg:gap-16 ${
                  isHero ? 'lg:flex-row' : (isEven ? 'lg:flex-row' : 'lg:flex-row-reverse')
                } items-center`}
              >
                
                {/* Text Content Block */}
                <div className={`w-full ${isHero ? 'lg:w-5/12' : 'lg:w-4/12'} flex flex-col items-start`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-px bg-[#D4AF37]/50" />
                    <span className="text-xs font-semibold text-[#D4AF37] tracking-widest uppercase">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className={`font-light text-white leading-tight mb-6 ${isHero ? 'text-4xl lg:text-5xl' : 'text-3xl lg:text-4xl'}`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-zinc-400 font-light leading-relaxed mb-8">
                    {item.story}
                  </p>

                  <div className="flex flex-col gap-4 w-full p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                      <Clock className="w-4 h-4 text-[#D4AF37]" />
                      <span className="font-medium text-white">Time Taken:</span> {item.time}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                      <User className="w-4 h-4 text-[#D4AF37]" />
                      <span className="font-medium text-white">Curated By:</span> {item.stylist}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                      <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                      <span className="font-medium text-white">Client Satisfaction:</span> 100%
                    </div>
                  </div>
                </div>

                {/* Images Showcase Block */}
                <div className={`w-full ${isHero ? 'lg:w-7/12' : 'lg:w-8/12'} relative`}>
                  
                  {isHero ? (
                    // HERO LAYOUT: Overlapping Editorial Style
                    <div className="relative h-[600px] lg:h-[700px] w-full flex items-center justify-center">
                      {/* Before Image (Back/Left) */}
                      <motion.div 
                        whileHover={{ zIndex: 30, scale: 1.02 }}
                        className="absolute left-0 top-10 w-3/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl border border-white/5 grayscale-[0.8] contrast-75 brightness-75 transition-all duration-700 ease-out hover:grayscale-0 hover:contrast-100 hover:brightness-100 z-10"
                      >
                        <Image src={item.beforeImg} alt="Before transformation" fill className="object-cover" />
                        <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium tracking-widest text-zinc-300 uppercase">
                          Before
                        </div>
                      </motion.div>

                      {/* After Image (Front/Right) */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="absolute right-0 bottom-10 w-2/3 h-[90%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-20 transition-transform duration-700 ease-out"
                      >
                        <Image src={item.afterImg} alt="After transformation" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-6 right-6 px-4 py-1.5 bg-[#D4AF37]/90 backdrop-blur-md border border-[#D4AF37] rounded-full text-xs font-bold tracking-widest text-black uppercase shadow-lg">
                          After
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    // ZIG-ZAG LAYOUT: Side by side Split
                    <div className="grid grid-cols-2 gap-4 h-[400px] lg:h-[500px]">
                      {/* Before Image */}
                      <div className="relative rounded-2xl overflow-hidden border border-white/5 grayscale-[0.6] contrast-75 brightness-75 group transition-all duration-500 hover:grayscale-0 hover:contrast-100 hover:brightness-100">
                        <Image src={item.beforeImg} alt="Before" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-medium tracking-widest text-zinc-300 uppercase">
                          Before
                        </div>
                      </div>

                      {/* After Image */}
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <Image src={item.afterImg} alt="After" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-4 right-4 px-3 py-1 bg-[#D4AF37]/90 backdrop-blur-md border border-[#D4AF37] rounded-full text-[10px] font-bold tracking-widest text-black uppercase shadow-lg">
                          After
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Luxury Trust Statistics Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 pt-16 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center px-4">
                <stat.icon className="w-6 h-6 text-[#D4AF37] mb-4" />
                <h4 className="text-3xl font-light text-white mb-2">{stat.value}</h4>
                <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}