"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", id: "" },
  // { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Gallery", id: "gallery" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

export default function LuxuryNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Framer Motion Variants for Mobile Menu
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as any },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-[#FDFBF7]/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.04)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        {/* Thin Gold Accent Line on Scroll */}
        <div
          className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/30 to-transparent transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="relative z-50 flex items-center gap-1 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center"
            >
              <h1 className={`font-serif text-2xl md:text-3xl tracking-widest ${isScrolled ? "text-stone-900" : "text-stone-300"} uppercase`}>
                Lumière
              </h1>
              <span className="w-1.5 h-1.5 bg-[#C8A97E] rounded-full ml-1.5 mt-2 shadow-[0_0_8px_rgba(200,169,126,0.8)]" />
            </motion.div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 py-2 ${isScrolled ? "text-stone-900" : "text-stone-400"} hover:text-[#C8A97E]`}
              >
                {link.name}
                {/* Animated Underline */}
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="desktop-nav-underline"
                    className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#C8A97E]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden lg:block relative z-50">
            <Link href="https://wa.me/15551234567">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={`px-7 py-3 rounded-full text-white cursor-pointer text-xs uppercase tracking-widest font-medium shadow-[0_4px_14px_rgba(200,169,126,0.3)] hover:shadow-[0_6px_20px_rgba(200,169,126,0.5)] transition-shadow duration-300 ${isScrolled ? "bg-gradient-to-r from-[#c2a377] to-[#efc88c] " : "bg-gradient-to-r from-[#C8A97E] to-[#E3CBA8] "}`}
              >
                Book Appointment
              </motion.button>
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2 text-stone-900 focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-stone-900" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6 text-stone-900" strokeWidth={1.5} />
              )}
            </motion.div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-xl lg:hidden flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8 w-full px-6">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.name} variants={mobileLinkVariants}>
                  <Link
                    href={link?.id}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-3xl text-stone-800 hover:text-[#C8A97E] transition-colors duration-300 tracking-wide"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div variants={mobileLinkVariants} className="mt-8 w-full max-w-xs">
                <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full py-4 rounded-full bg-gradient-to-r from-[#C8A97E] to-[#E3CBA8] text-white text-sm uppercase tracking-widest font-medium shadow-[0_4px_20px_rgba(200,169,126,0.3)]">
                    Book Appointment
                  </button>
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Footer / Decorative Element */}
            <motion.div 
              variants={mobileLinkVariants}
              className="absolute bottom-12 flex flex-col items-center gap-4"
            >
               <span className="w-px h-12 bg-gradient-to-b from-[#C8A97E] to-transparent opacity-50" />
               <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
                 Luxury Salon & Spa
               </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}