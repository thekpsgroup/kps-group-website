/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				navy: {
					DEFAULT: 'var(--kps-navy)',
					800: 'var(--kps-navy-800)'
				},
				gold: {
					DEFAULT: 'var(--kps-gold)',
					600: 'var(--kps-gold-600)'
				},
				ink: 'var(--ink)',
				sand: 'var(--sand)',
				slate: 'var(--slate)'
			},
			fontFamily: {
				sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
				serif: ['Inter', 'system-ui', 'sans-serif']
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem'
				}
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-in': 'slideIn 0.4s ease-out',
				'pulse-gold': 'pulse-gold 2s ease-in-out infinite'
			}
		}
	},
	plugins: []
};
