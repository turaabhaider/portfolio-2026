/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode switching
  theme: {
    extend: {
      colors: {
        // Adding custom colors for Syed's professional brand
        brand: {
          light: '#3b82f6',
          dark: '#1e40af',
          bg: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}