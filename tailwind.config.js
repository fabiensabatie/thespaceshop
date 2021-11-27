module.exports = {
  purge: ['./index.html', './app/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
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
