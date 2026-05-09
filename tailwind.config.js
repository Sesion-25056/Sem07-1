/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6f240a",
        "primary-container": "#8e3a1f",
        secondary: "#795900",
        surface: "#fbf9f4",
        "on-surface": "#1b1c19",
        "outline-variant": "#dcc1b9",
        "surface-container-low": "#f5f3ee",
      }
    },
  },
  plugins: [],
}