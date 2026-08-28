# KOSIIX — European Technology Partner

> **High-Performance Infrastructure, IP & Networking, and Web/Mobile Application Outsourcing for European Enterprises.**

---

## 🚀 Company Overview & Mission

**KOSIIX** is a modern technology outsourcing partner tailored for ambitious European businesses. With an elite team of **15+ experienced engineers, network architects, and full-stack developers**, Kosiix delivers mission-critical digital infrastructure, carrier-grade IP networking, and custom high-throughput software solutions.

### Core Service Offerings:
1. **IP & Connectivity Services**:
   - High-capacity Tier-1 IP Transit & BGP Peering.
   - Dedicated IPv4 / IPv6 subnet allocation and management.
   - Multi-Tbps DDoS mitigation & traffic scrubbing.
2. **Enterprise Networking & Infrastructure**:
   - Custom network architecture & SD-WAN deployments.
   - Zero-Trust security protocols, private interconnects, and VPNs.
   - Sovereign cloud infrastructure and multi-datacenter connectivity.
3. **Web & App Development**:
   - Bespoke full-stack web platforms and enterprise SaaS ecosystems (React, Next.js, Node.js, Cloud Native).
   - High-performance native & cross-platform mobile applications (iOS / Android).
   - Microservices architecture, real-time APIs, and high-concurrency backend platforms.

---

## 🛠️ Technical Stack & Architecture

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) + Custom CSS (`src/index.css`)
- **Animation & Motion**: [GSAP](https://greensock.com/gsap/) + [OGL](https://github.com/oframe/ogl) (WebGL Shader Rays)
- **Primary Typography**: **Space Grotesk** (`font-family: 'Space Grotesk', sans-serif`) — *Strictly configured in `index.html` and Tailwind.*

---

## 🎨 Design System & Aesthetic Guidelines

> **CRITICAL RULE**: Do **NOT** alter the font link in `index.html`. Space Grotesk is the established brand typeface.

- **Color Palette**:
  - Background: `#050507` (Deep Dark Sovereign Black)
  - Card Fill: `#07070a` / `#0a0a0e` (Dark Glass / Minimalist)
  - Typography: Solid Crisp White (`#ffffff` / `text-white`) with high-contrast hierarchy.
  - Accent / Borders: `bg-white/[0.4]` / `bg-white/[0.85]` on hover.
  - Status Indicators: `#34d399` (`emerald-400`) pulsing beacons.
- **Card Styling Pattern**:
  - **2px Chamfered Cut-Corner Frames**: Top-left 45-degree corner cut using dual-layered `clip-path`:
    - Outer border wrapper: `p-[2px] bg-white/[0.4] group-hover:bg-white/[0.85]`, `clipPath: 'polygon(32px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 32px)'`
    - Inner container: `bg-[#07070a]`, `clipPath: 'polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30px)'`
  - Equal card heights with `items-stretch` and `h-full flex flex-col justify-between`.

---

## 📂 Project Structure

```
c:/Projects/Kosiix/
├── index.html                   # Entry HTML (Space Grotesk Font - DO NOT CHANGE)
├── package.json                 # Project dependencies (GSAP, React Router, Vite, Tailwind)
├── tailwind.config.js           # Theme extension (grotesk, syne, inter fonts, kosiix colors)
├── src/
│   ├── main.jsx                 # Application bootstrapping
│   ├── App.jsx                  # Main router & Preloader state controller
│   ├── index.css                # Global stylesheet & entrance keyframes
│   ├── components/
│   │   ├── Loader.jsx           # Minimal GSAP StrokeText preloader with curtain exit
│   │   ├── Navbar.jsx           # Staggered 2-bar hamburger + mobile sliding drawer
│   │   ├── Hero.jsx             # WebGL LightRays background + synchronized text entrance
│   │   ├── Overview.jsx         # 3 Chamfered Core Pillars (IP, Network, Web/App)
│   │   ├── LightRays/           # OGL WebGL Light Rays shader component
│   │   └── StrokeText/          # GSAP SVG stroke & wipe text animation component
│   └── pages/
│       ├── Home.jsx             # Homepage composition (<Hero />, <Overview />)
│       ├── About.jsx            # About page
│       └── Services.jsx         # Dedicated services page
```

---

## ⚡ Development Scripts

```bash
# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
