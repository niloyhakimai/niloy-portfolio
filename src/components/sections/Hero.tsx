"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { FloatingParticles } from "@/components/ui/FloatingParticles";

// --- Components ---
const FiverrIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor"><path d="M23.954 12.459c-.002-1.777-1.386-3.32-3.116-3.47h.001l-1.135.003c-.438-.003-.734.179-1.012.422l-1.46 1.265c-.309.264-.384.325-.595.317-.178-.007-.333-.093-.514-.243l-1.628-1.358c-.274-.227-.672-.413-1.141-.385l-.548.014c-.302.008-.53.047-.754.121-.492.162-.807.45-1.032.776l-1.518 2.174c-.191.275-.237.372-.175.554.06.178.253.33.493.491l1.153.768c.226.15.453.237.681.26.228.023.472-.045.738-.192.315-.174.653-.417 1.016-.723.315-.266.652-.432 1.013-.49.363-.06.739.012 1.131.222l.294.16c.589.326.94.64 1.044 1.035.105.396-.029.873-.402 1.434l-1.563 2.37c-.314.476-.427.78-.338 1.117.088.337.398.662.931.976l1.237.745c.606.364 1.11.491 1.518.384.408-.107.702-.399.971-.867l1.118-1.945c.268-.467.562-.816.963-1.04.399-.223.89-.291 1.472-.202l.593.09c.491.076.893.245 1.206.51.314.264.501.597.563 1.004l.134 1.088c.061.407.236.745.524 1.014.289.269.679.417 1.172.447l1.743.104c.607.036 1.126-.088 1.557-.376.431-.287.728-.671.888-1.155.16-.484.188-1.062.084-1.738l-.174-1.018c-.072-.424-.177-.782-.315-1.076a2.696 2.696 0 0 0-.626-.919l-.818-.869c-.275-.291-.424-.642-.447-1.056a1.723 1.723 0 0 1 .242-.987c.174-.313.463-.609.87-.887l.275-.184c.515-.346.865-.61 1.049-.793.185-.183.295-.403.328-.663.033-.259-.018-.562-.153-.91z"/></svg>
);

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // --- 1. SUPER SMOOTH PHYSICS BASED MOTION ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring 
  // stiffness: 
  // damping: 
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  // Mouse Move Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // --- 2. 3D TRANSFORMS ---
  // Text Tilt (বিপরীত দিকে ঘুরবে)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  // Image Tilt (একটু বেশি ঘুরবে)
  const imgRotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const imgRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Background Parallax (উল্টো দিকে মুভ করবে)
  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], ["-30px", "30px"]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], ["-30px", "30px"]);


  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-[90vh] w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased relative overflow-hidden perspective-1000"
      style={{ perspective: "1000px" }} // 3D গভীরতার জন্য জরুরি
    >
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* Grid Pattern with Parallax */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" 
      />
      
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Glow Blobs */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />


      {/* --- CONTENT CONTAINER --- */}
      <div className="p-4 max-w-7xl mx-auto relative z-20 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 pt-20 md:pt-0">
        
        {/* LEFT SIDE: Text Content */}
        <motion.div 
            style={{ rotateX, rotateY }} // Apply 3D Tilt here
            className="flex-1 text-center md:text-left transform-style-3d will-change-transform"
        >
            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 mb-6 backdrop-blur-md translate-z-10">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Projects
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-4 leading-tight translate-z-20">
              Hi, I'm Niloy. 👋 <br />
              I Build <span className="text-blue-500">Automated</span> Systems.
            </h1>

            <p className="text-neutral-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 translate-z-10">
              I help Real Estate Agents & Startups respond to leads in seconds, not hours. 
              Expert in <strong>Next.js</strong> & <strong>n8n Automation</strong>.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-8 translate-z-20">
                <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                   View Portfolio <ArrowRight size={18} />
                </a>
                <a href="https://www.fiverr.com/niloyhakimai" target="_blank" className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition flex items-center justify-center gap-2 backdrop-blur-md">
                   <FiverrIcon className="w-5 h-5" />
                   Book on Fiverr
                </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center justify-center md:justify-start gap-5 mb-8 translate-z-10">
               <SocialIcon href="https://github.com/niloyhakimai" icon={<Github size={20} />} />
               <SocialIcon href="https://www.linkedin.com/in/niloyhakimai" icon={<Linkedin size={20} />} />
               <SocialIcon href="https://x.com/niloynakimai" icon={<Twitter size={20} />} />
               <SocialIcon href="mailto:niloyhakim.ai@gmail.com" icon={<Mail size={20} />} />
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center md:justify-start gap-6 text-sm text-neutral-500 border-t border-white/10 pt-6 translate-z-10">
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>100% Job Success</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>&lt; 1 Hr Response Time</span>
                </div>
            </div>
        </motion.div>

        {/* RIGHT SIDE: Photo Container */}
        <motion.div 
            style={{ rotateX: imgRotateX, rotateY: imgRotateY }} // Stronger Tilt for Image
            className="flex-1 relative flex justify-center md:justify-end transform-style-3d px-4 md:px-0 will-change-transform"
        >
            <div className="relative group cursor-pointer">
                {/* Background Static Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/30 blur-[100px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-blue-500/40 group-hover:scale-110 -z-10" />
                
                {/* 3D Container */}
                <div className="relative z-10 transform-style-3d">
                    
                    {/* Rotating Gradient Ring */}
                    <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 -m-[3px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-emerald-500 blur-[3px] z-10 opacity-80 group-hover:opacity-100 transition-opacity"
                    />

                    {/* Main Image */}
                    {/* translateZ ব্যবহার করা হচ্ছে যাতে মনে হয় ছবিটা ভেসে আছে */}
                    <div className="relative z-20 w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full p-1.5 bg-black"
                         style={{ transform: "translateZ(20px)" }}
                    >
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 relative">
                            <img 
                                src="/profile.png" 
                                alt="Niloy H"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        {/* Fiverr Badge (Popping Out) */}
                        <div className="absolute bottom-8 -left-4 md:right-auto md:-left-8 bg-neutral-900/90 border border-white/20 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-30 backdrop-blur-md group-hover:scale-105 transition-transform duration-300"
                             style={{ transform: "translateZ(60px)" }} // ব্যাজটি ছবির চেয়েও সামনে থাকবে
                        >
                            <div className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </div>
                            <div>
                                <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Available on</p>
                                <p className="text-base font-bold text-white flex items-center gap-1">
                                    <FiverrIcon className="w-4 h-4" /> Fiverr
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
}

// Social Icon
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 backdrop-blur-md"
        >
            {icon}
        </a>
    );
}