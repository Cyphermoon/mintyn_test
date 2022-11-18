/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1875F0",
        secondary: "#27AE60",
        accent: "#FDC203",
        background: "#F7F8FA",
        lightgray: "#CCCFD4"
      }
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"]
    },
    fontSize: {
      base: ["1rem", "1.5"],
      headline: ["1.5rem", "1.2"],
      label_bg: ["0.875rem", "1.5"],
      label_md: ["0.8125rem", "1.5"],
      label_sm: ["0.6875rem", "1.5"],
      title_md: ["1.125rem", "1.5"],
      title_sm: ["0.875rem", "1.5"],
      title_bg: ["2.25rem", "1.2"]
    }
  },
  plugins: [],
}
