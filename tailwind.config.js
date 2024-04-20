/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        cloud:'#000000',
        cloudNav:'#071518',
        cloudbg2:'#F6F7F5',
        cloud1:'#0c2126',
        cloud2:'#b8bebf',
        cloud3:'#5b5b5b',
        cloud4:'#b9b9b9',
        cloud5:'#122930',
        cloudBtn:'#edff6c',
        cloudBtnText:'#83911C',
        cloudBtn2:'#F6F7F5',
        cloud6:'#EDFF6C'

      },
    },
  },
  plugins: [require('preline/plugin'),],
};
