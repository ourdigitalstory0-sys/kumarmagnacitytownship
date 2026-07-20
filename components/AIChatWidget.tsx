'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const chatData: any = useChat({
    api: '/api/chat',
  } as any);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = chatData;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-accent text-dark rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform" />
          {isOpen ? <X size={24} className="relative z-10" /> : <MessageSquare size={24} className="relative z-10" />}
          
          {/* Notification Dot */}
          {!isOpen && (
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dark opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-dark border-2 border-accent"></span>
            </span>
          )}
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-dark border border-white/10 rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.5)] z-[99] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-white/5 backdrop-blur-md p-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Sovereign Concierge</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-widest">AI Sales Assistant</p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-sm text-sm text-white/80 w-[85%]">
                Welcome to Kumar Magnacity. I am your personal AI concierge. Are you looking for 2BHK/3BHK apartments or NA Bungalow Plots?
              </div>
              
              {/* @ts-ignore */}
              {messages.map((m: any) => (
                <div 
                  key={m.id} 
                  className={`p-3 rounded-2xl text-sm max-w-[85%] ${
                    m.role === 'user' 
                      ? 'bg-accent text-dark rounded-tr-sm ml-auto' 
                      : 'bg-white/5 border border-white/10 text-white/80 rounded-tl-sm'
                  }`}
                >
                  {m.content}
                </div>
              ))}
              
              {isLoading && (
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-sm w-16 flex justify-center gap-1">
                  <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce delay-200"></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <form onSubmit={handleSubmit} className="flex items-center gap-2 relative">
                <input
                  value={input || ""}
                  onChange={handleInputChange}
                  placeholder="Ask about pricing, location..."
                  className="w-full bg-dark border border-white/20 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-accent"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !(input || "").trim()}
                  className="absolute right-2 p-2 bg-accent text-dark rounded-full disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
