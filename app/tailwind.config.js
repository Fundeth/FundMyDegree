module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        beige: "#ffd699",
        bluefmd: "#0076BE",
        greenfmd: "#45BD8E",
        greyfmd: "#F5F5F5",
        greyfmd2: "#cfebfd",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
