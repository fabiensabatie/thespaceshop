module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      hover: ['bg', 'text'],
      transitionDuration: ['hover', 'focus'],
      grayscale: ['hover', 'focus'],
      "hue-rotate": ['hover', 'focus'],
    },
  },
  plugins: [],
}
