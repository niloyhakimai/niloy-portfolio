"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
  { name: "Services", link: "#services" },
  { name: "Work", link: "#projects" },
  { name: "Tech Stack", link: "#tech" },
  { name: "Contact", link: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      // Z-Index বাড়িয়ে [999] করা হয়েছে যাতে সবার উপরে থাকে
      className={cn(
        "fixed top-0 inset-x-0 z-[999] w-full border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-black/60 backdrop-blur-md py-4"
          : "border-transparent bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="relative z-[1000] flex items-center gap-2" onClick={() => window.scrollTo(0,0)}>
           <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white">
             N
           </div>
           <span className="text-xl font-bold text-white tracking-tight">Niloy H.</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors hover:scale-105"
            >
              {item.name}
            </Link>
          ))}
          
          <a
            href="https://www.fiverr.com/niloyhakimai"
            target="_blank"
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-neutral-200 transition flex items-center gap-1"
          >
            Hire Me <ArrowUpRight size={16} />
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[1000] text-white p-2"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // Z-index সমস্যা এড়াতে fixed এবং সর্বোচ্চ z-index দেওয়া হলো
            className="fixed inset-0 bg-black/95 z-[998] flex flex-col items-center justify-center gap-8 md:hidden backdrop-blur-xl h-screen w-screen"
          >
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-neutral-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <a
              href="https://www.fiverr.com/niloyhakimai"
              target="_blank"
              className="mt-4 px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
            >
              Hire on Fiverr
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 