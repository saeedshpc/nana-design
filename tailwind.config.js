/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        bgColor: "#262020",
        textColor: "#9C9696",
        myOrange: "#FF5C00",
        lightText: "#CEC9C9",
      },
      fontFamily: {
        sans: ["Kufam"],
      },
    },
  },
  plugins: [],
};
