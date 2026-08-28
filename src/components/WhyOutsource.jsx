import { useState } from 'react';

const corePillars = [
  {
    id: '01',
    category: 'PROXIMITY & SOVEREIGNTY',
    title: 'Nearshore European Alignment',
    headline: 'Zero Timezone Disconnect',
    desc: 'Collaborate in real-time during your standard European business hours. No overnight delays, asynchronous confusion, or cultural disconnect.',
    metric: '100% CET',
    metricSub: 'Synchronous Business Hours',
    tags: ['CET Timezone', 'Fluent English / German', 'GDPR & EU Compliant'],
    iconSvg: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12 text-white stroke-current fill-none opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      >
        {/* Europe / Synchronous Clock & Peering Coordinates */}
        <circle cx="32" cy="32" r="26" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="32" cy="32" r="18" strokeWidth="0.8" />
        {/* Precise Clock Hands pointing to European Peak Time */}
        <line x1="32" y1="32" x2="32" y2="18" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="32" x2="42" y2="32" strokeWidth="1.5" strokeLinecap="round" />
        {/* Network Satellite Nodes */}
        <circle cx="32" cy="6" r="2.5" className="fill-white stroke-none" />
        <circle cx="58" cy="32" r="2.5" className="fill-white stroke-none" />
        <circle cx="32" cy="58" r="2.5" className="fill-white stroke-none" />
        <circle cx="6" cy="32" r="2.5" className="fill-white stroke-none" />
        <circle cx="32" cy="32" r="3" className="fill-white stroke-none" />
      </svg>
    ),
  },
  {
    id: '02',
    category: 'SENIOR TALENT DENSITY',
    title: 'Top 3% Specialized Engineers',
    headline: 'No Junior Dilution',
    desc: 'We do not sell junior developers trained on your budget. We deploy battle-tested senior architects, network engineers, and full-stack builders from Day 1.',
    metric: 'Top 3%',
    metricSub: 'Vetted Senior Engineers',
    tags: ['Lead Developers', 'Network Architects', 'DevOps & Cloud'],
    iconSvg: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12 text-white stroke-current fill-none opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      >
        {/* High Density Architecture Matrix */}
        <polygon points="32,6 56,20 56,44 32,58 8,44 8,20" strokeWidth="1" />
        <polygon points="32,16 46,24 46,40 32,48 18,40 18,24" strokeWidth="0.8" strokeDasharray="2 2" />
        {/* Center Power Core */}
        <circle cx="32" cy="32" r="5" className="fill-white stroke-none" />
        <line x1="32" y1="6" x2="32" y2="16" strokeWidth="1" />
        <line x1="32" y1="48" x2="32" y2="58" strokeWidth="1" />
        <line x1="8" y1="20" x2="18" y2="24" strokeWidth="1" />
        <line x1="56" y1="20" x2="46" y2="24" strokeWidth="1" />
        <line x1="8" y1="44" x2="18" y2="40" strokeWidth="1" />
        <line x1="56" y1="44" x2="46" y2="40" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: '03',
    category: 'RAPID MOBILIZATION',
    title: 'Instant Squad Deployment',
    headline: '< 10 Days to Kickoff',
    desc: 'Bypass cumbersome 3–6 month hiring pipelines and payroll overhead. Rapidly onboard dedicated squads directly integrated into your Jira, Slack, and GitHub.',
    metric: '< 10 Days',
    metricSub: 'Average Ramp-up Time',
    tags: ['Instant Onboarding', 'Agile Sprints', 'Zero Hiring Latency'],
    iconSvg: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12 text-white stroke-current fill-none opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      >
        {/* High Speed Pipeline / Deployment Vector */}
        <path d="M12 48 L28 20 L38 34 L52 14" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 14 H52 V24" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="52" x2="52" y2="52" strokeWidth="0.8" strokeDasharray="3 3" />
        {/* Node checkpoints */}
        <circle cx="12" cy="48" r="2.5" className="fill-white stroke-none" />
        <circle cx="28" cy="20" r="2.5" className="fill-white stroke-none" />
        <circle cx="38" cy="34" r="2.5" className="fill-white stroke-none" />
        <circle cx="52" cy="14" r="3.5" className="fill-white stroke-none" />
      </svg>
    ),
  },
  {
    id: '04',
    category: 'INTELLECTUAL PROPERTY & SLA',
    title: 'Sovereign Code & 100% IP',
    headline: 'Zero Vendor Lock-in',
    desc: 'You hold full uncompromised ownership of all intellectual property, source repositories, and network configs from commit number one with strict European NDAs.',
    metric: '100%',
    metricSub: 'Client IP Ownership',
    tags: ['European NDAs', 'Complete Code Transfer', '99.999% SLA'],
    iconSvg: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12 text-white stroke-current fill-none opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      >
        {/* Secure Cryptographic Lock & Shield */}
        <rect x="18" y="26" width="28" height="26" rx="3" strokeWidth="1" />
        <path d="M24 26 V18 C24 13.58 27.58 10 32 10 C36.42 10 40 13.58 40 18 V26" strokeWidth="1.2" />
        <circle cx="32" cy="37" r="3" className="fill-white stroke-none" />
        <line x1="32" y1="40" x2="32" y2="45" strokeWidth="1.2" />
        <line x1="10" y1="39" x2="14" y2="39" strokeWidth="0.8" />
        <line x1="50" y1="39" x2="54" y2="39" strokeWidth="0.8" />
      </svg>
    ),
  },
];

const comparisonData = [
  {
    feature: 'Engineering Seniority',
    traditional: 'High mix of junior devs & frequent staff churn',
    kosiix: '100% handpicked senior engineers & architects',
  },
  {
    feature: 'Timezone & Collaboration',
    traditional: '8–12h timezone delay with off-hours handoffs',
    kosiix: 'Direct real-time CET sync during your core hours',
  },
  {
    feature: 'Communication & Workflow',
    traditional: 'Filtered through layers of non-technical account managers',
    kosiix: 'Direct access to engineers via Slack, Teams & Git',
  },
  {
    feature: 'IP & Code Sovereignty',
    traditional: 'Complex clauses, offshore disputes, opaque licensing',
    kosiix: '100% IP transfer from Day 1 under European jurisdiction',
  },
  {
    feature: 'Ramp-up Velocity',
    traditional: '2–4 months of contract negotiation & onboarding',
    kosiix: 'Battle-ready squads mobilized in under 10 days',
  },
];

const metrics = [
  { value: '55%', label: 'Cost Arbitrage', desc: 'vs. In-house European recruitment' },
  { value: '< 10d', label: 'Squad Deployment', desc: 'Fastest time-to-production' },
  { value: '98.4%', label: 'Client Retention', desc: 'Long-term enterprise partnerships' },
  { value: '0h', label: 'Timezone Drift', desc: 'Synchronous CET working day' },
];

const WhyOutsource = () => {
  const [activeTab, setActiveTab] = useState('kosiix'); // 'kosiix' | 'traditional'

  return (
    <section
      id="why-outsource"
      className="relative w-full pt-10 pb-32 sm:pt-16 sm:pb-44 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 sm:mb-28 pb-12 border-b border-white/[0.08]">
          <div>
            {/* Tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
              <p className="text-[0.65rem] sm:text-[0.7rem] font-inter font-medium tracking-[0.28em] uppercase text-white/40">
                Strategic Advantage // Outsourcing Reinvented
              </p>
            </div>

            {/* Headline */}
            <h2 className="font-syne font-extrabold text-[2.4rem] sm:text-[3.6rem] md:text-[4.4rem] leading-[1.04] tracking-[-0.04em] text-white">
              Why Outsource <br />
              With KOSIIX.
            </h2>
          </div>

          {/* Editorial statement */}
          <div className="mt-8 md:mt-0 max-w-[460px]">
            <p className="font-inter text-[0.88rem] sm:text-[0.95rem] font-light text-white/40 leading-[1.75]">
              Traditional outsourcing is broken—marred by junior turnover and timezone lag. KOSIIX provides dedicated European engineering squads that operate as an elite extension of your internal team.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid with Chamfered Cut-Corner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch mb-24 sm:mb-32">
          {corePillars.map((item) => (
            <div
              key={item.id}
              className="group relative h-full flex flex-col transition-all duration-500 ease-out hover:-translate-y-1.5"
            >
              {/* Chamfered Outer Border Container (2px bright border) */}
              <div
                className="relative h-full flex flex-col flex-1 p-[2px] bg-white/[0.4] group-hover:bg-white/[0.85] transition-colors duration-500"
                style={{
                  clipPath: 'polygon(32px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 32px)',
                }}
              >
                {/* Chamfered Inner Card Content */}
                <div
                  className="relative h-full flex-1 flex flex-col justify-between p-7 sm:p-8 bg-[#07070a] group-hover:bg-[#0b0b0f] backdrop-blur-md transition-colors duration-500"
                  style={{
                    clipPath: 'polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30px)',
                  }}
                >
                  {/* Subtle corner crosshairs on non-cut corners */}
                  <span className="absolute top-[4px] right-[4px] text-[9px] font-mono text-white/30 group-hover:text-white/70 transition-colors">+</span>
                  <span className="absolute bottom-[4px] left-[4px] text-[9px] font-mono text-white/30 group-hover:text-white/70 transition-colors">+</span>
                  <span className="absolute bottom-[4px] right-[4px] text-[9px] font-mono text-white/30 group-hover:text-white/70 transition-colors">+</span>

                  {/* Card top */}
                  <div className="flex-1 flex flex-col">
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-7 pl-3">
                      <span className="font-mono text-[0.72rem] tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                        {item.id} // {item.category}
                      </span>
                      <div className="flex items-center justify-center">{item.iconSvg}</div>
                    </div>

                    {/* Title */}
                    <h3 className="font-syne font-bold text-[1.35rem] sm:text-[1.5rem] tracking-[-0.03em] text-white mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* Subtitle badge */}
                    <p className="font-mono text-[0.72rem] text-white/60 tracking-wider mb-4 uppercase">
                      // {item.headline}
                    </p>

                    {/* Description */}
                    <p className="font-inter text-[0.84rem] sm:text-[0.88rem] font-light text-white/45 leading-[1.7] mb-8">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card bottom */}
                  <div className="mt-auto">
                    {/* Metric */}
                    <div className="pt-5 border-t border-white/[0.08] mb-5 flex items-baseline justify-between">
                      <span className="font-syne font-extrabold text-[1.75rem] text-white tracking-tight">
                        {item.metric}
                      </span>
                      <span className="font-inter text-[0.68rem] font-medium tracking-[0.1em] uppercase text-white/40 text-right">
                        {item.metricSub}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[0.65rem] font-inter font-medium text-white/50 bg-white/[0.04] border border-white/[0.08] rounded-sm group-hover:border-white/[0.2] group-hover:text-white/80 transition-colors"
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

        {/* Interactive Comparison Board: Traditional Outsourcing vs Kosiix */}
        <div className="relative mb-24 sm:mb-32">
          {/* Subheader */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span className="font-mono text-[0.68rem] tracking-[0.22em] uppercase text-white/40">
                  Direct Evaluation // The Shift
                </span>
              </div>
              <h3 className="font-syne font-bold text-[1.8rem] sm:text-[2.2rem] text-white tracking-[-0.03em]">
                The KOSIIX Standard vs Traditional Outsourcing
              </h3>
            </div>

            {/* Mobile Switcher Controls */}
            <div className="sm:hidden flex items-center bg-white/[0.05] p-1 rounded border border-white/[0.08] mt-4">
              <button
                onClick={() => setActiveTab('kosiix')}
                className={`flex-1 py-1.5 text-xs font-inter font-medium transition-all ${activeTab === 'kosiix' ? 'bg-white text-black font-semibold' : 'text-white/50'
                  }`}
              >
                Kosiix Model
              </button>
              <button
                onClick={() => setActiveTab('traditional')}
                className={`flex-1 py-1.5 text-xs font-inter font-medium transition-all ${activeTab === 'traditional' ? 'bg-white text-black font-semibold' : 'text-white/50'
                  }`}
              >
                Traditional
              </button>
            </div>
          </div>

          {/* Desktop & Tablet Comparison Matrix Table */}
          <div
            className="hidden sm:block p-[2px] bg-white/[0.25]"
            style={{
              clipPath: 'polygon(32px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 32px)',
            }}
          >
            <div
              className="bg-[#07070a] p-8 sm:p-10"
              style={{
                clipPath: 'polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30px)',
              }}
            >
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-6 pb-6 border-b border-white/[0.1] text-[0.72rem] font-mono uppercase tracking-[0.2em] text-white/40">
                <div className="col-span-3">Pillar Dimension</div>
                <div className="col-span-4 text-white/30">Traditional Outsourcing</div>
                <div className="col-span-5 text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Kosiix Dedicated Squad
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-white/[0.06]">
                {comparisonData.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 gap-6 py-5 items-center hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded"
                  >
                    {/* Dimension */}
                    <div className="col-span-3 font-syne font-semibold text-[0.95rem] text-white">
                      {row.feature}
                    </div>

                    {/* Traditional */}
                    <div className="col-span-4 font-inter text-[0.85rem] text-white/35 flex items-start gap-2.5">
                      <span className="text-rose-400/80 font-mono text-sm leading-none mt-0.5">✕</span>
                      <span>{row.traditional}</span>
                    </div>

                    {/* Kosiix */}
                    <div className="col-span-5 font-inter text-[0.88rem] text-white/90 font-normal flex items-start gap-2.5">
                      <span className="text-emerald-400 font-mono text-sm leading-none mt-0.5">✓</span>
                      <span>{row.kosiix}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Comparison View */}
          <div className="sm:hidden flex flex-col gap-4">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#07070a] border border-white/[0.1] rounded-sm flex flex-col gap-3"
              >
                <span className="font-syne font-bold text-white text-[1rem]">
                  {row.feature}
                </span>
                {activeTab === 'kosiix' ? (
                  <div className="flex items-start gap-2 text-white/90 text-sm font-inter">
                    <span className="text-emerald-400 font-mono text-sm">✓</span>
                    <span>{row.kosiix}</span>
                  </div>
                ) : (
                  <div className="flex items-start gap-2 text-white/40 text-sm font-inter">
                    <span className="text-rose-400 font-mono text-sm">✕</span>
                    <span>{row.traditional}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Telemetry & Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/[0.08]">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-syne font-extrabold text-[2.2rem] sm:text-[3rem] text-white tracking-tight leading-none mb-2">
                {m.value}
              </span>
              <span className="font-mono text-[0.75rem] text-white/70 uppercase tracking-[0.16em] mb-1">
                {m.label}
              </span>
              <span className="font-inter text-[0.78rem] font-light text-white/35">
                {m.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="mt-20 sm:mt-28 p-8 sm:p-12 border border-white/[0.12] bg-[#07070a] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40 block mb-2">
              Ready to Accelerate
            </span>
            <h4 className="font-syne font-bold text-[1.5rem] sm:text-[2rem] text-white tracking-tight">
              Deploy your dedicated European squad.
            </h4>
            <p className="font-inter text-[0.85rem] text-white/40 mt-1 max-w-lg">
              Book an exploratory architecture call with our leadership. We scope your technical roadmap and assemble your dedicated engineering pod.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-black font-inter font-semibold text-[0.85rem] tracking-wide hover:bg-white/90 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              Consult an Architect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOutsource;
