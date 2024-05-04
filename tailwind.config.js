/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./default.js"],
  theme: {
    fontFamily: {
      Manrope: ["Manrope", "sans-serif"],
      HankenGrotesk: ["Hanken Grotesk"],
    },
    extend: {
      animation: {
        wiggle: "wiggle 1.3s ease-in-out ",
      },
      keyframes: {
        wiggle: {
          "0%, 90%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },

      colors: {
        // Primary
        Blue: "#5847EB",
        LightRed: "#FF8C66", //(work):
        SoftBlue: "#56C2E6", //(play):
        Study: "#FF5C7C", //(study):
        LimeGreen: "#4ACF81", //(exercise):
        Violet: "#7536D3", //(social):
        SoftOrange: "#F1C65B", //(self care):
        // Neutral
        VeryDarkBlue: "#0F1424",
        DarkBlue: "#1C1F4A",
        DesaturatedBlue: "#6F76C8",
        PaleBlue: "#BDC1FF",
      },
    },
  },
  plugins: [],
};
