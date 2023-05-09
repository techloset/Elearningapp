/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        "josefin-sans": ["Josefin Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"], // Add Montserrat to the fontFamily configuration
        poppins: ["Poppins", "sans-serif"],
        "nunito-sans": ["Nunito Sans", "sans-serif"],
        "buenos-aires": ["Buenos Aires", "serif"],
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
