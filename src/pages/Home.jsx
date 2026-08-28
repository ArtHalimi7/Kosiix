import Hero from '../components/Hero';
import Overview from '../components/Overview';
import ScrollExpand from '../components/ScrollExpand/ScrollExpand';
import SectionDivider from '../components/SectionDivider';
import WhyOutsource from '../components/WhyOutsource';
import SquadCalculator from '../components/SquadCalculator';
import FAQ from '../components/FAQ';
import bgImage from '../assets/bg.png';

const Home = () => {
  return (
    <>
      <Hero />

      {/* ── Continuous Unified Canvas for Overview, Showcase, WhyOutsource, Calculator & FAQ ── */}
      <div className="relative w-full bg-[#050507] overflow-x-clip">
        {/* ── Continuous Floating Glowing Blobs ── */}
        {/* 1. Top-Left Overview Header Glow */}
        <div
          className="blob-float-1 absolute top-[3%] -left-20 w-[500px] sm:w-[750px] h-[380px] sm:h-[550px] rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle at 45% 45%, rgba(255, 255, 255, 0.22) 0%, rgba(21, 23, 34, 0.85) 45%, rgba(12, 13, 20, 0.6) 65%, transparent 85%)',
            filter: 'blur(75px)',
          }}
        />

        {/* 2. Seamless Transition Glow spanning Overview ➔ ScrollExpand ➔ SectionDivider (Right Side) */}
        <div
          className="blob-float-2 absolute top-[18%] -right-24 w-[580px] sm:w-[900px] h-[550px] sm:h-[800px] rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.22) 0%, rgba(21, 23, 34, 0.85) 45%, rgba(12, 13, 20, 0.55) 68%, transparent 85%)',
            filter: 'blur(80px)',
          }}
        />

        {/* 3. Center-Left WhyOutsource Pillars Glow */}
        <div
          className="blob-float-3 absolute top-[38%] -left-20 w-[520px] sm:w-[800px] h-[420px] sm:h-[620px] rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(21, 23, 34, 0.8) 45%, rgba(12, 13, 20, 0.5) 68%, transparent 85%)',
            filter: 'blur(75px)',
          }}
        />

        {/* 4. Comparison Matrix & Calculator Glow (Right) */}
        <div
          className="blob-float-2 absolute top-[55%] -right-16 w-[580px] sm:w-[880px] h-[400px] sm:h-[600px] rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.22) 0%, rgba(21, 23, 34, 0.85) 45%, rgba(12, 13, 20, 0.55) 68%, transparent 85%)',
            filter: 'blur(75px)',
          }}
        />

        {/* 5. Squad Calculator Accent Glow (Left) */}
        <div
          className="blob-float-1 absolute top-[72%] -left-24 w-[520px] sm:w-[800px] h-[420px] sm:h-[600px] rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(21, 23, 34, 0.85) 45%, rgba(12, 13, 20, 0.55) 65%, transparent 85%)',
            filter: 'blur(75px)',
          }}
        />

        {/* 6. FAQ Section Spotlight Glow (Right) */}
        <div
          className="blob-float-3 absolute bottom-[2%] -right-20 w-[450px] sm:w-[700px] h-[350px] sm:h-[500px] rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.18) 0%, rgba(21, 23, 34, 0.8) 45%, rgba(12, 13, 20, 0.5) 65%, transparent 85%)',
            filter: 'blur(70px)',
          }}
        />

        {/* ── Continuous Single Geometric Grid Mesh ── */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        {/* ── Section Content Layer ── */}
        <div className="relative z-10">
          <Overview />

          {/* Cinematic ScrollExpand Visual Centerpiece */}
          <div className="my-10 sm:my-20">
            <ScrollExpand
              src={bgImage}
              alt="Kosiix European Engineering Studio"
              title="Dedicated Engineering Squads"
              scrollHint="Scroll down to expand view"
              startWidth={44}
              startHeight={58}
              startRadius={28}
              endRadius={0}
              mediaZoom={1.25}
              scrollDistance={1.0}
              holdDistance={0.65}
              smoothing={0.06}
              overlayScrim={0.5}
              useWindowScroll
            >
              <div className="max-w-[740px] mx-auto text-center px-4">
                <p className="font-mono text-[0.72rem] sm:text-[0.8rem] text-white/60 tracking-[0.26em] uppercase mb-4">
                  // EUROPEAN ENGINEERING SQUADS
                </p>
                <h3 className="font-syne font-extrabold text-[2rem] sm:text-[3.2rem] text-white leading-tight mb-4 tracking-[-0.03em]">
                  Synchronous Hours. Elite Talent.
                </h3>
                <p className="font-inter text-[0.9rem] sm:text-[1.05rem] text-white/70 font-light leading-relaxed max-w-xl mx-auto">
                  Battle-tested senior software developers and network architects embedded directly into your sprint cycles from Day 1.
                </p>
              </div>
            </ScrollExpand>
          </div>

          <SectionDivider label="STRATEGIC EVALUATION // ADVANTAGE MATRIX" />
          <WhyOutsource />

          <SectionDivider label="ARBITRAGE CALCULATOR // SQUAD ESTIMATOR" />
          <SquadCalculator />

          <SectionDivider label="TERMS & GOVERNANCE // FREQUENTLY ANSWERED" />
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default Home;