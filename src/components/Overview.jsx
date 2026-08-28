import { useState, useRef } from 'react';

const pillars = [
  {
    index: '01',
    category: 'IP & CONNECTIVITY',
    title: 'IP Services & Transit',
    desc: 'High-capacity Tier-1 IP transit, dedicated IPv4/IPv6 allocation, BGP routing, and carrier-grade DDoS mitigation built for sovereign reliability.',
    metric: '99.999%',
    metricLabel: 'Uptime SLA',
    tags: ['IP Transit', 'IPv4 / IPv6 Subnets', 'BGP Peering', 'DDoS Protection'],
    pathSvg: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 opacity-30 group-hover:opacity-80 transition-opacity duration-500 text-white stroke-current fill-none">
        <circle cx="60" cy="60" r="50" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="60" cy="60" r="32" strokeWidth="0.8" />
        <circle cx="60" cy="60" r="14" strokeWidth="1.2" />
        <line x1="60" y1="10" x2="60" y2="110" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="10" y1="60" x2="110" y2="60" strokeWidth="0.5" strokeDasharray="2 2" />
        <circle cx="60" cy="60" r="3" className="fill-white" />
        <circle cx="60" cy="28" r="2" className="fill-white" />
        <circle cx="60" cy="92" r="2" className="fill-white" />
        <circle cx="28" cy="60" r="2" className="fill-white" />
        <circle cx="92" cy="60" r="2" className="fill-white" />
      </svg>
    ),
  },
  {
    index: '02',
    category: 'INFRASTRUCTURE',
    title: 'Networking & Security',
    desc: 'Enterprise network architecture, SD-WAN integration, dedicated private interconnects, and zero-trust protocol enforcement across multi-cloud environments.',
    metric: '< 10ms',
    metricLabel: 'Core Latency',
    tags: ['SD-WAN', 'Zero-Trust Architecture', 'Private Interconnects', 'Routing Ops'],
    pathSvg: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 opacity-30 group-hover:opacity-80 transition-opacity duration-500 text-white stroke-current fill-none">
        <rect x="20" y="20" width="80" height="80" strokeWidth="0.8" />
        <rect x="35" y="35" width="50" height="50" strokeWidth="0.8" strokeDasharray="2 2" />
        <line x1="20" y1="20" x2="100" y2="100" strokeWidth="0.6" />
        <line x1="100" y1="20" x2="20" y2="100" strokeWidth="0.6" />
        <circle cx="60" cy="60" r="4" className="fill-white" />
        <rect x="52" y="14" width="16" height="12" strokeWidth="0.8" />
        <rect x="52" y="94" width="16" height="12" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    index: '03',
    category: 'DIGITAL ENGINEERING',
    title: 'Web & App Development',
    desc: 'Full-cycle engineering of high-performance web platforms, enterprise SaaS ecosystems, and responsive native iOS & Android applications.',
    metric: '100%',
    metricLabel: 'Custom Engineered',
    tags: ['Full-Stack Web', 'iOS & Android', 'SaaS Platforms', 'API & Microservices'],
    pathSvg: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 opacity-30 group-hover:opacity-80 transition-opacity duration-500 text-white stroke-current fill-none">
        {/* Browser window frame */}
        <rect x="18" y="22" width="84" height="60" rx="3" strokeWidth="0.8" />
        <line x1="18" y1="36" x2="102" y2="36" strokeWidth="0.8" />
        <circle cx="28" cy="29" r="1.5" className="fill-white" />
        <circle cx="34" cy="29" r="1.5" className="fill-white" />
        <circle cx="40" cy="29" r="1.5" className="fill-white" />
        {/* Code / mobile overlay */}
        <rect x="62" y="44" width="40" height="54" rx="4" strokeWidth="0.9" className="fill-[#050507]" />
        <line x1="72" y1="50" x2="92" y2="50" strokeWidth="0.6" strokeDasharray="2 2" />
        <circle cx="82" cy="91" r="2" className="fill-white" />
      </svg>
    ),
  },
];

const Overview = () => {
  const [activeHover, setActiveHover] = useState(null);
  const containerRef = useRef(null);

  return (
    <section
      id="overview"
      ref={containerRef}
      className="relative w-full py-32 sm:py-44 px-6 md:px-12 overflow-hidden"
      style={{ background: '#050507' }}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
        }}
      />

      {/* Grid lines background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 sm:mb-28 pb-12 border-b border-white/[0.06]">
          <div>
            {/* Tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
              <p className="text-[0.65rem] sm:text-[0.7rem] font-inter font-medium tracking-[0.28em] uppercase text-white/30">
                Services & Capabilities // Overview
              </p>
            </div>

            {/* Headline */}
            <h2 className="font-syne font-extrabold text-[2.2rem] sm:text-[3.4rem] md:text-[4.2rem] leading-[1.04] tracking-[-0.04em] text-white">
              IP, Networking & <br />
              <span className="text-white/40">Digital Solutions.</span>
            </h2>
          </div>

          {/* Editorial statement */}
          <div className="mt-8 md:mt-0 max-w-[420px]">
            <p className="font-inter text-[0.88rem] sm:text-[0.95rem] font-light text-white/40 leading-[1.75]">
              We deliver end-to-end technology solutions — from dedicated IP transit and carrier-grade networking to bespoke web and mobile application engineering.
            </p>
          </div>
        </div>

        {/* 3 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, index) => (
            <div
              key={item.index}
              onMouseEnter={() => setActiveHover(index)}
              onMouseLeave={() => setActiveHover(null)}
              className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-none border border-white/[0.07] bg-white/[0.015] hover:bg-white/[0.035] hover:border-white/[0.18] transition-all duration-500"
            >
              {/* Corner crosshairs */}
              <span className="absolute top-[-4px] left-[-4px] text-[10px] font-mono text-white/20 group-hover:text-white/60 transition-colors">+</span>
              <span className="absolute top-[-4px] right-[-4px] text-[10px] font-mono text-white/20 group-hover:text-white/60 transition-colors">+</span>
              <span className="absolute bottom-[-4px] left-[-4px] text-[10px] font-mono text-white/20 group-hover:text-white/60 transition-colors">+</span>
              <span className="absolute bottom-[-4px] right-[-4px] text-[10px] font-mono text-white/20 group-hover:text-white/60 transition-colors">+</span>

              {/* Card top */}
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[0.75rem] tracking-[0.2em] text-white/30 group-hover:text-white/80 transition-colors">
                    {item.index} // {item.category}
                  </span>
                  <div>{item.pathSvg}</div>
                </div>

                {/* Title */}
                <h3 className="font-syne font-bold text-[1.4rem] sm:text-[1.65rem] tracking-[-0.03em] text-white mb-4 leading-tight group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-[0.85rem] sm:text-[0.9rem] font-light text-white/35 leading-[1.7] mb-8">
                  {item.desc}
                </p>
              </div>

              {/* Card bottom */}
              <div>
                {/* Metric */}
                <div className="pt-6 border-t border-white/[0.06] mb-6 flex items-baseline justify-between">
                  <span className="font-syne font-extrabold text-[1.8rem] text-white tracking-tight">
                    {item.metric}
                  </span>
                  <span className="font-inter text-[0.7rem] font-medium tracking-[0.1em] uppercase text-white/30">
                    {item.metricLabel}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[0.68rem] font-inter font-medium text-white/40 bg-white/[0.03] border border-white/[0.04] rounded-sm group-hover:border-white/[0.1] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Technical Telemetry Strip */}
        <div className="mt-16 sm:mt-24 p-6 sm:p-8 border border-white/[0.06] bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-ping" />
            <span className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-white/40">
              European Sovereign Network // Active Operational Nodes
            </span>
          </div>

          <div className="flex items-center gap-8 sm:gap-12">
            <div className="text-left">
              <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-white/25">IP & Routing</p>
              <p className="font-inter text-[0.8rem] font-medium text-white/70">BGP / Tier-1 Transit</p>
            </div>
            <div className="text-left">
              <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-white/25">Application Stack</p>
              <p className="font-inter text-[0.8rem] font-medium text-white/70">Web & Mobile Ecosystems</p>
            </div>
            <div className="text-left">
              <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-white/25">Security</p>
              <p className="font-inter text-[0.8rem] font-medium text-white/70">Zero-Trust & DDoS Shield</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
