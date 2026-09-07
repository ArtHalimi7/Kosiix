import { Link } from 'react-router-dom';
import LightRays from './LightRays/LightRays';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#050507' }}
    >
      {/* ── LightRays Background ── */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={1}
          rayLength={2.3}
          pulsating={false}
          fadeDistance={1}
          saturation={0.8}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.15}
          distortion={0}
        />
      </div>

      {/* ── Depth overlays ── */}
      {/* Top fade — smooths the ray origin */}
      <div
        className="absolute inset-x-0 top-0 z-[1] h-24 sm:h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #050507 0%, transparent 100%)',
        }}
      />
      {/* Bottom fade — grounds the section */}
      <div
        className="absolute inset-x-0 bottom-0 z-[1] h-36 sm:h-72 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #050507 0%, transparent 100%)',
        }}
      />
      {/* Center vignette — focuses attention */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, #050507 100%)',
          opacity: 0.35,
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-[860px] mx-auto">
        {/* Tag */}
        <p
          className="hero-animate text-[0.65rem] sm:text-[0.7rem] font-inter font-medium tracking-[0.28em] uppercase text-white/25 mb-10 sm:mb-12"
          style={{ animationDelay: '0.1s' }}
        >
          Technology Partner for Europe
        </p>

        {/* Headline */}
        <h1 className="mb-7 sm:mb-8">
          <span
            className="hero-animate block font-syne font-extrabold leading-[1.02] tracking-[-0.04em] text-white"
            style={{
              fontSize: 'clamp(3rem, 9vw, 7rem)',
              animationDelay: '0.25s',
            }}
          >
            We Build.
          </span>
          <span
            className="hero-animate block font-syne font-extrabold leading-[1.02] tracking-[-0.04em] text-white"
            style={{
              fontSize: 'clamp(3rem, 9vw, 7rem)',
              animationDelay: '0.4s',
            }}
          >
            You Scale.
          </span>
        </h1>

        {/* Divider */}
        <div
          className="hero-animate mx-auto mb-7 sm:mb-8"
          style={{
            width: '32px',
            height: '1px',
            background: 'rgba(255,255,255,0.12)',
            animationDelay: '0.55s',
          }}
        />

        {/* Subtitle */}
        <p
          className="hero-animate font-inter text-[0.88rem] sm:text-[1rem] font-light text-white/30 max-w-[420px] mx-auto leading-[1.7] mb-12 sm:mb-14"
          style={{ animationDelay: '0.65s' }}
        >
          End-to-end technology solutions for
          <br className="hidden sm:block" /> ambitious European businesses.
        </p>

        {/* CTAs */}
        <div
          className="hero-animate flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
          style={{ animationDelay: '0.8s' }}
        >
          {/* Primary CTA */}
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4"
          >
            <span className="text-[0.82rem] font-inter font-medium text-white/80 tracking-[0.02em] group-hover:text-white transition-colors duration-300">
              Start a Project
            </span>
            <span className="cta-line block w-8 h-[1px] bg-white/20 group-hover:w-14 group-hover:bg-kosiix-accent" />
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/portfolio"
            className="text-[0.82rem] font-inter font-medium text-white/20 tracking-[0.02em] hover:text-white/50 transition-colors duration-300"
          >
            Our Work
          </Link>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-6 sm:bottom-10 inset-x-0 z-10 flex justify-center pointer-events-none">
        <div
          className="hero-animate flex flex-col items-center gap-3"
          style={{ animationDelay: '1.1s' }}
        >
          <span className="text-[0.55rem] font-inter font-medium tracking-[0.22em] uppercase text-white/15">
            Scroll
          </span>
          <div className="relative w-[1px] h-7 overflow-hidden">
            <div className="scroll-line-inner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;