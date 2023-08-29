/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        delft_blue: "#3A435E",
        charcoal: "#313E50",
        platinum: "#DADDD8",
        azure: "#CDDDDD",
        jet: "#2e2f2f",
        green: "#abc9ad",
        light_green: "#ddebde",
        gray: "#535652",
        light_gray: "#ededed",
      },
    },
  },
  plugins: [],
};
