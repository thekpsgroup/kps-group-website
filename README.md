# ModernBrands — Luxury Logo Design Studio

Ultra-modern logos and websites. Quiet luxury, bold impact.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 🎨 Design System

- **Colors**: Gold (#C6A664), Navy (#0B1736), Ink (#0A0A0A), Ivory (#FFF8F0)
- **Typography**: Playfair Display (serif), Inter (sans-serif)
- **Aesthetic**: Paris Hilton / Dior / Tom Ford luxury editorial

## 📁 Structure

```
src/
├── routes/
│   ├── +page.svelte          # Home
│   ├── services/+page.svelte # Services
│   └── get-started/+page.svelte # Get Started
├── app.css                   # Global styles
└── +layout.svelte           # Layout with nav/footer
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Already connected: https://github.com/thekpsgroup/modernbrands-site
   ```

2. **Environment Variables**
   Set in Vercel dashboard:
   ```
   STRIPE_PUBLISHABLE_KEY=pk_live_...
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_PRICING_TABLE_ID=prctbl_...
   BYPASS_TOKEN=your-32-char-token
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Manual Setup

1. Install Vercel adapter:
   ```bash
   npm install -D @sveltejs/adapter-vercel
   ```

2. Configure `svelte.config.js` (already done)

3. Set environment variables in Vercel dashboard

## 🔧 Configuration

### Stripe Integration
Replace placeholders in `/get-started`:
- `REPLACE_WITH_PRICING_TABLE_ID`
- `REPLACE_WITH_LIVE_PUBLISHABLE_KEY`

### FormSubmit
Forms automatically send to `sales@thekpsgroup.com`

### ISR Caching
- Home: 1 hour
- Services: 2 hours  
- Get Started: 30 minutes

## 📞 Contact

- **Email**: sales@thekpsgroup.com
- **Phone**: 469-458-6966
- **Site**: https://modernbrands.co

## 🎯 Features

- ✅ Ultra-minimal luxury design
- ✅ SvelteKit with Vercel deployment
- ✅ Stripe pricing table integration
- ✅ FormSubmit contact forms
- ✅ ISR caching for performance
- ✅ SEO optimized (JSON-LD, sitemap, robots.txt)
- ✅ Mobile responsive
- ✅ Accessibility compliant

---

Built with ❤️ by ModernBrands
