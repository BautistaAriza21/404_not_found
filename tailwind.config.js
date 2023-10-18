/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
 
      screens:{
        'sm':'390px',
      },

      fontFamily: {
        'Inconsolata': ['Inconsolata, sans-serif'],
        'SpaceMono': ['Space Mono, sans-serif'],
        'Monserrat': ['Montserrat, sans-serif'],
      },

      fontSize: {
        '24':'24px',
        '64':'64px',
        '14':'14px',
       
      },

      width: {
        '53':'539.22px',
        '21':'216px',
      },

      height: {
        '47':'447.43px',
        '68':'68px',
      },
      
      lineHeight: {
        '25':'25.18px',
        '94': '94.78px',
        '35':'35.54px',
        '20':'20.73px',
      },

      fontWeight: {
        '700':'700',
        '400':'400',
      },

      letterSpacing: {
        '-8': '-2px',
        '-3':'-3.5%',
        
      },

      spacing: {
         '26':'265px',
         '77':'77px',
      },

      colors: {
        'negro':'#333333',
        'gris':'#4F4F4F',
        'grisclaro':'#BDBDBD',
      },
    },
  },
  plugins: [],
}

