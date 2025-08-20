/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
'./src/**/*.{html,js,svelte,ts}'
],
theme: {
extend: {
colors: {
gold: '#C6A664',
navy: '#0B1736',
ink: '#0A0A0A',
ivory: '#FFF8F0'
},
fontFamily: {
serif: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif']
},
spacing: {
'18': '4.5rem',
'22': '5.5rem'
}
}
},
plugins: []
};
