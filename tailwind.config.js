// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Fix typo from 'jsk' to 'jsx'
  theme: {
    extend: {
      fontFamily: {
        bookman: ['"Bookman Old Style"', "serif"],
        allura: ["Allura", "cursive"],
        calibri: ["Calibri", "sans-serif"],
        silverForteGrungeGrunge: ["SilverForteGrungeGrunge", "sans-serif"],
        grunge: ["Grunge", "cursive"],
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/home.jpeg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
