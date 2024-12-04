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
        beige: "#EDE5DE",
        orange: "#F28E50",
        bleufonce: "#23393E",
        jaune: "#F2BA22",
        bleu: "#2E7183",
      },
      borderRadius: {
        "30px": "30px", // Ajoute la valeur de 30px
      },
    },
  },
  plugins: [],
};
