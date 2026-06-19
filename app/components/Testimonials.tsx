"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// --- MOCK DATA ---
const REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    service: "Hair Color Transformation",
    text: "The team exceeded my expectations. From consultation to final styling, every detail felt professional and luxurious. My hair has never looked this vibrant and healthy.",
  },
  {
    id: 2,
    name: "Emily Chen",
    service: "Bridal Makeup & Hair",
    text: "They made my wedding morning an absolute dream. The serene environment and flawless execution left me feeling confident and beautiful. True masters of their craft.",
  },
  {
    id: 3,
    name: "Jessica Smith",
    service: "Luxury Facial",
    text: "A completely transcendent experience. The products used were exquisite, and the ambiance immediately melted my stress away. My skin is absolutely glowing.",
  },
  {
    id: 4,
    name: "Amanda Davis",
    service: "Signature Balayage",
    text: "I am incredibly particular about my blonde, but they nailed the exact tone I wanted. The seamless blend and attention to hair integrity was unmatched.",
  },
  {
    id: 5,
    name: "Rachel Moore",
    service: "Precision Haircut",
    text: "You can instantly tell you are in the hands of experts. The consultation was thorough, and the cut falls perfectly into place even weeks later.",
  },
  {
    id: 6,
    name: "Lauren Taylor",
    service: "Keratin Smoothing",
    text: "Life-changing treatment. The salon feels incredibly exclusive, yet the staff is warm and welcoming. My frizz is completely gone and my mornings are effortless.",
  },
  {
    id: 7,
    name: "Michelle White",
    service: "Spa Pedicure",
    text: "The ultimate indulgence. From the champagne upon arrival to the meticulous attention to detail during the service, it is pure luxury from start to finish.",
  },
  {
    id: 8,
    name: "Sophia Martinez",
    service: "Color Correction",
    text: "They fixed a disaster from another salon with so much grace. They took the time to restore my hair's health while delivering a breathtaking final color.",
  },
];

const METRICS = [
  { value: "5000+", label: "Happy Clients" },
  { value: "4.9", label: "Average Rating" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Years Experience" },
];

const AUTOPLAY_INTERVAL = 6000;

export default function DarkTestimonials() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Handlers for navigation
  const nextReview = () => setIndex((prev) => (prev + 1) % REVIEWS.length);
  const prevReview = () => setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  // Auto-play logic
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextReview, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isHovered, index]);

  // Framer Motion Variants for Blur-to-Sharp Upward Animation
  const variants = {
    initial: { opacity: 0, y: 30, filter: "blur(12px)" },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const} 
    },
    exit: { 
      opacity: 0, 
      y: -30, 
      filter: "blur(12px)", 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
    }
  };

  // Swipe gesture handling
  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) nextReview();
    if (info.offset.x > swipeThreshold) prevReview();
  };

  return (
    <section className="relative py-16 lg:py-32 bg-[#0A0A0A] overflow-hidden selection:bg-[#C8A97E]/30">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#C8A97E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-2xl mb-12"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            {/* Custom SVG for Google 'G' to keep it minimal and premium */}
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-[11px] uppercase tracking-widest text-stone-300 font-medium">
              Google Reviews
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-stone-400 text-sm md:text-base leading-relaxed font-light">
            Trusted by thousands of clients who value exceptional service, attention to detail, and transformative results.
          </p>
        </motion.div>

        {/* GOOGLE RATING SUMMARY */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C8A97E] text-[#C8A97E] drop-shadow-[0_0_8px_rgba(200,169,126,0.4)]" />
            ))}
          </div>
          <p className="text-white font-serif text-xl mb-1">4.9/5 Average Rating</p>
          <p className="text-stone-500 text-xs tracking-wider uppercase">Based on 1,200+ Google Reviews</p>
        </motion.div>

        {/* CAROUSEL WRAPPER */}
        <div 
          className="relative w-full max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Card Container - Mode="wait" ensures old card fades out completely before new card fades in */}
          <div className="relative min-h-[340px] md:min-h-[280px] w-full flex justify-center items-center perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="absolute w-full cursor-grab active:cursor-grabbing"
              >
                <div className="relative bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden group transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_20px_60px_rgba(200,169,126,0.08)]">
                  
                  {/* Subtle Background Quote Icon */}
                  <Quote className="absolute -top-6 -left-6 w-32 h-32 text-white/[0.02] transform -scale-x-100 group-hover:scale-105 group-hover:rotate-6 transition-transform duration-700 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                         <motion.div 
                          key={i} 
                          initial={{ opacity: 0, scale: 0.5 }} 
                          animate={{ opacity: 1, scale: 1 }} 
                          transition={{ delay: i * 0.05 + 0.2 }}
                         >
                           <Star className="w-4 h-4 fill-[#C8A97E] text-[#C8A97E]" />
                         </motion.div>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-md md:text-2xl font-light text-stone-200 leading-relaxed mb-8 max-w-3xl">
                      "{REVIEWS[index].text}"
                    </p>

                    {/* Author Details */}
                    <div className="flex flex-col items-center gap-1.5">
                      <h4 className="text-white font-medium tracking-wide">
                        {REVIEWS[index].name}
                      </h4>
                      <p className="text-[#C8A97E] text-xs uppercase tracking-widest font-medium">
                        {REVIEWS[index].service}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CAROUSEL CONTROLS */}
          <div className="flex items-center justify-center gap-8 mt-12">
            
            {/* Prev Button */}
            <button 
              onClick={prevReview}
              className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-[#C8A97E]/30 hover:shadow-[0_0_20px_rgba(200,169,126,0.15)] transition-all duration-300 active:scale-95 focus:outline-none"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* Dots / Progress Indicator */}
            <div className="flex items-center gap-3">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className="relative h-1.5 rounded-full overflow-hidden transition-all duration-500 ease-out focus:outline-none"
                  style={{ width: i === index ? "32px" : "8px" }}
                >
                  <div className={`absolute inset-0 rounded-full transition-colors duration-500 ${i === index ? 'bg-white/20' : 'bg-white/10'}`} />
                  {i === index && !isHovered && (
                    <motion.div
                      key={`progress-${index}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
                      className="absolute top-0 left-0 h-full bg-[#C8A97E] rounded-full"
                    />
                  )}
                  {i === index && isHovered && (
                    <div className="absolute top-0 left-0 h-full w-full bg-[#C8A97E] rounded-full opacity-50" />
                  )}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button 
              onClick={nextReview}
              className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-[#C8A97E]/30 hover:shadow-[0_0_20px_rgba(200,169,126,0.15)] transition-all duration-300 active:scale-95 focus:outline-none"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>

          </div>
        </div>

        {/* TRUST METRICS ROW */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full max-w-4xl mx-auto mt-16 border-t border-white/[0.08] pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center"
        >
          {METRICS.map((metric, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-2xl md:text-3xl font-serif text-white">
                {metric.value}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-stone-500 font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}