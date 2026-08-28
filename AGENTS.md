# AGENT CONTEXT & INSTRUCTIONS: KOSIIX

## 🏢 Business Context
- **Company**: **KOSIIX**
- **Business Model**: High-end technology outsourcing firm serving European enterprise clients.
- **Team**: 15+ specialized engineers, network architects, and full-stack software developers.
- **Core Pillars**:
  1. **IP & Connectivity Services**: Tier-1 IP Transit, dedicated IPv4/IPv6 allocation, BGP routing, DDoS mitigation.
  2. **Enterprise Networking & Infrastructure**: SD-WAN, zero-trust security, private interconnects, data center networks.
  3. **Web & App Development**: Custom bespoke web platforms, SaaS ecosystems, and native iOS/Android applications.

---

## 🔒 Immutable Rules & Guardrails
1. **FONT INTEGRITY**: Do **NEVER** change or remove the font in `index.html` (`Space Grotesk`).
2. **AESTHETICS & THEME**:
   - Dark sovereign European aesthetic: `#050507` background.
   - Text headers in solid white (`text-white`), avoiding washed-out dual-tone colors unless specified.
   - Chamfered cut-corner card design pattern: 2px bright borders with top-left 45-degree angle `clip-path` (`polygon(32px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 32px)`).
   - Ensure multi-column cards are always equal height (`items-stretch`, `h-full flex flex-col justify-between`).
3. **PRELOADER & ANIMATIONS**:
   - The application uses a custom GSAP `StrokeText` preloader (`Loader.jsx`).
   - Page entrance animations (`.hero-animate`) are controlled via the `.is-loaded` class on `<main>` in `App.jsx`, ensuring they only fire *after* the loader finishes fading out.
4. **MOBILE NAVIGATION**:
   - Staggered 2-line hamburger icon (full-width top line, shorter right-aligned bottom line).
   - Slides out into a dark blur drawer with an explicit 'X' close button and body scroll lock.
