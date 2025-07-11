module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0ea5e9",
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        dark: {
          800: "#121826",
          700: "#1e293b",
          600: "#334155",
          500: "#475569",
        },
        glass: "rgba(255, 255, 255, 0.05)",
      },
      boxShadow: {
        glow: "0 0 10px rgba(14, 165, 233, 0.7)", // shadow-glow
      },
      borderColor: {
        glow: "rgba(255, 255, 255, 0.15)", // border-glow
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
