import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes : {
        'scaleUp' : {
          '0%' : { transform : 'scale(1.0)'},
          '100%' : { transform : 'scale(25.0)' }
        },
        'moveRight' : {
          '0%' : { transform : 'translateX(0px)'},
          '100%' : { transform : 'translateX(20px)'}
        },
        'moveLeft' : {
          '0%' : { transform : 'translateX(0px)'},
          '100%' : { transform : 'translateX(-20px)'}
        }
      },
      animation : {
        "scaleUp" : "scaleUp 2s ease-in-out forwards",
        "moveRight" : "moveRight 2s ease-in-out forwards",
        "moveLeft" : "moveLeft 2s ease-in-out forwards"
      }
    },
  },
  plugins: [],
};
export default config;
