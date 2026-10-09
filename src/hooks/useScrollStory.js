import { useState, useEffect, useCallback } from 'react';

/**
 * Hook to provide scroll progress (0 to 1) and smooth mouse tilt coordinates (-1 to 1).
 * Supports both standard element tracking and pinned sticky tracks (Apple-style scrollytelling).
 * Updates synchronously on scroll/resize events for instant reactiveness without rAF throttling issues.
 */
export function useScrollStory(targetRef, options = {}) {
  const { isPinnedTrack = false, thresholdStart = 0, thresholdEnd = 600 } = options;
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef && targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        if (isPinnedTrack) {
          // Track height minus window height is the exact pinned scroll distance
          const scrollableDistance = rect.height - window.innerHeight;
          if (scrollableDistance > 0) {
            // When rect.top is 0 or less, scroll progress starts increasing
            const progress = -rect.top / scrollableDistance;
            const clamped = Math.min(1, Math.max(0, progress));
            setScrollProgress(clamped);
          } else {
            setScrollProgress(0);
          }
        } else {
          const start = window.innerHeight * 0.85;
          const totalDistance = rect.height + window.innerHeight * 0.3;
          const progress = (start - rect.top) / totalDistance;
          setScrollProgress(Math.min(1, Math.max(0, progress)));
        }
      } else {
        const currentScroll = window.scrollY;
        const progress = Math.min(1, Math.max(0, (currentScroll - thresholdStart) / (thresholdEnd - thresholdStart)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    // Run immediately on mount and after layout paints
    handleScroll();
    const timer = setTimeout(handleScroll, 50);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, [targetRef, isPinnedTrack, thresholdStart, thresholdEnd]);

  // Mouse tilt tracking
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMousePos({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  }, []);

  return {
    scrollProgress,
    mousePos,
    isHovered,
    mouseHandlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
