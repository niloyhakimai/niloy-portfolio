"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Zap, Layers, ShieldCheck, Code2, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const stack = [
  { name: "Next.js 14", icon: Globe, color: "text-white" },
  { name: "React", icon: Cpu, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: Code2, color: "text-cyan-400" },
  { name: "Framer Motion", icon: Zap, color: "text-yellow-400" },
  { name: "n8n Automation", icon: Layers, color: "text-orange-400" },
  { name: "Zod Validation", icon: ShieldCheck, color: "text-emerald-400" },
  { name: "TypeScript", icon: Code2, color: "text-blue-500" },
  { name: "Vercel", icon: Database, color: "text-white" },
];

const loopedStack = [...stack, ...stack, ...stack];

export function TechStack() {
  return (
    // FIX: id="tech" যোগ করা হয়েছে
    <section id="tech" className="py-20 bg-black border-t border-white/10 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10 mb-10">
        <p className="text-neutral-500 uppercase tracking-[0.2em] text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-200">
          My Innovation Arsenal
        </p>
      </div>

      <div className="relative flex w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-6 md:gap-12 flex-nowrap px-4"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {loopedStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group relative flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-neutral-900/30 backdrop-blur-md hover:bg-white/5 hover:border-white/30 transition-all duration-300 cursor-default min-w-max"
            >
              <div className={cn("bg-white/5 p-2 rounded-full group-hover:bg-white/10 transition-colors", tech.color)}>
                <tech.icon size={18} />
              </div>
              
              <span className="text-neutral-400 font-medium text-sm md:text-base group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}