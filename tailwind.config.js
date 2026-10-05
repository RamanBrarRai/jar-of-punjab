/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        deepred: "#7A1F1F",
        brick: "#A8452E",
        mustard: "#E8B65A",
        sand: "#F2E4CC",
        cream: "#FAF3E5",
        paper: "#FBF7EE",
        earthy: "#3E2B1F",
        ink: "#2A1E15",
        sage: "#7C8B6B",
        leaf: "#5C7A3A",
      },
      fontFamily: {
        heading: ["'Fraunces'", "serif"],
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
