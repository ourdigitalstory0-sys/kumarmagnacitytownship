"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "919876543210"; // Placeholder
  const message = encodeURIComponent("Hi, I would like to know more about Kumar Magnacity township.");
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Delay appearance slightly for a dramatic entrance
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative group">
        {/* Pulsing ring */}
        <div className="absolute -inset-2 bg-green-500 rounded-full opacity-20 group-hover:opacity-40 animate-ping" />
        
        {/* Widget Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:scale-110 transition-transform duration-300"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle size={28} className="fill-current" />
        </a>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-dark text-sm font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with Sales
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45" />
        </div>
      </div>
    </div>
  );
}
