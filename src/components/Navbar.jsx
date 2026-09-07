import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-500 ease-out ${scrolled ? 'navbar-scrolled' : 'bg-transparent'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            to="/"
            className="font-syne font-extrabold text-[1.15rem] tracking-[-0.02em] text-white select-none"
            onClick={() => setMobileOpen(false)}
          >
            KOSIIX
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[0.8rem] font-inter font-medium text-white/40 hover:text-white/90 transition-colors duration-300 tracking-[0.01em]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger (Staggered 2-line icon) */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-end gap-[6px] focus:outline-none z-50 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[3.75px]' : ''
                }`}
            />
            <span
              className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'w-6 -rotate-45 -translate-y-[3.75px]' : 'w-3.5'
                }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[84vw] max-w-[340px] bg-[#07070a] border-l border-white/[0.08] z-50 md:hidden flex flex-col justify-between p-6 sm:p-8 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Top Header with X Close Button */}
        <div className="pb-5 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="font-mono text-[0.68rem] tracking-[0.22em] uppercase text-white/40">
              Menu // Navigation
            </span>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 -mr-1.5 text-white/50 hover:text-white transition-colors duration-200 flex items-center justify-center rounded-md hover:bg-white/[0.06] active:scale-95"
            aria-label="Close navigation menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-current fill-none"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-5 my-auto py-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="group flex items-center justify-between py-2 text-[1.3rem] font-syne font-bold text-white/60 hover:text-white hover:translate-x-1.5 transition-all duration-300"
              onClick={() => setMobileOpen(false)}
            >
              <span className="tracking-tight">{link.name}</span>
              <span className="font-mono text-[0.7rem] font-normal text-white/20 group-hover:text-white/60 transition-colors">
                0{i + 1}
              </span>
            </Link>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
            <span className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-white/40">
              Operational // EU Network
            </span>
          </div>
          <p className="font-inter text-[0.75rem] font-light text-white/30">
            European Technology Partner
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;