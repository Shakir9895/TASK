/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    keyframes:{
      shimmer:{
        '100%':{transform : 'translate(100%)' }
      }
    },
    fontSize: {
      // sm: ['14px', '20px'],
      base: ['35px', '52px'],
      // lg: ['20px', '28px'],
    
    }
  },
  plugins: [],
}

