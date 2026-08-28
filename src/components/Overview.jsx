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
      <svg
        viewBox="0 0 80 80"
        className="w-14 h-14 text-white stroke-current fill-none opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      >
        {/* Core Global Ring & Latitudes */}
        <circle cx="40" cy="40" r="28" strokeWidth="1" strokeDasharray="2.5 2.5" />
        <ellipse cx="40" cy="40" rx="14" ry="28" strokeWidth="1" />
        <line x1="12" y1="40" x2="68" y2="40" strokeWidth="1" />
        {/* Gateway IP Nodes & Transit Lines */}
        <line x1="40" y1="12" x2="40" y2="4" strokeWidth="1" />
        <line x1="40" y1="68" x2="40" y2="76" strokeWidth="1" />
        <line x1="12" y1="40" x2="4" y2="40" strokeWidth="1" />
        <line x1="68" y1="40" x2="76" y2="40" strokeWidth="1" />
        <circle cx="40" cy="4" r="2.5" className="fill-white stroke-none" />
        <circle cx="40" cy="76" r="2.5" className="fill-white stroke-none" />
        <circle cx="4" cy="40" r="2.5" className="fill-white stroke-none" />
        <circle cx="76" cy="40" r="2.5" className="fill-white stroke-none" />
        <circle cx="40" cy="40" r="3.5" className="fill-white stroke-none" />
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
      <svg
        viewBox="0 0 80 80"
        className="w-14 h-14 text-white stroke-current fill-none opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      >
        {/* Zero-Trust Shield Outline */}
        <path d="M40 10 L64 20 V38 C64 54 40 70 40 70 C40 70 16 54 16 38 V20 Z" strokeWidth="1" />
        {/* Server Switch Racks Inside */}
        <rect x="26" y="24" width="28" height="9" rx="1.5" strokeWidth="0.9" />
        <circle cx="31" cy="28.5" r="1" className="fill-white stroke-none" />
        <circle cx="35" cy="28.5" r="1" className="fill-white stroke-none" />
        <line x1="41" y1="28.5" x2="49" y2="28.5" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
        <rect x="26" y="37" width="28" height="9" rx="1.5" strokeWidth="0.9" />
        <circle cx="31" cy="41.5" r="1" className="fill-white stroke-none" />
        <circle cx="35" cy="41.5" r="1" className="fill-white stroke-none" />
        <line x1="41" y1="41.5" x2="49" y2="41.5" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
        {/* Secure Interconnect Node */}
        <path d="M40 46 V57" strokeWidth="0.9" />
        <circle cx="40" cy="57" r="2" className="fill-white stroke-none" />
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
      <svg
        viewBox="0 0 80 80"
        className="w-14 h-14 text-white stroke-current fill-none opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      >
        {/* Desktop Web Window */}
        <rect x="10" y="14" width="46" height="34" rx="2.5" strokeWidth="1" />
        <line x1="10" y1="23" x2="56" y2="23" strokeWidth="0.8" />
        <circle cx="16" cy="18.5" r="1" className="fill-white stroke-none" />
        <circle cx="20" cy="18.5" r="1" className="fill-white stroke-none" />
        <circle cx="24" cy="18.5" r="1" className="fill-white stroke-none" />
        <line x1="16" y1="30" x2="30" y2="30" strokeWidth="0.8" />
        <line x1="16" y1="36" x2="24" y2="36" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
        {/* Mobile Device Window Overlay */}
        <rect x="42" y="26" width="28" height="44" rx="4" strokeWidth="1" className="fill-[#050507]" />
        <line x1="50" y1="31" x2="62" y2="31" strokeWidth="0.8" />
        <line x1="48" y1="40" x2="64" y2="40" strokeWidth="0.8" strokeDasharray="2 2" />
        <line x1="48" y1="46" x2="58" y2="46" strokeWidth="0.8" />
        <circle cx="56" cy="63" r="1.5" className="fill-white stroke-none" />
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
      className="relative w-full pt-20 pb-10 sm:pt-44 sm:pb-16 px-4 sm:px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-28 pb-8 sm:pb-12 border-b border-white/[0.08]">
          <div>
            {/* Tag */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
              <p className="text-[0.65rem] sm:text-[0.7rem] font-inter font-medium tracking-[0.24em] uppercase text-white/40">
                Services & Capabilities // Overview
              </p>
            </div>

            {/* Headline (Crisp Solid White) */}
            <h2 className="font-syne font-extrabold text-[2.2rem] sm:text-[3.6rem] md:text-[4.4rem] leading-[1.04] tracking-[-0.04em] text-white">
              IP, Networking & <br />
              Digital Solutions.
            </h2>
          </div>

          {/* Editorial statement */}
          <div className="mt-6 md:mt-0 max-w-[440px]">
            <p className="font-inter text-[0.88rem] sm:text-[0.95rem] font-light text-white/40 leading-[1.75]">
              We deliver end-to-end technology solutions — from dedicated IP transit and carrier-grade networking to bespoke web and mobile application engineering.
            </p>
          </div>
        </div>

        {/* 3 Architectural Pillars Grid with Cut-Corner Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 items-stretch">
          {pillars.map((item, index) => (
            <div
              key={item.index}
              onMouseEnter={() => setActiveHover(index)}
              onMouseLeave={() => setActiveHover(null)}
              className="group relative h-full flex flex-col transition-all duration-500 ease-out hover:-translate-y-1.5"
            >
              {/* Chamfered Outer Border Container with refined gradient rim */}
              <div
                className="relative h-full flex flex-col flex-1 p-[2px] bg-gradient-to-b from-white/60 via-white/20 to-white/10 group-hover:from-white group-hover:via-white/50 group-hover:to-white/20 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(255,255,255,0.06)]"
                style={{
                  clipPath: 'polygon(24px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 24px)',
                }}
              >
                {/* Chamfered Inner Card Content (Glassmorphic & Glary) */}
                <div
                  className="relative h-full flex-1 flex flex-col justify-between p-6 sm:p-8 sm:p-10 bg-[#08090e]/80 group-hover:bg-[#0d0e17]/90 backdrop-blur-xl transition-all duration-500 overflow-hidden"
                  style={{
                    clipPath: 'polygon(22px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 22px)',
                  }}
                >
                  {/* Glary Top Specular Light Sheen */}
                  <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent pointer-events-none" />

                  {/* Subtle corner crosshairs on non-cut corners */}
                  <span className="absolute top-[4px] right-[4px] text-[9px] font-mono text-white/30 group-hover:text-white/70 transition-colors">+</span>
                  <span className="absolute bottom-[4px] left-[4px] text-[9px] font-mono text-white/30 group-hover:text-white/70 transition-colors">+</span>
                  <span className="absolute bottom-[4px] right-[4px] text-[9px] font-mono text-white/30 group-hover:text-white/70 transition-colors">+</span>

                  {/* Card top */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-8 pl-3">
                      <span className="font-mono text-[0.75rem] tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                        {item.index} // {item.category}
                      </span>
                      <div className="flex items-center justify-center">{item.pathSvg}</div>
                    </div>

                    {/* Title */}
                    <h3 className="font-syne font-bold text-[1.45rem] sm:text-[1.7rem] tracking-[-0.03em] text-white mb-4 leading-tight group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-inter text-[0.85rem] sm:text-[0.9rem] font-light text-white/45 leading-[1.7] mb-8">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card bottom */}
                  <div className="relative z-10 mt-auto">
                    {/* Metric */}
                    <div className="pt-6 border-t border-white/[0.08] mb-6 flex items-baseline justify-between">
                      <span className="font-syne font-extrabold text-[1.9rem] text-white tracking-tight">
                        {item.metric}
                      </span>
                      <span className="font-inter text-[0.7rem] font-medium tracking-[0.1em] uppercase text-white/40">
                        {item.metricLabel}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[0.68rem] font-inter font-medium text-white/50 bg-white/[0.04] border border-white/[0.08] rounded-sm group-hover:border-white/[0.2] group-hover:text-white/80 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
