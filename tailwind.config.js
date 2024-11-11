/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ad5367',
        secondary: '#970954',
        tertiary: '#d9bdde',
        accent: '#ab2456',
        dark: '#333333',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        body: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};