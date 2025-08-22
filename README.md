# The KPS Group — Modern Suite Website

A comprehensive SvelteKit website showcasing The Modern Suite, a collection of integrated business services for service-based companies.

## Overview

This website serves as a roadmap that "connects the dots" for service-based companies, visually and interactively mapping pains → solutions → brand/offer → CTA. The core message is:

> "We give small, gritty service businesses the same tools the giants use—without the bloat or b.s."

## Features

- **Interactive Roadmap**: SVG-based visualization connecting business pains to solutions and services
- **Modern Suite Overview**: Detailed information about all five service brands
- **Industry-Specific Content**: Tailored messaging for HVAC, electrical, plumbing, and other service businesses
- **Contact Form**: Integrated lead capture with Router.so API
- **Responsive Design**: Mobile-first approach with glassmorphic UI elements
- **SEO Optimized**: Structured data, meta tags, and semantic HTML
- **Accessibility Compliant**: WCAG AA standards with keyboard navigation and screen reader support

## The Modern Suite

1. **Modern Brands** — Logos, websites, brand systems
2. **Modern Ledger** — Books without drama (bookkeeping)
3. **Modern Pay** — Payroll that behaves
4. **Modern Consulting** — Sell + operate smart
5. **Modern Stack** — Audit. Fix. Build. (tech stack consolidation)

## Tech Stack

- **Framework**: SvelteKit 2.x
- **Styling**: Tailwind CSS 4.x
- **Language**: TypeScript
- **Deployment**: Vercel (configured)
- **Form Handling**: Router.so API integration

## Design System

### Colors
- **Navy**: `#0A1B2E` (primary background)
- **Navy-800**: `#0F2540` (secondary background)
- **Gold**: `#D4AF37` (accent color)
- **Gold-600**: `#C39A2E` (hover states)
- **Ink**: `#0B0F14` (text)
- **Sand**: `#F5F6F8` (light background)
- **Slate**: `#7A8896` (muted text)

### Typography
- **Primary**: Inter (sans-serif)
- **Secondary**: Manrope (sans-serif)
- **Weights**: 300, 400, 500, 600, 700

## Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable UI components
│   │   ├── Header.svelte
│   │   ├── Footer.svelte
│   │   ├── SuiteDrawer.svelte
│   │   ├── Hero.svelte
│   │   ├── Roadmap.svelte
│   │   ├── SuiteGrid.svelte
│   │   ├── Consolidation.svelte
│   │   └── ContactForm.svelte
│   ├── data/               # Data structures
│   │   ├── suite.ts        # Modern Suite service data
│   │   └── roadmap.ts      # Interactive roadmap data
│   ├── stores/             # Svelte stores
│   │   └── roadmap.ts      # Roadmap state management
│   └── utils/              # Utility functions
│       └── observe.ts      # Intersection observer utilities
├── routes/                 # SvelteKit routes
│   ├── +layout.svelte      # Main layout
│   ├── +page.svelte        # Landing page
│   ├── suite/              # Suite overview and detail pages
│   ├── outcomes/           # Results and case studies
│   ├── contact/            # Contact page
│   └── api/                # API endpoints
│       └── lead/           # Lead form submission
└── app.css                 # Global styles and CSS variables
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kps-group-modern-suite
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
# Create .env file
ROUTER_API_KEY="your-router-so-api-key"
```

4. Start development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Environment Variables

- `ROUTER_API_KEY`: API key for Router.so lead form integration

## Deployment

The project is configured for Vercel deployment:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Key Components

### Roadmap Component
The interactive roadmap is the centerpiece of the website, featuring:
- SVG-based visualization
- Pain point selection
- Industry-specific presets
- Animated path connections
- Mobile-responsive fallback

### Suite Drawer
A slide-down drawer accessible from any page that provides:
- Quick overview of all Modern Suite services
- Direct navigation to service details
- Keyboard accessibility

### Contact Form
Integrated lead capture with:
- Service selection
- Form validation
- Router.so API integration
- Success/error states

## Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Reduced motion support
- High contrast ratios

## Performance Optimizations

- Lazy loading of components
- Optimized SVG graphics
- Minimal JavaScript bundle
- Efficient state management
- Image optimization
- CSS purging

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to The KPS Group.

## Contact

For questions about this project, contact:
- Email: sales@thekpsgroup.com
- Phone: 469-458-6966
