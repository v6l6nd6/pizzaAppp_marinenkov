/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/cssModule/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {

    screens: {
      'xxl': {'max':'3280px'},
      
      'xl': {'max': '1280px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1047px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '940px'},
      // => @media (max-width: 767px) { ... }
      'mdSm': {'max':'780px'},
      'mdSmm': {'max':'540px'},
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        'body': ['ProximaNova-Regular']
      }
    },
  },
  plugins: [],
}
