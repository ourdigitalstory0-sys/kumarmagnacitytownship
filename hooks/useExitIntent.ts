'use client';

import { useEffect, useState } from 'react';

export function useExitIntent() {
  const [hasFired, setHasFired] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Only run on desktop (mouse devices)
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse leaves the top of the viewport (indicating closing tab or changing URL)
      if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
        if (!hasFired && !sessionStorage.getItem('exitIntentTriggered')) {
          setShouldShow(true);
          setHasFired(true);
          sessionStorage.setItem('exitIntentTriggered', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasFired]);

  const closeExitIntent = () => setShouldShow(false);

  return { shouldShowExitIntent: shouldShow, closeExitIntent };
}
