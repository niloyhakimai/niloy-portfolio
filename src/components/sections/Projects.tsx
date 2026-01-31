"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, ExternalLink } from "lucide-react";

// --- PROJECT DATA ---
// NOTE: Make sure these files exist in your 'public' folder!
const allProjects = [
  {
    id: 1,
    title: "Cyber Ninja Gaming Hero",
    category: "3D Interaction & Parallax",
    description: "A high-performance gaming landing page featuring mouse-parallax effects, 3D character tilting, and a futuristic neon aesthetic.",
    image: "/gaming.png",
    tech: ["Next.js 14", "Framer Motion", "3D Tilt"],
    link: "https://gaming-hero.vercel.app",
    github: "https://github.com/niloyhakimai/gaming-hero",
    gradient: "from-red-500/20 to-purple-600/20",
  },
  {
    id: 2,
    title: "Pro Sports Gear",
    category: "E-Commerce Landing",
    description: "Dynamic landing page for a sports brand with smooth scroll animations and product showcases. Optimized for conversion.",
    image: "/sports.png",
    tech: ["React", "Tailwind", "GSAP"],
    link: "https://gaming-hero-wjhq.vercel.app",
    github: "https://github.com/niloyhakimai/sports-gear",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "EstateFlow Lead Capture System",
    category: "Real Estate Automation",
    description: "Automated lead capture system. When a client fills a form, data is instantly sent to Google Sheets and the agent gets a WhatsApp alert.",
    image: "/estate.png",
    tech: ["Next.js", "n8n", "Webhooks"],
    link: "#",
    github: "#",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: 4,
    title: "FitLife Gym",
    category: "Service Business UI",
    description: "Modern gym membership landing page with pricing tables, trainer profiles, and a booking system integrated with Calendar API.",
    image: "/gym.png",
    tech: ["Next.js", "Shadcn UI", "Calendly"],
    link: "https://fit-life-gym-zeta.vercel.app",
    github: "https://github.com/niloyhakimai/fitLife-Gym",
    gradient: "from-emerald-500/20 to-green-500/20",
  },
  {
    id: 5,
    title: "n8n Workflow Engine",
    category: "Backend Automation",
    description: "Complex automation workflows connecting Stripe payments to Discord notifications and Slack alerts. No manual data entry required.",
    image: "/n8n.png",
    tech: ["n8n", "Node.js", "API Integrations"],
    link: "#",
    github: "#",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 6,
    title: "React Form Diagnostics",
    category: "SaaS Tool",
    description: "A debugging tool that fixes critical email delivery failures in contact forms. Implements Zod validation for 100% reliability.",
    image: "/form.png",
    tech: ["React", "Zod", "EmailJS"],
    link: "#",
    github: "#",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
  // --- HIDDEN PROJECTS ---
  {
    id: 7,
    title: "Sonic Audio Accessories",
    category: "Product Showcase",
    description: "Premium headphone landing page with scroll-triggered product breakdown and immersive audio visualization effects.",
    image: "/headphone.png",
    tech: ["Next.js", "Three.js", "Tailwind"],
    link: "https://sonic-audio-seven.vercel.app",
    github: "https://github.com/niloyhakimai/sonic-audio",
    gradient: "from-gray-500/20 to-slate-500/20",
  },
  {
    id: 8,
    title: "Energy Drink 3D",
    category: "3D Product Design",
    description: "Interactive energy drink showcase where the can rotates based on scroll position. Features vibrant colors and energetic animations.",
    image: "/drink.png",
    tech: ["Next.js", "Spline 3D", "Framer Motion"],
    link: "https://energy-drink-taupe.vercel.app",
    github: "https://github.com/niloyhakimai/sports-gear.git",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export function Projects() {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreProjects = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="projects">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Selected <span className="text-neutral-500">Work</span>
          </h2>
          <p className="text-neutral-400 max-w-lg text-lg">
            Projects that showcase speed, automation, and pixel-perfect design.
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <AnimatePresence>
            {allProjects.slice(0, visibleCount).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col gap-4"
              >
                {/* --- BROWSER WINDOW MOCKUP --- */}
                <div className="relative w-full aspect-[4/3] rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] group-hover:-translate-y-2">
                  
                  {/* Browser Header */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2 z-20 backdrop-blur-md">
                      <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm" />
                      <div className="ml-4 h-5 rounded-full bg-white/5 border border-white/5 w-full max-w-[150px] animate-pulse opacity-50 hidden md:block" />
                  </div>

                  {/* IMAGE AREA */}
                  <div className="relative w-full h-full pt-10 bg-neutral-900 group-hover:scale-105 transition-transform duration-700 ease-out">
                      
                      {/* ✅ REAL IMAGE ENABLED */}
                      <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" 
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                          <a href={project.link} className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform">
                              <ExternalLink size={20} />
                          </a>
                          <a href={project.github} className="p-3 rounded-full bg-neutral-800 text-white border border-white/20 hover:scale-110 transition-transform">
                              <Github size={20} />
                          </a>
                      </div>
                  </div>
                </div>

                {/* --- DETAILS --- */}
                <div className="px-2">
                  <div className="flex justify-between items-start mb-2">
                      <div>
                          <span className={`text-xs font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r ${project.gradient} mb-1 block`}>
                              {project.category}
                          </span>
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                              {project.title}
                          </h3>
                      </div>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2 h-[40px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-medium text-neutral-300 bg-neutral-900 border border-white/10 px-2.5 py-1 rounded-md group-hover:border-white/20 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* SEE MORE BUTTON */}
        {visibleCount < allProjects.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 flex justify-center"
          >
            <button 
              onClick={showMoreProjects}
              className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              See More Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}