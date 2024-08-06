/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#282561', // Add custom color
        customGrey: '#A5A5A5', // Add custom color
        customGreen: '#319d73', // Add custom color
        primary: {
          light: 'var(--bg-color)',
          dark: '#1f2937', // Default dark mode background
        },
       'text-color': 'var(--text-color)',
       'bg-color': 'var(--bg-color)',
        'icon-color': 'var(--icon-color)',
        border: {
          light: 'var(--border-color)',
          dark: 'var(--border-color)', // This will be applied via CSS variable
        },
        icon: {
          light: 'var(--icon-color)',
          dark: 'var(--icon-color)', // This will be applied via CSS variable
        },
      },
    },
  },
  plugins: [],
}
