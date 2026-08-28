const SectionDivider = ({ label = 'SYSTEM TRANSITION // ADVANTAGE MATRIX' }) => {
  return (
    <div className="relative w-full py-12 sm:py-20 pointer-events-none select-none z-20 bg-transparent">
      {/* ── Central Laser Hairline & Geometric Crosshair Badge ── */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center">
        {/* Left Laser Hairline (fades out at left edge) */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-white/60" />

        {/* Center Geometric Badge (Fully transparent with crisp glass border) */}
        <div className="mx-4 sm:mx-8 px-4 sm:px-6 py-2 bg-transparent border border-white/20 backdrop-blur-sm flex items-center gap-3 sm:gap-4">
          {/* Left Crosshair Glyph */}
          <span className="font-mono text-[10px] text-white/50 leading-none select-none">+</span>

          {/* Center Text Indicator */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-ping" />
            <span className="font-mono text-[0.62rem] sm:text-[0.68rem] tracking-[0.26em] uppercase text-white/70 font-medium whitespace-nowrap">
              {label}
            </span>
          </div>

          {/* Right Crosshair Glyph */}
          <span className="font-mono text-[10px] text-white/50 leading-none select-none">+</span>
        </div>

        {/* Right Laser Hairline (fades out at right edge) */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-white/20 to-white/60" />
      </div>
    </div>
  );
};

export default SectionDivider;
