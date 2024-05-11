/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Body: ["Montserrat", "sans-serif"],
        Logo: ["Sedan SC", "serif"],
      },
      lineClamp: {
        13: '13',
      },
    },
  },
  plugins: [],
};
