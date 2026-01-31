"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section className="relative min-h-[80vh] bg-black flex flex-col justify-center items-center overflow-hidden" id="contact">
      
      {/* 1. Background Animation Effects */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        
        {/* Available Badge */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/50 border border-white/10 backdrop-blur-md mb-8"
        >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-neutral-400">Response time: &lt; 1 hour</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500 tracking-tight mb-6"
        >
          Ready to Scale?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Stop losing leads to slow websites and manual work. <br className="hidden md:block" />
          Let's build a system that works while you sleep.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Primary Button (Fiverr) */}
          <a 
            href="https://www.fiverr.com/niloyhakimai" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3 font-bold text-black transition-all duration-300 hover:bg-neutral-200 hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            <span className="mr-2">Start Project on Fiverr</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
          </a>

          {/* Secondary Button (Direct Contact) */}
          <a 
            href="mailto:niloyhakim.ai@gmail.com" 
            className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-white backdrop-blur-md w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>
        </motion.div>
      </div>

      {/* --- FOOTER AREA --- */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Left: Brand & Copyright */}
            <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-white mb-1">Niloy H.</h3>
                <p className="text-xs text-neutral-500">© {new Date().getFullYear()} All rights reserved. Built with Next.js & n8n.</p>
            </div>

            {/* Right: Social Links */}
            <div className="flex gap-6">
                <SocialLink href="https://github.com/niloyhakimai" icon={<Github size={20} />} />
                <SocialLink href="https://www.linkedin.com/in/niloyhakimai" icon={<Linkedin size={20} />} />
                <SocialLink href="https://x.com/niloynakimai" icon={<Twitter size={20} />} />
                <SocialLink href="https://www.fiverr.com/niloyhakimai" icon={<MessageSquare size={20} />} label="Fiverr" />
            </div>
        </div>
      </div>
    </section>
  );
}

// Helper Component for Social Links
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label?: string }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noreferrer"
            className="text-neutral-500 hover:text-white transition-colors hover:scale-110 transform duration-200 flex items-center gap-2"
        >
            {icon}
            {label && <span className="text-xs font-bold hidden md:block">{label}</span>}
        </a>
    )
}