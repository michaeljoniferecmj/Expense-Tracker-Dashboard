/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A5F",
        "primary-hover": "#162C47",
        "primary-light": "#3A5F8F",

        background: "#FFFFFF",
        "background-muted": "#F5F7FA",

        accent: "#6B8DBE",
        "accent-purple": "#7C6EE6",

        text: "#111827",
        "text-muted": "#4B5563",
        border: "#E5E7EB",
      },
    },
  },
  plugins: [],
};
