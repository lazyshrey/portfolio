import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Slightly faster, snappier scroll animation
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // physics-based exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Share the Lenis instance globally so other components (like Navigation) can scroll programmatically
    (window as any).lenisInstance = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      (window as any).lenisInstance = null;
    };
  }, []);

  // Snappy transition reset: scroll to top immediately when route changes
  useEffect(() => {
    const lenis = (window as any).lenisInstance;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
