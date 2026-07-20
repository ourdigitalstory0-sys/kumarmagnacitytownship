'use client';

import { useState, useEffect } from 'react';

const SCARCITY_MESSAGES = [
  "An investor from Kharadi just requested the 3BHK Masterplan.",
  "Only 4 Premium NA Bungalow Plots remaining in Phase 1.",
  "Someone from Magarpatta just secured a site visit for this weekend.",
  "A 2BHK Apartment was just booked in Tower B.",
  "Phase 1 Pre-Launch pricing expires in 72 Hours."
];

export function useScarcity() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    const fireToast = () => {
      const randomMsg = SCARCITY_MESSAGES[Math.floor(Math.random() * SCARCITY_MESSAGES.length)];
      setToastMessage(randomMsg);
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setToastMessage(null);
      }, 5000);
    };

    // Fire first toast after 10 seconds
    const initialTimer = setTimeout(fireToast, 10000);

    // Then fire randomly every 25-45 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.4) { // 60% chance to fire every interval
        fireToast();
      }
    }, 35000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return { toastMessage };
}
