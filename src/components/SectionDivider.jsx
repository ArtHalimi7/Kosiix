const SectionDivider = ({ label = 'SYSTEM TRANSITION // ADVANTAGE MATRIX' }) => {
  return (
    <div className="relative w-full py-8 sm:py-20 pointer-events-none select-none z-20 bg-transparent overflow-x-hidden">
      {/* ── Central Laser Hairline & Geometric Crosshair Badge ── */}
      <div className="max-w-[1320px] mx-auto px-3 sm:px-6 md:px-12 relative z-10 flex items-center justify-center">
        {/* Left Laser Hairline (fades out at left edge) */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-white/60 min-w-[12px]" />

        {/* Center Geometric Badge (Fully transparent with crisp glass border) */}
        <div className="mx-2 sm:mx-6 px-3 sm:px-6 py-1.5 sm:py-2 bg-transparent border border-white/20 backdrop-blur-sm flex items-center gap-2 sm:gap-4 shrink-0 max-w-[85vw]">
          {/* Left Crosshair Glyph */}
          <span className="font-mono text-[9px] sm:text-[10px] text-white/50 leading-none select-none hidden xs:inline">+</span>

          {/* Center Text Indicator */}
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-ping shrink-0" />
            <span className="font-mono text-[0.55rem] sm:text-[0.68rem] tracking-[0.14em] sm:tracking-[0.24em] uppercase text-white/70 font-medium truncate">
              {label}
            </span>
          </div>

          {/* Right Crosshair Glyph */}
          <span className="font-mono text-[9px] sm:text-[10px] text-white/50 leading-none select-none hidden xs:inline">+</span>
        </div>

        {/* Right Laser Hairline (fades out at right edge) */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-white/20 to-white/60 min-w-[12px]" />
      </div>
    </div>
  );
};

export default SectionDivider;
