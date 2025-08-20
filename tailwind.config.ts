import type { Config } from 'tailwindcss';
import { 
  KPS_COLORS, 
  SEMANTIC_COLORS, 
  NEUTRAL_COLORS,
  SPACING_TOKENS,
  RADIUS_TOKENS,
  MOTION_TOKENS,
  BREAKPOINTS,
  TYPOGRAPHY_TOKENS
} from '../shared-packages/theme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../shared-packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
    '../shared-packages/ui/dist/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    { pattern: /^(btn|heading|body|animate|nav-link|card|glass|gradient|section|input|textarea|skeleton|focus-ring|shadow|surface|grid-modern|flex-modern|bg-pattern-(dots|grid)|gradient-kps(-reverse)?|glass-enhanced)(-|$).*/ },
    { pattern: /^(bg|text|border)-kps-(navy|gold)$/ },
    { pattern: /^text-(neutral|white|black)-/ },
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        'kps-navy': KPS_COLORS.navy,
        'kps-gold': KPS_COLORS.gold,
        
        // Semantic colors
        success: SEMANTIC_COLORS.success,
        warning: SEMANTIC_COLORS.warning,
        error: SEMANTIC_COLORS.error,
        info: SEMANTIC_COLORS.info,
        
        // Neutral scale
        neutral: NEUTRAL_COLORS
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif']
      },
      fontSize: {
        // Typography tokens mapped to Tailwind classes
        'display-xs': [TYPOGRAPHY_TOKENS.display.xs, { lineHeight: '1.2' }],
        'display-sm': [TYPOGRAPHY_TOKENS.display.sm, { lineHeight: '1.2' }],
        'display-md': [TYPOGRAPHY_TOKENS.display.md, { lineHeight: '1.2' }],
        'display-lg': [TYPOGRAPHY_TOKENS.display.lg, { lineHeight: '1.2' }],
        'display-xl': [TYPOGRAPHY_TOKENS.display.xl, { lineHeight: '1.2' }]
      },
      spacing: {
        // Use consolidated spacing tokens
        ...SPACING_TOKENS
      },
      borderRadius: {
        // Use consolidated radius tokens
        ...RADIUS_TOKENS
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      screens: {
        // Use consolidated breakpoints
        sm: BREAKPOINTS.sm,
        md: BREAKPOINTS.md,
        lg: BREAKPOINTS.lg,
        xl: BREAKPOINTS.xl,
        '2xl': BREAKPOINTS['2xl']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      }
    }
  }
};

export default config;