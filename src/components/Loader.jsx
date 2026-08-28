import { useState, useEffect } from 'react';
import StrokeText from './StrokeText/StrokeText';

const Loader = ({ onLoaded = () => {} }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock body scroll while loader is visible
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleAnimationComplete = () => {
    // Hold solid text briefly, then fade out and trigger page animations
    setTimeout(() => {
      setIsExiting(true);
      onLoaded(); // Trigger hero animations right as loader starts smooth fade-out
      setTimeout(() => {
        setIsDone(true);
        document.body.style.overflow = '';
      }, 700);
    }, 400);
  };

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-6 select-none transition-opacity duration-700 ease-in-out ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: '#050507' }}
    >
      <div className="w-full max-w-[600px] flex justify-center">
        <StrokeText
          text="KOSIIX"
          fontSize={window.innerWidth < 640 ? 56 : 92}
          fontWeight={700}
          fontFamily='"Space Grotesk", sans-serif'
          letterSpacing={window.innerWidth < 640 ? -1 : -2.5}
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
