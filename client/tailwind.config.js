/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/images/pexels-rodnae-productions-8499593.jpg')",
        sample: "url('../public/images/pexels-rodnae-productions-8083825.jpg')",
      },
    },
  },
  plugins: [],
};
