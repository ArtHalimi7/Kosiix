import { useState } from 'react';
import SectionDivider from '../components/SectionDivider';

const serviceCategories = [
  {
    id: 'ip-transit',
    num: '01',
    category: 'CARRIER & CONNECTIVITY',
    title: 'Tier-1 IP Transit & Peering',
    headline: 'Carrier-Grade Connectivity with Sub-10ms European Backbone',
    desc: 'High-throughput IP transit architecture engineered for mission-critical enterprise workloads. Direct peering at key European internet exchanges (DE-CIX, SwissIX, AMS-IX, LINX) with redundant multi-homed BGP routing.',
    sla: '99.999%',
    slaLabel: 'Carrier SLA',
    features: [
      'Dedicated IPv4 & IPv6 Subnet Allocations & Leasing',
      'Multi-Homed BGP Anycast Routing & Traffic Optimization',
      'Real-Time Scrubbing DDoS Mitigation (Tbps+ Capacity)',
      'Direct Cloud Interconnects (AWS, Azure, GCP, Equinix)',
      '24/7/365 European NOC Monitoring & Incident Response',
    ],
    techStack: ['BGP-4', 'Anycast DNS', 'IPv4 / IPv6', 'MPLS', '100G Optical'],
  },
  {
    id: 'networking',
    num: '02',
    category: 'INFRASTRUCTURE & ZERO-TRUST',
    title: 'Enterprise Networking & Security',
    headline: 'Zero-Trust Protocol Enforcement & Private WAN Fabrics',
    desc: 'Design, deployment, and management of zero-trust network architectures (ZTNA) and enterprise SD-WAN solutions. Secure, hardware-isolated multi-datacenter connectivity built under strict EU data sovereignty guidelines.',
    sla: '< 10ms',
    slaLabel: 'Core EU Latency',
    features: [
      'Enterprise SD-WAN & Dynamic Mesh Tunneling',
      'Zero-Trust Network Access & Cryptographic Identity Enforcement',
      'Private Cross-Connects & Dedicated Wavelength Services',
      'ISO 27001 & NIS-2 European Compliance Hardening',
      'Real-Time Telemetry & Automated Failover Systems',
    ],
    techStack: ['ZTNA', 'IPsec / WireGuard', 'SD-WAN', 'Fortinet / Cisco', 'Vault'],
  },
  {
    id: 'development',
    num: '03',
    category: 'DIGITAL ENGINEERING',
    title: 'Full-Stack Software Engineering',
    headline: 'Dedicated Agile Squads Embedded Directly Into Your Sprints',
    desc: 'Bespoke engineering of high-throughput web applications, microservice architectures, and enterprise SaaS platforms. Senior software developers operating synchronously within CET hours under full client IP ownership.',
    sla: '100%',
    slaLabel: 'Client IP Transfer',
    features: [
      'Distributed High-Concurrency Microservices Architecture',
      'Real-Time Web Applications (React, Next.js, TypeScript)',
      'Native & Cross-Platform Mobile Engineering (iOS & Android)',
      'Automated CI/CD Pipelines & Infrastructure-as-Code (Terraform)',
      'Direct Slack/GitHub Integration with <10-Day Kickoff',
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Go', 'Python', 'Kubernetes', 'Docker'],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState('ip-transit');

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
        className="blob-float-2 absolute top-[40%] -right-24 w-[600px] sm:w-[900px] h-[500px] sm:h-[750px] rounded-full pointer-events-none z-0"
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
        {/* ── Hero Section ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 sm:mb-32 pb-16 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-[0.68rem] sm:text-[0.72rem] font-mono tracking-[0.24em] uppercase text-white/50">
                // CAPABILITIES & INFRASTRUCTURE // SOVEREIGN SOLUTIONS
              </p>
            </div>

            <h1 className="font-syne font-extrabold text-[2.8rem] sm:text-[4rem] md:text-[5rem] leading-[1.02] tracking-[-0.04em] text-white">
              Tier-1 IP, Carrier Networks <br />
              & Digital Systems.
            </h1>
          </div>

          <div className="mt-8 lg:mt-0 max-w-[460px]">
            <p className="font-inter text-[0.92rem] sm:text-[1.05rem] font-light text-white/50 leading-[1.8]">
              From redundant BGP carrier transit and European multi-cloud interconnects to dedicated full-stack software development pods, KOSIIX provides turnkey sovereign technology operations.
            </p>
          </div>
        </div>

        {/* ── 3 In-Depth Service Breakdown Panels (Chamfered Glass Cards) ── */}
        <div className="space-y-12 mb-28 sm:mb-40">
          {serviceCategories.map((service) => (
            <div
              key={service.id}
              className="group relative transition-all duration-500 hover:-translate-y-1"
            >
              {/* Chamfered Outer Border Container */}
              <div
                className="relative p-[2px] bg-gradient-to-b from-white/60 via-white/20 to-white/10 group-hover:from-white group-hover:via-white/50 group-hover:to-white/20 transition-all duration-500 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
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
                  {/* Top Specular Glare */}
                  <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent pointer-events-none" />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column: Title & Description */}
                    <div className="lg:col-span-6">
                      <div className="flex items-center gap-3 mb-6 pl-3">
                        <span className="font-mono text-[0.75rem] tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                          {service.num} // {service.category}
                        </span>
                      </div>

                      <h2 className="font-syne font-extrabold text-[2rem] sm:text-[2.6rem] text-white tracking-tight leading-tight mb-3">
                        {service.title}
                      </h2>

                      <p className="font-mono text-[0.75rem] text-white/60 uppercase tracking-wider mb-6">
                        // {service.headline}
                      </p>

                      <p className="font-inter text-[0.9rem] sm:text-[0.98rem] font-light text-white/50 leading-[1.8] mb-8">
                        {service.desc}
                      </p>

                      {/* SLA Metric Pill */}
                      <div className="p-4 bg-white/[0.03] border border-white/[0.08] rounded-sm inline-flex items-center gap-6">
                        <div>
                          <span className="font-syne font-extrabold text-[1.8rem] text-white tracking-tight block leading-none">
                            {service.sla}
                          </span>
                          <span className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-white/40">
                            {service.slaLabel}
                          </span>
                        </div>
                        <div className="h-8 w-px bg-white/10" />
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="font-mono text-[0.72rem] text-white/70">
                            Operational (CET)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Key Technical Features & Stack */}
                    <div className="lg:col-span-6 bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 rounded-sm">
                      <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40 block mb-6">
                        Technical Architecture & Deliverables
                      </span>

                      <ul className="space-y-4 mb-8">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[0.88rem] font-inter text-white/75 font-light leading-relaxed">
                            <span className="text-emerald-400 font-mono text-sm leading-none mt-1">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Chips */}
                      <div className="pt-6 border-t border-white/[0.08]">
                        <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-white/35 block mb-3">
                          Core Technologies & Protocols
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-[0.68rem] font-mono text-white/60 bg-white/[0.04] border border-white/[0.08] rounded-xs group-hover:border-white/20 group-hover:text-white/90 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SectionDivider label="ARCHITECTURE CONSULTATION // ENGAGEMENT" />

        {/* ── Consultation CTA ── */}
        <div className="mt-20 sm:mt-28 p-8 sm:p-12 border border-white/20 bg-[#08090e]/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.25)] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

          <div className="relative z-10">
            <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40 block mb-2">
              Bespoke Enterprise Scoping
            </span>
            <h3 className="font-syne font-bold text-[1.6rem] sm:text-[2.2rem] text-white tracking-tight">
              Need custom IP transit or a dedicated engineering squad?
            </h3>
            <p className="font-inter text-[0.88rem] text-white/45 mt-1 max-w-xl font-light">
              Our lead solutions architects in Zurich will evaluate your technical specifications and prepare a formal architecture proposal within 48 hours.
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

export default Services;