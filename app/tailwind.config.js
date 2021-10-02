module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        beige: '#F0EAD6',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};