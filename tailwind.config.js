/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.js',
    './app/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "var(--main-color)",
        mainColorLight: "var(--main-color-light)",

        secondColor: "var(--second-color)",
        secondColorLight: "var(--second-color-light)",
      },
    },
  },
  plugins: [],
}
