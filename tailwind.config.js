/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'dmsans':['DM Sans', 'sans-serif'
    ]
    },
    extend: {
      colors: {
        red: "#EC775F",
        cyan: "#76B5BC",
        orange: "#FFFAF5",
        darkbrown: "#382314",
        mediumbrown: "#93867B",
        cream: "#F8E9DD",
      },
      fontSize: {
        base: ["18px", "26px"],
      },
      spacing: {
        '128': '32rem',
      }
      
    },
  },
  plugins: [],
};
