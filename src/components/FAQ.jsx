import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    id: '01',
    category: 'IP & LEGAL',
    question: 'How does intellectual property (IP) and code ownership work?',
    answer:
      'You retain 100% uncompromised ownership of all source code, architectural documentation, configurations, and intellectual property from the first commit. All contracts and NDAs operate under strict European jurisdiction with zero third-party licensing or vendor lock-in.',
  },
  {
    id: '02',
    category: 'DEPLOYMENT TIMELINE',
    question: 'How quickly can a dedicated European engineering squad be deployed?',
    answer:
      'Our standard mobilization window is under 10 business days. Because we maintain pre-vetted pods of senior software developers and network architects across Zurich, Frankfurt, and nearshore European hubs, your team can integrate into your daily Jira/Slack sprints without lengthy recruiting cycles.',
  },
  {
    id: '03',
    category: 'COLLABORATION & TIMEZONE',
    question: 'How do you guarantee real-time CET timezone alignment?',
    answer:
      'Our engineers operate fully synchronously within Central European Time (CET). There are zero overnight handoff lags or communication bottlenecks—daily standups, PR reviews, and sprint planning occur during your standard core business hours.',
  },
  {
    id: '04',
    category: 'SOVEREIGNTY & COMPLIANCE',
    question: 'How do you ensure GDPR compliance and enterprise data security?',
    answer:
      'All infrastructure and development workflows adhere to ISO 27001 standards and strict EU GDPR data sovereignty regulations. We utilize zero-trust access protocols, hardware-isolated workstations, and dedicated VPN tunnels ensuring client data never leaves European borders.',
  },
  {
    id: '05',
    category: 'INFRASTRUCTURE & NETWORKING',
    question: 'What carrier transit and networking guarantees do you provide?',
    answer:
      'Our network architects manage Tier-1 IP Transit lines, dedicated IPv4 and IPv6 subnet allocations, BGP routing optimizations, and carrier-grade DDoS mitigation with a guaranteed 99.999% Core SLA and sub-10ms intra-European backbone latency.',
  },
  {
    id: '06',
    category: 'ENGAGEMENT FLEXIBILITY',
    question: 'Can we scale our engineering pod size up or down as project demands shift?',
    answer:
      'Yes. Our engagement models are built for agile enterprise scalability. You can expand your pod with additional full-stack engineers or scale down with a straightforward 30-day notice, providing optimal cost predictability without long-term overhead.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full pt-16 pb-32 sm:pt-24 sm:pb-40 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
              <p className="text-[0.65rem] sm:text-[0.7rem] font-inter font-medium tracking-[0.28em] uppercase text-white/40">
                Frequently Answered // Architecture & Engagement
              </p>
            </div>

            <h2 className="font-syne font-extrabold text-[2.4rem] sm:text-[3.6rem] md:text-[4.4rem] leading-[1.04] tracking-[-0.04em] text-white">
              Questions & <br />
              Sovereign Terms.
            </h2>
          </div>

          <div className="mt-8 md:mt-0 max-w-[440px]">
            <p className="font-inter text-[0.88rem] sm:text-[0.95rem] font-light text-white/40 leading-[1.75]">
              Clear answers on our engagement framework, European legal protections, IP sovereignty, and sprint integration.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 max-w-[1080px] mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="group relative transition-all duration-300"
              >
                {/* Chamfered Glass Outer Rim */}
                <div
                  className={`relative p-[1.5px] transition-all duration-500 ${
                    isOpen
                      ? 'bg-gradient-to-r from-white/70 via-white/30 to-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.05)]'
                      : 'bg-white/[0.08] hover:bg-white/[0.2]'
                  }`}
                  style={{
                    clipPath: 'polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20px)',
                  }}
                >
                  {/* Inner Glass Box */}
                  <div
                    className={`relative p-6 sm:p-8 transition-colors duration-500 overflow-hidden ${
                      isOpen
                        ? 'bg-[#0a0b12]/90 backdrop-blur-xl'
                        : 'bg-[#07070a]/80 hover:bg-[#0b0c13]/90 backdrop-blur-md'
                    }`}
                    style={{
                      clipPath: 'polygon(19px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 19px)',
                    }}
                  >
                    {/* Glary Top Reflection */}
                    {isOpen && (
                      <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />
                    )}

                    {/* Question Button Trigger */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between text-left gap-6 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                        <span className="font-mono text-[0.72rem] tracking-[0.2em] text-white/35 mt-1 sm:mt-0 shrink-0">
                          {faq.id} //
                        </span>
                        <h3
                          className={`font-syne font-bold text-[1.1rem] sm:text-[1.35rem] tracking-tight transition-colors ${
                            isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'
                          }`}
                        >
                          {faq.question}
                        </h3>
                      </div>

                      {/* Plus / Minus Indicator */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                          isOpen
                            ? 'bg-white text-black border-white rotate-45'
                            : 'bg-white/[0.03] border-white/15 text-white/60 group-hover:text-white group-hover:border-white/40'
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3.5 h-3.5 stroke-current fill-none"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    </button>

                    {/* Collapsible Answer Panel */}
                    <div
                      className={`grid transition-all duration-400 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-5 pt-5 border-t border-white/[0.08]' : 'grid-rows-[0fr] opacity-0 mt-0 pt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-inter text-[0.88rem] sm:text-[0.94rem] font-light text-white/60 leading-[1.8] max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Have another question footer banner */}
        <div className="mt-16 text-center">
          <p className="font-inter text-[0.84rem] text-white/40">
            Have a custom architecture or compliance inquiry?{' '}
            <Link
              to="/contact"
              className="text-white underline underline-offset-4 hover:text-white/80 transition-colors font-medium ml-1"
            >
              Consult an Architect directly →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
