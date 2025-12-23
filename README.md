# 🚀 NEXATHON 2026 - Hackathon Landing Page

<div align="center">

![NEXATHON 2026](https://img.shields.io/badge/NEXATHON-2026-00ff88?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=for-the-badge&logo=tailwind-css)

**Code. Create. Conquer.**

[Live Demo](https://nexathon-26.vercel.app/) • [Documentation](./docs/HANDOVER.md) • [Contributing](./docs/CONTRIBUTING.md)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

NEXATHON 2026 is a cutting-edge, single-page application (SPA) designed for a 24-hour hackathon event. The website features a **dark tech-themed design** with cyberpunk aesthetics, smooth animations, and 3D effects throughout. Built with modern web technologies, it provides an immersive experience for participants, sponsors, and visitors.

### Key Highlights

- 🎨 **Cyberpunk-themed UI** with custom animations and effects
- ⚡ **Performance-optimized** with Next.js App Router
- 📱 **Fully responsive** design for all devices
- ♿ **Accessible** with reduced motion support and ARIA labels
- 🔍 **SEO-optimized** with proper metadata
- 🎭 **3D visual effects** using Three.js shaders

---

## ✨ Features

### Page Sections

1. **Hero Section** - Eye-catching landing with animated background and floating particles
2. **About Section** - Event information with animated statistics
3. **Schedule Section** - Detailed 3-day event timeline
4. **Timeline Section** - Registration milestones and deadlines
5. **Sponsors Section** - Showcase of event sponsors
6. **Rewards Section** - Prize pool and categories
7. **Register Section** - Event registration form
8. **Theme Section** - Hackathon challenge themes
9. **FAQ Section** - Frequently asked questions
10. **Gallery Section** - Image carousel of past events
11. **Contact Section** - Contact information and form
12. **Footer** - Quick links and social media

### Visual Effects

- ✨ Matrix-style animated background
- 🎨 Floating particle system
- 🔄 Scroll-triggered animations
- 📦 3D tilt cards
- 🌊 Parallax scrolling effects
- ⚡ Shader-based visual effects
- 🎭 Custom CSS animations

---

## 🛠 Tech Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.0.10 | React framework with App Router |
| **React** | 19.2.0 | UI library |
| **TypeScript** | 5.x | Type safety |

### Styling & UI

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 4.1.9 | Utility-first CSS framework |
| **Radix UI** | Latest | Headless UI components |
| **Lucide React** | 0.454.0 | Icon library |
| **Framer Motion** | 12.23.26 | Advanced animations |
| **Three.js** | 0.182.0 | 3D graphics and shaders |

### Forms & Validation

- **React Hook Form** 7.60.0 - Form state management
- **Zod** 3.25.76 - Schema validation
- **@hookform/resolvers** 3.10.0 - Form validation integration

### Development Tools

- **ESLint** - Code linting
- **PostCSS** 8.5 - CSS processing
- **Vercel Analytics** 1.3.1 - Performance monitoring

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Akshat-Shuklaaa/Nexathon-26.git
cd Nexathon-26
```

2. **Install dependencies**

```bash
# Using npm
npm install

# Using pnpm (recommended)
pnpm install

# Using yarn
yarn install

# Using bun
bun install
```

3. **Run the development server**

```bash
# Using npm
npm run dev

# Using pnpm
pnpm dev

# Using yarn
yarn dev

# Using bun
bun dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📁 Project Structure

```
Nexathon-26/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout with font configuration
│   ├── page.tsx                 # Main page component
│   └── globals.css              # Global styles and animations
│
├── components/                   # React components
│   ├── layout/                  # Layout components
│   │   ├── navbar.tsx          # Navigation bar with scroll detection
│   │   ├── footer.tsx          # Footer with links
│   │   └── theme-provider.tsx  # Theme context provider
│   │
│   ├── sections/                # Page section components
│   │   ├── hero-section.tsx    # Landing hero with animations
│   │   ├── about-section.tsx   # About event section
│   │   ├── schedule-section.tsx # Event schedule
│   │   ├── timeline-section.tsx # Registration timeline
│   │   ├── sponsors-section.tsx # Sponsor showcase
│   │   ├── rewards-section.tsx  # Prize information
│   │   ├── register-section.tsx # Registration form
│   │   ├── theme-section.tsx    # Hackathon themes
│   │   ├── faq-section.tsx      # FAQ accordion
│   │   ├── gallery-section.tsx  # Image gallery
│   │   └── contact-section.tsx  # Contact form
│   │
│   ├── features/                # Reusable feature components
│   │   ├── matrix-background.tsx    # Animated matrix effect
│   │   ├── floating-particles.tsx   # Particle system
│   │   ├── scroll-animation.tsx     # Scroll reveal animations
│   │   ├── section-header.tsx       # Styled section headers
│   │   ├── tilt-card.tsx           # 3D tilt effect cards
│   │   ├── animated-counter.tsx    # Number animation
│   │   └── contact-cta.tsx         # Call-to-action component
│   │
│   └── ui/                      # shadcn/ui components
│       ├── shader-animation.tsx # Three.js shader effects
│       ├── timeline.tsx        # Timeline component
│       └── ...                 # Other UI primitives
│
├── lib/                         # Utility functions
│   └── utils.ts                # Helper functions (cn, etc.)
│
├── public/                      # Static assets
│   ├── *.jpg, *.png           # Images and icons
│   └── *.svg                  # Vector graphics
│
├── styles/                      # Additional styles
│   └── globals.css            # Legacy global styles
│
├── .github/                     # GitHub configuration
│   └── workflows/             # CI/CD workflows
│
├── components.json             # shadcn/ui configuration
├── next.config.mjs            # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── postcss.config.mjs         # PostCSS configuration
├── package.json               # Project dependencies
├── docs/                      # Documentation
│   ├── ARCHITECTURE.md       # Technical architecture
│   ├── CONTRIBUTING.md       # Contribution guidelines
│   ├── HANDOVER.md          # Detailed component docs
│   ├── QUICK_REFERENCE.md   # Quick reference guide
│   └── RESTRUCTURING_SUMMARY.md # Restructure summary
└── README.md                  # This file
```

### Component Organization

- **`layout/`** - Components that form the page structure (navbar, footer, providers)
- **`sections/`** - Main page sections that appear in order on the homepage
- **`features/`** - Reusable components with specific functionality (animations, effects, utilities)
- **`ui/`** - Base UI components from shadcn/ui and custom primitives

---

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

### Code Style

This project follows:

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** compatible formatting
- **Component-first** architecture
- **Functional components** with hooks

### Adding New Components

1. Create your component in the appropriate directory:
   - `components/layout/` for layout components
   - `components/sections/` for page sections
   - `components/features/` for reusable features
   - `components/ui/` for base UI components

2. Use TypeScript for type safety:
```tsx
export default function MyComponent() {
  return <div>My Component</div>
}
```

3. Import and use in `app/page.tsx` if it's a new section

### Customization

#### Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary: oklch(0.78 0.22 145);
  --secondary: oklch(0.6 0.18 175);
  /* ... */
}
```

#### Fonts

Configured in `app/layout.tsx`:

- **Orbitron** - Headers
- **Rajdhani** - Subheadings  
- **Plus Jakarta Sans** - Body text
- **JetBrains Mono** - Code
- **Space Grotesk** - Special text

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Akshat-Shuklaaa/Nexathon-26)

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy!

### Build for Production

```bash
npm run build
npm run start
```

### Environment Variables

No environment variables are required for basic deployment. Add any API keys or secrets in `.env.local`:

```env
# Example
NEXT_PUBLIC_API_URL=your_api_url_here
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./docs/CONTRIBUTING.md) for details.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is created for NEXATHON 2026. All rights reserved.

---

## 📞 Contact

- **Event Website**: [Coming Soon]
- **GitHub**: [@Akshat-Shuklaaa](https://github.com/Akshat-Shuklaaa)
- **Issues**: [GitHub Issues](https://github.com/Akshat-Shuklaaa/Nexathon-26/issues)

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- 3D effects with [Three.js](https://threejs.org/)
- Originally designed with [v0.dev](https://v0.dev/)

---

<div align="center">

**Made with ❤️ for NEXATHON 2026**

[⬆ Back to Top](#-nexathon-2026---hackathon-landing-page)

</div>