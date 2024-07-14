/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      height:{
        '97':'96vh',
        'ch800':'800px'
      },
      fontSize:{
        'nv18':'18px',
        'c16':'16px',
        'c17':"17px",
        'c20':"20px"
      },
      borderWidth:{
        "1x":"1px"
      },
      width:{
        "cw98":"98%",
        "cw96":"96%",
        "cw95":"95%",
        "cw93":"93%",
        "cw92":"92%",
        "cw80":"80%",
        "cw500":"500px"
      
      },
      animation: {
        'ease-in': 'easeIn 1s ease-in forwards',
      },
      keyframes: {
        easeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }}
    },
  },
  plugins: [],
}