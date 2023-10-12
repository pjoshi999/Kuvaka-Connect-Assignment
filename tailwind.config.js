/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      oswald: ["Oswald"],
    },
    extend: {},
    screens: {
      xs: "290px",
      // => @media (min-width: 290px) { ... }

      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "781px",
      // => @media (min-width: 781px) { ... }

      lg: "1095px",
      // => @media (min-width: 1095px) { ... }

      xl: "1384px",
      // => @media (min-width: 1384px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
