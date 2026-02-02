"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";

// --- PREMIUM ROBOT AVATARS (SVG) ---
const FaceNormal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full overflow-visible">
    <defs>
      <linearGradient id="robotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Head */}
    <rect x="20" y="20" width="60" height="50" rx="12" fill="url(#robotGrad)" stroke="#1E3A8A" strokeWidth="2" filter="url(#glow)" />
    {/* Ears */}
    <rect x="12" y="35" width="8" height="20" rx="2" fill="#3B82F6" />
    <rect x="80" y="35" width="8" height="20" rx="2" fill="#3B82F6" />
    {/* Screen/Face Area */}
    <rect x="28" y="30" width="44" height="30" rx="6" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
    {/* Eyes */}
    <circle cx="40" cy="42" r="5" fill="#00E5FF" className="animate-pulse" />
    <circle cx="60" cy="42" r="5" fill="#00E5FF" className="animate-pulse" />
    {/* Mouth */}
    <path d="M 40 52 Q 50 58 60 52" stroke="#00E5FF" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Antenna */}
    <line x1="50" y1="20" x2="50" y2="10" stroke="#60A5FA" strokeWidth="3" />
    <circle cx="50" cy="8" r="4" fill="#EF4444" className="animate-ping" />
  </svg>
);

const FaceThinking = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full overflow-visible">
    <defs>
      <linearGradient id="thinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="60" height="50" rx="12" fill="url(#thinkGrad)" stroke="#4C1D95" strokeWidth="2" />
    <rect x="12" y="35" width="8" height="20" rx="2" fill="#8B5CF6" />
    <rect x="80" y="35" width="8" height="20" rx="2" fill="#8B5CF6" />
    <rect x="28" y="30" width="44" height="30" rx="6" fill="#0f172a" />
    {/* Eyes looking up */}
    <circle cx="40" cy="38" r="5" fill="#FCD34D" />
    <circle cx="60" cy="38" r="5" fill="#FCD34D" />
    {/* Loading Mouth */}
    <circle cx="42" cy="52" r="2" fill="#FCD34D" className="animate-bounce" style={{ animationDelay: '0s' }} />
    <circle cx="50" cy="52" r="2" fill="#FCD34D" className="animate-bounce" style={{ animationDelay: '0.1s' }} />
    <circle cx="58" cy="52" r="2" fill="#FCD34D" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
    <line x1="50" y1="20" x2="50" y2="10" stroke="#A78BFA" strokeWidth="3" />
    <circle cx="50" cy="8" r="4" fill="#FCD34D" />
  </svg>
);

const FaceError = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full overflow-visible">
    <defs>
      <linearGradient id="errorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DC2626" />
        <stop offset="100%" stopColor="#B91C1C" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="60" height="50" rx="12" fill="url(#errorGrad)" stroke="#7F1D1D" strokeWidth="2" />
    <rect x="12" y="35" width="8" height="20" rx="2" fill="#EF4444" />
    <rect x="80" y="35" width="8" height="20" rx="2" fill="#EF4444" />
    <rect x="28" y="30" width="44" height="30" rx="6" fill="#0f172a" />
    {/* X Eyes */}
    <path d="M 36 38 L 44 46 M 44 38 L 36 46" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 56 38 L 64 46 M 64 38 L 56 46" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
    {/* Wavy Mouth */}
    <path d="M 38 54 Q 45 48 50 54 Q 55 60 62 54" stroke="#EF4444" strokeWidth="2" fill="none" />
    <line x1="50" y1="20" x2="50" y2="10" stroke="#F87171" strokeWidth="3" />
    <circle cx="50" cy="8" r="4" fill="#FCA5A5" />
  </svg>
);

// --- THEME CONFIGURATION ---
const themes = [
  {
    name: "Cosmic Blue",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    bg: "bg-[#0f172a]", // Slate 900
    userBubble: "bg-blue-600",
    botBubble: "bg-slate-800",
    border: "border-blue-500/30",
    shadow: "shadow-blue-500/40"
  },
  {
    name: "Emerald City",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    bg: "bg-[#022c22]", // Emerald 950
    userBubble: "bg-emerald-600",
    botBubble: "bg-emerald-900",
    border: "border-emerald-500/30",
    shadow: "shadow-emerald-500/40"
  },
  {
    name: "Cyber Punk",
    gradient: "from-pink-500 via-rose-500 to-yellow-500",
    bg: "bg-[#2a0a18]", // Deep Pink/Dark
    userBubble: "bg-pink-600",
    botBubble: "bg-[#4a0420]",
    border: "border-pink-500/30",
    shadow: "shadow-pink-500/40"
  },
  {
    name: "Midnight Purple",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    bg: "bg-[#1e1b4b]", // Indigo 950
    userBubble: "bg-violet-600",
    botBubble: "bg-[#312e81]",
    border: "border-violet-500/30",
    shadow: "shadow-violet-500/40"
  }
];

// --- TYPING EFFECT COMPONENT ---
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
    }, 15); // Faster typing speed
    return () => clearInterval(interval);
  }, [text]);

  return <>{displayedText}</>;
};

type Message = { id: number; text: string; sender: "user" | "bot"; };
type BotMood = "normal" | "thinking" | "error";

export function CartoonChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [botMood, setBotMood] = useState<BotMood>("normal");
  
  // Theme State
  const [themeIndex, setThemeIndex] = useState(0);
  const currentTheme = themes[themeIndex];

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm Niloy's AI Assistant. How can I help you today? 🤖", sender: "bot" }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botMood]);

  // Handle Opening/Closing with Theme Switch
  const handleToggle = () => {
    if (!isOpen) {
        // Switch theme only when opening
        setThemeIndex((prev) => (prev + 1) % themes.length);
    }
    setIsOpen(!isOpen);
  };

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
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: "Connection error. Please try again later.", sender: "bot" }]);
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
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            // Mobile Optimization: Fixed excessive blurring and heavy shadows. 
            // Using solid opaque colors for better performance on mobile GPUs.
            className={`mb-3 w-[calc(100vw-32px)] md:w-[320px] max-h-[80vh] flex flex-col ${currentTheme.bg} ${currentTheme.border} border rounded-2xl shadow-2xl overflow-hidden relative`}
          >
            {/* Background Texture (Static CSS only) */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>

            {/* Header */}
            <div className={`p-3 flex items-center justify-between relative z-10 border-b border-white/5 bg-gradient-to-r ${currentTheme.gradient}`}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full p-1 backdrop-blur-sm border border-white/20 shadow-inner">
                        {renderFace()}
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-xs flex items-center gap-1">
                          Niloy's AI <Sparkles size={10} className="text-yellow-300"/>
                        </h3>
                        <p className="text-[10px] text-white/90 font-medium tracking-wide opacity-90">
                            {botMood === 'thinking' ? 'Processing...' : 'Online'}
                        </p>
                    </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1.5 hover:bg-white/10 rounded-full transition">
                    <X size={18} />
                </button>
            </div>

            {/* Messages Area */}
            {/* Added scrollbar-hide for cleaner mobile look */}
            <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-3 relative z-10 min-h-[250px] scrollbar-none">
                {messages.map((msg, index) => {
                    const isLastMessage = index === messages.length - 1;
                    return (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm shadow-md ${
                            msg.sender === 'user' 
                            ? `${currentTheme.userBubble} text-white rounded-br-none` 
                            : `${currentTheme.botBubble} text-gray-100 rounded-bl-none border border-white/5`
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
                
                {/* Typing Indicator Bubble */}
                {botMood === 'thinking' && (
                  <div className="flex justify-start">
                     <div className={`${currentTheme.botBubble} px-4 py-3 rounded-2xl rounded-bl-none border border-white/5 flex gap-1 items-center`}>
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                     </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            {/* Mobile Optimization: Using 'text-base' (16px) prevents iOS from auto-zooming when focusing input */}
            <div className={`p-3 ${currentTheme.bg} border-t border-white/10 flex gap-2 relative z-10`}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-base md:text-sm text-white focus:outline-none focus:border-white/30 transition placeholder:text-gray-500"
                />
                <button 
                    onClick={handleSend}
                    className={`p-2.5 rounded-full transition flex-shrink-0 shadow-lg ${
                      !inputValue.trim() ? 'bg-white/5 text-gray-500' : `bg-gradient-to-r ${currentTheme.gradient} text-white hover:scale-105`
                    }`}
                    disabled={!inputValue.trim()}
                >
                    <Send size={18} />
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button (Jumps & Changes Theme) */}
      <motion.button
        onClick={handleToggle}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`group relative p-1 rounded-full ${currentTheme.shadow} shadow-xl transition-all duration-500 bg-gradient-to-tr ${currentTheme.gradient}`}
      >
        <div className={`${currentTheme.bg} rounded-full p-2 w-14 h-14 flex items-center justify-center overflow-hidden border border-white/10`}>
           {isOpen ? (
               <X className="text-white w-7 h-7" /> 
           ) : (
               <div className="w-full h-full p-0.5">
                   {renderFace()}
               </div>
           )}
        </div>
        
        {/* Status Notification Dot */}
        {!isOpen && (
             <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-[#000] bg-green-500 animate-pulse"></span>
        )}
      </motion.button>

    </div>
  );
}