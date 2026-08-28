import { useState, useEffect } from 'react';
import StrokeText from './StrokeText/StrokeText';

const Loader = ({ onExitStart = () => {}, onComplete = () => {} }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleAnimationComplete = () => {
    // Hold solid white text briefly, then execute a clean, luxurious fade out
    setTimeout(() => {
      onExitStart(); // Trigger page entrance animations behind the loader
      setIsFading(true);

      setTimeout(() => {
        document.body.style.overflow = '';
        onComplete(); // Unmount loader after fade transition completes
      }, 700);
    }, 350);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-6 select-none transition-opacity duration-700 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: '#050507' }}
    >
      <div className="w-full max-w-[600px] flex justify-center">
        <StrokeText
          text="KOSIIX"
          fontSize={typeof window !== 'undefined' && window.innerWidth < 640 ? 56 : 92}
          fontWeight={700}
          fontFamily='"Space Grotesk", sans-serif'
          letterSpacing={typeof window !== 'undefined' && window.innerWidth < 640 ? -1 : -2.5}
          strokeWidth={1.3}
          strokeColor="#ffffff"
          fillColor="#ffffff"
          drawDuration={1.5}
          fillDelay={0.2}
          stagger={0.06}
          ease="power2.inOut"
          fillMode="wipe"
          trigger="mount"
          onComplete={handleAnimationComplete}
        />
      </div>
    </div>
  );
};

export default Loader;
