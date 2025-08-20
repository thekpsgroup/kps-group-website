# Modern Brands Website

**Domain**: modernbrands.co  
**Port**: 3004  
**Brand Key**: modern-brands

## 🚀 Quick Start

\\\ash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\\\

## 🎨 Brand Configuration

This website is configured for **Modern Brands** - specializing in Brand Development.

### Brand Details
- **Name**: Modern Brands
- **Domain**: modernbrands.co
- **Flavor**: brands
- **Specialty**: Brand Development
- **Tagline**: "Build Your Brand"

## 🔧 Development

### Environment Variables

Create a \.env.local\ file:

\\\ash
DEFAULT_BRAND_KEY=modern-brands
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM="Modern Brands <sales@modernbrands.co>"
EMAIL_TO=your-email@example.com
\\\

### Available Scripts

- \
pm run dev\ - Start development server (Port 3004)
- \
pm run build\ - Build for production
- \
pm start\ - Start production server
- \
pm run lint\ - Run ESLint
- \
pm run type-check\ - Run TypeScript type checking

## 🏗️ Architecture

This is an **independent Next.js application** that uses shared packages:

- \@kps/ui\ - Shared UI components
- \@kps/config\ - Brand configuration
- \@kps/content\ - Content management
- \@kps/theme\ - Styling and theming
- \@kps/email\ - Email functionality

## 🌐 Related Websites

This website is part of the KPS Ultra family:

- [KPS Group](../kps-group/) - Parent company
- [Modern Consulting](../modern-consulting/) - Strategic consulting
- [Modern Ledger](../modern-ledger/) - Accounting & bookkeeping
- [Modern Payroll](../modern-payroll/) - Payroll services
- [Modern Brands](../modern-brands/) - Brand development
- [Modern Tech Stack](../modern-tech-stack/) - Custom software development
- [Modern OS](../modern-os/) - Business automation & process optimization

## 📦 Dependencies

All dependencies are managed independently. Shared packages are referenced via file dependencies:

\\\json
{
  "@kps/ui": "file:../shared-packages/ui",
  "@kps/config": "file:../shared-packages/config",
  "@kps/content": "file:../shared-packages/content",
  "@kps/theme": "file:../shared-packages/theme",
  "@kps/email": "file:../shared-packages/email"
}
\\\

## 🚀 Deployment

This website can be deployed independently to any platform that supports Next.js:

- **Vercel**: Connect this directory as a separate project
- **Netlify**: Deploy as a standalone site
- **AWS/GCP**: Deploy to any cloud platform

## 📞 Support

For questions about this specific website, refer to the main README.md or contact the development team.
