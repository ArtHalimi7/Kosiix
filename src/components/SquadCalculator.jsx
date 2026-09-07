import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const regions = [
  { id: 'ch', name: 'Switzerland (Zurich)', avgSeniorCost: 14000, currency: 'CHF' },
  { id: 'de', name: 'Germany (Frankfurt / Munich)', avgSeniorCost: 9500, currency: '€' },
  { id: 'uk', name: 'United Kingdom (London)', avgSeniorCost: 10500, currency: '€' },
];

const durations = [
  { months: 3, label: '3 Months Sprint' },
  { months: 6, label: '6 Months Project' },
  { months: 12, label: '12 Months Dedicated (10% Tier)' },
];

const SquadCalculator = () => {
  const [devCount, setDevCount] = useState(2);
  const [archCount, setArchCount] = useState(1);
  const [devopsCount, setDevopsCount] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState(regions[1]); // Germany default
  const [selectedDuration, setSelectedDuration] = useState(durations[2]); // 12 Months default

  // Total engineers in pod
  const totalHeadcount = devCount + archCount + devopsCount;

  // Real-world European cost calculations
  const stats = useMemo(() => {
    const kosiixDevRate = 5500;
    const kosiixArchRate = 6800;
    const kosiixDevopsRate = 5800;

    let monthlyKosiix =
      devCount * kosiixDevRate +
      archCount * kosiixArchRate +
      devopsCount * kosiixDevopsRate;

    // Apply 10% annual engagement discount
    if (selectedDuration.months === 12) {
      monthlyKosiix *= 0.9;
    }

    // In-house local loaded cost (Salary + employer taxes + hardware)
    const monthlyLocal =
      devCount * selectedRegion.avgSeniorCost +
      archCount * (selectedRegion.avgSeniorCost * 1.22) +
      devopsCount * (selectedRegion.avgSeniorCost * 1.05);

    const totalKosiix = Math.round(monthlyKosiix * selectedDuration.months);
    const totalLocal = Math.round(monthlyLocal * selectedDuration.months);
    const totalSavings = Math.max(0, totalLocal - totalKosiix);
    const monthlySavings = Math.round(totalSavings / selectedDuration.months);
    const savingsPercent = totalLocal > 0 ? Math.round((totalSavings / totalLocal) * 100) : 0;

    // Recruiting time saved
    const daysSaved = totalHeadcount * 30;

    return {
      monthlyKosiix: Math.round(monthlyKosiix),
      monthlyLocal: Math.round(monthlyLocal),
      monthlySavings,
      totalKosiix,
      totalLocal,
      totalSavings,
      savingsPercent,
      daysSaved: Math.min(daysSaved, 120),
    };
  }, [devCount, archCount, devopsCount, selectedRegion, selectedDuration, totalHeadcount]);

  return (
    <section
      id="calculator"
      className="relative w-full pt-12 pb-24 sm:pt-20 sm:pb-36 px-4 sm:px-6 md:px-12 bg-transparent select-none"
    >
      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-8 sm:pb-12 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-[0.65rem] sm:text-[0.7rem] font-mono tracking-[0.24em] uppercase text-white/40">
                Arbitrage & Efficiency // ROI Engine
              </p>
            </div>

            <h2 className="font-syne font-extrabold text-[2.2rem] sm:text-[3.4rem] md:text-[4.2rem] leading-[1.04] tracking-[-0.04em] text-white">
              Configure Squad. <br />
              Calculate Arbitrage.
            </h2>
          </div>

          <div className="mt-6 md:mt-0 max-w-[440px]">
            <p className="font-inter text-[0.88rem] sm:text-[0.95rem] font-light text-white/40 leading-[1.75]">
              Real European market rates compared directly against in-house hiring costs (salary, ~22% employer taxes, hardware, and recruiting overhead).
            </p>
          </div>
        </div>

        {/* ── Main Calculator Console (Chamfered Glass Panel) ── */}
        <div
          className="relative p-[2px] bg-gradient-to-b from-white/60 via-white/20 to-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.85)]"
          style={{
            clipPath: 'polygon(28px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 28px)',
          }}
        >
          <div
            className="relative bg-[#08090e]/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10 overflow-hidden"
            style={{
              clipPath: 'polygon(26px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 26px)',
            }}
          >
            {/* Top Specular Sheen */}
            <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
              {/* Left Column: Interactive Sliders & Region Controls */}
              <div className="lg:col-span-7 space-y-7">
                {/* Region Comparison Select */}
                <div>
                  <label className="block font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40 mb-3">
                    01 // Compare Against Local European Market
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {regions.map((reg) => (
                      <button
                        key={reg.id}
                        type="button"
                        onClick={() => setSelectedRegion(reg)}
                        className={`p-3 rounded-sm border text-left font-inter text-[0.78rem] transition-all cursor-pointer ${
                          selectedRegion.id === reg.id
                            ? 'bg-white text-black font-semibold border-white shadow-sm'
                            : 'bg-white/[0.03] border-white/[0.08] text-white/60 hover:text-white hover:border-white/25'
                        }`}
                      >
                        <span className="block truncate">{reg.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Squad Composition Sliders */}
                <div className="space-y-5 pt-4 border-t border-white/[0.08]">
                  <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40 block">
                    02 // Assemble Squad Personnel ({totalHeadcount} Engineers)
                  </span>

                  {/* Slider 1: Senior Full-Stack Developers */}
                  <div className="p-3.5 bg-white/[0.02] border border-white/[0.08] rounded-sm space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-syne font-bold text-white text-[0.92rem]">
                          Senior Full-Stack Developers
                        </span>
                        <p className="font-inter text-[0.7rem] text-white/40 font-light">
                          React, Next.js, Node.js, Go, Microservices
                        </p>
                      </div>
                      <span className="font-mono font-bold text-base text-white bg-white/[0.06] border border-white/15 px-2.5 py-0.5 rounded">
                        {devCount}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="6"
                      value={devCount}
                      onChange={(e) => setDevCount(Number(e.target.value))}
                      className="w-full accent-white h-1.5 bg-white/10 rounded-lg cursor-pointer appearance-none"
                    />
                  </div>

                  {/* Slider 2: Principal Network / Infra Architects */}
                  <div className="p-3.5 bg-white/[0.02] border border-white/[0.08] rounded-sm space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-syne font-bold text-white text-[0.92rem]">
                          Principal Network & IP Architects
                        </span>
                        <p className="font-inter text-[0.7rem] text-white/40 font-light">
                          BGP Routing, SD-WAN, Zero-Trust Architecture
                        </p>
                      </div>
                      <span className="font-mono font-bold text-base text-white bg-white/[0.06] border border-white/15 px-2.5 py-0.5 rounded">
                        {archCount}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="3"
                      value={archCount}
                      onChange={(e) => setArchCount(Number(e.target.value))}
                      className="w-full accent-white h-1.5 bg-white/10 rounded-lg cursor-pointer appearance-none"
                    />
                  </div>

                  {/* Slider 3: QA & DevOps Engineers */}
                  <div className="p-3.5 bg-white/[0.02] border border-white/[0.08] rounded-sm space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-syne font-bold text-white text-[0.92rem]">
                          DevOps & Cloud Security Engineers
                        </span>
                        <p className="font-inter text-[0.7rem] text-white/40 font-light">
                          CI/CD, Kubernetes, Terraform, ISO 27001
                        </p>
                      </div>
                      <span className="font-mono font-bold text-base text-white bg-white/[0.06] border border-white/15 px-2.5 py-0.5 rounded">
                        {devopsCount}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2"
                      value={devopsCount}
                      onChange={(e) => setDevopsCount(Number(e.target.value))}
                      className="w-full accent-white h-1.5 bg-white/10 rounded-lg cursor-pointer appearance-none"
                    />
                  </div>
                </div>

                {/* Engagement Horizon */}
                <div>
                  <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40 block mb-3">
                    03 // Engagement Timeline
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {durations.map((dur) => (
                      <button
                        key={dur.months}
                        type="button"
                        onClick={() => setSelectedDuration(dur)}
                        className={`p-2.5 rounded-sm border text-left font-mono text-[0.74rem] transition-all cursor-pointer ${
                          selectedDuration.months === dur.months
                            ? 'bg-white text-black font-semibold border-white'
                            : 'bg-white/[0.03] border-white/[0.08] text-white/60 hover:text-white hover:border-white/25'
                        }`}
                      >
                        {dur.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Output Summary & Polished Money Savings */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#050507]/95 border border-white/[0.14] p-5 sm:p-7 rounded-sm shadow-[0_10px_35px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                    <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40">
                      Arbitrage Summary
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-mono text-[0.64rem] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      CET Synchronous
                    </span>
                  </div>

                  {/* Side-by-Side Cost Comparison Tiles */}
                  <div className="grid grid-cols-2 gap-2.5 mb-5">
                    {/* In-House Total */}
                    <div className="p-3 bg-white/[0.02] border border-white/[0.08] rounded-sm overflow-hidden">
                      <span className="font-mono text-[0.6rem] uppercase text-white/40 block mb-1 truncate">
                        In-House ({selectedRegion.name.split(' ')[0]})
                      </span>
                      <span className="font-syne font-bold text-[1.1rem] sm:text-[1.25rem] text-white/60 block line-through decoration-rose-400/80 truncate">
                        {selectedRegion.currency}{stats.totalLocal.toLocaleString()}
                      </span>
                      <span className="text-[0.6rem] font-mono text-white/30 block mt-0.5 truncate">
                        ~{selectedRegion.currency}{stats.monthlyLocal.toLocaleString()}/mo
                      </span>
                    </div>

                    {/* Kosiix Total */}
                    <div className="p-3 bg-white/[0.04] border border-white/20 rounded-sm overflow-hidden">
                      <span className="font-mono text-[0.6rem] uppercase text-emerald-400 block mb-1 font-medium truncate">
                        KOSIIX Pod
                      </span>
                      <span className="font-syne font-extrabold text-[1.1rem] sm:text-[1.25rem] text-white block truncate">
                        {selectedRegion.currency}{stats.totalKosiix.toLocaleString()}
                      </span>
                      <span className="text-[0.6rem] font-mono text-white/40 block mt-0.5 truncate">
                        ~{selectedRegion.currency}{stats.monthlyKosiix.toLocaleString()}/mo
                      </span>
                    </div>
                  </div>

                  {/* Highlight: Big Money Saved Box (No overflow, responsive typography) */}
                  <div className="p-4 sm:p-5 bg-emerald-400/[0.04] border border-emerald-400/25 rounded-sm mb-5 relative overflow-hidden">
                    <span className="font-mono text-[0.62rem] uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                      You Save In Total ({selectedDuration.months} Months):
                    </span>
                    <div className="font-syne font-extrabold text-[1.8rem] sm:text-[2.2rem] xl:text-[2.6rem] text-emerald-400 tracking-tight leading-none mb-2 break-all">
                      +{selectedRegion.currency}{stats.totalSavings.toLocaleString()}
                    </div>
                    <p className="font-inter text-[0.74rem] sm:text-[0.78rem] text-white/70 leading-normal">
                      That’s <span className="text-white font-semibold">+{selectedRegion.currency}{stats.monthlySavings.toLocaleString()}</span> saved every month ({stats.savingsPercent}% cost advantage).
                    </p>
                  </div>

                  {/* Telemetry Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/[0.08] mb-5 font-mono text-[0.7rem]">
                    <div className="p-2.5 bg-white/[0.02] border border-white/[0.06] rounded-xs">
                      <span className="text-white/40 block text-[0.58rem] uppercase mb-0.5">
                        Time-to-Production
                      </span>
                      <span className="text-white font-bold">&lt; 10 Days</span>
                      <span className="text-white/30 text-[0.56rem] block mt-0.5">
                        vs. ~{stats.daysSaved}d recruiting
                      </span>
                    </div>

                    <div className="p-2.5 bg-white/[0.02] border border-white/[0.06] rounded-xs">
                      <span className="text-white/40 block text-[0.58rem] uppercase mb-0.5">
                        Legal Jurisdiction
                      </span>
                      <span className="text-white font-bold">100% Swiss / EU</span>
                      <span className="text-white/30 text-[0.56rem] block mt-0.5">
                        Full IP Transfer
                      </span>
                    </div>
                  </div>

                  {/* Guaranteed Protections */}
                  <div className="space-y-1.5 text-[0.72rem] font-inter text-white/60 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>100% Intellectual Property & Code Ownership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Zero junior dilution — senior engineers only</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Button */}
                <Link
                  to="/contact"
                  state={{
                    squadConfig: {
                      totalHeadcount,
                      devCount,
                      archCount,
                      devopsCount,
                      regionName: selectedRegion.name,
                      currency: selectedRegion.currency,
                      durationLabel: selectedDuration.label,
                      durationMonths: selectedDuration.months,
                      monthlyKosiix: stats.monthlyKosiix,
                      totalKosiix: stats.totalKosiix,
                      totalSavings: stats.totalSavings,
                      monthlySavings: stats.monthlySavings,
                      savingsPercent: stats.savingsPercent,
                    },
                  }}
                  className="relative z-10 w-full py-3.5 text-center bg-white text-black font-inter font-semibold text-[0.84rem] tracking-wide hover:bg-white/90 active:scale-[0.99] transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] block cursor-pointer"
                >
                  Reserve This {totalHeadcount}-Engineer Pod →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquadCalculator;
