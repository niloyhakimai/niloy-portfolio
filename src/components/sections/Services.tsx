"use client";
import React from "react";
import { motion } from "framer-motion";
import { MonitorSmartphone, Home, Wrench, Workflow, ArrowUpRight, Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// --- CUSTOM ANIMATED BACKGROUNDS ---

// 1. Landing Page Scroll Animation (Mini Website)
const ScrollingWebsiteMockup = () => (
  <div className="absolute inset-0 w-full h-full bg-neutral-900 overflow-hidden opacity-50 group-hover:opacity-80 transition-opacity duration-500">
     {/* Browser Bar */}
     <div className="h-6 bg-neutral-800 w-full flex items-center gap-1 px-3 z-10 relative border-b border-white/10">
        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
     </div>
     
     {/* Scrolling Content */}
     <motion.div 
        animate={{ y: [0, -120, 0] }} // Scroll Animation
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="w-full p-4 space-y-3"
     >
        {/* Hero Section Mock */}
        <div className="w-full h-24 rounded-lg bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/5 flex flex-col justify-center items-center gap-2">
            <div className="w-16 h-2 bg-white/20 rounded-full"></div>
            <div className="w-10 h-2 bg-white/10 rounded-full"></div>
            <div className="w-8 h-4 bg-blue-500/50 rounded mt-1"></div>
        </div>
        {/* Grid Mock */}
        <div className="grid grid-cols-2 gap-2">
            <div className="h-16 rounded-lg bg-neutral-800/50 border border-white/5"></div>
            <div className="h-16 rounded-lg bg-neutral-800/50 border border-white/5"></div>
        </div>
        {/* Text Mock */}
        <div className="space-y-1">
             <div className="w-full h-2 bg-neutral-800 rounded"></div>
             <div className="w-2/3 h-2 bg-neutral-800 rounded"></div>
        </div>
         {/* Footer Mock */}
        <div className="w-full h-10 bg-neutral-900 border-t border-white/5 mt-2"></div>
     </motion.div>
     
     {/* Overlay Gradient for Text Readability */}
     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
  </div>
);

// 2. n8n Workflow Animation
const N8nWorkflowBg = () => (
    <div className="absolute inset-0 w-full h-full bg-[#101010] overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity duration-500">
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Animated Connecting Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
             <motion.path 
                d="M 50 100 Q 150 100 250 50 T 450 100"
                fill="transparent"
                stroke="url(#gradient-line)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
             />
             <defs>
                <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#d946ef" stopOpacity="0" />
                    <stop offset="50%" stopColor="#d946ef" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
             </defs>
        </svg>

        {/* Nodes */}
        <div className="absolute top-[80px] left-[40px] z-10 flex flex-col items-center gap-1">
             <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
             </div>
             <span className="text-[8px] text-neutral-500 font-mono">Trigger</span>
        </div>

        <div className="absolute top-[30px] left-[240px] z-10 flex flex-col items-center gap-1">
             <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
             </div>
             <span className="text-[8px] text-neutral-500 font-mono">Sheets</span>
        </div>

        <div className="absolute top-[80px] right-[40px] z-10 flex flex-col items-center gap-1">
             <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
             </div>
             <span className="text-[8px] text-neutral-500 font-mono">Slack</span>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20" />
    </div>
)

// 3. Code Scanning/Diagnostics Animation
const CodeScannerBg = () => (
    <div className="absolute inset-0 bg-neutral-950 font-mono text-[10px] p-4 text-green-500/40 opacity-50 overflow-hidden">
        <div className="space-y-1">
            <p>&gt; initializing check...</p>
            <p>&gt; verifying smtp_server...</p>
            <p className="text-green-400">&gt; connection established</p>
            <p>&gt; scanning input fields...</p>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: [0, 1, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-2 h-4 bg-green-500 inline-block"
            />
        </div>
        {/* Scan Line */}
        <motion.div 
           animate={{ top: ["0%", "100%"] }}
           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           className="absolute left-0 w-full h-[2px] bg-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.5)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
    </div>
)


// --- MAIN COMPONENT ---

const Card = ({ className, children, background }: { className?: string; children: React.ReactNode; background?: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative rounded-3xl overflow-hidden border border-white/10 bg-black group hover:border-white/20 transition-all duration-500 min-h-[220px]",
        className
      )}
    >
      {/* 1. Background Animation Layer */}
      {background}

      {/* 2. Content Layer (z-index higher to stay on top) */}
      <div className="relative z-30 h-full p-6 flex flex-col justify-between">
        {children}
      </div>
      
      {/* 3. Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_at_center,rgba(255,255,255,0.05),transparent)] pointer-events-none z-20" />
    </motion.div>
  );
};

export function Services() {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="services">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:flex justify-between items-end">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
              What I <span className="text-neutral-500">Build</span>
            </h2>
            <p className="text-neutral-400 max-w-lg text-lg">
              Specialized automation & design services to scale your business.
            </p>
          </motion.div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]">
          
          {/* Card 1: Futuristic Landing Pages (With SCROLLING MOCKUP) */}
          <Card className="md:col-span-2" background={<ScrollingWebsiteMockup />}>
             <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 backdrop-blur-md border border-white/5">
                   <MonitorSmartphone size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Futuristic Landing Pages</h3>
                <p className="text-neutral-300 max-w-sm text-sm md:text-base drop-shadow-md">
                   I build high-performance websites using Next.js 14. Designed to convert visitors with smooth animations.
                </p>
             </div>
          </Card>

          {/* Card 2: Real Estate Systems (With CRM LIST UI) */}
          <Card className="md:row-span-2" background={
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-black opacity-80">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              </div>
          }>
             <div>
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 mb-4 backdrop-blur-md border border-white/5">
                    <Home size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Real Estate Systems</h3>
                <p className="text-neutral-400 text-sm mb-6">
                    Capture leads and instantly sync with CRM via n8n.
                </p>
             </div>

             {/* CRM List Visual */}
             <div className="flex-1 w-full flex flex-col gap-3 relative z-10">
                {[1, 2, 3].map((i) => (
                    <motion.div 
                        key={i} 
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-center gap-3 p-2 rounded-lg bg-neutral-800/80 border border-white/5 backdrop-blur-sm"
                    >
                        <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-[10px] text-neutral-400">#{i}</div>
                        <div className="space-y-1 flex-1">
                            <div className="w-12 h-2 bg-neutral-600 rounded-full"></div>
                            <div className="w-8 h-2 bg-neutral-700 rounded-full"></div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                    </motion.div>
                ))}
             </div>
          </Card>

          {/* Card 3: Form Diagnostics (With SCANNER ANIMATION) */}
          <Card className="group" background={<CodeScannerBg />}>
             <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 backdrop-blur-md border border-white/5">
                    <Wrench size={24} />
                </div>
                <ArrowUpRight className="text-neutral-500 group-hover:text-white transition-colors" />
             </div>
             <div>
                 <h3 className="text-xl font-bold text-white mb-2">Form Diagnostics</h3>
                 <p className="text-neutral-400 text-sm">
                    Fixing broken forms & SMTP errors. 100% reliable.
                 </p>
             </div>
          </Card>

          {/* Card 4: Automation (With n8n WORKFLOW ANIMATION) */}
          <Card className="md:col-span-2" background={<N8nWorkflowBg />}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 h-full relative z-30">
                <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4 backdrop-blur-md border border-white/5">
                        <Workflow size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Smart Automation</h3>
                    <p className="text-neutral-300 text-sm max-w-xs">
                        Connect Next.js forms to Google Sheets, Slack & Telegram automatically.
                    </p>
                </div>
                
                {/* Visual Label */}
                 <div className="hidden md:block px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs text-purple-400 font-mono animate-pulse">
                    Status: Active
                </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}