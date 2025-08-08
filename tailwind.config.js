/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { brand: { primary: "#47ABB1", dark: "#606B77" } },
      fontFamily: { sans: ["Montserrat", "system-ui", "sans-serif"] },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" }
    },
  },
  plugins: [],
}
