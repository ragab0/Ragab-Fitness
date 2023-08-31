/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.js',
    './components/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "var(--clr-main)",
        mainColor70: "var(--clr-main-70)",
        mainColor50: "var(--clr-main-50)",
        mainColor30: "var(--clr-main-30)",

        clrPink: "var(--clr-pink)",
        clrYellow: "var(--clr-yellow)",
        clrYellowLighted: "var(--clr-yellow-lighted)",
        clrGray: "var(--clr-gray)",
        clrGrayDarked: "var(--clr-gray-darked)",
      },
    },
  },
  plugins: [],
}
