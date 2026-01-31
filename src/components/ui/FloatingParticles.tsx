"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const FloatingParticles = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // এই অংশটুকু শুধু ব্রাউজারে রান হবে, তাই Hydration Error হবে না
    const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      width: Math.random() * 3 + 1 + "px",
      height: Math.random() * 3 + 1 + "px",
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      opacity: Math.random() * 0.5 + 0.2,
      moveY: Math.random() * -200 - 50,
      moveX: (Math.random() - 0.5) * 100,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 5,
    }));
    
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          style={{
            width: p.width,
            height: p.height,
            top: p.top,
            left: p.left,
            // opacity এখানে ইনিশিয়াল স্টাইল হিসেবে দেওয়া যাবে না, এনিমেশনে দিতে হবে
          }}
          animate={{
            y: [0, p.moveY],
            x: [0, p.moveX],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};