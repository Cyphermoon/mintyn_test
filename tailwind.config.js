/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      keyframes: {
        moveIn: {
          "0%": {
            transform: "scale(0, 1)"
          },

          "100%": {
            transform: "scale(1, 1)"
          }
        },

        moveOut: {
          "0%": {
            opacity: ".86"
          },
          "20%": {
            opacity: ".34",

          },

          "75%": {
            transform: "scale(0, 1)"
          },

          "100%": {
            opacity: "0",
            display: "none"
          }
        }
      },
      animation: {
        moveIn: "moveIn 450ms ease-in-out 1",
        moveOut: "moveOut 450ms ease-in-out 1 forwards"
      },
      colors: {
        primary: "#1875F0",
        secondary: "#27AE60",
        accent: "#FDC203",
        background: "#F7F8FA",
        lightgray: "#EAEEF0",
        tablebackground: "#CCCFD4"
      }
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"]
    },
    fontSize: {
      base: ["1rem", "1.5"],
      headline: ["1.8rem", "1.2"],
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
