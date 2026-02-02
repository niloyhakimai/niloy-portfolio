"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";

// --- FACES (SVG Components) ---
const FaceNormal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full overflow-visible">
    <circle cx="50" cy="50" r="45" fill="#3B82F6" className="animate-pulse-slow"/>
    <rect x="30" y="35" width="40" height="30" rx="5" fill="white"/>
    <circle cx="40" cy="45" r="5" fill="#1E40AF"/>
    <circle cx="60" cy="45" r="5" fill="#1E40AF"/>
    <path d="M 40 55 Q 50 65 60 55" stroke="#1E40AF" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <rect x="45" y="25" width="10" height="10" fill="#60A5FA"/>
    <circle cx="50" cy="25" r="3" fill="#EF4444"/>
  </svg>
);

const FaceThinking = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full overflow-visible">
    <circle cx="50" cy="50" r="45" fill="#8B5CF6" className="animate-pulse-slow"/>
    <rect x="30" y="35" width="40" height="30" rx="5" fill="white"/>
    <circle cx="40" cy="40" r="5" fill="#1E40AF"/>
    <circle cx="60" cy="40" r="5" fill="#1E40AF"/>
    <circle cx="50" cy="60" r="3" fill="#1E40AF"/>
    <rect x="45" y="25" width="10" height="10" fill="#A78BFA"/>
    <path d="M 45 15 L 50 25 L 55 15" stroke="#FCD34D" strokeWidth="2" fill="none" className="animate-bounce"/>
  </svg>
);

const FaceError = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full overflow-visible">
    <circle cx="50" cy="50" r="45" fill="#EF4444" className="animate-pulse-slow"/>
    <rect x="30" y="35" width="40" height="30" rx="5" fill="white"/>
    <line x1="35" y1="40" x2="45" y2="50" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round"/>
    <line x1="35" y1="50" x2="45" y2="40" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round"/>
    <line x1="55" y1="40" x2="65" y2="50" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round"/>
    <line x1="55" y1="50" x2="65" y2="40" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round"/>
    <path d="M 35 65 Q 42 55 50 65 Q 58 55 65 65" stroke="#1E40AF" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
);

// --- Typing Effect ---
const TypingEffect = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    setDisplayedText("");
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20); // Faster typing
    return () => clearInterval(interval);
  }, [text]);
  return <>{displayedText}</>;
};

// --- Space Background Component (Performance Optimized) ---
const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars Layer 1 (Small & Slow) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 animate-slide-down"></div>
      
      {/* Moving Stars Effect using CSS Gradients (No heavy JS) */}
      <motion.div 
        animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-30"
        style={{
            backgroundImage: 'radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0))',
            backgroundSize: '200px 200px'
        }}
      />
    </div>
  );
};

type Message = { id: number; text: string; sender: "user" | "bot"; };
type BotMood = "normal" | "thinking" | "error";

export function CartoonChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [botMood, setBotMood] = useState<BotMood>("normal");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm Niloy's AI. Ready to explore? 🚀", sender: "bot" }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botMood]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue("");
    setMessages((prev) => [...prev, { id: Date.now(), text: userText, sender: "user" }]);
    setBotMood("thinking");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, { id: Date.now() + 1, text: data.reply, sender: "bot" }]);
        setBotMood("normal");
      } else {
        throw new Error("API Error");
      }
    } catch (error) {
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: "Connection lost in space! 🌌 Try again.", sender: "bot" }]);
      setBotMood("error");
      setTimeout(() => setBotMood("normal"), 3000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  const renderFace = () => {
    switch (botMood) {
      case "normal": return <FaceNormal />;
      case "thinking": return <FaceThinking />;
      case "error": return <FaceError />;
      default: return <FaceNormal />;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end font-sans">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            // Compact Size & Space Theme Colors
            className="mb-3 w-[calc(100vw-32px)] md:w-[320px] max-h-[500px] flex flex-col bg-[#0a0a16] border border-blue-500/30 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden origin-bottom-right relative"
          >
            {/* Space Background Layer */}
            <SpaceBackground />

            {/* Header */}
            <div className={`p-3 flex items-center justify-between relative z-10 border-b border-white/5 transition-colors duration-500 ${
              botMood === 'error' ? 'bg-red-900/40' : 
              botMood === 'thinking' ? 'bg-indigo-900/40' : 
              'bg-blue-900/20'
            }`}>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/5 rounded-full p-0.5 backdrop-blur-sm border border-white/10">
                        {renderFace()}
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-xs flex items-center gap-1">
                          Niloy's AI <Sparkles size={10} className="text-cyan-400"/>
                        </h3>
                        <p className="text-[9px] text-cyan-200/70 uppercase tracking-wider">
                            {botMood === 'thinking' ? 'Processing...' : 'System Online'}
                        </p>
                    </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white p-1 hover:bg-white/10 rounded-full transition">
                    <X size={16} />
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2.5 relative z-10 min-h-[250px] scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent">
                {messages.map((msg, index) => {
                    const isLastMessage = index === messages.length - 1;
                    return (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.sender === 'bot' && (
                           <div className="w-5 h-5 mr-1.5 rounded-full bg-blue-500/10 p-0.5 flex-shrink-0 self-end mb-1 border border-blue-400/20">
                             <FaceNormal />
                           </div>
                        )}
                        <div className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs leading-relaxed shadow-sm backdrop-blur-md ${
                            msg.sender === 'user' 
                            ? 'bg-blue-600 text-white rounded-br-sm' 
                            : 'bg-[#1a1a2e]/80 text-gray-200 rounded-bl-sm border border-blue-500/20'
                        }`}>
                            {msg.sender === 'bot' && isLastMessage ? (
                                <TypingEffect text={msg.text} />
                            ) : (
                                msg.text
                            )}
                        </div>
                    </div>
                    );
                })}
                
                {/* Typing Indicator */}
                {botMood === 'thinking' && (
                  <div className="flex justify-start">
                     <div className="w-5 h-5 mr-1.5 rounded-full bg-blue-500/10 p-0.5 flex-shrink-0 self-end mb-1">
                        <FaceThinking />
                     </div>
                     <div className="bg-[#1a1a2e]/80 px-3 py-2 rounded-2xl rounded-bl-sm border border-blue-500/20 flex gap-1 backdrop-blur-md items-center">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}/>
                        <span className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}/>
                        <span className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}/>
                     </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-2.5 bg-[#0a0a16]/80 border-t border-white/5 flex gap-2 relative z-10 backdrop-blur-xl">
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask AI..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500/50 transition placeholder:text-gray-500"
                />
                <button 
                    onClick={handleSend}
                    className={`p-2 rounded-full transition flex-shrink-0 shadow-lg ${
                      !inputValue.trim() ? 'bg-white/5 text-gray-600' : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:scale-105 text-white'
                    }`}
                    disabled={!inputValue.trim()}
                >
                    <Send size={14} />
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ y: [0, -6, 0] }} // Gentle Floating Animation
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`group relative p-1 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 ${
            botMood === 'error' ? 'bg-red-500' : 
            'bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-500'
        }`}
      >
        <div className="bg-[#0a0a16] rounded-full p-2 w-12 h-12 flex items-center justify-center overflow-hidden border border-white/10">
           {isOpen ? (
               <X className="text-white w-6 h-6" /> 
           ) : (
               <div className="w-full h-full p-0.5">
                   {renderFace()}
               </div>
           )}
        </div>
        
        {/* Status Dot */}
        {!isOpen && (
             <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-[#0a0a16] bg-emerald-500 animate-pulse"></span>
        )}
      </motion.button>

    </div>
  );
}