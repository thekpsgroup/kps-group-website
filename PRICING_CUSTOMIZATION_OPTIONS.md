# Modern Brands Pricing Page Customization Options

## 🎨 Visual Customizations Available

### 1. Color Scheme Adjustments
- **Primary Color**: Currently dark blue (KPS navy) - can be changed in `shared-packages/theme/src/brand-themes.ts`
- **Secondary Color**: Currently gold (KPS gold) - can be modified for different gradients
- **Background**: Currently slate-to-blue gradient - can be customized

### 2. Typography Enhancements
- **Heading Styles**: Gradient text effects can be modified
- **Font Sizes**: All typography is responsive and customizable
- **Font Weights**: Currently using bold headings, can be adjusted

### 3. Animation Customizations
- **Hover Effects**: Card lift and gradient border animations
- **Loading States**: Shimmer effects during Stripe table loading
- **Transition Timing**: All animations use optimized cubic-bezier curves

### 4. Layout Options
- **Header Content**: Title, subtitle, and description are customizable
- **Feature Highlights**: The "What's Included" section can be modified
- **Process Steps**: The 3-step process section is customizable
- **FAQ Section**: Questions and answers can be updated

## 🛠️ Content Customization

### Update Pricing Content
Edit `shared-packages/content/src/pricing-content.ts`:

```typescript
"modern-brands": {
  title: "Creative Brand Development", // Customize this
  subtitle: "Bold brands that make an impact", // And this
  description: "Your custom description here",
  pricingTableId: "prctbl_1RxysH2K0wLA8j3Go1ecWenh", // Your Stripe table
  publishableKey: "pk_live_...", // Your Stripe key
  features: [
    "Custom feature 1",
    "Custom feature 2",
    // Add more features
  ],
  faq: [
    {
      question: "Your custom question?",
      answer: "Your detailed answer here."
    }
    // Add more FAQs
  ]
}
```

### Update Visual Styling
Edit `shared-packages/theme/src/brand-themes.ts`:

```typescript
"modern-brands": {
  primary: KPS_COLORS.navy, // Dark blue
  secondary: KPS_COLORS.gold, // Gold
  accent: "#1e40af", // Professional blue
  surface: "#F8FAFC", // Light neutral
  gradient: `linear-gradient(135deg, ${KPS_COLORS.navy} 0%, ${KPS_COLORS.gold} 100%)`
}
```

## 🚀 Advanced Customizations

### 1. Add Custom Sections
You can add new sections to the pricing page by editing:
`shared-packages/ui/src/components/PricingPage.tsx`

### 2. Custom Stripe Styling
The Stripe pricing table styling is handled in:
`shared-packages/ui/src/components/StripePricingTable.tsx`

### 3. Mobile Optimizations
All responsive breakpoints and mobile-specific styles are customizable.

### 4. Accessibility Enhancements
Screen reader support, keyboard navigation, and focus management are all built-in and customizable.

## 📱 Testing Checklist

- [ ] Desktop Chrome/Firefox/Safari
- [ ] Mobile iOS Safari
- [ ] Mobile Android Chrome
- [ ] Tablet responsiveness
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Stripe checkout flow
- [ ] Error states
- [ ] Loading performance

## 🎯 Performance Optimizations

1. **Memoized Components**: Prevents unnecessary re-renders
2. **Optimized CSS**: Uses `will-change` for GPU acceleration
3. **Efficient Animations**: Hardware-accelerated transforms
4. **Lazy Loading**: Stripe script loads asynchronously
5. **Error Boundaries**: Graceful fallbacks for failures

## 📞 Need Help?

If you need any customizations or have questions:
1. The pricing content is in `shared-packages/content/src/pricing-content.ts`
2. The visual theme is in `shared-packages/theme/src/brand-themes.ts`
3. The main component is in `shared-packages/ui/src/components/PricingPage.tsx`
4. The Stripe integration is in `shared-packages/ui/src/components/StripePricingTable.tsx`
