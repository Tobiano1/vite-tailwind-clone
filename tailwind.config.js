/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        lm: { raw: '(min-width: 832px)' },
        xm: { raw: '(min-width: 960px)' },
        lgr: { raw: '(min-width: 1227px)' },
        '4k': { raw: '(min-width: 1440px)' },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
