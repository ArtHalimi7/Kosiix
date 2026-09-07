import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import SectionDivider from '../components/SectionDivider';

const projectTypes = [
  'Dedicated Engineering Squad',
  'Tier-1 IP Transit & Peering',
  'Enterprise SD-WAN & Zero-Trust',
  'Bespoke SaaS / Web Platform',
  'Native iOS / Android App',
  'Infrastructure Security Audit',
];

const budgetRanges = [
  '€10k – €25k / mo',
  '€25k – €50k / mo',
  '€50k – €100k+ / mo',
  'Custom Carrier Quote',
];

const timelines = ['Immediate (< 10 Days)', '1 – 2 Months', 'Quarterly Initiative'];

const Contact = () => {
  const location = useLocation();
  const [squadConfig, setSquadConfig] = useState(location.state?.squadConfig || null);
  const [selectedType, setSelectedType] = useState('Dedicated Engineering Squad');
  const [selectedBudget, setSelectedBudget] = useState('€25k – €50k / mo');
  const [selectedTimeline, setSelectedTimeline] = useState('Immediate (< 10 Days)');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (location.state?.squadConfig) {
      const cfg = location.state.squadConfig;
      setSquadConfig(cfg);
      setSelectedType('Dedicated Engineering Squad');

      if (cfg.monthlyKosiix < 25000) {
        setSelectedBudget('€10k – €25k / mo');
      } else if (cfg.monthlyKosiix < 50000) {
        setSelectedBudget('€25k – €50k / mo');
      } else {
        setSelectedBudget('€50k – €100k+ / mo');
      }

      if (cfg.durationMonths <= 3) {
        setSelectedTimeline('Immediate (< 10 Days)');
      } else if (cfg.durationMonths <= 6) {
        setSelectedTimeline('1 – 2 Months');
      } else {
        setSelectedTimeline('Quarterly Initiative');
      }
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;
    setSubmitted(true);
  };

  return (
    <div className="relative w-full bg-[#050507] min-h-screen text-white select-none overflow-hidden">
      <PageMeta
        title="Contact Leadership & Architecture Scoping | KOSIIX"
        description="Connect directly with our solutions architects in Zurich and Frankfurt to scope dedicated European squads, IP transit, and cloud infrastructure."
        canonicalPath="/contact"
      />
      {/* ── Background Glow Canvas ── */}
      <div
        className="blob-float-1 absolute top-[4%] -left-20 w-[550px] sm:w-[800px] h-[400px] sm:h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 45% 45%, rgba(255, 255, 255, 0.2) 0%, rgba(21, 23, 34, 0.85) 45%, rgba(12, 13, 20, 0.6) 65%, transparent 85%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="blob-float-2 absolute top-[40%] -right-24 w-[600px] sm:w-[900px] h-[500px] sm:h-[750px] rounded-full pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.18) 0%, rgba(21, 23, 34, 0.8) 45%, rgba(12, 13, 20, 0.55) 68%, transparent 85%)',
          filter: 'blur(85px)',
        }}
      />

      {/* Geometric Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* ── Content Container ── */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 pt-36 sm:pt-48 pb-32">
        {/* ── Hero Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 sm:mb-28 pb-16 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-[0.68rem] sm:text-[0.72rem] font-mono tracking-[0.24em] uppercase text-white/50">
                // ARCHITECT CONSULTATION // DIRECT SCOPING
              </p>
            </div>

            <h1 className="font-syne font-extrabold text-[2.8rem] sm:text-[4rem] md:text-[5rem] leading-[1.02] tracking-[-0.04em] text-white">
              Initiate Your <br />
              European Deployment.
            </h1>
          </div>

          <div className="mt-8 lg:mt-0 max-w-[460px]">
            <p className="font-inter text-[0.92rem] sm:text-[1.05rem] font-light text-white/50 leading-[1.8]">
              Connect directly with our senior solutions architects in Zurich and Frankfurt. We review requirements confidentially and provide formal scoping in under 48 hours.
            </p>
          </div>
        </div>

        {/* ── Scoping Console & Direct Channels Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 mb-28">
          {/* Left Column: Interactive Scoping Form */}
          <div className="lg:col-span-8">
            <div
              className="p-[2px] bg-gradient-to-b from-white/60 via-white/20 to-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              style={{
                clipPath: 'polygon(32px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 32px)',
              }}
            >
              <div
                className="bg-[#08090e]/90 backdrop-blur-xl p-8 sm:p-12 relative overflow-hidden"
                style={{
                  clipPath: 'polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30px)',
                }}
              >
                <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

                {submitted ? (
                  <div className="relative z-10 py-16 text-center space-y-6 animate-in fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 mx-auto flex items-center justify-center font-mono text-2xl">
                      ✓
                    </div>
                    <h3 className="font-syne font-bold text-[2rem] text-white tracking-tight">
                      Inquiry Received by Architecture Lead
                    </h3>
                    <p className="font-inter text-[0.92rem] text-white/60 max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.name}. Our principal solutions architect will review your project parameters and respond to <span className="text-white font-medium">{formData.email}</span> within 24 hours.
                    </p>

                    {squadConfig && (
                      <div className="p-3.5 bg-emerald-400/[0.06] border border-emerald-400/25 rounded font-mono text-[0.75rem] text-emerald-400/90 max-w-md mx-auto">
                        Attached Pod Scope: {squadConfig.totalHeadcount}-Engineer Dedicated Squad // {squadConfig.regionName} ({squadConfig.durationLabel})
                      </div>
                    )}

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-sm bg-white/[0.05] border border-white/20 text-white/70 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
                    {/* Pod Transfer Configuration Banner */}
                    {squadConfig && (
                      <div className="p-5 bg-white/[0.03] border border-emerald-400/35 rounded-sm relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="font-mono text-[0.66rem] uppercase tracking-wider text-emerald-400 font-semibold">
                              Squad Pod Transferred // {squadConfig.regionName}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSquadConfig(null)}
                            className="text-[0.68rem] font-mono text-white/40 hover:text-white transition-colors underline cursor-pointer"
                          >
                            Clear pod specification
                          </button>
                        </div>

                        <div className="font-syne font-bold text-lg sm:text-xl text-white tracking-tight mb-2">
                          {squadConfig.totalHeadcount}-Engineer Dedicated Squad ({squadConfig.durationLabel})
                        </div>

                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="px-2.5 py-0.5 rounded-xs bg-white/[0.06] border border-white/15 font-mono text-[0.72rem] text-white">
                            {squadConfig.devCount}x Full-Stack
                          </span>
                          <span className="px-2.5 py-0.5 rounded-xs bg-white/[0.06] border border-white/15 font-mono text-[0.72rem] text-white">
                            {squadConfig.archCount}x Principal Architect
                          </span>
                          {squadConfig.devopsCount > 0 && (
                            <span className="px-2.5 py-0.5 rounded-xs bg-white/[0.06] border border-white/15 font-mono text-[0.72rem] text-white">
                              {squadConfig.devopsCount}x DevOps
                            </span>
                          )}
                          <span className="px-2.5 py-0.5 rounded-xs bg-emerald-400/10 border border-emerald-400/30 font-mono text-[0.72rem] text-emerald-400">
                            {squadConfig.regionName}
                          </span>
                        </div>

                        <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between font-mono text-[0.72rem]">
                          <span className="text-white/40">
                            Est. Monthly: ~{squadConfig.currency}{squadConfig.monthlyKosiix?.toLocaleString()}/mo
                          </span>
                          <span className="text-emerald-400 font-semibold">
                            +{squadConfig.currency}{squadConfig.totalSavings?.toLocaleString()} Arbitrage ({squadConfig.savingsPercent}%)
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Step 1: Project Type */}
                    <div>
                      <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-white/40 block mb-4">
                        01 // Select Core Capability
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {projectTypes.map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`p-3 rounded-sm border text-left font-inter text-[0.82rem] transition-all cursor-pointer ${
                              selectedType === type
                                ? 'bg-white text-black font-semibold border-white shadow-sm'
                                : 'bg-white/[0.03] border-white/[0.08] text-white/60 hover:text-white hover:border-white/25'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Budget & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-white/40 block mb-4">
                          02 // Monthly Budget Bracket
                        </span>
                        <div className="flex flex-col gap-2">
                          {budgetRanges.map((b) => (
                            <button
                              type="button"
                              key={b}
                              onClick={() => setSelectedBudget(b)}
                              className={`p-2.5 rounded-sm border text-left font-mono text-[0.75rem] transition-all cursor-pointer ${
                                selectedBudget === b
                                  ? 'bg-white text-black font-semibold border-white'
                                  : 'bg-white/[0.03] border-white/[0.08] text-white/60 hover:text-white hover:border-white/25'
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-white/40 block mb-4">
                          03 // Expected Deployment Window
                        </span>
                        <div className="flex flex-col gap-2">
                          {timelines.map((t) => (
                            <button
                              type="button"
                              key={t}
                              onClick={() => setSelectedTimeline(t)}
                              className={`p-2.5 rounded-sm border text-left font-mono text-[0.75rem] transition-all cursor-pointer ${
                                selectedTimeline === t
                                  ? 'bg-white text-black font-semibold border-white'
                                  : 'bg-white/[0.03] border-white/[0.08] text-white/60 hover:text-white hover:border-white/25'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Contact Info Inputs */}
                    <div className="space-y-5 pt-4 border-t border-white/[0.08]">
                      <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-white/40 block">
                        04 // Contact Coordinates
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[0.65rem] text-white/40 uppercase mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Marc Steiner"
                            className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.1] focus:border-white/40 rounded-sm font-inter text-[0.86rem] text-white placeholder:text-white/20 focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[0.65rem] text-white/40 uppercase mb-2">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@enterprise.ch"
                            className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.1] focus:border-white/40 rounded-sm font-inter text-[0.86rem] text-white placeholder:text-white/20 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono text-[0.65rem] text-white/40 uppercase mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Zurich Financial AG"
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.1] focus:border-white/40 rounded-sm font-inter text-[0.86rem] text-white placeholder:text-white/20 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[0.65rem] text-white/40 uppercase mb-2">
                          Project Requirements & Technical Brief
                        </label>
                        <textarea
                          rows="4"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Briefly describe your stack, objectives, and any compliance constraints..."
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.1] focus:border-white/40 rounded-sm font-inter text-[0.86rem] text-white placeholder:text-white/20 focus:outline-none transition-colors resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-white text-black font-inter font-semibold text-[0.9rem] tracking-wide hover:bg-white/90 active:scale-[0.99] transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] cursor-pointer"
                    >
                      Submit Scoping Brief // Deploy in &lt;10 Days
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Regional Hubs & SLA Commitments */}
          <div className="lg:col-span-4 space-y-8">
            {/* Headquarters Card */}
            <div
              className="p-[1.5px] bg-white/[0.15]"
              style={{
                clipPath: 'polygon(24px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 24px)',
              }}
            >
              <div
                className="bg-[#08090e]/85 backdrop-blur-xl p-8"
                style={{
                  clipPath: 'polygon(23px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 23px)',
                }}
              >
                <span className="font-mono text-[0.65rem] tracking-[0.2em] text-white/40 uppercase block mb-4">
                  European Headquarters
                </span>
                <h3 className="font-syne font-bold text-[1.4rem] text-white tracking-tight mb-2">
                  Zurich, Switzerland
                </h3>
                <p className="font-inter text-[0.84rem] text-white/50 font-light mb-6">
                  KOSIIX Technologies AG <br />
                  Bahnhofstrasse 28, 8001 Zurich <br />
                  Switzerland
                </p>

                <div className="pt-4 border-t border-white/[0.08] space-y-2 font-mono text-[0.75rem]">
                  <p className="text-white/60">
                    Direct NOC: <span className="text-white">+41 44 892 10 00</span>
                  </p>
                  <p className="text-white/60">
                    Email: <span className="text-white">solutions@kosiix.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Operations Hub Frankfurt */}
            <div
              className="p-[1.5px] bg-white/[0.15]"
              style={{
                clipPath: 'polygon(24px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 24px)',
              }}
            >
              <div
                className="bg-[#08090e]/85 backdrop-blur-xl p-8"
                style={{
                  clipPath: 'polygon(23px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 23px)',
                }}
              >
                <span className="font-mono text-[0.65rem] tracking-[0.2em] text-white/40 uppercase block mb-4">
                  Network & Transit Operations
                </span>
                <h3 className="font-syne font-bold text-[1.4rem] text-white tracking-tight mb-2">
                  Frankfurt, Germany
                </h3>
                <p className="font-inter text-[0.84rem] text-white/50 font-light mb-6">
                  DE-CIX Peering Facility <br />
                  Hanauer Landstraße 300, 60314 Frankfurt <br />
                  Germany
                </p>

                <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[0.72rem] text-white/80">
                    Carrier NOC // Active 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* Sovereign Commitments Pill */}
            <div className="p-6 bg-white/[0.02] border border-white/[0.08] rounded-sm space-y-3">
              <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-white/35 block">
                Sovereign Commitments
              </span>
              <ul className="space-y-2 text-[0.78rem] font-inter text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> 100% IP & Code Ownership Transfer
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> European NDAs under Swiss/EU Courts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Strict GDPR & ISO 27001 Compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
