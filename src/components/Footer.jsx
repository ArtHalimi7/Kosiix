import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45 1.45 1.45 0 0 0 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
      ),
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:contact@kosiix.com',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 stroke-current fill-none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative w-full bg-[#050507] border-t border-white/[0.08] text-white select-none z-30">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 pt-20 pb-12">
        {/* Top Tier: Logo & Scroll To Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-16 border-b border-white/[0.08]">
          {/* Logo (Identical to Navbar) */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="font-syne font-extrabold text-[1.15rem] tracking-[-0.02em] text-white hover:opacity-80 transition-opacity"
          >
            KOSIIX
          </Link>

          {/* Right: Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-4 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/30 rounded-sm transition-all duration-300 active:scale-95 cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-white/50 group-hover:text-white transition-colors">
              Back to Top
            </span>
            <div className="w-5 h-5 rounded-full bg-white/[0.06] group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300">
              <svg
                viewBox="0 0 24 24"
                className="w-3 h-3 stroke-current fill-none"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Middle Tier: Navigation Columns & Socials */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-16 border-b border-white/[0.08]">
          {/* Col 1: Bio */}
          <div className="col-span-2 lg:col-span-2 pr-0 lg:pr-12">
            <p className="font-inter text-[0.88rem] font-light text-white/45 leading-[1.75] mb-8 max-w-[360px]">
              High-end technology outsourcing and dedicated European engineering squads for ambitious enterprises. Built for sovereign scale and zero latency.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-sm bg-white/[0.03] border border-white/[0.08] hover:border-white/40 hover:bg-white/10 text-white/50 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40 block mb-5">
              Capabilities
            </span>
            <ul className="flex flex-col gap-3 font-inter text-[0.85rem] text-white/60">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  IP Transit & Peering
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Enterprise SD-WAN
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Full-Stack Web & Mobile
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Zero-Trust Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40 block mb-5">
              Company
            </span>
            <ul className="flex flex-col gap-3 font-inter text-[0.85rem] text-white/60">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Engineering Pods
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Compliance & Sovereignty */}
          <div>
            <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40 block mb-5">
              Sovereignty
            </span>
            <ul className="flex flex-col gap-3 font-inter text-[0.85rem] text-white/60">
              <li className="text-white/40 text-xs">GDPR Compliant</li>
              <li className="text-white/40 text-xs">100% European IP Transfer</li>
              <li className="text-white/40 text-xs">99.999% Core SLA</li>
              <li className="text-white/40 text-xs">CET Real-Time Sync</li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[0.75rem] font-light text-white/35">
            © {new Date().getFullYear()} KOSIIX Technologies AG. All rights reserved.
          </p>

          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-white/40">
              European Network // Operational (CET)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
