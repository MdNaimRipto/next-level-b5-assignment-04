/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary1: "#D5ECDE",
      primary2: "#027A36",
      white: "#FFFFFF",
      black: "#000000",
      lightBlack: "#1E1E1E",
      gray: "#808080",
      lightGray: "#B3B3B3",
      success: "#5cb85c",
      error: "#FF3333",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1400px",
      },
    },
  },
  plugins: [],
};
