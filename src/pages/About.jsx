import SectionDivider from '../components/SectionDivider';

const coreValues = [
  {
    num: '01',
    title: 'Zero Junior Dilution',
    category: 'TALENT INTEGRITY',
    desc: 'We strictly reject the industry practice of billing senior rates for junior talent. Every member of our squads is a seasoned systems architect or lead developer.',
    tags: ['Senior Only', 'No Training Overhead', 'Battle-Tested'],
  },
  {
    num: '02',
    title: 'European Sovereignty',
    category: 'LEGAL & COMPLIANCE',
    desc: 'All contracts, intellectual property rights, and infrastructure adhere to stringent Swiss and EU data protection standards under European courts.',
    tags: ['100% IP Transfer', 'GDPR Native', 'Zero-Trust'],
  },
  {
    num: '03',
    title: 'Synchronous Velocity',
    category: 'TIMEZONE & ALIGNMENT',
    desc: 'Direct, unfiltered collaboration during standard Central European business hours. Daily standups, code reviews, and sprints without asynchronous lag.',
    tags: ['CET Timezone', 'Direct Slack/Git', '< 10d Deployment'],
  },
];

const teamMembers = [
  {
    name: 'Marc Steiner',
    role: 'Founder & Principal Architect',
    location: 'Zurich, Switzerland',
    bio: 'Former Tier-1 ISP infrastructure lead with 12+ years orchestrating carrier routing, BGP peering, and high-concurrency enterprise ecosystems.',
    image: '/images/team/marc.jpg',
    specialties: ['BGP & IP Transit', 'Cloud Architecture', 'Core Systems'],
  },
  {
    name: 'Elena Varga',
    role: 'Head of Network Architecture',
    location: 'Frankfurt, Germany',
    bio: 'Specialist in enterprise SD-WAN, zero-trust protocol enforcement, and carrier-grade DDoS mitigation frameworks across European data centers.',
    image: '/images/team/elena.jpg',
    specialties: ['SD-WAN & Peering', 'Zero-Trust Sec', 'Intra-EU Backbone'],
  },
  {
    name: 'Lukas Weber',
    role: 'Lead Full-Stack Systems Engineer',
    location: 'Munich, Germany',
    bio: 'Full-cycle engineering architect specializing in real-time distributed platforms, high-throughput microservices, and React/Next.js client experiences.',
    image: '/images/team/lukas.jpg',
    specialties: ['Distributed Systems', 'React & Node.js', 'High-Load SaaS'],
  },
  {
    name: 'Sophie Lindner',
    role: 'Director of Cloud & Cyber Governance',
    location: 'Vienna, Austria',
    bio: 'Cybersecurity and GDPR compliance strategist auditing enterprise deployments, ISO 27001 architectures, and encrypted telemetry pipelines.',
    image: '/images/team/sophie.jpg',
    specialties: ['ISO 27001', 'EU Data Sovereignty', 'Cryptographic Ops'],
  },
];

const About = () => {
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
        className="blob-float-2 absolute top-[35%] -right-24 w-[600px] sm:w-[900px] h-[500px] sm:h-[750px] rounded-full pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.18) 0%, rgba(21, 23, 34, 0.8) 45%, rgba(12, 13, 20, 0.55) 68%, transparent 85%)',
          filter: 'blur(85px)',
        }}
      />
      <div
        className="blob-float-3 absolute bottom-[10%] -left-20 w-[520px] sm:w-[750px] h-[380px] sm:h-[550px] rounded-full pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.16) 0%, rgba(21, 23, 34, 0.8) 45%, rgba(12, 13, 20, 0.55) 65%, transparent 85%)',
          filter: 'blur(75px)',
        }}
      />
      {/* Geometric Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* ── Content Container ── */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 pt-36 sm:pt-48 pb-32">
        {/* ── Section 1: Hero Manifesto ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 sm:mb-32 pb-16 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-[0.68rem] sm:text-[0.72rem] font-mono tracking-[0.24em] uppercase text-white/50">
                // ABOUT KOSIIX // SOVEREIGN MISSION
              </p>
            </div>

            <h1 className="font-syne font-extrabold text-[2.8rem] sm:text-[4rem] md:text-[5rem] leading-[1.02] tracking-[-0.04em] text-white">
              Architecting Europe’s <br />
              Sovereign Future.
            </h1>
          </div>

          <div className="mt-8 lg:mt-0 max-w-[460px]">
            <p className="font-inter text-[0.92rem] sm:text-[1.05rem] font-light text-white/50 leading-[1.8] mb-6">
              Headquartered in Zurich with dedicated engineering pods across Frankfurt, Munich, and nearshore European hubs, KOSIIX is the premium technology partner for enterprises demanding carrier-grade infrastructure and top-tier senior software development.
            </p>
            <div className="flex items-center gap-6 font-mono text-[0.75rem] text-white/70">
              <span>// 15+ Senior Architects</span>
              <span>// 100% CET Synchronous</span>
            </div>
          </div>
        </div>

        {/* ── Section 2: Core Engineering Standards (Chamfered Glass Cards) ── */}
        <div className="mb-28 sm:mb-40">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="font-mono text-[0.68rem] tracking-[0.2em] text-white/40 uppercase block mb-2">
                Operational Foundation
              </span>
              <h2 className="font-syne font-bold text-[1.8rem] sm:text-[2.4rem] text-white tracking-tight">
                Our Sovereign Engineering Principles
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {coreValues.map((val) => (
              <div
                key={val.num}
                className="group relative h-full flex flex-col transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Chamfered Outer Border */}
                <div
                  className="relative h-full flex flex-col flex-1 p-[2px] bg-gradient-to-b from-white/60 via-white/20 to-white/10 group-hover:from-white group-hover:via-white/50 group-hover:to-white/20 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                  style={{
                    clipPath: 'polygon(32px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 32px)',
                  }}
                >
                  {/* Chamfered Inner Content */}
                  <div
                    className="relative h-full flex-1 flex flex-col justify-between p-8 sm:p-10 bg-[#08090e]/80 group-hover:bg-[#0d0e17]/90 backdrop-blur-xl transition-all duration-500 overflow-hidden"
                    style={{
                      clipPath: 'polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30px)',
                    }}
                  >
                    {/* Top Specular Glare */}
                    <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8 pl-3">
                        <span className="font-mono text-[0.75rem] tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                          {val.num} // {val.category}
                        </span>
                      </div>

                      <h3 className="font-syne font-bold text-[1.45rem] sm:text-[1.65rem] tracking-tight text-white mb-4">
                        {val.title}
                      </h3>

                      <p className="font-inter text-[0.88rem] sm:text-[0.92rem] font-light text-white/45 leading-[1.75] mb-8">
                        {val.desc}
                      </p>
                    </div>

                    <div className="relative z-10 pt-6 border-t border-white/[0.08]">
                      <div className="flex flex-wrap gap-2">
                        {val.tags.map((tag) => (
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

        <SectionDivider label="ARCHITECTURE SQUAD LEADS // LEADERSHIP" />

        {/* ── Section 3: The Team (Color by default ➔ Black & White on Hover) ── */}
        <div className="my-28 sm:my-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span className="font-mono text-[0.68rem] tracking-[0.22em] uppercase text-white/40">
                  Principal Engineers & Leadership
                </span>
              </div>
              <h2 className="font-syne font-extrabold text-[2.2rem] sm:text-[3.2rem] text-white tracking-[-0.03em]">
                Built by Engineers. <br />
                Led by Architects.
              </h2>
            </div>

            <p className="font-inter text-[0.88rem] sm:text-[0.95rem] text-white/40 max-w-[420px] mt-6 md:mt-0 leading-relaxed font-light">
              Direct access to senior principals. Hover over any architect to inspect their specialization portfolio and European jurisdiction base.
            </p>
          </div>

          {/* Team Grid: 4 Chamfered Glass Cards with Color -> Grayscale on Hover */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group relative h-full flex flex-col transition-all duration-500 hover:-translate-y-2"
              >
                {/* Chamfered Outer Border Container */}
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
                    {/* Top Specular Glare */}
                    <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-20" />

                    {/* Portrait Image Area (Full color by default, converts to B&W on hover) */}
                    <div className="relative w-full aspect-[4/4.2] overflow-hidden bg-black/40">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center filter grayscale-0 group-hover:grayscale group-hover:contrast-125 transition-all duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Gradient Scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090e] via-transparent to-black/20 z-10" />

                      {/* Location Badge */}
                      <div className="absolute top-3.5 right-3.5 z-20 px-2.5 py-1 rounded-full bg-[#050507]/80 backdrop-blur-md border border-white/15 text-[0.62rem] font-mono text-white/70">
                        {member.location}
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="relative z-20 p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-syne font-bold text-[1.25rem] text-white tracking-tight group-hover:text-white transition-colors mb-1">
                          {member.name}
                        </h3>
                        <p className="font-mono text-[0.72rem] text-white/60 uppercase tracking-wider mb-4">
                          // {member.role}
                        </p>
                        <p className="font-inter text-[0.82rem] font-light text-white/45 leading-[1.65] mb-6">
                          {member.bio}
                        </p>
                      </div>

                      {/* Specialties */}
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

        {/* ── Section 4: Consultation Banner ── */}
        <div className="mt-20 sm:mt-28 p-8 sm:p-12 border border-white/20 bg-[#08090e]/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.25)] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

          <div className="relative z-10">
            <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40 block mb-2">
              European Technology Partnership
            </span>
            <h3 className="font-syne font-bold text-[1.6rem] sm:text-[2.2rem] text-white tracking-tight">
              Ready to collaborate with our senior principals?
            </h3>
            <p className="font-inter text-[0.88rem] text-white/45 mt-1 max-w-xl font-light">
              Connect directly with our solutions architects to discuss technical architecture, IP transit allocation, or dedicated engineering pods.
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

export default About;