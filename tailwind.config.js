/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        cloud:'#5677E1',
        cloudNav:'#071518',
        cloudbg2:'#F6F7F5',
        cloud1:'#0c2126',
        cloud2:'#b8bebf',
        cloud3:'#5b5b5b',
        cloud4:'#b9b9b9',
        cloud5:'#122930',
        cloudBtn:'#5677E1',
        cloudBtnText:'#83911C',
        cloudBtn2:'#F6F7F5',
        cloud6:'#EDFF6C',
        cloud7:'#F3F4F2',
        cloud8:'#6465F1',
        cloud9:'#EAEAEA',
        cloudText:'#fffff'
        

      },
    },
  },
};
