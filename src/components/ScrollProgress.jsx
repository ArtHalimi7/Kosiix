import { useEffect, useRef } from 'react';

const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let currentScale = 0;
    let targetScale = 0;
    let rafId;

    const updateTarget = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        targetScale = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
      } else {
        targetScale = 0;
      }
    };

    const loop = () => {
      // Fluid linear interpolation (Lerp) for momentum smoothing
      currentScale += (targetScale - currentScale) * 0.12;

      if (barRef.current) {
        // GPU-accelerated scaleX with left origin
        barRef.current.style.transform = `scaleX(${currentScale})`;
      }

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('scroll', updateTarget, { passive: true });
    window.addEventListener('resize', updateTarget, { passive: true });
    updateTarget();
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', updateTarget);
      window.removeEventListener('resize', updateTarget);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9999] pointer-events-none bg-white/[0.03]">
      <div
        ref={barRef}
        className="w-full h-full bg-white will-change-transform shadow-[0_0_12px_rgba(255,255,255,0.9),0_0_24px_rgba(255,255,255,0.5)]"
        style={{
          transformOrigin: 'left center',
          transform: 'scaleX(0)',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
