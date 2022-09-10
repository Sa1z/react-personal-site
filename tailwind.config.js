/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    screens: {
      small: '480px',
      med: '768px',
      large: '976px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}
