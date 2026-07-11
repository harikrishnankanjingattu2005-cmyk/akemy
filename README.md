# Akemy Services — Professional Portfolio & Agency Website

A premium, modern portfolio website for Akemy Services built with React, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

**Akemy Services** is a boutique creative + tech studio offering five core services:
1. **Social Media Management** — Instagram, Pinterest, LinkedIn, Facebook strategy & execution
2. **Brand Identity** — Logo design, brand guidelines, visual identity systems
3. **Website Development** — Modern, responsive, performance-optimized websites
4. **Automation Services** — Lead capture, chatbots, CRM integration, workflow automation
5. **Content Creation** — Photography, videography, cinematic content production

## 🎨 Design System

### Colors
- **Background (Primary)**: `#f5ebd9` (Warm Cream)
- **UI / Accent (Primary)**: `#1e2342` (Deep Navy-Indigo)
- **Text on Dark**: `#f5ebd9` (Cream)
- **Text on Light**: `#1e2342` / `#2c2f4a` (Navy / Soft Navy)
- **Accent (Optional)**: `#c9a15d` (Muted Gold/Terracotta)

### Typography
- **Headings**: Fraunces (Serif) — premium, editorial feel
- **Body**: Inter (Sans) — clean, geometric, readable

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Fixed navigation with scroll effects
│   ├── Hero.tsx            # Landing section with animations
│   ├── Services.tsx        # 5 service offerings with expandable cards
│   ├── About.tsx           # Team section with founder bios
│   ├── Process.tsx         # 4-step process timeline
│   ├── Contact.tsx         # Lead capture form & CTAs
│   ├── Footer.tsx          # Footer with branding & links
│   └── index.ts            # Component exports
├── App.tsx                 # Main app component
├── index.css              # Global styles & animations
└── main.tsx               # Entry point

├── index.html             # HTML entry
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── postcss.config.js      # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/harikrishnankanjingattu2005-cmyk/akemy.git
cd akemy

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎬 Features

### ✨ Animation & Interactions
- **Scroll-triggered reveals** — Elements fade in as they enter the viewport
- **Hover micro-interactions** — Cards lift, buttons scale, links underline
- **Sticky navbar** — Background transitions on scroll with smooth blur effect
- **Hero entrance animation** — Staggered headline text reveal with floating shapes
- **Service card expansion** — Smooth height transitions with icon animations
- **Team card reveal** — Flip/fade animations on scroll into view
- **Premium easing curves** — `cubic-bezier(0.16, 1, 0.3, 1)` for refined feel

### 📱 Responsive Design
- Mobile-first approach
- Tablet & desktop breakpoints
- Hamburger menu on mobile with slide-in drawer
- Optimized form inputs for all screen sizes

### ♿ Accessibility
- Semantic HTML structure
- High contrast color combinations (WCAG AA compliant)
- Keyboard navigation support
- Proper heading hierarchy
- Form labels & ARIA attributes

### ⚡ Performance
- Optimized images & lazy loading
- CSS-driven animations (no heavy JavaScript)
- Minimal bundle size
- Fast page load times
- SEO-friendly structure

## 📝 Content Sections

### Hero
- Full-viewport hero with animated headline
- Sub-headline describing all 5 services
- Primary CTA ("Get Started") + secondary link ("See our work")
- Scroll indicator

### Services
- 5 interactive service cards
- Click to expand and reveal detailed offerings
- Platform badges (Instagram, Pinterest, LinkedIn, etc.)
- Icon per service category

### About / Team
- Two founder profiles (Steve Vijay & Fidha Farook)
- Expandable full bios
- Skill tags with animation stagger
- "Why Akemy?" value proposition

### Process
- 4-step timeline: Discover → Strategy → Create → Launch/Automate
- Animated connecting line (desktop)
- Detailed description per step

### Contact
- Functional contact form
- Service dropdown
- WhatsApp / direct messaging CTAs
- "Powered by Akemy Automation" proof point
- Form validation & success/error states

### Footer
- Logo + tagline
- Quick navigation links
- Social media icons (Instagram, LinkedIn, Facebook)
- Copyright & legal links
- Automation proof point

## 🔧 Technology Stack

- **React 19** — UI library
- **TypeScript** — Type-safe JavaScript
- **Tailwind CSS 4** — Utility-first CSS framework
- **Vite** — Build tool & dev server
- **Lucide React** — Icon library
- **Motion** — Animation library support (optional)

## 🎯 Configuration

### Environment Variables
Create a `.env` file (if needed for backend integration):
```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_FORM_ENDPOINT=/api/contact
```

### Asset Setup
- Logo must be placed in `src/assets/logo.png`
- Team photos (optional) can be added to `src/assets/team/`
- All assets are referenced via import statements for automatic optimization

## 📊 SEO

- Page title: "Akemy Services — Creative Strategy & Tech Solutions"
- Meta description in HTML head
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile-friendly design (mobile-first)

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Connect GitHub repository to Vercel
# Deploy automatically on push to main
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Manual
```bash
npm run build
# Deploy dist/ folder to your hosting provider
```

## 📧 Contact & Support

- **Email**: hello@akemy.services
- **Website**: https://akemy.vercel.app
- **LinkedIn**: [Connect with team]
- **Instagram**: [@akemy.services]

## 📄 License

This project is proprietary to Akemy Services.

## 🤝 Contributing

This is a custom project for Akemy Services. For feature requests or issues, please contact the team directly.

---

Built with ❤️ by the Akemy Services team — Transforming businesses through creative excellence & technical innovation.
