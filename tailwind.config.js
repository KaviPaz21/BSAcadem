/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',   // Custom for 320px
        'sm-xs': '375px', // Custom for 375px
        'sm-md': '420px', // Custom for 420px
        'md': '768px',    // Custom for 768px
      },
      height:{
        '97':'96vh',
        'c80':'82vh',
        'ch800':'800px',
        'c400':"700px",
        'c750':"750px",
        'c600':"600px",
        'c500':"500px",
      },
      fontSize:{
        'nv18':'18px',
        'c16':'16px',
        'c17':"17px",
        'c20':"20px",
        
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
        "cw90":"90%",
        "cw80":"80%",
        "cw20":"20%",
        "cw300":"300px",
        "cw400":"400px",
        "cw500":"500px",
        "cw900":"900px"
      
      },
      animation: {
        'ease-in': 'easeIn 1s ease-in forwards',
      },
      fontFamily:{
        'csans':"Open Sans"
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