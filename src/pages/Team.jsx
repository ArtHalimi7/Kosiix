import SectionDivider from '../components/SectionDivider';

const teamMembers = [
  {
    name: 'Marc Steiner',
    role: 'Founder & Principal Architect',
    location: 'Zurich, Switzerland',
    bio: 'Former Tier-1 ISP infrastructure lead with 12+ years orchestrating carrier routing, BGP peering, and high-concurrency enterprise ecosystems across Europe.',
    image: '/images/team/marc.jpg',
    specialties: ['BGP & IP Transit', 'Cloud Architecture', 'Core Systems', 'Carrier SLAs'],
  },
  {
    name: 'Elena Varga',
    role: 'Head of Network Architecture',
    location: 'Frankfurt, Germany',
    bio: 'Specialist in enterprise SD-WAN, zero-trust protocol enforcement, and carrier-grade DDoS mitigation frameworks across European data centers.',
    image: '/images/team/elena.jpg',
    specialties: ['SD-WAN & Peering', 'Zero-Trust Sec', 'Intra-EU Backbone', 'ZTNA Fabrics'],
  },
  {
    name: 'Lukas Weber',
    role: 'Lead Full-Stack Systems Engineer',
    location: 'Munich, Germany',
    bio: 'Full-cycle engineering architect specializing in real-time distributed platforms, high-throughput microservices, and React/Next.js client experiences.',
    image: '/images/team/lukas.jpg',
    specialties: ['Distributed Systems', 'React & Node.js', 'High-Load SaaS', 'Kubernetes'],
  },
  {
    name: 'Sophie Lindner',
    role: 'Director of Cloud & Cyber Governance',
    location: 'Vienna, Austria',
    bio: 'Cybersecurity and GDPR compliance strategist auditing enterprise deployments, ISO 27001 architectures, and encrypted telemetry pipelines.',
    image: '/images/team/sophie.jpg',
    specialties: ['ISO 27001', 'EU Data Sovereignty', 'Cryptographic Ops', 'NIS-2 Compliance'],
  },
];

const squadStructures = [
  {
    tier: '01 // RAPID SPRINT POD',
    title: 'Core Full-Stack Squad',
    idealFor: 'Bespoke SaaS Platforms & Mobile Ecosystems',
    composition: ['1x Lead Solutions Architect', '2x Senior Full-Stack Developers', '1x QA / DevOps Engineer'],
    rampUp: '< 10 Business Days',
    hours: '100% CET Synchronous',
  },
  {
    tier: '02 // INFRASTRUCTURE & IP',
    title: 'Carrier Network Pod',
    idealFor: 'SD-WAN, BGP Routing & Autonomous Systems',
    composition: ['1x Principal Network Architect', '2x Senior Infrastructure Engineers', '1x 24/7 NOC Specialist'],
    rampUp: '< 7 Business Days',
    hours: '24/7 Active European SLA',
  },
  {
    tier: '03 // SCALE ENTERPRISE',
    title: 'Dedicated Enterprise Division',
    idealFor: 'Large Scale Modernization & Multi-Cloud',
    composition: ['1x Engineering VP / Lead', '4x Senior Full-Stack & Systems Devs', '2x DevOps / Security Architects'],
    rampUp: '< 14 Business Days',
    hours: 'Direct Slack / Teams Integration',
  },
];

const Team = () => {
  return (
    <div className="relative w-full bg-[#050507] min-h-screen text-white select-none overflow-hidden">
      {/* ── Background Glow Canvas ── */}
      <div
        className="blob-float-1 absolute top-[5%] -left-20 w-[550px] sm:w-[800px] h-[400px] sm:h-[600px] rounded-full pointer-events-none z-0"
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
        {/* ── Hero Section ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 sm:mb-32 pb-16 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-[0.68rem] sm:text-[0.72rem] font-mono tracking-[0.24em] uppercase text-white/50">
                // SPECIALIZED TALENT // LEADERSHIP
              </p>
            </div>

            <h1 className="font-syne font-extrabold text-[2.8rem] sm:text-[4rem] md:text-[5rem] leading-[1.02] tracking-[-0.04em] text-white">
              The Sovereign <br />
              Engineering Collective.
            </h1>
          </div>

          <div className="mt-8 lg:mt-0 max-w-[460px]">
            <p className="font-inter text-[0.92rem] sm:text-[1.05rem] font-light text-white/50 leading-[1.8]">
              We do not outsource to offshore commodity factories. We deploy dedicated European squads of handpicked senior architects directly into your daily sprint cycles.
            </p>
          </div>
        </div>

        {/* ── Section 1: Team Members (Color -> B&W on hover) ── */}
        <div className="mb-28 sm:mb-40">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-[0.68rem] tracking-[0.2em] text-white/40 uppercase block mb-2">
                Executive & Technical Leadership
              </span>
              <h2 className="font-syne font-bold text-[1.8rem] sm:text-[2.6rem] text-white tracking-tight">
                Principal Architects & Squad Leads
              </h2>
            </div>
            <p className="font-inter text-[0.84rem] text-white/40 max-w-[360px] mt-4 sm:mt-0 font-light">
              Hover over any squad principal to inspect their core competencies and European operational base.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group relative h-full flex flex-col transition-all duration-500 hover:-translate-y-2"
              >
                {/* Chamfered Outer Border */}
                <div
                  className="relative h-full flex flex-col flex-1 p-[2px] bg-gradient-to-b from-white/50 via-white/20 to-white/10 group-hover:from-white group-hover:via-white/60 group-hover:to-white/20 transition-all duration-500 shadow-[0_12px_40px_rgba(0,0,0,0.7)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_25px_rgba(255,255,255,0.08)]"
                  style={{
                    clipPath: 'polygon(32px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 32px)',
                  }}
                >
                  {/* Chamfered Inner Card */}
                  <div
                    className="relative h-full flex-1 flex flex-col justify-between bg-[#08090e]/85 group-hover:bg-[#0d0e17]/95 backdrop-blur-xl transition-all duration-500 overflow-hidden"
                    style={{
                      clipPath: 'polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30px)',
                    }}
                  >
                    <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-20" />

                    {/* Portrait Image (Color ➔ Grayscale on hover) */}
                    <div className="relative w-full aspect-[4/4.2] overflow-hidden bg-black/40">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center filter grayscale-0 group-hover:grayscale group-hover:contrast-125 transition-all duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090e] via-transparent to-black/20 z-10" />

                      <div className="absolute top-3.5 right-3.5 z-20 px-2.5 py-1 rounded-full bg-[#050507]/80 backdrop-blur-md border border-white/15 text-[0.62rem] font-mono text-white/70">
                        {member.location}
                      </div>
                    </div>

                    <div className="relative z-20 p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-syne font-bold text-[1.25rem] text-white tracking-tight mb-1">
                          {member.name}
                        </h3>
                        <p className="font-mono text-[0.72rem] text-white/60 uppercase tracking-wider mb-4">
                          // {member.role}
                        </p>
                        <p className="font-inter text-[0.82rem] font-light text-white/45 leading-[1.65] mb-6">
                          {member.bio}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/[0.08]">
                        <div className="flex flex-wrap gap-1.5">
                          {member.specialties.map((spec) => (
                            <span
                              key={spec}
                              className="px-2 py-0.5 text-[0.64rem] font-mono text-white/50 bg-white/[0.03] border border-white/[0.08] rounded-xs group-hover:border-white/20 group-hover:text-white/80 transition-colors"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider label="SQUAD COMPOSITION // ENGAGEMENT TIERS" />

        {/* ── Section 2: Dedicated Squad Structures ── */}
        <div className="my-28 sm:my-40">
          <div className="mb-16 pb-8 border-b border-white/[0.08]">
            <span className="font-mono text-[0.68rem] tracking-[0.2em] text-white/40 uppercase block mb-2">
              Modular Deployment Models
            </span>
            <h2 className="font-syne font-extrabold text-[2.2rem] sm:text-[3rem] text-white tracking-tight">
              Standard Dedicated Squad Formats
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {squadStructures.map((squad, idx) => (
              <div
                key={idx}
                className="group relative h-full flex flex-col transition-all duration-500 hover:-translate-y-1.5"
              >
                <div
                  className="relative h-full flex flex-col flex-1 p-[2px] bg-gradient-to-b from-white/60 via-white/20 to-white/10 group-hover:from-white group-hover:via-white/50 group-hover:to-white/20 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                  style={{
                    clipPath: 'polygon(32px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 32px)',
                  }}
                >
                  <div
                    className="relative h-full flex-1 flex flex-col justify-between p-8 sm:p-10 bg-[#08090e]/85 group-hover:bg-[#0d0e17]/95 backdrop-blur-xl transition-all duration-500 overflow-hidden"
                    style={{
                      clipPath: 'polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30px)',
                    }}
                  >
                    <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

                    <div className="relative z-10">
                      <span className="font-mono text-[0.72rem] tracking-[0.2em] text-white/40 group-hover:text-white transition-colors block mb-6">
                        {squad.tier}
                      </span>

                      <h3 className="font-syne font-bold text-[1.6rem] text-white tracking-tight mb-2">
                        {squad.title}
                      </h3>

                      <p className="font-inter text-[0.85rem] text-white/50 font-light mb-8">
                        {squad.idealFor}
                      </p>

                      <div className="p-5 bg-white/[0.02] border border-white/[0.08] rounded-sm mb-8">
                        <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-white/35 block mb-3">
                          Standard Squad Personnel:
                        </span>
                        <ul className="space-y-2.5">
                          {squad.composition.map((item, cIdx) => (
                            <li key={cIdx} className="flex items-center gap-2.5 text-[0.82rem] font-inter text-white/80">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="relative z-10 pt-6 border-t border-white/[0.08] flex items-center justify-between font-mono text-[0.75rem]">
                      <div>
                        <span className="text-white/35 block text-[0.62rem] uppercase">Mobilization</span>
                        <span className="text-white font-medium">{squad.rampUp}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-white/35 block text-[0.62rem] uppercase">Alignment</span>
                        <span className="text-emerald-400 font-medium">{squad.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 3: Consultation CTA ── */}
        <div className="mt-20 sm:mt-28 p-8 sm:p-12 border border-white/20 bg-[#08090e]/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.25)] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

          <div className="relative z-10">
            <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40 block mb-2">
              Direct Senior Engagement
            </span>
            <h3 className="font-syne font-bold text-[1.6rem] sm:text-[2.2rem] text-white tracking-tight">
              Request a confidential squad scoping briefing.
            </h3>
            <p className="font-inter text-[0.88rem] text-white/45 mt-1 max-w-xl font-light">
              We analyze your architectural stack and present a customized squad structure tailored to your European timeline within 48 hours.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-black font-inter font-semibold text-[0.85rem] tracking-wide hover:bg-white/90 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              Consult an Architect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
