// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF8",
        primary: "#3B5BDB",
        primaryTint: "#EEF2FF",
        secondaryAccent: "#2F9E8F",
        border: "#E7E5E0",
        textPrimary: "#16181D",
        textSecondary: "#5B6270",
      },
      borderRadius: {
        DEFAULT: "0.875rem" // 14px
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.05)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
};
