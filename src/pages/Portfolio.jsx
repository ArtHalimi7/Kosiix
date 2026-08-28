import SectionDivider from '../components/SectionDivider';

const caseStudies = [
  {
    id: 'swiss-fintech',
    num: '01 // FINTECH & DIGITAL ASSETS',
    client: 'Swiss Digital Exchange AG',
    location: 'Zurich, Switzerland',
    title: 'Ultra-Low Latency Core Banking & HFT Trading Platform',
    summary:
      'Engineered high-throughput matching engines, ISO 20022 messaging pipelines, and cryptographic custody integrations for a regulated Swiss digital asset exchange.',
    image: '/images/projects/fintech.jpg',
    metrics: [
      { label: 'Latency Reduction', value: '42%' },
      { label: 'Daily Throughput', value: '€2.4B+' },
      { label: 'Uptime SLA', value: '99.999%' },
    ],
    deliverables: [
      'Distributed Order Matching Engine in Go & Rust',
      'Real-Time WebSocket & FIX Protocol Streaming Gateways',
      'Hardware Security Module (HSM) Cryptographic Integration',
      'FINMA-Compliant Audit Trails & Telemetry',
    ],
    techStack: ['Go', 'Rust', 'React / TypeScript', 'Docker', 'FIX Protocol', 'Kafka'],
  },
  {
    id: 'telecom-bgp',
    num: '02 // INFRASTRUCTURE & IP',
    client: 'NetSurge European Carriers',
    location: 'Frankfurt & Amsterdam',
    title: 'Autonomous European BGP Routing & Anycast Fabric',
    summary:
      'Architected multi-homed BGP carrier peering across DE-CIX Frankfurt, SwissIX Zurich, and AMS-IX with autonomous traffic rerouting and active Tbps-scale DDoS scrubbing.',
    image: '/images/projects/telecom.jpg',
    metrics: [
      { label: 'Scrubbing Capacity', value: '2.5 Tbps' },
      { label: 'Intra-EU Latency', value: '< 8.2ms' },
      { label: 'Carrier Peering', value: '4 IXPs' },
    ],
    deliverables: [
      'Multi-Homed BGP Anycast Routing Architecture',
      'Hardware-Accelerated DDoS Mitigation Scrubbing Centers',
      'Real-Time European Network Operations Center (NOC) Dashboard',
      'Automated Route Optimization & Failover Pipelines',
    ],
    techStack: ['BGP-4', 'Anycast DNS', 'WireGuard', 'eBPF / XDP', 'Grafana / Prometheus'],
  },
  {
    id: 'medtech-cloud',
    num: '03 // HEALTHCARE & CLOUD SECURITY',
    client: 'MediVigil Health Technologies',
    location: 'Munich, Germany',
    title: 'GDPR-Native Sovereign Cloud & Telemetry Platform',
    summary:
      'Built an encrypted real-time clinical patient biometric streaming platform and hospital SaaS ecosystem adhering strictly to EU GDPR data sovereignty regulations.',
    image: '/images/projects/health.jpg',
    metrics: [
      { label: 'Deployment Time', value: '< 10 Days' },
      { label: 'GDPR Compliance', value: '100% Native' },
      { label: 'Connected Devices', value: '25,000+' },
    ],
    deliverables: [
      'End-to-End Cryptographic Zero-Knowledge Patient Vaults',
      'Real-Time Biometric Sensor Ingestion Pipeline',
      'Hospital Electronic Health Record (EHR) Integrations',
      'ISO 27001 & EU Medical Device Software Hardening',
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'WebRTC', 'Zero-Trust ZTNA', 'Kubernetes'],
  },
];

const Portfolio = () => {
  return (
    <div className="relative w-full bg-[#050507] min-h-screen text-white select-none overflow-hidden">
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
        className="blob-float-2 absolute top-[45%] -right-24 w-[600px] sm:w-[900px] h-[500px] sm:h-[750px] rounded-full pointer-events-none z-0"
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
                // ENTERPRISE CASE STUDIES // DELIVERED SYSTEMS
              </p>
            </div>

            <h1 className="font-syne font-extrabold text-[2.8rem] sm:text-[4rem] md:text-[5rem] leading-[1.02] tracking-[-0.04em] text-white">
              Proven Sovereign <br />
              Deployments.
            </h1>
          </div>

          <div className="mt-8 lg:mt-0 max-w-[460px]">
            <p className="font-inter text-[0.92rem] sm:text-[1.05rem] font-light text-white/50 leading-[1.8]">
              A curated selection of mission-critical engineering initiatives delivered by our dedicated squads for European financial institutions, telecom carriers, and healthcare enterprises.
            </p>
          </div>
        </div>

        {/* ── Case Studies List (Chamfered Glass Showcase Cards) ── */}
        <div className="space-y-16 sm:space-y-24 mb-28 sm:mb-40">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group relative transition-all duration-500 hover:-translate-y-1"
            >
              {/* Chamfered Outer Border Container */}
              <div
                className="relative p-[2px] bg-gradient-to-b from-white/60 via-white/20 to-white/10 group-hover:from-white group-hover:via-white/50 group-hover:to-white/20 transition-all duration-500 shadow-[0_15px_45px_rgba(0,0,0,0.7)]"
                style={{
                  clipPath: 'polygon(32px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 32px)',
                }}
              >
                {/* Chamfered Inner Glass Content */}
                <div
                  className="relative p-8 sm:p-12 bg-[#08090e]/85 group-hover:bg-[#0d0e17]/95 backdrop-blur-xl transition-all duration-500 overflow-hidden"
                  style={{
                    clipPath: 'polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30px)',
                  }}
                >
                  <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent pointer-events-none" />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
                    {/* Left: Project Details & Deliverables */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center justify-between mb-6 pl-3">
                        <span className="font-mono text-[0.72rem] tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                          {study.num}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[0.64rem] text-white/60">
                          {study.location}
                        </span>
                      </div>

                      <h2 className="font-syne font-extrabold text-[1.8rem] sm:text-[2.4rem] text-white tracking-tight leading-tight mb-4">
                        {study.title}
                      </h2>

                      <p className="font-inter text-[0.88rem] sm:text-[0.95rem] font-light text-white/50 leading-[1.75] mb-8">
                        {study.summary}
                      </p>

                      {/* Telemetry Metrics Grid */}
                      <div className="grid grid-cols-3 gap-4 p-5 bg-white/[0.02] border border-white/[0.08] rounded-sm mb-8">
                        {study.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex flex-col">
                            <span className="font-syne font-extrabold text-[1.5rem] sm:text-[1.8rem] text-white tracking-tight leading-none mb-1">
                              {m.value}
                            </span>
                            <span className="font-mono text-[0.62rem] sm:text-[0.66rem] uppercase tracking-wider text-white/40">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Deliverables List */}
                      <div className="mb-8">
                        <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-white/35 block mb-3">
                          Key Architecture Deliverables:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {study.deliverables.map((deliv, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-[0.8rem] font-inter text-white/70 font-light">
                              <span className="text-emerald-400 font-mono text-xs mt-0.5">✓</span>
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-2">
                        {study.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[0.66rem] font-mono text-white/60 bg-white/[0.04] border border-white/[0.08] rounded-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Cinematic Visual Showcase */}
                    <div className="lg:col-span-5 relative">
                      <div className="relative rounded-lg overflow-hidden border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.8)] aspect-[16/10] bg-black/60 group-hover:border-white/30 transition-colors">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08090e]/80 via-transparent to-black/20" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[0.68rem] text-white/80 backdrop-blur-md bg-black/40 px-3 py-1.5 rounded border border-white/10">
                          <span>{study.client}</span>
                          <span className="text-emerald-400">● Case Study Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SectionDivider label="EXPLORATORY CONSULTATION // YOUR ROADMAP" />

        {/* ── Consultation CTA ── */}
        <div className="mt-20 sm:mt-28 p-8 sm:p-12 border border-white/20 bg-[#08090e]/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.25)] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

          <div className="relative z-10">
            <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40 block mb-2">
              Bespoke Enterprise Delivery
            </span>
            <h3 className="font-syne font-bold text-[1.6rem] sm:text-[2.2rem] text-white tracking-tight">
              Ready to architect your enterprise initiative?
            </h3>
            <p className="font-inter text-[0.88rem] text-white/45 mt-1 max-w-xl font-light">
              Schedule an architecture discovery session. We will evaluate your technical specifications and mobilize your dedicated squad within 10 days.
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

export default Portfolio;
