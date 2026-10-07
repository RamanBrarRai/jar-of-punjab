/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // New brand palette (from the logo)
        brandGreen: "#0F4A3F",
        brandGreenLight: "#1A6354",
        brandPink: "#E91E63",
        brandPinkDark: "#C2185B",
        brandYellow: "#F5C518",
        brandYellowDark: "#E8A317",

        // Neutrals
        cream: "#FBF7EE",
        paper: "#FBF7EE",
        sand: "#F2E4CC",
        ink: "#1A2E29",

        // Legacy (kept so existing pages don't break)
        deepred: "#7A1F1F",
        brick: "#A8452E",
        mustard: "#E8B65A",
        earthy: "#3E2B1F",
        leaf: "#5C7A3A",
      },
      fontFamily: {
        heading: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        punjabi: ["Kalam", "cursive"],
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
};