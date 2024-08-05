/** @type {import('tailwindcss').Config} */
export default {
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
      },
    },
  },
  plugins: [],
}