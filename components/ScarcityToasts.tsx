'use client';

import { useScarcity } from '@/hooks/useScarcity';
import { BellRing } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScarcityToasts() {
  const { toastMessage } = useScarcity();

  return (
    <div className="fixed bottom-6 left-6 z-[90] pointer-events-none">
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white border border-dark/10 shadow-2xl rounded-2xl p-4 flex items-start gap-4 max-w-sm pointer-events-auto"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <BellRing size={20} className="animate-pulse" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-dark/40 mb-1">Live Activity</div>
              <p className="text-sm font-medium text-dark leading-snug">
                {toastMessage}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
