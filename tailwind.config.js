/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
     'custom-270': '16.875rem',    
      },
      flexBasis:{
        'custom162': '165px',
        'custom340': '340px'
      }
    },
  },
  plugins: [],
}